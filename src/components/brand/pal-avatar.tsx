import { Wallet, GraduationCap, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PalKey } from "@/lib/data";

const PAL_META: Record<
  PalKey,
  { icon: LucideIcon; color: string; name: string; onDark: boolean }
> = {
  money: { icon: Wallet, color: "var(--money)", name: "MoneyPal", onDark: false },
  tutor: { icon: GraduationCap, color: "var(--tutor)", name: "TutorPal", onDark: true },
  parent: { icon: Users, color: "var(--parent)", name: "ParentPal", onDark: false },
};

const SIZES = {
  sm: { box: "size-9 rounded-xl", icon: "size-4" },
  md: { box: "size-12 rounded-2xl", icon: "size-5" },
  lg: { box: "size-16 rounded-[1.25rem]", icon: "size-7" },
  xl: { box: "size-20 rounded-3xl", icon: "size-9" },
};

export function PalAvatar({
  palKey,
  size = "md",
  className,
  ring = false,
  glossy = true,
}: {
  palKey: PalKey;
  size?: keyof typeof SIZES;
  className?: string;
  ring?: boolean;
  glossy?: boolean;
}) {
  const meta = PAL_META[palKey];
  const Icon = meta.icon;
  const s = SIZES[size];
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center shadow-lg",
        s.box,
        meta.onDark ? "text-white" : "text-ink",
        ring && "animate-pulse-ring",
        className
      )}
      style={{
        background: `linear-gradient(145deg, color-mix(in srgb, ${meta.color} 82%, white) 0%, ${meta.color} 55%, color-mix(in srgb, ${meta.color} 74%, black) 100%)`,
        boxShadow: `0 10px 30px -10px color-mix(in srgb, ${meta.color} 65%, transparent)`,
      }}
      role="img"
      aria-label={meta.name}
    >
      {glossy && (
        <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/45 to-transparent [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
      )}
      <Icon className={cn("relative drop-shadow-sm", s.icon)} strokeWidth={2.4} />
    </span>
  );
}

export { PAL_META };
