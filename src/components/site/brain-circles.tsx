import { BadgeCheck, Eye, Newspaper, Ban, Heart } from "lucide-react";
import { Kicker } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { Orb } from "@/components/brand/illustrations";
import { DeviceFrame } from "@/components/brand/device-frame";
import { CirclesScreen } from "./phone-screens";

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
            <h2 className="text-balance text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              The first social network parents{" "}
              <span className="text-gradient">actually want.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-ink-2">
              BrainCircles is where kids connect around goals, chores and
              real-world wins — verified friends and family only. No strangers, no
              infinite scroll, no ads.{" "}
              <span className="font-semibold text-ink">Safe by default.</span>
            </p>
          </Reveal>

          <RevealStagger className="mt-2 grid w-full gap-3 sm:grid-cols-2">
            {TRUST.map(({ icon: Icon, label }) => (
              <RevealItem key={label}>
                <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-soft ring-1 ring-border">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-parent-soft text-parent">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{label}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        {/* phone: BrainCircles feed */}
        <Reveal direction="left" delay={0.1}>
          <div className="relative mx-auto flex w-full max-w-[320px] justify-center">
            <Orb className="inset-0 m-auto size-[320px]" color="var(--parent)" opacity={0.2} />
            <div className="relative w-[300px] animate-float-slow">
              <DeviceFrame variant="orange">
                <CirclesScreen />
              </DeviceFrame>

              {/* floating chips */}
              <div className="absolute -left-10 top-16 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-soft ring-1 ring-border sm:-left-14">
                <span className="grid size-7 place-items-center rounded-full bg-parent-soft text-parent">
                  <BadgeCheck className="size-4" />
                </span>
                <span className="text-xs font-bold text-ink">Parent-verified</span>
              </div>
              <div className="absolute -right-8 bottom-24 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-soft ring-1 ring-border sm:-right-12">
                <span className="grid size-7 place-items-center rounded-full bg-money-soft text-money-ink">
                  <Heart className="size-4" fill="currentColor" />
                </span>
                <span className="text-xs font-bold text-ink">Real-world wins</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
