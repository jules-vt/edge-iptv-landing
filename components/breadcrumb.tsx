import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
  lang?: 'en' | 'fr' | 'es' | 'pt';
}

export function Breadcrumb({ items, currentPage, lang = 'en' }: BreadcrumbProps) {
  const homeLabel = lang === 'en' ? 'Home' : lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : 'Início';
  
  // Generate Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": homeLabel,
        "item": items[0]?.href || "https://edge-iptv.app"
      },
      ...items.slice(1).map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://edge-iptv.app${item.href}`
      })),
      {
        "@type": "ListItem",
        "position": items.length + 1,
        "name": currentPage
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index === 0 && <Home className="w-4 h-4" />}
              <Link 
                href={item.href} 
                className="hover:text-primary transition-colors hover:underline"
              >
                {item.label}
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            </li>
          ))}
          <li className="text-foreground font-medium">{currentPage}</li>
        </ol>
      </nav>
    </>
  );
}
