import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { defaultOG, SITE } from '@/lib/seo-config';
import { blogIndexAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog EDGE IPTV: tutoriales y guías IPTV para iPhone',
  description: 'Aprende todo sobre streaming IPTV en iPhone y iPad. Tutoriales paso a paso, guías de configuración, solución de problemas y últimas funciones.',
  alternates: blogIndexAlternates('es'),
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
