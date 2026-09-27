import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { buildAlternates, defaultOG, SITE } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Blog EDGE IPTV - Tutoriales, Guías y Consejos para Streaming iOS',
  description: 'Aprende todo sobre streaming IPTV en iPhone y iPad. Tutoriales paso a paso, guías de configuración, solución de problemas y últimas funciones.',
  alternates: buildAlternates({
    en: '/blog',
    fr: '/fr/blog',
    es: '/es/blog',
    pt: '/pt/blog',
  }, 'es'),
  openGraph: {
    ...defaultOG,
    type: 'website',
    locale: 'es_ES',
    url: `${SITE.url}/es/blog`,
    title: 'Blog EDGE IPTV - Tutoriales y Guías',
    description: 'Aprende todo sobre streaming IPTV en iPhone y iPad con nuestros tutoriales y guías completas.',
  },
};

export default function BlogPageES() {
  return <BlogIndex lang="es" />;
}
