import React from 'react'

/* CHALLENGE 3
 *
 * Create a Bill component that takes in two props:
 *     itemsInCart - An array of items in the cart
 *     shippingCost - A number of how much shipping costs
 * 
 * It should display each item like this: 
 *     ITEM_NAME - $ITEM_PRICE
 * 
 * For example:
 *     toilet paper - $15
 * 
 * It should display a total cost (including shipping) like this:
 *     Total: $TOTAL_COST
 * 
 * For example:
 *     Total: $27
 */
export function Bill() {
    return <></>
}



// DO NOT CHANGE THESE TEST CART ITEMS OR THE TESTING CODE MAY BREAK
export const testCart1 = [
    { price: 15, name: "sleep mask" },
    { price: 30, name: "headphones" }
]
export const testCart2 = [
    { price: 200, name: "bounce house" }
]
export const testCart3 = [
    { price: 30, name: "towels" },
    { price: 20, name: "sand toys" },
    { price: 10, name: "sunglasses" }
]

export default function Challenge3() {
    return (
        <div className="col">
            <div className="bg-light p-3">

                {/* TIP: You can change the props to test the component here */}
                <Bill itemsInCart={testCart1} shippingCost={10} />

            </div>
            <h2>Instructions</h2>
            <p>
                Create a Bill component that takes in two props:
            </p>
            <ul>
                <li><code>itemsInCart</code> - An array of items in the cart</li>
                <li><code>shippingCost</code> - A number of how much shipping costs</li>
            </ul>
            <p>
                It should display each item like this:<br/>
                ITEM_NAME - $ITEM_PRICE
            </p>
            <p>
                For example:<br/>
                toilet paper - $15
            </p>
            <p>
                It should display a total cost (including shipping) like this:<br/>
                Total: $TOTAL_COST
            </p>
            <p>
                For example:<br/>
                Total: $27
            </p>
        </div>
  )
}
