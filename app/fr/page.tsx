import React from "react";
import { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildAlternates, defaultOG, defaultTwitter, SITE } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: 'EDGE IPTV — Lecteur IPTV pour iPhone & iPad (M3U & Xtream)',
  description: 'EDGE IPTV fait de votre iPhone et iPad un centre pour la TV en direct, les films et les séries : M3U et Xtream, guide TV, Chromecast, AirPlay, hors ligne.',
  alternates: buildAlternates({
    en: '/',
    fr: '/fr',
    es: '/es',
    pt: '/pt',
    de: '/de',
    ar: '/ar',
    it: '/it'
  }, "fr"),
  openGraph: {
    ...defaultOG,
    type: "website",
    locale: "fr_FR",
    url: `${SITE.url}/fr`,
    title: 'EDGE IPTV — Lecteur IPTV pour iPhone & iPad (M3U & Xtream)',
    description: 'EDGE IPTV fait de votre iPhone et iPad un centre pour la TV en direct, les films et les séries : M3U et Xtream, guide TV, Chromecast, AirPlay, hors ligne.',
  },
  twitter: { ...defaultTwitter, title: 'EDGE IPTV — Lecteur IPTV pour iPhone & iPad (M3U & Xtream)', description: 'EDGE IPTV fait de votre iPhone et iPad un centre pour la TV en direct, les films et les séries : M3U et Xtream, guide TV, Chromecast, AirPlay, hors ligne.' },
};

export default function HomeFR() {
  return <HomePage lang="fr" />;
}
