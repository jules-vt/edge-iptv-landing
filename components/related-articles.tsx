'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { type Lang, getPostsByLang, postPath } from '@/lib/blog-posts';
import { BlogCover } from '@/components/blog-cover';

const TITLES: Record<Lang, string> = {
  en: 'Keep reading',
  fr: 'À lire ensuite',
  es: 'Sigue leyendo',
  pt: 'Continue lendo',
};

/**
 * Three other guides in the same language.
 *
 * The current article is identified from the URL so the 21 existing pages need
 * no new props. Beyond keeping readers on the site, this gives the blog the
 * internal linking it had almost none of.
 */
export function RelatedArticles({ lang = 'en' }: { lang?: Lang }) {
  const pathname = usePathname();
  const currentSlug = pathname.replace(/\/$/, '').split('/').pop() ?? '';

  const related = getPostsByLang(lang)
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 border-t border-border/50 pt-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">{TITLES[lang]}</h2>
      <div className="grid gap-5 sm:grid-cols-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={postPath(post)}
            className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="h-24 shrink-0">
              <BlogCover translationGroup={post.translationGroup} />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
                {post.title}
              </p>
              <span className="mt-auto flex items-center gap-1 pt-3 text-xs font-medium text-primary">
                {post.readTime}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
