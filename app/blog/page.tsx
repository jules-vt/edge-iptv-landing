import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { defaultOG, SITE } from '@/lib/seo-config';
import { blogIndexAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'EDGE IPTV Blog - Tutorials, Guides & Tips for iOS Streaming',
  description: 'Learn everything about IPTV streaming on iPhone and iPad. Step-by-step tutorials, setup guides, troubleshooting tips, and latest features.',
  alternates: blogIndexAlternates('en'),
  openGraph: {
    ...defaultOG,
    type: 'website',
    locale: 'en_US',
    url: `${SITE.url}/blog`,
    title: 'EDGE IPTV Blog - Tutorials & Guides',
    description: 'Learn everything about IPTV streaming on iPhone and iPad with our comprehensive tutorials and guides.',
  },
};

export default function BlogPage() {
  return <BlogIndex lang="en" />;
}
