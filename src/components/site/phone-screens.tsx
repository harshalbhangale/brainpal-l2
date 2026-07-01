import type { ReactNode } from "react";
import {
  Sun,
  GraduationCap,
  ShoppingBag,
  Leaf,
  Mic,
  Moon,
  Check,
  TrendingUp,
  ScanLine,
  BookOpen,
  Sparkles,
  Star,
  BadgeCheck,
  Target,
  Heart,
} from "lucide-react";
import { BrandLogo } from "@/components/brand/logo";
import { BrainCoin } from "@/components/brand/scenes";
import { Face } from "@/components/brand/face";
import { cn } from "@/lib/utils";

/** Shared phone-screen chrome: status row (logo + time + Oliver). */
function ScreenShell({
  time,
  tint,
  dark,
  children,
}: {
  time: string;
  tint: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full w-full flex-col gap-3 px-4 pb-4 pt-[15%]" style={{ background: tint }}>
      <div className="flex items-center justify-between">
        <BrandLogo size="xs" tone={dark ? "dark" : "light"} />
        <div className="flex items-center gap-2">
          <span className={cn("font-mono text-[11px] font-semibold", dark ? "text-white/60" : "text-ink-3")}>{time}</span>
          <Face seed="Oliver" className="size-7 ring-1 ring-black/5" alt="Oliver" />
        </div>
      </div>
      {children}
    </div>
  );
}

function PalTag({ label, color, dark }: { label: string; color: string; dark?: boolean }) {
  return (
    <span
      className="inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold"
      style={{
        background: dark ? "rgba(255,255,255,0.12)" : `color-mix(in srgb, ${color} 16%, white)`,
        color: dark ? "#fff" : `color-mix(in srgb, ${color} 72%, black)`,
      }}
    >
      <span className="size-1.5 rounded-full" style={{ background: color }} /> {label}
    </span>
  );
}

