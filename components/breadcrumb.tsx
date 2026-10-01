import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import type { Lang } from '@/lib/i18n';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
  lang?: Lang;
}

export function Breadcrumb({ items, currentPage }: BreadcrumbProps) {
  // Google wants absolute URLs in BreadcrumbList. The first item used to emit
  // a bare "/", and its name came from a four-language ternary that labelled
  // German, Arabic and Italian pages in Portuguese.
  const absolute = (href: string) =>
    href.startsWith('http') ? href : `https://edge-iptv.app${href === '/' ? '' : href}`;

  // Generate Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": items[0]?.label ?? "Home",
        "item": absolute(items[0]?.href ?? "/")
      },
      ...items.slice(1).map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": absolute(item.href)
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
