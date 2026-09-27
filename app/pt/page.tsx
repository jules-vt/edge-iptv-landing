import React from "react";
import { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildAlternates, defaultOG, defaultTwitter, SITE } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: 'EDGE IPTV — Reprodutor IPTV para iPhone e iPad (M3U e Xtream)',
  description: 'O EDGE IPTV transforma seu iPhone e iPad num centro de streaming para TV ao vivo, filmes e séries. M3U e Xtream, guia de TV, Chromecast, AirPlay e downloads offline.',
  alternates: buildAlternates({
    en: '/',
    fr: '/fr',
    es: '/es',
    pt: '/pt',
    de: '/de',
    ar: '/ar',
    it: '/it'
  }, "pt"),
  openGraph: {
    ...defaultOG,
    type: "website",
    locale: "pt_BR",
    url: `${SITE.url}/pt`,
    title: 'EDGE IPTV — Reprodutor IPTV para iPhone e iPad (M3U e Xtream)',
    description: 'O EDGE IPTV transforma seu iPhone e iPad num centro de streaming para TV ao vivo, filmes e séries. M3U e Xtream, guia de TV, Chromecast, AirPlay e downloads offline.',
  },
  twitter: { ...defaultTwitter, title: 'EDGE IPTV — Reprodutor IPTV para iPhone e iPad (M3U e Xtream)', description: 'O EDGE IPTV transforma seu iPhone e iPad num centro de streaming para TV ao vivo, filmes e séries. M3U e Xtream, guia de TV, Chromecast, AirPlay e downloads offline.' },
};

export default function HomePT() {
  return <HomePage lang="pt" />;
}
