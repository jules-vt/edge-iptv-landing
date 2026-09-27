'use client';

import React from 'react';
import { List } from 'lucide-react';
import { cn } from '@/lib/utils';

const TITLES: Record<string, string> = {
  en: 'On this page',
  fr: 'Sur cette page',
  es: 'En esta página',
  pt: 'Nesta página',
};

interface Heading {
  id: string;
  text: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

/**
 * Table of contents built from the article's own <h2>s at runtime.
 *
 * Reading it from the DOM rather than from props means the 21 existing article
 * pages need no changes. Headings that have no id get one here, which also
 * gives every section a linkable anchor.
 */
export function ArticleToc({ lang = 'en' }: { lang?: string }) {
  const [headings, setHeadings] = React.useState<Heading[]>([]);
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    // Scoped to the body, not the whole <article>: the layout's own "Ready to
    // get started?" and "Keep reading" headings are not article sections.
    const article = document.querySelector('.article-body');
    if (!article) return;

    const found: Heading[] = [];
    const used = new Set<string>();

    article.querySelectorAll('h2').forEach((el) => {
      const text = el.textContent?.trim();
      if (!text) return;

      let id = el.id || slugify(text);
      let n = 2;
      while (used.has(id)) id = `${slugify(text)}-${n++}`;
      used.add(id);

      el.id = id;
      el.style.scrollMarginTop = '6rem';
      found.push({ id, text });
    });

    setHeadings(found);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -70% 0px' },
    );

    found.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Short articles don't need navigation.
  if (headings.length < 3) return null;

  return (
    <nav aria-label={TITLES[lang] ?? TITLES.en} className="text-sm">
      <p className="mb-3 flex items-center gap-2 font-semibold text-foreground">
        <List className="h-4 w-4 text-primary" />
        {TITLES[lang] ?? TITLES.en}
      </p>
      <ul className="space-y-1 border-l border-border">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                '-ml-px block border-l-2 py-1.5 pl-4 leading-snug transition-colors',
                activeId === id
                  ? 'border-primary font-medium text-primary'
                  : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground',
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
