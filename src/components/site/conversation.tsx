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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { BrainMark } from "@/components/brand/logo";
import { BrainCoin } from "@/components/brand/scenes";
import { Face } from "@/components/brand/face";
import { SectionHeading } from "@/components/brand/section-heading";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PalId = "money" | "parent" | "study";
const PAL: Record<PalId, { name: string; color: string; icon: LucideIcon; onDark: boolean }> = {
  money: { name: "MoneyPal", color: "var(--money)", icon: Wallet, onDark: false },
  parent: { name: "ParentPal", color: "var(--parent)", icon: Users, onDark: false },
  study: { name: "StudyPal", color: "var(--study)", icon: GraduationCap, onDark: false },
};

function PalCircle({ pal, className }: { pal: PalId; className?: string }) {
  const p = PAL[pal];
  const Icon = p.icon;
  return (
    <span
      className={cn("grid size-7 shrink-0 place-items-center rounded-full", p.onDark ? "text-white" : "text-ink", className)}
      style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${p.color} 80%, white), ${p.color})` }}
    >
      <Icon className="size-3.5" strokeWidth={2.5} />
    </span>
  );
}

/* ── inline app component cards (the upgrade) ─────────────────────────────── */
function CardShell({ children }: { children: ReactNode }) {
  return <div className="ml-9 max-w-[85%] rounded-2xl bg-white p-3.5 shadow-soft ring-1 ring-border">{children}</div>;
}

function GoalCard() {
  return (
    <CardShell>
      <div className="flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-xl bg-money-soft text-money-ink"><Target className="size-[18px]" /></span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-bold text-ink">LEGO Star Destroyer</p>
          <p className="text-[11px] text-ink-3">Savings goal</p>
        </div>
        <span className="font-mono text-[13px] font-bold text-ink">$30 / $45</span>
      </div>
      <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-secondary">
        <div className="h-full w-[66%] rounded-full" style={{ backgroundImage: "var(--grad-lime)" }} />
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="text-[11px] text-ink-3">$15 to go</span>
        <span className="rounded-full bg-lime-soft px-2.5 py-1 text-[11px] font-bold text-money-ink">Set goal · $15</span>
      </div>
    </CardShell>
  );
}

function ChoreCard() {
  return (
    <CardShell>
      <div className="flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-xl bg-parent-soft text-parent"><ListChecks className="size-[18px]" /></span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-bold text-ink">Organise the garage</p>
          <p className="text-[11px] text-ink-3">This weekend · Oli</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-lime-soft px-2 py-1 text-[11px] font-bold text-money-ink">
          <BrainCoin size={12} spin={false} /> +$15
        </span>
      </div>
      <div className="mt-2.5 flex items-center gap-1.5 rounded-xl bg-secondary px-2.5 py-2 text-[11px] font-semibold text-ink-2">
        <Camera className="size-3.5 text-parent" /> Verify with a photo when it&apos;s done
      </div>
    </CardShell>
  );
}

function FlashcardCard() {
  return (
    <CardShell>
      <div className="flex items-center gap-2.5">
        <span className="grid size-9 place-items-center rounded-xl bg-study-soft text-study"><BookOpen className="size-[18px]" /></span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-bold text-ink">Photosynthesis</p>
          <p className="text-[11px] text-ink-3">On tomorrow&apos;s quiz</p>
        </div>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-ink-2">5 flashcards</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-ink-2">
          <CalendarClock className="size-3 text-study" /> Live interview · 4pm
        </span>
      </div>
      <span className="mt-2.5 flex w-full items-center justify-center rounded-full py-2 text-[12px] font-bold text-white" style={{ background: "var(--study)" }}>
        Practise now
      </span>
    </CardShell>
  );
}

/* ── steps ─────────────────────────────────────────────────────────────── */
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
  {
    kind: "pal",
    pal: "study",
    text: "Based on your previous tests, photosynthesis is on tomorrow's quiz. Want flashcards to practise?",
  },
  { kind: "card", render: () => <FlashcardCard /> },
];

export function Conversation() {
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
      if (steps.length === 0) return;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: listRef.current, start: "top 72%", once: true },
      });
      steps.forEach((el, i) => {
        const isCard = el.dataset.kind === "card";
        tl.from(
          el,
          {
            autoAlpha: 0,
            y: 16,
            scale: isCard ? 0.96 : 1,
            duration: 0.5,
            ease: "power2.out",
          },
          i === 0 ? 0 : "+=0.4"
        );
      });
    },
    { scope: listRef }
  );

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          kicker="See it in action"
          title={
            <>
              One conversation.{" "}
              <span className="text-gradient">Everything a kid needs.</span>
            </>
          }
          description="Not a chatbot. Not a menu of apps. The PALs call in the right specialist the moment it's needed — and bring the tools with them."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="overflow-hidden rounded-[2rem] bg-card shadow-soft-lg ring-1 ring-border">
            {/* header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <BrainMark className="size-8" />
                <div>
                  <p className="text-sm font-bold text-ink">Family chat</p>
                  <p className="flex items-center gap-1 text-[11px] text-ink-3">
                    <span className="size-1.5 rounded-full bg-brand" />
                    PALs on call
                  </p>
                </div>
              </div>
              <div className="flex -space-x-2">
                {(["money", "parent", "study"] as PalId[]).map((k) => (
                  <PalCircle key={k} pal={k} className="ring-2 ring-card" />
                ))}
              </div>
            </div>

            {/* messages */}
            <div ref={listRef} className="flex flex-col gap-3.5 bg-gradient-to-b from-lime-soft/40 to-transparent px-4 py-6 sm:px-6">
              {STEPS.map((step, i) => {
                if (step.kind === "user") {
                  const isOliver = step.who === "Oliver";
                  return (
                    <div key={i} data-step data-kind="user" className="flex items-end justify-end gap-2.5">
                      <div
                        className={cn(
                          "max-w-[80%] whitespace-pre-wrap rounded-3xl rounded-br-md px-4 py-2.5 text-sm font-medium leading-snug sm:text-[15px]",
                          isOliver ? "text-ink" : "bg-ink text-white/95"
                        )}
                        style={isOliver ? { backgroundImage: "var(--grad-lime)" } : undefined}
                      >
                        {step.text}
                      </div>
                      <Face seed={step.who} className="size-9 shrink-0 shadow-soft ring-1 ring-border" alt={step.who} />
                    </div>
                  );
                }
                if (step.kind === "pal") {
                  const p = PAL[step.pal];
                  return (
                    <div key={i} data-step data-kind="pal" className="flex flex-col gap-1.5">
                      <span
                        className="ml-9 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold"
                        style={{
                          background: `color-mix(in srgb, ${p.color} 16%, white)`,
                          color: `color-mix(in srgb, ${p.color} 72%, black)`,
                        }}
                      >
                        {p.name} joined
                      </span>
                      <div className="flex items-end gap-2">
                        <PalCircle pal={step.pal} />
                        <div className="glass max-w-[80%] whitespace-pre-wrap rounded-3xl rounded-bl-md px-4 py-2.5 text-sm leading-snug text-ink shadow-soft sm:text-[15px]">
                          {step.text}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={i} data-step data-kind="card">
                    {step.render()}
                  </div>
                );
              })}
            </div>

            {/* composer */}
            <div className="flex items-center gap-2 border-t border-border p-3">
              <div className="flex flex-1 items-center rounded-full bg-secondary px-4 py-2.5 text-sm text-ink-3">
                Message BrainPal…
              </div>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-ink-2">
                <Mic className="size-4" strokeWidth={2.4} />
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full text-ink shadow-pop" style={{ backgroundImage: "var(--grad-lime)" }}>
                <SendHorizontal className="size-4" strokeWidth={2.4} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
