import React from 'react'

/* CHALLENGE 1
 *
 * Create a Announcement Banner component that takes one prop:
 *     announcement - an announcement object to display
 * 
 * The title of the announcement should be displayed in a heading (h1, h2, etc).
 * 
 * The details should be displayed in a paragraph.
 */
export function AnnouncementBanner() {
    return <></>
}



// DO NOT CHANGE THESE TEST ANNOUNCEMENTS OR THE TESTING CODE MAY BREAK
export const testAnnouncement1 = {
    title: "Website Maintenance Tomorrow",
    details: "The website will be down for 3 hours tomorrow for maintenance"
}
export const testAnnouncement2 = {
    title: "Sale! Sale! Sale!",
    details: "Everything is on sale for 50% off!"
}

export default function Challenge1() {
    return (
        <div className="col mt-3">
            <div className="bg-light p-3">

                {/* TIP: You can change the prop to test the component here */}
                <AnnouncementBanner announcement={testAnnouncement1}/>

            </div>  
            <h2 className="mt-3">Instructions</h2>
            <p>
                Create a Announcement Banner component that takes one prop:
            </p>
            <ul>
                <li><code>announcement</code> - an announcement object to display</li>
            </ul>
            <p>
                The title of the announcement should be displayed in a heading (h1, h2, etc).
            </p>
            <p>
                The details should be displayed in a paragraph.
            </p>
        </div>
  )
}
