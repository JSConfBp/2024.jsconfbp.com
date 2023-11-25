import Divider from "./divider";

import styles from "./footer.module.scss";

import { getTrianglesWithColorAndFill } from "./svg-helpers";

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
        <svg className={styles.footer_polygons} viewBox="0 0 194 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            {getTrianglesWithColorAndFill(trianglePaths)}
        </svg>

    )
}

export function Footer() {
    return (
        <>
            <Divider type="sym" className={styles.divider_override}>
                {FooterSeparatorPolygons()}
            </Divider>
            <div className={styles.coc_box}>
                JSConf Budapest welcomes everybody, please be nice to each other.
            </div>
        </>
    );
}