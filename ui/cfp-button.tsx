import Link from "next/link";

import styles from "./cfp-button.module.scss";
import { ReactNode } from "react";

interface CfpButtonProps {
  url?: string;
  children: ReactNode;
}

function CfpButton({url, children}: CfpButtonProps) {
    return (
        <div className={styles.main}>
          <button className={styles.button}>
              {url ?
                (<Link href="" className={styles.button}>
                  {children}
                </Link>)
                : <>{children}</>
              }
          </button>
        </div>)
}

export default CfpButton;
