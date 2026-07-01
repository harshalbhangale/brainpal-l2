import { cartoonAvatar, type FaceStyle } from "@/lib/avatar";
import { cn } from "@/lib/utils";

/** A friendly cartoon face (DiceBear) — emoji-free, deterministic by seed. */
export function Face({
  seed,
  style,
  className,
  alt = "",
}: {
  seed: string;
  style?: FaceStyle;
  className?: string;
  alt?: string;
}) {
  const src = cartoonAvatar(seed, style);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={cn("rounded-full object-cover", className)}
      loading="lazy"
      decoding="async"
    />
  );
}
