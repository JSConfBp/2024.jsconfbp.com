import Image from "next/image"

import ColoredSection from "../ui/colored-section"
import Container from "../ui/container"
import Divider from "../ui/divider"
import SocialShare from "../ui/social-share"

import mic from "../public/icons/mic.png"
import attendees from "../public/icons/attendees.png"
import countries from "../public/icons/countries.png"

function Sponsors() {
    return (
        <>
            <SocialShare
                title="Sponsorship"
            />

            <Divider>
                <h1>Sponsorship</h1>
            </Divider>

            <Container className="gap-3">
                <div>Our common goal with every Sponsor is to make the experience even better for Attendees at the conference. We believe that Sponsor booths and activities could be part of the whole event, the hallway track, and even afterparties.</div>
                <nav>
                    <ul className="flex-col center col row-md gap-2p5">
                        <li>
                            <a className="fs-1p5" href="#attendees">Attendees</a>
                        </li>
                        <li>
                            <a className="fs-1p5" href="#reach">Reach</a>
                        </li>
                        <li>
                            <a className="fs-1p5" href="#packages">Packages</a>
                        </li>
                        <li>
                            <a className="fs-1p5" href="#perks">Perks</a>
                        </li>
                        <li>
                            <a className="fs-1p5" href="#workshops">Workshops</a>
                        </li>
                        <li>
                            <a className="fs-1p5" href="#scholarships">Scholarships</a>
                        </li>
                    </ul>
                </nav>
                <ColoredSection background="secondary" className="gap-1p5 px-3 py-1p5">
                    <h1 className="center color-bg">OUR PAST YEARS WERE AWESOME!</h1>
                    <h3 className="center color-bg">Here’s what happened so far in our past 4 events:</h3>
                    <div className="w-50vw col row-md center">
                        <div className="col center">
                            <Image
                                src={mic}
                                alt="microphone icon"
                            />
                            <p className="m-0 fw-700 color-bg fs-1p5">124</p>
                            <p className="m-0 fw-700 color-bg fs-1p5">speakers</p>
                        </div>
                        <div className="col center relative">
                            <Image
                                src={attendees}
                                alt="attendees icon"
                            />
                            <p className="m-0 fw-700 color-bg fs-1p5">3192</p>
                            <p className="m-0 fw-700 color-bg fs-1p5">attendees</p>
                        </div>
                        <div className="col center relative">
                            <Image
                                src={countries}
                                alt="countries icon"
                            />
                            <p className="m-0 fw-700 color-bg fs-1p5">36</p>
                            <p className="m-0 fw-700 color-bg fs-1p5">countries</p>
                        </div>
                    </div>
                </ColoredSection>
                <div id="video">VIDEO</div>
                <ColoredSection background="primary">
                    <div id="attendees">attendees</div>
                    <div id="top-countries">top countries</div>
                    <Divider type="sym" color="background" />
                    <div id="reach">reach</div>
                </ColoredSection>
                <div id="pictures">PICTURES</div>
                <ColoredSection background="secondary">
                    <div id="past-sponsors">past sponsors</div>
                    <Divider type="sym" color="background" />
                    <div id="coming-up">coming up next</div>
                </ColoredSection>
                <div id="party-pic">party pic</div>
                <ColoredSection background="background">
                    <div id="packages">packages</div>
                </ColoredSection>
                <ColoredSection background="light-section">
                    <div id="perks">perks</div>
                </ColoredSection>
                <ColoredSection background="background">
                    <div id="workshops">workshops</div>
                </ColoredSection>
                <ColoredSection background="light-section">
                    <div id="scholarships">scholarships</div>
                </ColoredSection>
                <ColoredSection background="secondary">
                    <div id="talk">let's talk</div>
                </ColoredSection>
                <ColoredSection background="background">
                    <div id="impressum">impressum</div>
                </ColoredSection>
            </Container >
        </>
    )
}

export default Sponsors