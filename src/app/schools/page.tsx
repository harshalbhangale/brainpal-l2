import type { Metadata } from "next";
import Link from "next/link";
import {
  Upload,
  UserSquare,
  Mic,
  BarChart3,
  ClipboardList,
  NotebookPen,
  ArrowLeft,
} from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Kicker } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";
import { GetEarlyAccess } from "@/components/brand/cta";
import { Orb } from "@/components/brand/illustrations";

export const metadata: Metadata = {
  title: "For Schools — the Classroom OS",
  description:
    "BrainPal for Schools: upload your curriculum, spin up teacher avatars, run live interview prep, and see class analytics — a Classroom OS built on the PALs.",
};

const FEATURES = [
  { icon: Upload, title: "Curriculum upload", body: "Drop in your syllabus and BrainPal aligns every lesson, quiz and prompt to it." },
  { icon: UserSquare, title: "Teacher avatars", body: "Your teachers, as AI companions — same voice and style, available after the bell." },
  { icon: Mic, title: "Interview prep", body: "Live five-minute oral quizzes that build recall and confidence, voice-first." },
  { icon: BarChart3, title: "Class analytics", body: "See exactly where the class struggles — before the test, not after." },
  { icon: ClipboardList, title: "Homework", body: "Set, track and auto-mark homework, with a lesson wrapped around every task." },
  { icon: NotebookPen, title: "Lesson plans", body: "Generate differentiated lesson plans straight from your uploaded curriculum." },
];

export default function SchoolsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="absolute inset-0 -z-10 bg-grid opacity-60 mask-fade-y" />
          <Orb className="-left-20 top-10 size-[420px]" color="var(--study)" opacity={0.16} />
          <Orb className="right-[-8%] top-24 size-[380px]" color="var(--brand)" opacity={0.16} />

          <div className="container-page flex flex-col items-center gap-6 text-center">
            <Reveal>
              <Kicker>For Schools</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                The <span className="text-gradient">Classroom OS</span> built on the PALs.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Everything BrainPal does for families, tuned for the classroom —
                curriculum upload, teacher avatars, interview prep, analytics,
                homework and lesson plans in one place.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <GetEarlyAccess size="lg">Book a school demo</GetEarlyAccess>
                <Link
                  href="/"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border bg-white px-8 text-base font-semibold text-foreground shadow-soft transition-all hover:-translate-y-0.5"
                >
                  <ArrowLeft className="size-4" />
                  Back to home
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page">
            <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" amount={0.1}>
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <RevealItem key={title}>
                  <div className="flex h-full flex-col gap-3 rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1">
                    <span className="grid size-12 place-items-center rounded-2xl bg-study-soft text-study">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">{title}</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
