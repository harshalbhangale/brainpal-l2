import { SlidersHorizontal, Zap, Gift, RefreshCw, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/data";
import { SectionHeading } from "@/components/brand/section-heading";
import { RevealStagger, RevealItem, Reveal } from "@/components/brand/reveal";

const ICONS = { rules: SlidersHorizontal, act: Zap, reward: Gift };

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

        <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-3" amount={0.15}>
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS];
            return (
              <RevealItem key={step.no} className="relative">
                <div className="group relative flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-brand text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-7" />
                    </span>
                    <span className="font-display text-5xl font-extrabold text-brand/15">
                      {step.no}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>

                {/* connector arrow (desktop) */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <span className="absolute -right-5 top-1/2 z-10 hidden size-9 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-soft ring-1 ring-border lg:grid">
                    <ArrowRight className="size-4" />
                  </span>
                )}
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-deep">
            <RefreshCw className="size-4" />
            Repeats every day — small moments, compounding
          </span>
        </Reveal>
      </div>
    </section>
  );
}
