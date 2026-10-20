import React from "react";
import { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { defaultOG, defaultTwitter, homeAlternates, SITE } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: 'EDGE IPTV — Reproductor IPTV para iPhone y iPad (M3U/Xtream)',
  description: 'EDGE IPTV convierte tu iPhone y iPad en un centro para TV en vivo, películas y series: M3U y Xtream, guía de TV, Chromecast, AirPlay y descargas.',
  alternates: homeAlternates("es"),
  openGraph: {
    ...defaultOG,
    type: "website",
    locale: "es_ES",
    url: `${SITE.url}/es`,
    title: 'EDGE IPTV — Reproductor IPTV para iPhone y iPad (M3U/Xtream)',
    description: 'EDGE IPTV convierte tu iPhone y iPad en un centro para TV en vivo, películas y series: M3U y Xtream, guía de TV, Chromecast, AirPlay y descargas.',
  },
  twitter: { ...defaultTwitter, title: 'EDGE IPTV — Reproductor IPTV para iPhone y iPad (M3U/Xtream)', description: 'EDGE IPTV convierte tu iPhone y iPad en un centro para TV en vivo, películas y series: M3U y Xtream, guía de TV, Chromecast, AirPlay y descargas.' },
};

export default function HomeES() {
  return <HomePage lang="es" />;
}
