import React from "react";
import { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildAlternates, defaultOG, defaultTwitter, SITE } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: 'EDGE IPTV — IPTV Player for iPhone & iPad (M3U & Xtream)',
  description: 'EDGE IPTV turns your iPhone and iPad into a streaming hub for live TV, movies and series. M3U and Xtream support, TV guide, Chromecast, AirPlay and offline downloads.',
  alternates: buildAlternates({
    en: '/',
    fr: '/fr',
    es: '/es',
    pt: '/pt',
    de: '/de',
    ar: '/ar',
    it: '/it'
  }, "en"),
  openGraph: {
    ...defaultOG,
    type: "website",
    locale: "en_US",
    url: `${SITE.url}`,
    title: 'EDGE IPTV — IPTV Player for iPhone & iPad (M3U & Xtream)',
    description: 'EDGE IPTV turns your iPhone and iPad into a streaming hub for live TV, movies and series. M3U and Xtream support, TV guide, Chromecast, AirPlay and offline downloads.',
  },
  twitter: { ...defaultTwitter, title: 'EDGE IPTV — IPTV Player for iPhone & iPad (M3U & Xtream)', description: 'EDGE IPTV turns your iPhone and iPad into a streaming hub for live TV, movies and series. M3U and Xtream support, TV guide, Chromecast, AirPlay and offline downloads.' },
};

export default function Home() {
  return <HomePage lang="en" />;
}
