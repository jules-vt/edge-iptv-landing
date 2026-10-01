/**
 * M3U playlist analysis for the free checker tool. Runs entirely in the
 * browser: a playlist URL usually embeds the user's IPTV credentials, so
 * nothing here is ever sent anywhere.
 *
 * The live / movie / episode rules mirror the app's own classifier
 * (EdgeNetworking/M3U/M3UClassifier.swift), so what the checker reports is
 * what EDGE IPTV will show.
 */

export type EntryKind = "live" | "movie" | "episode";

export interface M3UEntry {
  name: string;
  url: string;
  group: string | null;
  tvgId: string | null;
  logo: string | null;
  kind: EntryKind;
}

export interface XtreamLogin {
  server: string;
  username: string;
}

export interface M3UReport {
  hasHeader: boolean;
  guideUrls: string[];
  entries: M3UEntry[];
  counts: Record<EntryKind, number>;
  groups: { name: string; count: number }[];
  /** #EXTINF lines not followed by a stream address. */
  orphanInfoLines: number;
  duplicateUrls: number;
  missingTvgId: number;
  missingLogo: number;
  missingGroup: number;
  /** Streams over plain http, which some networks and devices block. */
  insecureStreams: number;
  /** Addresses that are not http(s), rtmp, rtsp or udp. */
  invalidUrls: number;
  /** Credentials found in a get.php URL, password left out on purpose. */
  xtream: XtreamLogin | null;
}

const VIDEO_EXTENSIONS = new Set([
  "mkv", "mp4", "avi", "m4v", "mov", "wmv", "flv", "webm", "mpg", "mpeg", "divx",
]);

const EPISODE_PATTERNS = [/s(\d{1,2})\s?e(\d{1,3})/i, /\b(\d{1,2})x(\d{2,3})\b/i];

function attribute(line: string, key: string): string | null {
  const match = line.match(new RegExp(`${key}="([^"]*)"`, "i"));
  return match && match[1] ? match[1] : null;
}

function classify(name: string, url: string): EntryKind {
  let segments: string[] = [];
  let extension = "";
  try {
    const path = new URL(url).pathname.toLowerCase();
    segments = path.split("/");
    extension = path.split(".").pop() ?? "";
  } catch {
    // Not a parseable URL: fall through to the name and extension checks.
  }
  if (segments.includes("live")) return "live";
  if (segments.includes("movie")) return "movie";
  if (segments.includes("series")) return "episode";
  if (EPISODE_PATTERNS.some((pattern) => pattern.test(name))) return "episode";
  if (VIDEO_EXTENSIONS.has(extension)) return "movie";
  return "live";
}

/** Credentials of an Xtream panel hiding behind an M3U link, if any. */
export function detectXtream(rawUrl: string): XtreamLogin | null {
  try {
    const url = new URL(rawUrl.trim());
    if (!url.pathname.includes("get.php")) return null;
    const username = url.searchParams.get("username");
    if (!username || !url.searchParams.get("password")) return null;
    return { server: `${url.protocol}//${url.host}`, username };
  } catch {
    return null;
  }
}

export function analyzeM3U(text: string, sourceUrl?: string): M3UReport {
  const lines = text.split(/\r?\n/);
  const entries: M3UEntry[] = [];
  const guideUrls: string[] = [];
  let hasHeader = false;
  let orphanInfoLines = 0;
  let pending: string | null = null;
  let pendingGroup: string | null = null;

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    if (line.toUpperCase().startsWith("#EXTM3U")) {
      hasHeader = true;
      for (const key of ["url-tvg", "x-tvg-url"]) {
        const value = attribute(line, key);
        if (value) {
          for (const guide of value.split(",")) {
            const trimmed = guide.trim();
            if (trimmed && !guideUrls.includes(trimmed)) guideUrls.push(trimmed);
          }
        }
      }
      continue;
    }

    if (line.toUpperCase().startsWith("#EXTINF")) {
      if (pending !== null) orphanInfoLines++;
      pending = line;
      pendingGroup = null;
      continue;
    }

    // #EXTGRP is an alternative way of naming the group.
    if (line.toUpperCase().startsWith("#EXTGRP:")) {
      pendingGroup = line.slice("#EXTGRP:".length).trim() || null;
      continue;
    }

    if (line.startsWith("#")) continue;

    if (pending !== null) {
      // The name follows the first comma after the last attribute: names
      // themselves may contain commas ("News, Sport").
      const comma = pending.indexOf(",", pending.lastIndexOf('"') + 1);
      const name = (comma >= 0 ? pending.slice(comma + 1) : "").trim() || line;
      entries.push({
        name,
        url: line,
        group: attribute(pending, "group-title") ?? pendingGroup,
        tvgId: attribute(pending, "tvg-id"),
        logo: attribute(pending, "tvg-logo"),
        kind: classify(name, line),
      });
      pending = null;
      pendingGroup = null;
    }
  }
  if (pending !== null) orphanInfoLines++;

  const counts: Record<EntryKind, number> = { live: 0, movie: 0, episode: 0 };
  const groupCounts = new Map<string, number>();
  const seen = new Set<string>();
  let duplicateUrls = 0;
  let missingTvgId = 0;
  let missingLogo = 0;
  let missingGroup = 0;
  let insecureStreams = 0;
  let invalidUrls = 0;

  for (const entry of entries) {
    counts[entry.kind]++;
    if (entry.group) groupCounts.set(entry.group, (groupCounts.get(entry.group) ?? 0) + 1);
    else missingGroup++;
    if (seen.has(entry.url)) duplicateUrls++;
    else seen.add(entry.url);
    if (entry.kind === "live" && !entry.tvgId) missingTvgId++;
    if (!entry.logo) missingLogo++;
    const scheme = entry.url.split(":")[0].toLowerCase();
    if (scheme === "http") insecureStreams++;
    else if (!["https", "rtmp", "rtsp", "udp"].includes(scheme)) invalidUrls++;
  }

  const groups = [...groupCounts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return {
    hasHeader,
    guideUrls,
    entries,
    counts,
    groups,
    orphanInfoLines,
    duplicateUrls,
    missingTvgId,
    missingLogo,
    missingGroup,
    insecureStreams,
    invalidUrls,
    xtream: sourceUrl ? detectXtream(sourceUrl) : null,
  };
}
