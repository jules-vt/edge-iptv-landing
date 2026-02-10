import { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SchemaOrg } from "@/components/schema-org";
import { WebVitals } from "./web-vitals";

export const metadata: Metadata = {
  title: "EDGE IPTV - Best iOS IPTV Player 2026 | iPhone & iPad App",
  description:
    "⭐ EDGE IPTV - The #1 rated IPTV player for iOS. ✓ 2-minute setup ✓ Chromecast ✓ Offline viewing ✓ 4K streaming. Download EDGE IPTV free for iPhone & iPad!",
  authors: [{ name: "EDGE IPTV" }],
  keywords: [
    "edge iptv",
    "EDGE IPTV",
    "edge iptv app",
    "edge iptv player",
    "edge iptv ios",
    "IPTV player iOS",
    "IPTV iPhone app",
    "IPTV iPad app",
    "best IPTV player 2026",
    "Xtream codes iOS",
    "Chromecast IPTV",
    "IPTV offline viewing",
    "free IPTV player",
    "IPTV streaming app",
  ],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://edge-iptv.app/",
    languages: {
      en: "https://edge-iptv.app/",
      fr: "https://edge-iptv.app/fr/",
      es: "https://edge-iptv.app/es/",
      pt: "https://edge-iptv.app/pt/",
      "x-default": "https://edge-iptv.app/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://edge-iptv.app/",
    title: "EDGE IPTV - Best iOS IPTV Player 2026 | iPhone & iPad",
    description:
      "⭐ EDGE IPTV - #1 rated iOS IPTV player. 2-minute setup, Chromecast, offline viewing, 4K streaming. Free download!",
    images: ["https://edge-iptv.app/images/iphone-series-3d.png"],
    siteName: "EDGE IPTV",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDGE IPTV - Best iOS IPTV Player 2026 | Free Download",
    description:
      "⭐ EDGE IPTV - #1 iOS IPTV player. 2-minute setup, Chromecast, offline viewing, 4K streaming.",
    images: ["https://edge-iptv.app/images/iphone-series-3d.png"],
  },
  other: {
    "apple-itunes-app": "app-id=6745966143",
  },
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
        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="/images/iphone-series-3d.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/icon.webp"
          type="image/webp"
        />
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
