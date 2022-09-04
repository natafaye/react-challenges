import { render, screen } from "@testing-library/react"
import { AnnouncementBanner, testAnnouncement1, testAnnouncement2 } from "../Challenge1"

describe.skip("Challenge 1 - AnnouncementBanner", () => {
    it("displays the title correctly for testAnnouncement1", () => {
        render(<AnnouncementBanner announcement={testAnnouncement1} />)
        expect(screen.getByRole("heading")).toHaveTextContent(testAnnouncement1.title);
    })

    it("displays the details correctly for testAnnouncement1", () => {
        render(<AnnouncementBanner announcement={testAnnouncement1}/>)
        screen.getByText(testAnnouncement1.details);
    })

    it("displays the title correctly for testAnnouncement2", () => {
        render(<AnnouncementBanner announcement={testAnnouncement2} />)
        expect(screen.getByRole("heading")).toHaveTextContent(testAnnouncement2.title);
    })

    it("displays the details correctly for testAnnouncement2", () => {
        render(<AnnouncementBanner announcement={testAnnouncement2}/>)
        screen.getByText(testAnnouncement2.details);
    })
})