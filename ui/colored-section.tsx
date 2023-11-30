import classNames from "classnames"

import styles from "./colored-section.module.scss"
import { ColorNames } from "../pages/_app";

type ColoredSectionProps = {
    children?: React.ReactNode | React.ReactNode[];
    background?: ColorNames;
    className?: string;
    [key: string]: any;
}

function ColoredSection({
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
        </section >
    )
}

export default ColoredSection