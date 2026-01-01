import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - EDGE IPTV',
  description: 'Privacy Policy for EDGE IPTV application. Learn how we handle your data and protect your privacy.',
  alternates: {
    canonical: 'https://edge-iptv.app/privacy-policy',
    languages: {
      'en': 'https://edge-iptv.app/privacy-policy',
      'fr': 'https://edge-iptv.app/fr/privacy-policy',
    },
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/icon.png" alt="EDGE IPTV Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/fr/privacy-policy" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              FR
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors mb-6">
                <ArrowLeft size={16} />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
              <p className="text-gray-500">Last updated: May 14, 2025</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use the Edge IPTV application.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Collection and Use of Data</h2>
              <p className="text-gray-600 mb-4">
                Edge IPTV is designed to respect your privacy. We do not collect personally identifiable information about you, unless you voluntarily provide it to us.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Information We Collect</h3>
              <p className="text-gray-600 mb-3">When using our application, we may collect the following information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Anonymous usage information to improve the application</li>
                <li>Error logs in case the application crashes</li>
                <li>Configuration preferences you set in the application</li>
                <li>IPTV URLs you add to the application (stored only locally on your device)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Data Storage</h3>
              <p className="text-gray-600 mb-6">
                All IPTV lists, URLs, and credentials you enter into the application are stored only on your device. We do not transmit this information to our servers or third parties.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Analytics Data</h3>
              <p className="text-gray-600 mb-6">
                We collect anonymous usage data to continuously improve our application. This data helps us understand how users interact with the application and identify possible improvements. All collected data is aggregated and does not contain any personally identifiable information.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Security</h3>
              <p className="text-gray-600 mb-6">
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Changes to This Privacy Policy</h3>
              <p className="text-gray-600 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-gray-600 mb-6">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Contact Us</h3>
              <p className="text-gray-600 mb-2">If you have any questions about this Privacy Policy, you can contact us:</p>
              <p className="text-gray-600">
                By email: <a href="mailto:contact@edge-iptv.app" className="text-blue-600 hover:underline">contact@edge-iptv.app</a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <Link 
                href="/" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to Home
              </Link>
            </div>
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
              <Link href="/privacy-policy" className="text-white font-medium">Privacy Policy</Link>
              <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/how-to-install-iptv-iphone-ipad" className="hover:text-white transition-colors">How to Install</Link>
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
