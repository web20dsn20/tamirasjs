import { render, screen } from "@testing-library/react";
import App from "./App"; // Importing App component
import React from "react"; // Ensure React is imported for JSX if you're using React 17 or below

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/dsfest/i);
  expect(linkElement).toBeInTheDocument();
});
