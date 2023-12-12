import styles from './index.module.scss'

import CfpButton from '../ui/cfp-button'
import SocialShare from '../ui/social-share'
import TicketBanner from '../ui/ticket-banner'
import Divider from '../ui/divider'

function Home() {
  return (
    <>
      <SocialShare />
      <TicketBanner />
      <div className={styles.cfp_container}>
        <CfpButton href="/call-for-papers" target="_self">Our CFP is open!</CfpButton>
      </div>
      {false && (<section id="updates">
        <Divider>
          <h1>Updates</h1>
        </Divider>

        <div className="col md-row gap-2p5 mb-2">
          <div>
            <h2 className='mt-0'>02 May, 2024</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div>
            <h2 className='mt-0'>02 May, 2024</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div>
            <h2 className='mt-0'>02 May, 2024</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section >)
      }
      <section id="venue">
        <Divider >
          <h1>Venue</h1>
        </Divider>
        <div className="x-container col md-row gap-1p5">
          <iframe
            title="Venue area map"
            style={{ pointerEvents: 'none' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.565701968758!2d19.052097751378795!3d47.49837330333867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc402a04eee3%3A0x6869564cd433693c!2sAkv%C3%A1rium+Klub!5e0!3m2!1sen!2sus!4v1448264513121"
            width="100%"
            height="340"
          />
          <div>
            <p className='md-mt-0'>
              Akvárium Klub is more than a simple bar: it is a culture centre
              with a wide musical repertoire from mainstream to underground.
              There is always a good concert and a smashing exhibition,
              performance, or other event happening here, in a friendly scene,
              situated right in the city centre.
            </p>
            <p>
              Literally under a pool of water, this great club is our venue in since 2016.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
