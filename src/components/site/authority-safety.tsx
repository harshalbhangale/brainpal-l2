import { KeyRound, ShieldCheck, ScanEye, Ban } from "lucide-react";
import { SectionHeading } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { ApprovalDemo } from "./approval-demo";

const TRUST = [
  { icon: KeyRound, label: "Permission-based", body: "Nothing happens without a parent's yes." },
  { icon: ShieldCheck, label: "Bank-grade security", body: "The same protection your money deserves." },
  { icon: ScanEye, label: "AI moderation", body: "Quietly watching for worries, not screens." },
  { icon: Ban, label: "No ads, ever", body: "No selling, no targeting, no exceptions." },
];

export function AuthoritySafety() {
  return (
    <section id="trust" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          kicker="Built for parents. Built on safety & privacy."
          title="Authority without hovering."
          description="Approve a purchase from the kitchen. Spot a worry before it grows. Know your child is safe — without watching their screen."
        />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <ApprovalDemo />
          </Reveal>

          <RevealStagger className="grid gap-4 sm:grid-cols-2">
            {TRUST.map(({ icon: Icon, label, body }) => (
              <RevealItem key={label}>
                <div className="flex h-full flex-col gap-3 rounded-3xl bg-card p-6 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-bold text-ink">{label}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        {/* one-liner */}
        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-10 text-center shadow-soft-lg sm:py-12">
            <div className="absolute inset-0 -z-0 bg-dots opacity-10" />
            <p className="relative font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Your child is the user —{" "}
              <span className="text-gradient">never the product.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
