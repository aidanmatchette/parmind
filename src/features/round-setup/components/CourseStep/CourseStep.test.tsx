import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CourseStep } from "./CourseStep";

describe("CourseStep", () => {
  it("renders the course selection step", () => {
    render(
      <CourseStep
        onBack={() => {}}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Select your course" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("searchbox", { name: "Search courses" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Back" }),
    ).toBeInTheDocument();
  });
});