import { Metadata } from 'next';
import { SchemaOrg } from '@/components/schema-org';

export const metadata: Metadata = {
  title: 'EDGE IPTV - Meilleur Lecteur IPTV iPhone & iPad 2026',
  description: 'Téléchargez EDGE IPTV : Le lecteur IPTV #1 pour iOS. Chromecast, hors ligne, codes Xtream. Configuration en 30 secondes. +10 000 téléchargements.',
  authors: [{ name: 'EDGE IPTV' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://edge-iptv.app/fr/',
    languages: {
      'en': 'https://edge-iptv.app/',
      'fr': 'https://edge-iptv.app/fr/',
      'x-default': 'https://edge-iptv.app/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://edge-iptv.app/fr/',
    title: 'EDGE IPTV - Meilleur Lecteur IPTV iPhone & iPad 2026',
    description: 'Téléchargez EDGE IPTV : Le lecteur IPTV #1 pour iOS. Chromecast, hors ligne, codes Xtream. Configuration en 30 secondes.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDGE IPTV - Meilleur Lecteur IPTV iPhone & iPad 2026',
    description: 'Le lecteur IPTV #1 pour iOS. Chromecast, hors ligne, configuration rapide.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
  },
  other: {
    'apple-itunes-app': 'app-id=6745966143',
  }
};

export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <SchemaOrg lang="fr" />
      </head>
      <body className="antialiased min-h-screen bg-background font-sans">
        {children}
      </body>
    </html>
  );
}
