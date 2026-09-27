import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogPost, postPath } from '@/lib/blog-posts';
import { BlogCover } from '@/components/blog-cover';
import { formatPostDate } from '@/lib/format-date';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  /** Wide, two-column treatment used for the lead article on the index. */
  featured?: boolean;
}

const CATEGORY_LABELS: Record<string, Record<string, string>> = {
  tutorial: { en: 'Tutorial', fr: 'Tutoriel', es: 'Tutorial', pt: 'Tutorial' },
  guide: { en: 'Guide', fr: 'Guide', es: 'Guía', pt: 'Guia' },
  news: { en: 'News', fr: 'Actualités', es: 'Noticias', pt: 'Notícias' },
  tips: { en: 'Tips', fr: 'Conseils', es: 'Consejos', pt: 'Dicas' },
};

const READ_LABELS: Record<string, string> = {
  en: 'Read the guide',
  fr: 'Lire le guide',
  es: 'Leer la guía',
  pt: 'Ler o guia',
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const category = CATEGORY_LABELS[post.category][post.lang];

  return (
    <Link
      href={postPath(post)}
      className={cn(
        'group flex overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm',
        'transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl',
        featured ? 'flex-col md:flex-row' : 'h-full flex-col',
      )}
    >
      <div
        className={cn(
          'relative shrink-0 overflow-hidden',
          featured ? 'h-56 md:h-auto md:w-[44%]' : 'h-40',
        )}
      >
        <BlogCover
          translationGroup={post.translationGroup}
          featured={featured}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          variant="secondary"
          className="absolute right-4 top-4 bg-white/95 text-foreground shadow-sm backdrop-blur"
        >
          {category}
        </Badge>
      </div>

      <div className={cn('flex flex-1 flex-col p-6', featured && 'md:p-8')}>
        <h3
          className={cn(
            'font-bold tracking-tight transition-colors group-hover:text-primary',
            featured ? 'text-2xl md:text-3xl' : 'text-lg',
          )}
        >
          {post.title}
        </h3>

        <p
          className={cn(
            'mt-3 text-muted-foreground',
            featured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2',
          )}
        >
          {post.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={post.date}>{formatPostDate(post.date, post.lang)}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
          <span className="ml-auto flex items-center gap-1 font-medium text-primary">
            {READ_LABELS[post.lang]}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
