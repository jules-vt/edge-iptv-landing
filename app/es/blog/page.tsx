import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Download, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog-card';
import { BlogHeader } from '@/components/blog-header';
import { getPostsByLang } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog EDGE IPTV - Tutoriales, Guías y Consejos para Streaming iOS',
  description: 'Aprende todo sobre streaming IPTV en iPhone y iPad. Tutoriales paso a paso, guías de configuración, solución de problemas y últimas funciones.',
  alternates: {
    canonical: 'https://edge-iptv.app/es/blog',
    languages: {
      'en': 'https://edge-iptv.app/blog',
      'fr': 'https://edge-iptv.app/fr/blog',
      'es': 'https://edge-iptv.app/es/blog',
      'pt': 'https://edge-iptv.app/pt/blog',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://edge-iptv.app/es/blog',
    title: 'Blog EDGE IPTV - Tutoriales y Guías',
    description: 'Aprende todo sobre streaming IPTV en iPhone y iPad con nuestros tutoriales y guías completas.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    locale: 'es_ES',
  },
};

export default function BlogPageES() {
  const posts = getPostsByLang('es');

  // Schema.org Blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog EDGE IPTV",
    "description": "Tutoriales, guías y consejos para streaming IPTV en iPhone y iPad",
    "url": "https://edge-iptv.app/es/blog",
    "inLanguage": "es-ES",
    "publisher": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://edge-iptv.app/images/icon.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "image": `https://edge-iptv.app${post.image}`,
      "url": `https://edge-iptv.app/es/blog/${post.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <BlogHeader currentLang="es" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Blog EDGE IPTV</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Tutoriales, Guías y Consejos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre streaming IPTV en iPhone y iPad. 
            Aprende cómo configurar, optimizar y aprovechar al máximo EDGE IPTV.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Empty state for future posts */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Aún no hay artículos. ¡Vuelve pronto!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">¿Listo para Empezar a Transmitir?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Descarga EDGE IPTV y transforma tu iPhone y iPad en el dispositivo de streaming definitivo.
            </p>
            <Button asChild size="lg" className="rounded-full shadow-xl shadow-primary/25">
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                <Download className="mr-2 h-5 w-5" />
                Descargar Ahora - Gratis
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-lg grayscale opacity-80">
                <Image src="/images/icon.png" alt="Logo EDGE IPTV" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold text-foreground/80">EDGE IPTV</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/es" className="hover:text-foreground transition-colors">Inicio</Link>
              <Link href="/es/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <Link href="/es/privacy-policy" className="hover:text-foreground transition-colors">Privacidad</Link>
              <Link href="/es/terms-of-use" className="hover:text-foreground transition-colors">Términos</Link>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} EDGE IPTV. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
