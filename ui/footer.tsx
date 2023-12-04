import Link from "next/link";
import Divider from "./divider";

import styles from "./footer.module.scss";
import Polygons from "./polygons";

export function Footer() {
    return (
        <>
            <Divider type="sym" className={styles.divider_override} aria-hidden="true">
                <Polygons type="footer-separator" />
            </Divider>
            <div className={styles.coc_box}>
                JSConf Budapest welcomes everybody, please be nice to each other.
            </div>
            <section className={styles.footer_menu}>
                <nav>
                    <ul>
                        <li><Link href="/code-of-conduct">Code of Conduct</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/budapest-guide">Budapest Guide</Link></li>
                    </ul>
                </nav>
                <Polygons type="footer" aria-hidden="true" />
            </section>
            <nav className={styles.past_years}>
                <ul>
                    <li>
                        <Link href="https://2015.jsconfbp.com" target="_blank">2015</Link>
                    </li>
                    <li>
                        <Link href="https://2016.jsconfbp.com" target="_blank">2016</Link>
                    </li>
                    <li>
                        <Link href="https://2017.jsconfbp.com" target="_blank">2017</Link>
                    </li>
                    <li>
                        <Link href="https://2019.jsconfbp.com" target="_blank">2019</Link>
                    </li>
                    <li>
                        <Link href="https://2022.jsconfbp.com" target="_blank">2022</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}