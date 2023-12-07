import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("should display Hello text", () => {
    render(<Greeting></Greeting>);
    const test = screen.getByText("Hello", {
        exact: true
    });
    expect(test).toBeInTheDocument();
});