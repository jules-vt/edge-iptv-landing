"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';

interface BlogHeaderProps {
  currentLang: 'en' | 'fr' | 'es' | 'pt';
}

const translations = {
  en: {
    home: 'Home',
    download: 'Download',
  },
  fr: {
    home: 'Accueil',
    download: 'Télécharger',
  },
  es: {
    home: 'Inicio',
    download: 'Descargar',
  },
  pt: {
    home: 'Início',
    download: 'Baixar',
  },
};

export function BlogHeader({ currentLang }: BlogHeaderProps) {
  const t = translations[currentLang];
  const homeLink = currentLang === 'en' ? '/' : `/${currentLang}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href={homeLink} className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm">
            <Image src="/images/icon.png" alt="EDGE IPTV Logo" fill className="object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tight">EDGE IPTV</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link 
            href={homeLink} 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {t.home}
          </Link>
          <LanguageSwitcher currentLang={currentLang} />
          <Button asChild className="hidden sm:inline-flex rounded-full font-semibold shadow-lg shadow-primary/20">
            <Link href="https://j-analytics.cloud/q/Z0m1Qmdtf">
              <Download className="mr-2 h-4 w-4" />
              {t.download}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
