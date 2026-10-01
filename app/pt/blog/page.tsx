import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { defaultOG, SITE } from '@/lib/seo-config';
import { blogIndexAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog EDGE IPTV - Tutoriais, Guias e Dicas para Streaming iOS',
  description: 'Aprenda tudo sobre streaming IPTV no iPhone e iPad. Tutoriais passo a passo, guias de configuração, solução de problemas e recursos mais recentes.',
  alternates: blogIndexAlternates('pt'),
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
