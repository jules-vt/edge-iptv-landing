import { Metadata } from 'next';
import { SchemaOrg } from '@/components/schema-org';

export const metadata: Metadata = {
  title: 'EDGE IPTV - Mejor Reproductor IPTV iPhone & iPad 2026',
  description: 'Descarga EDGE IPTV: El reproductor IPTV #1 para iOS. Chromecast, sin conexión, códigos Xtream. Configuración en 30 segundos. +10,000 descargas.',
  authors: [{ name: 'EDGE IPTV' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://edge-iptv.app/es/',
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
    url: 'https://edge-iptv.app/es/',
    title: 'EDGE IPTV - Mejor Reproductor IPTV iPhone & iPad 2026',
    description: 'Descarga EDGE IPTV: El reproductor IPTV #1 para iOS. Chromecast, sin conexión, códigos Xtream. Configuración en 30 segundos.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDGE IPTV - Mejor Reproductor IPTV iPhone & iPad 2026',
    description: 'El reproductor IPTV #1 para iOS. Chromecast, sin conexión, configuración rápida.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
  },
  other: {
    'apple-itunes-app': 'app-id=6745966143',
  }
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaOrg lang="es" />
      {children}
    </>
  );
}
