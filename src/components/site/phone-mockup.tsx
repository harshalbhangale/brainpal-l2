import { BrandLogo } from "@/components/brand/logo";
import { BrainCoin } from "@/components/brand/scenes";
import { Face } from "@/components/brand/face";
import { DeviceFrame } from "@/components/brand/device-frame";
import { Home, MessageCircle, GraduationCap, Gift, Wallet, TrendingUp, Blocks } from "lucide-react";
import { cn } from "@/lib/utils";

/** Oliver's home screen — the content rendered inside the iPhone frame. */
export function PhoneScreen() {
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-gradient-to-b from-white to-lime-soft/50 px-4 pb-4 pt-[10%]">
      {/* header */}
      <div className="flex items-center justify-between">
        <BrandLogo size="sm" />
        <Face seed="Oliver" className="size-8 ring-1 ring-black/5" alt="Oliver" />
      </div>

      <div>
        <p className="text-[11px] font-medium text-ink-3">Good morning,</p>
        <p className="font-display text-lg font-bold text-ink">Oliver</p>
      </div>

      {/* savings card */}
      <div className="relative overflow-hidden rounded-[1.3rem] p-4 text-white" style={{ backgroundImage: "var(--grad-ink)" }}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Your savings</span>
          <TrendingUp className="size-4 text-lime" />
        </div>
        <p className="mt-1 font-display text-[1.7rem] font-extrabold tracking-tight tabular-nums" style={{ color: "var(--lime)" }}>
          $30.00
        </p>
        <div className="mt-2 flex items-end gap-1">
          {[8, 12, 9, 16, 13, 20, 24].map((h, i) => (
            <span key={i} className="w-1.5 rounded-full" style={{ height: h, background: i === 6 ? "var(--lime)" : "rgba(255,255,255,0.28)" }} />
          ))}
          <span className="ml-auto text-[10px] font-bold text-lime">+$5 this week</span>
        </div>
      </div>

      {/* goal card */}
      <div className="rounded-[1.1rem] bg-white p-3 shadow-soft ring-1 ring-border">
        <div className="flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 font-bold text-ink">
            <Blocks className="size-3.5 text-tutor" /> LEGO goal
          </span>
          <span className="font-mono text-ink-3">$30 / $45</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[66%] rounded-full" style={{ backgroundImage: "var(--grad-lime)" }} />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-[10px] text-ink-3">$15 to go</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-lime-soft px-2 py-0.5 text-[10px] font-bold text-money-ink">
            <BrainCoin size={12} spin={false} /> +50
          </span>
        </div>
      </div>

      {/* chat bubble from MoneyPal */}
      <div className="flex items-end gap-2">
        <span className="grid size-6 shrink-0 place-items-center rounded-full text-ink" style={{ backgroundImage: "var(--grad-lime)" }}>
          <Wallet className="size-3" strokeWidth={2.5} />
        </span>
        <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-1.5 text-[11px] leading-snug text-ink shadow-soft ring-1 ring-border">
          Let&apos;s save for that LEGO — you&apos;re 66% there!
        </div>
      </div>

      {/* tab bar */}
      <div className="mt-auto flex items-center justify-between rounded-2xl bg-white px-4 py-2.5 shadow-soft ring-1 ring-border">
        {[
          { icon: Home, active: true },
          { icon: MessageCircle, active: false },
          { icon: GraduationCap, active: false },
          { icon: Gift, active: false },
        ].map(({ icon: Icon, active }, i) => (
          <span
            key={i}
            className={cn("grid size-8 place-items-center rounded-xl", active ? "text-ink" : "text-ink-3")}
            style={active ? { backgroundImage: "var(--grad-lime)" } : undefined}
          >
            <Icon className="size-4" strokeWidth={2.4} />
          </span>
        ))}
      </div>
    </div>
  );
}

/** The full phone: Oliver's screen inside the real iPhone Pro frame. */
export function PhoneMockup({ className, variant = "silver", priority }: { className?: string; variant?: "silver" | "orange"; priority?: boolean }) {
  return (
    <DeviceFrame variant={variant} priority={priority} className={cn("w-[300px]", className)}>
      <PhoneScreen />
    </DeviceFrame>
  );
}
