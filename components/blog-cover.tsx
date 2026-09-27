import React from "react";
import Image from "next/image";
import { Cast, Download, Gauge, KeyRound, ListVideo, Smartphone, Trophy } from "lucide-react";
import { getCover } from "@/lib/blog-covers";
import { cn } from "@/lib/utils";

const ICONS = { Smartphone, Download, Trophy, KeyRound, ListVideo, Cast, Gauge };

interface BlogCoverProps {
  translationGroup: string;
  /** Larger treatment for the featured slot on the blog index. */
  featured?: boolean;
  className?: string;
}

export function BlogCover({ translationGroup, featured = false, className }: BlogCoverProps) {
  const cover = getCover(translationGroup);
  const Icon = ICONS[cover.icon];

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-gradient-to-br",
        cover.gradient,
        className,
      )}
    >
      {/* Soft light source, so flat gradients read as lit surfaces. */}
      <div className="absolute -left-12 -top-16 h-48 w-48 rounded-full bg-white/20 blur-3xl" />

      <Icon
        className={cn(
          "absolute text-white/90 drop-shadow-lg",
          featured ? "left-8 top-8 h-14 w-14" : "left-5 top-5 h-9 w-9",
        )}
        strokeWidth={1.5}
        aria-hidden
      />

      {cover.screenshot && (
        <div
          className={cn(
            "absolute overflow-hidden rounded-xl border border-white/25 shadow-2xl",
            featured
              ? "-bottom-10 right-8 w-40 rotate-6 md:w-48"
              : "-bottom-8 -right-4 w-24 rotate-6",
          )}
        >
          <Image
            src={cover.screenshot}
            alt=""
            width={240}
            height={520}
            className="h-auto w-full"
            aria-hidden
          />
        </div>
      )}
    </div>
  );
}
