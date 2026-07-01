"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    initials: "SK",
    name: "Sarah K.",
    role: "Product Manager",
    quote:
      "BrainPal transformed how I organize research. I can find any note in seconds.",
    gradient: "from-brand-400 to-brand-600",
  },
  {
    initials: "MR",
    name: "Marcus R.",
    role: "PhD Student",
    quote:
      "The knowledge graph feature alone is worth it. I can see connections I never noticed before.",
    gradient: "from-brand-500 to-brand-700",
  },
  {
    initials: "JL",
    name: "Jamie L.",
    role: "Software Engineer",
    quote:
      "Finally, a tool that thinks the way I do. The AI suggestions are incredibly accurate.",
    gradient: "from-brand-300 to-brand-500",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="testimonials" className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-bold text-foreground",
              inView
                ? "animate-fadeIn [animation-fill-mode:forwards]"
                : "opacity-0"
            )}
          >
            Loved by Thinkers
          </h2>
          <p
            className={cn(
              "mt-4 text-lg text-muted-foreground",
              inView
                ? "animate-fadeIn [animation-fill-mode:forwards]"
                : "opacity-0"
            )}
            style={inView ? { animationDelay: "150ms" } : undefined}
          >
            See what our community has to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={cn(
                "relative rounded-xl border bg-card p-8 transition-transform duration-300 hover:-translate-y-1",
                inView
                  ? "animate-fadeIn [animation-fill-mode:forwards]"
                  : "opacity-0"
              )}
              style={inView ? { animationDelay: `${(i + 1) * 200}ms` } : undefined}
            >
              {/* Decorative quote mark */}
              <span
                className="absolute top-4 right-6 text-6xl text-brand-100 font-serif leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="relative z-10">
                {/* Avatar */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm",
                    testimonial.gradient
                  )}
                >
                  {testimonial.initials}
                </div>

                {/* Quote */}
                <p className="mt-6 text-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="mt-6">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
