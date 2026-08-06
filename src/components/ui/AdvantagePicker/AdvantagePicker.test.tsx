import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { AdvantagePicker } from "./AdvantagePicker";

describe("AdvantagePicker", () => {
  it("renders yes and no options", () => {
    render(<AdvantagePicker value={null} onChange={() => {}} />);

    expect(screen.getByRole("button", { name: "Yes" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "No" })).toBeInTheDocument();
  });

  it("marks the selected option", () => {
    render(<AdvantagePicker value={true} onChange={() => {}} />);

    expect(screen.getByRole("button", { name: "Yes" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    expect(screen.getByRole("button", { name: "No" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("calls onChange when an option is selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<AdvantagePicker value={null} onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: "No" }));

    expect(onChange).toHaveBeenCalledWith(false);
  });
});