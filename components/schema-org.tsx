'use client';

import React from 'react';

interface SchemaOrgProps {
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

export function SchemaOrg({ lang = 'en' }: SchemaOrgProps) {
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
    "name": "EDGE IPTV",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "iOS 12.0 or later",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "url": "https://edge-iptv.app"
    },
    "description": lang === 'en' 
      ? "The #1 IPTV player for iPhone and iPad. Features Chromecast support, offline viewing, and fast Xtream codes setup."
      : lang === 'fr' 
        ? "Le lecteur IPTV #1 pour iPhone et iPad. Avec support Chromecast, visionnage hors ligne et configuration rapide des codes Xtream."
        : lang === 'es'
          ? "El reproductor IPTV #1 para iPhone y iPad. Con soporte Chromecast, visualización offline y configuración rápida de códigos Xtream."
          : "O player IPTV #1 para iPhone e iPad. Com suporte Chromecast, visualização offline e configuração rápida de códigos Xtream.",
    "image": "https://edge-iptv.app/images/icon.png",
    "url": lang === 'en' ? "https://edge-iptv.app" : `https://edge-iptv.app/${lang}`,
    "installUrl": "https://j-analytics.cloud/q/Z0m1Qmdtf",
    "downloadUrl": "https://j-analytics.cloud/q/Z0m1Qmdtf",
    "screenshot": [
      "https://edge-iptv.app/images/language-selection.jpeg",
      "https://edge-iptv.app/images/series-view.png",
      "https://edge-iptv.app/images/movie-details.png"
    ],
    "softwareVersion": "1.0",
    "releaseNotes": "First public release with full IPTV streaming capabilities",
    "datePublished": "2025-01-01",
    "dateModified": "2026-01-12",
    "inLanguage": lang === 'en' ? "en-US" : lang === 'fr' ? "fr-FR" : lang === 'es' ? "es-ES" : "pt-BR",
    "featureList": [
      "Xtream Codes Support",
      "Chromecast Integration",
      "Offline Viewing",
      "Multilingual Interface",
      "Favorites Management",
      "EPG Support"
    ],
    "keywords": lang === 'en'
      ? "IPTV, iPhone, iPad, Chromecast, streaming, Xtream codes, live TV"
      : lang === 'fr'
        ? "IPTV, iPhone, iPad, Chromecast, streaming, codes Xtream, télévision en direct"
        : lang === 'es'
          ? "IPTV, iPhone, iPad, Chromecast, streaming, códigos Xtream, TV en vivo"
          : "IPTV, iPhone, iPad, Chromecast, streaming, códigos Xtream, TV ao vivo"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EDGE IPTV",
    "url": "https://edge-iptv.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://edge-iptv.app/images/icon.png",
      "width": "512",
      "height": "512"
    },
    "sameAs": [],
    "description": lang === 'en'
      ? "Provider of the best IPTV player for iOS devices"
      : lang === 'fr'
        ? "Fournisseur du meilleur lecteur IPTV pour appareils iOS"
        : lang === 'es'
          ? "Proveedor del mejor reproductor IPTV para dispositivos iOS"
          : "Provedor do melhor player IPTV para dispositivos iOS",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English", "French", "Spanish", "Portuguese"]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": lang === 'en' ? "Home" : lang === 'fr' ? "Accueil" : lang === 'es' ? "Inicio" : "Início",
        "item": lang === 'en' ? "https://edge-iptv.app" : `https://edge-iptv.app/${lang}`
      }
    ]
  };

  const websiteSchemaGeneral = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EDGE IPTV",
    "url": lang === 'en' ? "https://edge-iptv.app" : "https://edge-iptv.app/fr",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": lang === 'en' 
          ? "https://edge-iptv.app/blog?search={search_term_string}"
          : "https://edge-iptv.app/fr/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": lang === 'en' ? "en-US" : "fr-FR"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaGeneral) }}
      />
    </>
  );
}
