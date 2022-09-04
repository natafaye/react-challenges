import { render, screen } from "@testing-library/react"
import { ShoppingList, testList1, testList2 } from "../Challenge2"

describe.skip("Challenge 2 - ShoppingList", () => {
    it("displays the items correctly for testList1", () => {
        render(<ShoppingList list={testList1} />)
        testList1.forEach(item => screen.getByText(item))
    })

    it("displays the items correctly for testList2", () => {
        render(<ShoppingList list={testList2} />)
        testList2.forEach(item => screen.getByText(item))
    })
})