"use client";

import { SlidersHorizontal, Zap, Gift, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/data";
import { SectionHeading } from "@/components/brand/section-heading";
import { RevealStagger, RevealItem, Reveal } from "@/components/brand/reveal";
import { LoopDiagram } from "@/components/brand/scenes";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = { rules: SlidersHorizontal, act: Zap, reward: Gift };
const STEP_STYLE = [
  { color: "var(--parent)", tint: "bg-parent-soft", text: "text-parent", onDark: false },
  { color: "var(--study)", tint: "bg-study-soft", text: "text-study", onDark: true },
  { color: "var(--money)", tint: "bg-lime-soft", text: "text-money-ink", onDark: false },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 mask-fade-y" />
      <div className="container-page">
        <SectionHeading
          kicker="How it works"
          title="One simple loop, on repeat."
          description="No dashboards to master. Just a rhythm the whole family falls into."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* animated loop */}
          <Reveal direction="right" className="order-2 lg:order-1">
            <LoopDiagram
              nodes={[
                { label: "Parents set rules", Icon: SlidersHorizontal, color: "var(--parent)" },
                { label: "Kids act & learn", Icon: Zap, color: "var(--study)", onDark: true },
                { label: "A reward flows", Icon: Gift, color: "var(--money)" },
              ]}
            />
          </Reveal>

          {/* steps */}
          <div className="order-1 lg:order-2">
            <RevealStagger className="relative flex flex-col gap-4">
              {HOW_IT_WORKS.map((step, i) => {
                const Icon = ICONS[step.icon];
                const s = STEP_STYLE[i];
                return (
                  <RevealItem key={step.no}>
                    <div className="group flex items-start gap-4 rounded-3xl bg-card p-6 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1">
                      <span
                        className={cn(
                          "grid size-14 shrink-0 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105",
                          s.onDark ? "text-white" : "text-ink"
                        )}
                        style={{ background: `linear-gradient(145deg, color-mix(in srgb, ${s.color} 82%, white), ${s.color})` }}
                      >
                        <Icon className="size-7" strokeWidth={2.2} />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-ink-3">Step {step.no}</span>
                        </div>
                        <h3 className="mt-0.5 text-xl font-bold text-ink">{step.title}</h3>
                        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">{step.body}</p>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealStagger>

            <Reveal delay={0.1} className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-deep">
                <RefreshCw className="size-4" />
                Repeats every day — small moments, compounding
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
