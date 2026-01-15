import { Metadata } from 'next';
import { SchemaOrg } from '@/components/schema-org';

export const metadata: Metadata = {
  title: 'EDGE IPTV - Meilleur Lecteur IPTV iPhone & iPad 2026',
  description: 'Téléchargez EDGE IPTV : Le lecteur IPTV #1 pour iOS. Chromecast, hors ligne, codes Xtream. Configuration en 30 secondes. +10 000 téléchargements.',
  authors: [{ name: 'EDGE IPTV' }],
  keywords: [
    'lecteur IPTV iOS',
    'application IPTV iPhone',
    'IPTV iPad gratuit',
    'meilleur lecteur IPTV 2026',
    'codes Xtream iOS',
    'Chromecast IPTV',
    'IPTV hors ligne',
    'lecteur IPTV gratuit',
    'streaming IPTV iPhone',
    'EDGE IPTV'
  ],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://edge-iptv.app/fr/',
    languages: {
      'en': 'https://edge-iptv.app/',
      'fr': 'https://edge-iptv.app/fr/',
      'es': 'https://edge-iptv.app/es/',
      'pt': 'https://edge-iptv.app/pt/',
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
    <>
      <SchemaOrg lang="fr" />
      {children}
    </>
  );
}
