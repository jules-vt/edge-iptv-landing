import { Metadata } from "next";
import { SchemaOrg } from "@/components/schema-org";

export const metadata: Metadata = {
  title: "EDGE IPTV - Melhor Player IPTV iOS 2026 | iPhone & iPad",
  description:
    "⭐ EDGE IPTV - Player IPTV #1 para iOS. ✓ Instalação 2 min ✓ Chromecast ✓ Offline ✓ Streaming 4K. Baixe EDGE IPTV grátis para iPhone & iPad!",
  authors: [{ name: "EDGE IPTV" }],
  keywords: [
    "edge iptv",
    "EDGE IPTV",
    "edge iptv app",
    "edge iptv player",
    "edge iptv ios",
    "player IPTV iOS",
    "aplicativo IPTV iPhone",
    "IPTV iPad grátis",
    "melhor player IPTV 2026",
    "códigos Xtream iOS",
    "Chromecast IPTV",
    "IPTV offline",
    "player IPTV grátis",
    "streaming IPTV iPhone",
  ],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://edge-iptv.app/pt/",
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
    url: "https://edge-iptv.app/pt/",
    title: "EDGE IPTV - Melhor Player IPTV iOS 2026 | iPhone & iPad",
    description:
      "⭐ EDGE IPTV - Player #1 para iOS. Instalação 2 min, Chromecast, offline, streaming 4K. Grátis!",
    images: ["https://edge-iptv.app/images/iphone-series-3d.png"],
    siteName: "EDGE IPTV",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDGE IPTV - Melhor Player IPTV iPhone & iPad 2026",
    description:
      "O player IPTV #1 para iOS. Chromecast, offline, configuração rápida.",
    images: ["https://edge-iptv.app/images/iphone-series-3d.png"],
  },
  other: {
    "apple-itunes-app": "app-id=6745966143",
  },
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrg lang="pt" />
      {children}
    </>
  );
}
