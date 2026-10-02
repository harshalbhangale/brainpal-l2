"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Counter } from "./counter";

/** Only show social proof once the real number is big enough to mean something. */
const MIN_TO_SHOW = 50;

/**
 * Renders `children` (a sentence containing <WaitlistCount />) only when the
 * real signup count from the DB is at least MIN_TO_SHOW. Nothing is shown
 * while loading or if the count is low — we never display an invented number.
 */
export function WaitlistProof({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const count = useWaitlistCount();
  if (count === null || count < MIN_TO_SHOW) return null;
  return <div className={className}>{children}</div>;
}

export function useWaitlistCount() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    let alive = true;
    fetch("/api/waitlist")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive && typeof d?.count === "number") setCount(d.count);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
  return count;
}

/** The live signup count, animated with GSAP. Use inside <WaitlistProof>. */
export function WaitlistCount({
  className,
  suffix = "",
}: {
  className?: string;
  suffix?: string;
}) {
  const count = useWaitlistCount();
  if (count === null) return null;
  return <Counter key={count} to={count} suffix={suffix} className={className} />;
}
