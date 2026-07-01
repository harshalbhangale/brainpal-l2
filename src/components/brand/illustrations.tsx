import { cn } from "@/lib/utils";

/** Soft blurred gradient orb for section backgrounds. */
export function Orb({
  className,
  color = "var(--brand)",
  opacity = 0.35,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
      style={{
        background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
        opacity,
      }}
    />
  );
}
