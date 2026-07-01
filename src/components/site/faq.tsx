import { Baby, Lock, Coins, ShieldCheck, Rocket, MessageCircleQuestion } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FAQS } from "@/lib/data";
import { Kicker } from "@/components/brand/section-heading";
import { Reveal } from "@/components/brand/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GetEarlyAccess } from "@/components/brand/cta";

const ICONS: LucideIcon[] = [Baby, Lock, Coins, ShieldCheck, Rocket];

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30 mask-fade-y" />
      <div className="container-page grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: intro + side CTA (sticky) */}
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <Kicker>FAQ</Kicker>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              Questions, <span className="text-gradient">answered.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-ink-2">
              Everything parents ask before joining. Still unsure? We&apos;re one
              message away.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-soft ring-1 ring-border">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                <MessageCircleQuestion className="size-6" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-ink">Still have a question?</p>
                <p className="mt-1 text-sm text-ink-2">
                  Join the waitlist and our team will personally help you get set up.
                </p>
              </div>
              <GetEarlyAccess className="w-full">Join the waitlist</GetEarlyAccess>
            </div>
          </Reveal>
        </div>

        {/* Right: accordion cards */}
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-3xl border border-border bg-card px-2 shadow-soft transition-colors data-[state=open]:ring-2 data-[state=open]:ring-brand/25"
                >
                  <AccordionTrigger className="items-center gap-4 px-4 py-5 text-left hover:no-underline">
                    <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand-deep">
                      <Icon className="size-5" />
                    </span>
                    <span className="flex-1 text-base font-bold text-ink sm:text-lg">{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pl-[4.5rem] text-[15px] leading-relaxed text-ink-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
