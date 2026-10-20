import React from "react";
import { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { defaultOG, defaultTwitter, homeAlternates, SITE } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: 'EDGE IPTV — Reprodutor IPTV para iPhone e iPad (M3U/Xtream)',
  description: 'O EDGE IPTV transforma seu iPhone e iPad numa central de TV ao vivo, filmes e séries: M3U e Xtream, guia de TV, Chromecast, AirPlay e downloads.',
  alternates: homeAlternates("pt"),
  openGraph: {
    ...defaultOG,
    type: "website",
    locale: "pt_BR",
    url: `${SITE.url}/pt`,
    title: 'EDGE IPTV — Reprodutor IPTV para iPhone e iPad (M3U/Xtream)',
    description: 'O EDGE IPTV transforma seu iPhone e iPad numa central de TV ao vivo, filmes e séries: M3U e Xtream, guia de TV, Chromecast, AirPlay e downloads.',
  },
  twitter: { ...defaultTwitter, title: 'EDGE IPTV — Reprodutor IPTV para iPhone e iPad (M3U/Xtream)', description: 'O EDGE IPTV transforma seu iPhone e iPad numa central de TV ao vivo, filmes e séries: M3U e Xtream, guia de TV, Chromecast, AirPlay e downloads.' },
};

export default function HomePT() {
  return <HomePage lang="pt" />;
}
