import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GetEarlyAccess({
  className,
  size = "md",
  children = "Get Early Access",
  href = "/#get-started",
  showArrow = true,
}: {
  className?: string;
  size?: "md" | "lg";
  children?: ReactNode;
  href?: string;
  showArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "sheen group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-bold text-ink shadow-pop transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime-2/40",
        size === "lg" ? "h-14 px-8 text-base" : "h-12 px-6 text-sm sm:text-base",
        className
      )}
      style={{ backgroundImage: "var(--grad-lime)" }}
    >
      {/* moving shine */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      {showArrow && (
        <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function SecondaryCta({
  className,
  size = "md",
  children,
  href = "#pals",
}: {
  className?: string;
  size?: "md" | "lg";
  children: ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand-deep focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20",
        size === "lg" ? "h-14 px-8 text-base" : "h-12 px-6 text-sm sm:text-base",
        className
      )}
    >
      {children}
    </Link>
  );
}
