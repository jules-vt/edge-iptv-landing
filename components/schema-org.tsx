import React from "react";
import { SITE } from "@/lib/seo-config";

interface SchemaOrgProps {
  lang?: "en" | "fr" | "es" | "pt";
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
export function SchemaOrg({ lang = "en" }: SchemaOrgProps) {
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
      description:
        lang === "en"
          ? "EDGE IPTV is the leading IPTV player brand for iOS devices, known for quality streaming and user-friendly design."
          : lang === "fr"
            ? "EDGE IPTV est la marque leader de lecteur IPTV pour appareils iOS, reconnue pour sa qualité de streaming et son design convivial."
            : lang === "es"
              ? "EDGE IPTV es la marca líder de reproductor IPTV para dispositivos iOS, conocida por su streaming de calidad y diseño amigable."
              : "EDGE IPTV é a marca líder de player IPTV para dispositivos iOS, conhecida por streaming de qualidade e design amigável.",
    },
    description:
      lang === "en"
        ? "EDGE IPTV - The #1 IPTV player for iPhone and iPad. Features Chromecast support, offline viewing, and fast Xtream codes setup."
        : lang === "fr"
          ? "EDGE IPTV - Le lecteur IPTV #1 pour iPhone et iPad. Avec support Chromecast, visionnage hors ligne et configuration rapide des codes Xtream."
          : lang === "es"
            ? "EDGE IPTV - El reproductor IPTV #1 para iPhone y iPad. Con soporte Chromecast, visualización offline y configuración rápida de códigos Xtream."
            : "EDGE IPTV - O player IPTV #1 para iPhone e iPad. Com suporte Chromecast, visualização offline e configuração rápida de códigos Xtream.",
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
    softwareVersion: "1.1",
    datePublished: "2026-01-05",
    dateModified: "2026-09-26",
    inLanguage:
      lang === "en"
        ? "en-US"
        : lang === "fr"
          ? "fr-FR"
          : lang === "es"
            ? "es-ES"
            : "pt-BR",
    featureList: [
      "Xtream Codes Support",
      "Chromecast Integration",
      "Offline Viewing",
      "Multilingual Interface",
      "Favorites Management",
      "EPG Support",
    ],
    keywords:
      lang === "en"
        ? "EDGE IPTV, edge iptv app, edge iptv player, IPTV, iPhone, iPad, Chromecast, streaming, Xtream codes, live TV"
        : lang === "fr"
          ? "EDGE IPTV, edge iptv app, IPTV, iPhone, iPad, Chromecast, streaming, codes Xtream, télévision en direct"
          : lang === "es"
            ? "EDGE IPTV, edge iptv app, IPTV, iPhone, iPad, Chromecast, streaming, códigos Xtream, TV en vivo"
            : "EDGE IPTV, edge iptv app, IPTV, iPhone, iPad, Chromecast, streaming, códigos Xtream, TV ao vivo",
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
    description:
      lang === "en"
        ? "EDGE IPTV is the premier brand for iOS IPTV streaming solutions, offering best-in-class features and performance."
        : lang === "fr"
          ? "EDGE IPTV est la marque premium pour les solutions de streaming IPTV iOS, offrant des fonctionnalités et performances de premier ordre."
          : lang === "es"
            ? "EDGE IPTV es la marca premium para soluciones de streaming IPTV iOS, ofreciendo características y rendimiento de primera clase."
            : "EDGE IPTV é a marca premium para soluções de streaming IPTV iOS, oferecendo recursos e desempenho de primeira classe.",
    slogan:
      lang === "en"
        ? "The #1 IPTV Player for iPhone & iPad"
        : lang === "fr"
          ? "Le lecteur IPTV #1 pour iPhone & iPad"
          : lang === "es"
            ? "El reproductor IPTV #1 para iPhone & iPad"
            : "O player IPTV #1 para iPhone & iPad",
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
    description:
      lang === "en"
        ? "Provider of the best IPTV player for iOS devices"
        : lang === "fr"
          ? "Fournisseur du meilleur lecteur IPTV pour appareils iOS"
          : lang === "es"
            ? "Proveedor del mejor reproductor IPTV para dispositivos iOS"
            : "Provedor do melhor player IPTV para dispositivos iOS",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "French", "Spanish", "Portuguese"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name:
          lang === "en"
            ? "Home"
            : lang === "fr"
              ? "Accueil"
              : lang === "es"
                ? "Inicio"
                : "Início",
        item:
          lang === "en"
            ? "https://edge-iptv.app"
            : `https://edge-iptv.app/${lang}`,
      },
    ],
  };

  const localeRoot =
    lang === "en" ? "https://edge-iptv.app" : `https://edge-iptv.app/${lang}`;

  const websiteSchemaGeneral = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EDGE IPTV",
    url: localeRoot,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${localeRoot}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage:
      lang === "en"
        ? "en-US"
        : lang === "fr"
          ? "fr-FR"
          : lang === "es"
            ? "es-ES"
            : "pt-BR",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
