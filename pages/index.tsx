import CfpButton from '../ui/cfp-button'
import SocialShare from '../ui/social-share'
import TicketBanner from '../ui/ticket-banner'

function Home() {
  return (
    <>
      <SocialShare />
      <TicketBanner />
      <CfpButton href="/call-for-papers" target="_self">Our CFP is open!</CfpButton>
    </>
  )
}

export default Home
