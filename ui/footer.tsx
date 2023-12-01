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
                        <li><a href="/code-of-conduct">Code of Conduct</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/budapest-guide">Budapest Guide</a></li>
                    </ul>
                </nav>
                <Polygons type="footer-separator" aria-hidden="true" />
            </section>
            <nav className={styles.past_years}>
                <ul>
                    <li>
                        <a href="https://2015.jsconfbp.com" target="_blank">2015</a>
                    </li>
                    <li>
                        <a href="https://2016.jsconfbp.com" target="_blank">2016</a>
                    </li>
                    <li>
                        <a href="https://2017.jsconfbp.com" target="_blank">2017</a>
                    </li>
                    <li>
                        <a href="https://2019.jsconfbp.com" target="_blank">2019</a>
                    </li>
                    <li>
                        <a href="https://2022.jsconfbp.com" target="_blank">2022</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}