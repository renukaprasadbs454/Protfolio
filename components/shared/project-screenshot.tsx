"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectScreenshotProps {
  title: string;
  gradient: string;
  accent: string;
  className?: string;
}

export function ProjectScreenshot({
  title,
  gradient,
  accent,
  className,
}: ProjectScreenshotProps) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-lg border border-border/50 bg-background/50",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-60",
          gradient
        )}
      />

      {/* Mock browser chrome */}
      <div className="relative z-10 p-3">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="ml-3 flex-1 h-5 rounded bg-background/40 border border-border/30" />
        </div>

        {/* Mock UI elements */}
        <div className="space-y-2 px-1">
          <div className="flex gap-2">
            <div className="w-1/3 h-16 rounded bg-background/30 border border-border/20" />
            <div className="flex-1 h-16 rounded bg-background/30 border border-border/20" />
          </div>
          <div className="h-8 w-2/3 rounded bg-background/20 border border-border/20" />
          <div className="grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.6 }}
                className="h-10 rounded bg-background/25 border border-border/20"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project title overlay */}
      <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
        <p className={cn("text-xs font-mono truncate", accent)}>{title}</p>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] animate-shimmer pointer-events-none" />
    </div>
  );
}
