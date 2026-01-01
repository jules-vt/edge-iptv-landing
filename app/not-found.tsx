import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white font-sans flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <div className="mb-8 flex justify-center">
          <Image src="/images/icon.png" alt="EDGE IPTV Logo" width={80} height={80} className="rounded-2xl shadow-2xl" />
        </div>
        
        <h1 className="text-9xl font-bold mb-4 opacity-20">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-blue-100 mb-10">
          The page you're looking for doesn't exist. Return to EDGE IPTV homepage to discover our all-in-one IPTV player.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <Link 
            href="/fr" 
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
          >
            <ArrowLeft size={20} />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
