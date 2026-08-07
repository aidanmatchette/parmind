import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders its content", () => {
    render(
      <Card>
        <p>ParMind content</p>
      </Card>,
    );

    expect(screen.getByText("ParMind content")).toBeInTheDocument();
  });

  it("renders as a semantic section by default", () => {
    render(
      <Card>
        <p>Content</p>
      </Card>,
    );

    expect(screen.getByRole("region")).toBeInTheDocument();
  });
});