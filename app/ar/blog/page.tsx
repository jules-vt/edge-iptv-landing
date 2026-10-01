import React from 'react';
import { Metadata } from 'next';
import { BlogIndex } from '@/components/blog-index';
import { defaultOG, SITE } from '@/lib/seo-config';
import { blogIndexAlternates } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: "مدونة EDGE IPTV: شروحات ونصائح للآيفون",
  description: "كل ما تحتاج معرفته عن بث IPTV على الآيفون والآيباد: الإعداد والمقارنات والنصائح للاستفادة القصوى من EDGE IPTV.",
  alternates: blogIndexAlternates('ar'),
  openGraph: {
    ...defaultOG,
    type: 'website',
    locale: 'ar_AR',
    url: `${SITE.url}/ar/blog`,
    title: "مدونة EDGE IPTV: شروحات ونصائح للآيفون",
    description: "كل ما تحتاج معرفته عن بث IPTV على الآيفون والآيباد: الإعداد والمقارنات والنصائح للاستفادة القصوى من EDGE IPTV.",
  },
};

export default function BlogPageAR() {
  return <BlogIndex lang="ar" />;
}
