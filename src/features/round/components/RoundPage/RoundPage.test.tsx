import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { RoundPage } from "./RoundPage";

describe("RoundPage", () => {
  it("records a hole and advances to the next hole", async () => {
    const user = userEvent.setup();

    render(<RoundPage />);

    expect(
      screen.getByRole("heading", { name: "Hole 1" }),
    ).toBeInTheDocument();

    await user.click(
      within(
        screen.getByRole("group", { name: "Select score" }),
      ).getByRole("button", { name: "5" }),
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

    expect(
      screen.getByRole("heading", { name: "Hole 2" }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("1 hole recorded"),
    ).toBeInTheDocument();
  });
  it("shows the round-complete state after hole 18 is recorded", async () => {
  const user = userEvent.setup();

  render(<RoundPage initialHoleNumber={18} />);

  expect(
    screen.getByRole("heading", { name: "Hole 18" }),
  ).toBeInTheDocument();

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

  expect(
    screen.getByRole("heading", { name: "Round complete" }),
  ).toBeInTheDocument();

  expect(
    screen.queryByRole("button", { name: "Save hole" }),
  ).not.toBeInTheDocument();
});
});