import { describe, expect, it } from "vitest";
import {
  ROUND_FORMATS,
  type RoundFormat,
} from "./RoundFormat";

describe("RoundFormat", () => {
  it("defines the supported round formats", () => {
    expect(ROUND_FORMATS).toEqual([
      "18-holes",
      "front-9",
      "back-9",
    ]);
  });

  it("supports a valid round format", () => {
    const format: RoundFormat = "front-9";

    expect(format).toBe("front-9");
  });
});
