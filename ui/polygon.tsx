import styles from './polygon.module.scss'

function getColor(color: "primary" | "secondary") {
    switch (color) {
        case "primary":
            return "var(--primary, #07BDBD)";
        case "secondary":
            return "var(--secondary, #9E19EF)";
    }
}

const HeaderLeftPolygon = () => {
    const paths = [
        "M355.753 308.122L318.069 345.806V270.438L355.753 308.122Z",
        "M345.5 212.5L238.207 212.5L345.5 105.207L345.5 212.5Z",
        "M131.552 50.7071L162.884 82.0397L99.538 82.7209L131.552 50.7071Z",
        "M257.291 95.9979L238.722 114.567L238.319 77.0254L257.291 95.9979Z",
        "M65.791 115.761L97.8179 147.788L33.7641 147.788L65.791 115.761Z",
        "M86.6172 268.527L34.7913 216.701L138.443 216.701L86.6172 268.527Z",
        "M188.12 173.037L203.884 188.8L172.357 188.8L188.12 173.037Z",
        "M33.2637 83.234L49.0271 98.9975L17.5002 98.9975L33.2637 83.234Z",
        "M351.027 212.264L351.027 167.971L395.32 212.264L351.027 212.264Z",
        "M234.082 368.905L219.733 383.254V354.556L234.082 368.905Z",
        "M0.707107 32.5269L32.0269 1.20705L32.0269 63.8467L0.707107 32.5269Z",
        "M185.999 515.983L161.043 491.028H210.955L185.999 515.983Z",
        "M188.024 262.432L235.607 214.849L235.607 310.015L188.024 262.432Z",
        "M202.263 402.139L233.583 433.459L170.943 433.459L202.263 402.139Z"
    ];

    return (
        <svg className={styles.header_left} width="397" height="517" viewBox="0 0 397 517" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.map((path, index) => {
                const color = getColor(Math.random() < 0.5 ? "primary" : "secondary");
                const hasFill = Math.random() < 0.5;
                return <path key={index} d={path} stroke={color} fill={hasFill ? color : ""} />
            })}

            {/* <path d="M355.753 308.122L318.069 345.806V270.438L355.753 308.122Z" stroke={getColor("secondary")} />
            <path d="M345.5 212.5L238.207 212.5L345.5 105.207L345.5 212.5Z" stroke={getColor("primary")} />
            <path d="M131.552 50.7071L162.884 82.0397L99.538 82.7209L131.552 50.7071Z" fill={getColor("secondary")} stroke={getColor("secondary")} />
            <path d="M257.291 95.9979L238.722 114.567L238.319 77.0254L257.291 95.9979Z" stroke={getColor("primary")} />
            <path d="M65.791 115.761L97.8179 147.788L33.7641 147.788L65.791 115.761Z" stroke={getColor("secondary")} />
            <path d="M86.6172 268.527L34.7913 216.701L138.443 216.701L86.6172 268.527Z" fill={getColor("primary")} stroke={getColor("primary")} />
            <path d="M33.2637 83.234L49.0271 98.9975L17.5002 98.9975L33.2637 83.234Z" fill={getColor("primary")} stroke={getColor("primary")} />
            <path d="M188.12 173.037L203.884 188.8L172.357 188.8L188.12 173.037Z" stroke={getColor("secondary")} />
            <path d="M351.027 212.264L351.027 167.971L395.32 212.264L351.027 212.264Z" stroke={getColor("secondary")} />
            <path d="M0.707107 32.5269L32.0269 1.20705L32.0269 63.8467L0.707107 32.5269Z" stroke={getColor("secondary")} />
            <path d="M185.999 515.983L161.043 491.028H210.955L185.999 515.983Z" fill={getColor("primary")} stroke={getColor("primary")} />
            <path d="M188.024 262.432L235.607 214.849L235.607 310.015L188.024 262.432Z" fill={getColor("secondary")} stroke={getColor("secondary")} />
            <path d="M202.263 402.139L233.583 433.459L170.943 433.459L202.263 402.139Z" stroke={getColor("secondary")} />
            <path d="M234.082 368.905L219.733 383.254V354.556L234.082 368.905Z" fill={getColor("primary")} stroke={getColor("primary")} /> */}
        </svg>
    )
}

