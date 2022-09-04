import React from 'react'

/* CHALLENGE 2
 *
 * Create a Shopping List component that takes one prop:
 *     list - the list of shopping cart items to display
 * 
 * Each shopping cart item should be displayed in a list item
 */
export function ShoppingList() {
    return <></>
}



// DO NOT CHANGE THESE TEST LISTS OR THE TESTING CODE MAY BREAK
export const testList1 = [ "onion", "tomatoes", "cream cheese", "pasta" ]
export const testList2 = [ "bread", "ham", "cheese" ]

export default function Challenge2() {
    return (
        <div className="col mt-3">
            <div className="bg-light p-3">

                {/* TIP: You can change the prop to test the component here */}
                <ShoppingList list={testList1}/>

            </div>
            <h2 className="mt-3">Instructions</h2>
            <p>
                Create a Shopping List component that takes one prop:
            </p>
            <ul>
                <li><code>list</code> - the list of shopping cart items to display</li>
            </ul>
            <p>
                Each shopping cart item should be displayed in a list item
            </p>
        </div>
  )
}
