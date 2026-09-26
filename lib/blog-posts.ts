export type Lang = "en" | "fr" | "es" | "pt";

export const LANGS: Lang[] = ["en", "fr", "es", "pt"];

const HREFLANG: Record<Lang, string> = {
  en: "en",
  fr: "fr",
  es: "es",
  pt: "pt",
};

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format
  author: string;
  readTime: string;
  image: string;
  lang: Lang;
  category: "tutorial" | "guide" | "news" | "tips";
  /**
   * Shared by every language version of the same article. This is the ONLY
   * link between translations — never add a second mapping table elsewhere,
   * the two inevitably drift apart and emit hreflang pointing at 404s.
   */
  translationGroup: string;
  /**
   * Route prefix after the language segment. Defaults to "blog". The install
   * guide lives at the site root instead, so it sets "".
   */
  basePath?: string;
}

export const blogPosts: BlogPost[] = [
  // ── Main English articles ────────────────────────────────────────────────
  {
    slug: "best-iptv-app-for-iphone",
    title: "Best IPTV App for iPhone 2026: Top 5 Free Apps Tested",
    description:
      "We tested the 5 most popular free IPTV apps on iPhone to find the fastest, most reliable, and easiest to set up in 2026.",
    date: "2026-03-11",
    author: "EDGE IPTV Team",
    readTime: "7 min read",
    image: "/images/iphone-series-3d.png",
    lang: "en",
    category: "guide",
    translationGroup: "best-iptv-app-iphone",
  },
  {
    slug: "how-to-install-iptv-iphone-ipad",
    title: "How to Install IPTV on iPhone & iPad",
    description:
      "Complete step-by-step guide to install and configure EDGE IPTV on iPhone and iPad. Learn how to set up Xtream codes in 30 seconds.",
    date: "2026-01-05",
    author: "EDGE IPTV Team",
    readTime: "5 min read",
    image: "/images/iphone-series-3d.png",
    lang: "en",
    category: "tutorial",
    translationGroup: "install-guide",
    basePath: "",
  },
  {
    slug: "comment-installer-iptv-iphone-ipad",
    title: "Comment installer IPTV sur iPhone & iPad",
    description:
      "Guide complet étape par étape pour installer et configurer EDGE IPTV sur iPhone et iPad. Apprenez à configurer les codes Xtream en 30 secondes.",
    date: "2026-01-05",
    author: "Équipe EDGE IPTV",
    readTime: "5 min",
    image: "/images/iphone-series-3d.png",
    lang: "fr",
    category: "tutorial",
    translationGroup: "install-guide",
    basePath: "",
  },
  {
    slug: "como-instalar-iptv-iphone-ipad",
    title: "Cómo Instalar IPTV en iPhone y iPad - Guía Paso a Paso 2026",
    description:
      "Guía completa paso a paso para instalar y configurar EDGE IPTV en iPhone y iPad. Aprende a configurar códigos Xtream y comienza a transmitir en 30 segundos.",
    date: "2026-01-05",
    author: "Equipo EDGE IPTV",
    readTime: "5 min",
    image: "/images/iphone-series-3d.png",
    lang: "es",
    category: "tutorial",
    translationGroup: "install-guide",
    basePath: "",
  },
  {
    slug: "como-instalar-iptv-iphone-ipad",
    title: "Como Instalar IPTV no iPhone e iPad - Guia Passo a Passo 2026",
    description:
      "Guia completo passo a passo para instalar e configurar EDGE IPTV no iPhone e iPad. Aprenda a configurar códigos Xtream e comece a transmitir em 30 segundos.",
    date: "2026-01-05",
    author: "Equipe EDGE IPTV",
    readTime: "5 min",
    image: "/images/iphone-series-3d.png",
    lang: "pt",
    category: "tutorial",
    translationGroup: "install-guide",
    basePath: "",
  },
  {
    slug: "best-iptv-player-ios-2026",
    title: "Best IPTV Player for iOS in 2026: Complete Comparison",
    description:
      "Compare the top 7 IPTV players for iPhone and iPad. Features, pros, cons, and why EDGE IPTV is the #1 choice in 2026.",
    date: "2026-01-12",
    author: "EDGE IPTV Team",
    readTime: "8 min read",
    image: "/images/iphone-series-3d.png",
    lang: "en",
    category: "guide",
    translationGroup: "best-player-ios",
  },
  {
    slug: "meilleur-lecteur-iptv-ios-2026",
    title: "Meilleur Lecteur IPTV pour iOS en 2026 : Comparatif Complet",
    description:
      "Comparaison des 7 meilleurs lecteurs IPTV pour iPhone et iPad. Fonctionnalités, avantages, inconvénients et pourquoi EDGE IPTV est le choix #1 en 2026.",
    date: "2026-01-12",
    author: "Équipe EDGE IPTV",
    readTime: "8 min",
    image: "/images/iphone-series-3d.png",
    lang: "fr",
    category: "guide",
    translationGroup: "best-player-ios",
  },
  {
    slug: "mejor-reproductor-iptv-ios-2026",
    title: "Mejor Reproductor IPTV para iOS 2026: Comparativa Completa",
    description:
      "Compara los 7 mejores reproductores IPTV para iPhone y iPad. Características, ventajas, desventajas y por qué EDGE IPTV es la opción #1 en 2026.",
    date: "2026-01-12",
    author: "Equipo EDGE IPTV",
    readTime: "8 min",
    image: "/images/iphone-series-3d.png",
    lang: "es",
    category: "guide",
    translationGroup: "best-player-ios",
  },
  {
    slug: "melhor-reprodutor-iptv-ios-2026",
    title: "Melhor Reprodutor IPTV para iOS 2026: Comparação Completa",
    description:
      "Compare os 7 melhores reprodutores IPTV para iPhone e iPad. Recursos, prós, contras e por que EDGE IPTV é a escolha #1 em 2026.",
    date: "2026-01-12",
    author: "Equipe EDGE IPTV",
    readTime: "8 min",
    image: "/images/iphone-series-3d.png",
    lang: "pt",
    category: "guide",
    translationGroup: "best-player-ios",
  },
  {
    slug: "xtream-codes-setup-guide",
    title: "Xtream Codes Setup: Complete Guide for Beginners 2026",
    description:
      "Learn how to configure Xtream codes on any IPTV player. Troubleshooting tips, common errors, and best practices for optimal streaming.",
    date: "2026-01-12",
    author: "EDGE IPTV Team",
    readTime: "7 min read",
    image: "/images/series-view.png",
    lang: "en",
    category: "tutorial",
    translationGroup: "xtream-setup",
  },
  {
    slug: "configurer-codes-xtream-guide",
    title: "Configuration Codes Xtream : Guide Complet pour Débutants 2026",
    description:
      "Apprenez à configurer les codes Xtream sur n'importe quel lecteur IPTV. Conseils de dépannage, erreurs courantes et meilleures pratiques.",
    date: "2026-01-12",
    author: "Équipe EDGE IPTV",
    readTime: "7 min",
    image: "/images/series-view.png",
    lang: "fr",
    category: "tutorial",
    translationGroup: "xtream-setup",
  },
  {
    slug: "configurar-codigos-xtream-guia",
    title:
      "Configuración Códigos Xtream: Guía Completa para Principiantes 2026",
    description:
      "Aprende a configurar códigos Xtream en cualquier reproductor IPTV. Consejos de solución de problemas, errores comunes y mejores prácticas.",
    date: "2026-01-12",
    author: "Equipo EDGE IPTV",
    readTime: "7 min",
    image: "/images/series-view.png",
    lang: "es",
    category: "tutorial",
    translationGroup: "xtream-setup",
  },
  {
    slug: "configurar-codigos-xtream-pt",
    title: "Configuração Códigos Xtream: Guia Completo para Iniciantes 2026",
    description:
      "Aprenda a configurar códigos Xtream em qualquer reprodutor IPTV. Dicas de solução de problemas, erros comuns e melhores práticas.",
    date: "2026-01-12",
    author: "Equipe EDGE IPTV",
    readTime: "7 min",
    image: "/images/series-view.png",
    lang: "pt",
    category: "tutorial",
    translationGroup: "xtream-setup",
  },
  {
    slug: "m3u-playlist-setup-guide",
    title: "M3U Playlist Setup Guide: Complete Tutorial 2026",
    description:
      "Learn how to configure M3U playlists on EDGE IPTV. Step-by-step setup, M3U vs M3U8 differences, EPG configuration, and troubleshooting tips.",
    date: "2026-01-12",
    author: "EDGE IPTV Team",
    readTime: "6 min read",
    image: "/images/series-view.png",
    lang: "en",
    category: "tutorial",
    translationGroup: "m3u-setup",
  },
  {
    slug: "configurer-playlist-m3u-guide",
    title: "Guide Configuration Playlist M3U : Tutoriel Complet 2026",
    description:
      "Apprenez à configurer les playlists M3U sur EDGE IPTV. Configuration étape par étape, différences M3U vs M3U8, EPG et dépannage.",
    date: "2026-01-12",
    author: "Équipe EDGE IPTV",
    readTime: "6 min",
    image: "/images/series-view.png",
    lang: "fr",
    category: "tutorial",
    translationGroup: "m3u-setup",
  },
  {
    slug: "configurar-lista-m3u-guia",
    title: "Guía Configuración Lista M3U: Tutorial Completo 2026",
    description:
      "Aprende a configurar listas M3U en EDGE IPTV. Configuración paso a paso, diferencias M3U vs M3U8, configuración EPG y solución de problemas.",
    date: "2026-01-12",
    author: "Equipo EDGE IPTV",
    readTime: "6 min",
    image: "/images/series-view.png",
    lang: "es",
    category: "tutorial",
    translationGroup: "m3u-setup",
  },
  {
    slug: "configurar-lista-m3u-pt",
    title: "Guia Configuração Lista M3U: Tutorial Completo 2026",
    description:
      "Aprenda a configurar listas M3U no EDGE IPTV. Configuração passo a passo, diferenças M3U vs M3U8, configuração EPG e solução de problemas.",
    date: "2026-01-12",
    author: "Equipe EDGE IPTV",
    readTime: "6 min",
    image: "/images/series-view.png",
    lang: "pt",
    category: "tutorial",
    translationGroup: "m3u-setup",
  },
  {
    slug: "chromecast-iptv-streaming-guide",
    title: "How to Cast IPTV to Chromecast: Complete 2026 Guide",
    description:
      "Stream IPTV to your TV with Chromecast. Setup guide, troubleshooting, and best apps for casting live TV, movies, and series.",
    date: "2026-01-12",
    author: "EDGE IPTV Team",
    readTime: "6 min read",
    image: "/images/movie-details.png",
    lang: "en",
    category: "guide",
    translationGroup: "chromecast",
  },
  {
    slug: "diffuser-iptv-chromecast-guide",
    title: "Comment Diffuser IPTV sur Chromecast : Guide Complet 2026",
    description:
      "Streamez votre IPTV sur votre TV avec Chromecast. Guide de configuration, dépannage et meilleures apps pour caster TV, films et séries.",
    date: "2026-01-12",
    author: "Équipe EDGE IPTV",
    readTime: "6 min",
    image: "/images/movie-details.png",
    lang: "fr",
    category: "guide",
    translationGroup: "chromecast",
  },
  {
    slug: "guia-streaming-iptv-chromecast",
    title: "Cómo Transmitir IPTV a Chromecast: Guía Completa 2026",
    description:
      "Transmite IPTV a tu TV con Chromecast. Guía de configuración, solución de problemas y mejores apps para transmitir TV en vivo, películas y series.",
    date: "2026-01-12",
    author: "Equipo EDGE IPTV",
    readTime: "6 min",
    image: "/images/movie-details.png",
    lang: "es",
    category: "guide",
    translationGroup: "chromecast",
  },
  {
    slug: "guia-streaming-iptv-chromecast-pt",
    title: "Como Transmitir IPTV para Chromecast: Guia Completo 2026",
    description:
      "Transmita IPTV para sua TV com Chromecast. Guia de configuração, solução de problemas e melhores apps para transmitir TV ao vivo, filmes e séries.",
    date: "2026-01-12",
    author: "Equipe EDGE IPTV",
    readTime: "6 min",
    image: "/images/movie-details.png",
    lang: "pt",
    category: "guide",
    translationGroup: "chromecast",
  },
  {
    slug: "iptv-buffering-fix-guide",
    title: "How to Fix IPTV Buffering Issues: Complete 2026 Guide",
    description:
      "Solve IPTV buffering problems with our comprehensive guide. Learn the 10+ causes of buffering, diagnostic tests, network optimizations, and EDGE IPTV features that help.",
    date: "2026-01-12",
    author: "EDGE IPTV Team",
    readTime: "10 min read",
    image: "/images/series-view.png",
    lang: "en",
    category: "tutorial",
    translationGroup: "buffering-fix",
  },
  {
    slug: "resoudre-buffering-iptv-guide",
    title: "Comment Résoudre les Problèmes de Buffering IPTV : Guide 2026",
    description:
      "Résolvez les problèmes de buffering IPTV avec notre guide complet. Découvrez les 10+ causes, tests diagnostiques, optimisations réseau et fonctionnalités EDGE IPTV.",
    date: "2026-01-12",
    author: "Équipe EDGE IPTV",
    readTime: "10 min",
    image: "/images/series-view.png",
    lang: "fr",
    category: "tutorial",
    translationGroup: "buffering-fix",
  },
  {
    slug: "solucionar-buffering-iptv-guia",
    title: "Cómo Solucionar Problemas de Buffering IPTV: Guía 2026",
    description:
      "Resuelve problemas de buffering IPTV con nuestra guía completa. Aprende las 10+ causas, pruebas diagnósticas, optimizaciones de red y características de EDGE IPTV.",
    date: "2026-01-12",
    author: "Equipo EDGE IPTV",
    readTime: "10 min",
    image: "/images/series-view.png",
    lang: "es",
    category: "tutorial",
    translationGroup: "buffering-fix",
  },
  {
    slug: "resolver-buffering-iptv-guia",
    title: "Como Resolver Problemas de Buffering IPTV: Guia 2026",
    description:
      "Resolva problemas de buffering IPTV com nosso guia completo. Aprenda as 10+ causas, testes diagnósticos, otimizações de rede e recursos do EDGE IPTV.",
    date: "2026-01-12",
    author: "Equipe EDGE IPTV",
    readTime: "10 min",
    image: "/images/series-view.png",
    lang: "pt",
    category: "tutorial",
    translationGroup: "buffering-fix",
  },
];

