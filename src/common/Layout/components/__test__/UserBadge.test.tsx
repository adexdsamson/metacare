import React from "react";
import { render, screen } from "@testing-library/react";
import { UserBadge } from "../UserBadge";

it("renders name on the dom", () => {
  render(
    <UserBadge {...{ name: "Metacare", email: "adeyinka@metacare.app" }} />
  );
  const nameElement = screen.getByRole('heading');
  expect(nameElement).toBeInTheDocument();
});

// it("renders email address", () => {
//   render(
//     <UserBadge {...{ name: "Metacare", email: "adeyinka@metacare.app" }} />
//   );
//   const emailElement = screen.getByText(/adeyinka@metacare.app/i);
//   expect(emailElement).toBeInTheDocument();
// });