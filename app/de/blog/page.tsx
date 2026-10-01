import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { defaultOG, SITE } from '@/lib/seo-config';
import { blogIndexAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: "EDGE IPTV Blog: Anleitungen & Tipps fürs iPhone",
  description: "Alles über IPTV-Streaming auf iPhone und iPad: Einrichtung, Vergleiche und Tipps, um das Meiste aus EDGE IPTV herauszuholen.",
  alternates: blogIndexAlternates('de'),
  openGraph: {
    ...defaultOG,
    type: 'website',
    locale: 'de_DE',
    url: `${SITE.url}/de/blog`,
    title: "EDGE IPTV Blog: Anleitungen & Tipps fürs iPhone",
    description: "Alles über IPTV-Streaming auf iPhone und iPad: Einrichtung, Vergleiche und Tipps, um das Meiste aus EDGE IPTV herauszuholen.",
  },
};

export default function BlogPageDE() {
  return <BlogIndex lang="de" />;
}
