import { KeyRound, ShieldCheck, ScanEye, Ban, Check, X, Bell, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";

const TRUST = [
  { icon: KeyRound, label: "Permission-based", body: "Nothing happens without a parent's yes." },
  { icon: ShieldCheck, label: "Bank-grade security", body: "The same protection your money deserves." },
  { icon: ScanEye, label: "AI moderation", body: "Quietly watching for worries, not screens." },
  { icon: Ban, label: "No ads, ever", body: "No selling, no targeting, no exceptions." },
];

function ApprovalMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="rounded-3xl bg-card p-5 shadow-soft-lg ring-1 ring-border">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Bell className="size-4 text-brand" />
          BrainPal · now
        </div>
        <p className="mt-3 font-display text-lg font-bold text-foreground">
          Approve Oliver&apos;s purchase?
        </p>
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-muted/50 p-3 ring-1 ring-border">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-study-soft text-study">
              <BookOpen className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">The Book Store</p>
              <p className="text-xs text-muted-foreground">Science revision set</p>
            </div>
          </div>
          <span className="font-mono text-base font-bold text-foreground">$12</span>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full py-2.5 text-sm font-bold text-ink shadow-pop" style={{ backgroundImage: "var(--grad-lime)" }}>
            <Check className="size-4" strokeWidth={3} /> Approve
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-muted py-2.5 text-sm font-semibold text-muted-foreground">
            <X className="size-4" /> Not now
          </button>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-soft ring-1 ring-border">
        <span className="grid size-7 place-items-center rounded-full bg-brand-soft text-brand">
          <ShieldCheck className="size-4" />
        </span>
        <span className="text-xs font-semibold text-foreground">Approved from the kitchen</span>
      </div>
    </div>
  );
}

export function AuthoritySafety() {
  return (
    <section id="trust" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          kicker="Built for parents. Built on safety & privacy."
          title="Authority without hovering."
          description="Approve a purchase from the kitchen. Spot a worry before it grows. Know your child is safe — without watching their screen."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <ApprovalMock />
          </Reveal>

          <RevealStagger className="grid gap-4 sm:grid-cols-2" amount={0.15}>
            {TRUST.map(({ icon: Icon, label, body }) => (
              <RevealItem key={label}>
                <div className="flex h-full flex-col gap-3 rounded-3xl bg-card p-6 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1">
                  <span className="grid size-11 place-items-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">{label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
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
