import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  Mic,
  MessageCircle,
  ChevronRight,
  Check,
  Flame,
  Bookmark,
  Upload,
  Camera,
} from "lucide-react";
import { DeviceFrame } from "@/components/brand/device-frame";
import { BrainCoin } from "@/components/brand/scenes";
import { Kicker } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { Orb } from "@/components/brand/illustrations";
import { cn } from "@/lib/utils";

/* ── the four ways TutorPal helps you learn (mirrors the real app hub) ──── */
type Mode = { icon: LucideIcon; title: string; sub: string; grad: string };
const MODES: Mode[] = [
  { icon: BookOpen, title: "Study Concepts", sub: "Swipeable flashcards with real spaced repetition", grad: "linear-gradient(135deg,#a99bff,#6f5cf0)" },
  { icon: Sparkles, title: "Take a Quiz", sub: "Auto-generated questions, scored instantly", grad: "linear-gradient(135deg,#34e89e,#0f9d58)" },
  { icon: Mic, title: "AI Interview", sub: "Explain concepts out loud to a live voice tutor", grad: "linear-gradient(135deg,#ffd976,#f0a032)" },
  { icon: MessageCircle, title: "Chat with the lesson", sub: "Ask anything — the tutor already knows the topic", grad: "linear-gradient(135deg,#7dd3fc,#38bdf8)" },
];

/* ── small progress ring ─────────────────────────────────────────────── */
function ProgressRing({ pct, size = 56, stroke = 6 }: { pct: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e7e9ee" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--tutor)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (pct / 100) * c}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-[12px] font-extrabold text-ink">{pct}%</span>
    </div>
  );
}

/* ── phone: the TutorPal Subject Hub ─────────────────────────────────── */
function SubjectHubScreen() {
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-gradient-to-b from-white to-[#f1efff] px-4 pb-4 pt-[14%]">
      {/* header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-lg font-bold leading-none text-ink">
            Tutor<span className="text-tutor">Pal</span>
          </p>
          <p className="mt-1 text-[11px] text-ink-3">Keep your brain sharp</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-tutor-soft px-2.5 py-1 text-[11px] font-bold text-tutor">
          <Flame className="size-3.5" /> 6
        </span>
      </div>

      {/* subject progress */}
      <div className="flex items-center gap-3 rounded-[1.3rem] bg-white p-3 shadow-soft ring-1 ring-border">
        <ProgressRing pct={60} />
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-bold text-ink">Science</p>
          <p className="text-[11px] text-ink-3">12 concepts · 5 to review</p>
        </div>
        <span className="rounded-full bg-tutor-soft px-2 py-0.5 text-[10px] font-bold text-tutor">Grade 6</span>
      </div>

      <p className="mt-1 text-[10px] font-extrabold uppercase tracking-wider text-ink-3">What would you like to do?</p>

      {/* the four modes */}
      <div className="flex flex-col gap-2">
        {MODES.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.title} className="flex items-center gap-2.5 rounded-2xl bg-white p-2.5 shadow-soft ring-1 ring-border">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl text-white" style={{ backgroundImage: m.grad }}>
                <Icon className="size-[18px]" strokeWidth={2.2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[12px] font-bold text-ink">{m.title}</p>
                <p className="truncate text-[10px] text-ink-3">{m.sub}</p>
              </div>
              <ChevronRight className="size-4 shrink-0 text-ink-3" />
            </div>
          );
        })}
      </div>

      {/* materials */}
      <div className="mt-auto flex items-center gap-2 rounded-2xl bg-ink px-3 py-2.5">
        <Upload className="size-3.5 shrink-0 text-lime" />
        <p className="text-[10px] font-semibold text-white/80">Upload a PDF, photo or notes — TutorPal builds the deck.</p>
      </div>
    </div>
  );
}

/* ── preview card: live voice AI interview (dark, like the real app) ───── */
function VoiceInterviewCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[1.75rem] p-5 text-white shadow-soft-lg ring-1 ring-white/10" style={{ backgroundImage: "var(--grad-ink)" }}>
      <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full blur-3xl" style={{ background: "color-mix(in srgb, var(--tutor) 45%, transparent)" }} />
      <div className="relative flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white/90 ring-1 ring-white/15">
          <Mic className="size-3.5" /> AI Interview
        </span>
        <span className="font-mono text-[11px] text-white/50">0:42</span>
      </div>

      {/* mic + listening */}
      <div className="relative my-4 flex flex-col items-center gap-3">
        <span className="relative grid size-16 place-items-center rounded-full text-white" style={{ backgroundImage: "var(--grad-lime)" }}>
          <span aria-hidden className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ background: "var(--tutor)" }} />
          <Mic className="relative size-6 text-ink" strokeWidth={2.4} />
        </span>
        {/* equalizer */}
        <div className="flex h-6 items-end gap-1">
          {[0.5, 0.8, 0.4, 1, 0.6, 0.9, 0.45, 0.75].map((h, i) => (
            <span
              key={i}
              className="w-1 origin-bottom rounded-full bg-lime"
              style={{ height: `${h * 100}%`, animation: "soundbar 0.9s ease-in-out infinite", animationDelay: `${i * 0.09}s` }}
            />
          ))}
        </div>
        <span className="text-[11px] font-semibold text-white/60">Listening…</span>
      </div>

      {/* transcript */}
      <div className="relative space-y-2">
        <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2 text-[12px] leading-snug ring-1 ring-white/10">
          Explain photosynthesis in your own words.
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2 text-[12px] font-medium leading-snug text-ink" style={{ backgroundImage: "var(--grad-lime)" }}>
          Plants take in sunlight and turn it into food and oxygen…
        </div>
      </div>

      <div className="relative mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-white/70">
        <BrainCoin size={14} spin={false} /> Scored out of 10 — earn Brains for a clear answer.
      </div>
    </div>
  );
}

