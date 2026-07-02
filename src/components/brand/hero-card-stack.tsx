"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Nfc } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A single BrainPal hero card design. The artwork (`src`) is a full-bleed
 * Visa face lifted straight from the app's card skins — we only overlay the
 * BrainPal wordmark, balance, chip and last-4 on top with a legibility scrim.
 */
type HeroCard = {
  id: string;
  name: string;
  src: string;
  /** brand colourway used for the ambient glow behind the deck */
  glow: string;
};

const HERO_CARDS: HeroCard[] = [
  { id: "cap", name: "Captain", src: "/cards/cap.jpg", glow: "linear-gradient(135deg,#2563eb,#b91c1c)" },
  { id: "iron", name: "Iron", src: "/cards/iron.jpg", glow: "linear-gradient(135deg,#dc2626,#f59e0b)" },
  { id: "hulk", name: "Hulk", src: "/cards/hulk.jpg", glow: "linear-gradient(135deg,#4d7c0f,#6b21a8)" },
];

const BALANCE = "$30.00";
const LAST4 = "4921";
const CYCLE_MS = 2800;

/** Depth-based transform: 0 = front, then the deck recedes up + fans out. */
function depthStyle(depth: number): React.CSSProperties {
  const steps = [
    { y: 0, scale: 1, rotate: 0, opacity: 1, z: 30 },
    { y: -10, scale: 0.945, rotate: -3.5, opacity: 0.85, z: 20 },
    { y: -19, scale: 0.89, rotate: 3.5, opacity: 0.6, z: 10 },
  ];
  const s = steps[Math.min(depth, steps.length - 1)];
  return {
    transform: `translate3d(0, ${s.y}px, 0) scale(${s.scale}) rotate(${s.rotate}deg)`,
    opacity: depth >= steps.length ? 0 : s.opacity,
    zIndex: s.z,
  };
}

/**
 * HeroCardStack — the animated "collect them all" card deck shown inside
 * Oliver's phone. Auto-cycles through the real hero card artworks so the
 * front card reshuffles to the back every few seconds. Presentational only.
 */
export function HeroCardStack({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const n = HERO_CARDS.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    timer.current = setInterval(() => setActive((i) => (i + 1) % n), CYCLE_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [n]);

  return (
    <div className={cn("relative w-full select-none", className)}>
      {/* ambient glow, tinted to the active card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-2 -top-1 bottom-3 -z-10 rounded-[1.6rem] blur-2xl transition-[background] duration-700"
        style={{ backgroundImage: HERO_CARDS[active].glow, opacity: 0.5 }}
      />

      {/* the deck */}
      <div className="relative mx-auto aspect-[1.586] w-full">
        {HERO_CARDS.map((card, i) => {
          const depth = (i - active + n) % n;
          const isFront = depth === 0;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${card.name} card`}
              aria-hidden={!isFront}
              tabIndex={isFront ? 0 : -1}
              className="absolute inset-0 origin-bottom rounded-2xl outline-none transition-[transform,opacity] duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)] focus-visible:ring-2 focus-visible:ring-lime"
              style={depthStyle(depth)}
            >
              <span className="relative block h-full w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15">
                <Image
                  src={card.src}
                  alt={`BrainPal ${card.name} card`}
                  fill
                  sizes="(max-width: 640px) 60vw, 260px"
                  className="object-cover"
                  priority={i === 0}
                />

                {/* legibility scrims — kept to the top & bottom so the hero art stays clear */}
                <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/55 to-transparent" />
                <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent" />
                <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />

                {/* top: BrainPal wordmark + balance */}
                <span className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
                  <span className="flex flex-col gap-0.5">
                    <Image src="/brainpal_logo.svg" alt="" width={84} height={24} className="h-[16px] w-auto drop-shadow" />
                    <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-white/75 drop-shadow">
                      {card.name} Edition
                    </span>
                  </span>
                  <span className="font-mono text-[13px] font-bold tracking-tight text-white drop-shadow">
                    {BALANCE}
                  </span>
                </span>

                {/* bottom: chip + last-4 · VISA */}
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
                  <span className="flex items-center gap-2">
                    <span
                      className="h-5 w-7 rounded-[4px]"
                      style={{
                        backgroundImage: "linear-gradient(135deg,#f4f7fb,#9aa3af)",
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.25)",
                      }}
                    />
                    <Nfc className="size-3.5 rotate-90 text-white/85 drop-shadow" />
                    <span className="ml-1 font-mono text-[11px] font-bold tracking-[0.16em] text-white drop-shadow">
                      ••••&nbsp;{LAST4}
                    </span>
                  </span>
                  <span className="text-base font-black italic leading-none tracking-tight text-white drop-shadow">
                    VISA
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* pagination dots */}
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {HERO_CARDS.map((card, i) => (
          <span
            key={card.id}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === active ? "w-4 bg-lime" : "w-1.5 bg-ink/15"
            )}
          />
        ))}
      </div>
    </div>
  );
}
