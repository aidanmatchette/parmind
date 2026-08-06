import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { HoleCard } from "./HoleCard";

describe("HoleCard", () => {
  it("submits a completed hole result", async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();

    render(
      <HoleCard
        holeNumber={1}
        par={4}
        onSave={onSave}
      />,
    );

    await user.click(
      within(
        screen.getByRole("group", { name: "Select score" }),
      ).getByRole("button", { name: "5" }),
    );

    await user.click(
      within(
        screen.getByRole("group", { name: "Select putts" }),
      ).getByRole("button", { name: "2" }),
    );

    await user.click(
      within(
        screen.getByRole("group", { name: "Select penalties" }),
      ).getByRole("button", { name: "0" }),
    );

    await user.click(
      within(
        screen.getByRole("group", {
          name: "Did you reach your Advantage Zone?",
        }),
      ).getByRole("button", { name: "Yes" }),
    );

    await user.click(
      screen.getByRole("button", { name: "Save hole" }),
    );

    expect(onSave).toHaveBeenCalledWith({
      holeNumber: 1,
      par: 4,
      score: 5,
      putts: 2,
      penalties: 0,
      reachedAdvantageZone: true,
      advantageMissReason: null,
    });
  });
});