import Image from "next/image";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// The real logo art is ~1549 x 457 (ratio ≈ 3.39).
const RATIO = 3.39;
const HEIGHTS = { xs: 18, sm: 22, md: 27, lg: 34, xl: 46 } as const;

/** The actual BrainPal logo — colour on light, white on dark. */
export function BrandLogo({
  className,
  size = "md",
  tone = "light",
  priority,
}: {
  className?: string;
  size?: keyof typeof HEIGHTS;
  tone?: "light" | "dark";
  priority?: boolean;
}) {
  const h = HEIGHTS[size];
  const src = tone === "dark" ? "/logo-white.png" : "/logo-mark.png";
  return (
    <Image
      src={src}
      alt="BrainPal"
      width={Math.round(h * RATIO)}
      height={h}
      priority={priority}
      className={cn("w-auto select-none", className)}
    />
  );
}

/**
 * Text wordmark — renders "Brainpal" with the "ai" accented in the brand green,
 * exactly like the logo's AI highlight. On dark surfaces the rest of the word is
 * white (so it stays legible on the black footer) instead of the black raster art.
 * Uses the self-hosted Clash Display face, so it stays crisp at any size.
 */
export function BrandWordmark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex select-none items-baseline font-display font-bold leading-none tracking-tight",
        tone === "dark" ? "text-white" : "text-ink",
        className
      )}
      aria-label="Brainpal"
    >
      <span>Br</span>
      <span
        aria-hidden
        className="bg-clip-text text-transparent"
        style={{ backgroundImage: "var(--grad-green)" }}
      >
        ai
      </span>
      <span>npal</span>
    </span>
  );
}

/** Rounded gradient Sparkles badge — a compact app-icon mark. */
export function BrainMark({
  className,
  gradient = "green",
}: {
  className?: string;
  gradient?: "green" | "lime" | "gold";
}) {
  const grad =
    gradient === "lime" ? "var(--grad-lime)" : gradient === "gold" ? "var(--grad-gold)" : "var(--grad-green)";
  return (
    <span
      className={cn("relative inline-flex shrink-0 items-center justify-center rounded-[30%] text-white", className)}
      style={{
        backgroundImage: grad,
        boxShadow: "0 6px 18px -6px color-mix(in srgb, var(--brand) 70%, transparent)",
      }}
      aria-hidden="true"
    >
      <Sparkles className="size-[56%]" strokeWidth={2.4} fill="currentColor" />
    </span>
  );
}

/** A friendly brain glyph — for decorative "one brain" moments. */
export function BrainGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="brainglyph" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-bright)" />
          <stop offset="0.6" stopColor="var(--brand)" />
          <stop offset="1" stopColor="var(--brand-deep)" />
        </linearGradient>
      </defs>
      <path
        d="M24 6.5c-3.2 0-5.9 1.9-7.2 4.6-3.6.2-6.5 3.2-6.5 6.9 0 .9.2 1.8.5 2.6C8.7 21.9 7 24.3 7 27.1c0 3.1 2.1 5.7 5 6.5.4 3.3 3.2 5.9 6.6 5.9 2.2 0 4.1-1.1 5.4-2.7V6.5Z"
        fill="url(#brainglyph)"
      />
      <path
        d="M24 6.5c3.2 0 5.9 1.9 7.2 4.6 3.6.2 6.5 3.2 6.5 6.9 0 .9-.2 1.8-.5 2.6 2.1 1.3 3.8 3.7 3.8 6.5 0 3.1-2.1 5.7-5 6.5-.4 3.3-3.2 5.9-6.6 5.9-2.2 0-4.1-1.1-5.4-2.7V6.5Z"
        fill="url(#brainglyph)"
        opacity="0.82"
      />
      <path
        d="M24 12v24M18.5 16.5c1.8 0 3.2 1 3.2 3M29.5 16.5c-1.8 0-3.2 1-3.2 3M17 26c2.2 0 3.4 1.2 3.4 3.2M31 26c-2.2 0-3.4 1.2-3.4 3.2"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="2.1" fill="white" />
    </svg>
  );
}

/** Back-compat alias used across the site (maps `invert` → dark tone). */
export function Logo({
  className,
  invert = false,
  size = "md",
}: {
  className?: string;
  invert?: boolean;
  priority?: boolean;
  size?: keyof typeof HEIGHTS;
}) {
  return <BrandLogo className={className} size={size} tone={invert ? "dark" : "light"} />;
}
