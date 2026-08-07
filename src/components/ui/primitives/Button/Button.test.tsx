import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its label", () => {
    render(<Button>Save hole</Button>);

    expect(
      screen.getByRole("button", { name: "Save hole" }),
    ).toBeInTheDocument();
  });

  it("calls onClick when pressed", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button onClick={onClick}>
        Save hole
      </Button>,
    );

    await user.click(
      screen.getByRole("button", { name: "Save hole" }),
    );

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("does not allow interaction when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <Button
        onClick={onClick}
        disabled
      >
        Save hole
      </Button>,
    );

    const button = screen.getByRole("button", {
      name: "Save hole",
    });

    expect(button).toBeDisabled();

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });
});