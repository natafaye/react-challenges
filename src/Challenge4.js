import React, { useState } from 'react'

/* CHALLENGE 4
 *
 * Create a ExpandableDetails component that takes one prop:
 *     text - The text of the details to display
 * 
 * There should be a See More/See Less button that expands how much of the
 * details is displayed. The button should say See More when the details 
 * aren't expanded and See Less when the details are expanded.
 * 
 * When the details are not expanded, it should display 50 characters
 * of the text and then an ellipses: ... It's fine for the text to cut off
 * mid word. When it is expanded, all of the text should be displayed.
 * 
 * The details should start out NOT expanded and switch to expanded 
 * when the button is clicked. If the button is clicked again, it 
 * should switch back to not expanded.
 */
export function ExpandableDetails() {
    return <></>
}



// DO NOT CHANGE THESE TEST DETAILS OR THE TESTING CODE MAY BREAK
export const testText1 = "Tortoises are reptiles of the family Testudinidae of the order Testudines. " +
    "Like other turtles, tortoises have a shell to protect from predation and other threats."
export const testText2 = "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. " +
    "It is named after the engineer Gustave Eiffel, whose company designed and built the tower."

export default function Challenge4() {
    return (
        <div className="col mt-3">
            <div className="bg-light p-3">

                {/* TIP: You can change the prop to test the component here */}
                <ExpandableDetails text={testText1}/>

            </div>
            <h2 className="mt-3">Instructions</h2>
            <p>
                Create an ExpandableDetails component that takes one prop:
            </p>
            <ul>
                <li><code>text</code> - The text of the details to display</li>
            </ul>
            <p>
                There should be a See More/See Less button that expands how much of the
                details is displayed. The button should say See More when the details 
                aren't expanded and See Less when the details are expanded.
            </p>
            <p>
                When the details are not expanded, it should display 50 characters
                of the text and then an ellipses: ... It's fine for the text to cut off
                mid word. When it is expanded, all of the text should be displayed.
            </p>
            <p>
                The details should start out NOT expanded and switch to expanded 
                when the button is clicked. If the button is clicked again, it 
                should switch back to not expanded.
            </p>
        </div>
  )
}
