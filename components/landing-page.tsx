import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Check, ChevronRight } from 'lucide-react';
import { BlogHeader } from '@/components/blog-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { DownloadButton } from '@/components/download-button';
import { blogPath, installGuidePath } from '@/lib/blog-posts';
import { type Lang, LANGS, LOCALES, homePath } from '@/lib/i18n';
import { defaultOG, defaultTwitter, SITE } from '@/lib/seo-config';
import { type LandingId, LANDING_IDS, landingAlternates, landingPath } from '@/lib/landing/registry';
import { type LandingCopy, LANDING_UI } from '@/lib/landing/types';
import { M3U_COPY } from '@/lib/landing/m3u';
import { XTREAM_COPY } from '@/lib/landing/xtream';
import { IPAD_COPY } from '@/lib/landing/ipad';

const COPY: Record<LandingId, Record<Lang, LandingCopy>> = {
  m3u: M3U_COPY,
  xtream: XTREAM_COPY,
  ipad: IPAD_COPY,
};

export function landingCopy(id: LandingId, lang: Lang): LandingCopy {
  return COPY[id][lang];
}

function heroImage(id: LandingId, lang: Lang) {
  if (id === 'ipad') return { src: `/images/ipad-epg-${lang}.webp`, width: 1400, height: 1058 };
  if (id === 'xtream') return { src: '/images/movie-details.webp', width: 1206, height: 2622 };
  return { src: '/images/epg-screen.webp', width: 1206, height: 2622 };
}

export function landingMetadata(id: LandingId, lang: Lang): Metadata {
  const copy = COPY[id][lang];
  const image = `${SITE.url}${heroImage(id, lang).src}`;
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: landingAlternates(id, lang),
    openGraph: {
      ...defaultOG,
      type: 'website',
      locale: LOCALES[lang].ogLocale,
      url: `${SITE.url}${landingPath(id, lang)}`,
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [image],
    },
    twitter: {
      ...defaultTwitter,
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: [image],
    },
  };
}

export function LandingPage({ id, lang }: { id: LandingId; lang: Lang }) {
  const copy = COPY[id][lang];
  const ui = LANDING_UI[lang];
  const image = heroImage(id, lang);
  const isTablet = id === 'ipad';
  const location = `landing-${id}${lang === 'en' ? '' : `-${lang}`}`;
  const others = LANDING_IDS.filter((other) => other !== id);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div lang={LOCALES[lang].htmlLang} dir={LOCALES[lang].dir} className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogHeader currentLang={lang} />

      {/* ── Hero ── */}
      <section className="border-b border-border/50 bg-gradient-to-b from-secondary/40 to-background pb-16 pt-28">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumb
            items={[{ label: ui.home, href: homePath(lang) }]}
            currentPage={copy.navLabel}
            lang={lang}
          />
          <div
            className={`grid items-center gap-12 ${
              isTablet ? 'lg:grid-cols-[1fr_1.1fr]' : 'md:grid-cols-[1.4fr_1fr]'
            }`}
          >
            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                {copy.eyebrow}
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight lg:text-6xl">{copy.title}</h1>
              <p className="mt-6 text-xl text-muted-foreground">{copy.intro}</p>
              <DownloadButton location={`${location}-hero`} size="lg" className="mt-8">
                {ui.cta}
              </DownloadButton>
              <p className="mt-4 text-sm text-muted-foreground">{ui.fineprint}</p>
            </div>
            <div className="flex justify-center">
              <Image
                src={image.src}
                alt={copy.imageAlt}
                width={image.width}
                height={image.height}
                priority
                sizes={isTablet ? '(min-width: 1024px) 560px, 100vw' : '(min-width: 768px) 320px, 70vw'}
                className={
                  isTablet
                    ? 'h-auto w-full max-w-xl rounded-2xl border border-border/50 shadow-2xl'
                    : 'h-auto w-full max-w-[300px] rounded-[2.5rem] border border-border/50 shadow-2xl'
                }
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-4xl px-4 py-16">
        {/* ── What you need ── */}
        <section className="rounded-2xl border border-border/60 bg-secondary/20 p-6">
          <h2 className="text-lg font-semibold">{copy.needTitle}</h2>
          <ul className="mt-4 space-y-2">
            {copy.need.map((item) => (
              <li key={item} className="flex items-start gap-2 text-muted-foreground">
                <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Steps ── */}
        <h2 className="mt-16 text-3xl font-bold">{copy.stepsTitle}</h2>
        <ol className="mt-8 space-y-6">
          {copy.steps.map(({ title, description }, i) => (
            <li key={title} className="flex items-start gap-4">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* ── Features ── */}
        <h2 className="mt-16 text-3xl font-bold">{copy.featuresTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {copy.features.map(({ title, description }) => (
            <div key={title} className="rounded-xl border border-border/50 bg-card p-5">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        {/* ── Explainer ── */}
        <h2 className="mt-16 text-3xl font-bold">{copy.explainTitle}</h2>
        {copy.explain.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mt-4 leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}

        <div className="mt-12 rounded-3xl border border-border/50 bg-card p-8 text-center shadow-lg">
          <DownloadButton location={`${location}-middle`} size="lg">
            {ui.cta}
          </DownloadButton>
          <p className="mt-4 text-sm text-muted-foreground">{ui.fineprint}</p>
        </div>

        {/* ── FAQ ── */}
        <h2 className="mt-16 text-3xl font-bold">{ui.faqTitle}</h2>
        <div className="mt-8 space-y-4">
          {copy.faq.map(({ q, a }) => (
            <details key={q} className="group overflow-hidden rounded-xl border border-border/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold transition-colors hover:bg-secondary/30">
                {q}
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-90 rtl:rotate-180" />
              </summary>
              <div className="border-t border-border/40 px-6 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground">
                {a}
              </div>
            </details>
          ))}
        </div>

        {/* ── Internal links ── */}
        <nav className="mt-16 grid gap-8 sm:grid-cols-2" aria-label={ui.more}>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {ui.more}
            </h2>
            <ul className="mt-4 space-y-3">
              {others.map((other) => (
                <li key={other}>
                  <Link href={landingPath(other, lang)} className="text-primary hover:underline">
                    {COPY[other][lang].navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {ui.guides}
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href={installGuidePath(lang)} className="text-primary hover:underline">
                  {ui.installGuide}
                </Link>
              </li>
              <li>
                <Link href={blogPath(lang)} className="text-primary hover:underline">
                  {ui.blog}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </main>

      <footer className="border-t border-border/50 bg-secondary/50 py-10">
        <div className="container mx-auto px-4">
          {/* Same page in every language, server-rendered so crawlers see it. */}
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {LANGS.map((l) => (
              <li key={l}>
                <Link
                  href={landingPath(id, l)}
                  hrefLang={LOCALES[l].htmlLang}
                  className={
                    l === lang
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground transition-colors hover:text-primary'
                  }
                >
                  {LOCALES[l].label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} EDGE IPTV. {ui.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
