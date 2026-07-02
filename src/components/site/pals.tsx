import { PALS, UPCOMING_PALS } from "@/lib/data";
import { PalAvatar } from "@/components/brand/pal-avatar";
import { SectionHeading } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { BrainGlyph } from "@/components/brand/logo";
import { Sparkles } from "lucide-react";

export function Pals() {
  return (
    <section id="pals" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-40 mask-fade-y" />

      <div className="container-page">
        <SectionHeading
          kicker="A new era of money"
          title="Who said a bank can't have a brain?"
          description="A new AI era — and a new kind of money. A bank that also teaches, tutors and guides healthier choices. Same account, a whole lot smarter."
        />

        {/* one brain, many faces */}
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/70 p-6 text-center shadow-soft ring-1 ring-border backdrop-blur sm:flex-row sm:text-left">
            <BrainGlyph className="size-12 shrink-0" />
            <p className="text-base leading-relaxed text-muted-foreground">
              <span className="font-bold text-foreground">One brain, many faces.</span>{" "}
              Every PAL has its own voice, personality and memory — it feels less
              like an app, more like texting a friend.
            </p>
          </div>
        </Reveal>

        {/* cast */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-deep">
            Meet the cast — live now
          </span>
        </div>

        <RevealStagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" amount={0.1}>
          {PALS.map((pal) => (
            <RevealItem key={pal.key}>
              <article
                className="group relative flex h-full flex-col items-center overflow-hidden rounded-3xl bg-card p-6 text-center shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-2"
              >
                {/* top gradient wash */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-24 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to bottom, color-mix(in oklch, ${pal.colorVar} 16%, transparent), transparent)`,
                  }}
                />

                <div className="relative">
                  <PalAvatar palKey={pal.key} size="xl" className="transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3" />
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{pal.name}</h3>
                <span
                  className="mt-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background: `color-mix(in oklch, ${pal.colorVar} 12%, white)`,
                    color: `color-mix(in oklch, ${pal.colorVar} 70%, black)`,
                  }}
                >
                  {pal.role}
                </span>

                <div
                  className="mt-4 w-full rounded-2xl rounded-bl-sm px-4 py-3 text-left text-sm italic leading-snug text-foreground/80"
                  style={{ background: `color-mix(in oklch, ${pal.colorVar} 9%, white)` }}
                >
                  &ldquo;{pal.quote}&rdquo;
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* more on the way */}
        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Sparkles className="size-4 text-brand" />
              More on the way
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {UPCOMING_PALS.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-dashed border-border bg-white/60 px-4 py-2 text-sm font-medium text-muted-foreground"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
