import { fireEvent, render, screen } from "@testing-library/react"
import { ExpandableDetails, testText1, testText2 } from "../Challenge4"

describe.skip("Challenge 4 - ExpandableDetails", () => {
    it("displays the text correctly when it is not expanded with testText1", () => {
        render(<ExpandableDetails text={testText1}/>)
        screen.getByText("Tortoises are reptiles of the family Testudinidae ...");
    })

    it("displays the text correctly when it is not expanded with testText2", () => {
        render(<ExpandableDetails text={testText2}/>)
        screen.getByText("The Eiffel Tower is a wrought-iron lattice tower o...");
    })
    
    it("displays the button correctly when it is not expanded", () => {
        render(<ExpandableDetails text={testText1}/>)
        expect(screen.getByRole('button')).toHaveTextContent(/see more/i)
    })

    it("displays the text correctly when it is expanded with testText1", () => {
        render(<ExpandableDetails text={testText1}/>)
        fireEvent.click(screen.getByRole("button"));
        screen.getByText(testText1);
    })

    it("displays the text correctly when it is expanded with testText2", () => {
        render(<ExpandableDetails text={testText2}/>)
        fireEvent.click(screen.getByRole("button"));
        screen.getByText(testText2);
    })

    it("displays the button correctly when it is expanded", () => {
        render(<ExpandableDetails text={testText1}/>)
        const button = screen.getByRole("button")
        fireEvent.click(button);
        expect(button).toHaveTextContent(/see less/i)
    })

    it("displays the button correctly when it is expanded then collapsed", () => {
        render(<ExpandableDetails text={testText1}/>)
        const button = screen.getByRole("button")
        fireEvent.click(button);
        fireEvent.click(button);
        expect(button).toHaveTextContent(/see more/i)
    })

    it("displays the text correctly when it is expanded then collapsed", () => {
        render(<ExpandableDetails text={testText1}/>)
        const button = screen.getByRole("button")
        fireEvent.click(button);
        fireEvent.click(button);
        screen.getByText("Tortoises are reptiles of the family Testudinidae ...");
    })
})