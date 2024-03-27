import Link from "next/link";
import Divider from "./divider";
import Image from "next/image";

import styles from "./footer.module.scss";
import Polygons from "./polygons";
import facebook from "../public/icons/round-facebook.png";
import x from "../public/icons/round-x.png";
import instagram from "../public/icons/round-instagram.png";
import linkedin from "../public/icons/round-linkedin.png";
import mastodon from "../public/icons/round-mastodon.png";
import threads from "../public/icons/round-threads.png";
import bluesky from "../public/icons/round-bluesky.png";

export function Footer() {
  return (
    <>
      <Divider
        type="sym"
        className={styles.divider_override}
        aria-hidden="true"
      >
        <Polygons type="footer-separator" />
      </Divider>
      <div className={styles.coc_box}>
        JSConf Budapest welcomes everybody, please be nice to each other.
      </div>
      <section className={styles.footer_menu}>
        <nav>
          <ul>
            <li>
              <Link href="/code-of-conduct">Code of Conduct</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/budapest-guide">Budapest Guide</Link>
            </li>
          </ul>
        </nav>
        <Polygons type="footer" aria-hidden="true" />
      </section>
      <nav className={styles.past_years}>
        <ul>
          <li>
            <Link href="https://2015.jsconfbp.com" target="_blank">
              2015
            </Link>
          </li>
          <li>
            <Link href="https://2016.jsconfbp.com" target="_blank">
              2016
            </Link>
          </li>
          <li>
            <Link href="https://2017.jsconfbp.com" target="_blank">
              2017
            </Link>
          </li>
          <li>
            <Link href="https://2019.jsconfbp.com" target="_blank">
              2019
            </Link>
          </li>
          <li>
            <Link href="https://2022.jsconfbp.com" target="_blank">
              2022
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="https://www.facebook.com/bp.jsconf" target="_blank">
              <Image src={facebook} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/jsconfbp/" target="_blank">
              <Image src={instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/jsconfbp"
              target="_blank"
            >
              <Image src={linkedin} alt="Linkedin" />
            </Link>
          </li>
          <li>
            <Link href="https://mstdn.social/@jsconfbp" target="_blank">
              <Image src={mastodon} alt="Mastodon" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/jsconfbp" target="_blank">
              <Image src={x} alt="X" />
            </Link>
          </li>
          <li>
            <Link href="https://www.threads.net/@jsconfbp" target="_blank">
              <Image src={threads} alt="Threads" />
            </Link>
          </li>
          <li>
            <Link href="https://bsky.app/profile/jsconfbp.bsky.social" target="_blank">
              <Image src={bluesky} alt="Bsky" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
