import React from "react";
import { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildAlternates, defaultOG, defaultTwitter, SITE } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: 'EDGE IPTV — Lettore IPTV per iPhone e iPad (M3U e Xtream)',
  description: 'EDGE IPTV trasforma iPhone e iPad in un centro di streaming per TV in diretta, film e serie. M3U e Xtream, guida TV, Chromecast, AirPlay e download offline.',
  alternates: buildAlternates({
    en: '/',
    fr: '/fr',
    es: '/es',
    pt: '/pt',
    de: '/de',
    ar: '/ar',
    it: '/it'
  }, "it"),
  openGraph: {
    ...defaultOG,
    type: "website",
    locale: "it_IT",
    url: `${SITE.url}/it`,
    title: 'EDGE IPTV — Lettore IPTV per iPhone e iPad (M3U e Xtream)',
    description: 'EDGE IPTV trasforma iPhone e iPad in un centro di streaming per TV in diretta, film e serie. M3U e Xtream, guida TV, Chromecast, AirPlay e download offline.',
  },
  twitter: { ...defaultTwitter, title: 'EDGE IPTV — Lettore IPTV per iPhone e iPad (M3U e Xtream)', description: 'EDGE IPTV trasforma iPhone e iPad in un centro di streaming per TV in diretta, film e serie. M3U e Xtream, guida TV, Chromecast, AirPlay e download offline.' },
};

export default function HomeIT() {
  return <HomePage lang="it" />;
}
