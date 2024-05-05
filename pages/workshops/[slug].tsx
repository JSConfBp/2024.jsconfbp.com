import Divider from "../../ui/divider";

import WORKSHOPS from "../../data/workshops";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

import styles from "./workshops.module.scss";
import classNames from "classnames";
import SocialShare from "../../ui/social-share";
import Link from "next/link";
import CenteredButton from "../../ui/centered-button";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize as MDXSerialize } from "next-mdx-remote/serialize";
import { SeatCount } from "../../ui/seat-count";
import { useEffect, useState } from "react";

export const getStaticPaths = (async () => {
  // We want to generate the published speaker pages at build time
  return {
    paths: WORKSHOPS.filter((t) => t.published).map((t) => ({
      params: { slug: t.slug },
    })),
    // https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#generating-paths-on-demand
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  // We load the data for the speaker page at build time
  // The getStaticProps loads the full data based on the params sent by the getStaticPaths
  // https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-paths#where-can-i-use-getstaticpaths
  //   - getStaticPaths must be used with getStaticProps
  const data = WORKSHOPS.find((t) => context.params.slug === t.slug);

  const abstractMdxSerialized = await MDXSerialize(data.abstract);

  return {
    props: {
      data: {
        ...data,
        abstractMdxSerialized,
      },
    },
  };
}) satisfies GetStaticProps<{
  data: (typeof WORKSHOPS)[number] & {
    abstractMdxSerialized: MDXRemoteSerializeResult;
  };
}>;

export default function WorkshopPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  // not sure why we need this, but in dev mode, data is often undefined
  if (!data) return null;

  const [registrationOpen, setRegistrationOpen] = useState(false);

  useEffect(() => {
    fetch("https://workshop-registration.herokuapp.com/api/seats")
      .then((res) => res.json())
      .then((data) => {
        setRegistrationOpen(data[sponsor.name.toUpperCase()].open);
      });
  }, []);

  const {
    published,

    title,
    summary,
    abstractMdxSerialized,
    socialShareImage,
    venue,
    sponsor,
    startTime,
    endTime,
  } = data;

  if (!published) {
    router.push("/404");
    return null;
  }

  return (
    <>
      <SocialShare
        title={title}
        description={summary}
        socialShareImage={socialShareImage}
      />
      <Divider>
        <h1 className={classNames("text-center", styles["workshop-title"])}>
          {title}
        </h1>
      </Divider>

      <div className={styles["workshop-metadata"]}>
        {sponsor.logo && sponsor.name && sponsor.link && (
          <Link href={sponsor.link} target="_blank" className={styles.sponsor}>
            <Image
              src={sponsor.logo}
              alt={`Logo for ${sponsor.name}`}
              fill
              className={styles["sponsor-logo"]}
            />
          </Link>
        )}

        <ul className={styles["details"]}>
          <li>
            Date: 26th June 2024
            {startTime && endTime ? `, ${startTime}-${endTime}` : ""}
          </li>
          <li>
            Venue: {venue.name}
            {venue.address && ", "}
            {venue.address && (
              <Link
                href={`https://www.google.com/maps/place/${venue.address}`}
                className={styles["venue-address"]}
              >
                {venue.address}
              </Link>
            )}
          </li>
          <li>
            Seats available:{" "}
            <SeatCount workshopKey={sponsor.name.toUpperCase()} />
          </li>
        </ul>
      </div>

      <CenteredButton
        href="https://workshop-registration.herokuapp.com/"
        target="_self"
        disabled={!registrationOpen}
        className={styles.registration}
      >
        {registrationOpen ? "Register here!" : "Registration Opens Soon!"}
      </CenteredButton>

      <MDXRemote {...abstractMdxSerialized} />

      <p>
        This workshop is FREE for every ticket holder of JSConf Budapest 2024.
        Don't have a ticket yet?{" "}
        <Link href="https://ti.to/jsconf-bp/jsconf-budapest-2024">
          Get yours
        </Link>{" "}
        and secure your workshop seat!
      </p>
    </>
  );
}
