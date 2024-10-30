import Contact from "../Contact";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

// grouping of test case -- describe block

describe("Contact", function() {
    test("Should load contact us components", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");

        //assertion
        expect(heading).toBeInTheDocument();
    });

    test("Should load button inside Contact components", () => {
        render(<Contact/>);
        const button = screen.getByRole("button");

        //assertion
        expect(button).toBeInTheDocument();
    });

    test("Should load input name inside Contact components", () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("Name");

        //assertion
        expect(inputName).toBeInTheDocument();
    });

    // instead of "test " we can write "it" also
})
