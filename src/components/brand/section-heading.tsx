import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import type { ReactNode } from "react";

export function Kicker({
  children,
  className,
  tone = "brand",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "brand"
          ? "bg-brand-soft text-brand-deep ring-1 ring-brand/15"
          : "bg-white/10 text-white/80 ring-1 ring-white/15",
        className
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-current" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
  kickerTone,
}: {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
  kickerTone?: "brand" | "light";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <Kicker tone={kickerTone ?? (tone === "light" ? "light" : "brand")}>
            {kicker}
          </Kicker>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "max-w-3xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-[3.4rem]",
            tone === "light" ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed",
              tone === "light" ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
