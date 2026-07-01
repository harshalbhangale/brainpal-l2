import { Nfc, Coins, LayoutGrid, Milestone, ArrowRight } from "lucide-react";
import { PROBLEMS } from "@/lib/data";
import { SectionHeading } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { Orb } from "@/components/brand/illustrations";
import { cn } from "@/lib/utils";

const ICONS = { invisible: Nfc, sense: Coins, fragmented: LayoutGrid, deadend: Milestone };
const ACCENTS = [
  { text: "text-study", soft: "bg-study-soft", ring: "group-hover:ring-study/30" },
  { text: "text-tutor", soft: "bg-tutor-soft", ring: "group-hover:ring-tutor/30" },
  { text: "text-parent", soft: "bg-parent-soft", ring: "group-hover:ring-parent/30" },
  { text: "text-brand", soft: "bg-brand-soft", ring: "group-hover:ring-brand/30" },
];

function DeclineStat({ from, to }: { from: string; to: string }) {
  return (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-1.5">
        <div className="flex h-16 w-8 items-end overflow-hidden rounded-md bg-muted">
          <div className="w-full rounded-md bg-muted-foreground/40" style={{ height: "100%" }} />
        </div>
        <span className="text-[11px] font-medium text-muted-foreground">2007</span>
        <span className="text-xs font-bold text-foreground">{from}</span>
      </div>
      <ArrowRight className="mb-8 size-4 text-muted-foreground" />
      <div className="flex flex-col items-center gap-1.5">
        <div className="flex h-16 w-8 items-end overflow-hidden rounded-md bg-study-soft">
          <div className="w-full rounded-md bg-study" style={{ height: "19%" }} />
        </div>
        <span className="text-[11px] font-medium text-muted-foreground">today</span>
        <span className="text-xs font-bold text-study">{to}</span>
      </div>
      <p className="mb-1 max-w-[9rem] text-[11px] leading-tight text-muted-foreground">
        Cash as a share of payments
      </p>
    </div>
  );
}

function BigStat({ value, label, className }: { value: string; label: string; className?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className={cn("font-display text-4xl font-extrabold", className)}>{value}</span>
      <p className="max-w-[10rem] text-[11px] leading-tight text-muted-foreground">{label}</p>
    </div>
  );
}

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

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2" amount={0.15}>
          {PROBLEMS.map((p, i) => {
            const Icon = ICONS[p.icon as keyof typeof ICONS];
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <RevealItem key={p.no}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1",
                    accent.ring
                  )}
                >
                  {/* watermark number */}
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[7rem] font-extrabold leading-none text-foreground/[0.04]">
                    {p.no}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className={cn("grid size-12 place-items-center rounded-2xl", accent.soft, accent.text)}>
                      <Icon className="size-6" />
                    </span>
                    <span className="font-mono text-sm font-semibold text-muted-foreground">
                      {p.no}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>

                  {p.stat && (
                    <div className="mt-6 rounded-2xl bg-muted/40 p-4 ring-1 ring-border">
                      {p.icon === "invisible" && p.stat.from && p.stat.to ? (
                        <DeclineStat from={p.stat.from} to={p.stat.to} />
                      ) : (
                        <BigStat value={p.stat.from} label={p.stat.label} className={accent.text} />
                      )}
                    </div>
                  )}
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-10">
          <p className="mx-auto max-w-2xl text-center text-base text-muted-foreground">
            The result? A generation with money in their pockets, apps in their
            faces, and no single place that actually{" "}
            <span className="font-semibold text-foreground">grows with them.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
