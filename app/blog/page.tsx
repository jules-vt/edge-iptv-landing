import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Download, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BlogCard } from '@/components/blog-card';
import { getPostsByLang } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'EDGE IPTV Blog - Tutorials, Guides & Tips for iOS Streaming',
  description: 'Learn everything about IPTV streaming on iPhone and iPad. Step-by-step tutorials, setup guides, troubleshooting tips, and latest features.',
  alternates: {
    canonical: 'https://edge-iptv.app/blog',
    languages: {
      'en': 'https://edge-iptv.app/blog',
      'fr': 'https://edge-iptv.app/fr/blog',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://edge-iptv.app/blog',
    title: 'EDGE IPTV Blog - Tutorials & Guides',
    description: 'Learn everything about IPTV streaming on iPhone and iPad with our comprehensive tutorials and guides.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
  },
};

export default function BlogPage() {
  const posts = getPostsByLang('en');

  // Schema.org Blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "EDGE IPTV Blog",
    "description": "Tutorials, guides and tips for IPTV streaming on iPhone and iPad",
    "url": "https://edge-iptv.app/blog",
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
      "url": `https://edge-iptv.app/blog/${post.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm">
              <Image src="/images/icon.png" alt="EDGE IPTV Logo" fill className="object-cover" />
            </div>
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/fr/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              FR
            </Link>
            <Button asChild className="hidden sm:inline-flex rounded-full font-semibold shadow-lg shadow-primary/20">
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">EDGE IPTV Blog</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
            Tutorials, Guides & Tips
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about IPTV streaming on iPhone and iPad. 
            Learn how to set up, optimize, and get the most out of EDGE IPTV.
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
              <p className="text-muted-foreground">No articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Streaming?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download EDGE IPTV and transform your iPhone & iPad into the ultimate streaming device.
            </p>
            <Button asChild size="lg" className="rounded-full shadow-xl shadow-primary/25">
              <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
                <Download className="mr-2 h-5 w-5" />
                Download Now - Free
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
                <Image src="/images/icon.png" alt="EDGE IPTV Logo" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold text-foreground/80">EDGE IPTV</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="/terms-of-use" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} EDGE IPTV. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
