"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { blogPosts } from "@/lib/blog-posts"

interface LanguageSwitcherProps {
  currentLang: 'en' | 'fr' | 'es' | 'pt'
}

const languages = {
  en: { label: 'English', flag: '🇺🇸' },
  fr: { label: 'Français', flag: '🇫🇷' },
  es: { label: 'Español', flag: '🇪🇸' },
  pt: { label: 'Português', flag: '🇵🇹' },
}

/**
 * Slug mapping for blog articles across all languages
 * Maps from any language slug to all other language versions
 */
const blogSlugMapping: Record<string, Record<string, string>> = {
  // Best IPTV Player iOS 2026
  'best-iptv-player-ios-2026': { en: 'best-iptv-player-ios-2026', fr: 'meilleur-lecteur-iptv-ios-2026', es: 'mejor-reproductor-iptv-ios-2026', pt: 'melhor-reprodutor-iptv-ios-2026' },
  'meilleur-lecteur-iptv-ios-2026': { en: 'best-iptv-player-ios-2026', fr: 'meilleur-lecteur-iptv-ios-2026', es: 'mejor-reproductor-iptv-ios-2026', pt: 'melhor-reprodutor-iptv-ios-2026' },
  'mejor-reproductor-iptv-ios-2026': { en: 'best-iptv-player-ios-2026', fr: 'meilleur-lecteur-iptv-ios-2026', es: 'mejor-reproductor-iptv-ios-2026', pt: 'melhor-reprodutor-iptv-ios-2026' },
  'melhor-reprodutor-iptv-ios-2026': { en: 'best-iptv-player-ios-2026', fr: 'meilleur-lecteur-iptv-ios-2026', es: 'mejor-reproductor-iptv-ios-2026', pt: 'melhor-reprodutor-iptv-ios-2026' },
  
  // Chromecast Guide
  'chromecast-iptv-streaming-guide': { en: 'chromecast-iptv-streaming-guide', fr: 'diffuser-iptv-chromecast-guide', es: 'guia-streaming-iptv-chromecast', pt: 'guia-streaming-iptv-chromecast-pt' },
  'diffuser-iptv-chromecast-guide': { en: 'chromecast-iptv-streaming-guide', fr: 'diffuser-iptv-chromecast-guide', es: 'guia-streaming-iptv-chromecast', pt: 'guia-streaming-iptv-chromecast-pt' },
  'guia-streaming-iptv-chromecast': { en: 'chromecast-iptv-streaming-guide', fr: 'diffuser-iptv-chromecast-guide', es: 'guia-streaming-iptv-chromecast', pt: 'guia-streaming-iptv-chromecast-pt' },
  'guia-streaming-iptv-chromecast-pt': { en: 'chromecast-iptv-streaming-guide', fr: 'diffuser-iptv-chromecast-guide', es: 'guia-streaming-iptv-chromecast', pt: 'guia-streaming-iptv-chromecast-pt' },
  
  // Buffering Fix Guide
  'iptv-buffering-fix-guide': { en: 'iptv-buffering-fix-guide', fr: 'resoudre-buffering-iptv-guide', es: 'solucionar-buffering-iptv-guia', pt: 'resolver-buffering-iptv-guia' },
  'resoudre-buffering-iptv-guide': { en: 'iptv-buffering-fix-guide', fr: 'resoudre-buffering-iptv-guide', es: 'solucionar-buffering-iptv-guia', pt: 'resolver-buffering-iptv-guia' },
  'solucionar-buffering-iptv-guia': { en: 'iptv-buffering-fix-guide', fr: 'resoudre-buffering-iptv-guide', es: 'solucionar-buffering-iptv-guia', pt: 'resolver-buffering-iptv-guia' },
  'resolver-buffering-iptv-guia': { en: 'iptv-buffering-fix-guide', fr: 'resoudre-buffering-iptv-guide', es: 'solucionar-buffering-iptv-guia', pt: 'resolver-buffering-iptv-guia' },
  
  // M3U Playlist Setup
  'm3u-playlist-setup-guide': { en: 'm3u-playlist-setup-guide', fr: 'configurer-playlist-m3u-guide', es: 'configurar-lista-m3u-guia', pt: 'configurar-lista-m3u-pt' },
  'configurer-playlist-m3u-guide': { en: 'm3u-playlist-setup-guide', fr: 'configurer-playlist-m3u-guide', es: 'configurar-lista-m3u-guia', pt: 'configurar-lista-m3u-pt' },
  'configurar-lista-m3u-guia': { en: 'm3u-playlist-setup-guide', fr: 'configurer-playlist-m3u-guide', es: 'configurar-lista-m3u-guia', pt: 'configurar-lista-m3u-pt' },
  'configurar-lista-m3u-pt': { en: 'm3u-playlist-setup-guide', fr: 'configurer-playlist-m3u-guide', es: 'configurar-lista-m3u-guia', pt: 'configurar-lista-m3u-pt' },
  
  // Xtream Codes Setup
  'xtream-codes-setup-guide': { en: 'xtream-codes-setup-guide', fr: 'configurer-codes-xtream-guide', es: 'configurar-codigos-xtream-guia', pt: 'configurar-codigos-xtream-pt' },
  'configurer-codes-xtream-guide': { en: 'xtream-codes-setup-guide', fr: 'configurer-codes-xtream-guide', es: 'configurar-codigos-xtream-guia', pt: 'configurar-codigos-xtream-pt' },
  'configurar-codigos-xtream-guia': { en: 'xtream-codes-setup-guide', fr: 'configurer-codes-xtream-guide', es: 'configurar-codigos-xtream-guia', pt: 'configurar-codigos-xtream-pt' },
  'configurar-codigos-xtream-pt': { en: 'xtream-codes-setup-guide', fr: 'configurer-codes-xtream-guide', es: 'configurar-codigos-xtream-guia', pt: 'configurar-codigos-xtream-pt' },
};

