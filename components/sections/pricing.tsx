"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  variant: "default" | "outline";
  highlighted: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "100 notes",
      "Basic AI features",
      "1GB storage",
      "Web app access",
    ],
    cta: "Start Free",
    variant: "outline",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For power users",
    features: [
      "Unlimited notes",
      "Advanced AI",
      "50GB storage",
      "All platforms",
      "Priority support",
      "Knowledge graph",
    ],
    cta: "Get Pro",
    variant: "default",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team workspaces",
      "Admin controls",
      "API access",
      "Custom integrations",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    variant: "outline",
    highlighted: false,
  },
];

export function Pricing() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-muted/30" ref={ref}>
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
            Simple, Transparent Pricing
          </h2>
          <p
            className={cn(
              "mt-4 text-lg text-muted-foreground",
              inView
                ? "animate-slideUp [animation-fill-mode:forwards]"
                : "opacity-0"
            )}
            style={inView ? { animationDelay: "100ms" } : undefined}
          >
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={cn(
                tier.highlighted && "md:scale-105",
                inView
                  ? "animate-slideUp [animation-fill-mode:forwards]"
                  : "opacity-0"
              )}
              style={inView ? { animationDelay: `${(i + 1) * 150}ms` } : undefined}
            >
              {/* Gradient border wrapper for highlighted card */}
              <div
                className={cn(
                  "rounded-xl transition-transform duration-300 hover:-translate-y-2",
                  tier.highlighted
                    ? "p-[2px] bg-gradient-to-br from-brand-400 to-brand-600"
                    : ""
                )}
              >
                <Card
                  className={cn(
                    "h-full",
                    tier.highlighted && "border-0"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                      {tier.highlighted && <Badge>Popular</Badge>}
                    </div>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">
                        {tier.price}
                      </span>
                      <span className="text-muted-foreground">
                        {tier.period}
                      </span>
                    </div>
                    <CardDescription className="mt-2">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <svg
                            className="w-4 h-4 text-brand-500 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button variant={tier.variant} className="w-full">
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
