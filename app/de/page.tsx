import React from "react";
import { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildAlternates, defaultOG, defaultTwitter, SITE } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: 'EDGE IPTV — IPTV-Player für iPhone & iPad (M3U & Xtream)',
  description: 'EDGE IPTV macht iPhone und iPad zur Zentrale für Live-TV, Filme und Serien: M3U und Xtream, Programmführer, Chromecast, AirPlay und Offline-Downloads.',
  alternates: buildAlternates({
    en: '/',
    fr: '/fr',
    es: '/es',
    pt: '/pt',
    de: '/de',
    ar: '/ar',
    it: '/it'
  }, "de"),
  openGraph: {
    ...defaultOG,
    type: "website",
    locale: "de_DE",
    url: `${SITE.url}/de`,
    title: 'EDGE IPTV — IPTV-Player für iPhone & iPad (M3U & Xtream)',
    description: 'EDGE IPTV macht iPhone und iPad zur Zentrale für Live-TV, Filme und Serien: M3U und Xtream, Programmführer, Chromecast, AirPlay und Offline-Downloads.',
  },
  twitter: { ...defaultTwitter, title: 'EDGE IPTV — IPTV-Player für iPhone & iPad (M3U & Xtream)', description: 'EDGE IPTV macht iPhone und iPad zur Zentrale für Live-TV, Filme und Serien: M3U und Xtream, Programmführer, Chromecast, AirPlay und Offline-Downloads.' },
};

export default function HomeDE() {
  return <HomePage lang="de" />;
}
