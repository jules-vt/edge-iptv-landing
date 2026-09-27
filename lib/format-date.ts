import type { Lang } from "@/lib/blog-posts";

const LOCALES: Record<Lang, string> = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES",
  pt: "pt-BR",
  de: "de-DE",
  ar: "ar",
  it: "it-IT",
};

/**
 * Localised article date.
 *
 * `timeZone: "UTC"` is required, not cosmetic: "2026-01-12" parses as UTC
 * midnight, so a build machine west of Greenwich renders it as the 11th.
 */
export function formatPostDate(date: string, lang: Lang): string {
  return new Date(date).toLocaleDateString(LOCALES[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
