import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("displays the URL of a GitHub link passed down as a prop", () => {
  render(<About bio="I made this" links={{ github: "https://github.com/liza", linkedin: "https://www.linkedin.com/in/liza/" }} />);
  expect(screen.queryByText("https://github.com/liza")).toBeInTheDocument();
});

test("displays the URL of a LinkedIn link passed down as a prop", () => {
  render(<About bio="I made this" links={{ github: "https://github.com/liza", linkedin: "https://www.linkedin.com/in/liza/" }} />);
  expect(screen.queryByText("https://www.linkedin.com/in/liza/")).toBeInTheDocument();
});
