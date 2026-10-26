import { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { WebVitals } from "./web-vitals";
import { SITE, defaultOG, defaultTwitter, homeAlternates } from "@/lib/seo-config";

export const metadata: Metadata = {
  // Fallback for pages without their own metadata (blog index, legal pages,
  // 404). Same rule as everywhere else: no "#1", no "free" without the trial.
  title: "EDGE IPTV — IPTV Player for iPhone & iPad (M3U & Xtream)",
  description:
    "EDGE IPTV plays your M3U and Xtream playlists on iPhone and iPad: live TV, movies, series, TV guide, Chromecast, AirPlay. 7-day free trial, then a subscription.",
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
    "iptv player iphone",
  ],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon.png",
  },
  manifest: "/manifest.json",
  alternates: homeAlternates("en"),
  openGraph: {
    ...defaultOG,
    type: "website",
    url: SITE.url,
    title: "EDGE IPTV — IPTV Player for iPhone & iPad",
    description:
      "EDGE IPTV plays your M3U and Xtream playlists on iPhone and iPad: live TV, movies, series, TV guide, Chromecast, AirPlay. 7-day free trial, then a subscription.",
  },
  twitter: {
    ...defaultTwitter,
    title: "EDGE IPTV — IPTV Player for iPhone & iPad",
    description:
      "EDGE IPTV plays your M3U and Xtream playlists on iPhone and iPad: live TV, movies, series, TV guide, Chromecast, AirPlay. 7-day free trial, then a subscription.",
  },
  other: {
    "apple-itunes-app": `app-id=${SITE.appStoreUrl.match(/id(\d+)/)?.[1]}`,
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
