import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

test("should display Hello text", () => {
    render(<Greeting></Greeting>);
    const test = screen.getByText("Hello", {
        exact: true
    });
    expect(test).toBeInTheDocument();
});

test("should change page text when button clicked", () => {
    render(<Greeting></Greeting>);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const text = screen.getByText("Tested")
    expect(text).toBeInTheDocument();
});

test("should display expected page test", () => {
    render(<Greeting></Greeting>);
    const text = screen.getByText("Testing")
    expect(text).toBeInTheDocument();
});