import Link from "next/link"
import SpeakerPicture from "./speaker-picture"
import styles from './speaker-list.module.scss'

import TALKS from "../data/talks";

type SpeakerListProps = {
  speakers: typeof TALKS;
}

function SpeakerList({speakers}:SpeakerListProps) {

  return (<div className={`md-row mb-2 mt-4 ${styles['speaker-list']}`}>
    {speakers.map(({slug, speaker, talk}, i) => {
      const rowAlign = i % 2 === 0 ? 'md-row' : 'md-rrow';
      const line = Math.floor(i / 2);
      const decorationAlign = i % 2 === 0 ? 'right': 'left';
      let imageAlign;
      if (line % 2 === 0) {
        imageAlign = i % 2 === 0 ? 'right': 'left';
      } else  {
        imageAlign = i % 2 === 0 ? 'left': 'right';
      }

      return (
        <div className={`col gap-2p5 ${rowAlign} ${styles['speaker-list-item']}`} key={slug}>
           <Link href={`/speakers/${slug}`}>
          <SpeakerPicture
            image={speaker.profilePicturePath}
            align={imageAlign}
            decorationAlign={decorationAlign}
            className={`${styles['speaker-list-image']}`}
          />
          </Link>
          <div className={styles.text}>
            <h3 className={styles.title}>
              <Link href={`/speakers/${slug}`}>
                {talk.title}
              </Link>
              </h3>
            <p className={styles.name}>{speaker.name}</p>
          </div>
        </div>
      )
    })}
  </div>)
}

export default SpeakerList





