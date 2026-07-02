import {
  Wallet,
  PiggyBank,
  ListChecks,
  Percent,
  Target,
  CreditCard,
  Send,
  Gift,
  Quote,
} from "lucide-react";
import { MONEY_CHIPS } from "@/lib/data";
import { Kicker } from "@/components/brand/section-heading";
import { Reveal } from "@/components/brand/reveal";
import { Orb } from "@/components/brand/illustrations";
import { GrowthScene } from "@/components/brand/scenes";

const CHIP_ICONS: Record<string, typeof Wallet> = {
  Allowance: Wallet,
  Savings: PiggyBank,
  Chores: ListChecks,
  Interest: Percent,
  Goals: Target,
  Cards: CreditCard,
  Payments: Send,
  Rewards: Gift,
};

export function Money() {
  return (
    <section id="money" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <Orb className="left-[-10%] top-0 size-[460px]" color="var(--brand)" opacity={0.25} />
      <Orb className="right-[-6%] bottom-0 size-[380px]" color="var(--brand-bright)" opacity={0.18} />
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.15]" />

      <div className="container-page">
        <div className="flex flex-col items-center gap-5 text-center">
          <Reveal>
            <Kicker tone="light">Money</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-3xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-[3.4rem]">
              Learn money by <span className="text-gradient">living it.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              Allowance flows in. Goals fill up. Chores convert into spending power.
              Every tap is a quiet lesson in agency — on a real, parent-controlled
              account.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          {/* Buffett quote */}
          <Reveal direction="right">
            <figure className="relative overflow-hidden rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur sm:p-10">
              <Quote className="size-10 text-brand-bright" fill="currentColor" />
              <blockquote className="mt-5 font-display text-2xl font-semibold leading-snug text-white sm:text-[1.7rem]">
                &ldquo;Teach your kids to save — start as young as possible, and
                save as much as possible. That&apos;s the only lesson they
                need.&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm text-white/60">
                <span className="h-px w-8 bg-brand-bright" />
                The Warren Buffett rule, turned into a game of compound interest.
              </figcaption>
            </figure>
          </Reveal>

          {/* Growth chart card */}
          <Reveal direction="left" delay={0.1}>
            <div className="rounded-[2rem] bg-white p-6 text-ink shadow-soft-lg sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink-3">Compound interest</p>
                  <p className="font-display text-lg font-bold">Small habits, big future</p>
                </div>
                <span className="rounded-full bg-lime-soft px-3 py-1 text-xs font-bold text-money-ink">
                  The one lesson
                </span>
              </div>
              <div className="mt-2 flex justify-center">
                <GrowthScene size={230} />
              </div>
              <p className="mt-2 text-center text-sm text-ink-3">
                Allowance in. Goals filling up. Every tap, a quiet lesson in
                agency — on a real, parent-controlled account.
              </p>
            </div>
          </Reveal>
        </div>

        {/* feature chips */}
        <Reveal delay={0.15} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {MONEY_CHIPS.map((chip) => {
              const Icon = CHIP_ICONS[chip] ?? Wallet;
              return (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15 transition-colors hover:bg-white/15"
                >
                  <Icon className="size-4 text-brand-bright" />
                  {chip}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
