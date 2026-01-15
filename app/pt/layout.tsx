import { Metadata } from 'next';
import { SchemaOrg } from '@/components/schema-org';

export const metadata: Metadata = {
  title: 'EDGE IPTV - Melhor Player IPTV iPhone & iPad 2026',
  description: 'Baixe EDGE IPTV: O player IPTV #1 para iOS. Chromecast, offline, códigos Xtream. Configuração em 30 segundos. +10.000 downloads.',
  authors: [{ name: 'EDGE IPTV' }],
  keywords: [
    'player IPTV iOS',
    'aplicativo IPTV iPhone',
    'IPTV iPad grátis',
    'melhor player IPTV 2026',
    'códigos Xtream iOS',
    'Chromecast IPTV',
    'IPTV offline',
    'player IPTV grátis',
    'streaming IPTV iPhone',
    'EDGE IPTV'
  ],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://edge-iptv.app/pt/',
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
    url: 'https://edge-iptv.app/pt/',
    title: 'EDGE IPTV - Melhor Player IPTV iPhone & iPad 2026',
    description: 'Baixe EDGE IPTV: O player IPTV #1 para iOS. Chromecast, offline, códigos Xtream. Configuração em 30 segundos.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDGE IPTV - Melhor Player IPTV iPhone & iPad 2026',
    description: 'O player IPTV #1 para iOS. Chromecast, offline, configuração rápida.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
  },
  other: {
    'apple-itunes-app': 'app-id=6745966143',
  }
};

export default function PtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaOrg lang="pt" />
      {children}
    </>
  );
}
