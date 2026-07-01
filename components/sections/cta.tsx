"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-300/15 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${6 + i * 3}px`,
              height: `${6 + i * 3}px`,
              top: `${20 + i * 15}%`,
              left: `${15 + i * 18}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold text-white opacity-0 animate-slideUp [animation-fill-mode:forwards]"
        >
          Ready to Supercharge Your Brain?
        </h2>
        <p
          className="mt-4 text-lg text-brand-100 opacity-0 animate-slideUp [animation-fill-mode:forwards]"
          style={{ animationDelay: "150ms" }}
        >
          Join thousands of thinkers who are already using BrainPal to unlock
          their potential.
        </p>

        <div
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto opacity-0 animate-scaleIn [animation-fill-mode:forwards]"
          style={{ animationDelay: "300ms" }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/40"
          />
          <Button
            size="lg"
            className="bg-white text-brand-700 hover:bg-white/90 animate-pulse-glow shrink-0"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
}
