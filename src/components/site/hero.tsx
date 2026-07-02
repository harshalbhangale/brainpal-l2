"use client";

import { useRef } from "react";
import { Play, ShieldCheck } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { GetEarlyAccess, SecondaryCta } from "@/components/brand/cta";
import { Kicker } from "@/components/brand/section-heading";
import { PalAvatar } from "@/components/brand/pal-avatar";
import { Orb } from "@/components/brand/illustrations";
import { BrainCoin } from "@/components/brand/scenes";
import { Face } from "@/components/brand/face";
import { WaitlistCount } from "@/components/brand/waitlist-count";
import { PhoneMockup } from "./phone-mockup";

const FAMILY_NAMES = ["Emma", "Daniel", "Sarah", "Priya", "James"];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 28, opacity: 0, duration: 0.85 }, "-=0.3")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.55")
        .from(".hero-cta", { y: 18, opacity: 0, duration: 0.55 }, "-=0.4")
        .from(".hero-proof", { y: 16, opacity: 0, duration: 0.55 }, "-=0.4")
        .from(".hero-phone", { y: 44, opacity: 0, scale: 0.94, duration: 0.9, ease: "power4.out" }, "-=1")
        .from(".hero-float", { scale: 0, opacity: 0, duration: 0.6, stagger: 0.12, ease: "back.out(1.7)" }, "-=0.45");

      // gentle scroll parallax
      gsap.to(".hero-parallax", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-phone-wrap", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-28">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-70" />
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-y opacity-60" />
      <Orb className="hero-parallax -left-24 -top-24 size-[420px]" color="var(--lime)" opacity={0.3} />
      <Orb className="hero-parallax right-[-10%] top-10 size-[460px]" color="var(--study)" opacity={0.2} />
      <Orb className="bottom-[-10%] left-1/3 size-[420px]" color="var(--brand)" opacity={0.18} />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-6">
          <div className="hero-eyebrow">
            <Kicker>A bank with a brain, for young people</Kicker>
          </div>

          <h1 className="hero-title max-w-2xl text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-[4.1rem]">
            Every child deserves an AI companion that{" "}
            <span className="text-gradient">grows with them.</span>
          </h1>

          <p className="hero-sub max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            BrainPal is the first AI bank for young people — where money, learning
            and safety live in one trusted family of AI companions: the PALs.
          </p>

          <div className="hero-cta flex flex-col gap-3 sm:flex-row">
            <GetEarlyAccess size="lg" />
            <SecondaryCta size="lg" href="#day">
              <Play className="size-4 fill-current" />
              Watch Oliver&apos;s Story
            </SecondaryCta>
          </div>

          <div className="hero-proof flex items-center gap-3 pt-2">
            <div className="flex -space-x-2.5">
              {FAMILY_NAMES.map((n) => (
                <Face key={n} seed={n} className="size-9 shadow-soft ring-2 ring-background" alt="" />
              ))}
            </div>
            <p className="text-sm text-ink-2">
              <WaitlistCount className="font-bold text-ink" /> Australian families
              on the early-access list
            </p>
          </div>
        </div>

        {/* Right: phone + floating elements */}
        <div className="hero-phone-wrap relative mx-auto flex w-full max-w-md justify-center">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 m-auto size-[360px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--lime) 50%, transparent), transparent 70%)" }}
          />

          <div className="hero-phone relative">
            <div className="animate-float-slow">
              <PhoneMockup />
            </div>

            {/* floating PALs — anchored beside the phone (left-full / right-full),
                so they never cover the screen. gsap scales the wrapper, CSS floats the inner. */}
            <div className="hero-float absolute right-full top-16 mr-2 hidden sm:block">
              <div className="animate-float" style={{ animationDelay: "0.4s" }}>
                <PalAvatar palKey="money" size="md" className="rotate-[-8deg]" />
              </div>
            </div>
            <div className="hero-float absolute right-full bottom-24 mr-2 hidden sm:block">
              <div className="animate-float" style={{ animationDelay: "1.7s" }}>
                <PalAvatar palKey="parent" size="sm" className="rotate-[6deg]" />
              </div>
            </div>
            <div className="hero-float absolute left-full top-40 ml-2 hidden sm:block">
              <div className="animate-float" style={{ animationDelay: "1.1s" }}>
                <PalAvatar palKey="tutor" size="md" className="rotate-[10deg]" />
              </div>
            </div>

            {/* floating chips — beside the phone on wide screens only */}
            <div className="hero-float absolute left-full top-8 ml-2 hidden items-center gap-2 whitespace-nowrap rounded-2xl bg-white px-3 py-2 shadow-soft ring-1 ring-border lg:flex">
              <span className="grid size-7 place-items-center rounded-full bg-brand-soft text-brand">
                <ShieldCheck className="size-4" />
              </span>
              <span className="text-xs font-bold text-ink">Parent-approved</span>
            </div>

            <div className="hero-float absolute bottom-10 left-full ml-2 hidden items-center gap-2 whitespace-nowrap rounded-2xl bg-white px-3 py-2 shadow-soft ring-1 ring-border lg:flex">
              <BrainCoin size={26} />
              <span className="text-xs font-bold text-ink">+50 Brains</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
