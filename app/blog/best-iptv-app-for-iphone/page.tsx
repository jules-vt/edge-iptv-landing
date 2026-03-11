import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, Check, X, ChevronRight, Smartphone, Wifi, Download, Tv } from 'lucide-react';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';
import { Breadcrumb } from '@/components/breadcrumb';
import { buildAlternates, defaultOG, defaultTwitter, SITE, schemaPublisher } from '@/lib/seo-config';

// ─── Metadata ────────────────────────────────────────────────────────────────
// Primary target: "best iptv app for iphone" (pos. 63 → top 5 goal)
// Secondary:      "iptv app iphone", "how to download iptv on iphone",
//                 "can i watch iptv on my iphone", "best free iptv app iphone"

export const metadata: Metadata = {
  title: 'Best IPTV App for iPhone 2026: Top 5 Free Apps Tested',
  description:
    'Looking for the best IPTV app for iPhone? We tested the top 5 free apps in 2026. See which app is fastest to set up, supports Chromecast, and works best on iOS.',
  alternates: buildAlternates({
    en: '/blog/best-iptv-app-for-iphone',
  }),
  openGraph: {
    ...defaultOG,
    title: 'Best IPTV App for iPhone 2026 | Top 5 Free Apps Tested',
    description:
      'We tested the top 5 free IPTV apps for iPhone in 2026. Fastest setup, Chromecast support, offline viewing — find the best one for you.',
    type: 'article',
    publishedTime: '2026-03-11',
    modifiedTime: '2026-03-11',
  },
  twitter: {
    ...defaultTwitter,
    title: 'Best IPTV App for iPhone 2026 | Top 5 Free Apps Tested',
    description:
      'Top 5 free IPTV apps for iPhone tested in 2026. Fastest setup, Chromecast, offline viewing.',
  },
};

// ─── Structured data ─────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best IPTV App for iPhone 2026: Top 5 Free Apps Tested',
  description:
    'In-depth review of the 5 best free IPTV apps for iPhone in 2026, covering setup speed, features, Chromecast support, and ease of use.',
  image: `${SITE.url}/images/iphone-series-3d.png`,
  author: { '@type': 'Organization', name: 'EDGE IPTV Team' },
  publisher: schemaPublisher,
  datePublished: '2026-03-11',
  dateModified: '2026-03-11',
  mainEntityOfPage: `${SITE.url}/blog/best-iptv-app-for-iphone`,
  keywords: [
    'best iptv app for iphone',
    'iptv app iphone',
    'free iptv app iphone',
    'how to download iptv on iphone',
    'iptv player ios',
  ].join(', '),
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best IPTV app for iPhone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EDGE IPTV is the best IPTV app for iPhone in 2026. It offers the fastest Xtream codes setup (under 2 minutes), full Chromecast support, offline downloads, and a clean iOS-native interface. It is free to download on the App Store.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I watch IPTV on my iPhone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can watch IPTV on your iPhone. You need an IPTV player app like EDGE IPTV and an IPTV subscription from a provider. Once you have your Xtream codes, setup takes less than 2 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I download an IPTV app on my iPhone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the App Store on your iPhone, search for "EDGE IPTV", tap Get to download it for free. Then open the app, enter your IPTV provider\'s Xtream codes (URL, username, password), and you\'re ready to stream.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free IPTV app for iPhone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. EDGE IPTV is completely free to download and use on iPhone. You only need a subscription from an IPTV content provider — the app itself has no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does IPTV work with any iPhone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EDGE IPTV requires iOS 12.0 or later, so it works on any iPhone from iPhone 6s onwards, including the latest iPhone 16 Pro. It is also compatible with all iPad models.',
      },
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

interface AppComparison {
  name: string;
  rating: string;
  price: string;
  chromecast: boolean;
  offline: boolean;
  setupTime: string;
  xtream: boolean;
  highlight?: boolean;
}

