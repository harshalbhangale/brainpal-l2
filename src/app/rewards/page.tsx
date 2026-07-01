import type { Metadata } from "next";
import Link from "next/link";
import {
  ListChecks,
  PiggyBank,
  GraduationCap,
  Apple,
  Target,
  TrendingUp,
  Gift,
  CreditCard,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Kicker } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { GetEarlyAccess } from "@/components/brand/cta";
import { Orb } from "@/components/brand/illustrations";
import { BrainCoin } from "@/components/brand/scenes";

export const metadata: Metadata = {
  title: "Rewards economy — BrainCoins explained",
  description:
    "The full BrainCoins breakdown: 100 BrainCoins = $1 of real, parent-approved spending power. Earn by saving, doing chores, studying and choosing well.",
};

const EARN = [
  { icon: ListChecks, title: "Complete a chore", coins: "+50–200" },
  { icon: PiggyBank, title: "7-day savings streak", coins: "+100" },
  { icon: GraduationCap, title: "Ace a study interview", coins: "+75" },
  { icon: Apple, title: "Scan the healthier pick", coins: "+20" },
  { icon: Target, title: "Reach a savings goal", coins: "+250" },
];

const REDEEM = [
  { icon: TrendingUp, title: "Savings boosts", body: "Top up a goal and watch compound interest do the rest." },
  { icon: Gift, title: "Real-world rewards", body: "Parent-approved treats, experiences and perks." },
  { icon: CreditCard, title: "Spending power", body: "Convert to real balance on a parent-controlled card." },
];

export default function RewardsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="absolute inset-0 -z-10 bg-dots opacity-40 mask-fade-y" />
          <Orb className="-left-20 top-10 size-[420px]" color="var(--tutor)" opacity={0.16} />
          <Orb className="right-[-8%] top-24 size-[360px]" color="var(--brand)" opacity={0.18} />

          <div className="container-page flex flex-col items-center gap-6 text-center">
            <Reveal>
              <Kicker>Rewards economy</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                <span className="text-gradient">BrainCoins,</span> explained.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The homepage only needs the loop. Here&apos;s the full economy —
                how kids earn, what coins are worth, and how they turn effort into
                real, parent-approved spending power.
              </p>
            </Reveal>

            {/* conversion highlight */}
            <Reveal delay={0.15} className="mt-4 w-full max-w-xl">
              <div className="flex items-center justify-center gap-4 rounded-[2rem] bg-ink px-8 py-8 text-white shadow-soft-lg sm:gap-6">
                <span className="inline-flex items-center gap-2 font-display text-4xl font-extrabold sm:text-5xl">
                  100 <BrainCoin size={40} />
                </span>
                <span className="text-2xl font-bold text-white/50">=</span>
                <span className="font-display text-4xl font-extrabold text-brand-bright sm:text-5xl">$1</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                100 BrainCoins = $1 in real, parent-approved spending power.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-8">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Ways to earn</h2>
            </Reveal>
            <RevealStagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" amount={0.1}>
              {EARN.map(({ icon: Icon, title, coins }) => (
                <RevealItem key={title}>
                  <div className="flex items-center justify-between gap-4 rounded-2xl bg-card p-5 shadow-soft ring-1 ring-border">
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand">
                        <Icon className="size-5" />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{title}</span>
                    </div>
                    <span className="shrink-0 rounded-full bg-tutor-soft px-3 py-1 font-mono text-sm font-bold text-tutor">
                      {coins}
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        <section className="py-12">
          <div className="container-page">
            <Reveal>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Ways to redeem</h2>
            </Reveal>
            <RevealStagger className="mt-6 grid gap-5 md:grid-cols-3" amount={0.1}>
              {REDEEM.map(({ icon: Icon, title, body }) => (
                <RevealItem key={title}>
                  <div className="flex h-full flex-col gap-3 rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1">
                    <span className="grid size-12 place-items-center rounded-2xl bg-money-soft text-money">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{title}</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>

            <Reveal delay={0.1} className="mt-10">
              <div className="flex flex-col items-center gap-4 rounded-3xl bg-brand-soft/60 p-6 text-center ring-1 ring-brand/15 sm:flex-row sm:text-left">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white">
                  <ShieldCheck className="size-6" />
                </span>
                <p className="flex-1 text-[15px] leading-relaxed text-foreground">
                  <span className="font-bold">Always under parent authority.</span>{" "}
                  Coins are earned automatically, but every conversion to real
                  money needs a parent&apos;s approval.
                </p>
                <GetEarlyAccess>Get Early Access</GetEarlyAccess>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-soft transition-all hover:-translate-y-0.5"
              >
                <ArrowLeft className="size-4" />
                Back to home
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
