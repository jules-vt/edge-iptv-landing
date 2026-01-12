import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { BlogHeader } from '@/components/blog-header';
import { Breadcrumb } from '@/components/breadcrumb';

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  date: string;
  readTime: string;
  lang?: 'en' | 'fr' | 'es' | 'pt';
  breadcrumbItems?: Array<{ label: string; href: string }>;
}

export function ArticleLayout({ 
  children, 
  title, 
  description, 
  date, 
  readTime,
  lang = 'en',
  breadcrumbItems = []
}: ArticleLayoutProps) {
  const backLabel = 
    lang === 'en' ? 'Back to Blog' :
    lang === 'fr' ? 'Retour au Blog' :
    lang === 'es' ? 'Volver al Blog' :
    'Voltar ao Blog';
  
  const blogPath = 
    lang === 'en' ? '/blog' :
    lang === 'fr' ? '/fr/blog' :
    lang === 'es' ? '/es/blog' :
    '/pt/blog';

  return (
    <div className="min-h-screen bg-background">
      {/* Use unified BlogHeader component */}
      <BlogHeader currentLang={lang} />

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
                  {new Date(date).toLocaleDateString(
                    lang === 'en' ? 'en-US' : 
                    lang === 'fr' ? 'fr-FR' :
                    lang === 'es' ? 'es-ES' : 
                    'pt-BR', 
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }
                  )}
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
                {lang === 'en' ? 'Ready to Get Started?' : 
                 lang === 'fr' ? 'Prêt à commencer ?' :
                 lang === 'es' ? '¿Listo para Empezar?' :
                 'Pronto para Começar?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {lang === 'en' ? 'Download EDGE IPTV now and start streaming in seconds.' :
                 lang === 'fr' ? 'Téléchargez EDGE IPTV maintenant et commencez à streamer en quelques secondes.' :
                 lang === 'es' ? 'Descarga EDGE IPTV ahora y comienza a transmitir en segundos.' :
                 'Baixe o EDGE IPTV agora e comece a transmitir em segundos.'}
              </p>
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf" className="inline-flex items-center justify-center rounded-full px-8 py-3 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 transition-all">
                {lang === 'en' ? 'Download Now' :
                 lang === 'fr' ? 'Télécharger' :
                 lang === 'es' ? 'Descargar Ahora' :
                 'Baixar Agora'}
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EDGE IPTV. {lang === 'en' ? 'All rights reserved.' :
                                                       lang === 'fr' ? 'Tous droits réservés.' :
                                                       lang === 'es' ? 'Todos los derechos reservados.' :
                                                       'Todos os direitos reservados.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
