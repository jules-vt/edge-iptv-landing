import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { defaultOG, SITE } from '@/lib/seo-config';
import { blogIndexAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: "Blog EDGE IPTV: guide e consigli per iPhone",
  description: "Tutto sullo streaming IPTV su iPhone e iPad: configurazione, confronti e consigli per sfruttare al meglio EDGE IPTV.",
  alternates: blogIndexAlternates('it'),
  openGraph: {
    ...defaultOG,
    type: 'website',
    locale: 'it_IT',
    url: `${SITE.url}/it/blog`,
    title: "Blog EDGE IPTV: guide e consigli per iPhone",
    description: "Tutto sullo streaming IPTV su iPhone e iPad: configurazione, confronti e consigli per sfruttare al meglio EDGE IPTV.",
  },
};

export default function BlogPageIT() {
  return <BlogIndex lang="it" />;
}
