'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { DownloadButton } from '@/components/download-button';
import type { Lang } from '@/lib/blog-posts';

const COPY: Record<Lang, { eyebrow: string; title: string; cta: string; meta: string }> = {
  en: {
    eyebrow: 'The app behind this guide',
    title: 'Set this up in EDGE IPTV',
    cta: 'Get it on the App Store',
    meta: 'iPhone & iPad · 7-day free trial',
  },
  fr: {
    eyebrow: "L'app derrière ce guide",
    title: 'Faites-le dans EDGE IPTV',
    cta: "Télécharger sur l'App Store",
    meta: 'iPhone & iPad · 7 jours d’essai gratuit',
  },
  es: {
    eyebrow: 'La app detrás de esta guía',
    title: 'Configúralo en EDGE IPTV',
    cta: 'Descargar en la App Store',
    meta: 'iPhone y iPad · 7 días de prueba gratis',
  },
  pt: {
    eyebrow: 'O app por trás deste guia',
    title: 'Faça isso no EDGE IPTV',
    cta: 'Baixar na App Store',
    meta: 'iPhone e iPad · 7 dias de teste grátis',
  },
};

/**
 * Compact call to action placed directly under the article header.
 *
 * The previous template offered its first App Store link only at ~70% of the
 * page, so most readers never saw one.
 */
export function ArticleCtaInline({ lang = 'en' }: { lang?: Lang }) {
  const copy = COPY[lang];

  return (
    <aside className="my-10 flex flex-col gap-5 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:flex-row sm:items-center">
      <Image
        src="/images/icon.webp"
        alt="EDGE IPTV"
        width={64}
        height={64}
        className="h-14 w-14 shrink-0 rounded-xl shadow-md"
      />
      <div className="flex-1">
        <p className="text-xs font-medium uppercase tracking-wide text-primary">{copy.eyebrow}</p>
        <p className="mt-0.5 font-semibold text-foreground">{copy.title}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          {copy.meta}
        </p>
      </div>
      <DownloadButton location="article-inline" size="md" className="shrink-0 !text-sm">
        {copy.cta}
      </DownloadButton>
    </aside>
  );
}

/** Sticky sidebar version, desktop only. */
export function ArticleCtaCard({ lang = 'en' }: { lang?: Lang }) {
  const copy = COPY[lang];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
      <Image
        src="/images/icon.webp"
        alt="EDGE IPTV"
        width={56}
        height={56}
        className="mx-auto h-12 w-12 rounded-xl shadow-md"
      />
      <p className="mt-3 text-sm font-semibold">{copy.title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{copy.meta}</p>
      <DownloadButton
        location="article-sidebar"
        size="md"
        className="mt-4 w-full justify-center !px-4 !text-sm"
      >
        {copy.cta}
      </DownloadButton>
    </div>
  );
}

/**
 * Mobile sticky bar. Mobile is 450 of the site's 628 annual clicks, so this is
 * the placement that matters most.
 */
export function ArticleCtaSticky({ lang = 'en' }: { lang?: Lang }) {
  const [visible, setVisible] = React.useState(false);
  const copy = COPY[lang];

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 xl:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto flex items-center gap-3">
        <Image
          src="/images/icon.webp"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-lg shadow"
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">EDGE IPTV</p>
          <p className="truncate text-xs text-muted-foreground">{copy.meta}</p>
        </div>
        <DownloadButton location="article-sticky" size="md" className="shrink-0 !px-4 !py-2 !text-sm">
          {copy.cta}
        </DownloadButton>
      </div>
    </div>
  );
}
