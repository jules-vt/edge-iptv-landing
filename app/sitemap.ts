import { MetadataRoute } from "next";
import { SITE } from "@/lib/seo-config";

export const dynamic = "force-static";

// ─── Dates ──────────────────────────────────────────────────────────────────
// Use real modification dates instead of `new Date()`.
// Sending `new Date()` on every build makes Google ignore the signal entirely.
const DATES = {
  launch: new Date("2025-01-01"),
  v1: new Date("2026-01-12"),
  lastSeoUpdate: new Date("2026-03-11"),
} as const;

// ─── Locales ─────────────────────────────────────────────────────────────────
const LOCALES = ["", "/fr", "/es", "/pt"] as const;

// Shorthand: build a full URL from a path
const u = (path: string) => `${SITE.url}${path}`;

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

function entry(
  path: string,
  priority: number,
  freq: Freq,
  lastModified = DATES.lastSeoUpdate,
): MetadataRoute.Sitemap[number] {
  return { url: u(path), lastModified, changeFrequency: freq, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ── 1. Home pages (all locales) ───────────────────────────────────────────
  const homePages = LOCALES.map((locale) =>
    entry(locale || "/", 1.0, "weekly", DATES.lastSeoUpdate),
  );

  // ── 2. Installation guides (all locales) ─────────────────────────────────
  const installSlugs: Record<string, string> = {
    "": "/how-to-install-iptv-iphone-ipad",
    "/fr": "/fr/comment-installer-iptv-iphone-ipad",
    "/es": "/es/como-instalar-iptv-iphone-ipad",
    "/pt": "/pt/como-instalar-iptv-iphone-ipad",
  };
  const installPages = LOCALES.map((locale) =>
    entry(installSlugs[locale], 0.95, "monthly", DATES.lastSeoUpdate),
  );

  // ── 3. Blog index pages ───────────────────────────────────────────────────
  const blogIndexes = LOCALES.map((locale) =>
    entry(`${locale}/blog`, 0.9, "weekly", DATES.lastSeoUpdate),
  );

type ArticleTuple = [path: string, priority: number, lastModified: Date];

  // ── 4. English blog articles ──────────────────────────────────────────────
  const enArticles: ArticleTuple[] = [
    ['/blog/best-iptv-app-for-iphone',       0.95, DATES.lastSeoUpdate],
    ['/blog/best-iptv-player-ios-2026',      0.90, DATES.lastSeoUpdate],
    ['/blog/m3u-playlist-setup-guide',       0.90, DATES.lastSeoUpdate],
    ['/blog/xtream-codes-setup-guide',       0.85, DATES.v1],
    ['/blog/chromecast-iptv-streaming-guide', 0.85, DATES.v1],
    ['/blog/iptv-buffering-fix-guide',       0.85, DATES.lastSeoUpdate],
  ];

  // ── 5. French blog articles ───────────────────────────────────────────────
  const frArticles: ArticleTuple[] = [
    ["/fr/blog/meilleur-lecteur-iptv-ios-2026",   0.95, DATES.lastSeoUpdate],
    ["/fr/blog/configurer-playlist-m3u-guide",    0.90, DATES.lastSeoUpdate],
    ["/fr/blog/configurer-codes-xtream-guide",    0.85, DATES.v1],
    ["/fr/blog/diffuser-iptv-chromecast-guide",   0.85, DATES.v1],
    ["/fr/blog/resoudre-buffering-iptv-guide",    0.85, DATES.lastSeoUpdate],
  ];

  // ── 6. Spanish blog articles ──────────────────────────────────────────────
  const esArticles: ArticleTuple[] = [
    ["/es/blog/mejor-reproductor-iptv-ios-2026",  0.95, DATES.v1],
    ["/es/blog/configurar-codigos-xtream-guia",   0.85, DATES.v1],
    ["/es/blog/configurar-lista-m3u-guia",        0.85, DATES.v1],
    ["/es/blog/guia-streaming-iptv-chromecast",   0.85, DATES.v1],
    ["/es/blog/solucionar-buffering-iptv-guia",   0.85, DATES.v1],
  ];

  // ── 7. Portuguese blog articles ───────────────────────────────────────────
  const ptArticles: ArticleTuple[] = [
    ["/pt/blog/melhor-reprodutor-iptv-ios-2026",  0.95, DATES.v1],
    ["/pt/blog/configurar-codigos-xtream-pt",     0.85, DATES.v1],
    ["/pt/blog/configurar-lista-m3u-pt",          0.85, DATES.v1],
    ["/pt/blog/guia-streaming-iptv-chromecast-pt", 0.85, DATES.v1],
    ["/pt/blog/resolver-buffering-iptv-guia",     0.85, DATES.v1],
  ];

  const articles = [
    ...enArticles,
    ...frArticles,
    ...esArticles,
    ...ptArticles,
  ].map(([path, priority, date]) => entry(path, priority, "monthly", date));

  // ── 8. Legal pages ─────────────────────────────────────────────────────────
  const legalPaths = [
    "/privacy-policy",
    "/terms-of-use",
    "/fr/privacy-policy",
    "/fr/terms-of-use",
    "/es/privacy-policy",
    "/es/terms-of-use",
    "/pt/privacy-policy",
    "/pt/terms-of-use",
  ];
  const legalPages = legalPaths.map((path) =>
    entry(path, 0.3, "yearly", DATES.launch),
  );

  return [
    ...homePages,
    ...installPages,
    ...blogIndexes,
    ...articles,
    ...legalPages,
  ];
}
