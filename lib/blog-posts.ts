// Blog posts data - can be moved to CMS or database later
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format
  author: string;
  readTime: string;
  image: string;
  lang: 'en' | 'fr';
  category: 'tutorial' | 'guide' | 'news' | 'tips';
  alternateSlug?: string; // Slug in the other language
}

// Slug mapping between languages
const slugMapping: Record<string, string> = {
  'how-to-install-iptv-iphone-ipad': 'comment-installer-iptv-iphone-ipad',
  'comment-installer-iptv-iphone-ipad': 'how-to-install-iptv-iphone-ipad'
};

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
  }
];

// Get posts by language
export function getPostsByLang(lang: 'en' | 'fr'): BlogPost[] {
  return blogPosts.filter(post => post.lang === lang);
}

// Get single post by slug and lang
export function getPostBySlug(slug: string, lang: 'en' | 'fr'): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.lang === lang);
}

// Get alternate slug for language switching
export function getAlternateSlug(slug: string, fromLang: 'en' | 'fr'): string | undefined {
  const post = blogPosts.find(post => post.slug === slug && post.lang === fromLang);
  return post?.alternateSlug;
}

// Get all slugs for static generation
export function getAllPostSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}
