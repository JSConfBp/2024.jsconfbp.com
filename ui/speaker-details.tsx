import React from "react";
import styles from "./speaker-details.module.scss";
import SpeakerPicture from "./speaker-picture";
import { StaticImageData } from "next/image";
import Link from "next/link";
import Polygons from "./polygons";

type SpeakerDetailsProps = {
  name: string;
  image: StaticImageData | string;
  imageAlign?: "left" | "right";
  children?: React.ReactNode | React.ReactNode[];
  location?: string;
  socialMediaHandle?: string;
  socialMediaUrl?: string;
  website?: string;
  work?: string;
  workURL?: string;
};

function SpeakerDetails(props: SpeakerDetailsProps) {
  const {
    name,
    image,
    imageAlign,
    children,
    location,
    socialMediaHandle,
    socialMediaUrl,
    website,
    work,
    workURL,
  } = props;

  return (
    <div className={styles.speaker_details}>
      <h2 className={styles.name}>{name}</h2>

      <SpeakerPicture
        image={image}
        align={imageAlign ?? "left"}
        className={`${styles.image}`}
      />

      <div className={styles.details}>
        <div className={styles.details_wrapper}>
          <Polygons
            type="speaker-details-top"
            className={styles.details_decoration_top}
          />
          <ul>
            {location && (
              <li className={styles.location}>
                <Link href={`https://www.google.com/maps/place/${location}`}>
                  {location}
                </Link>
              </li>
            )}
            {socialMediaHandle && (
              <li>
                <Link href={socialMediaUrl}>{socialMediaHandle}</Link>
              </li>
            )}
            {website && (
              <li className={styles.website}>
                <Link href={website}>Website</Link>
              </li>
            )}
            {work && (
              <li className={styles.work}>
                {workURL ? <Link href={workURL}>{work}</Link> : work}
              </li>
            )}
          </ul>
          <Polygons
            type="speaker-details-bottom"
            className={styles.details_decoration_bottom}
          />
        </div>
      </div>

      <div className={styles.bio}>{children}</div>
    </div>
  );
}

export default SpeakerDetails;
