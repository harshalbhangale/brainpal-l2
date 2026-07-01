"use client";

import { useRef, useState } from "react";
import { Sun, Footprints, ShoppingBag, BookOpen, UtensilsCrossed, Moon, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { TIMELINE } from "@/lib/data";
import { SectionHeading } from "@/components/brand/section-heading";
import { DeviceFrame } from "@/components/brand/device-frame";
import { Face } from "@/components/brand/face";
import { DAY_SCREENS } from "./phone-screens";
import { cn } from "@/lib/utils";

const ICONS: LucideIcon[] = [Sun, Footprints, ShoppingBag, BookOpen, UtensilsCrossed, Moon];
const META = [
  { color: "var(--study)", tag: "StudyPal stays quiet" },
  { color: "var(--study)", tag: "5-min warm-up" },
  { color: "var(--money)", tag: "MoneyPal · rewards" },
  { color: "var(--tutor)", tag: "TutorPal" },
  { color: "var(--ink)", tag: "Phones down" },
  { color: "var(--brand)", tag: "BrainPal signs off" },
];

export function DayWithOliver() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-moment]");
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
    },
    { scope: root }
  );

  const ActiveIcon = ICONS[active];
  const accent = META[active].color;

  return (
    <section id="day" ref={root} className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-40 mask-fade-y" />
      <div className="container-page">
        <SectionHeading
          kicker="Present when needed. Invisible when not."
          title="A day with Oliver."
          description="BrainPal is the AI operating system for childhood — scroll through Oliver's day and watch it show up exactly when it's needed, then step back."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: sticky phone that swaps screens as you scroll */}
          <div className="lg:sticky lg:top-24 lg:flex lg:h-[82vh] lg:flex-col lg:justify-center">
            <div className="mx-auto flex w-full max-w-[320px] flex-col items-center">
              {/* time chip */}
              <div className="mb-5 flex w-full items-center gap-3 rounded-full bg-card p-2 pr-4 shadow-soft ring-1 ring-border">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-full text-white transition-colors duration-500"
                  style={{ background: `linear-gradient(145deg, color-mix(in srgb, ${accent} 82%, white), ${accent})` }}
                >
                  <ActiveIcon className="size-5" strokeWidth={2.4} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-sm font-bold text-ink">{TIMELINE[active].time}</p>
                  <p className="truncate text-[11px] font-semibold uppercase tracking-wide text-ink-3">
                    {TIMELINE[active].tag}
                  </p>
                </div>
                <div className="flex gap-1">
                  {TIMELINE.map((_, i) => (
                    <span
                      key={i}
                      className={cn("h-1.5 rounded-full transition-all duration-500", i === active ? "w-5 bg-brand" : "w-1.5 bg-border")}
                    />
                  ))}
                </div>
              </div>

              {/* phone */}
              <div className="relative w-full animate-float-slow">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 m-auto size-[320px] rounded-full blur-3xl transition-colors duration-700"
                  style={{ background: `radial-gradient(circle, color-mix(in srgb, ${accent} 40%, transparent), transparent 70%)` }}
                />
                <DeviceFrame variant="silver">
                  <div className="relative h-full w-full">
                    {DAY_SCREENS.map((Screen, i) => (
                      <div
                        key={i}
                        className={cn(
                          "absolute inset-0 transition-all duration-500 ease-out",
                          active === i ? "opacity-100 blur-0" : "pointer-events-none opacity-0 blur-[2px]"
                        )}
                      >
                        <Screen />
                      </div>
                    ))}
                  </div>
                </DeviceFrame>
              </div>

              {/* Oliver identity */}
              <div className="mt-6 flex items-center gap-3 rounded-full bg-card px-3 py-2 shadow-soft ring-1 ring-border">
                <Face seed="Oliver" className="size-9" alt="Oliver" />
                <div className="pr-2 text-left">
                  <p className="text-sm font-bold text-ink">Oliver, 11</p>
                  <p className="flex items-center gap-1 text-xs text-ink-3">
                    <MapPin className="size-3" /> Melbourne
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: scrolling moments */}
          <div className="flex flex-col">
            {TIMELINE.map((entry, i) => {
              const Icon = ICONS[i];
              const m = META[i];
              const isActive = i === active;
              return (
                <div
                  key={entry.time}
                  data-moment
                  className="flex min-h-[62vh] items-center py-6 lg:min-h-[82vh]"
                >
                  <div
                    className={cn(
                      "w-full rounded-[2rem] bg-card p-7 shadow-soft ring-1 ring-border transition-all duration-500 sm:p-9",
                      isActive ? "scale-100 opacity-100 shadow-soft-lg" : "scale-[0.97] opacity-55"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="grid size-12 place-items-center rounded-2xl text-white"
                        style={{ background: `linear-gradient(145deg, color-mix(in srgb, ${m.color} 82%, white), ${m.color})` }}
                      >
                        <Icon className="size-6" strokeWidth={2.4} />
                      </span>
                      <div>
                        <p className="font-display text-2xl font-bold text-ink">{entry.time}</p>
                        <p className="text-xs font-bold uppercase tracking-wide text-ink-3">{entry.tag}</p>
                      </div>
                      <span
                        className="ml-auto rounded-full px-3 py-1.5 text-[11px] font-bold"
                        style={{
                          background: `color-mix(in srgb, ${m.color} 15%, white)`,
                          color: `color-mix(in srgb, ${m.color} 70%, black)`,
                        }}
                      >
                        {m.tag}
                      </span>
                    </div>
                    <p className="mt-5 text-lg leading-relaxed text-ink-2">{entry.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
