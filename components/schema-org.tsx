import React from 'react';

interface SchemaOrgProps {
  lang?: 'en' | 'fr';
}

export function SchemaOrg({ lang = 'en' }: SchemaOrgProps) {
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
      "ratingValue": "4.8",
      "ratingCount": "1250",
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
      : "Le lecteur IPTV #1 pour iPhone et iPad. Avec support Chromecast, visionnage hors ligne et configuration rapide des codes Xtream.",
    "image": "https://edge-iptv.app/images/icon.png",
    "url": lang === 'en' ? "https://edge-iptv.app" : "https://edge-iptv.app/fr",
    "installUrl": "https://apps.apple.com/ca/app/edge-iptv/id6745966143",
    "screenshot": [
      "https://edge-iptv.app/images/language-selection.jpeg",
      "https://edge-iptv.app/images/series-view.png",
      "https://edge-iptv.app/images/movie-details.png"
    ],
    "softwareVersion": "1.0",
    "releaseNotes": "First public release with full IPTV streaming capabilities",
    "datePublished": "2025-01-01",
    "inLanguage": lang === 'en' ? "en-US" : "fr-FR",
    "featureList": [
      "Xtream Codes Support",
      "Chromecast Integration",
      "Offline Viewing",
      "Multilingual Interface",
      "Favorites Management",
      "EPG Support"
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EDGE IPTV",
    "url": "https://edge-iptv.app",
    "logo": "https://edge-iptv.app/images/icon.png",
    "sameAs": []
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
    </>
  );
}
