import { type Lang, LANGS, LOCALES } from "@/lib/i18n";

/**
 * Centralized SEO configuration for EDGE IPTV.
 *
 * Single source of truth for URLs, images, and shared metadata values.
 * Import from here instead of hard-coding strings across pages.
 */

export const SITE = {
  url: "https://edge-iptv.app",
  name: "EDGE IPTV",
  appStoreUrl:
    "https://apps.apple.com/ca/app/edge-iptv-m3u-xtream/id6812893793",
  defaultImage: "https://edge-iptv.app/images/iphone-series-3d.png",
  twitterHandle: "@edgeiptv",
} as const;

/** Canonical URL helpers */
export const url = (path: string) =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Alternate language links for a given set of localized paths.
 * Pass `undefined` for locales that don't have a translation.
 *
 * `current` must name the language of the page being rendered. The canonical
 * has to point at that page and not at the English one, otherwise every
 * localised page tells Google it is a duplicate of its English counterpart.
 */
export function buildAlternates(
  paths: Partial<Record<Lang, string>>,
  current: Lang = "en",
) {
  const languages: Record<string, string> = {};
  for (const lang of LANGS) {
    const path = paths[lang];
    if (path) languages[LOCALES[lang].htmlLang] = url(path);
  }
  languages["x-default"] = url(paths.en ?? "/");

  return {
    canonical: url(paths[current] ?? paths.en ?? "/"),
    languages,
  };
}

/**
 * Shared Open Graph defaults.
 * Spread this and override only the page-specific fields.
 */
export const defaultOG = {
  siteName: SITE.name,
  locale: "en_US",
  // Mutable array — not `as const` — so it stays assignable to Next.js OGImage[].
  images: [SITE.defaultImage] as string[],
};

/**
 * Shared Twitter card defaults.
 */
export const defaultTwitter = {
  card: "summary_large_image" as const,
  images: [SITE.defaultImage] as string[],
};

/**
 * Schema.org Organization block reused across multiple schemas.
 */
export const schemaPublisher = {
  "@type": "Organization",
  name: SITE.name,
  logo: {
    "@type": "ImageObject",
    url: url("/images/icon.png"),
  },
} as const;
