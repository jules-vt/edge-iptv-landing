import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/app-ads.txt",
    },
    sitemap: "https://edge-iptv.app/sitemap.xml",
  };
}
