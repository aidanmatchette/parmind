import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { RoundSetupFlow } from "./RoundSetupFlow";

describe("RoundSetupFlow", () => {
  it("starts on the round format step", () => {
    render(<RoundSetupFlow />);

    expect(
      screen.getByRole("heading", { name: "How many holes?" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("group", { name: "Round format" }),
    ).toBeInTheDocument();
  });

  it("advances to course selection and can go back", async () => {
    const user = userEvent.setup();

    render(<RoundSetupFlow />);

    await user.click(
      screen.getByRole("button", { name: "Continue" }),
    );

    expect(
      screen.getByRole("heading", { name: "Select your course" }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Back" }),
    );

    expect(
      screen.getByRole("heading", { name: "How many holes?" }),
    ).toBeInTheDocument();
  });
});