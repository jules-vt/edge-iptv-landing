import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';
import { BlogHeader } from '@/components/blog-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { M3UChecker } from '@/components/m3u-checker';
import { pageNavLabel } from '@/components/landing-page';
import { type Lang, LANGS, LOCALES, homePath } from '@/lib/i18n';
import { LANDING_IDS, landingAlternates, landingPath } from '@/lib/landing/registry';
import { LANDING_UI } from '@/lib/landing/types';
import { CHECKER_COPY } from '@/lib/m3u-checker-copy';
import { defaultOG, defaultTwitter, SITE } from '@/lib/seo-config';

export function checkerMetadata(lang: Lang): Metadata {
  const copy = CHECKER_COPY[lang];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: landingAlternates('m3uChecker', lang),
    openGraph: {
      ...defaultOG,
      type: 'website',
      locale: LOCALES[lang].ogLocale,
      url: `${SITE.url}${landingPath('m3uChecker', lang)}`,
      title: copy.metaTitle,
      description: copy.metaDescription,
    },
    twitter: { ...defaultTwitter, title: copy.metaTitle, description: copy.metaDescription },
  };
}

/**
 * The free M3U checker. The tool itself is a client component; everything
 * around it is server-rendered so the explanation and FAQ are in the HTML
 * Google reads.
 */
export function M3UCheckerPage({ lang }: { lang: Lang }) {
  const copy = CHECKER_COPY[lang];
  const ui = LANDING_UI[lang];
  const pageUrl = `${SITE.url}${landingPath('m3uChecker', lang)}`;

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: copy.title,
    description: copy.metaDescription,
    url: pageUrl,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    inLanguage: LOCALES[lang].htmlLang,
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogHeader currentLang={lang} />

      <main className="container mx-auto max-w-5xl px-4 pb-16 pt-28">
        <Breadcrumb items={[{ label: ui.home, href: homePath(lang) }]} currentPage={pageNavLabel('m3uChecker', lang)} lang={lang} />

        <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          {copy.eyebrow}
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">{copy.title}</h1>
        <p className="mt-4 max-w-3xl text-xl text-muted-foreground">{copy.intro}</p>

        <div className="mt-10">
          <M3UChecker ui={copy.ui} location={`m3u-checker${lang === 'en' ? '' : `-${lang}`}`} />
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-3xl font-bold">{copy.howTitle}</h2>
          <ol className="mt-6 space-y-4">
            {copy.how.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="pt-1 text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-16 text-3xl font-bold">{copy.checksTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {copy.checks.map(({ title, description }) => (
              <div key={title} className="rounded-xl border border-border/50 bg-card p-5">
                <p className="font-semibold">{title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-3xl font-bold">{ui.faqTitle}</h2>
          <div className="mt-6 space-y-4">
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

          <nav className="mt-16" aria-label={ui.more}>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{ui.more}</h2>
            <ul className="mt-4 space-y-3">
              {LANDING_IDS.map((id) => (
                <li key={id}>
                  <Link href={landingPath(id, lang)} className="text-primary hover:underline">
                    {pageNavLabel(id, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>

      <footer className="border-t border-border/50 bg-secondary/50 py-10">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {LANGS.map((l) => (
              <li key={l}>
                <Link
                  href={landingPath('m3uChecker', l)}
                  hrefLang={LOCALES[l].htmlLang}
                  className={l === lang ? 'font-medium text-foreground' : 'text-muted-foreground transition-colors hover:text-primary'}
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
