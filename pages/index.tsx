import styles from './index.module.scss'

import CenteredButton from '../ui/centered-button'
import SocialShare from '../ui/social-share'
import TicketBanner from '../ui/ticket-banner'
import Divider from '../ui/divider'
import Link from 'next/link'

function Home() {
  return (
    <>
      <SocialShare />
      <TicketBanner />
      <div className={styles.cfp_container}>
        <CenteredButton href="/call-for-papers" target="_self">Our CFP is open!</CenteredButton>
      </div>
      <section id="updates">
        <Divider>
          <h1>Updates</h1>
        </Divider>

        <div className="col md-row gap-2p5 mb-2">
          <div className='col'>
            <h2 className='mt-0'>Scholarship!</h2>
            <h4 className='mt-n2 ml-0p25'>December 18, 2023</h4>
            <p>
              📬 We have opened the application for our Scholarship program!
            </p>
            <p>
              The details are on our <Link href="/scholarship">🎓scholarship page</Link>
            </p>
            <p>
              The application deadline is <strong>March 24, 2024</strong>.
            </p>
          </div>

          <div className='col'>
            <h2 className='mt-0'>Call for Speakers!</h2>
            <h4 className='mt-n2 ml-0p25'>November 30, 2023</h4>
            <p>
              📢  We're looking for our Speakers for 2024!
            </p>
            <p>
              <Link href="/call-for-papers">Our CFP is open</Link>, awaiting your talk proposals until the <strong>end of January 2024</strong>!
            </p>
            <p>
              Send us your talk ideas and take the stage in 2024!
            </p>
          </div>

          <div className='col'>
            <h2 className='mt-0'>We are so back!</h2>
            <h4 className='mt-n2 ml-0p25'>November 21, 2023</h4>
            <p>
              🌟 JSConf Budapest 2024 is a GO!
            </p>
            <p>
              📆 Mark your calendars for <strong>June 26-28, 2024.</strong>
            </p>
            <p>
              🎟️ Secure your early bird <Link href="https://buff.ly/47nfPaB" target="_blank">tickets now!</Link>
            </p>
            <p>
              Join the JavaScript party – it’s going to be epic!
            </p>
          </div>

        </div>
      </section>
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
