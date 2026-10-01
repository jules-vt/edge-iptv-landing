import { MetadataRoute } from "next";
import { SITE } from "@/lib/seo-config";
import { LANGS, LEGAL_LANGS, homePath, localePath } from "@/lib/i18n";
import { blogPosts, getPostsByLang, postPath } from "@/lib/blog-posts";
import { LANDING_IDS, landingPath } from "@/lib/landing/registry";

export const dynamic = "force-static";

// ─── Dates ──────────────────────────────────────────────────────────────────
// Real modification dates, not `new Date()`: a timestamp that changes on every
// build makes Google ignore the signal entirely.
const DATES = {
  launch: new Date("2025-01-01"),
  v1: new Date("2026-01-12"),
  lastSeoUpdate: new Date("2026-10-01"),
} as const;

const u = (path: string) => `${SITE.url}${path}`;

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

function entry(
  path: string,
  priority: number,
  freq: Freq,
  lastModified: Date = DATES.lastSeoUpdate,
): MetadataRoute.Sitemap[number] {
  return { url: u(path), lastModified, changeFrequency: freq, priority };
}

/**
 * Derived from the language list and the post data rather than hand-listed.
 *
 * The previous version enumerated every article URL by hand in four blocks.
 * That is the same duplication that, elsewhere in this codebase, produced
 * hreflang pointing at pages which did not exist — and a sitemap listing a
 * stale URL is worse than one that omits it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const homePages = LANGS.map((lang) => entry(homePath(lang), 1.0, "weekly"));

  // Blog index only where that language actually has articles.
  const blogIndexes = LANGS.filter((lang) => getPostsByLang(lang).length > 0).map(
    (lang) => entry(localePath(lang, "/blog"), 0.9, "weekly"),
  );

  const articles = blogPosts.map((post) => {
    // The install guide is the main entry point for new users.
    const priority = post.translationGroup === "install-guide" ? 0.95 : 0.85;
    const lastModified = post.date >= "2026-03-01" ? DATES.lastSeoUpdate : DATES.v1;
    return entry(postPath(post), priority, "monthly", lastModified);
  });

  const legalPages = LEGAL_LANGS.flatMap((lang) =>
    ["/privacy-policy", "/terms-of-use"].map((page) =>
      entry(localePath(lang, page), 0.3, "yearly", DATES.launch),
    ),
  );

  // Product pages, one per search intent, in every language.
  const landings = LANDING_IDS.flatMap((id) =>
    LANGS.map((lang) => entry(landingPath(id, lang), 0.9, "monthly")),
  );

  return [...homePages, ...landings, ...blogIndexes, ...articles, ...legalPages];
}
