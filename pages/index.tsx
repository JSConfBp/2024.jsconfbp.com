import styles from './index.module.scss'

import CfpButton from '../ui/cfp-button'
import SocialShare from '../ui/social-share'
import TicketBanner from '../ui/ticket-banner'

function Home() {
  return (
    <>
      <SocialShare />
      <TicketBanner />
      <div className={styles.cfp_container}>
        <CfpButton href="/call-for-papers" target="_self">Our CFP is open!</CfpButton>
      </div>
    </>
  )
}

export default Home
