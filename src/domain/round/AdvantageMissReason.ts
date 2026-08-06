export const ADVANTAGE_MISS_REASONS = [
  "strategy",
  "execution",
  "penalty",
  "hero-shot",
  "other",
] as const;

export type AdvantageMissReason =
  (typeof ADVANTAGE_MISS_REASONS)[number];