import { describe, expect, it } from "vitest";
import type { RoundHole } from "./RoundHole";

describe("RoundHole", () => {
  it("represents the immutable definition of a hole for a round", () => {
    const hole: RoundHole = {
      holeNumber: 1,
      par: 4,
    };

    expect(hole).toEqual({
      holeNumber: 1,
      par: 4,
    });
  });
});