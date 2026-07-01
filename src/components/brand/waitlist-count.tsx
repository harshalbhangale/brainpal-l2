"use client";

import { useEffect, useState } from "react";
import { Counter } from "./counter";

const BASE = Number(process.env.NEXT_PUBLIC_WAITLIST_BASE ?? 2400);

/** Shows the live "families joined" count from the DB, animated with GSAP. */
export function WaitlistCount({
  className,
  suffix = "+",
}: {
  className?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(BASE);

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

  // Remount when the value arrives so the counter animates to the live number.
  return <Counter key={count} to={count} suffix={suffix} className={className} />;
}
