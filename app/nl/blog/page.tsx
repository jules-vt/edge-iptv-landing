import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { defaultOG, SITE } from '@/lib/seo-config';
import { blogIndexAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: "EDGE IPTV-blog: handleidingen en tips voor iPhone",
  description: "Alles over IPTV op iPhone en iPad: instellen, vergelijkingen en tips om het meeste uit EDGE IPTV te halen.",
  alternates: blogIndexAlternates('nl'),
  openGraph: {
    ...defaultOG,
    type: 'website',
    locale: 'nl_NL',
    url: `${SITE.url}/nl/blog`,
    title: "EDGE IPTV-blog: handleidingen en tips voor iPhone",
    description: "Alles over IPTV op iPhone en iPad: instellen, vergelijkingen en tips om het meeste uit EDGE IPTV te halen.",
  },
};

export default function BlogPageNL() {
  return <BlogIndex lang="nl" />;
}
