import Link from "next/link";
import CfpButton from "../ui/cfp-button";
import Divider from "../ui/divider";
import ColoredSection from "../ui/colored-section";
import SocialShare from "../ui/social-share";

function CallForPapers() {
  return (
    <>
      <SocialShare
        title="Call For Papers"
        description="Our CFP is open until 26th January 2024!"
        socialShareImage="social-share-cfp.png"
      />
      <Divider><h1>Call For Papers</h1></Divider>

      <ColoredSection className="mb-0">
        <div className="x-container">
          <h2>JSConf Budapest 2024 Call for Speakers</h2>
          <p>We are inviting the JavaScript community to submit talks for the upcoming JSConf Budapest (June 27-28, 2024, Budapest, Hungary).</p>
          <strong>This Call for Speakers closes on January 26th, 2024!</strong>

          <p>
            Before you submit - please make absolutely sure you do not include any personal details about yourself in the abstract and the description of your talk.
          </p>
          <p>
            We're aiming at the most bias-free selection process as possible, our evaluation process aims to anonymize all submissions, so we ask you to help us. Omit any detail, url, company name from your the title and abstracts - for such details, we provide a separate field on the CFP form, which we'll check when we de-anonimize the talks at the end of the evaluation process.
          </p>
        </div>
      </ColoredSection>

      <CfpButton>Submit your talk proposal</CfpButton>

      <ColoredSection background="light-section">
        <div className="x-container">
          <h2>Topics</h2>
          <p>We like to see anything that fits into the topics like:</p>
          <ul>
            <li>Latest cutting-edge technological advances in the world of JavaScript or computer science in general, if somehow applicable to JavaScript.</li>
            <li>Wild Ideas & Mind-bending Hacks</li>
            <li>Developer Culture, improving JavaScript developers’ lives.</li>
            <li>Security and Privacy on the Web</li>
            <li>Machine Learning & JS</li>
            <li>Mobile, Hardware, IoT with web technologies</li>
            <li>Modern re-visit of programming fundamentals or software architectures using JS / TS and the Web</li>
            <li>Crossroads of Technologies</li>
            <li>...Anything you want, that you feel passionate about and relates to the Web or JavaScript</li>
          </ul>
        </div>
      </ColoredSection>


      <ColoredSection>
        <div className="x-container">
          <h2>Perks</h2>
          <p>If you get selected as a speaker at JSConf Budapest, here’s what we provide:</p>
          <strong>Your travel to Budapest covered</strong>
          <ul>
            <li>
              We literally buy your plane or train ticket, plus your airport transfer, and travel around the city. If you wish, you can arrange your travels, and invoice us later - we are happy to assist with booking your itinerary, but if you wish to book yourself then invoice us later, that's also possible within reasonable price ranges.
            </li>
          </ul>
          <strong>Your stay in Budapest covered + and extra weekend to explore our city</strong>
          <ul>
            <li>
              In a great hotel near the venue (including free WiFi) for the days of the conference, a day before, and the weekend after (i.e. June 29-30th). If you want to stay longer, we can arrange things, just let us know, but you may have to cover extra nights, though.
            </li>
          </ul>
          <strong>Entrance to the conference</strong>
          <ul>
            <li>
              We probably won’t be done with the speaker selections by the end of the ticket sales, so if you want to make sure you can attend, just drop a mail to us and we will reserve a ticket for you (just don't mention anything related your talk in that mail please). If you get selected to speak and if you need to, we can refund your ticket, or you can transfer it to anyone you like.
            </li>
          </ul>
          <strong>You can bring your family</strong>
          <ul>
            <li>
              You can bring your significant other, bring your kid(s), they'll stay with you at the hotel. If you need child-care to be sorted out for the time of the conference, please also get in touch. We are here to make this as easy for you as possible!
            </li>
          </ul>
          <p>If your employer can cover your travel and hotel, we are happy to list them as an awesome company sponsor. The money we save will be used to make the conference more fabulous.</p>
          <p>If you have any special requirements, non-return trips, just let us know, we can usually work these things out.</p>
        </div>
      </ColoredSection>

      <ColoredSection background="light-section">
        <div className="x-container">
          <h2>Guidelines</h2>
          <strong>Submit your proposal by January 26th 2024, 23:59:59 CEST.</strong>
          <p>We're aiming at the most bias-free selection process as possible, so we ask you to help us. Omit any detail, url, company name from your the title and abstracts - for such details, we provide a separate field on the CFP form.</p>
          <strong>All talks are in English.</strong>
          <p>Talks are usually 30 minutes long (for longer talks we’d get in touch with you directly). There will be no Q&A on stage after the talks - we encourage attendees and speakers to talk to each in the breaks, after the sessions.</p>
          <p>Make sure you care, and make sure we see you care. Typos, sloppy formatting and all-lowercase submissions make our reading of your proposal tedious. These things will definitely count against your proposal.</p>
          <p>Don’t overdo it either. If you need more than two paragraphs to get to the point of your topic, we need to ask you to slim things down. With the amount of submissions we get, the quicker you can to make a good impression, the better.</p>
          <p>Original topics - one of the things we like to do with JSConf Budapest is to push the community forward. We can’t do this if the same people keep talking about the same things all the time. Thus, we favor original content. If you want to discuss a topic that you have talked about elsewhere, try to add a twist, or new research, or development, something unique. Of course, if your talk is plain awesome as-is, go for that :)</p>
          <p>Simply assume this: the audience has infinite intelligence but zero knowledge.</p>
        </div>
      </ColoredSection>

      <ColoredSection >
        <div className="x-container">
          <h2>Selection process</h2>
          <p>Here’s how we pick our talks:</p>
          <ul>
            <li>We anonymize submissions, so we don’t bias against anything related to the submitter. No peeking!</li>
            <li>The first round of voting rates each talk on a scale from 1 to 10.</li>
            <li>The top-N (~90) submissions are rated again on a 3-point scale.</li>
            <li>At the end, we de-anonymize the final shortlist so we can take speaker details as a factor in the final selection.</li>
          </ul>
          <p>
            We follow the <Link href="https://blog.cssconf.eu/2015/08/15/a-talk-selection-process-explained" target="_blank">selection process developed by our mentors at JSConf & CSSconf EU</Link> and value:
          </p>
          <ul>
            <li>relevance of the topic for the JS community,</li>
            <li>coherence and clarity of the proposal,</li>
            <li>and novelty/originality of the topic</li>
          </ul>
          <p>in a submission.</p>
          <p>
            Check out our <Link href="/600-proposals">blogpost on how we manage to evaluate the CFP submissions.</Link>
          </p>
        </div>
      </ColoredSection>

      <ColoredSection background="light-section">
        <div className="x-container">
          <h2>We're here to help!</h2>
          <p>Not everybody is a natural talent on stage. Not everybody can produce kick-ass slide-decks. Not everybody is a live-demo-god. Not everybody knows they have something great to talk about. There are about a million reasons why you don’t consider yourself a speaker.</p>
          <p>We are here to prove you wrong.If all you have is a gut feeling that you should be on stage, we are here to reach out and help you to develop or hone the skills you think you lack to deliver a great presentation.</p>
          <p>We are happy to brainstorm your interests to see if a great topic is hiding.We are happy to connect you with experienced speakers to help prepare your submission. We are happy to review and advise on how to produce a slide deck.</p>
          <p>If you need practice giving talks, get in touch, we can connect you with local groups.Again, whatever else you might need, we’re here to help.</p>
          <p>
            Get in touch: <Link href="mailto:team@jsconfbp.com" target="_blank">team@jsconfbp.com</Link>
            <br />
            (just please don’t use this address to submit a proposal).
          </p>
        </div>
      </ColoredSection>

      <CfpButton>Submit your talk proposal</CfpButton>
    </>
  )
}

export default CallForPapers
