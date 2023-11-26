import Divider from "./divider";

import styles from "./footer.module.scss";

import { getTrianglesWithColorAndFill } from "./svg-helpers";

function FooterPolygons() {
    return (
        <svg className={styles.footer_polygons} viewBox="0 0 205 245" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M160 205.5H159.5V206V240.5V241.707L160.354 240.854L194.854 206.354L195.707 205.5H194.5H160Z" stroke="#9E19EF" />
            <path d="M161.957 117.644L161.604 117.291L161.25 117.644L136.864 142.03L136.011 142.884L137.218 142.884H185.989L187.196 142.884L186.343 142.03L161.957 117.644Z" fill="#07BDBD" stroke="#07BDBD" />
            <path d="M72.5 244.5L73 244.5L73 244L73 220.5L73 219.274L72.1427 220.15L49.1427 243.65L48.311 244.5L49.5 244.5L72.5 244.5Z" fill="#9E19EF" stroke="#9E19EF" />
            <path d="M118 206L118 206.5L118.5 206.5L142 206.5L143.207 206.5L142.354 205.646L118.854 182.146L118 181.293L118 182.5L118 206Z" stroke="#9E19EF" />
            <path d="M151.396 185.484L151.75 185.838L152.104 185.484L184.984 152.604L185.838 151.75L184.63 151.75L118.87 151.75L117.662 151.75L118.516 152.604L151.396 185.484Z" stroke="#07BDBD" />
            <path d="M118 244L118 244.5L118.5 244.5L130 244.5L131.172 244.5L130.361 243.654L118.861 231.654L118 230.756L118 232L118 244Z" fill="#07BDBD" stroke="#07BDBD" />
            <path d="M75 212.5L75 213L75.5 213L87.5 213L88.7444 213L87.846 212.139L75.846 200.639L75 199.828L75 201L75 212.5Z" stroke="#9E19EF" />
            <path d="M177 115L177 114.5L176.5 114.5L165.5 114.5L164.293 114.5L165.146 115.354L176.146 126.354L177 127.207L177 126L177 115Z" stroke="#07BDBD" />
            <path d="M179 112L179 112.5L179.5 112.5L202.5 112.5L203.726 112.5L202.85 111.643L179.85 89.1426L179 88.3114L179 89.5L179 112Z" fill="#9E19EF" stroke="#9E19EF" />
            <path d="M198 26.5L198.5 26.5L198.5 26L198.5 3L198.5 1.79289L197.646 2.64645L174.646 25.6464L173.793 26.5L175 26.5L198 26.5Z" stroke="#9E19EF" />
            <path d="M200.5 181.5V181H200H181.5H180.293L181.146 181.854L199.646 200.354L200.5 201.207V200V181.5Z" fill="#07BDBD" stroke="#07BDBD" />
            <path d="M199.5 244L200 244L200 243.5L200 209L200 207.793L199.146 208.646L164.646 243.146L163.793 244L165 244L199.5 244Z" fill="#9E19EF" stroke="#9E19EF" />
            <path d="M151 66.5L151 67L151.5 67L175 67L176.226 67L175.35 66.1427L151.85 43.1427L151 42.311L151 43.5L151 66.5Z" stroke="#9E19EF" />
            <path d="M128.5 68H128V68.5V79.5V80.6366L128.838 79.8686L140.838 68.8686L141.785 68H140.5H128.5Z" fill="#07BDBD" stroke="#07BDBD" />
        </svg>
    )
}

function FooterSeparatorPolygons() {
    const trianglePaths = [
        "M97.6479 100.847L56.702 59.9011L138.594 59.9011L97.6479 100.847Z",
        "M102.75 23.4079L125.593 46.2513H79.9066L102.75 23.4079Z",
        "M73.6908 27.3047L57.5755 43.4199L57.5755 11.1895L73.6908 27.3047Z",
        "M33.0104 34.4541L41.9756 25.4889L41.9756 43.4193L33.0104 34.4541Z",
        "M12.0981 17.3968L7.72751 13.0262H16.4688L12.0981 17.3968Z",
        "M44.402 64.7012L48.7726 60.3305V69.0718L44.402 64.7012Z",
        "M150.171 38.459L143.018 45.6122V31.3058L150.171 38.459Z",
        "M162.192 26.4369L155.039 19.2836L169.346 19.2836L162.192 26.4369Z",
        "M174.277 27.3463L192.598 45.6676L155.956 45.6676L174.277 27.3463Z",
    ]
    return (
        <svg className={styles.footer_separator_polygons} viewBox="0 0 194 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            {getTrianglesWithColorAndFill(trianglePaths)}
        </svg>

    )
}

export function Footer() {
    return (
        <>
            <Divider type="sym" className={styles.divider_override} aria-hidden="true">
                {FooterSeparatorPolygons()}
            </Divider>
            <div className={styles.coc_box}>
                JSConf Budapest welcomes everybody, please be nice to each other.
            </div>
            <section className={styles.footer_menu}>
                <nav>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/code-of-conduct">Code of Conduct</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/budapest-guide">Budapest Guide</a></li>
                    </ul>
                </nav>
                <FooterPolygons aria-hidden="true" />
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