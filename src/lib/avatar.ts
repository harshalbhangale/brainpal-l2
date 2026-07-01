import { createAvatar, type Style } from "@dicebear/core";
import { bigSmile, adventurer, micah, openPeeps } from "@dicebear/collection";

/**
 * Deterministic, offline cartoon faces — the same DiceBear approach the real
 * BrainPal app uses (bigSmile default, pastel disc). A stable seed always
 * produces the same friendly face. Runs on the server (data-URI output).
 */
export type FaceStyle = "bigSmile" | "adventurer" | "micah" | "openPeeps";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const STYLES: Record<FaceStyle, Style<any>> = { bigSmile, adventurer, micah, openPeeps };

const PASTELS = ["ffd9e3", "d6f5e3", "fff0c9", "e7ddff", "ffe1cc", "d9ecff", "f6d9ff", "d7f0f5"];

const HAPPY: Partial<Record<FaceStyle, Record<string, unknown>>> = {
  micah: { mouth: ["smile", "laughing"] },
  openPeeps: { face: ["smile", "smileBig", "cheeky"] },
  bigSmile: { mouth: ["openedSmile", "gapSmile"] },
};

function hash(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

const cache = new Map<string, string>();

/** A cute cartoon avatar data-URI for the given seed + optional style. */
export function cartoonAvatar(seed: string, style: FaceStyle = "bigSmile"): string {
  const key = `${style}::${seed}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const bg = PASTELS[hash(seed) % PASTELS.length];
  const base = {
    seed,
    radius: 50,
    scale: 90,
    backgroundColor: [bg],
    backgroundType: ["solid"] as const,
  };
  let uri: string;
  try {
    uri = createAvatar(STYLES[style], { ...base, ...(HAPPY[style] ?? {}) }).toDataUri();
  } catch {
    uri = createAvatar(STYLES[style], base).toDataUri();
  }
  cache.set(key, uri);
  return uri;
}
