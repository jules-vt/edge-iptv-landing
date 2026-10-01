"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DownloadButton } from '@/components/download-button';
import { LanguageSwitcher } from '@/components/language-switcher';
import type { Lang } from '@/lib/i18n';

interface BlogHeaderProps {
  currentLang: Lang;
}

const translations: Record<Lang, { home: string; download: string }> = {
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
  de: {
    home: 'Startseite',
    download: 'Laden',
  },
  ar: {
    home: 'الرئيسية',
    download: 'تحميل',
  },
  it: {
    home: 'Home',
    download: 'Scarica',
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
            <Image src="/images/icon.png" alt="EDGE IPTV Logo" width={40} height={40} className="h-10 w-10 object-cover" />
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
          <div className="hidden sm:block">
            <DownloadButton location="blog-header" size="md" className="!text-sm">
              {t.download}
            </DownloadButton>
          </div>
        </div>
      </div>
    </header>
  );
}
