import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { RoundFormatStep } from "./RoundFormatStep";

describe("RoundFormatStep", () => {
  it("lets the golfer choose a round format and continue", async () => {
    const user = userEvent.setup();
    const onContinue = vi.fn();

    render(
      <RoundFormatStep
        value="18-holes"
        onChange={() => {}}
        onContinue={onContinue}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "How many holes?" }),
    ).toBeInTheDocument();

    const formatGroup = screen.getByRole("group", {
      name: "Round format",
    });

    expect(
      within(formatGroup).getByRole("button", { name: "18 Holes" }),
    ).toHaveAttribute("aria-pressed", "true");

    expect(
      within(formatGroup).getByRole("button", { name: "Front 9" }),
    ).toBeInTheDocument();

    expect(
      within(formatGroup).getByRole("button", { name: "Back 9" }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Continue" }),
    );

    expect(onContinue).toHaveBeenCalledOnce();
  });
});