/* 07:30 — a calm morning home */
export function MorningScreen() {
  return (
    <ScreenShell time="07:30" tint="linear-gradient(180deg,#ffffff,#fff6ea)">
      <div>
        <p className="text-[11px] font-medium text-ink-3">Good morning,</p>
        <p className="font-display text-xl font-bold text-ink">Oliver</p>
      </div>
      <div className="relative overflow-hidden rounded-[1.3rem] p-4 text-white" style={{ backgroundImage: "var(--grad-ink)" }}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Your money</span>
          <TrendingUp className="size-4 text-lime" />
        </div>
        <p className="mt-1 font-display text-3xl font-extrabold tabular-nums" style={{ color: "var(--lime)" }}>$30.00</p>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { t: "Quiz — Science", at: "9:00" },
          { t: "Tutor session", at: "18:00" },
        ].map((r) => (
          <div key={r.t} className="flex items-center gap-2.5 rounded-2xl bg-white p-2.5 shadow-soft ring-1 ring-border">
            <span className="grid size-8 place-items-center rounded-xl bg-tutor-soft text-tutor"><Sun className="size-4" /></span>
            <span className="flex-1 text-[12px] font-bold text-ink">{r.t}</span>
            <span className="font-mono text-[11px] text-ink-3">{r.at}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-2xl bg-ink px-3 py-3 text-center">
        <p className="text-[11px] font-semibold text-white/80">StudyPal is quiet until you ask.</p>
      </div>
    </ScreenShell>
  );
}

/* 08:45 — StudyPal warm-up chat */
export function WalkScreen() {
  return (
    <ScreenShell time="08:45" tint="linear-gradient(180deg,#ffffff,#ece9ff)">
      <div className="flex flex-1 flex-col justify-center gap-3">
        <PalTag label="StudyPal" color="var(--study)" />
        <div className="flex items-end gap-2">
          <span className="grid size-7 shrink-0 place-items-center rounded-full text-white" style={{ background: "var(--study)" }}>
            <GraduationCap className="size-3.5" strokeWidth={2.5} />
          </span>
          <div className="glass rounded-3xl rounded-bl-md px-3.5 py-2.5 text-[12px] leading-snug text-ink shadow-soft">
            Ready for a 5-minute warm-up before the quiz?
          </div>
        </div>
        <div className="rounded-2xl bg-white p-3 shadow-soft ring-1 ring-border">
          <p className="text-[12px] font-bold text-ink">Photosynthesis</p>
          <p className="text-[11px] text-ink-3">5 quick questions · voice-first</p>
          <div className="mt-2.5 flex gap-2">
            <span className="flex-1 rounded-full py-2 text-center text-[12px] font-bold text-white" style={{ background: "var(--study)" }}>Start</span>
            <span className="rounded-full bg-secondary px-3 py-2 text-center text-[12px] font-bold text-ink-2">Not now</span>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

/* 14:15 — scan a product, earn a reward */
export function ScanScreen() {
  return (
    <ScreenShell time="14:15" tint="linear-gradient(180deg,#ffffff,#d6f5e3)">
      <PalTag label="MoneyPal · rewards" color="var(--money)" />
      <div className="relative mt-1 aspect-square overflow-hidden rounded-[1.4rem] bg-ink">
        <div className="absolute inset-3 rounded-2xl border-2 border-white/25" />
        {/* corner brackets */}
        {["left-2 top-2", "right-2 top-2 rotate-90", "right-2 bottom-2 rotate-180", "left-2 bottom-2 -rotate-90"].map((p, i) => (
          <span key={i} className={cn("absolute size-6 border-l-2 border-t-2 border-lime", p)} />
        ))}
        <div className="absolute inset-x-3 top-1/2 h-0.5 animate-pulse bg-lime shadow-[0_0_12px_var(--lime)]" />
        <div className="absolute inset-x-0 bottom-3 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-ink">
            <ScanLine className="size-3.5" /> Scanning…
          </span>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-3 shadow-soft ring-1 ring-border">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-xl bg-money-soft text-money-ink"><Leaf className="size-4" /></span>
          <div className="flex-1">
            <p className="text-[12px] font-bold text-ink">Healthier pick</p>
            <p className="text-[11px] text-ink-3">Muesli bar · less sugar</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-lime-soft px-2 py-1 text-[11px] font-bold text-money-ink">
            <BrainCoin size={12} spin={false} /> +20
          </span>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-center gap-1.5 text-[11px] font-semibold text-money-ink">
        <ShoppingBag className="size-3.5" /> Smart choice rewarded
      </div>
    </ScreenShell>
  );
}

/* 18:00 — TutorPal flashcard + live interview */
export function TutorScreen() {
  return (
    <ScreenShell time="18:00" tint="linear-gradient(180deg,#ffffff,#ffe9d3)">
      <PalTag label="TutorPal" color="var(--tutor)" />
      <div className="rounded-[1.3rem] bg-white p-4 shadow-soft ring-1 ring-border">
        <div className="flex items-center justify-between text-[11px] font-semibold text-ink-3">
          <span className="inline-flex items-center gap-1"><BookOpen className="size-3.5 text-tutor" /> Flashcard 3 / 5</span>
          <span className="font-mono">Science</span>
        </div>
        <p className="mt-3 font-display text-base font-bold leading-snug text-ink">
          What gas do plants release during photosynthesis?
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[60%] rounded-full" style={{ background: "var(--tutor)" }} />
        </div>
        <span className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2 text-[12px] font-bold text-ink" style={{ background: "var(--tutor)" }}>
          Tap to reveal
        </span>
      </div>
      <div className="mt-auto flex items-center gap-2 rounded-2xl bg-ink p-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/15 text-white"><Mic className="size-4" /></span>
        <p className="text-[11px] font-semibold text-white/80">Live interview with TutorPal at 4pm tomorrow</p>
      </div>
    </ScreenShell>
  );
}

/* 19:15 — phones down, BrainPal off */
export function DinnerScreen() {
  return (
    <ScreenShell time="19:15" tint="var(--grad-ink)" dark>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-white/10 text-white/70 ring-1 ring-white/10">
          <Moon className="size-7" />
        </span>
        <div>
          <p className="font-display text-lg font-bold text-white">Family time</p>
          <p className="mt-1 text-[12px] leading-snug text-white/55">
            BrainPal is off for dinner.<br />Nothing to add — back at 8:00.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/80">
          Phones down
        </span>
      </div>
    </ScreenShell>
  );
}

/* 20:00 — goodnight */
export function NightScreen() {
  return (
    <ScreenShell time="20:00" tint="linear-gradient(180deg,#141726,#0b0c0f)" dark>
      <div className="relative flex flex-1 flex-col items-center justify-center gap-4 text-center">
        {[
          "left-6 top-10",
          "right-8 top-16",
          "left-12 bottom-24",
          "right-10 bottom-16",
        ].map((p, i) => (
          <Star key={i} className={cn("absolute size-3 text-lime/70", p)} fill="currentColor" />
        ))}
        <span className="grid size-16 place-items-center rounded-full text-ink" style={{ backgroundImage: "var(--grad-lime)" }}>
          <Sparkles className="size-7" fill="currentColor" />
        </span>
        <div>
          <p className="font-display text-lg font-bold text-white">Goodnight, Oliver</p>
          <p className="mt-1 text-[12px] text-white/55">The day&apos;s done. See you in the morning.</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/70">
          <Check className="size-3.5 text-lime" /> Signed off
        </span>
      </div>
    </ScreenShell>
  );
}

export const DAY_SCREENS = [MorningScreen, WalkScreen, ScanScreen, TutorScreen, DinnerScreen, NightScreen];


/* BrainCircles — the safe, verified feed (no strangers, no ads, no infinite scroll) */
export function CirclesScreen() {
  return (
    <ScreenShell time="16:20" tint="linear-gradient(180deg,#ffffff,#dcf2ff)">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-base font-bold text-ink">Oliver&apos;s Circle</p>
          <p className="text-[11px] text-ink-3">Verified friends &amp; family</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-parent-soft px-2.5 py-1 text-[11px] font-bold text-parent">
          <BadgeCheck className="size-3.5" /> 5 verified
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        {/* goal win */}
        <div className="rounded-2xl bg-white p-2.5 shadow-soft ring-1 ring-border">
          <div className="flex items-center gap-2">
            <Face seed="Mia" className="size-8" alt="Mia" />
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-ink">Mia hit her bike goal</p>
              <p className="text-[10px] text-ink-3">saved $120 · 6 weeks</p>
            </div>
            <span className="grid size-7 place-items-center rounded-lg bg-money-soft text-money-ink"><Target className="size-3.5" /></span>
          </div>
          <div className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-ink-3">
            <Heart className="size-3 text-parent" fill="currentColor" /> Oliver + 3 cheered
          </div>
        </div>

        {/* chore win */}
        <div className="rounded-2xl bg-white p-2.5 shadow-soft ring-1 ring-border">
          <div className="flex items-center gap-2">
            <Face seed="Sam" className="size-8" alt="Sam" />
            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold text-ink">Sam finished 3 chores</p>
              <p className="text-[10px] text-ink-3">this week</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-lime-soft px-2 py-1 text-[10px] font-bold text-money-ink">
              <BrainCoin size={12} spin={false} /> +30
            </span>
          </div>
        </div>

        {/* shared goal */}
        <div className="rounded-2xl bg-white p-2.5 shadow-soft ring-1 ring-border">
          <p className="text-[12px] font-bold text-ink">Footy trip fund</p>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-[60%] rounded-full" style={{ background: "var(--parent)" }} />
          </div>
          <p className="mt-1 text-[10px] text-ink-3">3 friends saving together · 60%</p>
        </div>
      </div>

      <div className="rounded-2xl bg-ink px-3 py-2.5 text-center">
        <p className="text-[11px] font-semibold text-white/80">No strangers. No ads. Nothing to endlessly scroll.</p>
      </div>
    </ScreenShell>
  );
}
