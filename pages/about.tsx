import React from 'react'
import classnames from 'classnames'
import { useHeadingDecorator } from '../hooks/useHeadingDecorator'

import styles from './about.module.scss'

import Layout from '../ui/layout'
import Youtube from '../ui/youtube'

const team = [
  {
    name: 'Szabolcs Szabolcsi-Tóth',
    image: 'https://nec.is/nec.png',
    twitter: '_nec',
  },
  {
    name: 'Dora Makszy',
    image:
      'https://jsconf.jp/2022/static/25aa690e8489a3691cd37a376dfd1373/8b8ba/dora.webp',
    twitter: 'jsconfbp',
  },
  {
    name: 'Norbert Srám',
    image:
      'https://pbs.twimg.com/profile_images/1189845618518310913/8uVbKoZr_400x400.jpg',
    twitter: 'snorbi07',
  },
  {
    name: 'Krisztina Závecz',
    image:
      'https://pbs.twimg.com/profile_images/1027948395200237568/KkMN51Em_400x400.jpg',
    twitter: 'krisztizavecz',
  },
  {
    name: 'Gergő Nagy',
    image:
      'https://pbs.twimg.com/profile_images/1726182395374669824/Te0vF7Or_400x400.jpg',
    twitter: '_puffancs',
  },
  {
    name: 'Daniel Liptak',
    image:
      'https://pbs.twimg.com/profile_images/867028857441931265/HJdtCgrz_400x400.jpg',
    twitter: 'daniliptak',
  },
]

const About = () => {
  const [, getClassName] = useHeadingDecorator()
  return (
    <Layout title="About us" pathName="/about">
      <h1 className={getClassName({ color: 'purple', side: 'left' })}>
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

      <Youtube src="WPj0fDUqt1M" title="JSConf Budapest 2022 Mood video" />

      <Youtube src="oWmPuKDiRV4" title="JSConf Budapest 2019 Mood video" />

      <Youtube src="mJoS_pLbiWc" title="JSConf Budapest 2016 Mood video" />

      <h2 className={getClassName({ color: 'orange', side: 'right' })}>
        JSConf Budapest so far
      </h2>

      <p>Check out our earlier events!</p>

      <h3>2022</h3>

      <p>
        <a href="https://2022.jsconfbp.com">Site & Speakers</a>,<br />
        <a href="https://www.youtube.com/watch?v=SdV9Xy0E4CM&list=PL37ZVnwpeshGuMZrOZzEo8QLBjjpbtBGm">
          Videos of 2022
        </a>
      </p>

      <h3>2019</h3>

      <p>
        <a href="https://2019.jsconfbp.com">Site & Speakers</a>,<br />
        <a href="https://www.youtube.com/watch?v=OkovPZ1mVBI&list=PL37ZVnwpeshEMCvdYDdZ09Sy-toTftWu0">
          Videos of 2019
        </a>
      </p>

      <h3>2017</h3>

      <p>
        <a href="http://2017.jsconfbp.com">Site & Speakers</a>,<br />
        <a href="https://www.youtube.com/watch?v=aHVdJ0QT5rM&list=PL37ZVnwpeshH9ztZfHqvQhF1_Zm4VcCTD">
          Videos of 2017
        </a>
      </p>

      <h3>2016</h3>

      <p>
        <a href="http://2016.jsconfbp.com">Site & Speakers</a>,<br />
        <a href="https://www.youtube.com/watch?v=CL8_nlqTcw0&list=PL37ZVnwpeshE6PbF5GB4hvtU3A4HqMfxf">
          Videos of 2016
        </a>
      </p>

      <h3>2015</h3>

      <p>
        <a href="http://2015.jsconfbp.com">Site & Speakers</a>,<br />
        <a href="https://www.youtube.com/watch?v=1zj7M1LnJV4&list=PLFZ5NyC0xHDaaTy6tY9p0C0jd_rRRl5Zm">
          Videos of 2015
        </a>
      </p>

      <h2 className={getClassName({ color: 'lightorange', side: 'left' })}>
        The Team
      </h2>

      <ul className={classnames('unstyled', styles.team)}>
        {team.map((member) => (
          <li key={member.name}>
            <a href={`https://twitter.com/${member.twitter}`}>
              <span>
                <img alt={member.name} src={member.image} />
              </span>
              <span className={styles.name}>{member.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </Layout >
  )
}

export default About
