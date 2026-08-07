export const ROUND_FORMATS = [
  "18-holes",
  "front-9",
  "back-9",
] as const;

export type RoundFormat =
  (typeof ROUND_FORMATS)[number];