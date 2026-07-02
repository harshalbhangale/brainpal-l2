import { X, Sparkles, ShieldCheck, MailX, MapPin } from "lucide-react";
import { THESIS } from "@/lib/data";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { Orb } from "@/components/brand/illustrations";
import { BrainMark } from "@/components/brand/logo";
import { WaitlistForm } from "./waitlist-form";
import { WaitlistCount } from "@/components/brand/waitlist-count";

const FOOTER_TRUST = [
  { icon: MailX, label: "No spam, ever" },
  { icon: ShieldCheck, label: "Bank-grade privacy" },
  { icon: MapPin, label: "Made in Australia" },
];

export function ThesisCta() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-28"
    >
      <Orb className="left-1/2 top-[-10%] size-[520px] -translate-x-1/2" color="var(--brand)" opacity={0.28} />
      <Orb className="right-[-8%] bottom-0 size-[360px]" color="var(--blue)" opacity={0.18} />
      <div className="absolute inset-0 -z-10 bg-dots opacity-[0.12]" />

      <div className="container-page">
        {/* thesis */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/80 ring-1 ring-white/15">
              <BrainMark className="size-4" />
              Our thesis
            </span>
          </Reveal>

          <RevealStagger className="mt-8 flex flex-col gap-3" amount={0.3}>
            {THESIS.map((line) => (
              <RevealItem key={line}>
                <p className="flex items-center justify-center gap-3 text-lg font-medium text-white/55 sm:text-xl">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-white/50">
                    <X className="size-3.5" />
                  </span>
                  <span>
                    {line.split(/(\bjust\b)/i).map((part, i) =>
                      /^just$/i.test(part) ? (
                        <strong key={i} className="font-bold text-white">{part}</strong>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </span>
                </p>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.15} className="mt-6">
            <p className="flex flex-col items-center justify-center gap-3 text-2xl font-bold sm:flex-row sm:text-3xl">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-white">
                <Sparkles className="size-4" />
              </span>
              <span>
                We are building the{" "}
                <span className="text-gradient">AI operating system for childhood.</span>
              </span>
            </p>
          </Reveal>
        </div>

        {/* closing CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl">
              So we built the AI bank young people grow up with.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
              One trusted companion for saving, spending, learning and staying
              safe — that grows with every child.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <WaitlistForm />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-sm text-white/60">
              <WaitlistCount className="font-bold text-white" /> Australian
              families already joined
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60">
              {FOOTER_TRUST.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2">
                  {Icon && <Icon className="size-4 text-brand-bright" />}
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
