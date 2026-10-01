import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Check, X, ChevronRight, Smartphone, Wifi, Download, Tv } from 'lucide-react';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';
import { Breadcrumb } from '@/components/breadcrumb';
import { defaultOG, defaultTwitter, SITE, schemaPublisher } from '@/lib/seo-config';
import {
  blogPath,
  buildBlogAlternates,
  getPostBySlug,
  getPostsByLang,
  installGuidePath,
  postPath,
} from '@/lib/blog-posts';
import { BEST_IPHONE_COPY } from '@/lib/articles/best-iptv-app-iphone';
import { plain, rich } from '@/components/rich-text';
import { type Lang, LOCALES, homePath } from '@/lib/i18n';

// Primary target: "best iptv app for iphone" and its equivalent in each
// language. Copy lives in lib/articles/best-iptv-app-iphone.ts.

const PUBLISHED = '2026-03-11';
const MODIFIED = '2026-10-01';

interface AppRow {
  name: string;
  rating: string | null;
  price: 'edge' | 'iap' | 'free';
  chromecast: boolean;
  offline: boolean;
  setupTime: string;
  highlight?: boolean;
}

const APPS: AppRow[] = [
  // No self-assigned score: the app is recent and has no meaningful public
  // average yet. Inventing one is what the fake review schema did.
  { name: 'EDGE IPTV', rating: null, price: 'edge', chromecast: true, offline: true, setupTime: '< 2 min', highlight: true },
  { name: 'GSE Smart IPTV', rating: '4.1', price: 'iap', chromecast: false, offline: false, setupTime: '~10 min' },
  { name: 'Flex IPTV', rating: '3.8', price: 'iap', chromecast: false, offline: false, setupTime: '~8 min' },
  { name: 'IPTV Smarters', rating: '3.5', price: 'iap', chromecast: false, offline: false, setupTime: '~5 min' },
  { name: 'Opus IPTV Player', rating: '3.7', price: 'free', chromecast: false, offline: false, setupTime: '~10 min' },
];

const CRITERIA_ICONS = [Smartphone, Wifi, Tv, Download];

export function bestIphoneMetadata(lang: Lang): Metadata {
  const copy = BEST_IPHONE_COPY[lang];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: copy.keywords,
    alternates: buildBlogAlternates(copy.slug, lang),
    openGraph: {
      ...defaultOG,
      locale: LOCALES[lang].ogLocale,
      title: copy.metaTitle,
      description: copy.socialDescription,
      type: 'article',
      publishedTime: PUBLISHED,
      modifiedTime: MODIFIED,
    },
    twitter: {
      ...defaultTwitter,
      title: copy.metaTitle,
      description: copy.socialDescription,
    },
  };
}

function CheckIcon() {
  return <Check className="w-4 h-4 text-green-600 mx-auto" />;
}

function CrossIcon() {
  return <X className="w-4 h-4 text-red-400 mx-auto" />;
}

