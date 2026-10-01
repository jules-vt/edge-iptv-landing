import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Tv,
  Wifi,
  Globe,
  Zap,
  CheckCircle2,
  CalendarClock,
  PictureInPicture2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LanguageSwitcher } from "@/components/language-switcher";
import { DownloadButton } from "@/components/download-button";
import { IpadSection } from "@/components/ipad-section";
import { HOME_COPY } from "@/lib/home-copy";
import { type Lang, LANGS, LOCALES, homePath, legalPath } from "@/lib/i18n";
import { SchemaOrg } from "@/components/schema-org";
import { landingCopy, pageNavLabel } from "@/components/landing-page";
import { LANDING_IDS, landingPath } from "@/lib/landing/registry";
import { blogPath, getPostBySlug, installGuidePath, postPath } from "@/lib/blog-posts";

const FAQ = dynamic(
  () => import("@/components/faq").then((mod) => ({ default: mod.FAQ })),
  { loading: () => <div className="py-24 text-center">…</div> },
);

const FEATURE_ICONS = [
  <Zap key="0" className="w-10 h-10 text-blue-500" />,
  <CalendarClock key="1" className="w-10 h-10 text-orange-500" />,
  <Tv key="2" className="w-10 h-10 text-purple-500" />,
  <PictureInPicture2 key="3" className="w-10 h-10 text-teal-500" />,
  <Wifi key="4" className="w-10 h-10 text-green-500" />,
  <Globe key="5" className="w-10 h-10 text-indigo-500" />,
];

const SCREENSHOTS = [
  "/images/series-screen.webp",
  "/images/epg-screen.webp",
  "/images/downloads-screen.webp",
];

/** Localised path of an article, falling back to English when untranslated. */
function articleHref(slug: string, lang: Lang): string {
  const post = getPostBySlug(slug, lang);
  return post ? postPath(post) : `/blog/${slug}`;
}

export function HomePage({ lang }: { lang: Lang }) {
  const t = HOME_COPY[lang];
  const home = homePath(lang);
  const install = installGuidePath(lang);
  const comparison = articleHref("best-iptv-player-ios-2026", lang);

  return (
    <div
      lang={LOCALES[lang].htmlLang}
      dir={LOCALES[lang].dir}
      className="min-h-screen bg-background font-sans selection:bg-primary/20"
    >
      {/* App, brand and site schemas describe the product, so they live on the
          home page only. Rendered from the layouts, every localised page
          carried two contradictory copies: the English one and its own. */}
      <SchemaOrg lang={lang} />
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href={home} className="flex items-center gap-3">
            <Image
              src="/images/icon.webp"
              alt="EDGE IPTV"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl shadow-sm"
            />
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href={blogPath(lang)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {t.nav.blog}
            </Link>
            <LanguageSwitcher currentLang={lang} />
            <div className="hidden sm:block">
              <DownloadButton
                location="home-header"
                size="md"
                className="rounded-full font-semibold shadow-lg shadow-primary/20 !text-sm"
              >
                {t.nav.download}
              </DownloadButton>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-48">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div className="space-y-8 text-center lg:text-start">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight lg:text-7xl">
              {t.hero.titleTop} <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.hero.titleAccent}
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:text-xl">
              {t.hero.body}
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <DownloadButton
                location="home-hero"
                size="lg"
                className="h-14 rounded-full px-8 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30"
              >
                {t.hero.ctaPrimary}
              </DownloadButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-full px-8 text-lg"
              >
                <Link href="#features">{t.hero.ctaSecondary}</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-muted-foreground lg:justify-start">
              {t.hero.badges.map((badge) => (
                <span key={badge} className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-md justify-center lg:mx-0 lg:max-w-full">
            <div className="relative z-10">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-2xl" />
              <Image
                src="/images/home-screen.webp"
                alt={t.hero.screenshotAlt}
                width={400}
                height={870}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="relative rounded-[2.5rem] border-4 border-foreground/10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              {t.features.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.features.intro}
              <Link href={comparison} className="text-primary hover:underline">
                {t.features.linkText}
              </Link>
              {t.features.introAfter}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-4">{FEATURE_ICONS[i]}</div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <Badge variant="secondary" className="mb-4">
              {t.screenshots.badge}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              {t.screenshots.title}
            </h2>
            <p className="text-lg text-muted-foreground">{t.screenshots.intro}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {t.screenshots.cards.map((title, i) => (
              <div key={title} className="space-y-4 text-center">
                <Image
                  src={SCREENSHOTS[i]}
                  alt={`EDGE IPTV — ${title}`}
                  width={300}
                  height={650}
                  loading="lazy"
                  className="mx-auto rounded-[2rem] border-4 border-foreground/10 shadow-xl"
                />
                <p className="font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IpadSection lang={lang} />

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight lg:text-5xl">
            {t.about.title}
          </h2>
          <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-muted-foreground">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-primary/5" />
        <div className="container mx-auto px-4 text-center">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-card p-8 shadow-2xl md:p-16">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            <h2 className="mb-6 text-3xl font-bold tracking-tight lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
              {t.cta.body}
              <Link href={install} className="text-primary hover:underline">
                {t.cta.linkText}
              </Link>
              {t.cta.bodyAfter}
            </p>
            <DownloadButton
              location="home-cta-final"
              size="lg"
              className="h-16 rounded-full px-10 text-lg shadow-xl shadow-primary/25 hover:scale-105"
            >
              {t.cta.button}
            </DownloadButton>
            <p className="mt-6 text-sm text-muted-foreground">{t.cta.fineprint}</p>
          </div>
        </div>
      </section>

      <FAQ lang={lang} />

      <footer className="border-t border-border bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-8 md:grid-cols-4">
            <div>
              <Link href={home} className="flex items-center gap-3">
                <Image
                  src="/images/icon.webp"
                  alt="EDGE IPTV"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-lg"
                />
                <span className="text-lg font-bold">EDGE IPTV</span>
              </Link>
              <p className="mt-3 text-sm text-muted-foreground">{t.footer.tagline}</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">{t.footer.product}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href={install}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t.footer.install}
                  </Link>
                </li>
                {LANDING_IDS.map((id) => (
                  <li key={id}>
                    <Link
                      href={landingPath(id, lang)}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {landingCopy(id, lang).navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">{t.footer.resources}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href={blogPath(lang)}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t.footer.blog}
                  </Link>
                </li>
                <li>
                  <Link
                    href={landingPath("m3uChecker", lang)}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {pageNavLabel("m3uChecker", lang)}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">{t.footer.legal}</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href={legalPath(lang, "privacy-policy")}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href={legalPath(lang, "terms-of-use")}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t.footer.terms}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*
            Server-rendered language links. The switcher in the header only
            renders its list once opened, so no language link existed in the
            static HTML at all — /de, /ar and /it had zero inbound links and
            were reachable only through the sitemap.
          */}
          <nav aria-label="Languages" className="border-t border-border pt-8">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              {LANGS.map((l) => (
                <li key={l}>
                  <Link
                    href={homePath(l)}
                    hrefLang={LOCALES[l].htmlLang}
                    className={
                      l === lang
                        ? "font-medium text-foreground"
                        : "text-muted-foreground transition-colors hover:text-primary"
                    }
                  >
                    {LOCALES[l].label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} EDGE IPTV. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
