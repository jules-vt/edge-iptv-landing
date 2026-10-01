'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { type Lang, blogPosts, postPath } from '@/lib/blog-posts';
import { type PageId, landingPath } from '@/lib/landing/registry';
import { NAV_LABELS } from '@/lib/landing/nav-labels';
import { LANDING_UI } from '@/lib/landing/types';

/**
 * Product pages and tools relevant to each article, by translation group.
 *
 * The articles are where the site's existing traffic and links are; linking
 * from them is what gives the new product pages a chance to rank.
 */
const LINKS: Record<string, PageId[]> = {
  'm3u-setup': ['m3uChecker', 'm3u'],
  'xtream-setup': ['xtream', 'm3uChecker'],
  'install-guide': ['xtream', 'm3u', 'ipad'],
  'best-iptv-app-iphone': ['m3u', 'xtream', 'ipad'],
  'best-player-ios': ['ipad', 'm3u', 'xtream'],
  chromecast: ['m3u', 'xtream'],
  'buffering-fix': ['m3uChecker', 'xtream'],
};

export function ArticleProductLinks({ lang = 'en' }: { lang?: Lang }) {
  const pathname = usePathname().replace(/\.html$/, '').replace(/\/$/, '');
  const post = blogPosts.find((p) => postPath(p) === pathname);
  const ids = post ? LINKS[post.translationGroup] : undefined;
  if (!ids) return null;

  return (
    <section className="mt-12 rounded-2xl border border-border/60 bg-secondary/20 p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {LANDING_UI[lang].more}
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {ids.map((id) => (
          <li key={id}>
            <Link
              href={landingPath(id, lang)}
              className="group inline-flex items-center gap-2 font-medium text-primary hover:underline"
            >
              {NAV_LABELS[id][lang]}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
