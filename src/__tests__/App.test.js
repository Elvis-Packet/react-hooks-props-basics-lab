import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  render(<App />);
  expect(screen.queryByText("Home")).toBeInTheDocument();
  expect(screen.queryByText("About Me")).toBeInTheDocument();
});

test("passes 'name', 'city', and 'color' to <Home> as props", () => {
  render(<App />);
  const h1 = screen.queryByText(/Liza is a Web Developer from New York/);
  expect(h1).toBeInTheDocument();
  expect(h1.style.color).toEqual("firebrick");
});

test("passes 'bio' to <About> as a prop", () => {
  render(<App />);
  const p = screen.queryByText("I made this!");
  expect(p).toBeInTheDocument();
  expect(p.tagName).toEqual("P");
});

// Remove the Links component test and check the actual links in About directly
test("passes 'github' link to <About>", () => {
  render(<App />);
  const githubLink = screen.queryByText("https://github.com/liza");
  expect(githubLink).toBeInTheDocument();
  expect(githubLink.tagName).toEqual("A");
});

test("passes 'linkedin' link to <About>", () => {
  render(<App />);
  const linkedinLink = screen.queryByText("https://www.linkedin.com/in/liza/");
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink.tagName).toEqual("A");
});
