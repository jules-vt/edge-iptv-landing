import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Smartphone, Tablet } from 'lucide-react';
import { BlogCard } from '@/components/blog-card';
import { BlogHeader } from '@/components/blog-header';
import { DownloadButton } from '@/components/download-button';
import { type Lang, getPostsByLang, postPath } from '@/lib/blog-posts';
import { LOCALES, homePath, legalPath, localePath } from '@/lib/i18n';
import { SITE, url } from '@/lib/seo-config';

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    intro: string;
    featured: string;
    all: string;
    devices: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    home: string;
    blog: string;
    privacy: string;
    terms: string;
    rights: string;
  }
> = {
  en: {
    eyebrow: 'EDGE IPTV Blog',
    title: 'Tutorials, Guides & Tips',
    intro:
      'Everything you need to know about IPTV streaming on iPhone and iPad. Learn how to set up, optimize, and get the most out of EDGE IPTV.',
    featured: 'Start here',
    all: 'All guides',
    devices: 'Written for iPhone and iPad',
    ctaTitle: 'Ready to start streaming?',
    ctaBody: 'Download EDGE IPTV and turn your iPhone or iPad into a full streaming hub.',
    ctaButton: 'Get it on the App Store',
    home: 'Home',
    blog: 'Blog',
    privacy: 'Privacy',
    terms: 'Terms',
    rights: 'All rights reserved.',
  },
  fr: {
    eyebrow: 'Blog EDGE IPTV',
    title: 'Tutoriels, Guides & Astuces',
    intro:
      "Tout ce que vous devez savoir sur le streaming IPTV sur iPhone et iPad. Apprenez à configurer, optimiser et tirer le meilleur parti d'EDGE IPTV.",
    featured: 'Commencez ici',
    all: 'Tous les guides',
    devices: 'Écrit pour iPhone et iPad',
    ctaTitle: 'Prêt à commencer le streaming ?',
    ctaBody:
      'Téléchargez EDGE IPTV et transformez votre iPhone ou iPad en véritable centre de streaming.',
    ctaButton: "Télécharger sur l'App Store",
    home: 'Accueil',
    blog: 'Blog',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    rights: 'Tous droits réservés.',
  },
  es: {
    eyebrow: 'Blog EDGE IPTV',
    title: 'Tutoriales, Guías y Consejos',
    intro:
      'Todo lo que necesitas saber sobre streaming IPTV en iPhone y iPad. Aprende cómo configurar, optimizar y aprovechar al máximo EDGE IPTV.',
    featured: 'Empieza aquí',
    all: 'Todas las guías',
    devices: 'Escrito para iPhone y iPad',
    ctaTitle: '¿Listo para empezar a transmitir?',
    ctaBody:
      'Descarga EDGE IPTV y convierte tu iPhone o iPad en un centro de streaming completo.',
    ctaButton: 'Descargar en la App Store',
    home: 'Inicio',
    blog: 'Blog',
    privacy: 'Privacidad',
    terms: 'Términos',
    rights: 'Todos los derechos reservados.',
  },
  pt: {
    eyebrow: 'Blog EDGE IPTV',
    title: 'Tutoriais, Guias e Dicas',
    intro:
      'Tudo o que você precisa saber sobre streaming IPTV no iPhone e iPad. Aprenda como configurar, otimizar e aproveitar ao máximo o EDGE IPTV.',
    featured: 'Comece por aqui',
    all: 'Todos os guias',
    devices: 'Escrito para iPhone e iPad',
    ctaTitle: 'Pronto para começar a transmitir?',
    ctaBody:
      'Baixe o EDGE IPTV e transforme seu iPhone ou iPad em uma central de streaming completa.',
    ctaButton: 'Baixar na App Store',
    home: 'Início',
    blog: 'Blog',
    privacy: 'Privacidade',
    terms: 'Termos',
    rights: 'Todos os direitos reservados.',
  },

  de: {
    eyebrow: 'EDGE IPTV Blog',
    title: 'Anleitungen, Guides & Tipps',
    intro:
      'Alles über IPTV-Streaming auf iPhone und iPad. Einrichten, optimieren und das Meiste aus EDGE IPTV herausholen.',
    featured: 'Hier anfangen',
    all: 'Alle Guides',
    devices: 'Geschrieben für iPhone und iPad',
    ctaTitle: 'Bereit zum Streamen?',
    ctaBody: 'Lade EDGE IPTV und mach dein iPhone oder iPad zur vollwertigen Streaming-Zentrale.',
    ctaButton: 'Im App Store laden',
    home: 'Startseite',
    blog: 'Blog',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    rights: 'Alle Rechte vorbehalten.',
  },
  ar: {
    eyebrow: 'مدونة EDGE IPTV',
    title: 'شروحات وأدلة ونصائح',
    intro:
      'كل ما تحتاج معرفته عن بث IPTV على الآيفون والآيباد: الإعداد والتحسين والاستفادة القصوى من EDGE IPTV.',
    featured: 'ابدأ من هنا',
    all: 'كل الأدلة',
    devices: 'مكتوب للآيفون والآيباد',
    ctaTitle: 'جاهز لبدء البث؟',
    ctaBody: 'حمّل EDGE IPTV وحوّل آيفونك أو آيبادك إلى مركز بث متكامل.',
    ctaButton: 'التحميل من App Store',
    home: 'الرئيسية',
    blog: 'المدونة',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    rights: 'جميع الحقوق محفوظة.',
  },
  it: {
    eyebrow: 'Blog EDGE IPTV',
    title: 'Tutorial, guide e consigli',
    intro:
      "Tutto quello che serve sapere sullo streaming IPTV su iPhone e iPad. Come configurare, ottimizzare e sfruttare al meglio EDGE IPTV.",
    featured: 'Inizia da qui',
    all: 'Tutte le guide',
    devices: 'Scritto per iPhone e iPad',
    ctaTitle: 'Pronto a iniziare?',
    ctaBody: "Scarica EDGE IPTV e trasforma il tuo iPhone o iPad in un centro di streaming completo.",
    ctaButton: 'Scarica su App Store',
    home: 'Home',
    blog: 'Blog',
    privacy: 'Privacy',
    terms: 'Termini',
    rights: 'Tutti i diritti riservati.',
  },
};



