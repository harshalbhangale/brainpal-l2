"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingWords = ["Your", "AI-Powered", "Second", "Brain"];

/**
 * Hero section animations fire on mount (not scroll-gated) because this
 * section is above-the-fold and immediately visible. Unlike Features,
 * Testimonials, Pricing, and CTA which use useInView for scroll-triggered
 * animation, the Hero intentionally uses mount-based animation for instant
 * visual impact on page load.
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200"
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand-400/20 animate-float"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {headingWords.map((word, i) => (
              <span
                key={word}
                className={cn(
                  "inline-block mr-3 opacity-0 animate-slideUp [animation-fill-mode:forwards]",
                  i === 1 && "text-brand-600"
                )}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl opacity-0 animate-slideUp [animation-fill-mode:forwards]"
            style={{ animationDelay: "600ms" }}
          >
            Capture, organize, and recall your knowledge effortlessly with the
            power of artificial intelligence.
          </p>

          <div
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-scaleIn [animation-fill-mode:forwards]"
            style={{ animationDelay: "800ms" }}
          >
            <Button size="lg">Get Started Free</Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Brain Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
            {/* Central brain node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 animate-pulse-glow" />

            {/* Orbiting nodes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const radius = 90;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <React.Fragment key={angle}>
                  {/* Connection line */}
                  <div
                    className="absolute top-1/2 left-1/2 h-px bg-brand-300/50 origin-left"
                    style={{
                      width: `${radius}px`,
                      transform: `rotate(${angle}deg)`,
                    }}
                  />
                  {/* Node */}
                  <div
                    className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-brand-300 to-brand-500 animate-float"
                    style={{
                      top: `calc(50% + ${y}px - 12px)`,
                      left: `calc(50% + ${x}px - 12px)`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${2.5 + i * 0.2}s`,
                    }}
                  />
                </React.Fragment>
              );
            })}

            {/* Outer ring */}
            <div className="absolute inset-4 rounded-full border-2 border-brand-200/40 animate-float" style={{ animationDuration: "4s" }} />
            <div className="absolute inset-8 rounded-full border border-brand-300/30 animate-float" style={{ animationDelay: "1s", animationDuration: "3.5s" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
