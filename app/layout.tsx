import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EDGE IPTV - Your all-in-one IPTV player for iPhone & iPad',
  description: 'EDGE IPTV is your all-in-one IPTV player for iPhone and iPad. Fast setup, Chromecast support, offline viewing, and multilingual interface. Download now on App Store.',
  keywords: 'IPTV, IPTV player, iPhone, iPad, Chromecast, streaming, Xtream, offline viewing, mobile IPTV',
  authors: [{ name: 'EDGE IPTV' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://edge-iptv.app/',
    languages: {
      'en': 'https://edge-iptv.app/',
      'fr': 'https://edge-iptv.app/fr/',
      'x-default': 'https://edge-iptv.app/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://edge-iptv.app/',
    title: 'EDGE IPTV - Your all-in-one IPTV player for iPhone & iPad',
    description: 'EDGE IPTV is your all-in-one IPTV player for iPhone and iPad. Fast setup, Chromecast support, offline viewing, and multilingual interface.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDGE IPTV - Your all-in-one IPTV player for iPhone & iPad',
    description: 'Fast setup, Chromecast support, offline viewing, and multilingual interface.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-background font-sans">
        {children}
      </body>
    </html>
  );
}
