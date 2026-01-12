import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';

export const metadata: Metadata = {
  title: 'Xtream Codes Setup Guide 2026 | 2-Minute Configuration Tutorial',
  description: '📺 Learn how to configure Xtream codes in EDGE IPTV in under 2 minutes. Step-by-step setup with screenshots, common errors, and troubleshooting tips.',
  alternates: {
    canonical: 'https://edge-iptv.app/blog/xtream-codes-setup-guide',
    languages: {
      'en': 'https://edge-iptv.app/blog/xtream-codes-setup-guide',
      'fr': 'https://edge-iptv.app/fr/blog/configurer-codes-xtream-guide',
    },
  },
  openGraph: {
    title: 'Xtream Codes Setup: Complete Guide for Beginners 2026',
    description: 'Complete guide to configure Xtream codes. Troubleshooting tips, common errors, and best practices for optimal IPTV streaming.',
    images: ['https://edge-iptv.app/images/series-view.png'],
    type: 'article',
    publishedTime: '2026-01-12',
  },
};

export default function XtreamCodesGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Xtream Codes Setup: Complete Guide for Beginners 2026",
    "description": "Comprehensive tutorial on how to configure Xtream codes on IPTV players, including troubleshooting common errors and optimization tips.",
    "image": "https://edge-iptv.app/images/series-view.png",
    "author": {
      "@type": "Organization",
      "name": "EDGE IPTV Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EDGE IPTV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://edge-iptv.app/images/icon.png"
      }
    },
    "datePublished": "2026-01-12",
    "dateModified": "2026-01-12"
  };

  return (
    <ArticleLayout
      title="Xtream Codes Setup: Complete Guide for Beginners 2026"
      description="Comprehensive tutorial on how to configure Xtream codes on IPTV players."
      date="January 12, 2026"
      readTime="7 min read"
      lang="en"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          Xtream codes are the industry standard for IPTV streaming in 2026. This comprehensive guide will walk you through the exact setup process in EDGE IPTV, step by step. Whether you&apos;re a complete beginner or experiencing connection issues, you&apos;ll learn how to configure your Xtream codes in under 2 minutes.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">What are Xtream Codes?</h2>
        
        <p>
          Xtream codes is an <strong>IPTV management API</strong> that allows IPTV providers to deliver content to users in a standardized way. Instead of dealing with complicated M3U playlists, Xtream codes provide a simple, three-credential system:
        </p>

        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <ul className="space-y-2 mb-0">
            <li><strong>Server URL:</strong> The address of your IPTV provider&apos;s server (e.g., http://line.iptvdomain.com)</li>
            <li><strong>Username:</strong> Your unique account username</li>
            <li><strong>Password:</strong> Your account password</li>
          </ul>
        </div>

        <p>
          These three pieces of information are all you need to access thousands of channels, movies, and TV series from your IPTV provider.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Step-by-Step: Setting Up Xtream Codes</h2>

        <h3 className="text-2xl font-bold mt-8 mb-4">Step 1: Get Your Xtream Codes Credentials</h3>
        <p>
          Contact your IPTV provider and request your Xtream codes credentials. They should provide you with:
        </p>
        <ul>
          <li>Server URL (usually starts with http:// or https://)</li>
          <li>Username (often alphanumeric)</li>
          <li>Password (case-sensitive)</li>
          <li>Port number (optional, usually 80 or 8080)</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-yellow-800 mb-1">Important Note</p>
              <p className="text-yellow-700 mb-0">Write down your credentials exactly as provided. Xtream codes are case-sensitive and even a small typo will prevent connection.</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">Step 2: Download an IPTV Player</h3>
        <p>
          You need an IPTV player app that supports Xtream codes. We recommend <strong>EDGE IPTV</strong> for the fastest and easiest setup experience.
        </p>

        <div className="text-center my-6">
          <DownloadButton location="article-xtream-step2" size="lg">
            Download EDGE IPTV Free
          </DownloadButton>
        </div>

        <p>
          EDGE IPTV is optimized for Xtream codes with a streamlined setup process that takes less than 2 minutes.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Step 3: Enter Your Xtream Codes</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 my-6 border-2 border-blue-200">
          <h4 className="text-lg font-bold mb-4">In EDGE IPTV - The Complete Process:</h4>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">📱 Step 1: Add Your Playlist</p>
              <p className="text-gray-700">
                Open EDGE IPTV and look for the <strong>&quot;+&quot; button in the bottom-right corner</strong> of your screen. Tap it to start adding your first playlist.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">🔧 Step 2: Choose Your Source Type</p>
              <p className="text-gray-700 mb-2">
                You&apos;ll see two options:
              </p>
              <ul className="ml-6 space-y-1 text-gray-700">
                <li><strong>• Xtream Codes API</strong> - Select this for Xtream codes setup</li>
                <li>• M3U Playlist - For M3U URLs (different method)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Tap <strong>&quot;Xtream Codes API&quot;</strong> to continue.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">✏️ Step 3: Fill in Your Information</p>
              <p className="text-gray-700 mb-2">You&apos;ll see a simple form with these fields:</p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li><strong>• Playlist Name:</strong> Choose any name you want (e.g., &quot;My IPTV&quot;, &quot;Main Playlist&quot;) - this is just for your reference</li>
                <li><strong>• Server URL:</strong> Paste the URL your IPTV provider gave you (e.g., http://line.iptvdomain.com)</li>
                <li><strong>• Username:</strong> Enter the exact username from your provider</li>
                <li><strong>• Password:</strong> Enter the exact password from your provider (case-sensitive!)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">➕ Step 4: Add the Playlist</p>
              <p className="text-gray-700">
                Once all fields are filled, tap the <strong>&quot;Add&quot;</strong> or <strong>&quot;Save&quot;</strong> button. Your playlist will now appear in your playlists list.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-blue-700 mb-2">📋 Step 5: Access Your Playlists</p>
              <p className="text-gray-700">
                You&apos;ll see your newly added playlist in the main list. You can add multiple playlists if you have different IPTV subscriptions - just repeat the process with the + button.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-yellow-300">
              <p className="font-bold text-yellow-700 mb-2">⏳ Step 6: Load Your Content</p>
              <p className="text-gray-700 mb-2">
                Tap on your playlist to load the content. The app will start retrieving your channels, movies, and series.
              </p>
              <div className="bg-yellow-50 p-3 rounded mt-2">
                <p className="text-sm font-bold text-yellow-800 mb-1">⚠️ Important:</p>
                <p className="text-sm text-yellow-700 mb-0">
                  <strong>Stay in the app during this process!</strong> Don&apos;t close EDGE IPTV or switch to another app while content is loading. This ensures smooth data retrieval and prevents connection issues.
                </p>
              </div>
              <p className="text-gray-700 mt-2">
                Loading typically takes 10-30 seconds depending on your provider&apos;s content library size.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-green-300">
              <p className="font-bold text-green-700 mb-2">🎉 Step 7: Enjoy Your Content!</p>
              <p className="text-gray-700 mb-2">
                Once loaded, you&apos;ll have access to three main sections:
              </p>
              <ul className="ml-6 space-y-1 text-gray-700">
                <li><strong>📺 Live TV:</strong> Watch live channels in real-time</li>
                <li><strong>🎬 Movies:</strong> Browse and watch thousands of movies on-demand</li>
                <li><strong>📺 Series:</strong> Access complete TV series with all episodes</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Navigate between these sections using the bottom menu. Happy streaming!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-green-800 mb-1">Success!</p>
              <p className="text-green-700 mb-0">That&apos;s it! You&apos;ve successfully configured your Xtream codes on EDGE IPTV. The entire process takes less than 2 minutes once you have your credentials.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Common Xtream Codes Errors & Solutions</h2>

        <h3 className="text-xl font-bold mt-8 mb-4">Error: &quot;Invalid Credentials&quot; or &quot;Authentication Failed&quot;</h3>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>Typo in username or password (most common)</li>
          <li>Incorrect server URL</li>
          <li>Account suspended or expired</li>
        </ul>
        <p><strong>Solutions:</strong></p>
        <ul>
          <li>✓ Double-check spelling and capitalization</li>
          <li>✓ Copy-paste credentials instead of typing manually</li>
          <li>✓ Contact your provider to verify account status</li>
          <li>✓ Ensure there are no extra spaces before or after credentials</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Error: &quot;Connection Timeout&quot; or &quot;Cannot Reach Server&quot;</h3>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>Internet connection issues</li>
          <li>Server is down or under maintenance</li>
          <li>Firewall blocking connection</li>
          <li>VPN interfering with connection</li>
        </ul>
        <p><strong>Solutions:</strong></p>
        <ul>
          <li>✓ Check your internet connection (try opening a website)</li>
          <li>✓ Try connecting without VPN first</li>
          <li>✓ Wait 15-30 minutes and try again</li>
          <li>✓ Contact your provider to check server status</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Error: &quot;No Channels Loaded&quot; or &quot;Empty Playlist&quot;</h3>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>Subscription not activated yet</li>
          <li>Provider hasn&apos;t assigned content to your account</li>
          <li>Server-side issue</li>
        </ul>
        <p><strong>Solutions:</strong></p>
        <ul>
          <li>✓ Contact your provider to activate your subscription</li>
          <li>✓ Wait 24 hours after payment for activation</li>
          <li>✓ Try logging out and back in</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Error: &quot;Playback Failed&quot; or &quot;Stream Not Available&quot;</h3>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>Poor internet connection</li>
          <li>Server overload</li>
          <li>Concurrent connections limit reached</li>
        </ul>
        <p><strong>Solutions:</strong></p>
        <ul>
          <li>✓ Check your internet speed (need 5+ Mbps for HD)</li>
          <li>✓ Close other apps using internet</li>
          <li>✓ Try a different channel or server</li>
          <li>✓ Disconnect from other devices using same account</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">Pro Tips for Optimal Xtream Codes Performance</h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">💡 Tip 1: Use the Right App</h4>
            <p className="mb-0">
              Not all IPTV players handle Xtream codes equally. <strong>EDGE IPTV</strong> is optimized specifically for Xtream codes with faster loading times and better error handling than competitors.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">💡 Tip 2: Save Your Credentials Securely</h4>
            <p className="mb-0">
              Use a password manager or note app to store your Xtream codes safely. You&apos;ll need them if you reinstall the app or set up on another device.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">💡 Tip 3: Test Multiple Servers</h4>
            <p className="mb-0">
              Some IPTV providers offer multiple server URLs. If one is slow, try an alternative server for better performance.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">💡 Tip 4: Update Your App Regularly</h4>
            <p className="mb-0">
              Keep your IPTV player updated to ensure compatibility with the latest Xtream codes API features and security patches.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">💡 Tip 5: Check Connection Limits</h4>
            <p className="mb-0">
              Most IPTV providers limit concurrent connections (usually 1-3 devices). Don&apos;t share your credentials or you may experience disconnections.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Xtream Codes vs M3U Playlists: What&apos;s the Difference?</h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-3">Xtream Codes</th>
                <th className="border border-gray-300 px-4 py-3">M3U Playlist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Setup Complexity</td>
                <td className="border border-gray-300 px-4 py-3 text-center">⭐⭐⭐⭐⭐ Easy</td>
                <td className="border border-gray-300 px-4 py-3 text-center">⭐⭐ Complex</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Credentials</td>
                <td className="border border-gray-300 px-4 py-3 text-center">3 fields (URL, user, pass)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Long URL string</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">EPG Support</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✅ Automatic</td>
                <td className="border border-gray-300 px-4 py-3 text-center">❌ Manual config</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">VOD (Movies/Series)</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✅ Yes</td>
                <td className="border border-gray-300 px-4 py-3 text-center">❌ Limited</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Content Updates</td>
                <td className="border border-gray-300 px-4 py-3 text-center">✅ Automatic</td>
                <td className="border border-gray-300 px-4 py-3 text-center">❌ Manual re-add</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Recommended?</td>
                <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">✅ Yes</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Only for advanced users</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Conclusion:</strong> Xtream codes are significantly easier and more feature-rich than M3U playlists. Always choose Xtream when available.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Best Apps for Xtream Codes in 2026</h2>

        <div className="space-y-4">
          <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
            <h4 className="text-xl font-bold mb-2">1. EDGE IPTV - Best Overall ⭐ 5.0</h4>
            <p className="mb-2">
              The fastest Xtream codes setup on the market (under 2 minutes). Free with all features unlocked, including Chromecast and offline viewing.
            </p>
            <DownloadButton location="article-xtream-apps" size="md">
              Download EDGE IPTV
            </DownloadButton>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-2">2. GSE Smart IPTV ⭐ 4.5</h4>
            <p className="mb-0">Paid app ($4.99) with advanced features for power users. Slower setup but very customizable.</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h4 className="text-xl font-bold mb-2">3. IPTV Smarters Pro ⭐ 4.3</h4>
            <p className="mb-0">Free option with decent Xtream support but no Chromecast. Good budget choice.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Are Xtream codes safe to use?</h3>
        <p>
          Yes, Xtream codes are just a protocol for accessing IPTV content. The safety depends on your IPTV provider. Always use legitimate IPTV services.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Do I need different Xtream codes for each device?</h3>
        <p>
          No, you use the same Xtream codes credentials on all your devices. However, most providers limit concurrent connections (1-3 devices at once).
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">How long does Xtream codes setup take?</h3>
        <p>
          With <strong>EDGE IPTV</strong>, setup takes under 2 minutes. Other apps may take 5-10 minutes depending on their interface complexity.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">What internet speed do I need for Xtream codes?</h3>
        <p>
          Minimum 5 Mbps for HD streaming, 10 Mbps recommended. For 4K content, you&apos;ll need 25+ Mbps.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Can I use Xtream codes with a VPN?</h3>
        <p>
          Yes, but VPN may slow down your connection. Some providers may block VPN usage. Try connecting without VPN first if you experience issues.
        </p>

        <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4">Ready to Set Up Your Xtream Codes?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Download EDGE IPTV for the fastest and easiest Xtream codes configuration experience
          </p>
          <DownloadButton location="article-xtream-final" size="xl">
            Download EDGE IPTV Free
          </DownloadButton>
          <p className="text-sm text-gray-500 mt-4">
            ✓ 2-minute setup ✓ No ads ✓ Chromecast support ✓ Free forever
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    </ArticleLayout>
  );
}
