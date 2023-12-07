import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("should render post id request succeeds", async () => {
        render(<Async></Async>);
        const listOfItems = await screen.findAllByRole("listitem");
        expect(listOfItems).not.toHaveLength(0);
    });
});