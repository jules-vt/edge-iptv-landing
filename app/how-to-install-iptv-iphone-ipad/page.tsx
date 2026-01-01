import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Install IPTV on iPhone & iPad - Complete Setup Guide 2025',
  description: 'Complete step-by-step guide to install and configure IPTV on iPhone and iPad. Learn how to set up Xtream codes, configure playlists, and enjoy streaming on iOS devices.',
  keywords: 'IPTV iPhone, IPTV iPad, install IPTV iOS, Xtream codes iPhone, IPTV setup guide, iPhone streaming, iPad IPTV player',
  alternates: {
    canonical: 'https://edge-iptv.app/how-to-install-iptv-iphone-ipad',
    languages: {
      'en': 'https://edge-iptv.app/how-to-install-iptv-iphone-ipad',
      'fr': 'https://edge-iptv.app/fr/comment-installer-iptv-iphone-ipad',
    },
  },
  openGraph: {
    type: 'article',
    url: 'https://edge-iptv.app/how-to-install-iptv-iphone-ipad',
    title: 'How to Install IPTV on iPhone & iPad - Complete Setup Guide 2025',
    description: 'Complete step-by-step guide to install and configure IPTV on iPhone and iPad. Learn how to set up Xtream codes and enjoy streaming.',
    images: ['https://edge-iptv.app/images/iphone-series-3d.png'],
    siteName: 'EDGE IPTV',
    locale: 'en_US',
  },
};

export default function HowToInstall() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
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
            <Link 
              href="https://apps.apple.com/ca/app/edge-iptv/id6745966143" 
              className="hidden sm:inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all"
            >
              <Download size={16} />
              Download
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8 text-sm text-gray-500">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link> / How to Install IPTV on iPhone & iPad
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              How to Install IPTV on iPhone & iPad: Complete 2025 Guide
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Learn how to set up IPTV streaming on your iOS devices in just a few minutes. This comprehensive guide will walk you through the entire process using the best IPTV player available.
            </p>
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
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
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
              
              <Link 
                href="https://apps.apple.com/ca/app/edge-iptv/id6745966143" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <Download size={20} />
                Download EDGE IPTV from App Store
              </Link>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
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
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
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
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-blue-600 relative">
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
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image 
                    src="/images/movie-details.png" 
                    alt="Movie Details" 
                    width={400} 
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
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
