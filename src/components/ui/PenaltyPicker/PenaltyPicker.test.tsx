import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { PenaltyPicker } from "./PenaltyPicker";

describe("PenaltyPicker", () => {
  it("renders penalty options from zero through three", () => {
    render(<PenaltyPicker value={0} onChange={() => {}} />);

    for (let penalties = 0; penalties <= 3; penalties++) {
      expect(
        screen.getByRole("button", { name: String(penalties) }),
      ).toBeInTheDocument();
    }
  });

  it("marks the selected penalty count", () => {
    render(<PenaltyPicker value={1} onChange={() => {}} />);

    expect(screen.getByRole("button", { name: "1" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("calls onChange when a penalty count is selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<PenaltyPicker value={0} onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: "2" }));

    expect(onChange).toHaveBeenCalledWith(2);
  });
});