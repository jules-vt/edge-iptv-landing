import { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { SchemaOrg } from '@/components/schema-org';

export const metadata: Metadata = {
  title: 'EDGE IPTV - Best IPTV Player for iPhone & iPad 2026',
  description: 'Download EDGE IPTV: The #1 IPTV player for iOS with 5/5 stars rating. Chromecast support, offline viewing, Xtream codes. 1,000+ downloads.',
  authors: [{ name: 'EDGE IPTV' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
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
    title: 'EDGE IPTV - Best IPTV Player for iPhone & iPad 2026',
    description: 'Download EDGE IPTV: The #1 IPTV player for iOS with 5/5 stars rating. Chromecast support, offline viewing. 1,000+ downloads.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDGE IPTV - Best IPTV Player for iPhone & iPad 2026',
    description: 'The #1 IPTV player for iOS. Chromecast, offline viewing, fast setup.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
  },
  other: {
    'apple-itunes-app': 'app-id=6745966143',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaOrg lang="en" />
      </head>
      <body className="antialiased min-h-screen bg-background font-sans">
        <Script
          src="https://j-analytics.cloud/script.js"
          data-website-id="abb9c227-8240-433f-874c-1be6d86ff6f4"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
