"use client";

/**
 * Bespoke animated illustrations (SVG + anime.js v4) in the real BrainPal style:
 * rounded forms, 6px ink hairlines, soft pastel fills on a tinted disc (Stage),
 * gentle looping motion. Mirrors /brainpal/apps/web/src/pay/onboard/illustrations.
 */
import { useEffect, useRef, type ReactNode } from "react";
import { animate, stagger, createScope } from "animejs";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const INK = "#0b0c0f";

/** Scope anime.js animations to a root ref and revert on unmount. */
function useScene(setup: () => void) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!root.current) return;
    const scope = createScope({ root }).add(setup);
    return () => scope.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return root;
}

/** The soft tinted disc every scene sits on. */
function Stage({
  hue,
  size = 240,
  children,
  className,
  rootRef,
}: {
  hue: number;
  size?: number;
  children: ReactNode;
  className?: string;
  rootRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={rootRef}
      className={cn("relative grid place-items-center", className)}
      style={{ width: size, height: size }}
    >
      <div
        className="stage-disc absolute rounded-[42%]"
        style={{
          width: size * 0.9,
          height: size * 0.9,
          background: `radial-gradient(circle at 50% 38%, hsl(${hue} 90% 90%), hsl(${hue} 78% 82%))`,
        }}
      />
      <svg width={size} height={size} viewBox="0 0 240 240" className="relative">
        {children}
      </svg>
    </div>
  );
}

/* ── Save: a jar that fills + a coin arcing in ─────────────────────────────── */
export function SaveScene({ size = 240 }: { size?: number }) {
  const hue = 82;
  const root = useScene(() => {
    animate(".stage-disc", { scale: [1, 1.03], duration: 4000, ease: "inOutSine", loop: true, alternate: true });
    animate(".jar-fill", { scaleY: [0, 1], duration: 1500, ease: "inOutQuad", loop: true, alternate: true, loopDelay: 700 });
    animate(".coin", {
      translateX: [-46, 0],
      translateY: [-34, 66],
      opacity: [{ to: 1, duration: 200 }, { to: 0, duration: 300, delay: 900 }],
      duration: 1300,
      ease: "inQuad",
      loop: true,
      loopDelay: 900,
    });
    animate(".spark", { scale: [0, 1.2, 0], opacity: [0, 1, 0], duration: 1600, delay: stagger(400), loop: true });
  });
  return (
    <Stage hue={hue} size={size} rootRef={root}>
      <rect x="78" y="96" width="84" height="96" rx="26" fill="#fff" stroke={INK} strokeWidth="6" />
      <rect x="92" y="82" width="56" height="18" rx="9" fill="#fff" stroke={INK} strokeWidth="6" />
      <clipPath id="jarClip"><rect x="82" y="100" width="76" height="88" rx="22" /></clipPath>
      <g clipPath="url(#jarClip)">
        <rect className="jar-fill" x="82" y="118" width="76" height="72" fill={`hsl(${hue} 80% 58%)`} style={{ transformBox: "fill-box", transformOrigin: "bottom" }} />
      </g>
      <g className="coin" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx="120" cy="60" r="18" fill="#ffd976" stroke={INK} strokeWidth="5" />
        <text x="120" y="67" textAnchor="middle" fontSize="20" fontWeight="800" fill={INK}>$</text>
      </g>
      {[[60, 150], [176, 122], [168, 176]].map(([x, y], i) => (
        <circle key={i} className="spark" cx={x} cy={y} r="4" fill={`hsl(${hue} 90% 52%)`} style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      ))}
    </Stage>
  );
}

/* ── Learn: a flashcard with a lightbulb spark ─────────────────────────────── */
export function LearnScene({ size = 240 }: { size?: number }) {
  const hue = 262;
  const root = useScene(() => {
    animate(".stage-disc", { scale: [1, 1.03], duration: 4000, ease: "inOutSine", loop: true, alternate: true });
    animate(".card", { rotate: [-3, 3], duration: 5000, ease: "inOutSine", loop: true, alternate: true });
    animate(".bulb", { translateY: [0, -8], duration: 2600, ease: "inOutSine", loop: true, alternate: true });
    animate(".ray", { opacity: [0.2, 1], scale: [0.9, 1.1], duration: 1400, delay: stagger(120), loop: true, alternate: true });
  });
  return (
    <Stage hue={hue} size={size} rootRef={root}>
      <g className="card" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <rect x="66" y="104" width="108" height="80" rx="18" fill="#fff" stroke={INK} strokeWidth="6" />
        <line x1="82" y1="130" x2="158" y2="130" stroke={`hsl(${hue} 60% 70%)`} strokeWidth="6" strokeLinecap="round" />
        <line x1="82" y1="148" x2="140" y2="148" stroke={`hsl(${hue} 60% 82%)`} strokeWidth="6" strokeLinecap="round" />
        <line x1="82" y1="166" x2="150" y2="166" stroke={`hsl(${hue} 60% 82%)`} strokeWidth="6" strokeLinecap="round" />
      </g>
      <g className="bulb">
        <circle cx="120" cy="62" r="24" fill="#ffd976" stroke={INK} strokeWidth="6" />
        <rect x="111" y="82" width="18" height="12" rx="4" fill="#fff" stroke={INK} strokeWidth="5" />
        {[0, 60, 120, 180, 240, 300].map((a, i) => {
          const r = (a * Math.PI) / 180;
          return (
            <line
              key={i}
              className="ray"
              x1={120 + Math.cos(r) * 30}
              y1={62 + Math.sin(r) * 30}
              x2={120 + Math.cos(r) * 40}
              y2={62 + Math.sin(r) * 40}
              stroke="#f0a032"
              strokeWidth="5"
              strokeLinecap="round"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
          );
        })}
      </g>
    </Stage>
  );
}

