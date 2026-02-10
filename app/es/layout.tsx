import { Metadata } from "next";
import { SchemaOrg } from "@/components/schema-org";

export const metadata: Metadata = {
  title: "EDGE IPTV - Mejor Reproductor IPTV iOS 2026 | iPhone & iPad",
  description:
    "⭐ EDGE IPTV - Reproductor IPTV #1 para iOS. ✓ Instalación 2 min ✓ Chromecast ✓ Sin conexión ✓ Streaming 4K. ¡Descarga EDGE IPTV gratis para iPhone & iPad!",
  authors: [{ name: "EDGE IPTV" }],
  keywords: [
    "edge iptv",
    "EDGE IPTV",
    "edge iptv app",
    "edge iptv player",
    "edge iptv ios",
    "reproductor IPTV iOS",
    "aplicación IPTV iPhone",
    "IPTV iPad gratis",
    "mejor reproductor IPTV 2026",
    "códigos Xtream iOS",
    "Chromecast IPTV",
    "IPTV sin conexión",
    "reproductor IPTV gratis",
    "streaming IPTV iPhone",
  ],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://edge-iptv.app/es/",
    languages: {
      en: "https://edge-iptv.app/",
      fr: "https://edge-iptv.app/fr/",
      es: "https://edge-iptv.app/es/",
      pt: "https://edge-iptv.app/pt/",
      "x-default": "https://edge-iptv.app/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://edge-iptv.app/es/",
    title: "EDGE IPTV - Mejor Reproductor IPTV iOS 2026 | iPhone & iPad",
    description:
      "⭐ EDGE IPTV - Reproductor #1 para iOS. Instalación 2 min, Chromecast, sin conexión, streaming 4K. ¡Gratis!",
    images: ["https://edge-iptv.app/images/iphone-series-3d.png"],
    siteName: "EDGE IPTV",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDGE IPTV - Mejor Reproductor IPTV iPhone & iPad 2026",
    description:
      "El reproductor IPTV #1 para iOS. Chromecast, sin conexión, configuración rápida.",
    images: ["https://edge-iptv.app/images/iphone-series-3d.png"],
  },
  other: {
    "apple-itunes-app": "app-id=6745966143",
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrg lang="es" />
      {children}
    </>
  );
}
