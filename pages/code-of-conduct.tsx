import React from "react";
import Divider from "../ui/divider";
import SocialShare from "../ui/social-share";

function CodeOfConduct() {
  return (
    <>
      <SocialShare title="Code of Conduct" />
      <Divider>
        <h1>Code of Conduct</h1>
      </Divider>
      <p>
        All attendees, speakers, partners and volunteers at JSConf Budapest are
        required to agree with the following code of conduct. Organizers will
        enforce this code throughout the event. We are expecting cooperation
        from all participants to help ensuring a safe environment for everybody.
      </p>
      <p>
        <em>tl;dr: Don’t be a Jerk. Be excellent!</em>
      </p>
      <h2>Need help?</h2>
      <p>Contact Szabolcs!</p>
      <p>
        Twitter: <a href="https://twitter.com/_Nec">@_nec</a> <br />
        Email: <a href="mailto:nec@jsconfbp.com">nec@jsconfbp.com</a> <br />
        Phone (HU): +36 70 389 1288
      </p>
      <p>
        Conference staff will be happy to help participants contact hotel/venue
        security or local law enforcement, provide escorts, or otherwise assist
        those experiencing harassment to feel safe for the duration of the
        conference.
      </p>
      <p>We value your attendance.</p>
      <h2>Purpose of this document</h2>
      <p>
        JSConf Budapest is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, sexual orientation,
        disability, physical appearance, body size, race, or religion. We do not
        tolerate harassment of conference participants in any form.
      </p>
      <p>
        Sexual language and imagery is not appropriate for any conference venue,
        including talks, workshops, parties, Twitter and other online media.
      </p>
      <p>
        Conference participants violating these rules may be sanctioned or
        expelled from the conference without a refund at the discretion of the
        conference organizers.
      </p>
      <p>
        Partners are also subject to the anti-harassment policy. In particular,
        partners should not use sexualized images, activities, or other
        material. Booth staff (including volunteers) should not use sexualized
        clothing/uniforms/costumes, or otherwise create a sexualized
        environment.
      </p>
      <h2>Reporting</h2>
      <p>
        If someone makes you or anyone else feel unsafe or unwelcome, please
        report it as soon as possible. If you see or hear someone do something
        that might violate this Code of Conduct, please report it.
      </p>
      <p>You can make a personal report by:</p>
      <ul>
        <li>
          Contacting a staff member, identified by our bright yellow tshirts
          with our logo on it
        </li>
        <li>Twitter direct messages: our DMs on twitter are always open</li>
        <li>
          Email - but it might take a few hours or a day before we can respond
          during or after the event.
        </li>
      </ul>
      <h2>Enforcement</h2>
      <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately.
      </p>
      <p>
        If a participant engages in harassing behaviour, event organisers retain
        the right to take any actions to keep the event a welcoming environment
        for all participants. This includes warning the offender or expulsion
        from the conference with no refund.
      </p>
      <p>
        We expect participants to follow these rules at conference and workshop
        venues and conference-related social events.
      </p>
      <h2>Harassment</h2>
      <p>Harassment includes, but is not limited to:</p>
      <ul>
        <li>
          Verbal or written comments that reinforce social structures of
          domination related to gender, gender identity and expression, sexual
          orientation, disability, physical appearance, body size, race, age,
          religion
        </li>
        <li>Sexual images in public spaces</li>
        <li>Deliberate intimidation, stalking, or following</li>
        <li>Harassing photography or recording</li>
        <li>Sustained disruption of talks or other events</li>
        <li>Inappropriate physical contact</li>
        <li>Unwelcome sexual attention</li>
        <li>Advocating for, or encouraging, any of the above behaviour</li>
      </ul>
      <h2>Attribution</h2>
      <p>
        This Code of Conduct was based on{" "}
        <a href="https://2018.jsconf.eu">JSConf EU</a>,{" "}
        <a href="http://2018.jsconfau.com/">CSSConf / JSConf AU</a>,{" "}
        <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">
          The Geek Feminism wiki
        </a>
        , the work of{" "}
        <a href="https://frameshiftconsulting.com/code-of-conduct-training/">
          Valerie Aurora
        </a>
        , <a href="https://wealljs.org/code-of-conduct">WeAllJS</a>, and{" "}
        <a href="http://confcodeofconduct.com/">Conference Code of Conduct</a>.
      </p>

      <Divider>
        <h1>Community guidelines</h1>
      </Divider>
      <h2>Photo policy</h2>
      <p>
        We will have colored lanyards for attendees to indicate their comfort
        level with being photographed:
      </p>
      <ul>
        <li>
          <strong>Black</strong> means It's OK to take photographs <br />
          (within the boundaries of the Code of Conduct)
        </li>
        <li>
          <strong>Red</strong> means you should not take photos of someone, nor
          should you ask if you may
        </li>
      </ul>
      <h2>Inclusive language</h2>
      <p>
        In our commitment to a harassment-free and inclusive environment we
        strongly believe it's important to pay attention to harmful language
        patterns.
      </p>
      <h3>Ableism</h3>
      <p>
        Words like "crazy", "dumb", "insane" or "lame" are examples of ableist
        language, devaluating people who have physical or mental disabilities.
        Its appearance often stems not from any intentional desire to offend,
        but from our innate sense of what it means to be normal. These words can
        be avoided by using more fitting, clearer descriptions of what we want
        to communicate.
      </p>
      <p>
        To find out more about ableism and replacement terms please read{" "}
        <a href="http://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">
          this guide.
        </a>
      </p>
      <h3>Sexism</h3>
      <p>
        Using gendered terms like "dude" or "guys" to address a mixed-gendered
        group of people contributes to furthering exclusion of underrepresented
        individuals. We strongly advise avoiding gendered pronouns as well as
        gendered terms.
      </p>
      <p>
        For more information please familiarise yourself with the{" "}
        <a href="http://geekfeminism.wikia.com/wiki/Nonsexist_language">
          Geek Feminism wiki guide.
        </a>
      </p>
    </>
  );
}

export default CodeOfConduct;
