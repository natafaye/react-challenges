import { render, screen } from "@testing-library/react"
import { Bill, testCart1, testCart2, testCart3 } from "../Challenge3"

describe.skip("Challenge 3 - Bill", () => {
    it("displays all the items correctly for testCart1", () => {
        render(<Bill itemsInCart={testCart1} shippingCost={15}/>)

        screen.getByText(/sleep mask - \$15/i)
        screen.getByText(/headphones - \$30/i)
    })
    
    it("displays all the items correctly for testCart2", () => {
        render(<Bill itemsInCart={testCart2} shippingCost={15}/>)

        screen.getByText(/bounce house - \$200/i)
    })
    
    it("displays all the items correctly for testCart3", () => {
        render(<Bill itemsInCart={testCart3} shippingCost={15}/>)

        screen.getByText(/towels - \$30/i)
        screen.getByText(/sand toys - \$20/i)
        screen.getByText(/sunglasses - \$10/i)
    })

    it("displays the total correctly for testCart1 and $15 shipping", () => {
        render(<Bill itemsInCart={testCart1} shippingCost={15}/>)

        screen.getByText(/total: \$60/i)
    })

    
    it("displays the total correctly for testCart2 and $25 shipping", () => {
        render(<Bill itemsInCart={testCart2} shippingCost={25}/>)

        screen.getByText(/total: \$225/i)
    })

    it("displays the total correctly for testCart3 and $5 shipping", () => {
        render(<Bill itemsInCart={testCart3} shippingCost={5}/>)

        // The test will fail if it doesn't find something with this text in the Bill
        screen.getByText(/total: \$65/i)
    })
})