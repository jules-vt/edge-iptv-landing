import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle, CheckCircle, FileText } from 'lucide-react';
import { Metadata } from 'next';
import { ArticleLayout } from '@/components/article-layout';
import { DownloadButton } from '@/components/download-button';

export const metadata: Metadata = {
  title: 'M3U Playlist Setup Guide 2026 | Complete Configuration Tutorial',
  description: '📺 Master M3U playlist configuration in EDGE IPTV. Learn M3U vs M3U8, EPG setup, troubleshooting, and when to use M3U over Xtream codes.',
  alternates: {
    canonical: 'https://edge-iptv.app/blog/m3u-playlist-setup-guide',
    languages: {
      'en': 'https://edge-iptv.app/blog/m3u-playlist-setup-guide',
      'fr': 'https://edge-iptv.app/fr/blog/configurer-playlist-m3u-guide',
    },
  },
  openGraph: {
    title: 'M3U Playlist Setup: Complete Tutorial 2026',
    description: 'Complete guide to configure M3U playlists. Step-by-step setup, M3U vs M3U8, EPG configuration, and troubleshooting tips.',
    images: ['https://edge-iptv.app/images/series-view.png'],
    type: 'article',
    publishedTime: '2026-01-12',
  },
};

export default function M3UPlaylistGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "M3U Playlist Setup Guide: Complete Tutorial 2026",
    "description": "Comprehensive tutorial on configuring M3U playlists on IPTV players, including M3U vs M3U8 differences, EPG setup, and troubleshooting.",
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
      title="M3U Playlist Setup Guide: Complete Tutorial 2026"
      description="Comprehensive guide on configuring M3U playlists for IPTV streaming."
      date="January 12, 2026"
      readTime="6 min read"
      lang="en"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl text-gray-600 mb-8">
          M3U playlists remain a popular method for IPTV streaming in 2026. This comprehensive guide will teach you everything about M3U configuration in EDGE IPTV: what M3U playlists are, how to set them up, the difference between M3U and M3U8, and when to use them over Xtream codes.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">What is an M3U Playlist?</h2>
        
        <div className="bg-blue-50 rounded-xl p-6 my-6">
          <div className="flex items-start gap-4">
            <FileText className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-lg mb-2">M3U Format Explained</p>
              <p className="mb-0">
                M3U (MP3 URL or Moving Picture Experts Group Audio Layer 3 Uniform Resource Locator) is a plain text file format that contains a list of media files - typically streaming URLs for IPTV channels. Your IPTV provider gives you a URL that points to this playlist file, which your player downloads and parses to display available channels.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">How M3U Works:</h3>
        <ol className="space-y-2">
          <li><strong>Provider Creates Playlist:</strong> Your IPTV service maintains an M3U file with all channel streams</li>
          <li><strong>You Get a URL:</strong> Provider gives you a link (e.g., http://provider.com/playlist.m3u)</li>
          <li><strong>Player Fetches Data:</strong> EDGE IPTV downloads and reads the M3U file</li>
          <li><strong>Channels Appear:</strong> All channels from the playlist become available in the app</li>
        </ol>

        <h2 className="text-3xl font-bold mt-12 mb-6">M3U vs M3U8: What&apos;s the Difference?</h2>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-3 text-center">M3U</th>
                <th className="border border-gray-300 px-4 py-3 text-center">M3U8</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">File Encoding</td>
                <td className="border border-gray-300 px-4 py-3 text-center">UTF-8 or ASCII</td>
                <td className="border border-gray-300 px-4 py-3 text-center">UTF-8 only</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Character Support</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Limited</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Full Unicode</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">Best For</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Basic playlists</td>
                <td className="border border-gray-300 px-4 py-3 text-center">International channels</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold">Compatibility</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Universal</td>
                <td className="border border-gray-300 px-4 py-3 text-center">Most modern players</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold">EDGE IPTV Support</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">✅ Yes</td>
                <td className="border border-gray-300 px-4 py-3 text-center text-green-600">✅ Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-l-4 border-blue-500">
          <strong>In Practice:</strong> The difference is minimal for most users. M3U8 is simply the UTF-8 version of M3U, better for non-English channel names. EDGE IPTV handles both formats automatically - you don&apos;t need to worry about which one you have.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">How to Setup M3U Playlists in EDGE IPTV</h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-yellow-800 mb-1">Before You Start</p>
              <p className="text-yellow-700 mb-0">Make sure you have your M3U playlist URL from your IPTV provider. It typically looks like: <code className="bg-yellow-100 px-2 py-1 rounded text-sm">http://provider.com/get.php?username=user&amp;password=pass&amp;type=m3u_plus</code></p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">Step-by-Step Configuration:</h3>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 my-6 border-2 border-purple-200">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-purple-700 mb-2">📱 Step 1: Open EDGE IPTV</p>
              <p className="text-gray-700">
                Launch the EDGE IPTV app on your iPhone or iPad. You&apos;ll see the main screen with any existing playlists (or an empty state if this is your first time).
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-purple-700 mb-2">➕ Step 2: Tap the Add Button</p>
              <p className="text-gray-700">
                Look for the <strong>&quot;+&quot; button in the bottom-right corner</strong> of your screen. This is your gateway to adding new playlists. Tap it to begin.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-purple-700 mb-2">📋 Step 3: Select M3U Playlist</p>
              <p className="text-gray-700 mb-2">
                You&apos;ll see two options for adding content:
              </p>
              <ul className="ml-6 space-y-1 text-gray-700">
                <li>• Xtream Codes API - For Xtream codes setup</li>
                <li><strong>• M3U Playlist</strong> - Select this one!</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Tap on <strong>&quot;M3U Playlist&quot;</strong> to continue with M3U configuration.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-purple-700 mb-2">✏️ Step 4: Enter Playlist Information</p>
              <p className="text-gray-700 mb-2">You&apos;ll see a simple form with just two fields:</p>
              <ul className="ml-6 space-y-2 text-gray-700">
                <li><strong>• Playlist Name:</strong> Choose any name you like (e.g., &quot;My Live TV&quot;, &quot;Sports Channels&quot;). This is just a label for your reference.</li>
                <li><strong>• M3U URL:</strong> Paste the complete M3U/M3U8 URL from your provider. Make sure to copy the entire URL without modifying it.</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded mt-3">
                <p className="text-sm font-bold text-blue-800 mb-1">💡 Pro Tip:</p>
                <p className="text-sm text-blue-700 mb-0">If your URL is very long, use the share/copy function from your provider&apos;s email or website to ensure you get the complete URL.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <p className="font-bold text-purple-700 mb-2">💾 Step 5: Save the Playlist</p>
              <p className="text-gray-700">
                Once both fields are filled, tap the <strong>&quot;Add&quot;</strong> or <strong>&quot;Save&quot;</strong> button. Your M3U playlist will now appear in your playlists list.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-yellow-300">
              <p className="font-bold text-yellow-700 mb-2">⏳ Step 6: Load Your Channels</p>
              <p className="text-gray-700 mb-2">
                Tap on your newly added playlist to load the channels. EDGE IPTV will download and parse the M3U file.
              </p>
              <div className="bg-yellow-50 p-3 rounded mt-2">
                <p className="text-sm font-bold text-yellow-800 mb-1">⚠️ Important:</p>
                <p className="text-sm text-yellow-700 mb-0">
                  <strong>Stay in the app</strong> while channels are loading. Don&apos;t switch to another app or close EDGE IPTV during this process. Loading typically takes 5-15 seconds.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-green-300">
              <p className="font-bold text-green-700 mb-2">🎉 Step 7: Start Watching!</p>
              <p className="text-gray-700">
                Once loaded, you&apos;ll see all your live TV channels. Browse by category, search for specific channels, or add favorites for quick access. Enjoy streaming!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-green-800 mb-1">Success!</p>
              <p className="text-green-700 mb-0">Your M3U playlist is now configured and ready to use. You can add multiple playlists by repeating this process with the + button.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Optional: EPG Configuration</h2>

        <p>
          EPG (Electronic Program Guide) shows you what&apos;s currently playing and what&apos;s coming up on each channel. While Xtream codes include EPG automatically, M3U playlists often require manual EPG configuration.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">How to Add EPG to Your M3U Playlist:</h3>

        <div className="bg-blue-50 rounded-xl p-6 my-4">
          <ol className="space-y-3">
            <li><strong>1. Get EPG URL:</strong> Ask your IPTV provider for their EPG URL (usually ends in .xml or .gz)</li>
            <li><strong>2. Access Playlist Settings:</strong> Long-press on your playlist in EDGE IPTV</li>
            <li><strong>3. Tap Edit/Settings:</strong> Look for edit or settings option</li>
            <li><strong>4. Add EPG URL:</strong> Paste your EPG URL in the EPG field</li>
            <li><strong>5. Save & Refresh:</strong> Save settings and refresh your playlist</li>
          </ol>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-4">
          <p className="font-bold text-yellow-800 mb-2">📌 Note About EPG</p>
          <p className="text-yellow-700 mb-0">
            Not all IPTV providers offer EPG for M3U playlists. If EPG is important to you, consider using Xtream codes instead, which always include program guide data.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Common M3U Errors & Solutions</h2>

        <h3 className="text-xl font-bold mt-8 mb-4">Error: &quot;Invalid Playlist&quot; or &quot;Cannot Load&quot;</h3>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>Incomplete URL (missing characters)</li>
          <li>URL expired or deactivated by provider</li>
          <li>Provider server temporarily down</li>
          <li>Special characters not properly encoded in URL</li>
        </ul>
        <p><strong>Solutions:</strong></p>
        <ul>
          <li>Copy the URL again from your provider&apos;s email/website</li>
          <li>Test the URL in a web browser - it should download a file</li>
          <li>Contact provider to verify URL is active</li>
          <li>Try both http:// and https:// versions if applicable</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Error: &quot;No Channels Found&quot; or &quot;Empty Playlist&quot;</h3>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>M3U file is actually empty (provider issue)</li>
          <li>Subscription not activated yet</li>
          <li>Wrong URL format (might be EPG URL instead)</li>
        </ul>
        <p><strong>Solutions:</strong></p>
        <ul>
          <li>Download the URL in a browser and check file contents</li>
          <li>Verify subscription status with provider</li>
          <li>Request a fresh M3U URL</li>
          <li>Try the m3u_plus format if available</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Error: Channels Load But Won&apos;t Play</h3>
        <p><strong>Causes:</strong></p>
        <ul>
          <li>Slow or unstable internet connection</li>
          <li>Stream URLs in M3U file are outdated</li>
          <li>Provider blocking specific regions/IPs</li>
          <li>Maximum connections limit reached</li>
        </ul>
        <p><strong>Solutions:</strong></p>
        <ul>
          <li>Test your internet speed (need 10+ Mbps)</li>
          <li>Try different channels to isolate the issue</li>
          <li>Request updated M3U URL from provider</li>
          <li>Ensure no other devices are using same account</li>
          <li>Try with mobile data instead of Wi-Fi</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">M3U Limitations vs Xtream Codes</h2>

        <div className="bg-orange-50 rounded-xl p-6 my-6">
          <h3 className="text-xl font-bold mb-4">What M3U Playlists Typically Don&apos;t Include:</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Movies & Series (VOD):</strong> M3U is primarily for live TV channels. Movies and series require Xtream codes in most cases.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Automatic EPG:</strong> You need to manually add EPG URL, and not all providers offer it for M3U.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Auto-Updates:</strong> If provider changes streams, you&apos;ll need a new URL. Xtream codes update automatically.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Category Organization:</strong> Channels may not be well-organized into categories compared to Xtream codes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 font-bold">•</span>
              <span><strong>Catch-Up TV:</strong> Replay/catch-up features are rarely available with M3U playlists.</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">When to Use M3U vs Xtream Codes</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-300">
            <h3 className="text-xl font-bold mb-4 text-green-700">✅ Use M3U When:</h3>
            <ul className="space-y-2">
              <li>• Your provider only offers M3U playlists</li>
              <li>• You only need live TV channels</li>
              <li>• You want quick, simple setup</li>
              <li>• Testing a free IPTV service</li>
              <li>• Combining multiple playlist sources</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-300">
            <h3 className="text-xl font-bold mb-4 text-blue-700">⭐ Use Xtream Codes When:</h3>
            <ul className="space-y-2">
              <li>• You want movies and series (VOD)</li>
              <li>• EPG is important to you</li>
              <li>• You need automatic updates</li>
              <li>• You want organized categories</li>
              <li>• Provider offers both options</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 my-8 border-2 border-blue-300">
          <h4 className="font-bold text-xl mb-4">💡 Our Recommendation</h4>
          <p className="text-gray-800 mb-0">
            If your IPTV provider offers both M3U and Xtream codes, <strong>choose Xtream codes</strong> for the best experience. Xtream provides better organization, automatic EPG, VOD content, and automatic updates. However, M3U is perfectly fine if you only watch live TV channels and your provider doesn&apos;t offer Xtream codes.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Pro Tips for M3U Playlists</h2>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">📝 Tip 1: Save Your M3U URL</h4>
            <p className="mb-0">
              Store your M3U URL in a password manager or notes app. You&apos;ll need it if you reinstall the app or want to use it on another device.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">🔄 Tip 2: Refresh Regularly</h4>
            <p className="mb-0">
              If channels stop working, try refreshing your playlist (long-press → refresh). Providers sometimes update stream URLs without notice.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">📱 Tip 3: Test on Wi-Fi First</h4>
            <p className="mb-0">
              Always setup and test new M3U playlists on Wi-Fi before using mobile data. Initial loading can consume data.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">🎯 Tip 4: Use Descriptive Names</h4>
            <p className="mb-0">
              If you have multiple playlists, name them clearly (e.g., &quot;Sports HD&quot;, &quot;News Channels&quot;) to easily identify which is which.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h4 className="text-lg font-bold mb-2">⚠️ Tip 5: Backup Important URLs</h4>
            <p className="mb-0">
              Take screenshots or save provider emails containing M3U URLs. If your account gets locked out, you&apos;ll have a reference.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

        <h3 className="text-xl font-bold mt-6 mb-3">What&apos;s the difference between M3U and M3U8?</h3>
        <p>
          M3U8 is simply the UTF-8 encoded version of M3U. It supports international characters better, making it ideal for non-English channel names. EDGE IPTV handles both automatically - you don&apos;t need to choose.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Can I use multiple M3U playlists in EDGE IPTV?</h3>
        <p>
          Yes! You can add as many M3U playlists as you want. Just tap the + button for each new playlist. This is useful if you have multiple IPTV subscriptions or free playlist sources.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Do M3U playlists work offline?</h3>
        <p>
          No. M3U playlists stream content from the internet in real-time. You need an active internet connection to watch channels. However, EDGE IPTV&apos;s offline download feature works with VOD content from Xtream codes.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Why do my M3U channels keep buffering?</h3>
        <p>
          Buffering is usually caused by slow internet (need 10+ Mbps for HD), provider server issues, or too many devices using your connection. Try closing other apps, moving closer to Wi-Fi router, or testing with mobile data.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Can I edit M3U playlists in EDGE IPTV?</h3>
        <p>
          You can edit the playlist name and URL, but you cannot edit individual channels within an M3U playlist. The channel list comes from your provider&apos;s M3U file and updates whenever you refresh the playlist.
        </p>

        <div className="text-center my-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border-2 border-blue-200">
          <h3 className="text-2xl font-bold mb-4">Ready to Setup Your M3U Playlist?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Download EDGE IPTV and configure your M3U playlists in under 2 minutes
          </p>
          <DownloadButton location="article-m3u-final" size="xl">
            Download EDGE IPTV Free
          </DownloadButton>
          <p className="text-sm text-gray-500 mt-4">
            ✓ M3U & M3U8 support ✓ Multiple playlists ✓ EPG configuration ✓ Free forever
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
