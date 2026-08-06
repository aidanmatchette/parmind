import { describe, expect, it } from "vitest";
import type { HoleResult } from "./HoleResult";

describe("HoleResult", () => {
  it("represents a completed hole that reached the Advantage Zone", () => {
    const result: HoleResult = {
      holeNumber: 1,
      par: 4,
      score: 5,
      putts: 2,
      penalties: 0,
      reachedAdvantageZone: true,
      advantageMissReason: null,
    };

    expect(result).toEqual({
      holeNumber: 1,
      par: 4,
      score: 5,
      putts: 2,
      penalties: 0,
      reachedAdvantageZone: true,
      advantageMissReason: null,
    });
  });

  it("records the reason when the Advantage Zone is missed", () => {
    const result: HoleResult = {
      holeNumber: 7,
      par: 4,
      score: 7,
      putts: 2,
      penalties: 1,
      reachedAdvantageZone: false,
      advantageMissReason: "hero-shot",
    };

    expect(result.advantageMissReason).toBe("hero-shot");
  });
});