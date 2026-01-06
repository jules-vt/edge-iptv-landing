import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumb } from '@/components/breadcrumb';
import { getAlternateSlug } from '@/lib/blog-posts';

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  date: string;
  readTime: string;
  lang?: 'en' | 'fr';
  slug?: string; // Add slug for language switching
  breadcrumbItems?: Array<{ label: string; href: string }>;
}

export function ArticleLayout({ 
  children, 
  title, 
  description, 
  date, 
  readTime,
  lang = 'en',
  slug,
  breadcrumbItems = []
}: ArticleLayoutProps) {
  const backLabel = lang === 'en' ? 'Back to Blog' : 'Retour au Blog';
  const blogPath = lang === 'en' ? '/blog' : '/fr/blog';

  // Generate language switch link using alternate slug
  const alternateSlug = slug ? getAlternateSlug(slug, lang) : undefined;
  const langSwitchHref = alternateSlug
    ? (lang === 'en' ? `/fr/blog/${alternateSlug}` : `/blog/${alternateSlug}`)
    : (lang === 'en' ? '/fr' : '/');
  const langSwitchLabel = lang === 'en' ? 'FR' : 'EN';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href={lang === 'en' ? '/' : '/fr'} className="flex items-center gap-3">
            <Image src="/images/icon.png" alt="EDGE IPTV Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link 
              href={langSwitchHref}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {langSwitchLabel}
            </Link>
            <Button asChild className="hidden sm:inline-flex rounded-full font-semibold shadow-lg shadow-primary/20">
              <Link href="https://apps.apple.com/ca/app/edge-iptv/id6745966143">
                <Download className="mr-2 h-4 w-4" />
                {lang === 'en' ? 'Download' : 'Télécharger'}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          {breadcrumbItems.length > 0 && (
            <Breadcrumb items={breadcrumbItems} currentPage={title} lang={lang} />
          )}

          {/* Back Link */}
          <Link 
            href={blogPath}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backLabel}
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {description}
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border/50">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString(lang === 'en' ? 'en-US' : 'fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {children}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-border/50">
            <div className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border/50">
              <h3 className="text-2xl font-bold mb-4">
                {lang === 'en' ? 'Ready to Get Started?' : 'Prêt à commencer ?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {lang === 'en' 
                  ? 'Download EDGE IPTV now and start streaming in seconds.'
                  : 'Téléchargez EDGE IPTV maintenant et commencez à streamer en quelques secondes.'}
              </p>
              <Button asChild size="lg" className="rounded-full shadow-xl shadow-primary/25">
                <Link href="https://apps.apple.com/ca/app/edge-iptv/id6745966143">
                  <Download className="mr-2 h-5 w-5" />
                  {lang === 'en' ? 'Download Now' : 'Télécharger'}
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EDGE IPTV. {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