export function BlogIndex({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const home = homePath(lang);

  // Newest first, so the lead slot keeps itself up to date.
  const posts = [...getPostsByLang(lang)].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = posts;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE.name} Blog`,
    description: copy.intro,
    url: url(localePath(lang, '/blog')),
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: url('/images/icon.png') },
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: { '@type': 'Organization', name: post.author },
      image: url(post.image),
      url: url(postPath(post)),
    })),
  };

  return (
    <div lang={LOCALES[lang].htmlLang} dir={LOCALES[lang].dir} className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <BlogHeader currentLang={lang} />

      <section className="border-b border-border/50 bg-gradient-to-b from-secondary/40 to-background pb-14 pt-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <BookOpen className="h-4 w-4" />
            {copy.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight lg:text-6xl">{copy.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground">{copy.intro}</p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Smartphone className="h-4 w-4" />
            <Tablet className="h-4 w-4" />
            {copy.devices}
          </p>
        </div>
      </section>

      {featured && (
        <section className="pt-14">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {copy.featured}
            </h2>
            <BlogCard post={featured} featured />
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="py-14">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {copy.all}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border/50 bg-card p-12 shadow-xl">
            <Image
              src="/images/icon.webp"
              alt="EDGE IPTV"
              width={72}
              height={72}
              className="mx-auto h-16 w-16 rounded-2xl shadow-lg"
            />
            <h2 className="mt-6 text-3xl font-bold">{copy.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{copy.ctaBody}</p>
            <DownloadButton location="blog-index-cta" size="lg" className="mt-8">
              {copy.ctaButton}
            </DownloadButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 bg-secondary/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href={home} className="flex items-center gap-3">
              <Image
                src="/images/icon.webp"
                alt="EDGE IPTV"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg opacity-80 grayscale"
              />
              <span className="text-lg font-bold text-foreground/80">EDGE IPTV</span>
            </Link>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href={home} className="transition-colors hover:text-foreground">
                {copy.home}
              </Link>
              <Link
                href={localePath(lang, '/blog')}
                className="transition-colors hover:text-foreground"
              >
                {copy.blog}
              </Link>
              <Link
                href={legalPath(lang, 'privacy-policy')}
                className="transition-colors hover:text-foreground"
              >
                {copy.privacy}
              </Link>
              <Link
                href={legalPath(lang, 'terms-of-use')}
                className="transition-colors hover:text-foreground"
              >
                {copy.terms}
              </Link>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} EDGE IPTV. {copy.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
