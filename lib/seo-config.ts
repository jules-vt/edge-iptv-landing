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
    "https://apps.apple.com/app/edge-iptv/id6745966143",
  defaultImage: "https://edge-iptv.app/images/iphone-series-3d.png",
  twitterHandle: "@edgeiptv",
} as const;

/** Canonical URL helpers */
export const url = (path: string) =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

/**
 * Alternate language links for a given set of localized paths.
 * Pass `undefined` for locales that don't have a translation.
 */
export function buildAlternates(paths: {
  en?: string;
  fr?: string;
  es?: string;
  pt?: string;
}) {
  const languages: Record<string, string> = {};
  if (paths.en) languages["en"] = url(paths.en);
  if (paths.fr) languages["fr"] = url(paths.fr);
  if (paths.es) languages["es"] = url(paths.es);
  if (paths.pt) languages["pt"] = url(paths.pt);
  languages["x-default"] = url(paths.en ?? "/");

  return {
    canonical: url(paths.en ?? "/"),
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
