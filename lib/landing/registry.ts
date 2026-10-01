import { type Lang, LANGS, localePath } from "@/lib/i18n";

/**
 * Product pages aimed at one search intent each ("m3u player iphone",
 * "xtream codes iphone", "iptv player ipad").
 *
 * The home page cannot rank for all of them at once, and blog articles answer
 * a question rather than sell the app. These pages sit in between: what the
 * searcher needs, how EDGE IPTV does it, and the App Store button.
 *
 * Slugs are per language and live only here; the sitemap, hreflang and the
 * language switcher all read them from this table.
 */
export type LandingId = "m3u" | "xtream" | "ipad";

export const LANDING_IDS: LandingId[] = ["m3u", "xtream", "ipad"];

/** Landing pages plus the free tools, which share the same slug machinery. */
export type PageId = LandingId | "m3uChecker";

export const PAGE_IDS: PageId[] = [...LANDING_IDS, "m3uChecker"];

export const LANDING_SLUGS: Record<PageId, Record<Lang, string>> = {
  m3u: {
    en: "m3u-player-iphone",
    fr: "lecteur-m3u-iphone",
    es: "reproductor-m3u-iphone",
    pt: "player-m3u-iphone",
    de: "m3u-player-iphone",
    ar: "m3u-player-iphone",
    it: "lettore-m3u-iphone",
  },
  xtream: {
    en: "xtream-codes-player-iphone",
    fr: "lecteur-xtream-codes-iphone",
    es: "reproductor-xtream-codes-iphone",
    pt: "player-xtream-codes-iphone",
    de: "xtream-codes-player-iphone",
    ar: "xtream-codes-player-iphone",
    it: "lettore-xtream-codes-iphone",
  },
  ipad: {
    en: "iptv-player-ipad",
    fr: "lecteur-iptv-ipad",
    es: "reproductor-iptv-ipad",
    pt: "player-iptv-ipad",
    de: "iptv-player-ipad",
    ar: "iptv-player-ipad",
    it: "lettore-iptv-ipad",
  },
  m3uChecker: {
    en: "m3u-checker",
    fr: "verificateur-m3u",
    es: "comprobador-m3u",
    pt: "verificador-m3u",
    de: "m3u-checker",
    ar: "m3u-checker",
    it: "verifica-m3u",
  },
};

export function landingPath(id: PageId, lang: Lang): string {
  return localePath(lang, `/${LANDING_SLUGS[id][lang]}`);
}

/** Which landing page a root-level slug belongs to, if any. */
export function findLanding(slug: string, lang: Lang): PageId | undefined {
  return PAGE_IDS.find((id) => LANDING_SLUGS[id][lang] === slug);
}

/** hreflang cluster of a landing page: every language has it. */
export function landingAlternates(id: PageId, lang: Lang) {
  const base = "https://edge-iptv.app";
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l] = `${base}${landingPath(id, l)}`;
  languages["x-default"] = `${base}${landingPath(id, "en")}`;
  return { canonical: `${base}${landingPath(id, lang)}`, languages };
}
