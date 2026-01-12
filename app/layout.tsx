import { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { SchemaOrg } from '@/components/schema-org';
import { WebVitals } from './web-vitals';

export const metadata: Metadata = {
  title: 'EDGE IPTV: Best iOS IPTV Player 2026 | Free Download',
  description: '⭐ 5/5 stars. ✓ Setup in 2 minutes. ✓ Chromecast support. ✓ Offline viewing. Download the #1 IPTV app for iPhone & iPad now!',
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
    title: 'EDGE IPTV: Best iOS IPTV Player 2026 | Free Download',
    description: '⭐ 5/5 stars. Setup in 2 minutes. Chromecast support. Offline viewing. Download the #1 IPTV app for iPhone & iPad!',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDGE IPTV: Best iOS IPTV Player 2026 | Free Download',
    description: '⭐ 5/5 stars. Setup in 2 minutes. Chromecast, offline viewing, Xtream codes.',
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
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://j-analytics.cloud" />
        <link rel="dns-prefetch" href="https://j-analytics.cloud" />
      </head>
      <body className="antialiased min-h-screen bg-background font-sans">
        <WebVitals />
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
