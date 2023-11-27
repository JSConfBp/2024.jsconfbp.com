import classNames from "classnames"

import styles from "./conf-section.module.scss"
import { ColorNames } from "../pages/_app";

interface ColoredSectionProps {
    children?: React.ReactNode | React.ReactNode[];
    background?: ColorNames;
    className?: string;
}

function ConfSection({
    children = undefined,
    background = "background",
    className = "",
    ...props
}: ColoredSectionProps) {

    if (typeof children === "undefined") {
        return null;
    }

    return (
        <section
            className={classNames(styles.main, className)}
            style={{ backgroundColor: `var(--${background})` }}
            {...props}
        >
            {children}
        </section>
    )
}

export default ConfSection