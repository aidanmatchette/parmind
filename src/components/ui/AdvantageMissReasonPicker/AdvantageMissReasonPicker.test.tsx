import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import {
  AdvantageMissReasonPicker,
  type AdvantageMissReason,
} from "./AdvantageMissReasonPicker";

describe("AdvantageMissReasonPicker", () => {
  it("renders every supported miss reason", () => {
    render(
      <AdvantageMissReasonPicker
        value={null}
        onChange={() => {}}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Strategy" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Execution" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Penalty" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Hero shot" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Other" }),
    ).toBeInTheDocument();
  });

  it("marks the selected reason", () => {
    render(
      <AdvantageMissReasonPicker
        value="execution"
        onChange={() => {}}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Execution" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("calls onChange with the selected reason", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <AdvantageMissReasonPicker
        value={null}
        onChange={onChange}
      />,
    );

    await user.click(
      screen.getByRole("button", { name: "Hero shot" }),
    );

    expect(onChange).toHaveBeenCalledWith(
      "hero-shot" satisfies AdvantageMissReason,
    );
  });
});