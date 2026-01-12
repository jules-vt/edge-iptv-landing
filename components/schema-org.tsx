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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": lang === 'en' ? [
      {
        "@type": "Question",
        "name": "What is IPTV and how does it work on iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IPTV (Internet Protocol Television) streams TV content over the internet instead of traditional cable or satellite. EDGE IPTV is a player app that connects to your IPTV service provider using Xtream codes, allowing you to watch live TV, movies, and series on your iPhone or iPad."
        }
      },
      {
        "@type": "Question",
        "name": "Is EDGE IPTV free to download?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, EDGE IPTV is completely free to download and use. However, you'll need an active IPTV subscription from a service provider to access content. The app itself doesn't provide any content."
        }
      },
      {
        "@type": "Question",
        "name": "Does EDGE IPTV support Chromecast?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! EDGE IPTV features full Chromecast integration. You can cast your favorite movies, series, and live TV channels directly to your big screen TV with a single tap."
        }
      },
      {
        "@type": "Question",
        "name": "Can I watch content offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. EDGE IPTV allows you to download movies and series to your device for offline viewing. Watch your content anywhere, anytime, even without an internet connection."
        }
      },
      {
        "@type": "Question",
        "name": "What iOS version is required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EDGE IPTV requires iOS 12.0 or later and is compatible with iPhone and iPad. It's optimized for the latest devices including iPhone 15 Pro and iPad Pro."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data and privacy protected?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We respect your privacy. Only anonymous global analytics are collected to improve the app. All your content and processing happen locally on your device. We never access your IPTV credentials or viewing history."
        }
      }
    ] : [
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'IPTV et comment ça fonctionne sur iPhone ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'IPTV (Internet Protocol Television) diffuse du contenu télévisé via Internet au lieu du câble ou satellite traditionnel. EDGE IPTV est une application lecteur qui se connecte à votre fournisseur de service IPTV en utilisant les codes Xtream, vous permettant de regarder la télé en direct, films et séries sur votre iPhone ou iPad."
        }
      },
      {
        "@type": "Question",
        "name": "EDGE IPTV est-il gratuit à télécharger ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, EDGE IPTV est entièrement gratuit à télécharger et utiliser. Cependant, vous aurez besoin d'un abonnement IPTV actif auprès d'un fournisseur pour accéder au contenu. L'application elle-même ne fournit aucun contenu."
        }
      },
      {
        "@type": "Question",
        "name": "EDGE IPTV supporte-t-il Chromecast ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui ! EDGE IPTV intègre le support complet de Chromecast. Vous pouvez diffuser vos films, séries et chaînes TV en direct préférés directement sur votre grand écran TV en un seul clic."
        }
      },
      {
        "@type": "Question",
        "name": "Puis-je regarder du contenu hors ligne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument. EDGE IPTV vous permet de télécharger des films et séries sur votre appareil pour un visionnage hors ligne. Regardez votre contenu n'importe où, n'importe quand, même sans connexion Internet."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle version iOS est requise ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EDGE IPTV nécessite iOS 12.0 ou ultérieur et est compatible avec iPhone et iPad. Il est optimisé pour les derniers appareils incluant iPhone 15 Pro et iPad Pro."
        }
      },
      {
        "@type": "Question",
        "name": "Mes données et ma vie privée sont-elles protégées ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Nous respectons votre vie privée. Seules des analyses globales anonymes sont collectées pour améliorer l'application. Tout votre contenu et traitement se fait localement sur votre appareil. Nous n'accédons jamais à vos identifiants IPTV ou historique de visionnage."
        }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchemaGeneral) }}
      />
    </>
  );
}
