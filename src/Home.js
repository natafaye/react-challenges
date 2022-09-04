import React from 'react'

export default function Home() {
    return (
        <div className="col mt-3">
            <p>
                These are a series of challenges to practice setting up
                React components using props and state and other techniques.
            </p>
            <p>
                You can switch between the 9 challenges using the top navbar.
                The #1 challenge is the easiest and they tend to get harder 
                as the numbers get higher.
            </p>
            <p>
                You can tell if you've correctly completed the challenge by running:<br/>
                <code className="d-inline-block bg-light w-100 p-2 my-3">npm run test</code><br/>
                and checking that the tests for that challenge are passing.
            </p>
            <p>
                <strong>Important:</strong> to run the tests for a particular challenge
                you must remove the <code>.skip</code> from the describe block on line 4
                of that challenge's test file.
            </p>
        </div>
    )
}
