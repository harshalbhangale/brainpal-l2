"use client";

import { useRef } from "react";
import { Sun, Footprints, ShoppingBag, BookOpen, UtensilsCrossed, Moon, MapPin, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { TIMELINE } from "@/lib/data";
import { Kicker } from "@/components/brand/section-heading";
import { Reveal } from "@/components/brand/reveal";
import { DeviceFrame } from "@/components/brand/device-frame";
import { Face } from "@/components/brand/face";
import { DAY_SCREENS, MorningScreen } from "./phone-screens";

type Moment = { time: string; tag: string; head: string; body: string; color: string; Icon: LucideIcon };

const HEADS = [
  "BrainPal greets Oliver",
  "TutorPal prepares him for class",
  "MoneyPal helps him decide",
  "An AI teacher conducts a science interview",
  "Phones down, family up",
  "Parents receive a reassuring update",
];
const COLORS = ["var(--study)", "var(--study)", "var(--money)", "var(--tutor)", "var(--ink)", "var(--brand)"];
const ICONS: LucideIcon[] = [Sun, Footprints, ShoppingBag, BookOpen, UtensilsCrossed, Moon];

const MOMENTS: Moment[] = TIMELINE.map((t, i) => ({
  time: t.time,
  tag: t.tag,
  head: HEADS[i],
  body: t.body,
  color: COLORS[i],
  Icon: ICONS[i],
}));

function MomentCard({ m }: { m: Moment }) {
  const Icon = m.Icon;
  return (
    <div className="rounded-[2rem] bg-card p-7 shadow-soft-lg ring-1 ring-border sm:p-9">
      <div className="flex items-center gap-3">
        <span
          className="grid size-12 place-items-center rounded-2xl text-white"
          style={{ background: `linear-gradient(145deg, color-mix(in srgb, ${m.color} 82%, white), ${m.color})` }}
        >
          <Icon className="size-6" strokeWidth={2.4} />
        </span>
        <div>
          <p className="font-display text-3xl font-extrabold leading-none text-ink">{m.time}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wide text-ink-3">{m.tag}</p>
        </div>
        <span
          className="ml-auto rounded-full px-3 py-1.5 text-[11px] font-bold"
          style={{
            background: `color-mix(in srgb, ${m.color} 15%, white)`,
            color: `color-mix(in srgb, ${m.color} 70%, black)`,
          }}
        >
          BrainPal
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-ink">{m.head}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{m.body}</p>
    </div>
  );
}

export function DayWithOliver() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const pin = root.current?.querySelector<HTMLElement>(".day-pin");
        const screens = gsap.utils.toArray<HTMLElement>(".day-screen");
        const cards = gsap.utils.toArray<HTMLElement>(".day-card");
        const N = screens.length;
        if (!pin || N === 0) return;

        // initial: only the first moment visible
        gsap.set(screens, { autoAlpha: 0, yPercent: 6 });
        gsap.set(cards, { autoAlpha: 0, y: 40 });
        gsap.set([screens[0], cards[0]], { autoAlpha: 1, yPercent: 0, y: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => "+=" + window.innerHeight * (N - 0.35),
            pin: true,
            scrub: 0.6,
          },
        });

        // rail progress runs across the whole timeline
        tl.fromTo(".day-fill", { scaleY: 0 }, { scaleY: 1, ease: "none", duration: N - 1 }, 0);
        tl.fromTo(".day-cursor", { top: "0%" }, { top: "100%", ease: "none", duration: N - 1 }, 0);

        // step transitions
        for (let i = 1; i < N; i++) {
          const at = i - 0.5;
          tl.to(screens[i - 1], { autoAlpha: 0, yPercent: -6, duration: 0.5, ease: "power2.in" }, at)
            .to(cards[i - 1], { autoAlpha: 0, y: -40, duration: 0.5, ease: "power2.in" }, at)
            .fromTo(screens[i], { autoAlpha: 0, yPercent: 6 }, { autoAlpha: 1, yPercent: 0, duration: 0.5, ease: "power2.out" }, at + 0.25)
            .fromTo(cards[i], { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, at + 0.25);
        }
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="day" ref={root} className="relative">
      {/* ── Desktop: pinned scroll-story ─────────────────────────────── */}
      <div className="hidden lg:block">
        <div className="day-pin relative flex min-h-screen flex-col justify-center overflow-hidden py-14">
          <div className="absolute inset-0 -z-10 bg-mesh opacity-40" />
          <div className="container-page">
            {/* compact header */}
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <Kicker>Present when needed. Invisible when not.</Kicker>
                <h2 className="mt-4 font-display text-4xl font-bold text-ink xl:text-5xl">
                  A day with <span className="text-gradient">Oliver.</span>
                </h2>
              </div>
              <p className="max-w-sm pb-1 text-right text-sm leading-relaxed text-ink-2">
                The AI operating system for childhood — scroll his day and watch it
                show up exactly when it&apos;s needed, then step back.
              </p>
            </div>

            <div className="flex items-center gap-8 xl:gap-14">
              {/* rail */}
              <div className="relative flex h-[440px] flex-col items-center justify-between py-1">
                <Sun className="size-4 text-tutor" />
                <div className="relative my-2 w-1.5 flex-1 rounded-full bg-border">
                  <div
                    className="day-fill absolute inset-x-0 top-0 h-full origin-top rounded-full"
                    style={{ backgroundImage: "linear-gradient(to bottom, var(--study), var(--brand))", transform: "scaleY(0)" }}
                  />
                  <div className="day-cursor absolute -left-[7px] size-4 -translate-y-1/2 rounded-full bg-white shadow-pop ring-[3px] ring-brand" style={{ top: "0%" }} />
                </div>
                <Moon className="size-4 text-study" />
              </div>

              {/* phone (screens crossfade inside) */}
              <div className="relative w-[280px] shrink-0">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 m-auto size-[320px] rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--brand) 34%, transparent), transparent 70%)" }}
                />
                <DeviceFrame variant="silver">
                  <div className="relative h-full w-full">
                    {DAY_SCREENS.map((Screen, i) => (
                      <div key={i} className="day-screen absolute inset-0" style={{ opacity: i === 0 ? 1 : 0 }}>
                        <Screen />
                      </div>
                    ))}
                  </div>
                </DeviceFrame>

                {/* Oliver chip */}
                <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full bg-card px-3 py-2 shadow-soft-lg ring-1 ring-border">
                  <Face seed="Oliver" className="size-8" alt="Oliver" />
                  <div className="pr-1 text-left">
                    <p className="text-[13px] font-bold leading-none text-ink">Oliver, 11</p>
                    <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-3">
                      <MapPin className="size-2.5" /> Melbourne
                    </p>
                  </div>
                </div>
              </div>

              {/* cards (crossfade in place) */}
              <div className="relative min-h-[360px] flex-1">
                {MOMENTS.map((m, i) => (
                  <div
                    key={m.time}
                    className="day-card absolute inset-x-0 top-1/2 -translate-y-1/2"
                    style={{ opacity: i === 0 ? 1 : 0 }}
                  >
                    <MomentCard m={m} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: phone hero + animated timeline ───────────────────── */}
      <div className="py-20 lg:hidden">
        <div className="container-page">
          <div className="flex flex-col items-center gap-5 text-center">
            <Kicker>Present when needed. Invisible when not.</Kicker>
            <h2 className="font-display text-4xl font-bold text-ink">
              A day with <span className="text-gradient">Oliver.</span>
            </h2>
          </div>

          <div className="mx-auto mt-10 w-[260px]">
            <DeviceFrame variant="silver">
              <MorningScreen />
            </DeviceFrame>
          </div>

          <div className="mt-12 flex flex-col gap-5">
            {MOMENTS.map((m, i) => (
              <Reveal key={m.time} delay={i * 0.02}>
                <MomentCard m={m} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-deep">
              <Sparkles className="size-4" /> Present all day. Never in the way.
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
