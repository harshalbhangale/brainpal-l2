import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Renders app-screen content inside the real iPhone Pro frame image.
 * The frame PNG has a transparent screen cutout; content sits behind it,
 * inset to the measured screen rectangle (~4.4% sides, ~2.3% top/bottom).
 */
export function DeviceFrame({
  children,
  variant = "silver",
  className,
  priority,
}: {
  children: ReactNode;
  variant?: "silver" | "orange";
  className?: string;
  priority?: boolean;
}) {
  const src = variant === "orange" ? "/iPhone_Pro_orange.png" : "/iPhone_Pro_Silver.png";
  return (
    <div className={cn("relative select-none", className)} style={{ aspectRatio: "440 / 916" }}>
      {/* app screen (behind the frame) */}
      <div
        className="absolute overflow-hidden bg-white"
        style={{
          left: "4.3%",
          right: "4.5%",
          top: "2.3%",
          bottom: "2.4%",
          borderRadius: "12% / 5.8%",
        }}
      >
        {children}
      </div>
      {/* iPhone frame overlay */}
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        priority={priority}
        sizes="(max-width: 768px) 80vw, 340px"
        className="pointer-events-none object-contain"
      />
    </div>
  );
}
