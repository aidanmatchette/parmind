import type { HoleResult } from "./HoleResult";

export type Round = {
  id: string;
  courseName: string | null;
  teeName: string | null;
  currentHoleNumber: number;
  holes: HoleResult[];
};