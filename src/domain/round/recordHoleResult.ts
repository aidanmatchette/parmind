import type { HoleResult } from "./HoleResult";
import type { Round } from "./Round";

export function recordHoleResult(
  round: Round,
  result: HoleResult,
): Round {
  const remainingHoles = round.holes.filter(
    (hole) => hole.holeNumber !== result.holeNumber,
  );

  return {
    ...round,
    currentHoleNumber: Math.min(result.holeNumber + 1, 18),
    holes: [...remainingHoles, result].sort(
      (a, b) => a.holeNumber - b.holeNumber,
    ),
  };
}