const apps: AppComparison[] = [
  {
    name: 'EDGE IPTV',
    rating: '5.0',
    price: 'Free',
    chromecast: true,
    offline: true,
    setupTime: '< 2 min',
    xtream: true,
    highlight: true,
  },
  {
    name: 'GSE Smart IPTV',
    rating: '4.1',
    price: 'Free (IAP)',
    chromecast: false,
    offline: false,
    setupTime: '~10 min',
    xtream: true,
  },
  {
    name: 'Flex IPTV',
    rating: '3.8',
    price: 'Free (IAP)',
    chromecast: false,
    offline: false,
    setupTime: '~8 min',
    xtream: true,
  },
  {
    name: 'IPTV Smarters',
    rating: '3.5',
    price: 'Free (IAP)',
    chromecast: false,
    offline: false,
    setupTime: '~5 min',
    xtream: true,
  },
  {
    name: 'Opus IPTV Player',
    rating: '3.7',
    price: 'Free',
    chromecast: false,
    offline: false,
    setupTime: '~10 min',
    xtream: true,
  },
];

interface CriterionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Criterion({ icon, title, description }: CriterionProps) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-secondary/30 border border-border/40">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return <Check className="w-4 h-4 text-green-600 mx-auto" />;
}

function CrossIcon() {
  return <X className="w-4 h-4 text-red-400 mx-auto" />;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BestIPTVAppForIphone() {
  return (
    <ArticleLayout
      title="Best IPTV App for iPhone 2026: Top 5 Free Apps Tested"
      description="We tested the 5 most popular free IPTV apps on iPhone to find the fastest, most reliable, and easiest to set up."
      date="2026-03-11"
      readTime="7 min read"
      lang="en"
    >
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
        currentPage="Best IPTV App for iPhone 2026"
        lang="en"
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Intro ── */}
      <p className="lead text-xl text-muted-foreground mb-8">
        Yes, you <strong>can watch IPTV on your iPhone</strong> — and you don&apos;t need a
        jailbreak or a sideloaded app. All five apps in this guide are available directly on
        the App Store. We tested each one for setup speed, stream quality, Chromecast
        support, and overall iOS integration to find the best IPTV app for iPhone in 2026.
      </p>

      {/* ── TL;DR ── */}
      <div className="not-prose bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-10">
        <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-3">
          Quick answer
        </p>
        <p className="text-foreground font-medium">
          <strong>EDGE IPTV</strong> is the best IPTV app for iPhone in 2026. It&apos;s the only
          app in this list with full Chromecast support, offline downloads, and a setup time
          under 2 minutes — all for free.
        </p>
        <div className="mt-4">
          <DownloadButton location="article-iphone-tldr" size="md">
            Download EDGE IPTV Free
          </DownloadButton>
        </div>
      </div>

      {/* ── What to look for ── */}
      <h2 className="text-3xl font-bold mt-12 mb-6">
        What Makes a Good IPTV App for iPhone?
      </h2>
      <p className="text-muted-foreground mb-6">
        Not all IPTV players are built for iOS. Here&apos;s what separates a great iPhone
        IPTV app from the mediocre ones:
      </p>
      <div className="not-prose grid sm:grid-cols-2 gap-4 mb-10">
        <Criterion
          icon={<Smartphone className="w-5 h-5" />}
          title="Native iOS interface"
          description="Feels at home on iPhone — smooth animations, proper tap targets, Dark Mode support."
        />
        <Criterion
          icon={<Wifi className="w-5 h-5" />}
          title="Fast, stable streaming"
          description="Smart buffering that adapts to your connection speed without constant interruptions."
        />
        <Criterion
          icon={<Tv className="w-5 h-5" />}
          title="Chromecast / AirPlay"
          description="Cast to your TV without buying extra hardware. A key feature many apps skip."
        />
        <Criterion
          icon={<Download className="w-5 h-5" />}
          title="Offline downloads"
          description="Download movies and series to watch on the go, even with no internet."
        />
      </div>

      {/* ── Comparison table ── */}
      <h2 className="text-3xl font-bold mt-12 mb-6">
        Top 5 IPTV Apps for iPhone: Side-by-Side Comparison
      </h2>

      <div className="not-prose overflow-x-auto mb-10 rounded-xl border border-border shadow-sm">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-secondary/60 text-foreground">
              <th className="px-4 py-3 text-left font-semibold">App</th>
              <th className="px-4 py-3 text-center font-semibold">Rating</th>
              <th className="px-4 py-3 text-center font-semibold">Price</th>
              <th className="px-4 py-3 text-center font-semibold">Chromecast</th>
              <th className="px-4 py-3 text-center font-semibold">Offline</th>
              <th className="px-4 py-3 text-center font-semibold">Setup</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {apps.map((app) => (
              <tr
                key={app.name}
                className={
                  app.highlight
                    ? 'bg-blue-50 dark:bg-blue-950/20 font-medium'
                    : 'bg-background hover:bg-secondary/20 transition-colors'
                }
              >
                <td className="px-4 py-3 text-left">
                  <span className={app.highlight ? 'text-primary font-bold' : ''}>
                    {app.name}
                  </span>
                  {app.highlight && (
                    <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                      #1 Pick
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-center">⭐ {app.rating}</td>
                <td className="px-4 py-3 text-center">{app.price}</td>
                <td className="px-4 py-3 text-center">
                  {app.chromecast ? <CheckIcon /> : <CrossIcon />}
                </td>
                <td className="px-4 py-3 text-center">
                  {app.offline ? <CheckIcon /> : <CrossIcon />}
                </td>
                <td className="px-4 py-3 text-center text-muted-foreground">
                  {app.setupTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── #1 EDGE IPTV ── */}
      <h2 className="text-3xl font-bold mt-12 mb-6">
        #1 Best IPTV App for iPhone: EDGE IPTV
      </h2>

      <div className="not-prose bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl border-2 border-blue-200 dark:border-blue-800 p-8 mb-8">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <Image
            src="/images/icon.png"
            alt="EDGE IPTV app icon — best IPTV app for iPhone"
            width={96}
            height={96}
            className="rounded-2xl shadow-lg flex-shrink-0"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold m-0">EDGE IPTV</h3>
              <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-700 px-3 py-1 rounded-full text-sm font-bold">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                5.0
              </div>
              <span className="text-sm text-green-700 dark:text-green-400 font-semibold bg-green-100 dark:bg-green-900/40 border border-green-200 dark:border-green-700 px-3 py-1 rounded-full">
                Free
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Built from the ground up for iPhone and iPad, EDGE IPTV is the only free IPTV
              player for iOS that combines Chromecast casting, offline downloads, and a
              fully native iOS interface in a single app.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {[
                'Set up with Xtream codes in under 2 minutes',
                'One-tap Chromecast casting to your TV',
                'Download movies & series for offline viewing',
                'Clean, native iOS interface with Dark Mode',
                'Live TV, VOD, series — all in one app',
                'Works on iPhone 6s and later (iOS 12+)',
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <DownloadButton location="article-iphone-main-cta" size="md">
              Download EDGE IPTV Free on App Store
            </DownloadButton>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4">Why EDGE IPTV Stands Out for iPhone</h3>

      <p className="text-muted-foreground">
        Most IPTV players for iOS are ports from Android — they work, but they feel foreign
        on iPhone. EDGE IPTV was designed exclusively for iOS, which shows in every
        interaction: swipe gestures feel natural, the keyboard appears where expected, and
        the app respects iOS conventions like dynamic type and system Dark Mode.
      </p>

      <p className="text-muted-foreground">
        The <strong>Chromecast integration</strong> is unique in this category. No other
        free IPTV app for iPhone lets you cast directly to a Chromecast or Google TV device
        with a single tap. Combined with <strong>offline downloads</strong>, it covers both
        the at-home and on-the-go use cases that iPhone users care about most.
      </p>

      {/* ── #2–5 ── */}
      <h2 className="text-3xl font-bold mt-14 mb-8">
        Other IPTV Apps for iPhone Worth Knowing
      </h2>

      {/* GSE */}
      <div className="not-prose border border-border/60 rounded-2xl p-6 mb-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">#2 — GSE Smart IPTV</h3>
            <p className="text-sm text-muted-foreground mt-1">Rating: ⭐ 4.1 &nbsp;·&nbsp; Free with in-app purchases</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          GSE has been around for years and has a loyal user base. It supports M3U and
          Xtream codes, and includes a built-in EPG. However, advanced features like
          multi-screen are locked behind an IAP, and there is no Chromecast support.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1 text-green-700 dark:text-green-400">
            <Check className="w-4 h-4" /> M3U + Xtream support
          </div>
          <div className="flex items-center gap-1 text-green-700 dark:text-green-400">
            <Check className="w-4 h-4" /> Built-in EPG
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <X className="w-4 h-4" /> No Chromecast
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <X className="w-4 h-4" /> Key features paid
          </div>
        </div>
      </div>

      {/* Flex IPTV */}
      <div className="not-prose border border-border/60 rounded-2xl p-6 mb-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">#3 — Flex IPTV</h3>
            <p className="text-sm text-muted-foreground mt-1">Rating: ⭐ 3.8 &nbsp;·&nbsp; Free with in-app purchases</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Flex IPTV has a clean interface and supports M3U playlists. The free tier is
          limited to 4 saved playlists, and the UI feels dated compared to modern iOS
          design standards. AirPlay works, but Chromecast is not supported.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1 text-green-700 dark:text-green-400">
            <Check className="w-4 h-4" /> Clean UI
          </div>
          <div className="flex items-center gap-1 text-green-700 dark:text-green-400">
            <Check className="w-4 h-4" /> AirPlay support
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <X className="w-4 h-4" /> Limited free playlists
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <X className="w-4 h-4" /> No Chromecast
          </div>
        </div>
      </div>

      {/* IPTV Smarters */}
      <div className="not-prose border border-border/60 rounded-2xl p-6 mb-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">#4 — IPTV Smarters Pro</h3>
            <p className="text-sm text-muted-foreground mt-1">Rating: ⭐ 3.5 &nbsp;·&nbsp; Free with in-app purchases</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          A well-known name in the IPTV world. The iOS version lags behind its Android
          counterpart — setup is clunkier and the interface doesn&apos;t feel native to
          iPhone. Supports Xtream codes but requires multiple steps to configure.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1 text-green-700 dark:text-green-400">
            <Check className="w-4 h-4" /> Xtream codes support
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <X className="w-4 h-4" /> Not optimised for iOS
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <X className="w-4 h-4" /> No Chromecast or offline
          </div>
        </div>
      </div>

      {/* Opus */}
      <div className="not-prose border border-border/60 rounded-2xl p-6 mb-10 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">#5 — Opus IPTV Player</h3>
            <p className="text-sm text-muted-foreground mt-1">Rating: ⭐ 3.7 &nbsp;·&nbsp; Free</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Opus supports M3U playlists and has a reasonably modern look. It&apos;s free with
          no obvious paywalls, but it is missing key features like Chromecast, offline
          mode, and its Xtream codes implementation is less reliable than the competition.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1 text-green-700 dark:text-green-400">
            <Check className="w-4 h-4" /> Fully free
          </div>
          <div className="flex items-center gap-1 text-green-700 dark:text-green-400">
            <Check className="w-4 h-4" /> M3U support
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <X className="w-4 h-4" /> No Chromecast or offline
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <X className="w-4 h-4" /> Unreliable Xtream codes
          </div>
        </div>
      </div>

      {/* ── How to get started ── */}
      <h2 className="text-3xl font-bold mt-12 mb-6">
        How to Download an IPTV App on iPhone (2-Minute Setup)
      </h2>
      <p className="text-muted-foreground mb-6">
        Here&apos;s how to go from nothing to streaming in under 2 minutes using EDGE IPTV:
      </p>

      <div className="not-prose space-y-4 mb-10">
        {[
          {
            step: '1',
            title: 'Download EDGE IPTV from the App Store',
            description:
              'Tap the button below or search "EDGE IPTV" in the App Store. The app is free with no in-app purchases required.',
          },
          {
            step: '2',
            title: 'Open the app and tap "Add a server"',
            description:
              'On the home screen, tap the + button. Select "Xtream codes" as the connection type.',
          },
          {
            step: '3',
            title: 'Enter your IPTV provider credentials',
            description:
              'Paste the server URL, username, and password provided by your IPTV service. Tap Connect.',
          },
          {
            step: '4',
            title: 'Start streaming',
            description:
              'Your channels, VOD library, and series are loaded automatically. Browse and tap any content to start playing instantly.',
          },
        ].map(({ step, title, description }) => (
          <div key={step} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
              {step}
            </div>
            <div>
              <p className="font-semibold text-foreground">{title}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="not-prose flex justify-center mb-10">
        <DownloadButton location="article-iphone-steps-cta" size="lg">
          Download EDGE IPTV Free
        </DownloadButton>
      </div>

      <p className="text-muted-foreground">
        Need a more detailed walkthrough? See our{' '}
        <Link
          href="/how-to-install-iptv-iphone-ipad"
          className="text-primary hover:underline"
        >
          complete guide to installing IPTV on iPhone and iPad
        </Link>
        .
      </p>

      {/* ── iPhone-specific tips ── */}
      <h2 className="text-3xl font-bold mt-12 mb-6">
        Tips for the Best IPTV Experience on iPhone
      </h2>

      <div className="not-prose grid sm:grid-cols-2 gap-4 mb-10">
        {[
          {
            title: 'Use Wi-Fi for HD streaming',
            description:
              'For 1080p or 4K streams, connect to Wi-Fi. A 5 GHz network is ideal to avoid buffering.',
          },
          {
            title: 'Download before travelling',
            description:
              'EDGE IPTV lets you save movies offline. Download over Wi-Fi before you leave and watch without mobile data.',
          },
          {
            title: 'Cast to TV with Chromecast',
            description:
              'Tap the cast icon in the player to send the stream to your Chromecast or Google TV instantly.',
          },
          {
            title: 'Enable Background App Refresh',
            description:
              'Go to Settings → EDGE IPTV → Background App Refresh to keep your content library up to date.',
          },
          {
            title: 'Use Low Power Mode carefully',
            description:
              'Low Power Mode can reduce streaming quality. Turn it off while streaming for the best experience.',
          },
          {
            title: 'Fix buffering with VPN',
            description:
              'If your ISP throttles streaming traffic, a VPN can help. See our guide on fixing IPTV buffering.',
          },
        ].map(({ title, description }) => (
          <div
            key={title}
            className="flex gap-3 p-4 rounded-xl border border-border/40 bg-secondary/20"
          >
            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-sm text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Internal links ── */}
      <h2 className="text-3xl font-bold mt-12 mb-6">Related Guides</h2>
      <div className="not-prose grid sm:grid-cols-2 gap-4 mb-10">
        {[
          {
            href: '/how-to-install-iptv-iphone-ipad',
            title: 'How to install IPTV on iPhone & iPad',
            description: 'Step-by-step with screenshots',
          },
          {
            href: '/blog/m3u-playlist-setup-guide',
            title: 'What is an M3U Playlist? Setup Guide',
            description: 'M3U vs M3U8, EPG, troubleshooting',
          },
          {
            href: '/blog/xtream-codes-setup-guide',
            title: 'Xtream Codes Setup Guide',
            description: 'Configure in under 2 minutes',
          },
          {
            href: '/blog/chromecast-iptv-streaming-guide',
            title: 'How to Cast IPTV to Chromecast',
            description: 'Big screen streaming from iPhone',
          },
          {
            href: '/blog/iptv-buffering-fix-guide',
            title: 'Fix IPTV Buffering Issues',
            description: '10+ causes and solutions',
          },
          {
            href: '/blog/best-iptv-player-ios-2026',
            title: 'Best IPTV Player for iOS 2026',
            description: 'Full 7-app comparison (iPhone + iPad)',
          },
        ].map(({ href, title, description }) => (
          <Link
            key={href}
            href={href}
            className="flex gap-3 p-4 rounded-xl border border-border/40 bg-secondary/20 hover:bg-secondary/50 hover:border-primary/30 transition-all group no-underline"
          >
            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
            <div>
              <p className="font-semibold text-sm text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ── FAQ ── */}
      <h2 className="text-3xl font-bold mt-12 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="not-prose space-y-4 mb-10">
        {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
          <details
            key={name}
            className="group border border-border/60 rounded-xl overflow-hidden"
          >
            <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-foreground hover:bg-secondary/30 transition-colors list-none">
              {name}
              <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-90" />
            </summary>
            <div className="px-6 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
              {acceptedAnswer.text}
            </div>
          </details>
        ))}
      </div>
    </ArticleLayout>
  );
}
