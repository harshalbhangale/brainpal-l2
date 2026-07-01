"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const features = [
  {
    icon: "\uD83E\uDDE0",
    title: "AI-Powered Learning",
    description:
      "Intelligent algorithms that adapt to your learning style and help you retain information longer.",
  },
  {
    icon: "\uD83D\uDD14",
    title: "Smart Reminders",
    description:
      "Never forget important concepts with spaced repetition reminders timed for optimal recall.",
  },
  {
    icon: "\uD83D\uDD17",
    title: "Knowledge Graph",
    description:
      "Visualize connections between your ideas in an interactive knowledge map.",
  },
  {
    icon: "\uD83D\uDC65",
    title: "Collaborative Spaces",
    description:
      "Share and build knowledge together with team workspaces and real-time collaboration.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Analytics Dashboard",
    description:
      "Track your learning progress with detailed insights and performance metrics.",
  },
  {
    icon: "\uD83D\uDCF1",
    title: "Cross-Platform Sync",
    description:
      "Access your knowledge base anywhere with seamless sync across all your devices.",
  },
];

export function Features() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="features" className="py-20 sm:py-28 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-3xl sm:text-4xl font-bold text-foreground",
              inView
                ? "animate-slideUp [animation-fill-mode:forwards]"
                : "opacity-0"
            )}
          >
            Supercharge Your Mind
          </h2>
          <p
            className={cn(
              "mt-4 text-lg text-muted-foreground max-w-2xl mx-auto",
              inView
                ? "animate-slideUp [animation-fill-mode:forwards]"
                : "opacity-0"
            )}
            style={inView ? { animationDelay: "100ms" } : undefined}
          >
            Everything you need to capture, organize, and amplify your knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Card
              key={feature.title}
              className={cn(
                "transition-transform duration-300 hover:scale-105",
                inView
                  ? "animate-slideUp [animation-fill-mode:forwards]"
                  : "opacity-0"
              )}
              style={inView ? { animationDelay: `${(i + 1) * 100}ms` } : undefined}
            >
              <CardHeader>
                <div className="text-4xl mb-2" aria-hidden="true">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
