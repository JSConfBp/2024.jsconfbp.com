import Link from "next/link"
import SpeakerPicture from "./speaker-picture"
import styles from './mc-list.module.scss'
import anjana from "../public/speakers/anjana.png"
import tejas from "../public/speakers/tejas.png"

function MCList() {

  return (<div className={`col md-row gap-2p5 mb-2 mt-4 ${styles['mc-list']}`}>
    <div className={`col gap-2p5 md-row ${styles['mc-list-item']}`}>
      <SpeakerPicture
        image={anjana.src}
        align="right"
        decorationAlign="right"
        className={`${styles['mc-list-image']}`}
      />
      <div className={styles.text}>
        <h3 className={styles.name}>Anjana Vakil</h3>
        <Link href="https://twitter.com/AnjanaVakil" className={styles.link}>@AnjanaVakil</Link>
        <p>Engineering & teaching & learning ✨ Independent Developer Educator & Software Engineer ✨ she/her </p>
      </div>
    </div>
    <div className={`col gap-2p5 md-rrow ${styles['mc-list-item']}`}>
      <SpeakerPicture
        image={tejas.src}
        align="left"
        decorationAlign="left"
        className={`${styles['mc-list-image']}`}
      />
      <div className={styles.text}>
        <h3 className={styles.name}>Tejas Kumar</h3>
        <Link href="https://twitter.com/TejasKumar_" className={styles.link}>@TejasKumar_</Link>
        <p>I write code and love life.</p>
      </div>
    </div>
  </div>)
}

export default MCList