/* ── Shield: a safety shield with a check drawing in + safe rings ──────────── */
export function ShieldScene({ size = 240 }: { size?: number }) {
  const hue = 205;
  const root = useScene(() => {
    animate(".stage-disc", { scale: [1, 1.03], duration: 4000, ease: "inOutSine", loop: true, alternate: true });
    animate(".shield", { translateY: [0, -5], duration: 3000, ease: "inOutSine", loop: true, alternate: true });
    animate(".ring", { scale: [0.8, 1.7], opacity: [0.45, 0], duration: 2400, delay: stagger(1200), loop: true, ease: "outSine" });
    animate(".check", { strokeDashoffset: [1, 0], duration: 800, delay: 400, ease: "inOutQuad", loop: true, loopDelay: 1800, alternate: false });
  });
  return (
    <Stage hue={hue} size={size} rootRef={root}>
      {[0, 1].map((i) => (
        <circle key={i} className="ring" cx="120" cy="116" r="44" fill="none" stroke={`hsl(${hue} 80% 55%)`} strokeWidth="4" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      ))}
      <path className="shield" d="M120 64 L166 82 V120 C166 150 146 166 120 176 C94 166 74 150 74 120 V82 Z" fill={`hsl(${hue} 85% 66%)`} stroke={INK} strokeWidth="6" strokeLinejoin="round" />
      <path className="check" d="M100 118 L114 132 L142 100" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1} />
    </Stage>
  );
}

/* ── Family: friendly dots connected around a home ─────────────────────────── */
export function FamilyScene({ size = 240 }: { size?: number }) {
  const hue = 152;
  const dots = [[120, 78, 248], [82, 150, 96], [158, 150, 200], [120, 128, 40]] as const;
  const root = useScene(() => {
    animate(".stage-disc", { scale: [1, 1.03], duration: 4000, ease: "inOutSine", loop: true, alternate: true });
    animate(".link", { strokeDashoffset: [1, 0], duration: 1100, ease: "inOutQuad" });
    animate(".fdot", { scale: [0, 1], duration: 500, delay: stagger(140, { start: 300 }), ease: "outBack" });
    animate(".fdot", { translateY: [0, -6], duration: 3000, delay: stagger(300), ease: "inOutSine", loop: true, alternate: true });
  });
  return (
    <Stage hue={hue} size={size} rootRef={root}>
      <path className="link" d="M120 86 L86 142 M120 86 L154 142 M90 150 L150 150" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1} />
      {dots.map(([x, y, h], i) => (
        <g key={i} className="fdot" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx={x} cy={y} r="22" fill={`hsl(${h} 82% 72%)`} stroke={INK} strokeWidth="6" />
        </g>
      ))}
    </Stage>
  );
}

/* ── Growth: rising bars + a compounding coin ─────────────────────────────── */
export function GrowthScene({ size = 240 }: { size?: number }) {
  const hue = 96;
  const bars = [
    { x: 58, h: 40 },
    { x: 96, h: 66 },
    { x: 134, h: 96 },
    { x: 172, h: 130 },
  ];
  const root = useScene(() => {
    animate(".stage-disc", { scale: [1, 1.03], duration: 4000, ease: "inOutSine", loop: true, alternate: true });
    animate(".bar", { scaleY: [0, 1], duration: 900, delay: stagger(140, { start: 200 }), ease: "outBack", loop: true, alternate: true, loopDelay: 1400 });
    animate(".gcoin", { translateY: [4, -8], rotate: [-6, 6], duration: 2200, ease: "inOutSine", loop: true, alternate: true });
    animate(".gspark", { scale: [0, 1.3, 0], opacity: [0, 1, 0], duration: 1500, delay: stagger(300), loop: true });
  });
  return (
    <Stage hue={hue} size={size} rootRef={root}>
      <line x1="42" y1="188" x2="198" y2="188" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      {bars.map((b, i) => (
        <rect
          key={i}
          className="bar"
          x={b.x}
          y={188 - b.h}
          width="26"
          height={b.h}
          rx="9"
          fill={i === bars.length - 1 ? "#b4ec2a" : `hsl(${hue} 78% ${64 - i * 4}%)`}
          stroke={INK}
          strokeWidth="5"
          style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        />
      ))}
      <g className="gcoin" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx="185" cy="52" r="20" fill="#ffd976" stroke={INK} strokeWidth="5" />
        <text x="185" y="60" textAnchor="middle" fontSize="22" fontWeight="800" fill={INK}>$</text>
      </g>
      {[[70, 70], [120, 54], [150, 92]].map(([x, y], i) => (
        <circle key={i} className="gspark" cx={x} cy={y} r="3.5" fill="#0f9d58" style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      ))}
    </Stage>
  );
}

