import {
  Sun,
  Footprints,
  ShoppingBag,
  BookOpen,
  UtensilsCrossed,
  Moon,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { TIMELINE } from "@/lib/data";
import { SectionHeading } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { DeviceFrame } from "@/components/brand/device-frame";
import { BrandLogo } from "@/components/brand/logo";
import { Face } from "@/components/brand/face";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  sun: Sun,
  walk: Footprints,
  cart: ShoppingBag,
  book: BookOpen,
  dinner: UtensilsCrossed,
  moon: Moon,
};

type Moment = { color: string; onDark: boolean; tag: string };
const META: Moment[] = [
  { color: "var(--study)", onDark: true, tag: "StudyPal stays quiet" },
  { color: "var(--study)", onDark: true, tag: "5-min warm-up" },
  { color: "var(--money)", onDark: false, tag: "MoneyPal · rewards" },
  { color: "var(--tutor)", onDark: false, tag: "TutorPal" },
  { color: "var(--ink)", onDark: true, tag: "Phones down" },
  { color: "var(--brand)", onDark: true, tag: "BrainPal signs off" },
];

/** Oliver's "Today" schedule — the app screen shown in the phone. */
function DayScreen() {
  const rows = [
    { time: "07:30", label: "Your day, your pace", icon: Sun },
    { time: "08:45", label: "Quiz warm-up · 5 min", icon: Footprints },
    { time: "14:15", label: "Scan & save at the shops", icon: ShoppingBag },
    { time: "18:00", label: "Tutor · flashcards", icon: BookOpen },
    { time: "19:15", label: "Dinner · BrainPal off", icon: UtensilsCrossed },
    { time: "20:00", label: "Goodnight", icon: Moon },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-gradient-to-b from-white to-study-soft/40 px-4 pb-4 pt-[10%]">
      <div className="flex items-center justify-between">
        <BrandLogo size="sm" />
        <Face seed="Oliver" className="size-8 ring-1 ring-black/5" alt="Oliver" />
      </div>
      <div>
        <p className="text-[11px] font-medium text-ink-3">Thursday</p>
        <p className="font-display text-lg font-bold text-ink">Oliver&apos;s day</p>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {rows.map((r) => (
          <div key={r.time} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-soft ring-1 ring-border">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-study-soft text-study">
              <r.icon className="size-4" strokeWidth={2.4} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-bold text-ink">{r.label}</p>
            </div>
            <span className="font-mono text-[11px] font-semibold text-ink-3">{r.time}</span>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-ink px-3 py-2.5 text-center">
        <p className="text-[11px] font-semibold text-white/80">BrainPal is quiet until Oliver asks.</p>
      </div>
    </div>
  );
}

export function DayWithOliver() {
  return (
    <section id="day" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-40 mask-fade-y" />
      <div className="container-page">
        <SectionHeading
          kicker="Present when needed. Invisible when not."
          title="A day with Oliver."
          description="BrainPal is the AI operating system for childhood — there in the moment, gone when it isn't needed."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          {/* Left: the device + Oliver */}
          <Reveal direction="right" className="lg:sticky lg:top-28">
            <div className="relative mx-auto flex max-w-[320px] flex-col items-center">
              <div className="relative w-[300px] animate-float-slow">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 m-auto size-[320px] rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--study) 40%, transparent), transparent 70%)" }}
                />
                <DeviceFrame variant="silver">
                  <DayScreen />
                </DeviceFrame>
              </div>

              {/* Oliver identity chip */}
              <div className="mt-6 flex items-center gap-3 rounded-full bg-card px-3 py-2 shadow-soft ring-1 ring-border">
                <Face seed="Oliver" className="size-10" alt="Oliver" />
                <div className="pr-2 text-left">
                  <p className="text-sm font-bold text-ink">Oliver, 11</p>
                  <p className="flex items-center gap-1 text-xs text-ink-3">
                    <MapPin className="size-3" /> Melbourne
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: the narrative timeline */}
          <RevealStagger className="relative flex flex-col" amount={0.08}>
            {/* rail */}
            <div
              aria-hidden
              className="absolute left-6 top-2 bottom-2 w-0.5 -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, transparent, var(--study) 8%, var(--brand) 92%, transparent)" }}
            />
            {TIMELINE.map((entry, i) => {
              const Icon = ICONS[entry.icon];
              const m = META[i];
              return (
                <RevealItem key={entry.time} className="relative pb-6 pl-16 last:pb-0">
                  {/* dot */}
                  <span
                    className={cn(
                      "absolute left-6 top-1 grid size-11 -translate-x-1/2 place-items-center rounded-full shadow-lg ring-4 ring-background",
                      m.onDark ? "text-white" : "text-ink"
                    )}
                    style={{ background: `linear-gradient(145deg, color-mix(in srgb, ${m.color} 80%, white), ${m.color})` }}
                  >
                    <Icon className="size-5" strokeWidth={2.4} />
                  </span>

                  <div className="rounded-3xl bg-card p-5 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-lg font-bold text-ink">{entry.time}</span>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-2">
                        {entry.tag}
                      </span>
                      <span
                        className="ml-auto rounded-full px-2.5 py-1 text-[11px] font-bold"
                        style={{
                          background: `color-mix(in srgb, ${m.color} 15%, white)`,
                          color: `color-mix(in srgb, ${m.color} 70%, black)`,
                        }}
                      >
                        {m.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{entry.body}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
