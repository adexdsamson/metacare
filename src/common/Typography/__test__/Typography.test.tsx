import React from "react";
import { render, screen } from "@testing-library/react";
import { Typography } from "../index";

it("renders typogaphy of headings", () => {
  render(
    <Typography {...{ variant: 'h4' }}>
      hello
    </Typography>
  );
  const nameElement = screen.getByRole("heading");
  expect(nameElement).toBeInTheDocument();
});

// it("renders typogaphy of paragraph", () => {
//   render(<Typography {...{ variant: "p" }}>hello</Typography>);
//   const nameElement = screen.getByRole("paragraph");
//   expect(nameElement).toBeInTheDocument();
// });