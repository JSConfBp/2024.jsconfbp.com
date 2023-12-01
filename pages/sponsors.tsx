import Image from "next/image"

import ColoredSection from "../ui/colored-section"
import Container from "../ui/container"
import Divider from "../ui/divider"
import SocialShare from "../ui/social-share"

import mic from "../public/icons/mic.png"
import attendees from "../public/icons/attendees.png"
import countries from "../public/icons/countries.png"

import twitter from "../public/icons/twitter.png"
import youtube from "../public/icons/youtube.png"
import facebook from "../public/icons/facebook.png"

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
                <ColoredSection background="primary" className="pb-2">
                    <div id="attendees">attendees</div>
                    <div id="top-countries" className="col center w-80vw">
                        <h1 className="color-bg">Top countries</h1>
                        <p className="color-bg">
                            Netherlands, Germany, Hungary, United States, United Kingdom
                            <br />
                            Portugal, Slovakia, Romania, Poland, Serbia
                        </p>
                    </div>
                    <Divider type="sym" color="background" />
                    <div id="reach" className="w-80vw col center gap-1p5">
                        <h1 className="center color-bg">REACH</h1>
                        <h3 className="center color-bg">100% relevance in the JavaScript community</h3>
                        <div className="col row-md center gap-1p5 w-100p py-2">
                            <div className="col center">
                                <Image
                                    src={twitter}
                                    alt="microphone icon"
                                />
                                <div>
                                    <p className="m-0 fw-700 color-bg fs-2p25">2.1k</p>
                                    <p className="m-0 color-bg fs-1p25">followers</p>
                                </div>
                            </div>
                            <div className="col center relative">
                                <Image
                                    src={youtube}
                                    alt="attendees icon"
                                />
                                <p className="m-0 fw-700 color-bg fs-2p25">142k</p>
                                <p className="m-0  color-bg fs-1p25">subscribers</p>
                            </div>
                            <div className="col center relative">
                                <Image
                                    src={facebook}
                                    alt="countries icon"
                                />
                                <p className="m-0 fw-700 color-bg fs-2p25">34k</p>
                                <p className="m-0 color-bg fs-1p25">people reached</p>
                            </div>
                        </div>
                        <div className="col">
                            <p className="color-bg">Our videos were watched over 242,000 times on YouTube</p>
                            <p className="color-bg">Viewers spend more than 1,742,000 minutes watching the talks online</p>
                        </div>
                    </div>
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