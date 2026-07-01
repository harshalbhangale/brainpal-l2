"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA() {
  const { ref, inView } = useInView<HTMLElement>();
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    // Basic email validation
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Client-side only - no backend yet
    setSubmitted(true);
  }

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" ref={ref}>
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
          className={cn(
            "text-3xl sm:text-4xl font-bold text-white",
            inView
              ? "animate-slideUp [animation-fill-mode:forwards]"
              : "opacity-0"
          )}
        >
          Ready to Supercharge Your Brain?
        </h2>
        <p
          className={cn(
            "mt-4 text-lg text-brand-100",
            inView
              ? "animate-slideUp [animation-fill-mode:forwards]"
              : "opacity-0"
          )}
          style={inView ? { animationDelay: "150ms" } : undefined}
        >
          Join thousands of thinkers who are already using BrainPal to unlock
          their potential.
        </p>

        {submitted ? (
          <div
            className={cn(
              "mt-8 rounded-lg bg-white/10 border border-white/20 p-6 max-w-md mx-auto",
              inView
                ? "animate-scaleIn [animation-fill-mode:forwards]"
                : "opacity-0"
            )}
            style={inView ? { animationDelay: "300ms" } : undefined}
          >
            <p className="text-white font-semibold text-lg">
              You&apos;re on the list!
            </p>
            <p className="text-brand-100 text-sm mt-1">
              We&apos;ll notify you when BrainPal launches.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={cn(
              "mt-8 max-w-md mx-auto",
              inView
                ? "animate-scaleIn [animation-fill-mode:forwards]"
                : "opacity-0"
            )}
            style={inView ? { animationDelay: "300ms" } : undefined}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/40"
                aria-label="Email address"
                aria-describedby={error ? "cta-email-error" : undefined}
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-brand-700 hover:bg-white/90 animate-pulse-glow shrink-0"
              >
                Get Early Access
              </Button>
            </div>
            {error && (
              <p
                id="cta-email-error"
                className="mt-2 text-sm text-red-200 text-left"
                role="alert"
              >
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
