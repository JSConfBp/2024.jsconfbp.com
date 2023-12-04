import classNames from "classnames"

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
    sectionClassName = "",
    ...props
}: ColoredSectionProps) {

    if (typeof children === "undefined") {
        return null;
    }

    return (
        <section
            className={classNames(sectionClassName, "x-fill pb-2 col align-center")}
            style={{ backgroundColor: `var(--${background})` }}
            {...props}
        >
            <div className={classNames(className, "x-container")}>
                {children}
            </div>
        </section >
    )
}

export default ColoredSection