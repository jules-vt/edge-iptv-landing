/**
 * Cover art per article, keyed by `translationGroup` so all four language
 * versions share one visual automatically.
 *
 * Before this, every card reused the same cropped screenshot: seven articles
 * were visually identical, which gave a reader scanning the index no reason to
 * pick one over another.
 */
export interface BlogCover {
  /** lucide-react icon name, resolved in components/blog-cover.tsx */
  icon: "Smartphone" | "Download" | "Trophy" | "KeyRound" | "ListVideo" | "Cast" | "Gauge";
  /** Tailwind gradient stops. */
  gradient: string;
  /** App screenshot inset, when one genuinely illustrates the topic. */
  screenshot?: string;
}

const DEFAULT_COVER: BlogCover = {
  icon: "Smartphone",
  gradient: "from-slate-600 to-slate-800",
};

const COVERS: Record<string, BlogCover> = {
  "best-iptv-app-iphone": {
    icon: "Smartphone",
    gradient: "from-blue-500 to-indigo-700",
    screenshot: "/images/home-screen.webp",
  },
  "install-guide": {
    icon: "Download",
    gradient: "from-emerald-500 to-teal-700",
    screenshot: "/images/language-selection.webp",
  },
  "best-player-ios": {
    icon: "Trophy",
    gradient: "from-amber-500 to-orange-700",
    screenshot: "/images/series-screen.webp",
  },
  "xtream-setup": {
    icon: "KeyRound",
    gradient: "from-violet-500 to-purple-800",
    screenshot: "/images/home-screen.webp",
  },
  "m3u-setup": {
    icon: "ListVideo",
    gradient: "from-sky-500 to-blue-800",
    screenshot: "/images/epg-screen.webp",
  },
  chromecast: {
    icon: "Cast",
    gradient: "from-rose-500 to-pink-800",
    screenshot: "/images/movie-details.webp",
  },
  "buffering-fix": {
    icon: "Gauge",
    gradient: "from-cyan-500 to-sky-800",
    screenshot: "/images/downloads-screen.webp",
  },
};

export function getCover(translationGroup: string): BlogCover {
  return COVERS[translationGroup] ?? DEFAULT_COVER;
}
