import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { defaultOG, SITE } from '@/lib/seo-config';
import { blogIndexAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog EDGE IPTV : tutoriels et guides IPTV pour iPhone',
  description: 'Apprenez tout sur le streaming IPTV sur iPhone et iPad. Tutoriels étape par étape, guides de configuration, astuces de dépannage et dernières fonctionnalités.',
  alternates: blogIndexAlternates('fr'),
  openGraph: {
    ...defaultOG,
    type: 'website',
    locale: 'fr_FR',
    url: `${SITE.url}/fr/blog`,
    title: 'Blog EDGE IPTV - Tutoriels & Guides',
    description: 'Apprenez tout sur le streaming IPTV sur iPhone et iPad avec nos tutoriels et guides complets.',
  },
};

export default function BlogPageFR() {
  return <BlogIndex lang="fr" />;
}
