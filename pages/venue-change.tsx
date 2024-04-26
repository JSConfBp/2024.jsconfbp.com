import Link from "next/link";
import Divider from "../ui/divider";
import ColoredSection from "../ui/colored-section";
import SocialShare from "../ui/social-share";
import CenteredButton from "../ui/centered-button";
import WideImage from "../ui/wide-image";
import uraniaJSConfbpImg from "../public/urania-jsconfbp.jpg";

function CallForPapers() {
  return (
    <>
      <SocialShare
        title="Venue Change"
        description="We're moving to the gorgeous Uránia National Film Theater!"
        socialShareImage="social-share/venue-change.png"
      />
      <Divider>
        <h1 className="center-title">Venue Change</h1>
      </Divider>

      <ColoredSection>
        <p>
          We're moving to the gorgeous Uránia National Film Theater (
          <Link href="https://urania-nf.hu/en">Uránia theater</Link>, for
          short), located at Rákóczi út 21, 1088 Hungary (
          <Link href="https://maps.app.goo.gl/oQNBfmaVkwCLCazi8">
            view on Google Maps
          </Link>
          ).
        </p>
      </ColoredSection>

      <WideImage
        src={uraniaJSConfbpImg}
        alt="Inside the Urania Theatre auditorium"
        priority
        quality={75}
        noMargin
      />

      <ColoredSection background="light-section">
        <p style={{ marginTop: "2rem" }}>
          Uránia mozi is a historic cinema located in Budapest, Hungary, known
          for its beautiful architecture and unique atmosphere. The venue has a
          rich cultural heritage and is a popular destination for film
          screenings, concerts, and conferences. Uránia Filmszínház offers an
          intimate and cozy setting, which can create a focused and engaging
          atmosphere for conference attendees. The historic charm of the venue
          also adds a unique and memorable element to the conference experience.
        </p>
        <p>
          It's worth noting that Uránia mozi holds a special place in our
          hearts, as it was the venue for the very first JSConf Budapest. We
          have cherished memories of that time. Let us share the amazing vibe of
          this place that we love so much!
        </p>
      </ColoredSection>

      <ColoredSection>
        <p>
          For further recommendations, we have collected a few places to visit.
          This guide includes information and short description about the
          environment, what to look for and further details.
        </p>
      </ColoredSection>

      <CenteredButton href="/budapest-guide" className="mb-2" target="_self">
        Check out our Budapest Guide!
      </CenteredButton>
    </>
  );
}

export default CallForPapers;
