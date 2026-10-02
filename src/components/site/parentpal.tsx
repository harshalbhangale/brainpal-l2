import Link from "next/link";
import { Mail, CalendarCheck, ListChecks, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/brand/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/brand/reveal";

const STEPS = [
  {
    icon: Mail,
    title: "Reads school emails",
    body: "From the senders you approve, using read-only Gmail access.",
  },
  {
    icon: ListChecks,
    title: "Tells you what to pay, sign and attend",
    body: "A short list of actions and dates instead of a crowded inbox.",
  },
  {
    icon: CalendarCheck,
    title: "Adds dates to Google Calendar",
    body: "Only once you tap Confirm. You can also ask about your inbox: “any important emails this week?”",
  },
];

export function ParentPal() {
  return (
    <section id="parentpal" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          kicker="ParentPal"
          title="School admin, handled."
          description="Connect your Google account and ParentPal reads school emails from the senders you approve, and the school calendars you choose. It turns them into a short list of what to pay, sign and attend, and can add dates to your Google Calendar once you tap Confirm."
        />

        <RevealStagger className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }) => (
            <RevealItem key={title}>
              <div className="flex h-full flex-col gap-3 rounded-3xl bg-card p-7 shadow-soft ring-1 ring-border">
                <span className="grid size-12 place-items-center rounded-2xl bg-parent-soft text-parent">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-1 text-lg font-bold text-foreground">{title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-8">
          <div className="flex flex-col gap-4 rounded-[2rem] bg-ink p-8 text-white shadow-soft-lg sm:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-white/10 text-lime">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="text-xl font-bold sm:text-2xl">Your data, your control.</h3>
            </div>
            <p className="max-w-3xl text-[15px] leading-relaxed text-white/75">
              BrainPal requests read-only access to Gmail and access to Google Calendar. We store
              short summaries only (never a copy of your mailbox), we never sell your data or use it
              for ads, and you can disconnect at any time, which deletes everything derived from your
              Google data.
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-white/60">
              BrainPal&rsquo;s use and transfer of information received from Google APIs adheres to
              the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white underline"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
            <Link
              href="/privacy"
              className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-lime"
            >
              Privacy Policy
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
