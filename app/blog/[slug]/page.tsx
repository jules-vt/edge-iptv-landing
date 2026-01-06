import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Download, ArrowLeft } from 'lucide-react';
import { ArticleLayout } from '@/components/article-layout';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog-posts';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'en');
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} - EDGE IPTV Blog`,
    description: post.description,
    alternates: {
      canonical: `https://edge-iptv.app/blog/${post.slug}`,
      languages: {
        'en': `https://edge-iptv.app/blog/${post.slug}`,
        'fr': `https://edge-iptv.app/fr/blog/${post.slug}`,
      },
    },
    openGraph: {
      type: 'article',
      url: `https://edge-iptv.app/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      images: [`https://edge-iptv.app${post.image}`],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'en');

  if (!post) {
    notFound();
  }

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": `https://edge-iptv.app${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://edge-iptv.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://edge-iptv.app/images/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://edge-iptv.app/blog/${post.slug}`
    }
  };

  // Render content based on slug
  const renderContent = () => {
    switch (slug) {
      case 'how-to-install-iptv-iphone-ipad':
        return <HowToInstallContent />;
      default:
        return (
          <div className="prose prose-lg max-w-none">
            <p>Article content coming soon...</p>
          </div>
        );
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleLayout
        title={post.title}
        description={post.description}
        date={post.date}
        readTime={post.readTime}
        lang="en"
        slug={slug}
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' }
        ]}
      >
        {renderContent()}
      </ArticleLayout>
    </>
  );
}

// Content component for the How-to article
function HowToInstallContent() {
  // Schema.org HowTo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install IPTV on iPhone & iPad",
    "description": "Step-by-step guide to install and configure EDGE IPTV on iPhone and iPad using Xtream codes",
    "image": "https://edge-iptv.app/images/iphone-series-3d.png",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "tool": [{
      "@type": "HowToTool",
      "name": "iPhone or iPad running iOS 12.0+"
    }],
    "supply": [{
      "@type": "HowToSupply",
      "name": "IPTV subscription with Xtream codes"
    }],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Download EDGE IPTV",
        "text": "Download the best IPTV player from the App Store. EDGE IPTV is specifically designed for iPhone and iPad with Chromecast support and offline viewing.",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Launch and Select Language",
        "text": "Open EDGE IPTV and select your preferred language from the beautiful multilingual interface.",
        "image": "https://edge-iptv.app/images/language-selection.jpeg"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Configure Xtream Codes",
        "text": "Tap Add Playlist, select Xtream Codes, and enter your server URL, username, and password provided by your IPTV provider. Then tap Connect.",
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Start Streaming",
        "text": "Browse through channels, movies, and series. Start streaming immediately with EDGE IPTV's intuitive interface.",
        "image": "https://edge-iptv.app/images/series-view.png"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
        <h4 className="text-blue-800 font-bold mb-4 text-lg">What You'll Need:</h4>
        <ul className="space-y-2 mb-0">
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-green-600 font-bold">✓</span> iPhone or iPad running iOS 12.0 or later
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-green-600 font-bold">✓</span> IPTV subscription with Xtream codes
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-green-600 font-bold">✓</span> Stable internet connection
          </li>
          <li className="flex items-start gap-2 text-gray-700">
            <span className="text-green-600 font-bold">✓</span> EDGE IPTV app (recommended for best experience)
          </li>
        </ul>
      </div>

      {/* Step 1 */}
      <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative mb-10">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Download the Best IPTV Player for iOS</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          The first step is to download a reliable IPTV player. We highly recommend <strong>EDGE IPTV</strong> as it's specifically designed for iPhone and iPad, offering the smoothest streaming experience with advanced features.
        </p>
        
        <div className="mb-6">
          <strong className="block mb-2 text-gray-800">Why choose EDGE IPTV?</strong>
          <ul className="space-y-2 text-gray-600 mb-0">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Quick Xtream setup in seconds</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Chromecast support for big screen viewing</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Offline downloading to watch without internet</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Multilingual interface (English, French, Spanish, Portuguese, Turkish)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>5/5 stars rating with 1,000+ downloads</li>
          </ul>
        </div>
        
        <Link 
          href="https://apps.apple.com/ca/app/edge-iptv/id6745966143" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all no-underline"
        >
          <Download size={20} />
          Download EDGE IPTV from App Store
        </Link>
      </div>

      {/* Step 2 */}
      <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative mb-10">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Launch the App and Select Language</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Once installed, open EDGE IPTV. You'll be greeted with a beautiful interface where you can select your preferred language. The app supports multiple languages to make you feel at home.
        </p>
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <Image 
            src="/images/language-selection.jpeg" 
            alt="EDGE IPTV Language Selection Screen" 
            width={600} 
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative mb-10">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Configure Xtream Codes</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          EDGE IPTV makes it incredibly easy to connect using Xtream codes. You don't need to deal with complex M3U playlists.
        </p>
        <ol className="space-y-3 text-gray-600 mb-6 ml-2">
          <li><strong>1.</strong> Tap on the <strong>"Add Playlist"</strong> or <strong>"+"</strong> button.</li>
          <li><strong>2.</strong> Select <strong>"Xtream Codes"</strong> option.</li>
          <li><strong>3.</strong> Enter the details provided by your IPTV provider:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-500">
              <li><strong>Server URL:</strong> (e.g., http://line.iptvdomain.com)</li>
              <li><strong>Username:</strong> Your username</li>
              <li><strong>Password:</strong> Your password</li>
            </ul>
          </li>
          <li><strong>4.</strong> Tap <strong>"Connect"</strong> or <strong>"Login"</strong>.</li>
        </ol>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          <strong>Note:</strong> Make sure to enter the details exactly as provided, paying attention to uppercase and lowercase letters.
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative mb-10">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">4</div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Enjoy Your Content!</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          That's it! EDGE IPTV will load your channels, movies, and series. You can now browse through categories, search for your favorite content, and start streaming immediately.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image 
              src="/images/series-view.png" 
              alt="EDGE IPTV Series View Interface" 
              width={400} 
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image 
              src="/images/movie-details.png" 
              alt="EDGE IPTV Movie Details Page" 
              width={400} 
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h3 className="text-green-800 font-bold mb-3 text-xl">🎉 Congratulations!</h3>
        <p className="text-gray-700 mb-0">
          You've successfully set up IPTV on your iPhone or iPad. Now you can enjoy thousands of channels, movies, and series with the best streaming quality. Don't forget to explore features like Chromecast casting and offline downloads!
        </p>
      </div>
    </>
  );
}
