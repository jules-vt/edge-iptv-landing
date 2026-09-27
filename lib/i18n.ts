/**
 * Languages the site is published in.
 *
 * Single source of truth: the switcher, the sitemap, hreflang, the blog and
 * every copy dictionary read the list from here. Before this existed, each of
 * those kept its own hardcoded list and they drifted — that is what sent
 * Spanish and Portuguese readers to English URLs that 404ed.
 *
 * Adding a language means adding it here, then filling the copy dictionaries;
 * TypeScript reports every dictionary that is still missing it.
 */
export type Lang = "en" | "fr" | "es" | "pt" | "de" | "ar" | "it";

export const LANGS: Lang[] = ["en", "fr", "es", "pt", "de", "ar", "it"];

export interface LocaleInfo {
  /** Endonym, shown in the language switcher. */
  label: string;
  flag: string;
  /** BCP 47 tag for <html lang> and Open Graph. */
  htmlLang: string;
  ogLocale: string;
  /** Writing direction. Arabic is the only right-to-left locale here. */
  dir: "ltr" | "rtl";
}

export const LOCALES: Record<Lang, LocaleInfo> = {
  en: { label: "English", flag: "🇺🇸", htmlLang: "en", ogLocale: "en_US", dir: "ltr" },
  fr: { label: "Français", flag: "🇫🇷", htmlLang: "fr", ogLocale: "fr_FR", dir: "ltr" },
  es: { label: "Español", flag: "🇪🇸", htmlLang: "es", ogLocale: "es_ES", dir: "ltr" },
  pt: { label: "Português", flag: "🇵🇹", htmlLang: "pt", ogLocale: "pt_BR", dir: "ltr" },
  de: { label: "Deutsch", flag: "🇩🇪", htmlLang: "de", ogLocale: "de_DE", dir: "ltr" },
  ar: { label: "العربية", flag: "🇸🇦", htmlLang: "ar", ogLocale: "ar_AR", dir: "rtl" },
  it: { label: "Italiano", flag: "🇮🇹", htmlLang: "it", ogLocale: "it_IT", dir: "ltr" },
};

/** Root path of a language: "/" for English, "/de" for the rest. */
export function homePath(lang: Lang): string {
  return lang === "en" ? "/" : `/${lang}`;
}

/** Prefix a site-relative path with the language segment. */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "en" ? clean : `/${lang}${clean}`;
}

export function isRtl(lang: Lang): boolean {
  return LOCALES[lang].dir === "rtl";
}

/**
 * Languages whose legal pages are actually translated.
 *
 * The privacy policy and terms are legal texts, not marketing copy, so they
 * are not machine-translated along with the rest of the site. Linking to a
 * localised URL that does not exist would 404, so `legalPath` falls back to
 * the English page until a real translation lands.
 */
export const LEGAL_LANGS: Lang[] = ["en", "fr", "es", "pt"];

export function legalPath(lang: Lang, page: "privacy-policy" | "terms-of-use"): string {
  return LEGAL_LANGS.includes(lang) ? localePath(lang, `/${page}`) : `/${page}`;
}
