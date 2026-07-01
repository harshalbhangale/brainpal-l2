import { Nfc, Coins, Milestone, HelpCircle, LayoutGrid, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/brand/section-heading";
import { Reveal } from "@/components/brand/reveal";
import { DeclineBars, Gauge } from "@/components/brand/data-viz";
import { Orb } from "@/components/brand/illustrations";
import { cn } from "@/lib/utils";

const APP_TILES = [
  { c: "var(--study-soft)", pos: "left-2 top-3 rotate-[-8deg]", d: "0s" },
  { c: "var(--tutor-soft)", pos: "right-3 top-1 rotate-[10deg]", d: "0.6s" },
  { c: "var(--parent-soft)", pos: "left-8 top-14 rotate-[6deg]", d: "1.1s" },
  { c: "var(--money-soft)", pos: "right-6 top-16 rotate-[-12deg]", d: "1.6s" },
  { c: "#ffd6e4", pos: "left-1 bottom-2 rotate-[12deg]", d: "0.9s" },
  { c: "#d3e7ff", pos: "right-1 bottom-3 rotate-[-6deg]", d: "1.3s" },
];

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden py-20 sm:py-28">
      <Orb className="right-[-8%] top-24 size-[380px]" color="var(--parent)" opacity={0.08} />
      <div className="container-page">
        <SectionHeading
          kicker="The problem"
          title="The rules of growing up just changed."
          description="Kids live in a tap-to-pay, always-on world — but the tools meant to guide them never caught up."
        />

        {/* Feature row */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* 01 — cash went invisible (dark, animated bars) */}
          <Reveal>
            <article className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-soft-lg">
              <div className="absolute inset-0 -z-0 bg-dots opacity-[0.12]" />
              <div className="relative flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-lime">
                  <Nfc className="size-6" />
                </span>
                <span className="font-mono text-sm font-bold text-white/40">01</span>
              </div>
              <h3 className="relative mt-5 font-display text-2xl font-bold">Money went invisible.</h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-white/60">
                Kids don&apos;t touch cash — they tap, so the piggy-bank lessons no longer land.
              </p>
              <div className="relative mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <DeclineBars />
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/50">
                  <span>Cash as a share of payments</span>
                  <ArrowRight className="size-3.5" />
                  <span className="text-lime">a free-fall</span>
                </div>
              </div>
            </article>
          </Reveal>

          {/* 03 — fragmented (84% gauge + scattered apps) */}
          <Reveal delay={0.08}>
            <article className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-card p-8 shadow-soft-lg ring-1 ring-border">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-parent-soft text-parent">
                  <LayoutGrid className="size-6" />
                </span>
                <span className="font-mono text-sm font-bold text-ink-3">03</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">Childhood is fragmented.</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                Dozens of disconnected, addictive, data-hungry apps compete for attention.
              </p>
              <div className="mt-6 grid flex-1 grid-cols-[auto_1fr] items-center gap-6 rounded-2xl bg-muted/40 p-5 ring-1 ring-border">
                <Gauge value={84} color="var(--parent)" />
                <div>
                  {/* scattered app tiles */}
                  <div className="relative h-24 w-full">
                    {APP_TILES.map((t, i) => (
                      <span
                        key={i}
                        className={cn("absolute size-9 animate-float rounded-xl shadow-soft", t.pos)}
                        style={{ background: t.c, animationDelay: t.d }}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-xs font-semibold text-ink-3">of 8–12s are already on social</p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Supporting row */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {[
            {
              no: "02",
              icon: Coins,
              extra: HelpCircle,
              tint: "bg-tutor-soft",
              text: "text-tutor",
              title: "Money, but no money sense.",
              body: "Most kids get money long before they understand saving, interest or value.",
            },
            {
              no: "04",
              icon: Milestone,
              extra: null,
              tint: "bg-brand-soft",
              text: "text-brand",
              title: "Payments alone is a dead end.",
              body: "A youth bank must be the last mile to everything a young person needs — or someone else owns the day.",
            },
          ].map((p) => (
            <Reveal key={p.no} delay={0.05}>
              <article className="group relative flex h-full items-start gap-5 overflow-hidden rounded-[2rem] bg-card p-7 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1">
                <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[6rem] font-extrabold leading-none text-ink/[0.04]">
                  {p.no}
                </span>
                <span className={cn("grid size-14 shrink-0 place-items-center rounded-2xl", p.tint, p.text)}>
                  <p.icon className="size-7" />
                </span>
                <div className="relative">
                  <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-lg text-ink-2">
            A generation with money in their pockets, apps in their faces, and no
            single place that actually{" "}
            <span className="font-bold text-ink">grows with them.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
