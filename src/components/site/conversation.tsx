"use client";

import { useRef } from "react";
import {
  SendHorizontal,
  Mic,
  Target,
  ListChecks,
  BookOpen,
  Camera,
  CalendarClock,
  Wallet,
  GraduationCap,
  Users,
  ChevronsDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { BrainMark } from "@/components/brand/logo";
import { BrainCoin } from "@/components/brand/scenes";
import { Face } from "@/components/brand/face";
import { DeviceFrame } from "@/components/brand/device-frame";
import { Kicker } from "@/components/brand/section-heading";
import { cn } from "@/lib/utils";

/* ── PALs ─────────────────────────────────────────────────────────────── */
type PalId = "money" | "parent" | "study";
const PAL: Record<PalId, { name: string; role: string; color: string; icon: LucideIcon }> = {
  money: { name: "MoneyPal", role: "Financial coach", color: "var(--money)", icon: Wallet },
  parent: { name: "ParentPal", role: "Family coordinator", color: "var(--parent)", icon: Users },
  study: { name: "StudyPal", role: "Study companion", color: "var(--study)", icon: GraduationCap },
};
const CAST: PalId[] = ["money", "parent", "study"];

function PalCircle({ pal, className }: { pal: PalId; className?: string }) {
  const p = PAL[pal];
  const Icon = p.icon;
  return (
    <span
      className={cn("grid size-7 shrink-0 place-items-center rounded-full text-ink", className)}
      style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${p.color} 80%, white), ${p.color})` }}
    >
      <Icon className="size-[55%]" strokeWidth={2.5} />
    </span>
  );
}

/* ── inline app-component cards (compact, phone-friendly) ─────────────────── */
function GoalCard() {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-soft ring-1 ring-border">
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-lg bg-money-soft text-money-ink"><Target className="size-4" /></span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-bold text-ink">LEGO Star Destroyer</p>
          <p className="text-[10px] text-ink-3">Savings goal · $30 / $45</p>
        </div>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-[66%] rounded-full" style={{ backgroundImage: "var(--grad-lime)" }} />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[10px] text-ink-3">$15 to go</span>
        <span className="rounded-full bg-lime-soft px-2 py-0.5 text-[10px] font-bold text-money-ink">Set goal</span>
      </div>
    </div>
  );
}

function ChoreCard() {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-soft ring-1 ring-border">
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-lg bg-parent-soft text-parent"><ListChecks className="size-4" /></span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-bold text-ink">Organise the garage</p>
          <p className="text-[10px] text-ink-3">This weekend · Oli</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-lime-soft px-2 py-0.5 text-[10px] font-bold text-money-ink">
          <BrainCoin size={11} spin={false} /> +$15
        </span>
      </div>
      <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-secondary px-2 py-1.5 text-[10px] font-semibold text-ink-2">
        <Camera className="size-3 shrink-0 text-parent" /> Verify with a photo when done
      </div>
    </div>
  );
}

function FlashcardCard() {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-soft ring-1 ring-border">
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-lg bg-study-soft text-study"><BookOpen className="size-4" /></span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-bold text-ink">Photosynthesis</p>
          <p className="text-[10px] text-ink-3">On tomorrow&apos;s quiz</p>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-ink-2">5 flashcards</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-ink-2">
          <CalendarClock className="size-3 text-study" /> Live · 4pm
        </span>
      </div>
      <span className="mt-2 flex w-full items-center justify-center rounded-full py-1.5 text-[11px] font-bold text-white" style={{ background: "var(--study)" }}>
        Practise now
      </span>
    </div>
  );
}

/* ── the script ───────────────────────────────────────────────────────── */
type Step =
  | { kind: "user"; who: "Oliver" | "Parent"; text: string }
  | { kind: "pal"; pal: PalId; text: string }
  | { kind: "card"; render: () => ReactNode };

const STEPS: Step[] = [
  { kind: "user", who: "Oliver", text: "Can I buy this LEGO set?" },
  { kind: "pal", pal: "money", text: "That's $45. You've got $30 saved. Want to set a goal for the last $15?" },
  { kind: "card", render: () => <GoalCard /> },
  { kind: "user", who: "Parent", text: "Create a $10 chore for Oli." },
  { kind: "pal", pal: "parent", text: "Done. $15 bonus if you help organise the garage this weekend." },
  { kind: "card", render: () => <ChoreCard /> },
  { kind: "user", who: "Oliver", text: "Also — help me revise science." },
  { kind: "pal", pal: "study", text: "Based on your previous tests, photosynthesis is on tomorrow's quiz. Want flashcards to practise?" },
  { kind: "card", render: () => <FlashcardCard /> },
];

/* ── shared message renderer ──────────────────────────────────────────── */
function Messages({ variant }: { variant: "phone" | "wide" }) {
  const phone = variant === "phone";
  const bubble = phone ? "max-w-[82%] px-3 py-2 text-[12px]" : "max-w-[80%] px-4 py-2.5 text-[15px]";
  const faceSize = phone ? "size-7" : "size-9";
  const indent = phone ? "ml-8" : "ml-9";

  return (
    <>
      {STEPS.map((step, i) => {
        if (step.kind === "user") {
          const isOliver = step.who === "Oliver";
          return (
            <div key={i} className="flex items-end justify-end gap-2">
              <div
                className={cn(
                  "whitespace-pre-wrap rounded-3xl rounded-br-md font-medium leading-snug",
                  bubble,
                  isOliver ? "text-ink" : "bg-ink text-white/95"
                )}
                style={isOliver ? { backgroundImage: "var(--grad-lime)" } : undefined}
              >
                {step.text}
              </div>
              <Face seed={step.who} className={cn("shrink-0 shadow-soft ring-1 ring-border", faceSize)} alt={step.who} />
            </div>
          );
        }
        if (step.kind === "pal") {
          const p = PAL[step.pal];
          return (
            <div key={i} className="flex flex-col gap-1">
              <span
                className={cn("inline-flex w-fit items-center gap-1 rounded-full px-2 py-0.5 font-bold", indent, phone ? "text-[10px]" : "text-[11px]")}
                style={{
                  background: `color-mix(in srgb, ${p.color} 16%, white)`,
                  color: `color-mix(in srgb, ${p.color} 72%, black)`,
                }}
              >
                {p.name} joined
              </span>
              <div className="flex items-end gap-2">
                <PalCircle pal={step.pal} className={phone ? "size-6" : "size-7"} />
                <div className={cn("glass whitespace-pre-wrap rounded-3xl rounded-bl-md leading-snug text-ink shadow-soft", bubble)}>
                  {step.text}
                </div>
              </div>
            </div>
          );
        }
        return (
          <div key={i} className={indent}>
            {step.render()}
          </div>
        );
      })}
    </>
  );
}

/* ── chat chrome ──────────────────────────────────────────────────────── */
function ChatHeader({ phone }: { phone?: boolean }) {
  return (
    <div className={cn("flex items-center justify-between", phone ? "px-4" : "border-b border-border px-5 py-3.5")}>
      <div className="flex items-center gap-2.5">
        <BrainMark className={phone ? "size-7" : "size-8"} />
        <div>
          <p className={cn("font-bold text-ink", phone ? "text-[13px]" : "text-sm")}>Family chat</p>
          <p className={cn("flex items-center gap-1 text-ink-3", phone ? "text-[10px]" : "text-[11px]")}>
            <span className="size-1.5 rounded-full bg-brand" /> PALs on call
          </p>
        </div>
      </div>
      <div className="flex -space-x-1.5">
        {CAST.map((k) => (
          <PalCircle key={k} pal={k} className={cn("ring-2 ring-card", phone ? "size-6" : "size-7")} />
        ))}
      </div>
    </div>
  );
}

function Composer({ phone }: { phone?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2", phone ? "px-3" : "border-t border-border p-3")}>
      <div className={cn("flex flex-1 items-center rounded-full bg-secondary text-ink-3", phone ? "px-3 py-2 text-[11px]" : "px-4 py-2.5 text-sm")}>
        Message BrainPal…
      </div>
      <span className={cn("grid shrink-0 place-items-center rounded-full bg-secondary text-ink-2", phone ? "size-8" : "size-10")}>
        <Mic className={phone ? "size-3.5" : "size-4"} strokeWidth={2.4} />
      </span>
      <span
        className={cn("grid shrink-0 place-items-center rounded-full text-ink shadow-pop", phone ? "size-8" : "size-10")}
        style={{ backgroundImage: "var(--grad-lime)" }}
      >
        <SendHorizontal className={phone ? "size-3.5" : "size-4"} strokeWidth={2.4} />
      </span>
    </div>
  );
}

/* ── section ──────────────────────────────────────────────────────────── */
export function Conversation() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const pin = root.current?.querySelector<HTMLElement>(".conv-pin");
        const track = root.current?.querySelector<HTMLElement>(".chat-track");
        const viewport = root.current?.querySelector<HTMLElement>(".chat-viewport");
        if (!pin || !track || !viewport) return;

        const distance = () => Math.max(0, track.scrollHeight - viewport.clientHeight);
        if (distance() <= 0) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => "+=" + (distance() + window.innerHeight * 0.6),
            pin: true,
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
        tl.fromTo(track, { y: 0 }, { y: () => -distance(), ease: "none", duration: 1 }, 0);
        tl.fromTo(".conv-progress", { scaleX: 0 }, { scaleX: 1, ease: "none", duration: 1 }, 0);
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="conversation" ref={root} className="relative">
      {/* ── Desktop: pinned iPhone with auto-scrolling chat replay ───────── */}
      <div className="hidden lg:block">
        <div className="conv-pin relative flex min-h-screen items-center overflow-hidden py-16">
          <div className="absolute inset-0 -z-10 bg-mesh opacity-40" />
          <div className="container-page grid grid-cols-[1fr_340px] items-center gap-14 xl:gap-20">
            {/* copy */}
            <div className="max-w-lg">
              <Kicker>See it in action</Kicker>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] text-ink xl:text-5xl">
                One conversation.{" "}
                <span className="text-gradient">Everything a kid needs.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">
                Not a chatbot. Not a menu of apps. The PALs call in the right
                specialist the moment it&apos;s needed — starting with money.
              </p>

              <div className="mt-8 flex flex-col gap-2.5">
                {CAST.map((k) => (
                  <div key={k} className="flex items-center gap-3 rounded-2xl bg-card px-3.5 py-2.5 shadow-soft ring-1 ring-border">
                    <PalCircle pal={k} className="size-9" />
                    <div>
                      <p className="text-sm font-bold text-ink">{PAL[k].name}</p>
                      <p className="text-xs text-ink-3">{PAL[k].role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-44 overflow-hidden rounded-full bg-border">
                  <div className="conv-progress h-full origin-left rounded-full" style={{ backgroundImage: "var(--grad-lime)", transform: "scaleX(0)" }} />
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-ink-3">
                  <ChevronsDown className="size-3.5 animate-bounce" /> Scroll to replay
                </span>
              </div>
            </div>

            {/* phone */}
            <div className="relative w-[300px] justify-self-center">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 m-auto size-[340px] rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--lime) 45%, transparent), transparent 70%)" }}
              />
              <DeviceFrame variant="silver">
                <div className="flex h-full w-full flex-col gap-2 bg-gradient-to-b from-white to-lime-soft/40 pb-3 pt-[14%]">
                  <ChatHeader phone />
                  <div className="mx-4 h-px bg-border" />
                  <div className="chat-viewport relative min-h-0 flex-1 overflow-hidden mask-fade-y">
                    <div className="chat-track flex flex-col gap-2.5 px-3 will-change-transform">
                      <div aria-hidden className="h-14 shrink-0" />
                      <Messages variant="phone" />
                      <div aria-hidden className="h-16 shrink-0" />
                    </div>
                  </div>
                  <Composer phone />
                </div>
              </DeviceFrame>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: clean chat card ──────────────────────────────────────── */}
      <div className="py-20 lg:hidden">
        <div className="container-page">
          <div className="flex flex-col items-center gap-4 text-center">
            <Kicker>See it in action</Kicker>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              One conversation. <span className="text-gradient">Everything a kid needs.</span>
            </h2>
            <p className="max-w-md text-ink-2">
              Not a chatbot. Not a menu of apps. The PALs call in the right specialist
              the moment it&apos;s needed — starting with money.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-[2rem] bg-card shadow-soft-lg ring-1 ring-border">
            <ChatHeader />
            <div className="flex flex-col gap-3 bg-gradient-to-b from-lime-soft/40 to-transparent px-4 py-6">
              <Messages variant="wide" />
            </div>
            <Composer />
          </div>
        </div>
      </div>
    </section>
  );
}
