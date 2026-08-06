import { describe, expect, it } from "vitest";
import {
  ADVANTAGE_MISS_REASONS,
  type AdvantageMissReason,
} from "./AdvantageMissReason";

describe("AdvantageMissReason", () => {
  it("defines the supported miss reasons", () => {
    expect(ADVANTAGE_MISS_REASONS).toEqual([
      "strategy",
      "execution",
      "penalty",
      "hero-shot",
      "other",
    ]);
  });

  it("supports valid domain values", () => {
    const reason: AdvantageMissReason = "execution";

    expect(reason).toBe("execution");
  });
});