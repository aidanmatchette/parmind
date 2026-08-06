import type { AdvantageMissReason } from "./AdvantageMissReason";

export type HoleResult = {
  holeNumber: number;
  par: number;
  score: number;
  putts: number;
  penalties: number;
  reachedAdvantageZone: boolean;
  advantageMissReason: AdvantageMissReason | null;
};