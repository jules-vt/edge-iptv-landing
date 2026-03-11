import { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SchemaOrg } from "@/components/schema-org";
import { WebVitals } from "./web-vitals";
import { SITE, buildAlternates, defaultOG, defaultTwitter } from "@/lib/seo-config";

export const metadata: Metadata = {
  // Title optimized for: "best iptv app for iphone", "iptv player ios", "edge iptv"
  title: "EDGE IPTV — Best IPTV App for iPhone & iPad 2026 | Free Download",
  description:
    "EDGE IPTV is the #1 IPTV player for iPhone & iPad. Watch live TV, movies and series with easy Xtream codes or M3U setup, Chromecast, offline viewing and 4K. Free download.",
  authors: [{ name: SITE.name }],
  keywords: [
    "edge iptv",
    "best iptv app for iphone",
    "iptv player ios",
    "iptv iphone app",
    "iptv ipad app",
    "how to install iptv on iphone",
    "xtream codes ios",
    "m3u player iphone",
    "chromecast iptv",
    "iptv offline viewing",
    "free iptv player iphone",
    "best iptv player 2026",
  ],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon.png",
  },
  manifest: "/manifest.json",
  alternates: buildAlternates({
    en: "/",
    fr: "/fr/",
    es: "/es/",
    pt: "/pt/",
  }),
  openGraph: {
    ...defaultOG,
    type: "website",
    url: SITE.url,
    title: "EDGE IPTV — Best IPTV App for iPhone & iPad 2026",
    description:
      "The #1 IPTV player for iPhone & iPad. Live TV, movies and series with 2-minute setup, Chromecast, offline mode and 4K. Free download.",
  },
  twitter: {
    ...defaultTwitter,
    title: "EDGE IPTV — Best IPTV App for iPhone & iPad 2026",
    description:
      "The #1 IPTV player for iOS. Watch live TV and movies with Chromecast, offline mode and 4K. Free download.",
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
