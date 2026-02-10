import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://edge-iptv.app";
  const currentDate = new Date();

  // Static pages - Main landing pages (highest priority)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pt`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Installation guides (critical for conversions)
    {
      url: `${baseUrl}/how-to-install-iptv-iphone-ipad`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/fr/comment-installer-iptv-iphone-ipad`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/es/como-instalar-iptv-iphone-ipad`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pt/como-instalar-iptv-iphone-ipad`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Blog index pages
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pt/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Legal pages (lower priority)
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/fr/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/fr/terms-of-use`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/es/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/es/terms-of-use`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/pt/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/pt/terms-of-use`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // Blog pages
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/es/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pt/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Blog articles - English (High-value SEO content)
    {
      url: `${baseUrl}/blog/best-iptv-player-ios-2026`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95, // Comparison article - high conversion
    },
    {
      url: `${baseUrl}/blog/xtream-codes-setup-guide`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/m3u-playlist-setup-guide`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/chromecast-iptv-streaming-guide`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/iptv-buffering-fix-guide`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Blog articles - French
    {
      url: `${baseUrl}/fr/blog/meilleur-lecteur-iptv-ios-2026`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/fr/blog/configurer-codes-xtream-guide`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/blog/configurer-playlist-m3u-guide`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/blog/diffuser-iptv-chromecast-guide`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fr/blog/resoudre-buffering-iptv-guide`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Blog articles - Spanish
    {
      url: `${baseUrl}/es/blog/mejor-reproductor-iptv-ios-2026`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/es/blog/configurar-codigos-xtream-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/es/blog/configurar-lista-m3u-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/es/blog/guia-streaming-iptv-chromecast`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/es/blog/solucionar-buffering-iptv-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Blog articles - Portuguese
    {
      url: `${baseUrl}/pt/blog/melhor-reprodutor-iptv-ios-2026`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pt/blog/configurar-codigos-xtream-pt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pt/blog/configurar-lista-m3u-pt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pt/blog/guia-streaming-iptv-chromecast-pt`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pt/blog/resolver-buffering-iptv-guia`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Blog posts - dynamically generated from content
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url:
      post.lang === "en"
        ? `${baseUrl}/blog/${post.slug}`
        : `${baseUrl}/${post.lang}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75, // Dynamic blog posts slightly lower than featured guides
  }));

  return [...staticPages, ...blogPages];
}