export function BestIptvAppIphone({ lang }: { lang: Lang }) {
  const copy = BEST_IPHONE_COPY[lang];
  const post = getPostBySlug(copy.slug, lang);
  const pageUrl = `${SITE.url}${post ? postPath(post) : `/blog/${copy.slug}`}`;
  const location = lang === 'en' ? 'article-iphone' : `article-iphone-${lang}`;

  const related = getPostsByLang(lang)
    .filter((p) => p.translationGroup !== 'best-iptv-app-iphone')
    .slice(0, 6);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: copy.title,
    description: copy.lead,
    inLanguage: LOCALES[lang].htmlLang,
    image: `${SITE.url}/images/iphone-series-3d.png`,
    author: { '@type': 'Organization', name: copy.author },
    publisher: schemaPublisher,
    datePublished: post?.date ?? PUBLISHED,
    dateModified: MODIFIED,
    mainEntityOfPage: pageUrl,
    keywords: copy.keywords.join(', '),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: plain(a) },
    })),
  };

  return (
    <ArticleLayout
      title={copy.title}
      description={copy.lead}
      date={post?.date ?? PUBLISHED}
      readTime={copy.readTime}
      lang={lang}
    >
      <Breadcrumb
        items={[
          { label: copy.home, href: homePath(lang) },
          { label: copy.blog, href: blogPath(lang) },
        ]}
        currentPage={copy.breadcrumb}
        lang={lang}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* One wrapper, so ArticleLayout slips its CTA in after the intro. */}
      <div>
        <p className="lead text-xl text-muted-foreground mb-8">{rich(copy.intro)}</p>

        {/* ── TL;DR ── */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-10">
          <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-3">
            {copy.quickLabel}
          </p>
          <p className="text-foreground font-medium">{rich(copy.quickAnswer)}</p>
          <div className="mt-4">
            <DownloadButton location={`${location}-tldr`} size="md">
              {copy.trialCta}
            </DownloadButton>
          </div>
        </div>

        {/* ── What to look for ── */}
        <h2 className="text-3xl font-bold mt-12 mb-6">{copy.criteriaTitle}</h2>
        <p className="text-muted-foreground mb-6">{copy.criteriaIntro}</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {copy.criteria.map(({ title, description }, i) => {
            const Icon = CRITERIA_ICONS[i];
            return (
              <div
                key={title}
                className="flex gap-4 p-4 rounded-xl bg-secondary/30 border border-border/40"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Comparison table ── */}
        <h2 className="text-3xl font-bold mt-12 mb-6">{copy.tableTitle}</h2>
        <div className="overflow-x-auto mb-10 rounded-xl border border-border shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-secondary/60 text-foreground">
                <th className="px-4 py-3 text-start font-semibold">{copy.table.app}</th>
                <th className="px-4 py-3 text-center font-semibold">{copy.table.rating}</th>
                <th className="px-4 py-3 text-center font-semibold">{copy.table.price}</th>
                <th className="px-4 py-3 text-center font-semibold">{copy.table.chromecast}</th>
                <th className="px-4 py-3 text-center font-semibold">{copy.table.offline}</th>
                <th className="px-4 py-3 text-center font-semibold">{copy.table.setup}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {APPS.map((app) => (
                <tr
                  key={app.name}
                  className={
                    app.highlight
                      ? 'bg-blue-50 dark:bg-blue-950/20 font-medium'
                      : 'bg-background hover:bg-secondary/20 transition-colors'
                  }
                >
                  <td className="px-4 py-3 text-start">
                    <span className={app.highlight ? 'text-primary font-bold' : ''}>{app.name}</span>
                    {app.highlight && (
                      <span className="ms-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        {copy.topPick}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {app.rating ? `★ ${app.rating}` : copy.newLabel}
                  </td>
                  <td className="px-4 py-3 text-center">{copy.prices[app.price]}</td>
                  <td className="px-4 py-3 text-center">
                    {app.chromecast ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {app.offline ? <CheckIcon /> : <CrossIcon />}
                  </td>
                  <td className="px-4 py-3 text-center text-muted-foreground" dir="ltr">
                    {app.setupTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── #1 EDGE IPTV ── */}
        <h2 className="text-3xl font-bold mt-12 mb-6">{copy.edgeTitle}</h2>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl border-2 border-blue-200 dark:border-blue-800 p-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Image
              src="/images/icon.png"
              alt={copy.iconAlt}
              width={96}
              height={96}
              className="rounded-2xl shadow-lg flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold m-0">EDGE IPTV</h3>
                <span className="text-sm text-green-700 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900/40 border border-green-200 dark:border-green-700 px-3 py-1 rounded-full">
                  {copy.trialBadge}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{copy.edgeSummary}</p>
              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {copy.edgeFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <DownloadButton location={`${location}-main-cta`} size="md">
                {copy.trialCtaStore}
              </DownloadButton>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-10 mb-4">{copy.whyTitle}</h3>
        {copy.why.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-muted-foreground">
            {rich(paragraph)}
          </p>
        ))}

        {/* ── #2–5 ── */}
        <h2 className="text-3xl font-bold mt-14 mb-8">{copy.othersTitle}</h2>
        {copy.others.map((app, i) => (
          <div
            key={app.id}
            className={`border border-border/60 rounded-2xl p-6 hover:shadow-md transition-shadow ${
              i === copy.others.length - 1 ? 'mb-10' : 'mb-6'
            }`}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold">{app.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{app.meta}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{app.text}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {app.pros.map((pro) => (
                <div key={pro} className="flex items-center gap-1 text-green-700 dark:text-green-400">
                  <Check className="w-4 h-4" /> {pro}
                </div>
              ))}
              {app.cons.map((con) => (
                <div key={con} className="flex items-center gap-1 text-red-500">
                  <X className="w-4 h-4" /> {con}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ── How to get started ── */}
        <h2 className="text-3xl font-bold mt-12 mb-6">{copy.stepsTitle}</h2>
        <p className="text-muted-foreground mb-6">{copy.stepsIntro}</p>
        <div className="space-y-4 mb-10">
          {copy.steps.map(({ title, description }, i) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-10">
          <DownloadButton location={`${location}-steps-cta`} size="lg">
            {copy.trialCta}
          </DownloadButton>
        </div>

        {/* Only where the install guide exists in this language. */}
        {copy.guideLabel && (
          <p className="text-muted-foreground">
            {copy.guideBefore}
            <Link href={installGuidePath(lang)} className="text-primary hover:underline">
              {copy.guideLabel}
            </Link>
            {copy.guideAfter}
          </p>
        )}

        {/* ── iPhone-specific tips ── */}
        <h2 className="text-3xl font-bold mt-12 mb-6">{copy.tipsTitle}</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {copy.tips.map(({ title, description }) => (
            <div
              key={title}
              className="flex gap-3 p-4 rounded-xl border border-border/40 bg-secondary/20"
            >
              <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1 rtl:rotate-180" />
              <div>
                <p className="font-semibold text-sm text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Internal links, same language only ── */}
        {related.length > 0 && (
          <>
            <h2 className="text-3xl font-bold mt-12 mb-6">{copy.relatedTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={postPath(p)}
                  className="flex gap-3 p-4 rounded-xl border border-border/40 bg-secondary/20 hover:bg-secondary/50 hover:border-primary/30 transition-all group no-underline"
                >
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{p.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* ── FAQ ── */}
        <h2 className="text-3xl font-bold mt-12 mb-8">{copy.faqTitle}</h2>
        <div className="space-y-4 mb-10">
          {copy.faq.map(({ q, a }) => (
            <details key={q} className="group border border-border/60 rounded-xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-foreground hover:bg-secondary/30 transition-colors list-none">
                {q}
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-90 rtl:rotate-180" />
              </summary>
              <div className="px-6 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </ArticleLayout>
  );
}