const HeaderRightPolygon = () => {
    const paths = [
        "M0.5 206.5H67.7929L0.5 273.793L0.5 206.5Z",
        "M103.206 250.702L150.082 297.579H56.3299L103.206 250.702Z",
        "M150.5 425.5L105.207 425.5L150.5 380.207L150.5 425.5Z",
        "M197.5 425.5L197.5 380.207L242.793 425.5L197.5 425.5Z",
        "M303.5 363.554L238.946 299L368.054 299L303.5 363.554Z",
        "M197.5 471.5L197.5 449.207L219.793 471.5L197.5 471.5Z",
        "M153.5 297.5L153.5 275.207L175.793 297.5L153.5 297.5Z",
        "M148.5 208.5L148.5 230.793L126.207 208.5L148.5 208.5Z",
        "M151.5 205.5L151.5 161.207L195.793 205.5L151.5 205.5Z",
        "M395.5 45.5L351.207 45.5L395.5 1.20711L395.5 45.5Z",
        "M395.5 57.5V92.7929L360.207 57.5L395.5 57.5Z",
        "M256.5 80.5L189.207 80.5L256.5 13.2071L256.5 80.5Z",
        "M303.5 126.5L303.5 81.2071L348.793 126.5L303.5 126.5Z",
        "M257.5 127.5H279.793L257.5 149.793V127.5Z"
    ];

    return (
        <svg className={styles.header_right} width="396" height="472" viewBox="0 0 396 472" fill="none" xmlns="http://www.w3.org/2000/svg">
            {paths.map((path, index) => {
                const color = getColor(Math.random() < 0.5 ? "primary" : "secondary");
                const hasFill = Math.random() < 0.5;
                return <path key={index} d={path} stroke={color} fill={hasFill ? color : ""} />
            })}
            {/* <path d="M0.5 206.5H67.7929L0.5 273.793L0.5 206.5Z" stroke={getColor("secondary")} />
            <path d="M103.206 250.702L150.082 297.579H56.3299L103.206 250.702Z" fill={getColor("primary")} stroke={getColor("primary")} />
            <path d="M150.5 425.5L105.207 425.5L150.5 380.207L150.5 425.5Z" fill={getColor("secondary")} stroke={getColor("secondary")} />
            <path d="M197.5 425.5L197.5 380.207L242.793 425.5L197.5 425.5Z" stroke={getColor("secondary")} />
            <path d="M303.5 363.554L238.946 299L368.054 299L303.5 363.554Z" stroke={getColor("primary")} />
            <path d="M197.5 471.5L197.5 449.207L219.793 471.5L197.5 471.5Z" fill={getColor("primary")} stroke={getColor("primary")} />
            <path d="M153.5 297.5L153.5 275.207L175.793 297.5L153.5 297.5Z" stroke={getColor("secondary")} />
            <path d="M148.5 208.5L148.5 230.793L126.207 208.5L148.5 208.5Z" stroke={getColor("primary")} />
            <path d="M151.5 205.5L151.5 161.207L195.793 205.5L151.5 205.5Z" fill={getColor("secondary")} stroke={getColor("secondary")} />
            <path d="M395.5 45.5L351.207 45.5L395.5 1.20711L395.5 45.5Z" stroke={getColor("secondary")} />
            <path d="M395.5 57.5V92.7929L360.207 57.5L395.5 57.5Z" fill={getColor("primary")} stroke={getColor("primary")} />
            <path d="M256.5 80.5L189.207 80.5L256.5 13.2071L256.5 80.5Z" fill={getColor("secondary")} stroke={getColor("secondary")} />
            <path d="M303.5 126.5L303.5 81.2071L348.793 126.5L303.5 126.5Z" stroke={getColor("secondary")} />
            <path d="M257.5 127.5H279.793L257.5 149.793V127.5Z" fill={getColor("primary")} stroke={getColor("primary")} /> */}
        </svg>
    )
}

const Polygon = ({ type }: { type: PolygonTypes }) => {
    switch (type) {
        case "header-left":
            return <HeaderLeftPolygon />
        case "header-right":
            return <HeaderRightPolygon />
    }
}

export type PolygonTypes = "header-left" | "header-right";

export default Polygon;