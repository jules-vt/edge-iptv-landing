import type { Lang } from "@/lib/i18n";
import type { PageId } from "@/lib/landing/registry";

/**
 * Link label of each product page and tool. Kept apart from the page copy so
 * a client component (the article sidebar links) can import it without
 * shipping every page's text to the browser.
 */
export const NAV_LABELS: Record<PageId, Record<Lang, string>> = {
  m3u: {
    en: "M3U player for iPhone",
    fr: "Lecteur M3U pour iPhone",
    es: "Reproductor M3U para iPhone",
    pt: "Player M3U para iPhone",
    de: "M3U-Player fürs iPhone",
    ar: "مشغل M3U للآيفون",
    it: "Lettore M3U per iPhone",
  },
  xtream: {
    en: "Xtream Codes player for iPhone",
    fr: "Lecteur Xtream Codes pour iPhone",
    es: "Reproductor Xtream Codes para iPhone",
    pt: "Player Xtream Codes para iPhone",
    de: "Xtream-Codes-Player fürs iPhone",
    ar: "مشغل Xtream Codes للآيفون",
    it: "Lettore Xtream Codes per iPhone",
  },
  ipad: {
    en: "IPTV player for iPad",
    fr: "Lecteur IPTV pour iPad",
    es: "Reproductor IPTV para iPad",
    pt: "Player IPTV para iPad",
    de: "IPTV-Player fürs iPad",
    ar: "مشغل IPTV للآيباد",
    it: "Lettore IPTV per iPad",
  },
  m3uChecker: {
    en: "M3U playlist checker",
    fr: "Vérificateur de playlist M3U",
    es: "Comprobador de listas M3U",
    pt: "Verificador de listas M3U",
    de: "M3U-Playlist-Checker",
    ar: "فاحص قوائم M3U",
    it: "Verifica playlist M3U",
  },
};
