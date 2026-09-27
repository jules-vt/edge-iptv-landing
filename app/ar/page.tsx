import React from "react";
import { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildAlternates, defaultOG, defaultTwitter, SITE } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: '\u200fEDGE IPTV — مشغّل IPTV للآيفون والآيباد (M3U و Xtream)',
  description: 'يحوّل EDGE IPTV آيفونك وآيبادك إلى مركز بث للقنوات المباشرة والأفلام والمسلسلات. دعم M3U و Xtream، ودليل برامج، و Chromecast و AirPlay والتنزيل دون إنترنت.',
  alternates: buildAlternates({
    en: '/',
    fr: '/fr',
    es: '/es',
    pt: '/pt',
    de: '/de',
    ar: '/ar',
    it: '/it'
  }, "ar"),
  openGraph: {
    ...defaultOG,
    type: "website",
    locale: "ar_AR",
    url: `${SITE.url}/ar`,
    title: '\u200fEDGE IPTV — مشغّل IPTV للآيفون والآيباد (M3U و Xtream)',
    description: 'يحوّل EDGE IPTV آيفونك وآيبادك إلى مركز بث للقنوات المباشرة والأفلام والمسلسلات. دعم M3U و Xtream، ودليل برامج، و Chromecast و AirPlay والتنزيل دون إنترنت.',
  },
  twitter: { ...defaultTwitter, title: '\u200fEDGE IPTV — مشغّل IPTV للآيفون والآيباد (M3U و Xtream)', description: 'يحوّل EDGE IPTV آيفونك وآيبادك إلى مركز بث للقنوات المباشرة والأفلام والمسلسلات. دعم M3U و Xtream، ودليل برامج، و Chromecast و AirPlay والتنزيل دون إنترنت.' },
};

export default function HomeAR() {
  return <HomePage lang="ar" />;
}
