import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ScorePicker } from "./ScorePicker";

describe("ScorePicker", () => {
  it("renders all score options", () => {
    render(
      <ScorePicker
        value={4}
        min={1}
        max={8}
        onChange={() => {}}
      />
    );

    for (let i = 1; i <= 8; i++) {
      expect(screen.getByRole("button", { name: String(i) })).toBeInTheDocument();
    }
  });

  it("calls onChange when a score is selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <ScorePicker
        value={4}
        min={1}
        max={8}
        onChange={onChange}
      />
    );

    await user.click(screen.getByRole("button", { name: "6" }));

    expect(onChange).toHaveBeenCalledWith(6);
  });
});