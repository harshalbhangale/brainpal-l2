import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Kicker } from "@/components/brand/section-heading";

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

export function LegalPage({
  kicker,
  title,
  updated,
  intro,
  sections,
}: {
  kicker: string;
  title: string;
  updated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
          <div className="absolute inset-0 -z-10 bg-grid opacity-60 mask-fade-y" />
          <div className="container-page flex max-w-3xl flex-col items-start gap-5">
            <Kicker>{kicker}</Kicker>
            <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl">{title}</h1>
            <p className="text-sm text-muted-foreground">Last updated {updated}</p>
            <div className="text-lg leading-relaxed text-muted-foreground">{intro}</div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page max-w-3xl">
            <nav className="mb-10 rounded-3xl bg-card p-6 shadow-soft ring-1 ring-border">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Contents
              </p>
              <ol className="grid gap-1.5 text-[15px] sm:grid-cols-2">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-foreground/80 hover:text-foreground hover:underline">
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="flex flex-col gap-10">
              {sections.map((s, i) => (
                <article key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="mb-3 text-2xl font-bold">
                    {i + 1}. {s.title}
                  </h2>
                  <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/80 [&_a]:font-semibold [&_a]:text-brand-deep [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">
                    {s.body}
                  </div>
                </article>
              ))}
            </div>

            <Link
              href="/"
              className="mt-14 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-6 text-sm font-semibold text-foreground shadow-soft transition-all hover:-translate-y-0.5"
            >
              <ArrowLeft className="size-4" />
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
