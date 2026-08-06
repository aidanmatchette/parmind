import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { PuttPicker } from "./PuttPicker";

describe("PuttPicker", () => {
  it("renders putt options from zero through four", () => {
    render(<PuttPicker value={2} onChange={() => {}} />);

    for (let putts = 0; putts <= 4; putts++) {
      expect(
        screen.getByRole("button", { name: String(putts) }),
      ).toBeInTheDocument();
    }
  });

  it("marks the selected putt count", () => {
    render(<PuttPicker value={2} onChange={() => {}} />);

    expect(screen.getByRole("button", { name: "2" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("calls onChange when a putt count is selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<PuttPicker value={2} onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: "3" }));

    expect(onChange).toHaveBeenCalledWith(3);
  });
});