/**
 * Get the appropriate path for a given language based on the current route
 */
function getPathForLanguage(currentPath: string, currentLang: 'en' | 'fr' | 'es' | 'pt', targetLang: 'en' | 'fr' | 'es' | 'pt'): string {
  // Check if we're on a blog article route
  const blogArticleRegex = /\/(en|fr|es|pt)?\/?(blog\/[^\/]+)$/;
  const match = currentPath.match(blogArticleRegex);
  
  if (match) {
    const slugPart = match[2]; // "blog/some-article-slug"
    const currentSlug = slugPart.split('/')[1]; // "some-article-slug"
    
    // Get the target slug for the target language
    const mapping = blogSlugMapping[currentSlug];
    if (mapping && mapping[targetLang]) {
      const targetSlug = mapping[targetLang];
      
      // Build the path for the target language
      if (targetLang === 'en') {
        return `/blog/${targetSlug}`;
      } else {
        return `/${targetLang}/blog/${targetSlug}`;
      }
    }
  }
  
  // For non-article routes, use the simple language prefix replacement
  let basePath = currentPath;
  if (currentLang !== 'en') {
    basePath = currentPath.replace(`/${currentLang}`, '') || '/';
  }
  
  // If target is English, use the base path without prefix
  if (targetLang === 'en') {
    return basePath === '/' ? '/' : basePath;
  }
  
  // For other languages, add the language prefix
  return basePath === '/' ? `/${targetLang}` : `/${targetLang}${basePath}`;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        variant="ghost" 
        size="sm" 
        className="gap-2 px-2 hover:bg-neutral-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 text-muted-foreground" />
        <span className="uppercase text-muted-foreground font-medium text-sm hidden sm:inline-block">{currentLang}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 py-1 z-50 overflow-hidden"
          >
            {Object.entries(languages).map(([code, { label, flag }]) => {
              const targetLang = code as 'en' | 'fr' | 'es' | 'pt';
              const targetPath = getPathForLanguage(pathname, currentLang, targetLang);
              
              return (
                <Link 
                  key={code} 
                  href={targetPath}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 text-sm hover:bg-neutral-50 transition-colors",
                    currentLang === code ? "font-medium text-primary bg-primary/5" : "text-neutral-600"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base leading-none">{flag}</span>
                    {label}
                  </span>
                  {currentLang === code && <Check className="h-3.5 w-3.5 text-primary" />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