/* ── preview card: a study flashcard ─────────────────────────────────── */
function FlashcardPreview() {
  return (
    <div className="flex flex-col rounded-[1.75rem] bg-card p-5 shadow-soft ring-1 ring-border">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-tutor">Concept · 3 / 5</span>
        <Bookmark className="size-4 text-tutor" />
      </div>
      <p className="mt-3 font-display text-lg font-bold leading-snug text-ink">
        What gas do plants release during photosynthesis?
      </p>
      <div className="my-4 h-px bg-border" />
      <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink-3">Explanation</span>
      <p className="mt-1 text-[13px] leading-relaxed text-ink-2">
        Oxygen — released as a by-product when plants convert light, water and CO₂ into glucose.
      </p>
      <div className="mt-4 flex gap-2">
        <span className="flex-1 rounded-full bg-secondary py-2 text-center text-[12px] font-bold text-ink-2">Forgot</span>
        <span className="flex-[1.4] rounded-full py-2 text-center text-[12px] font-extrabold text-ink shadow-pop" style={{ backgroundImage: "var(--grad-lime)" }}>Got it</span>
        <span className="flex-1 rounded-full bg-secondary py-2 text-center text-[12px] font-bold text-ink-2">Easy</span>
      </div>
    </div>
  );
}

/* ── preview card: an auto-generated quiz ────────────────────────────── */
function QuizPreview() {
  const options = [
    { t: "Oxygen", correct: true },
    { t: "Nitrogen", correct: false },
    { t: "Hydrogen", correct: false },
  ];
  return (
    <div className="flex flex-col rounded-[1.75rem] bg-card p-5 shadow-soft ring-1 ring-border">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-ink-3">Quiz · Science</span>
        <span className="font-mono text-[11px] text-ink-3">3 / 5</span>
      </div>
      <p className="mt-3 text-[15px] font-bold leading-snug text-ink">Which gas do plants release?</p>
      <div className="mt-3 flex flex-col gap-2">
        {options.map((o) => (
          <span
            key={o.t}
            className={cn(
              "flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-[13px] font-semibold",
              o.correct ? "text-ink" : "bg-secondary text-ink-2"
            )}
            style={o.correct ? { backgroundImage: "var(--grad-green)", color: "white" } : undefined}
          >
            {o.correct ? <Check className="size-4 shrink-0" /> : <span className="size-4 shrink-0" />}
            {o.t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-lime-soft px-3 py-2">
        <span className="text-[12px] font-bold text-money-ink">Nice — 80% so far</span>
        <span className="inline-flex items-center gap-1 text-[12px] font-bold text-money-ink">
          <BrainCoin size={14} spin={false} /> +40
        </span>
      </div>
    </div>
  );
}

/* ── section ─────────────────────────────────────────────────────────── */
export function TutorPal() {
  return (
    <section id="tutorpal" className="relative overflow-hidden py-20 sm:py-28">
      <Orb className="right-[-8%] top-10 size-[420px]" color="var(--tutor)" opacity={0.16} />
      <div className="absolute inset-0 -z-10 bg-dots opacity-30 mask-fade-y" />

      <div className="container-page">
        {/* header + phone */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div>
            <Kicker>TutorPal · live now</Kicker>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              Every subject, turned into{" "}
              <span className="text-gradient">flashcards, quizzes and live interviews.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-2">
              Pick a subject — or upload a syllabus, a photo of the textbook, or your
              notes. TutorPal builds the study deck, then helps in whatever way lands:
              reading, testing, or talking it through out loud.
            </p>

            <RevealStagger className="mt-8 flex flex-col gap-3" amount={0.15}>
              {MODES.map((m) => {
                const Icon = m.icon;
                return (
                  <RevealItem key={m.title}>
                    <div className="flex items-center gap-4 rounded-2xl bg-card p-3.5 shadow-soft ring-1 ring-border">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl text-white" style={{ backgroundImage: m.grad }}>
                        <Icon className="size-5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-ink">{m.title}</p>
                        <p className="text-[13px] text-ink-3">{m.sub}</p>
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>

          {/* phone */}
          <Reveal className="justify-self-center" delay={0.1}>
            <div className="relative w-[300px]">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 m-auto size-[340px] rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--tutor) 42%, transparent), transparent 70%)" }}
              />
              <DeviceFrame variant="silver">
                <SubjectHubScreen />
              </DeviceFrame>
            </div>
          </Reveal>
        </div>

        {/* "in action" — real product previews */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-tutor">
              <GraduationCap className="size-4" /> TutorPal in action
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <RevealStagger className="grid gap-5 md:grid-cols-3" amount={0.1}>
            <RevealItem>
              <VoiceInterviewCard />
            </RevealItem>
            <RevealItem>
              <FlashcardPreview />
            </RevealItem>
            <RevealItem>
              <QuizPreview />
            </RevealItem>
          </RevealStagger>

          <Reveal delay={0.1} className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-tutor-soft px-4 py-2 text-sm font-semibold text-tutor">
              <Camera className="size-4" /> Voice-first · works from any subject, any syllabus
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
