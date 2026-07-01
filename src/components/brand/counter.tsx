"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/** Counts a number up from `from` → `to` when scrolled into view (GSAP). */
export function Counter({
  to,
  from = 0,
  duration = 1.8,
  prefix = "",
  suffix = "",
  decimals = 0,
  locale = true,
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  locale?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const render = (n: number) => {
    const val = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
    if (!locale) return val;
    const num = Number(val);
    return decimals > 0
      ? num.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      : num.toLocaleString();
  };

  useGSAP(
    () => {
      const obj = { v: from };
      gsap.to(obj, {
        v: to,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = `${prefix}${render(obj.v)}${suffix}`;
        },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {`${prefix}${render(from)}${suffix}`}
    </span>
  );
}
