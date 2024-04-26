import styles from "./index.module.scss";

import SocialShare from "../ui/social-share";
import TicketBanner from "../ui/ticket-banner";
import Divider from "../ui/divider";
import Link from "next/link";
import MCList from "../ui/mc-list";
import {
  CommunityPartnerLogos,
  PartnerLogos,
  ScholarshipPartnerLogos,
  MediaPartnerLogos,
} from "../ui/partner-logos";
import TALKS from "../data/talks";
import SpeakerList from "../ui/speaker-list";

function Home() {
  return (
    <>
      <SocialShare />
      <TicketBanner />
      {TALKS.some((t) => t.published) && (
        <section id="speakers">
          <Divider>
            <h1>Speakers</h1>
          </Divider>
          <SpeakerList speakers={TALKS.filter((t) => t.published)} />
        </section>
      )}
      <section id="emcees">
        <Divider>
          <h1>MCs</h1>
        </Divider>
        <MCList />
      </section>
      <section id="updates">
        <Divider>
          <h1>Updates</h1>
        </Divider>

        <div className={`${styles.updates_container} col md-row mb-2`}>
          <>
            <h2 className="mt-0">Venue Change</h2>
            <h4 className="ml-0p25">April 26, 2024</h4>
            <div id="update_content">
              <p>
                We're moving to the gorgeous{" "}
                <Link href="/venue-change">
                  <strong>Uránia National Film Theater</strong>
                </Link>
                ! It was the venue for the very first JSConf Budapest, and this
                year we're going back.
              </p>
            </div>
          </>

          <>
            <h2 className="mt-0">Be a speaker at our Community Lounge</h2>
            <h4 className="ml-0p25">April 17, 2024</h4>
            <div id="update_content">
              <p>
                Submit your{" "}
                <Link href="https://t.ly/v4-cu">Lightning Talk proposal</Link>{" "}
                by May 15, 2024!
              </p>
            </div>
          </>

          <>
            <h2 className="mt-0">Looking for Sponsors!</h2>
            <h4 className="ml-0p25">March 27, 2024</h4>
            <div id="update_content">
              <p>
                We're seeking sponsoring partners to ensure JSConf Budapest 2024
                is amazing!
              </p>
              <p>
                <Link href="/partners">
                  Let's team up and create an unforgettable experience together!
                </Link>
              </p>
            </div>
          </>
        </div>
      </section>
      <section id="venue">
        <Divider>
          <h1>Venue</h1>
        </Divider>
        <div className="x-container col md-row gap-1p5">
          <iframe
            title="Venue area map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.7248156162027!2d19.06250307699919!3d47.49527397117969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc5d3ede55ed%3A0x2b5d864f5b6ed083!2sUrania%20National%20Film%20Theater!5e0!3m2!1sen!2sno!4v1714113336771!5m2!1sen!2sno"
            width="100%"
            height="340"
          />
          <div>
            <p className="md-mt-0">
              <Link href="/venue-change">Uránia theater</Link> is a historic
              cinema located in Budapest, Hungary, known for its beautiful
              architecture and unique atmosphere. The venue has a rich cultural
              heritage and is a popular destination for film screenings,
              concerts, and conferences. Uránia Filmszínház offers an intimate
              and cozy setting, which can create a focused and engaging
              atmosphere for conference attendees. The historic charm of the
              venue also adds a unique and memorable element to the conference
              experience.
            </p>
            <p>
              It's worth noting that Uránia mozi holds a special place in our
              hearts, as it was the venue for the very first JSConf Budapest. We
              have cherished memories of that time. Let us share the amazing
              vibe of this place that we love so much!
            </p>
          </div>
        </div>
      </section>
      <section id="partners">
        <Divider>
          <h1>Partners</h1>
        </Divider>
        <PartnerLogos />
      </section>
      <section id="community-partners">
        <Divider>
          <h1>Community partners</h1>
        </Divider>
        <CommunityPartnerLogos />
      </section>
    </>
  );
}

export default Home;
