"use client";

import React from "react";

interface SchemaOrgProps {
  lang?: "en" | "fr" | "es" | "pt";
}

export function SchemaOrg({ lang = "en" }: SchemaOrgProps) {
  // Use useEffect to only render on client to avoid hydration mismatch
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render on server to avoid hydration mismatch
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "EDGE IPTV",
    alternateName: ["EDGE IPTV Player", "EDGE IPTV App", "EDGE IPTV iOS"],
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS 12.0 or later",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1000",
      bestRating: "5",
      worstRating: "1",
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
    installUrl: "https://j-analytics.cloud/q/Z0m1Qmdtf",
    downloadUrl: "https://j-analytics.cloud/q/Z0m1Qmdtf",
    screenshot: [
      "https://edge-iptv.app/images/language-selection.jpeg",
      "https://edge-iptv.app/images/series-view.png",
      "https://edge-iptv.app/images/movie-details.png",
    ],
    softwareVersion: "1.0",
    releaseNotes: "First public release with full IPTV streaming capabilities",
    datePublished: "2025-01-01",
    dateModified: "2026-01-12",
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

  const websiteSchemaGeneral = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EDGE IPTV",
    url: lang === "en" ? "https://edge-iptv.app" : "https://edge-iptv.app/fr",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          lang === "en"
            ? "https://edge-iptv.app/blog?search={search_term_string}"
            : "https://edge-iptv.app/fr/blog?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: lang === "en" ? "en-US" : "fr-FR",
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "EDGE IPTV",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "iOS 12.0 or later",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "App Store Users",
    },
    reviewBody:
      lang === "en"
        ? "Best IPTV player for iOS. Fast setup with Xtream codes, reliable Chromecast casting, and smooth offline playback."
        : lang === "fr"
          ? "Meilleur lecteur IPTV pour iOS. Configuration rapide avec codes Xtream, diffusion Chromecast fiable et lecture hors ligne fluide."
          : lang === "es"
            ? "Mejor reproductor IPTV para iOS. Configuración rápida con códigos Xtream, transmisión Chromecast confiable y reproducción offline fluida."
            : "Melhor player IPTV para iOS. Configuração rápida com códigos Xtream, transmissão Chromecast confiável e reprodução offline suave.",
    datePublished: "2025-01-01",
    publisher: {
      "@type": "Organization",
      name: "EDGE IPTV",
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}
