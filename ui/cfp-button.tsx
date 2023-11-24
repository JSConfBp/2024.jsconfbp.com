import Link from "next/link";

import styles from "./cfp-button.module.scss";

function CfpButton() {
    return (
        <div className={styles.main}>
            <Link href="/" className={styles.button}>
                Call for Papers
            </Link>
        </div>);
}

export default CfpButton;