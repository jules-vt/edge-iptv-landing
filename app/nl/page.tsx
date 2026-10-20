import React from "react";
import { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { defaultOG, defaultTwitter, homeAlternates, SITE } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: 'EDGE IPTV — IPTV-speler voor iPhone & iPad (M3U & Xtream)',
  description: 'EDGE IPTV maakt van je iPhone en iPad een hub voor live-tv, films en series: M3U en Xtream, tv-gids, Chromecast, AirPlay en offline downloads.',
  alternates: homeAlternates("nl"),
  openGraph: {
    ...defaultOG,
    type: "website",
    locale: "nl_NL",
    url: `${SITE.url}/nl`,
    title: 'EDGE IPTV — IPTV-speler voor iPhone & iPad (M3U & Xtream)',
    description: 'EDGE IPTV maakt van je iPhone en iPad een hub voor live-tv, films en series: M3U en Xtream, tv-gids, Chromecast, AirPlay en offline downloads.',
  },
  twitter: { ...defaultTwitter, title: 'EDGE IPTV — IPTV-speler voor iPhone & iPad (M3U & Xtream)', description: 'EDGE IPTV maakt van je iPhone en iPad een hub voor live-tv, films en series: M3U en Xtream, tv-gids, Chromecast, AirPlay en offline downloads.' },
};

export default function HomeNL() {
  return <HomePage lang="nl" />;
}
