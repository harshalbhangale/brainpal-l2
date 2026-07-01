"use client";

import { useRef } from "react";
import { Bell, Check, X, BookOpen, Lock, ShieldCheck } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

/** An iOS-style lock screen where the purchase-approval notification arrives. */
export function ApprovalDemo() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 78%", once: true } });
      tl.from(".appr-banner", { y: -36, autoAlpha: 0, duration: 0.7, ease: "back.out(1.5)" })
        .from(".appr-detail", { autoAlpha: 0, y: 10, duration: 0.4 }, "-=0.2")
        .from(".appr-btn", { autoAlpha: 0, y: 8, scale: 0.95, duration: 0.4, stagger: 0.1 }, "-=0.15")
        .from(".appr-kitchen", { autoAlpha: 0, y: 12, duration: 0.5, ease: "back.out(1.6)" }, "+=0.2");
    },
    { scope: root }
  );

  return (
    <div ref={root} className="relative mx-auto w-full max-w-sm">
      {/* lock screen */}
      <div
        className="relative overflow-hidden rounded-[2.5rem] p-6 pb-8 shadow-soft-lg ring-1 ring-black/10"
        style={{ backgroundImage: "linear-gradient(160deg, #143024, #0b0c0f 70%)", aspectRatio: "0.62" }}
      >
        <div className="absolute inset-0 bg-mesh opacity-30" />
        {/* time */}
        <div className="relative mt-4 text-center text-white">
          <div className="mx-auto mb-4 grid size-9 place-items-center rounded-full bg-white/10">
            <Lock className="size-4" />
          </div>
          <p className="font-display text-6xl font-extrabold tabular-nums tracking-tight">6:32</p>
          <p className="mt-1 text-sm font-medium text-white/60">Thursday 12 June</p>
        </div>

        {/* notification banner */}
        <div className="appr-banner glass relative mt-10 rounded-3xl p-4 shadow-soft-lg">
          <div className="flex items-center gap-2 text-xs font-semibold text-ink-2">
            <span className="grid size-5 place-items-center rounded-md text-white" style={{ backgroundImage: "var(--grad-green)" }}>
              <Bell className="size-3" />
            </span>
            BrainPal
            <span className="ml-auto text-ink-3">now</span>
          </div>
          <p className="appr-detail mt-2 text-[15px] font-bold text-ink">Approve Oliver&apos;s purchase?</p>
          <div className="appr-detail mt-2.5 flex items-center justify-between rounded-2xl bg-white/70 p-2.5 ring-1 ring-border">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-study-soft text-study"><BookOpen className="size-4" /></span>
              <div>
                <p className="text-[13px] font-bold text-ink">The Book Store</p>
                <p className="text-[11px] text-ink-3">Science revision set</p>
              </div>
            </div>
            <span className="font-mono text-sm font-bold text-ink">$12</span>
          </div>
          <div className="mt-3 flex gap-2.5">
            <button className="appr-btn animate-pulse-ring flex flex-1 items-center justify-center gap-1.5 rounded-full py-2.5 text-sm font-bold text-ink" style={{ backgroundImage: "var(--grad-lime)" }}>
              <Check className="size-4" strokeWidth={3} /> Approve
            </button>
            <button className="appr-btn flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white/70 py-2.5 text-sm font-bold text-ink-2 ring-1 ring-border">
              <X className="size-4" /> Not now
            </button>
          </div>
        </div>
      </div>

      {/* from the kitchen chip */}
      <div className="appr-kitchen absolute -bottom-4 -right-3 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-soft-lg ring-1 ring-border">
        <span className="grid size-7 place-items-center rounded-full bg-brand-soft text-brand">
          <ShieldCheck className="size-4" />
        </span>
        <span className="text-xs font-bold text-ink">Approved from the kitchen</span>
      </div>
    </div>
  );
}
