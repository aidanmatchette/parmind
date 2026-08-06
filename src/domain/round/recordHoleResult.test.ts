import { describe, expect, it } from "vitest";
import type { HoleResult } from "./HoleResult";
import type { Round } from "./Round";
import { recordHoleResult } from "./recordHoleResult";

describe("recordHoleResult", () => {
  const result: HoleResult = {
    holeNumber: 1,
    par: 4,
    score: 5,
    putts: 2,
    penalties: 0,
    reachedAdvantageZone: true,
    advantageMissReason: null,
  };

  it("records a hole and advances to the next hole", () => {
    const round: Round = {
      id: "round-1",
      courseName: null,
      teeName: null,
      currentHoleNumber: 1,
      holes: [],
    };

    const updatedRound = recordHoleResult(round, result);

    expect(updatedRound.currentHoleNumber).toBe(2);
    expect(updatedRound.holes).toEqual([result]);
  });

  it("replaces an existing result for the same hole", () => {
    const round: Round = {
      id: "round-1",
      courseName: null,
      teeName: null,
      currentHoleNumber: 1,
      holes: [
        {
          ...result,
          score: 6,
        },
      ],
    };

    const updatedRound = recordHoleResult(round, result);

    expect(updatedRound.holes).toHaveLength(1);
    expect(updatedRound.holes[0]?.score).toBe(5);
  });

  it("does not advance beyond hole 18", () => {
    const round: Round = {
      id: "round-1",
      courseName: null,
      teeName: null,
      currentHoleNumber: 18,
      holes: [],
    };

    const updatedRound = recordHoleResult(round, {
      ...result,
      holeNumber: 18,
    });

    expect(updatedRound.currentHoleNumber).toBe(18);
  });
});