/** Posts written in a given language. */
export function getPostsByLang(lang: Lang): BlogPost[] {
  return blogPosts.filter((post) => post.lang === lang);
}

/** A single post, identified by slug *and* language. */
export function getPostBySlug(slug: string, lang: Lang): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.lang === lang);
}

/**
 * Slugs for a language's `/blog/[slug]` route. Language-scoped on purpose:
 * generating every language's slugs under every language's route produced
 * ~70 soft-404 URLs that all canonicalised to the homepage.
 */
export function getBlogSlugs(lang: Lang): string[] {
  return blogPosts
    .filter((post) => post.lang === lang && post.basePath !== "")
    .map((post) => post.slug);
}

/** Site-relative path of a post, e.g. `/fr/blog/configurer-codes-xtream-guide`. */
export function postPath(post: BlogPost): string {
  const segments = [
    post.lang === "en" ? "" : post.lang,
    post.basePath ?? "blog",
    post.slug,
  ].filter(Boolean);
  return `/${segments.join("/")}`;
}

/** Every language version of an article, keyed by language. */
export function getTranslations(
  slug: string,
  fromLang: Lang,
): Partial<Record<Lang, BlogPost>> {
  const post = getPostBySlug(slug, fromLang);
  if (!post) return {};

  return blogPosts
    .filter((p) => p.translationGroup === post.translationGroup)
    .reduce<Partial<Record<Lang, BlogPost>>>((acc, p) => {
      acc[p.lang] = p;
      return acc;
    }, {});
}

/**
 * Next.js `alternates` metadata for a post: canonical plus every hreflang that
 * actually resolves. Use this everywhere instead of hand-writing the URLs —
 * the hand-written versions pointed French and Portuguese readers at English
 * slugs that 404.
 */
export function buildBlogAlternates(slug: string, lang: Lang) {
  const post = getPostBySlug(slug, lang);
  if (!post) return undefined;

  const translations = getTranslations(slug, lang);
  const languages: Record<string, string> = {};

  for (const l of LANGS) {
    const translated = translations[l];
    if (translated) {
      languages[HREFLANG[l]] = `https://edge-iptv.app${postPath(translated)}`;
    }
  }

  const english = translations.en;
  languages["x-default"] = english
    ? `https://edge-iptv.app${postPath(english)}`
    : `https://edge-iptv.app${postPath(post)}`;

  return {
    canonical: `https://edge-iptv.app${postPath(post)}`,
    languages,
  };
}
