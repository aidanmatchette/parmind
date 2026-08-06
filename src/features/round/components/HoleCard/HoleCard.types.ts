import type { HoleResult } from "@/domain/round";

export type HoleCardProps = {
  holeNumber: number;
  par: number;
  onSave: (result: HoleResult) => void;
};