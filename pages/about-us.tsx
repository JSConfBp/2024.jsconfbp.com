import React, { useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./about.module.scss";

import Youtube from "../ui/youtube";
import ColoredSection from "../ui/colored-section";
import Polygons from "../ui/polygons";

import SpeakerPicture from "../ui/speaker-picture";

import nec from "../public/team/nec.png";
import gergo from "../public/team/gergo.png";
import norbi from "../public/team/norbi.png";
import ben from "../public/team/ben.png";
import kriszti from "../public/team/kriszti.png";
import dorka from "../public/team/dorka.png";
import aniko from "../public/team/aniko.png";
import freevo from "../public/team/freevo.png";
import tim from "../public/team/tim.png";

const team = [
  {
    name: "Szabolcs Szabolcsi&#8209;Tóth",
    image: nec.src,
    pronouns: "he/him",
    role: "Main organiser, Curator",
    social: {
      label: "@_Nec",
      link: "https://twitter.com/_Nec",
    },
    memberIntro: "Staff Engineer, IBM alumni, TC39 Emeriti and geek",
  },
  {
    name: "Gergő Nagy",
    image: gergo.src,
    pronouns: "he/him",
    role: "Website & Venue",
    social: {
      label: "@_gregnagy",
      link: "https://twitter.com/_gregnagy",
    },
    memberIntro: "L6 engineer, Vipassana pracitioner, Imagineer at Dhammaworks",
  },
  {
    name: "Kriszti Závecz",
    image: kriszti.src,
    pronouns: "she/her",
    role: "Attendees & Curator",
    social: {
      label: "@krisztizavecz",
      link: "https://twitter.com/krisztizavecz",
    },
    memberIntro: "Frontend developer & fitness addict, mother to 3 kids",
  },
  {
    name: "Norbert Sram",
    image: norbi.src,
    pronouns: "he/him",
    role: "Sales, Workshops & Partners",
    social: {
      label: "@snorbi07",
      link: "https://twitter.com/snorbi07",
    },
    memberIntro:
      "Avid JS meetup organizer, OSS and Linux enthusiast, founder and CEO",
  },
  {
    name: "Anikó Vera Fejes",
    image: aniko.src,
    pronouns: "she/them",
    role: "Access & Belonging",
    social: {
      label: "@hubudibu",
      link: "https://www.threads.net/@hubudibu",
    },
    memberIntro: "1x engineer, girl moss, game master",
  },
  {
    name: "Dóra Makszy",
    image: dorka.src,
    pronouns: "she/her",
    role: "Design & Social Media",
    social: {
      label: "heydorka.rocks",
      link: "https://www.heydorka.rocks/",
    },
    memberIntro:
      "Designer and strategic thinker. Fluent in English and sarcasm.",
  },
  {
    name: "Benedek Gagyi",
    image: ben.src,
    pronouns: "he/him",
    role: "Curator",
    social: {
      label: "benedek-gagyi",
      link: "https://hu.linkedin.com/in/benedek-gagyi",
    },
    memberIntro: "Developer, teacher and sports-fanatic with a tea addiction.",
  },
  {
    name: "Péter Frivalszky-Mayer",
    image: freevo.src,
    pronouns: "he/him",
    role: "Curator",
    social: {
      label: "freevo",
      link: "https://bento.me/freevo",
    },
    memberIntro:
      "Husband, father, IBMer, TC39 delegate. My dream pet project: a character builder for my own TTRPG built in Svelte.",
  },
  {
    name: "Tim Pietrusky",
    image: tim.src,
    pronouns: "he/him",
    role: "Community lounge",
    social: {
      label: "nerddisco",
      link: "https://nerddis.co/",
    },
    memberIntro:
      "Co-Founder at Blibla, Developer, Artist, VJ, Mentor, Speaker, Father of 2 kids",
  },
];

const earlierEvents = [
  {
    year: 2022,
    siteHref: "https://2022.jsconfbp.com",
    videosLink:
      "https://www.youtube.com/watch?v=SdV9Xy0E4CM&list=PL37ZVnwpeshGuMZrOZzEo8QLBjjpbtBGm",
  },
  {
    year: 2019,
    siteHref: "https://2019.jsconfbp.com",
    videosLink:
      "https://www.youtube.com/watch?v=OkovPZ1mVBI&list=PL37ZVnwpeshEMCvdYDdZ09Sy-toTftWu0",
  },
  {
    year: 2017,
    siteHref: "https://2017.jsconfbp.com",
    videosLink:
      "https://www.youtube.com/watch?v=aHVdJ0QT5rM&list=PL37ZVnwpeshH9ztZfHqvQhF1_Zm4VcCTD",
  },
  {
    year: 2016,
    siteHref: "https://2016.jsconfbp.com",
    videosLink:
      "https://www.youtube.com/watch?v=CL8_nlqTcw0&list=PL37ZVnwpeshE6PbF5GB4hvtU3A4HqMfxf",
  },
  {
    year: 2015,
    siteHref: "https://2015.jsconfbp.com",
    videosLink:
      "https://www.youtube.com/watch?v=1zj7M1LnJV4&list=PLFZ5NyC0xHDaaTy6tY9p0C0jd_rRRl5Zm",
  },
];

const breakpoints = [
  [0, 799],
  [800, 1023],
  [1024, 1279],
  [1280, 1919],
  [1920, Infinity],
];

function About() {
  const [lowerBreakpoint, setLowerBreakpoint] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const currentBreakpointRange = breakpoints.find(
        (b) => window.innerWidth >= b[0] && window.innerWidth <= b[1],
      );
      setLowerBreakpoint(currentBreakpointRange[0]);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="intro">
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

        <Youtube
          videoId="WPj0fDUqt1M"
          title="JSConf Budapest 2022 Mood video"
          className="my-2"
        />

        <Youtube
          videoId="oWmPuKDiRV4"
          title="JSConf Budapest 2019 Mood video"
          className="my-2"
        />

        <Youtube
          videoId="mJoS_pLbiWc"
          title="JSConf Budapest 2016 Mood video"
          className="my-2"
        />
      </section>

      <ColoredSection
        className={styles["jsconf-earlier"]}
        background="light-section"
      >
        <h1>JSConf Budapest so far...</h1>

        <div className={styles["all-earlier-events"]}>
          {earlierEvents.map((conf) => (
            <div className="single-event" key={`conf-${conf.year}`}>
              <h3>{conf.year}</h3>
              <a href={conf.siteHref}>Site and Speakers</a>
              <a href={conf.videosLink}>Videos</a>
            </div>
          ))}
        </div>
      </ColoredSection>

      <section>
        <h1 className={styles["team-header"]}>The Team</h1>
        <ul className={classnames("reset", styles.team)}>
          {team.map((member, i) => {
            const line = Math.floor(i / 2);
            let imageAlign;
            if (line % 2 === 0) {
              imageAlign = i % 2 === 0 ? "left" : "right";
            } else {
              imageAlign = i % 2 === 0 ? "right" : "left";
            }

            return (
              <li key={member.name}>
                <SpeakerPicture
                  image={member.image}
                  align={imageAlign}
                  decorationAlign={i % 2 === 0 ? "right" : "left"}
                  alt={member.name}
                  // className={`${styles["img-wrapper"]}`}
                />
                <div className={styles["member-info"]}>
                  <h2
                    className="my-0"
                    dangerouslySetInnerHTML={{ __html: member.name }}
                  ></h2>
                  <p className={styles["member-role"]}>{member.role}</p>
                  <a href={member.social.link} target="_blank">
                    {member.social.label}
                  </a>
                  <p className={styles["member-intro"]}>
                    {member.memberIntro}
                    <small>{member.pronouns}</small>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default About;
