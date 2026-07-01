/**
 * Animation utility constants for consistent motion design across the application.
 * These map to the custom animations defined in tailwind.config.ts and globals.css.
 */

/** Base animation classes */
export const animations = {
  fadeIn: "animate-fadeIn",
  slideUp: "animate-slideUp",
  slideDown: "animate-slideDown",
  scaleIn: "animate-scaleIn",
  float: "animate-float",
  pulseGlow: "animate-pulse-glow",
} as const;

/** Stagger delay classes for sequential element animations */
export const staggerDelay = {
  none: "delay-0",
  1: "delay-[100ms]",
  2: "delay-[200ms]",
  3: "delay-[300ms]",
  4: "delay-[400ms]",
  5: "delay-[500ms]",
  6: "delay-[600ms]",
  7: "delay-[700ms]",
  8: "delay-[800ms]",
} as const;

/** Common animation combinations */
export const animationPresets = {
  /** Fade in and slide up - good for content sections */
  heroEntry: "opacity-0 animate-slideUp",
  /** Scale in - good for cards and modals */
  cardEntry: "opacity-0 animate-scaleIn",
  /** Fade in - subtle entrance for supporting elements */
  subtleEntry: "opacity-0 animate-fadeIn",
  /** Float - for decorative/accent elements */
  floating: "animate-float",
  /** Pulse glow - for CTA buttons and highlights */
  glowing: "animate-pulse-glow",
} as const;

/** Helper to create staggered animation classes for a list of elements */
export function getStaggerClass(index: number, baseAnimation: string = "animate-slideUp"): string {
  const delay = index * 100;
  return `opacity-0 ${baseAnimation} delay-[${delay}ms]`;
}