/* ── BrainCoin: the reward currency mark (gold coin + brain glyph). ────────── */
export function BrainCoin({ size = 64, className, spin = true }: { size?: number; className?: string; spin?: boolean }) {
  const root = useScene(() => {
    if (spin) animate(".bcoin", { rotateY: [0, 360], duration: 4200, ease: "inOutSine", loop: true, loopDelay: 1400 });
    animate(".bcoin-wrap", { translateY: [0, -6], duration: 3000, ease: "inOutSine", loop: true, alternate: true });
  });
  return (
    <div ref={root} className={cn("inline-grid place-items-center", className)} style={{ width: size, height: size, perspective: 400 }}>
      <div className="bcoin-wrap">
        <svg className="bcoin" width={size} height={size} viewBox="0 0 32 32" style={{ transformStyle: "preserve-3d" }} aria-hidden="true">
          <defs>
            <linearGradient id="bcoin-grad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFD976" />
              <stop offset="1" stopColor="#F0A032" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="16" r="15" fill="url(#bcoin-grad)" />
          <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
          <g fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 10.4c-1-1.1-3-.9-3.7.4-1.6-.4-3 1-2.5 2.6-1.3.5-1.4 2.4-.2 3.1-.5 1.5.8 3 2.4 2.8.4 1 1.7 1.4 2.6.7" />
            <path d="M16 10.4c1-1.1 3-.9 3.7.4 1.6-.4 3 1 2.5 2.6 1.3.5 1.4 2.4.2 3.1.5 1.5-.8 3-2.4 2.8-.4 1-1.7 1.4-2.6.7" />
            <path d="M16 10.2v11" />
          </g>
        </svg>
      </div>
    </div>
  );
}


/* ── Loop diagram: 3 nodes on a flowing ring, endlessly cycling. ──────────── */
export function LoopDiagram({
  nodes,
  className,
}: {
  nodes: { label: string; Icon: LucideIcon; color: string; onDark?: boolean }[];
  className?: string;
}) {
  const root = useScene(() => {
    animate(".loop-orbit", { rotate: 360, duration: 9000, ease: "linear", loop: true });
    animate(".loop-flow", { strokeDashoffset: [0, -36], duration: 1400, ease: "linear", loop: true });
    animate(".loop-node", {
      scale: [0.94, 1.04],
      duration: 2400,
      ease: "inOutSine",
      loop: true,
      alternate: true,
      delay: stagger(320),
    });
    animate(".loop-center", { scale: [1, 1.06], duration: 3000, ease: "inOutSine", loop: true, alternate: true });
  });

  // 3 nodes at -90°, 30°, 150° on a radius of 40% of the box.
  const R = 40;
  const angles = [-90, 30, 150];
  const pos = angles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return { x: 50 + R * Math.cos(rad), y: 50 + R * Math.sin(rad) };
  });

  return (
    <div ref={root} className={cn("relative mx-auto aspect-square w-full max-w-[380px]", className)}>
      {/* flowing ring */}
      <svg viewBox="0 0 320 320" className="absolute inset-0 size-full">
        <circle cx="160" cy="160" r="120" fill="none" stroke="var(--border)" strokeWidth="2" />
        <circle
          className="loop-flow"
          cx="160"
          cy="160"
          r="120"
          fill="none"
          stroke="var(--brand)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="4 16"
        />
      </svg>

      {/* orbiting reward token */}
      <div className="loop-orbit absolute inset-0">
        <span
          className="absolute left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-ink shadow-pop"
          style={{ top: "12.5%", backgroundImage: "var(--grad-gold)" }}
        >
          <BrainCoin size={22} spin={false} />
        </span>
      </div>

      {/* nodes */}
      {nodes.slice(0, 3).map((n, i) => (
        <div
          key={n.label}
          className="loop-node absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%` }}
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className={cn("grid size-16 place-items-center rounded-2xl shadow-lg", n.onDark ? "text-white" : "text-ink")}
              style={{ background: `linear-gradient(145deg, color-mix(in srgb, ${n.color} 82%, white), ${n.color})` }}
            >
              <n.Icon className="size-7" strokeWidth={2.2} />
            </span>
            <span className="rounded-full bg-card px-2.5 py-1 text-[11px] font-bold text-ink shadow-soft ring-1 ring-border">
              {n.label}
            </span>
          </div>
        </div>
      ))}

      {/* center */}
      <div className="loop-center absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-full bg-ink px-5 py-4 text-center shadow-soft-lg">
        <span className="font-display text-sm font-bold text-white">On repeat</span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-lime">every day</span>
      </div>
    </div>
  );
}
