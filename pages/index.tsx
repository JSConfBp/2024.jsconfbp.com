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

        <div className="col md-row gap-2p5 mb-2">
          <div className="col">
            <h2 className="mt-0">Looking for Sponsors!</h2>
            <h4 className="mt-n2 ml-0p25">March 27, 2024</h4>
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

          <div className="col">
            <h2 className="mt-0">Scholarship Application Closed!</h2>
            <h4 className="mt-n2 ml-0p25">March 24, 2024</h4>
            <p>Application for our Scholarship program is closed!</p>
            <p>
              The evaluation of applications is currently in progress with the
              help of our Scholarship partner,
              <Link href="https://codecool.com/en/">Codecool</Link>
            </p>
            <p>Stay tuned for the results in early April!.</p>
          </div>

          <div className="col">
            <h2 className="mt-0">Our Call for Speakers is closed!</h2>
            <h4 className="mt-n2 ml-0p25">January 27, 2024</h4>
            <p>
              We've received 387 talk idea submissions from the developer
              community. Thank you so much!
            </p>
            <p>
              Stay tuned for the CFP voting results and the speaker selection
              process soon!
            </p>
          </div>
        </div>
      </section>
      <section id="venue">
        <Divider>
          <h1>Venue</h1>
        </Divider>
        <div className="x-container col md-row gap-1p5">
          <iframe
            title="Venue area map"
            style={{ pointerEvents: "none" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.565701968758!2d19.052097751378795!3d47.49837330333867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc402a04eee3%3A0x6869564cd433693c!2sAkv%C3%A1rium+Klub!5e0!3m2!1sen!2sus!4v1448264513121"
            width="100%"
            height="340"
          />
          <div>
            <p className="md-mt-0">
              Akvárium Klub is more than a simple bar: it is a culture centre
              with a wide musical repertoire from mainstream to underground.
              There is always a good concert and a smashing exhibition,
              performance, or other event happening here, in a friendly scene,
              situated right in the city centre.
            </p>
            <p>
              Literally under a pool of water, this great club is our venue in
              since 2016.
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
      <section id="scholarship-partners">
        <Divider>
          <h1>Scholarship Partners</h1>
        </Divider>
        <ScholarshipPartnerLogos />
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
