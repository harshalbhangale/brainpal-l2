import { BadgeCheck, Eye, Newspaper, Ban } from "lucide-react";
import { Kicker } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { Orb } from "@/components/brand/illustrations";
import { FamilyScene } from "@/components/brand/scenes";

const TRUST = [
  { icon: BadgeCheck, label: "Verified circles only" },
  { icon: Eye, label: "Parent-visible" },
  { icon: Newspaper, label: "No public feeds" },
  { icon: Ban, label: "No algorithms" },
];

export function BrainCircles() {
  return (
    <section id="safe-social" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* copy */}
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <Kicker>Connection, not a feed</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
              The first social network parents{" "}
              <span className="text-gradient">actually want.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              BrainCircles is where kids connect around goals, chores and
              real-world wins — verified friends and family only. No strangers, no
              infinite scroll, no ads.{" "}
              <span className="font-semibold text-foreground">Safe by default.</span>
            </p>
          </Reveal>

          <RevealStagger className="mt-2 grid w-full gap-3 sm:grid-cols-2" amount={0.2}>
            {TRUST.map(({ icon: Icon, label }) => (
              <RevealItem key={label}>
                <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft ring-1 ring-border">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{label}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        {/* illustration */}
        <Reveal direction="left" delay={0.1}>
          <div className="relative">
            <Orb className="inset-0 m-auto size-[320px]" color="var(--brand)" opacity={0.16} />
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-soft/60 to-white p-8 shadow-soft ring-1 ring-border">
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-deep shadow-sm ring-1 ring-border">
                  <span className="size-1.5 rounded-full bg-money" />
                  Oliver&apos;s Circle
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm ring-1 ring-border">
                  <BadgeCheck className="size-3.5 text-brand" />
                  5 verified
                </span>
              </div>
              <div className="flex justify-center">
                <FamilyScene size={300} />
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Everyone here is verified by a parent. No one else gets in.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
