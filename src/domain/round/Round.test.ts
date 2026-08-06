import { describe, expect, it } from "vitest";
import type { Round } from "./Round";

describe("Round", () => {
  it("represents an in-progress round", () => {
    const round: Round = {
      id: "round-1",
      courseName: null,
      teeName: null,
      currentHoleNumber: 1,
      holes: [],
    };

    expect(round.currentHoleNumber).toBe(1);
    expect(round.holes).toEqual([]);
  });
});