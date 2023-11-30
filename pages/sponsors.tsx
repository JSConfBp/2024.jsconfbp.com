
import styles from "./sponsors.module.scss"

import ColoredSection from "../ui/colored-section"
import Container from "../ui/container"
import Divider from "../ui/divider"
import SocialShare from "../ui/social-share"

function Sponsors() {
    return (
        <>
            <SocialShare
                title="Sponsorship"
            />

            <Divider>
                <h1>Sponsorship</h1>
            </Divider>

            <Container className={styles.main}>
                <div>Our common goal with every Sponsor is to make the experience even better for Attendees at the conference. We believe that Sponsor booths and activities could be part of the whole event, the hallway track, and even afterparties.</div>
                <nav className={styles.menu}>
                    <ul>
                        <li>
                            <a href="#attendees">Attendees</a>
                        </li>
                        <li>
                            <a href="#reach">Reach</a>
                        </li>
                        <li>
                            <a href="#packages">Packages</a>
                        </li>
                        <li>
                            <a href="#perks">Perks</a>
                        </li>
                        <li>
                            <a href="#workshops">Workshops</a>
                        </li>
                        <li>
                            <a href="#scholarships">Scholarships</a>
                        </li>
                    </ul>
                </nav>
                <ColoredSection background="secondary" className={styles.section}>
                    <h1>OUR PAST YEARS WERE AWESOME!</h1>
                    <h3>Here’s what happened so far in our past 4 events:</h3>
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
            </Container>
        </>
    )
}

export default Sponsors