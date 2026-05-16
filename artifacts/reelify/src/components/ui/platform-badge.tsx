import { cn } from "@/lib/utils";

const PLATFORM_CONFIG: Record<string, { label: string; color: string; icon: string }> = {
  tiktok: { label: "TikTok", color: "bg-zinc-900 text-white border-zinc-700", icon: "♪" },
  youtube_shorts: { label: "YT Shorts", color: "bg-red-900/40 text-red-300 border-red-800", icon: "▶" },
  instagram_reels: { label: "Reels", color: "bg-pink-900/40 text-pink-300 border-pink-800", icon: "◈" },
  youtube: { label: "YouTube", color: "bg-red-900/40 text-red-300 border-red-800", icon: "▶" },
};

export function PlatformBadge({ platform, className }: { platform: string; className?: string }) {
  const config = PLATFORM_CONFIG[platform] ?? { label: platform, color: "bg-muted text-muted-foreground border-border", icon: "●" };
  return (
    <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border", config.color, className)}>
      <span>{config.icon}</span>
      {config.label}
    </span>
  );
}

export { PLATFORM_CONFIG };
