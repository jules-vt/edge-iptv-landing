'use client';

import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  /** Button variant/style */
  variant?: 'primary' | 'secondary' | 'white';
  /** Button size */
  size?: 'md' | 'lg' | 'xl';
  /** Location on page for tracking */
  location: string;
  /** Custom className */
  className?: string;
  /** Button text */
  children?: React.ReactNode;
}

export function DownloadButton({
  variant = 'primary',
  size = 'lg',
  location,
  className = '',
  children = 'Download EDGE IPTV Free'
}: DownloadButtonProps) {
  const handleClick = () => {
    // Track with GA4
    if (typeof window !== 'undefined') {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag('event', 'download_click', {
          event_category: 'engagement',
          event_label: location,
          page_path: window.location.pathname
        });
      }
    }
  };

  const baseClasses = 'inline-flex items-center gap-2 rounded-full font-bold transition-all transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl',
    secondary: 'bg-white text-blue-600 hover:bg-gray-100',
    white: 'bg-white text-blue-600 hover:bg-gray-100'
  };

  const sizeClasses = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const iconSizes = {
    md: 20,
    lg: 24,
    xl: 28
  };

  return (
    <Link
      href="https://j-analytics.cloud/q/Z0m1Qmdtf"
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <Download size={iconSizes[size]} />
      {children}
    </Link>
  );
}
