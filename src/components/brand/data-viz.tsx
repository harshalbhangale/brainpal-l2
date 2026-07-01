"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Counter } from "./counter";
import { cn } from "@/lib/utils";

/** Two bars showing cash's collapse as a share of payments (2007 → today). */
export function DeclineBars({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(ref.current?.querySelectorAll("[data-bar]") ?? [], {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      });
    },
    { scope: ref }
  );

  const bars = [
    { label: "2007", pct: 70, tall: "78%", tone: "bg-white/25" },
    { label: "today", pct: 13, tall: "15%", tone: "" },
  ];

  return (
    <div ref={ref} className={cn("flex items-end gap-5", className)}>
      {bars.map((b, i) => (
        <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex h-40 w-full items-end justify-center">
            <div
              data-bar
              className={cn("w-14 rounded-t-xl sm:w-16", b.tone)}
              style={{
                height: b.tall,
                ...(i === 1 ? { backgroundImage: "var(--grad-lime)" } : {}),
              }}
            />
          </div>
          <span className="font-display text-2xl font-extrabold text-white">
            ~<Counter to={b.pct} suffix="%" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-white/50">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

/** A ring gauge that fills to `value`% on scroll, with a count-up in the middle. */
export function Gauge({
  value,
  size = 150,
  color = "var(--study)",
  className,
}: {
  value: number;
  size?: number;
  color?: string;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const r = 54;
  const c = 2 * Math.PI * r;

  useGSAP(
    () => {
      const arc = ref.current?.querySelector("[data-arc]") as SVGCircleElement | null;
      if (!arc) return;
      gsap.fromTo(
        arc,
        { strokeDashoffset: c },
        {
          strokeDashoffset: c * (1 - value / 100),
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div className={cn("relative inline-grid place-items-center", className)} style={{ width: size, height: size }}>
      <svg ref={ref} viewBox="0 0 120 120" className="size-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="var(--border)" strokeWidth="12" />
        <circle
          data-arc
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-3xl font-extrabold text-ink">
          <Counter to={value} suffix="%" />
        </span>
      </div>
    </div>
  );
}
