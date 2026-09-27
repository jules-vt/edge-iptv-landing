import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { buildAlternates, defaultOG, SITE } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Blog EDGE IPTV - Tutoriels, Guides & Astuces pour le Streaming iOS',
  description: 'Apprenez tout sur le streaming IPTV sur iPhone et iPad. Tutoriels étape par étape, guides de configuration, astuces de dépannage et dernières fonctionnalités.',
  alternates: buildAlternates({
    en: '/blog',
    fr: '/fr/blog',
    es: '/es/blog',
    pt: '/pt/blog',
  }, 'fr'),
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
