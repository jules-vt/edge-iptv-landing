import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { buildAlternates, defaultOG, SITE } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: 'Blog EDGE IPTV - Tutoriais, Guias e Dicas para Streaming iOS',
  description: 'Aprenda tudo sobre streaming IPTV no iPhone e iPad. Tutoriais passo a passo, guias de configuração, solução de problemas e recursos mais recentes.',
  alternates: buildAlternates({
    en: '/blog',
    fr: '/fr/blog',
    es: '/es/blog',
    pt: '/pt/blog',
  }, 'pt'),
  openGraph: {
    ...defaultOG,
    type: 'website',
    locale: 'pt_BR',
    url: `${SITE.url}/pt/blog`,
    title: 'Blog EDGE IPTV - Tutoriais e Guias',
    description: 'Aprenda tudo sobre streaming IPTV no iPhone e iPad com nossos tutoriais e guias completos.',
  },
};

export default function BlogPagePT() {
  return <BlogIndex lang="pt" />;
}
