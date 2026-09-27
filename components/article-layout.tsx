import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { BlogHeader } from '@/components/blog-header';
import { Breadcrumb } from '@/components/breadcrumb';
import { ArticleToc } from '@/components/article-toc';
import { ArticleCtaCard, ArticleCtaInline, ArticleCtaSticky } from '@/components/article-cta';
import { RelatedArticles } from '@/components/related-articles';
import { DownloadButton } from '@/components/download-button';
import { formatPostDate } from '@/lib/format-date';
import type { Lang } from '@/lib/blog-posts';

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  date: string;
  readTime: string;
  lang?: Lang;
  breadcrumbItems?: Array<{ label: string; href: string }>;
}

const COPY: Record<Lang, { back: string; blog: string; ctaTitle: string; ctaBody: string; ctaButton: string }> = {
  en: {
    back: 'Back to Blog',
    blog: '/blog',
    ctaTitle: 'Ready to get started?',
    ctaBody: 'Download EDGE IPTV and set up your playlist in about two minutes.',
    ctaButton: 'Get it on the App Store',
  },
  fr: {
    back: 'Retour au Blog',
    blog: '/fr/blog',
    ctaTitle: 'Prêt à commencer ?',
    ctaBody: 'Téléchargez EDGE IPTV et configurez votre playlist en deux minutes environ.',
    ctaButton: "Télécharger sur l'App Store",
  },
  es: {
    back: 'Volver al Blog',
    blog: '/es/blog',
    ctaTitle: '¿Listo para empezar?',
    ctaBody: 'Descarga EDGE IPTV y configura tu lista en unos dos minutos.',
    ctaButton: 'Descargar en la App Store',
  },
  pt: {
    back: 'Voltar ao Blog',
    blog: '/pt/blog',
    ctaTitle: 'Pronto para começar?',
    ctaBody: 'Baixe o EDGE IPTV e configure sua playlist em cerca de dois minutos.',
    ctaButton: 'Baixar na App Store',
  },
};

/**
 * Slip the call to action in just after the article's opening paragraph.
 *
 * Pages pass a breadcrumb, a schema <script> and then one wrapper div holding
 * the whole body, so the CTA is injected inside that wrapper, after its lead
 * paragraph. Anything shaped differently gets it ahead of the body — still far
 * earlier than the old template, whose first App Store link sat at 70% of the
 * page, well past where most readers stop.
 */
function withInlineCta(children: React.ReactNode, lang: Lang): React.ReactNode {
  const items = React.Children.toArray(children);
  const cta = <ArticleCtaInline key="inline-cta" lang={lang} />;
  const lastIndex = items.length - 1;
  const body = items[lastIndex];

  if (React.isValidElement(body)) {
    const bodyChildren = React.Children.toArray(
      (body.props as { children?: React.ReactNode }).children,
    );

    if (bodyChildren.length > 2) {
      const withCta = React.cloneElement(
        body as React.ReactElement<{ children?: React.ReactNode }>,
        undefined,
        [bodyChildren[0], cta, ...bodyChildren.slice(1)],
      );
      return [...items.slice(0, lastIndex), withCta];
    }
  }

  return [...items.slice(0, lastIndex), cta, body];
}

export function ArticleLayout({
  children,
  title,
  description,
  date,
  readTime,
  lang = 'en',
  breadcrumbItems = [],
}: ArticleLayoutProps) {
  const copy = COPY[lang];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader currentLang={lang} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 xl:grid-cols-[minmax(0,1fr)_260px]">
          <article className="min-w-0">
            {breadcrumbItems.length > 0 && (
              <Breadcrumb items={breadcrumbItems} currentPage={title} lang={lang} />
            )}

            <Link
              href={copy.blog}
              className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {copy.back}
            </Link>

            <header>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
              <p className="mt-6 text-xl text-muted-foreground">{description}</p>
              <div className="mt-6 flex items-center gap-6 border-b border-border/50 pb-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={date}>{formatPostDate(date, lang)}</time>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {readTime}
                </span>
              </div>
            </header>

            <div className="article-body">{withInlineCta(children, lang)}</div>

            <div className="mt-16 border-t border-border/50 pt-12">
              <div className="rounded-2xl border border-border/50 bg-card p-8 text-center shadow-lg">
                <h2 className="text-2xl font-bold">{copy.ctaTitle}</h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">{copy.ctaBody}</p>
                <DownloadButton location="article-footer" size="lg" className="mt-6">
                  {copy.ctaButton}
                </DownloadButton>
              </div>
            </div>

            <RelatedArticles lang={lang} />
          </article>

          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-6">
              <ArticleToc lang={lang} />
              <ArticleCtaCard lang={lang} />
            </div>
          </aside>
        </div>
      </main>

      <ArticleCtaSticky lang={lang} />

      <footer className="mt-16 border-t border-border/50 bg-secondary/50 py-8 pb-24 xl:pb-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EDGE IPTV.{' '}
            {lang === 'en'
              ? 'All rights reserved.'
              : lang === 'fr'
                ? 'Tous droits réservés.'
                : lang === 'es'
                  ? 'Todos los derechos reservados.'
                  : 'Todos os direitos reservados.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
