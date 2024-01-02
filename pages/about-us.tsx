import React from 'react'
import classnames from 'classnames'

import styles from './about.module.scss'

import Youtube from '../ui/youtube'
import ColoredSection from '../ui/colored-section'
import { ColorNames } from './_app'
import kriszti from "../public/team/kriszti.png"

const team = [
  {
    name: 'Szabolcs Szabolcsi&#8209;Tóth',
    image: 'https://nec.is/nec.png',
    twitter: '_nec',
    memberIntro: 'Staff Engineer, IBM alumni, TC39 Emeriti and geek'
  },
  {
    name: 'Dóra Makszy',
    image:
      'https://jsconf.jp/2022/static/25aa690e8489a3691cd37a376dfd1373/8b8ba/dora.webp',
    url: 'https://www.heydorka.rocks/',
    memberIntro: 'Product design lead, design teacher and management coach, strategic thinker'
  },
  {
    name: 'Norbert Sram',
    image:
      'https://pbs.twimg.com/profile_images/1189845618518310913/8uVbKoZr_400x400.jpg',
    twitter: 'snorbi07',
    memberIntro: '...'
  },
  {
    name: 'Krisztina Závecz',
    image: kriszti.src,
    twitter: 'krisztizavecz',
    memberIntro: 'Frontend Developer'
  },
  {
    name: 'Gergő Nagy',
    image:
      'https://pbs.twimg.com/profile_images/1726182395374669824/Te0vF7Or_400x400.jpg',
    twitter: '_gregnagy',
    memberIntro: 'Software Architect, Tech Lead @tally.cash, Imagineer at Dhammaworks'
  },
  {
    name: 'Dániel Lipták',
    image:
      'https://pbs.twimg.com/profile_images/867028857441931265/HJdtCgrz_400x400.jpg',
    twitter: 'daniliptak',
    memberIntro: '...'
  },
]

const earlierEvents = [
  {
    year: 2022,
    siteHref: "https://2022.jsconfbp.com",
    videosLink: "https://www.youtube.com/watch?v=SdV9Xy0E4CM&list=PL37ZVnwpeshGuMZrOZzEo8QLBjjpbtBGm"
  },
  {
    year: 2019,
    siteHref: "https://2019.jsconfbp.com",
    videosLink: "https://www.youtube.com/watch?v=OkovPZ1mVBI&list=PL37ZVnwpeshEMCvdYDdZ09Sy-toTftWu0"
  },
  {
    year: 2017,
    siteHref: "https://2017.jsconfbp.com",
    videosLink: "https://www.youtube.com/watch?v=aHVdJ0QT5rM&list=PL37ZVnwpeshH9ztZfHqvQhF1_Zm4VcCTD"
  },
  {
    year: 2016,
    siteHref: "https://2016.jsconfbp.com",
    videosLink: "https://www.youtube.com/watch?v=CL8_nlqTcw0&list=PL37ZVnwpeshE6PbF5GB4hvtU3A4HqMfxf"
  },
  {
    year: 2015,
    siteHref: "https://2015.jsconfbp.com",
    videosLink: "https://www.youtube.com/watch?v=1zj7M1LnJV4&list=PLFZ5NyC0xHDaaTy6tY9p0C0jd_rRRl5Zm"
  },
]

function About() {
  return (
    <>
      <section className='intro'>
        <h1>
          SZIA! ПРИВІТ! CZEŚĆ! SALUT! ЋАО! AHOJ! DOBRÝ DEN! ΓΕΙΆ ΣΟΥ! HOI! BUNĂ!
          ЗДРАВЕЙТЕ! ПРИВЕТ! HELLO!
        </h1>

        <p>
          We aim to be the JSConf of the region around Eastern-Middle Europe, an
          area so diverse in culture, people and views. A strictly nonprofit,
          open-sourced and community driven conference for the community of
          JavaScript, with the purpose to build and educate about new
          technologies, ideas and culture.
        </p>

        <Youtube videoId="WPj0fDUqt1M" title="JSConf Budapest 2022 Mood video" className="my-2" />

        <Youtube videoId="oWmPuKDiRV4" title="JSConf Budapest 2019 Mood video" className="my-2" />

        <Youtube videoId="mJoS_pLbiWc" title="JSConf Budapest 2016 Mood video" className="my-2" />
      </section>

      <ColoredSection className={styles["jsconf-earlier"]} background='light-section'>
        <h1>JSConf Budapest so far...</h1>

        <div className={styles["all-earlier-events"]}>
          {earlierEvents.map(conf => (
            <div className='single-event' key={`conf-${conf.year}`}>
              <h3>{conf.year}</h3>
              <a href={conf.siteHref}>Site and Speakers</a>
              <a href={conf.videosLink}>Videos</a>
            </div>
          ))}
        </div>
      </ColoredSection>

      <section>
        <h1>
          The Team
        </h1>
        <ul className={classnames('reset', styles.team)}>
          {team.map((member) => {
            const href = member.url || `https://twitter.com/${member.twitter}`
            const hrefDisplay = member.url || `@${member.twitter}`
            return (<li key={member.name}>
              <img alt={member.name} src={member.image} />
              <div className={styles["member-info"]}>
                <h2 className='my-0' dangerouslySetInnerHTML={{ __html: member.name }}></h2>
                <p className={styles["member-intro"]} dangerouslySetInnerHTML={{ __html: member.memberIntro }}></p>
                <a href={href} target='_blank'>{hrefDisplay}</a>
              </div>
            </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default About
