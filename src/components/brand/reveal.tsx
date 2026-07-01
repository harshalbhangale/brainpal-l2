"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Direction = "up" | "down" | "left" | "right" | "none";

function fromVars(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
}

/** Single element that eases + slides into view on scroll (GSAP + ScrollTrigger). */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 28,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  /** kept for API compatibility; blur is skipped for GSAP performance */
  amount?: number;
  blur?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(ref.current, {
        opacity: 0,
        ...fromVars(direction, distance),
        duration: 0.85,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Container that staggers its <RevealItem> children into view. */
export function RevealStagger({
  children,
  className,
  once = true,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  once?: boolean;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = ref.current?.querySelectorAll<HTMLElement>("[data-reveal-item]");
      if (!items || items.length === 0) return;
      gsap.from(items, {
        opacity: 0,
        y: 26,
        duration: 0.65,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 82%",
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-reveal-item className={className}>
      {children}
    </div>
  );
}
