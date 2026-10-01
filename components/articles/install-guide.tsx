import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowLeft, Check } from 'lucide-react';
import { ArticleProductLinks } from '@/components/article-product-links';
import { BlogHeader } from '@/components/blog-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { DownloadButton } from '@/components/download-button';
import { plain, rich } from '@/components/rich-text';
import { INSTALL_GUIDE_COPY } from '@/lib/articles/install-guide';
import { buildBlogAlternates, installGuidePath } from '@/lib/blog-posts';
import { type Lang, LOCALES, homePath, legalPath } from '@/lib/i18n';
import { defaultOG, defaultTwitter, SITE } from '@/lib/seo-config';

const PUBLISHED = '2026-01-05';
const MODIFIED = '2026-10-01';

function slugOf(lang: Lang): string {
  return installGuidePath(lang).split('/').pop() ?? '';
}

export function installGuideMetadata(lang: Lang): Metadata {
  const copy = INSTALL_GUIDE_COPY[lang];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: buildBlogAlternates(slugOf(lang), lang),
    openGraph: {
      ...defaultOG,
      type: 'article',
      locale: LOCALES[lang].ogLocale,
      url: `${SITE.url}${installGuidePath(lang)}`,
      title: copy.metaTitle,
      description: copy.metaDescription,
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
    },
    twitter: { ...defaultTwitter, title: copy.metaTitle, description: copy.metaDescription },
  };
}

function Step({ id, n, title, children }: { id: string; n: number; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative rounded-2xl border-s-4 border-blue-600 bg-secondary/40 p-8">
      <span className="absolute -start-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-lg">
        {n}
      </span>
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

export function InstallGuide({ lang }: { lang: Lang }) {
  const copy = INSTALL_GUIDE_COPY[lang];
  const pageUrl = `${SITE.url}${installGuidePath(lang)}`;
  const location = lang === 'en' ? 'guide' : `guide-${lang}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: copy.title,
    description: copy.metaDescription,
    inLanguage: LOCALES[lang].htmlLang,
    image: `${SITE.url}/images/iphone-series-3d.png`,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/images/icon.png` },
    },
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: pageUrl,
  };

  // Google no longer shows HowTo rich results, but the steps still describe
  // the page's structure to anything that reads them.
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.title,
    description: copy.intro,
    inLanguage: LOCALES[lang].htmlLang,
    totalTime: 'PT2M',
    step: [
      { name: copy.step1Title, text: copy.step1Body, anchor: 'step1' },
      { name: copy.step2Title, text: copy.step2Body, anchor: 'step2' },
      { name: copy.step3Title, text: `${copy.step3Body} ${copy.step3List.map(plain).join(' ')}`, anchor: 'step3' },
      { name: copy.step4Title, text: copy.step4Body, anchor: 'step4' },
    ].map(({ name, text, anchor }, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name,
      text,
      url: `${pageUrl}#${anchor}`,
    })),
  };

  return (
    <div lang={LOCALES[lang].htmlLang} dir={LOCALES[lang].dir} className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <BlogHeader currentLang={lang} />

      <main className="pb-20 pt-28">
        <div className="container mx-auto max-w-3xl px-4">
          <Breadcrumb items={[{ label: copy.home, href: homePath(lang) }]} currentPage={copy.breadcrumb} lang={lang} />

          <header className="mb-12 text-center">
            <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
              {copy.title}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>
            <DownloadButton location={`${location}-header`} size="lg">
              {copy.finalButton}
            </DownloadButton>
          </header>

          <div className="mb-12 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950/30">
            <p className="mb-4 text-lg font-bold text-blue-800 dark:text-blue-200">{copy.needTitle}</p>
            <ul className="space-y-2">
              {copy.need.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12">
            <Step id="step1" n={1} title={copy.step1Title}>
              <p className="mb-4 leading-relaxed text-muted-foreground">{copy.step1Body}</p>
              <p className="mb-2 font-semibold">{copy.whyTitle}</p>
              <ul className="mb-6 space-y-2 text-muted-foreground">
                {copy.why.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <DownloadButton location={`${location}-step1`} size="md">
                {copy.step1Button}
              </DownloadButton>
            </Step>

            <Step id="step2" n={2} title={copy.step2Title}>
              <p className="mb-6 leading-relaxed text-muted-foreground">{copy.step2Body}</p>
              <Image
                src="/images/language-selection.webp"
                alt={copy.languageAlt}
                width={1170}
                height={2532}
                loading="lazy"
                sizes="280px"
                className="mx-auto h-auto w-full max-w-[280px] rounded-[2rem] border border-border shadow-lg"
              />
            </Step>

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
              <p className="mb-3 text-2xl font-bold">{copy.midTitle}</p>
              <p className="mb-6 text-blue-100">{copy.midBody}</p>
              <DownloadButton location={`${location}-intermediate`} size="lg" variant="white">
                {copy.midButton}
              </DownloadButton>
            </div>

            <Step id="step3" n={3} title={copy.step3Title}>
              <p className="mb-4 leading-relaxed text-muted-foreground">{copy.step3Body}</p>
              <ol className="mb-6 ms-2 list-inside list-decimal space-y-3 text-muted-foreground">
                <li>{rich(copy.step3List[0])}</li>
                <li>
                  {rich(copy.step3List[1])}
                  <ul className="ms-6 mt-2 list-inside list-disc space-y-1">
                    {copy.fields.map(({ label, hint }) => (
                      <li key={label}>
                        <strong>{label}</strong> — <span dir="auto">{hint}</span>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>{rich(copy.step3List[2])}</li>
              </ol>
              <p className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950/30 dark:text-yellow-100">
                {copy.step3Note}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{rich(copy.m3uNote)}</p>
            </Step>

            <Step id="step4" n={4} title={copy.step4Title}>
              <p className="mb-6 leading-relaxed text-muted-foreground">{copy.step4Body}</p>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { src: '/images/series-view.webp', alt: copy.seriesAlt },
                  { src: '/images/movie-details.webp', alt: copy.movieAlt },
                ].map(({ src, alt }) => (
                  <Image
                    key={src}
                    src={src}
                    alt={alt}
                    width={1206}
                    height={2622}
                    loading="lazy"
                    sizes="(max-width: 640px) 80vw, 320px"
                    className="mx-auto h-auto w-full max-w-[280px] rounded-[2rem] border border-border shadow-lg"
                  />
                ))}
              </div>
            </Step>
          </div>

          <ArticleProductLinks lang={lang} />

          <div className="mt-16 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-10 text-center dark:border-blue-800 dark:from-blue-950/30 dark:to-purple-950/30">
            <h2 className="mb-4 text-3xl font-bold">{copy.finalTitle}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">{copy.finalBody}</p>
            <DownloadButton location={`${location}-final`} size="xl">
              {copy.finalButton}
            </DownloadButton>
            <p className="mt-4 text-sm text-muted-foreground">{copy.fineprint}</p>
          </div>

          <div className="mt-16 border-t border-border pt-8 text-center">
            <Link
              href={homePath(lang)}
              className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:underline"
            >
              <ArrowLeft size={20} className="rtl:rotate-180" />
              {copy.back}
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50 bg-secondary/50 py-10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <div className="mb-6 flex flex-wrap justify-center gap-6">
            <Link href={legalPath(lang, 'privacy-policy')} className="hover:text-foreground">
              {copy.privacy}
            </Link>
            <Link href={legalPath(lang, 'terms-of-use')} className="hover:text-foreground">
              {copy.terms}
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} EDGE IPTV. {copy.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
