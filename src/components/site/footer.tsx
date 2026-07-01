import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { BrandLogo } from "@/components/brand/logo";
import { PalAvatar } from "@/components/brand/pal-avatar";
import type { PalKey } from "@/lib/data";

const MORE_LINKS = [
  { label: "For Schools", href: "/schools" },
  { label: "Rewards economy", href: "/rewards" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white/70"
      style={{ backgroundColor: "oklch(0.17 0.025 162)" }}
    >
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div className="flex flex-col gap-5">
            <BrandLogo tone="dark" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              The AI bank young people grow up with — money, learning and safety
              in one trusted family of PALs.
            </p>
            <div className="flex -space-x-2">
              {(["money", "study", "tutor", "parent"] as PalKey[]).map((k) => (
                <PalAvatar
                  key={k}
                  palKey={k}
                  size="sm"
                  glossy={false}
                  className="ring-2"
                  // ring color matches footer bg
                />
              ))}
            </div>
          </div>

          {/* explore */}
          <nav className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Explore
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* more */}
          <nav className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              More
            </p>
            {MORE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#get-started"
              className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
            >
              Get Early Access
            </Link>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} BrainPal. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span>Bank-grade privacy</span>
            <span className="size-1 rounded-full bg-white/30" />
            <span>Made in Australia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
