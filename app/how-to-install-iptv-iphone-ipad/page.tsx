import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { DownloadButton } from '@/components/download-button';

export const metadata: Metadata = {
  title: 'Install IPTV on iPhone in 2 Minutes | Free Guide 2026',
  description: '✓ Setup IPTV on iPhone/iPad in 2 minutes. ✓ Works with Xtream codes. ✓ No technical skills needed. Download EDGE IPTV now!',
  alternates: {
    canonical: 'https://edge-iptv.app/how-to-install-iptv-iphone-ipad',
    languages: {
      'en': 'https://edge-iptv.app/how-to-install-iptv-iphone-ipad',
      'fr': 'https://edge-iptv.app/fr/comment-installer-iptv-iphone-ipad',
      'es': 'https://edge-iptv.app/es/como-instalar-iptv-iphone-ipad',
      'pt': 'https://edge-iptv.app/pt/como-instalar-iptv-iphone-ipad',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://edge-iptv.app/how-to-install-iptv-iphone-ipad',
    title: 'Install IPTV on iPhone in 2 Minutes | Free Guide 2026',
    description: '✓ Setup IPTV on iPhone/iPad in 2 minutes. ✓ Works with Xtream codes. ✓ No technical skills needed. Download EDGE IPTV now!',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'en_US',
  },
};

export default function HowToInstall() {
  // Schema.org HowTo for SEO
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install IPTV on iPhone & iPad in 2 Minutes",
    "description": "Complete step-by-step guide to install and configure EDGE IPTV on iPhone and iPad using Xtream codes. Setup takes less than 2 minutes with no technical skills required.",
    "image": {
      "@type": "ImageObject",
      "url": "https://edge-iptv.app/images/iphone-series-3d.png",
      "width": "400",
      "height": "800"
    },
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "tool": [{
      "@type": "HowToTool",
      "name": "iPhone or iPad running iOS 12.0 or later"
    }, {
      "@type": "HowToTool",
      "name": "Internet connection"
    }],
    "supply": [{
      "@type": "HowToSupply",
      "name": "IPTV subscription with Xtream codes API"
    }],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Download EDGE IPTV from App Store",
        "text": "Download the best IPTV player from the App Store. EDGE IPTV is specifically designed for iPhone and iPad with Chromecast support, offline viewing, and fast Xtream codes setup. The app is completely free.",
        "url": "https://edge-iptv.app/how-to-install-iptv-iphone-ipad#step1",
        "image": {
          "@type": "ImageObject",
          "url": "https://edge-iptv.app/images/icon.png",
          "width": "512",
          "height": "512"
        }
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Launch App and Select Your Language",
        "text": "Open EDGE IPTV and select your preferred language from the beautiful multilingual interface. The app supports English, French, Spanish, Portuguese, and Turkish for a native experience.",
        "url": "https://edge-iptv.app/how-to-install-iptv-iphone-ipad#step2",
        "image": {
          "@type": "ImageObject",
          "url": "https://edge-iptv.app/images/language-selection.jpeg",
          "width": "600",
          "height": "400"
        }
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Configure Your Xtream Codes",
        "text": "Tap the 'Add Playlist' or '+' button, select 'Xtream Codes' option, and enter your IPTV provider credentials: Server URL (e.g., http://line.iptvdomain.com), Username, and Password. Then tap 'Connect' or 'Login'. The app will automatically load all your channels, movies, and series.",
        "url": "https://edge-iptv.app/how-to-install-iptv-iphone-ipad#step3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Start Streaming Your Favorite Content",
        "text": "Browse through your channels, movies, and series library. Use the intuitive interface to search, add favorites, and start streaming immediately. Cast to Chromecast with one tap or download content for offline viewing.",
        "url": "https://edge-iptv.app/how-to-install-iptv-iphone-ipad#step4",
        "image": {
          "@type": "ImageObject",
          "url": "https://edge-iptv.app/images/series-view.png",
          "width": "400",
          "height": "800"
        }
      }
    ],
    "video": {
      "@type": "VideoObject",
      "name": "How to Install IPTV on iPhone Tutorial",
      "description": "Video guide showing how to install and configure EDGE IPTV on iPhone and iPad",
      "thumbnailUrl": "https://edge-iptv.app/images/iphone-series-3d.png",
      "uploadDate": "2025-01-01"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Install IPTV on iPhone in 2 Minutes – Easy Guide",
    "description": "Complete step-by-step guide to install and configure IPTV on iPhone and iPad. Works with Xtream codes. No technical skills needed.",
    "image": {
      "@type": "ImageObject",
      "url": "https://edge-iptv.app/images/iphone-series-3d.png",
      "width": 400,
      "height": 800
    },
    "author": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "url": "https://edge-iptv.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://edge-iptv.app/images/icon.png",
        "width": 512,
        "height": 512
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2026-01-12",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://edge-iptv.app/how-to-install-iptv-iphone-ipad"
    },
    "keywords": "IPTV, iPhone, iPad, install, tutorial, Xtream codes, guide, streaming",
    "articleSection": "Tutorial",
    "wordCount": 800,
    "inLanguage": "en-US"
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/icon.png" alt="EDGE IPTV Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/fr/comment-installer-iptv-iphone-ipad" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              FR
            </Link>
            <div className="hidden sm:block">
              <DownloadButton location="guide-header-nav" size="md" className="!px-4 !py-2 !text-sm">
                Download
              </DownloadButton>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumb 
            items={[{ label: 'Home', href: '/' }]} 
            currentPage="How to Install IPTV on iPhone & iPad"
            lang="en"
          />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Install IPTV on iPhone in 2 Minutes – Easy Guide
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Set up IPTV streaming on your iPhone or iPad in just 4 simple steps. Works with Xtream codes. No technical skills needed.
            </p>
            <DownloadButton location="guide-header" size="lg" />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <h4 className="text-blue-800 font-bold mb-4 text-lg">What You'll Need:</h4>
            <ul className="space-y-2">
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

          <div className="space-y-12">
            {/* Step 1 */}
            <div id="step1" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Download the Best IPTV Player for iOS</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The first step is to download a reliable IPTV player. We highly recommend <strong>EDGE IPTV</strong> as it's specifically designed for iPhone and iPad, offering the smoothest streaming experience with advanced features.
              </p>
              
              <div className="mb-6">
                <strong className="block mb-2 text-gray-800">Why choose EDGE IPTV?</strong>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Quick Xtream setup in seconds</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Chromecast support for big screen viewing</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Offline downloading to watch without internet</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>Multilingual interface (English, French, Spanish, Portuguese, Turkish)</li>
                </ul>
              </div>
              
              <DownloadButton location="guide-step1" size="md">
                Download EDGE IPTV from App Store
              </DownloadButton>
            </div>

            {/* Step 2 */}
            <div id="step2" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Launch the App and Select Language</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Once installed, open EDGE IPTV. You'll be greeted with a beautiful interface where you can select your preferred language. The app supports multiple languages to make you feel at home.
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image 
                  src="/images/language-selection.jpeg" 
                  alt="EDGE IPTV Language Selection" 
                  width={600} 
                  height={400}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* CTA Intermediate */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="mb-6 text-blue-100">Download EDGE IPTV now and start streaming in 2 minutes</p>
              <DownloadButton location="guide-intermediate" size="lg" variant="white">
                Download Now - It&apos;s Free
              </DownloadButton>
            </div>

            {/* Step 3 */}
            <div id="step3" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Configure Xtream Codes</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                EDGE IPTV makes it incredibly easy to connect using Xtream codes. You don't need to deal with complex M3U playlists.
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6 ml-2">
                <li>Tap on the <strong>"Add Playlist"</strong> or <strong>"+"</strong> button.</li>
                <li>Select <strong>"Xtream Codes"</strong> option.</li>
                <li>Enter the details provided by your IPTV provider:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-500">
                    <li><strong>Server URL:</strong> (e.g., http://line.iptvdomain.com)</li>
                    <li><strong>Username:</strong> Your username</li>
                    <li><strong>Password:</strong> Your password</li>
                  </ul>
                </li>
                <li>Tap <strong>"Connect"</strong> or <strong>"Login"</strong>.</li>
              </ol>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                <strong>Note:</strong> Make sure to enter the details exactly as provided, paying attention to uppercase and lowercase letters.
              </div>
            </div>

            {/* Step 4 */}
            <div id="step4" className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">4</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Enjoy Your Content!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                That's it! EDGE IPTV will load your channels, movies, and series. You can now browse through categories, search for your favorite content, and start streaming immediately.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image 
                    src="/images/series-view.png" 
                    alt="Series View" 
                    width={400} 
                    height={800}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image 
                    src="/images/movie-details.png" 
                    alt="Movie Details" 
                    width={400} 
                    height={800}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 text-center border border-blue-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Start Streaming Today!</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who chose EDGE IPTV for the best streaming experience on iPhone and iPad. Setup takes less than 2 minutes.
            </p>
            <DownloadButton location="guide-final" size="xl" />
            <p className="mt-4 text-sm text-gray-500">✓ No credit card required ✓ Works with all IPTV providers ✓ Chromecast support</p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Image src="/images/icon.png" alt="EDGE IPTV Logo" width={40} height={40} className="rounded-lg opacity-80" />
              <span className="text-xl font-bold text-white">EDGE IPTV</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/how-to-install-iptv-iphone-ipad" className="text-white font-medium">How to Install</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} EDGE IPTV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
