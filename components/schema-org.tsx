import React from "react";
import { SITE } from "@/lib/seo-config";
import { type Lang, LANGS, LOCALES } from "@/lib/i18n";

interface SchemaOrgProps {
  lang?: Lang;
}

/**
 * Server component — renders JSON-LD schemas directly into the static HTML.
 *
 * ⚠️ Must stay a server component (no "use client"). The previous "use client"
 * + useEffect/isClient pattern caused these schemas to be absent from the
 * pre-rendered HTML, making them invisible to crawlers on first load.
 *
 * ⚠️ Never add aggregateRating/Review blocks here unless they are backed by a
 * real, user-submitted review system on the page. Self-assigned ratings are a
 * Google structured-data policy violation and risk a manual action.
 */

/**
 * Per-language schema strings.
 *
 * These used to be four-way ternaries that silently fell through to
 * Portuguese for any new language, and they described the app as "the leading
 * IPTV player brand" and "the #1 IPTV player" — claims nobody can check. What
 * is left states what the app does.
 */
const SCHEMA_TEXT: Record<Lang, { description: string; brand: string; org: string; home: string }> = {
  en: {
    description: "IPTV player for iPhone and iPad with M3U and Xtream support, a live TV guide, Chromecast, AirPlay and offline downloads.",
    brand: "EDGE IPTV makes an IPTV player for iOS, built around fast setup and native playback.",
    org: "Maker of the EDGE IPTV player for iPhone and iPad.",
    home: "Home",
  },
  fr: {
    description: "Lecteur IPTV pour iPhone et iPad avec prise en charge M3U et Xtream, guide TV, Chromecast, AirPlay et téléchargements hors ligne.",
    brand: "EDGE IPTV édite un lecteur IPTV pour iOS, conçu autour d'une configuration rapide et d'une lecture native.",
    org: "Éditeur du lecteur EDGE IPTV pour iPhone et iPad.",
    home: "Accueil",
  },
  es: {
    description: "Reproductor IPTV para iPhone y iPad con soporte M3U y Xtream, guía de TV, Chromecast, AirPlay y descargas sin conexión.",
    brand: "EDGE IPTV desarrolla un reproductor IPTV para iOS, centrado en una configuración rápida y una reproducción nativa.",
    org: "Desarrollador del reproductor EDGE IPTV para iPhone y iPad.",
    home: "Inicio",
  },
  pt: {
    description: "Reprodutor IPTV para iPhone e iPad com suporte a M3U e Xtream, guia de TV, Chromecast, AirPlay e downloads offline.",
    brand: "A EDGE IPTV desenvolve um reprodutor IPTV para iOS, focado em configuração rápida e reprodução nativa.",
    org: "Criadora do reprodutor EDGE IPTV para iPhone e iPad.",
    home: "Início",
  },
  de: {
    description: "IPTV-Player für iPhone und iPad mit M3U- und Xtream-Unterstützung, Programmübersicht, Chromecast, AirPlay und Offline-Downloads.",
    brand: "EDGE IPTV entwickelt einen IPTV-Player für iOS, ausgelegt auf schnelle Einrichtung und native Wiedergabe.",
    org: "Entwickler des EDGE IPTV Players für iPhone und iPad.",
    home: "Startseite",
  },
  ar: {
    description: "مشغّل IPTV للآيفون والآيباد يدعم M3U و Xtream، مع دليل برامج و Chromecast و AirPlay والتنزيل للمشاهدة دون إنترنت.",
    brand: "تطوّر EDGE IPTV مشغّل IPTV لنظام iOS، مبنيًا على إعداد سريع وتشغيل أصلي.",
    org: "مطوّر مشغّل EDGE IPTV للآيفون والآيباد.",
    home: "الرئيسية",
  },
  it: {
    description: "Lettore IPTV per iPhone e iPad con supporto M3U e Xtream, guida TV, Chromecast, AirPlay e download offline.",
    brand: "EDGE IPTV sviluppa un lettore IPTV per iOS, pensato per una configurazione rapida e una riproduzione nativa.",
    org: "Sviluppatore del lettore EDGE IPTV per iPhone e iPad.",
    home: "Home",
  },
};

export function SchemaOrg({ lang = "en" }: SchemaOrgProps) {
  const text = SCHEMA_TEXT[lang];
  const websiteSchema = {
    "@type": "SoftwareApplication",
    name: "EDGE IPTV",
    alternateName: ["EDGE IPTV Player", "EDGE IPTV App", "EDGE IPTV iOS"],
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS 17.0 or later",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Organization",
      name: "EDGE IPTV",
      url: "https://edge-iptv.app",
    },
    brand: {
      "@type": "Brand",
      name: "EDGE IPTV",
      logo: "https://edge-iptv.app/images/icon.png",
      url: "https://edge-iptv.app",
      description: text.brand,
    },
    description: text.description,
    image: "https://edge-iptv.app/images/icon.png",
    url:
      lang === "en" ? "https://edge-iptv.app" : `https://edge-iptv.app/${lang}`,
    installUrl: SITE.appStoreUrl,
    downloadUrl: SITE.appStoreUrl,
    screenshot: [
      "https://edge-iptv.app/images/language-selection.jpeg",
      "https://edge-iptv.app/images/series-view.png",
      "https://edge-iptv.app/images/movie-details.png",
    ],
    softwareVersion: "1.2",
    datePublished: "2026-01-05",
    dateModified: "2026-10-01",
    inLanguage: LOCALES[lang].htmlLang,
    featureList: [
      "Xtream Codes Support",
      "Chromecast Integration",
      "Offline Viewing",
      "Multilingual Interface",
      "Favorites Management",
      "EPG Support",
    ],
  };

  // Separate Brand Schema for better brand recognition
  const brandSchema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "EDGE IPTV",
    alternateName: ["EDGE IPTV Player", "EDGE IPTV App"],
    logo: {
      "@type": "ImageObject",
      url: "https://edge-iptv.app/images/icon.png",
      width: "512",
      height: "512",
    },
    url: "https://edge-iptv.app",
    description: text.brand,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EDGE IPTV",
    url: "https://edge-iptv.app",
    logo: {
      "@type": "ImageObject",
      url: "https://edge-iptv.app/images/icon.png",
      width: "512",
      height: "512",
    },
    sameAs: [],
    description: text.org,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: LANGS.map((l) => LOCALES[l].label),
    },
  };

  const localeRoot =
    lang === "en" ? "https://edge-iptv.app" : `https://edge-iptv.app/${lang}`;

  const websiteSchemaGeneral = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EDGE IPTV",
    url: localeRoot,
    // No SearchAction: the blog has no search, so the template pointed at a
    // query string nothing reads.
    inLanguage: LOCALES[lang].htmlLang,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchemaGeneral),
        }}
      />
    </>
  );
}
