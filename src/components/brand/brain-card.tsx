import Image from "next/image";
import { Nfc } from "lucide-react";
import { cn } from "@/lib/utils";

/** A Captain-America-style concentric shield emblem (emoji-free). */
function ShieldEmblem({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block aspect-square", className)} aria-hidden>
      <span className="absolute inset-0 rounded-full" style={{ background: "#b91c1c" }} />
      <span className="absolute inset-[13%] rounded-full" style={{ background: "#f8fafc" }} />
      <span className="absolute inset-[28%] rounded-full" style={{ background: "#c62828" }} />
      <span className="absolute inset-[44%] rounded-full" style={{ background: "#1d4ed8" }} />
      {/* five-point star */}
      <svg viewBox="0 0 24 24" className="absolute inset-[46%] m-auto" fill="#f8fafc" aria-hidden>
        <path d="M12 2l2.9 6.26L21.5 9l-4.9 4.6L18 20.5 12 17l-6 3.5 1.4-6.9L2.5 9l6.6-.74L12 2z" />
      </svg>
    </span>
  );
}

/**
 * The BrainPal "Captain" hero card — a premium Visa debit face in the
 * navy→blue→red hero colourway, carrying the real BrainPal logo.
 * Presentational only.
 */
export function BrainCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-[1.586] w-full flex-col overflow-hidden rounded-2xl p-4 text-white shadow-2xl ring-1 ring-white/15",
        className
      )}
      style={{ backgroundImage: "linear-gradient(135deg,#1e3a8a 0%,#2563eb 42%,#b91c1c 100%)" }}
    >
      {/* sheen + shield watermark */}
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-white/0" />
      <ShieldEmblem className="pointer-events-none absolute -bottom-9 -right-7 w-40 opacity-[0.18]" />

      {/* top: logo + balance */}
      <div className="relative flex items-center justify-between">
        <Image src="/logo-white.png" alt="BrainPal" width={95} height={28} className="h-[22px] w-auto" />
        <span className="font-mono text-sm font-bold tracking-tight text-white/95">$30.00</span>
      </div>

      {/* chip + contactless */}
      <div className="relative mt-3.5 flex items-center gap-2.5">
        <span
          className="h-7 w-10 rounded-md"
          style={{ backgroundImage: "linear-gradient(135deg,#f4f7fb,#9aa3af)", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.22)" }}
        />
        <Nfc className="size-4 rotate-90 text-white/85" />
      </div>

      {/* card number */}
      <p className="relative mt-3 font-mono text-[15px] leading-none tracking-[0.18em] text-white/95">
        ••••&nbsp;&nbsp;••••&nbsp;&nbsp;••••&nbsp;&nbsp;4921
      </p>

      {/* bottom: holder + expiry + VISA */}
      <div className="relative mt-auto flex items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/55">Card holder</p>
          <p className="truncate text-[13px] font-bold tracking-wide">OLIVER H.</p>
        </div>
        <div className="text-right leading-tight">
          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/55">Thru</p>
          <p className="text-[11px] font-bold">09/30</p>
        </div>
        <span className="text-lg font-black italic leading-none tracking-tight">VISA</span>
      </div>
    </div>
  );
}
