import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '@/lib/blog-posts';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const categoryLabels = {
    tutorial: post.lang === 'en' ? 'Tutorial' : 'Tutoriel',
    guide: 'Guide',
    news: post.lang === 'en' ? 'News' : 'Actualités',
    tips: post.lang === 'en' ? 'Tips' : 'Conseils'
  };

  const blogPath = post.lang === 'en' ? '/blog' : '/fr/blog';

  return (
    <Link href={`${blogPath}/${post.slug}`} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-border/50">
        <CardHeader className="p-0">
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                {categoryLabels[post.category]}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <CardDescription className="text-base mb-4 line-clamp-3">
            {post.description}
          </CardDescription>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(post.lang === 'en' ? 'en-US' : 'fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
