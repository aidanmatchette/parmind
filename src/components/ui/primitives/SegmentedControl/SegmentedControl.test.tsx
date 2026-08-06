import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { SegmentedControl } from "./SegmentedControl";

describe("SegmentedControl", () => {
  const options = [
    { label: "Three", value: 3 },
    { label: "Four", value: 4 },
    { label: "Five", value: 5 },
  ] as const;

  it("renders an accessible group and every option", () => {
    render(
      <SegmentedControl
        label="Select score"
        value={4}
        options={options}
        onChange={() => {}}
      />,
    );

    expect(
      screen.getByRole("group", { name: "Select score" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Three" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Four" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Five" }),
    ).toBeInTheDocument();
  });

  it("marks only the selected option as pressed", () => {
    render(
      <SegmentedControl
        label="Select score"
        value={4}
        options={options}
        onChange={() => {}}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Four" }),
    ).toHaveAttribute("aria-pressed", "true");

    expect(
      screen.getByRole("button", { name: "Three" }),
    ).toHaveAttribute("aria-pressed", "false");
  });

  it("calls onChange with the selected value", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <SegmentedControl
        label="Select score"
        value={4}
        options={options}
        onChange={onChange}
      />,
    );

    await user.click(
      screen.getByRole("button", { name: "Five" }),
    );

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange).toHaveBeenCalledWith(5);
  });

  it("supports boolean option values", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <SegmentedControl
        label="Advantage Zone reached"
        value={null}
        options={[
          { label: "Yes", value: true },
          { label: "No", value: false },
        ]}
        onChange={onChange}
      />,
    );

    await user.click(
      screen.getByRole("button", { name: "No" }),
    );

    expect(onChange).toHaveBeenCalledWith(false);
  });
});