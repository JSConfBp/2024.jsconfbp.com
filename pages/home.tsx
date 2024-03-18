import styles from "./home.module.scss";

import CenteredButton from "../ui/centered-button";
import SocialShare from "../ui/social-share";
import TicketBanner from "../ui/ticket-banner";

function Home() {
  return (
    <>
      <SocialShare />
      <TicketBanner />
      <div className={styles.cfp_container}>
        <CenteredButton href="/call-for-papers" target="_self">
          Our CFP is open!
        </CenteredButton>
      </div>
    </>
  );
}

export default Home;
