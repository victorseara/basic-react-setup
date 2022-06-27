import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test template", () => {
  test("should render a basic component", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /basic react/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/this is a basic react/i)).toBeInTheDocument();
  });
});
