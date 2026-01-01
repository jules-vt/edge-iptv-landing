import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - EDGE IPTV',
  description: 'Terms of Use for EDGE IPTV application. Please read these terms carefully before using our application.',
  alternates: {
    canonical: 'https://edge-iptv.app/terms-of-use',
    languages: {
      'en': 'https://edge-iptv.app/terms-of-use',
      'fr': 'https://edge-iptv.app/fr/terms-of-use',
    },
  },
};

export default function TermsOfUse() {
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
            <Link href="/fr/terms-of-use" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Terms of Use</h1>
              <p className="text-gray-500">Last updated: May 14, 2025</p>
            </div>

            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Please read these terms of use carefully before using the Edge IPTV application.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By downloading, installing, or using the Edge IPTV application, you agree to be bound by these terms of use. If you do not accept these terms, you must not use the application.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Use of the Application</h2>
              <p className="text-gray-600 mb-4">
                Edge IPTV is an IPTV stream player that allows you to view multimedia content available via IPTV URLs. Our application is designed as a simple player and does not provide any content itself.
              </p>
              <p className="text-gray-600 mb-4">
                You are solely responsible for obtaining the legal rights to access any content you view through our application. Edge IPTV does not encourage or endorse copyright infringement or other intellectual property violations.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                The Edge IPTV application and its original content, features, and functionality are and will remain the exclusive property of Edge IPTV and its licensors. The application is protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Restrictions</h2>
              <p className="text-gray-600 mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Use the application for any illegal or unauthorized purpose</li>
                <li>Attempt to decompile, disassemble, or reverse engineer the application</li>
                <li>Remove, circumvent, or disable any security features of the application</li>
                <li>Redistribute, sell, rent, or sublicense the application</li>
                <li>Use the application in a manner that could damage, disable, overburden, or impair servers or networks</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                In no event shall Edge IPTV or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, without limitation, damages for loss of profits, business interruption, loss of business information, or any other pecuniary loss) arising out of the use of or inability to use the application.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Third-Party Content</h2>
              <p className="text-gray-600 mb-4">
                Our application enables you to access content provided by third parties. This content is the sole responsibility of the entity that makes it available. We cannot guarantee its accuracy, relevance, or quality and are not responsible for any third-party content you access through the application.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify or replace these terms at any time at our sole discretion. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms of Use.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms of Use are governed by and construed in accordance with the laws of France, without regard to its conflict of law principles.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact Us</h2>
              <p className="text-gray-600 mb-2">If you have any questions about these Terms of Use, please contact us:</p>
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
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-use" className="text-white font-medium">Terms of Use</Link>
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
