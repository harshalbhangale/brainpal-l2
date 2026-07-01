import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { SectionHeading } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";

const AVATAR_TINTS = ["var(--brand)", "var(--study)", "var(--parent)"];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-tutor text-tutor" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          kicker="Loved by families"
          title="Parents across Australia already trust BrainPal."
        />

        <Reveal delay={0.08} className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-soft ring-1 ring-border">
            <Stars />
            <span className="text-sm font-semibold text-foreground">
              Loved by 2,400+ early-access families
            </span>
          </div>
        </Reveal>

        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3" amount={0.15}>
          {TESTIMONIALS.map((t, i) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col gap-4 rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1">
                <Stars />
                <blockquote className="flex-1 font-display text-lg font-semibold leading-snug text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                  <span
                    className="grid size-11 place-items-center rounded-full text-sm font-bold text-white"
                    style={{ background: AVATAR_TINTS[i % AVATAR_TINTS.length] }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
