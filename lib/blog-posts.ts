// Blog posts data - can be moved to CMS or database later
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format
  author: string;
  readTime: string;
  image: string;
  lang: 'en' | 'fr' | 'es' | 'pt';
  category: 'tutorial' | 'guide' | 'news' | 'tips';
  alternateSlug?: string; // Slug in the other language
}

// Slug mapping between languages
// Slug mapping for alternate language versions (kept for potential future use)
// const slugMapping: Record<string, string> = {
//   'how-to-install-iptv-iphone-ipad': 'comment-installer-iptv-iphone-ipad',
//   'comment-installer-iptv-iphone-ipad': 'how-to-install-iptv-iphone-ipad',
//   'best-iptv-player-ios-2026': 'meilleur-lecteur-iptv-ios-2026',
//   'meilleur-lecteur-iptv-ios-2026': 'best-iptv-player-ios-2026',
//   'xtream-codes-setup-guide': 'configurer-codes-xtream-guide',
//   'configurer-codes-xtream-guide': 'xtream-codes-setup-guide',
//   'm3u-playlist-setup-guide': 'configurer-playlist-m3u-guide',
//   'configurer-playlist-m3u-guide': 'm3u-playlist-setup-guide',
//   'chromecast-iptv-streaming-guide': 'diffuser-iptv-chromecast-guide',
//   'diffuser-iptv-chromecast-guide': 'chromecast-iptv-streaming-guide',
//   'iptv-buffering-fix-guide': 'resoudre-buffering-iptv-guide',
//   'resoudre-buffering-iptv-guide': 'iptv-buffering-fix-guide'
// };

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-install-iptv-iphone-ipad',
    title: 'How to Install IPTV on iPhone & iPad',
    description: 'Complete step-by-step guide to install and configure EDGE IPTV on iPhone and iPad. Learn how to set up Xtream codes in 30 seconds.',
    date: '2026-01-05',
    author: 'EDGE IPTV Team',
    readTime: '5 min read',
    image: '/images/iphone-series-3d.png',
    lang: 'en',
    category: 'tutorial',
    alternateSlug: 'comment-installer-iptv-iphone-ipad'
  },
  {
    slug: 'comment-installer-iptv-iphone-ipad',
    title: 'Comment installer IPTV sur iPhone & iPad',
    description: 'Guide complet étape par étape pour installer et configurer EDGE IPTV sur iPhone et iPad. Apprenez à configurer les codes Xtream en 30 secondes.',
    date: '2026-01-05',
    author: 'Équipe EDGE IPTV',
    readTime: '5 min',
    image: '/images/iphone-series-3d.png',
    lang: 'fr',
    category: 'tutorial',
    alternateSlug: 'how-to-install-iptv-iphone-ipad'
  },
  {
    slug: 'best-iptv-player-ios-2026',
    title: 'Best IPTV Player for iOS in 2026: Complete Comparison',
    description: 'Compare the top 7 IPTV players for iPhone and iPad. Features, pros, cons, and why EDGE IPTV is the #1 choice in 2026.',
    date: '2026-01-12',
    author: 'EDGE IPTV Team',
    readTime: '8 min read',
    image: '/images/iphone-series-3d.png',
    lang: 'en',
    category: 'guide',
    alternateSlug: 'meilleur-lecteur-iptv-ios-2026'
  },
  {
    slug: 'meilleur-lecteur-iptv-ios-2026',
    title: 'Meilleur Lecteur IPTV pour iOS en 2026 : Comparatif Complet',
    description: 'Comparaison des 7 meilleurs lecteurs IPTV pour iPhone et iPad. Fonctionnalités, avantages, inconvénients et pourquoi EDGE IPTV est le choix #1 en 2026.',
    date: '2026-01-12',
    author: 'Équipe EDGE IPTV',
    readTime: '8 min',
    image: '/images/iphone-series-3d.png',
    lang: 'fr',
    category: 'guide',
    alternateSlug: 'best-iptv-player-ios-2026'
  },
  {
    slug: 'xtream-codes-setup-guide',
    title: 'Xtream Codes Setup: Complete Guide for Beginners 2026',
    description: 'Learn how to configure Xtream codes on any IPTV player. Troubleshooting tips, common errors, and best practices for optimal streaming.',
    date: '2026-01-12',
    author: 'EDGE IPTV Team',
    readTime: '7 min read',
    image: '/images/series-view.png',
    lang: 'en',
    category: 'tutorial',
    alternateSlug: 'configurer-codes-xtream-guide'
  },
  {
    slug: 'configurer-codes-xtream-guide',
    title: 'Configuration Codes Xtream : Guide Complet pour Débutants 2026',
    description: 'Apprenez à configurer les codes Xtream sur n\'importe quel lecteur IPTV. Conseils de dépannage, erreurs courantes et meilleures pratiques.',
    date: '2026-01-12',
    author: 'Équipe EDGE IPTV',
    readTime: '7 min',
    image: '/images/series-view.png',
    lang: 'fr',
    category: 'tutorial',
    alternateSlug: 'xtream-codes-setup-guide'
  },
  {
    slug: 'm3u-playlist-setup-guide',
    title: 'M3U Playlist Setup Guide: Complete Tutorial 2026',
    description: 'Learn how to configure M3U playlists on EDGE IPTV. Step-by-step setup, M3U vs M3U8 differences, EPG configuration, and troubleshooting tips.',
    date: '2026-01-12',
    author: 'EDGE IPTV Team',
    readTime: '6 min read',
    image: '/images/series-view.png',
    lang: 'en',
    category: 'tutorial',
    alternateSlug: 'configurer-playlist-m3u-guide'
  },
  {
    slug: 'configurer-playlist-m3u-guide',
    title: 'Guide Configuration Playlist M3U : Tutoriel Complet 2026',
    description: 'Apprenez à configurer les playlists M3U sur EDGE IPTV. Configuration étape par étape, différences M3U vs M3U8, EPG et dépannage.',
    date: '2026-01-12',
    author: 'Équipe EDGE IPTV',
    readTime: '6 min',
    image: '/images/series-view.png',
    lang: 'fr',
    category: 'tutorial',
    alternateSlug: 'm3u-playlist-setup-guide'
  },
  {
    slug: 'chromecast-iptv-streaming-guide',
    title: 'How to Cast IPTV to Chromecast: Complete 2026 Guide',
    description: 'Stream IPTV to your TV with Chromecast. Setup guide, troubleshooting, and best apps for casting live TV, movies, and series.',
    date: '2026-01-12',
    author: 'EDGE IPTV Team',
    readTime: '6 min read',
    image: '/images/movie-details.png',
    lang: 'en',
    category: 'guide',
    alternateSlug: 'diffuser-iptv-chromecast-guide'
  },
  {
    slug: 'diffuser-iptv-chromecast-guide',
    title: 'Comment Diffuser IPTV sur Chromecast : Guide Complet 2026',
    description: 'Streamez votre IPTV sur votre TV avec Chromecast. Guide de configuration, dépannage et meilleures apps pour caster TV, films et séries.',
    date: '2026-01-12',
    author: 'Équipe EDGE IPTV',
    readTime: '6 min',
    image: '/images/movie-details.png',
    lang: 'fr',
    category: 'guide',
    alternateSlug: 'chromecast-iptv-streaming-guide'
  },
  {
    slug: 'iptv-buffering-fix-guide',
    title: 'How to Fix IPTV Buffering Issues: Complete 2026 Guide',
    description: 'Solve IPTV buffering problems with our comprehensive guide. Learn the 10+ causes of buffering, diagnostic tests, network optimizations, and EDGE IPTV features that help.',
    date: '2026-01-12',
    author: 'EDGE IPTV Team',
    readTime: '10 min read',
    image: '/images/series-view.png',
    lang: 'en',
    category: 'tutorial',
    alternateSlug: 'resoudre-buffering-iptv-guide'
  },
  {
    slug: 'resoudre-buffering-iptv-guide',
    title: 'Comment Résoudre les Problèmes de Buffering IPTV : Guide 2026',
    description: 'Résolvez les problèmes de buffering IPTV avec notre guide complet. Découvrez les 10+ causes, tests diagnostiques, optimisations réseau et fonctionnalités EDGE IPTV.',
    date: '2026-01-12',
    author: 'Équipe EDGE IPTV',
    readTime: '10 min',
    image: '/images/series-view.png',
    lang: 'fr',
    category: 'tutorial',
    alternateSlug: 'iptv-buffering-fix-guide'
  },
  // Spanish articles
  {
    slug: 'mejor-reproductor-iptv-ios-2026',
    title: 'Mejor Reproductor IPTV para iOS 2026: Comparativa Completa',
    description: 'Compara los 7 mejores reproductores IPTV para iPhone y iPad. Características, ventajas, desventajas y por qué EDGE IPTV es la opción #1 en 2026.',
    date: '2026-01-12',
    author: 'Equipo EDGE IPTV',
    readTime: '8 min',
    image: '/images/iphone-series-3d.png',
    lang: 'es',
    category: 'guide',
    alternateSlug: 'best-iptv-player-ios-2026'
  },
  {
    slug: 'guia-streaming-iptv-chromecast',
    title: 'Cómo Transmitir IPTV a Chromecast: Guía Completa 2026',
    description: 'Transmite IPTV a tu TV con Chromecast. Guía de configuración, solución de problemas y mejores apps para transmitir TV en vivo, películas y series.',
    date: '2026-01-12',
    author: 'Equipo EDGE IPTV',
    readTime: '6 min',
    image: '/images/movie-details.png',
    lang: 'es',
    category: 'guide',
    alternateSlug: 'chromecast-iptv-streaming-guide'
  },
  {
    slug: 'solucionar-buffering-iptv-guia',
    title: 'Cómo Solucionar Problemas de Buffering IPTV: Guía 2026',
    description: 'Resuelve problemas de buffering IPTV con nuestra guía completa. Aprende las 10+ causas, pruebas diagnósticas, optimizaciones de red y características de EDGE IPTV.',
    date: '2026-01-12',
    author: 'Equipo EDGE IPTV',
    readTime: '10 min',
    image: '/images/series-view.png',
    lang: 'es',
    category: 'tutorial',
    alternateSlug: 'iptv-buffering-fix-guide'
  },
  {
    slug: 'configurar-lista-m3u-guia',
    title: 'Guía Configuración Lista M3U: Tutorial Completo 2026',
    description: 'Aprende a configurar listas M3U en EDGE IPTV. Configuración paso a paso, diferencias M3U vs M3U8, configuración EPG y solución de problemas.',
    date: '2026-01-12',
    author: 'Equipo EDGE IPTV',
    readTime: '6 min',
    image: '/images/series-view.png',
    lang: 'es',
    category: 'tutorial',
    alternateSlug: 'm3u-playlist-setup-guide'
  },
  {
    slug: 'configurar-codigos-xtream-guia',
    title: 'Configuración Códigos Xtream: Guía Completa para Principiantes 2026',
    description: 'Aprende a configurar códigos Xtream en cualquier reproductor IPTV. Consejos de solución de problemas, errores comunes y mejores prácticas.',
    date: '2026-01-12',
    author: 'Equipo EDGE IPTV',
    readTime: '7 min',
    image: '/images/series-view.png',
    lang: 'es',
    category: 'tutorial',
    alternateSlug: 'xtream-codes-setup-guide'
  },
  // Portuguese articles
  {
    slug: 'melhor-reprodutor-iptv-ios-2026',
    title: 'Melhor Reprodutor IPTV para iOS 2026: Comparação Completa',
    description: 'Compare os 7 melhores reprodutores IPTV para iPhone e iPad. Recursos, prós, contras e por que EDGE IPTV é a escolha #1 em 2026.',
    date: '2026-01-12',
    author: 'Equipe EDGE IPTV',
    readTime: '8 min',
    image: '/images/iphone-series-3d.png',
    lang: 'pt',
    category: 'guide',
    alternateSlug: 'best-iptv-player-ios-2026'
  },
  {
    slug: 'guia-streaming-iptv-chromecast-pt',
    title: 'Como Transmitir IPTV para Chromecast: Guia Completo 2026',
    description: 'Transmita IPTV para sua TV com Chromecast. Guia de configuração, solução de problemas e melhores apps para transmitir TV ao vivo, filmes e séries.',
    date: '2026-01-12',
    author: 'Equipe EDGE IPTV',
    readTime: '6 min',
    image: '/images/movie-details.png',
    lang: 'pt',
    category: 'guide',
    alternateSlug: 'chromecast-iptv-streaming-guide'
  },
  {
    slug: 'resolver-buffering-iptv-guia',
    title: 'Como Resolver Problemas de Buffering IPTV: Guia 2026',
    description: 'Resolva problemas de buffering IPTV com nosso guia completo. Aprenda as 10+ causas, testes diagnósticos, otimizações de rede e recursos do EDGE IPTV.',
    date: '2026-01-12',
    author: 'Equipe EDGE IPTV',
    readTime: '10 min',
    image: '/images/series-view.png',
    lang: 'pt',
    category: 'tutorial',
    alternateSlug: 'iptv-buffering-fix-guide'
  },
  {
    slug: 'configurar-lista-m3u-pt',
    title: 'Guia Configuração Lista M3U: Tutorial Completo 2026',
    description: 'Aprenda a configurar listas M3U no EDGE IPTV. Configuração passo a passo, diferenças M3U vs M3U8, configuração EPG e solução de problemas.',
    date: '2026-01-12',
    author: 'Equipe EDGE IPTV',
    readTime: '6 min',
    image: '/images/series-view.png',
    lang: 'pt',
    category: 'tutorial',
    alternateSlug: 'm3u-playlist-setup-guide'
  },
  {
    slug: 'configurar-codigos-xtream-pt',
    title: 'Configuração Códigos Xtream: Guia Completo para Iniciantes 2026',
    description: 'Aprenda a configurar códigos Xtream em qualquer reprodutor IPTV. Dicas de solução de problemas, erros comuns e melhores práticas.',
    date: '2026-01-12',
    author: 'Equipe EDGE IPTV',
    readTime: '7 min',
    image: '/images/series-view.png',
    lang: 'pt',
    category: 'tutorial',
    alternateSlug: 'xtream-codes-setup-guide'
  }
];

// Get posts by language
export function getPostsByLang(lang: 'en' | 'fr' | 'es' | 'pt'): BlogPost[] {
  return blogPosts.filter(post => post.lang === lang);
}

// Get single post by slug and lang
export function getPostBySlug(slug: string, lang: 'en' | 'fr' | 'es' | 'pt'): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.lang === lang);
}

// Get alternate slug for language switching
export function getAlternateSlug(slug: string, fromLang: 'en' | 'fr' | 'es' | 'pt'): string | undefined {
  const post = blogPosts.find(post => post.slug === slug && post.lang === fromLang);
  return post?.alternateSlug;
}

// Get all slugs for static generation
export function getAllPostSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}
