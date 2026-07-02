import Link from "next/link";
import Image from "next/image";
import { Mail, ShieldCheck, MailX, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";
import { NAV_LINKS, PALS } from "@/lib/data";
import { PalAvatar } from "@/components/brand/pal-avatar";

const MORE_LINKS = [
  { label: "For Schools", href: "/schools" },
  { label: "Rewards economy", href: "/rewards" },
  { label: "Get Early Access", href: "/#get-started" },
];

const TRUST = [
  { icon: MailX, label: "No spam, ever" },
  { icon: ShieldCheck, label: "Bank-grade privacy" },
  { icon: MapPin, label: "Made in Australia" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white/70"
      style={{ backgroundColor: "#0a0d0b" }}
    >
      <div className="absolute inset-0 bg-mesh opacity-[0.12]" />

      <div className="container-page relative py-16">
        {/* top band */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* brand */}
          <div className="flex flex-col gap-6">
            <Image
              src="/brainpal_logo.svg"
              alt="BrainPal"
              width={190}
              height={54}
              className="h-11 w-auto"
            />
            <p className="max-w-xs text-[15px] leading-relaxed text-white/55">
              The AI bank young people grow up with — money, learning and safety in
              one trusted family of companions.
            </p>

            {/* PAL showcase */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                Meet the PALs
              </p>
              <div className="flex flex-wrap gap-2.5">
                {PALS.map((pal) => (
                  <span
                    key={pal.key}
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 py-1.5 pl-1.5 pr-3.5 ring-1 ring-white/10"
                  >
                    <PalAvatar palKey={pal.key} size="sm" glossy={false} className="size-7 rounded-full shadow-none" />
                    <span className="text-xs font-semibold text-white/80">{pal.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* explore */}
          <nav className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Explore</p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* more + contact */}
          <div className="flex flex-col gap-5">
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">More</p>
              {MORE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
            <a
              href="mailto:hello@brainpal.com.au"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <Mail className="size-4 text-lime" /> hello@brainpal.com.au
            </a>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 sm:flex-row sm:p-10">
          <div>
            <p className="font-display text-2xl font-bold text-white sm:text-3xl">
              Give your child a companion that grows with them.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
              {TRUST.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2">
                  <Icon className="size-4 text-lime" /> {label}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/#get-started"
            className="sheen group inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full px-8 text-base font-bold text-ink shadow-pop transition-transform duration-300 hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--grad-lime)" }}
          >
            Get Early Access
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} BrainPal Pty Ltd. All rights reserved.</p>
          <p className="text-white/40">Money, learning &amp; safety — in one brain.</p>
        </div>
      </div>

      {/* brand watermark */}
      <div aria-hidden className="pointer-events-none relative -mt-4 flex justify-center overflow-hidden">
        <span className="translate-y-1/3 select-none font-display text-[26vw] font-extrabold leading-none tracking-tight text-white/[0.03]">
          BrainPal
        </span>
      </div>
    </footer>
  );
}
