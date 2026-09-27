"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { getTranslations, postPath } from "@/lib/blog-posts"
import { type Lang, LANGS, LOCALES, homePath } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLang: Lang
}

/** Language home, used whenever an article has no version in the target language. */
const languageHome = homePath

/**
 * Resolve the equivalent path in another language.
 *
 * Translated articles are looked up through `lib/blog-posts` — the single
 * source of truth. A duplicated mapping table used to live here and had
 * drifted out of sync, sending readers to URLs that did not exist.
 */
function getPathForLanguage(currentPath: string, currentLang: Lang, targetLang: Lang): string {
  // Strip the language prefix and any trailing slash to get the bare route.
  const withoutLang =
    currentLang === 'en'
      ? currentPath
      : currentPath.replace(new RegExp(`^/${currentLang}(?=/|$)`), '')
  const route = withoutLang.replace(/\/$/, '') || '/'

  if (route === '/') return languageHome(targetLang)

  // Translated content: blog articles (/blog/<slug>) and the install guide
  // (/<slug> at the root). Both live in blogPosts, keyed by translationGroup.
  const slug = route.startsWith('/blog/')
    ? route.slice('/blog/'.length)
    : route.slice(1)

  if (slug && !slug.includes('/')) {
    const translations = getTranslations(slug, currentLang)
    const target = translations[targetLang]
    if (target) return postPath(target)

    // Known article with no version in that language — the language home is a
    // dead end but an honest one; a guessed URL would 404.
    if (translations[currentLang]) return languageHome(targetLang)
  }

  // Everything else (privacy-policy, terms-of-use, /blog index) keeps its slug.
  return targetLang === 'en' ? route : `/${targetLang}${route}`
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
            className="absolute right-0 top-full mt-2 max-h-80 w-48 overflow-y-auto rounded-xl border border-neutral-200 bg-white py-1 shadow-lg z-50"
          >
            {LANGS.map((targetLang) => {
              const { label, flag } = LOCALES[targetLang];
              const code = targetLang;
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
