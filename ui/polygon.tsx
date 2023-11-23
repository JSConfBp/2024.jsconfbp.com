function getColor(color: "primary" | "secondary") {
    switch (color) {
        case "primary":
            return "var(--primary, #07BDBD)";
        case "secondary":
            return "var(--secondary, #9E19EF)";
    }
}

function getTrianglesWithColorAndFill(paths: string[]) {
    return paths.map((path, index) => {
        const color = getColor(Math.random() < 0.5 ? "primary" : "secondary");
        const hasFill = Math.random() < 0.5;
        return <path key={index} d={path} stroke={color} fill={hasFill ? color : ""} />
    })

}

function HeaderLeftPolygon({ className = "" }) {
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
        <svg className={className} viewBox="0 0 397 517" fill="none" xmlns="http://www.w3.org/2000/svg">
            {getTrianglesWithColorAndFill(paths)}

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

function HeaderRightPolygon({ className = "" }) {
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
        <svg className={className} viewBox="0 0 396 472" fill="none" xmlns="http://www.w3.org/2000/svg">
            {getTrianglesWithColorAndFill(paths)}
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

function MobileHeader({ className = "" }) {
    const trianglePaths = [
        "M290.595 41.3831L290.771 41.5599L290.948 41.3831L302.166 30.1657L302.592 29.739H301.989H279.554H278.951L279.377 30.1657L290.595 41.3831Z",
        "M11.8572 3.78115L11.6804 3.60437L11.5036 3.78115L3.19519 12.0897L2.76184 12.523L3.37466 12.5164L19.8147 12.3397L20.4092 12.3333L19.9888 11.9129L11.8572 3.78115Z",
        "M6.91575 25.895L7.09253 25.7182L6.91575 25.5414L3.72864 22.3543L3.29529 21.9209L3.30188 22.5337L3.36969 28.8402L3.37608 29.4347L3.79645 29.0143L6.91575 25.895Z",
        "M11.4549 47.1091L11.2781 46.9323L11.1013 47.1091L2.21289 55.9976L1.77954 56.431L2.39235 56.4244L19.9801 56.2353L20.5745 56.2289L20.1542 55.8085L11.4549 47.1091Z",
        "M30.6179 6.91003V6.66003H30.3679H23.2288H22.616L23.0539 7.0887L30.1931 14.076L30.6179 14.4918V13.8973V6.91003Z",
        "M321.876 79.8207L322.053 79.6439L321.876 79.4671L305.259 62.8501L304.832 62.4234V63.0269V96.2609V96.8645L305.259 96.4377L321.876 79.8207Z",
        "M318.013 69.9877L318.189 70.1645L318.366 69.9877L325.869 62.4853L326.295 62.0585H325.692H310.687H310.083L310.51 62.4853L318.013 69.9877Z",
        "M358.995 83.0719V82.8219H358.745H347.245H346.659L347.065 83.2449L358.565 95.2449L358.995 95.6941V95.0719V83.0719Z",
        "M261.585 52.6197L261.408 52.7965L261.585 52.9733L270.07 61.4586L270.51 61.8985L270.497 61.2765L270.143 44.6595L270.131 44.0737L269.717 44.488L261.585 52.6197Z",
        "M305.7 28.2634V28.5134H305.95H328.95H329.554L329.127 28.0867L306.127 5.08663L305.7 4.65985V5.26341V28.2634Z",
        "M399.01 125.022L399.187 125.199L399.363 125.022L412.445 111.941L412.872 111.514H412.268H386.105H385.501L385.928 111.941L399.01 125.022Z",
        "M363.74 96.9661V97.2161H363.99H398.49H399.094L398.667 96.7893L364.167 62.2893L363.74 61.8625V62.4661V96.9661Z",
        "M113.633 13.3049L113.809 13.1281L113.986 13.3049L123.074 22.3926L123.501 22.8193H122.897H104.722H104.118L104.545 22.3926L113.633 13.3049Z",
        "M124.633 15.3337L124.456 15.1569L124.633 14.9801L131.132 8.48019L131.559 8.05341V8.65696V21.6569V22.2604L131.132 21.8336L124.633 15.3337Z",
        "M139.986 20.7301L140.163 20.9069L139.986 21.0837L136.236 24.8336L135.809 25.2604V24.6569V17.157V16.5534L136.236 16.9802L139.986 20.7301Z",
        "M145.611 36.7087L145.434 36.8855L145.258 36.7087L137.383 28.8337L136.956 28.4069H137.559H153.309H153.913L153.486 28.8337L145.611 36.7087Z",
        "M155.218 34.6237L155.041 34.447L155.218 34.2702L158.271 31.2172L158.697 30.7904V31.3939V37.5V38.1035L158.271 37.6768L155.218 34.6237Z",
    ]

    return (
        <svg viewBox="0 0 415 170" fill="none" xmlns="http://www.w3.org/2000/svg">
            {getTrianglesWithColorAndFill(trianglePaths)}

            {/* menu background */}
            <path d="M414.5 1.00001V0.500005H414L309 0.5H307.793L308.646 1.35355L413.646 106.354L414.5 107.207V106V1.00001Z" fill="#07BDBD" stroke="#07BDBD" />
            {/* <path d="M368 19C368 17.3431 369.269 16 370.833 16H399.167C400.731 16 402 17.3431 402 19C402 20.6569 400.731 22 399.167 22H370.833C369.269 22 368 20.6569 368 19Z" fill="white" />
            <path d="M368 30C368 28.3431 369.269 27 370.833 27H399.167C400.731 27 402 28.3431 402 30C402 31.6569 400.731 33 399.167 33H370.833C369.269 33 368 31.6569 368 30Z" fill="white" />
            <path d="M368 41C368 39.3431 369.269 38 370.833 38H399.167C400.731 38 402 39.3431 402 41C402 42.6569 400.731 44 399.167 44H370.833C369.269 44 368 42.6569 368 41Z" fill="white" /> */}

            {/* logo */}
            <path d="M122.365 129.812H40.172V46.4725H122.365V129.812ZM40.5489 129.43H121.988H121.989V46.8546H121.988L40.5489 46.854V129.43Z" fill="black" stroke="black" strokeWidth="0.00132042" />
            <path d="M103.179 83.8388C100.175 84.0762 97.654 85.1559 95.7777 87.013C93.8438 88.9237 92.9229 91.2594 92.9229 94.2193C92.9229 98.6456 94.7455 101.739 98.8051 104.194C99.8373 104.814 101.246 105.488 103.678 106.533C106.993 107.954 108.225 108.628 109.012 109.47C109.982 110.508 110.251 112.17 109.641 113.437C109.522 113.682 109.211 114.096 108.935 114.375C107.995 115.321 106.518 115.819 104.68 115.819C101.579 115.819 99.2656 114.548 97.4046 111.802C97.1514 111.438 96.9211 111.136 96.8866 111.136C96.8137 111.136 90.7627 114.62 90.636 114.739C90.5555 114.812 90.6207 114.976 90.9315 115.486C93.3488 119.548 97.1245 121.93 102.232 122.611C103.567 122.795 106.073 122.788 107.35 122.611C110.562 122.16 112.972 121.095 114.84 119.288C116.828 117.377 117.806 114.9 117.806 111.798C117.806 109.815 117.48 108.268 116.74 106.736C116.229 105.687 115.723 104.983 114.848 104.094C113.171 102.398 110.999 101.111 106.667 99.2544C103.39 97.8492 102.293 97.248 101.572 96.4784C100.881 95.7394 100.586 94.874 100.651 93.7981C100.708 92.9404 100.946 92.3622 101.468 91.7993C102.224 90.9837 103.099 90.6391 104.449 90.6506C105.984 90.6506 106.978 91.0488 107.987 92.0635C108.344 92.412 108.805 92.9748 109.019 93.3156C109.265 93.7062 109.449 93.9168 109.511 93.8938C109.718 93.8057 115.496 90.0763 115.496 90.0227C115.496 89.992 115.201 89.5325 114.844 88.9926C114.08 87.8516 112.707 86.4234 111.759 85.7954C110.009 84.6352 108.141 84.0417 105.677 83.8579C104.476 83.7507 104.319 83.7507 103.179 83.8388Z" fill="black" />
            <path d="M78.4301 98.2551L78.4071 112.285L78.2306 112.943C78.0004 113.809 77.7279 114.325 77.2521 114.8C76.5845 115.467 75.725 115.746 74.2938 115.754C72.2486 115.761 71.0246 114.896 69.601 112.468C69.3708 112.089 69.1636 111.779 69.1406 111.787C69.1099 111.802 67.671 112.668 65.9443 113.705L62.8018 115.608L63.0397 116.083C64.4632 118.916 66.9266 121.057 69.8926 122.041C73.0237 123.079 77.0488 122.987 79.9995 121.804C83.5372 120.375 85.6131 117.423 86.1618 113.035C86.2078 112.591 86.2424 107.632 86.2424 98.301V84.2332H78.4608L78.4301 98.2551Z" fill="black" />
            <path d="M40.5426 63.8477V46.8416L49.0635 55.3446L40.5426 63.8477Z" fill="black" />
            <path d="M49.0634 55.3447V72.3508L40.5425 63.8477L49.0634 55.3447Z" fill="black" />
            <path d="M74.6265 63.8476H57.5846L66.1055 55.3445L74.6265 63.8476Z" fill="black" />
            <path d="M83.1467 72.3507H66.1049L74.6258 63.8476L83.1467 72.3507Z" fill="black" />
            <path d="M91.6677 46.8414V63.8476L83.1467 55.3445L91.6677 46.8414Z" fill="black" />
            <path d="M74.6257 46.8414V63.8476L66.1047 55.3445L74.6257 46.8414Z" fill="black" />
            <path d="M57.5844 63.8477V80.8539L49.0635 72.3508L57.5844 63.8477Z" fill="black" />
            <path d="M66.1054 72.3506V89.3568L57.5845 80.8537L66.1054 72.3506Z" fill="black" />
            <path d="M40.5425 80.8537H57.5843L49.0634 89.3568L40.5425 80.8537Z" fill="black" />
            <path d="M40.5425 97.8599H57.5843L49.0634 106.363L40.5425 97.8599Z" fill="black" />
            <path d="M40.1724 64.0061H22.813L31.4927 55.3445L40.1724 64.0061Z" fill="black" />
            <path d="M22.8125 28.9375H40.1719L31.4922 37.6518L22.8125 28.9375Z" fill="black" />
            <path d="M48.9578 37.6518H66.2113L57.5845 46.5246L48.9578 37.6518Z" fill="black" />
            <path d="M74.6261 29.1487V46.4718L66.1052 37.8103L74.6261 29.1487Z" fill="black" />
            <path d="M31.4922 37.6518V55.3445L22.8125 46.4982L31.4922 37.6518Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M40.0095 46.2547L40.2246 46.4719L48.9572 37.6519H31.4919L31.8114 37.9746H48.2311L40.0095 46.2547Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M91.2037 46.4718H91.6683L83.1474 37.8103L74.6265 46.4718H75.1947L75.5667 46.0936H75.5567L83.1474 38.3398L83.1711 38.3638L83.1992 38.3352L91.2037 46.4718Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M40.1724 64.3114V63.8477L31.4927 72.3508L40.1724 80.8539V80.2872L39.7933 79.9159V79.9256L32.0233 72.3508L32.0472 72.3273L32.0186 72.2993L40.1724 64.3114Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M40.1719 81.3175V80.8538L31.4922 89.3569L40.1719 97.86V97.2933L39.7929 96.922V96.9317L32.0228 89.3569L32.0467 89.3334L32.0181 89.3054L40.1719 81.3175Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M31.4912 54.8359V55.3182L40.1709 46.4719L31.4912 37.6255V38.2151L31.8702 38.6014V38.5912L39.6403 46.4719L39.6164 46.4963L39.645 46.5255L31.4912 54.8359Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M65.5346 37.6519H65.9991L57.4782 28.9904L48.9573 37.6519H49.5255L49.8976 37.2737H49.8875L57.4782 29.5199L57.5019 29.5439L57.5301 29.5153L65.5346 37.6519Z" fill="black" />
            <path d="M48.9567 20.276V37.6519L40.1711 28.9639L48.9567 20.276ZM48.573 36.7034V21.1486L40.7082 28.9639L48.573 36.7034Z" fill="black" />
            <path d="M66.1041 55.3446H49.0623L57.5832 46.8415L66.1041 55.3446ZM49.9925 54.9733H65.2483L57.5832 47.3613L49.9925 54.9733Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M92.132 46.8414H91.6674L100.188 55.3445L108.709 46.8414H108.141L107.769 47.2127H107.779L100.188 54.8246L100.165 54.8011L100.137 54.8292L92.132 46.8414Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M74.6256 63.3838V63.8477L83.1465 55.3446L74.6256 46.8415V47.4084L74.9977 47.7797V47.7698L82.6256 55.3446L82.6021 55.3681L82.6301 55.3961L74.6256 63.3838Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M41.07 80.8538L49.3151 72.6019L49.0634 72.3507L40.5425 80.8538H41.07Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M49.0636 55.9237L49.4356 56.294V56.2728L57.0635 63.8476L57.0454 63.8657L57.3062 64.1252L57.5845 63.8476L49.0636 55.3445V55.9237Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M65.8263 72.6283L66.1045 72.3507L57.5836 63.8476V64.4265L57.9557 64.7968V64.7759L65.5836 72.3507L65.5655 72.3688L65.8263 72.6283Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M49.3157 89.1039L49.0623 89.3568L57.5832 97.8599V80.8538L57.2133 81.2229V96.9621L49.3157 89.1039Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M48.8243 89.1194L40.5413 97.3851V97.8599L49.0623 89.3568L48.8243 89.1194Z" fill="black" />
            <path d="M40.3708 149.688V138.032H44.2138C46.6078 138.032 48.4348 138.741 48.4348 140.915C48.4348 141.986 47.852 143.072 46.8598 143.435V143.498C48.104 143.797 49.0333 144.695 49.0333 146.254C49.0333 148.601 47.0804 149.688 44.5289 149.688H40.3708ZM42.7019 142.773H44.0564C45.5369 142.773 46.1669 142.19 46.1669 141.245C46.1669 140.222 45.4895 139.828 44.0878 139.828H42.7019V142.773ZM42.7019 147.892H44.3241C45.8991 147.892 46.7654 147.325 46.7654 146.128C46.7654 144.994 45.9306 144.506 44.3241 144.506H42.7019V147.892ZM55.7217 149.908C52.871 149.908 51.1857 148.317 51.1857 144.458V138.032H53.501V144.663C53.501 147.073 54.3515 147.892 55.7217 147.892C57.092 147.892 57.9897 147.073 57.9897 144.663V138.032H60.2262V144.458C60.2262 148.317 58.5725 149.908 55.7217 149.908ZM63.188 149.688V138.032H66.3853C69.9448 138.032 72.134 139.875 72.134 143.813C72.134 147.734 69.9447 149.688 66.5112 149.688H63.188ZM65.5189 147.813H66.2277C68.4169 147.813 69.7557 146.648 69.7557 143.813C69.7557 140.978 68.4169 139.891 66.2277 139.891H65.5189V147.813ZM72.8312 149.688L76.564 138.032H79.3044L83.0372 149.688H80.596L78.9264 143.624C78.5799 142.411 78.2492 141.056 77.9185 139.812H77.8554C77.5404 141.072 77.2096 142.411 76.8631 143.624L75.1937 149.688H72.8312ZM75.1465 146.695V144.899H80.6904V146.695H75.1465ZM84.5747 149.688V138.032H88.4021C90.9692 138.032 92.9537 138.93 92.9537 141.702C92.9537 144.364 90.9692 145.545 88.465 145.545H86.9058V149.688H84.5747ZM86.9058 143.702H88.3076C89.9141 143.702 90.6857 143.025 90.6857 141.702C90.6857 140.332 89.8352 139.891 88.2287 139.891H86.9058V143.702ZM95.2374 149.688V138.032H102.388V139.97H97.5684V142.663H101.648V144.632H97.5684V147.734H102.561V149.688H95.2374ZM108.566 149.908C106.991 149.908 105.447 149.309 104.313 148.223L105.652 146.616C106.471 147.388 107.589 147.892 108.613 147.892C109.826 147.892 110.456 147.372 110.456 146.569C110.456 145.703 109.747 145.419 108.707 144.978L107.148 144.317C105.983 143.844 104.786 142.883 104.786 141.198C104.786 139.292 106.471 137.828 108.818 137.828C110.172 137.828 111.527 138.363 112.472 139.324L111.306 140.789C110.55 140.174 109.778 139.828 108.818 139.828C107.794 139.828 107.148 140.285 107.148 141.041C107.148 141.875 107.983 142.19 108.975 142.584L110.503 143.214C111.905 143.797 112.834 144.71 112.834 146.38C112.834 148.286 111.243 149.908 108.566 149.908ZM116.94 149.688V139.97H113.648V138.032H122.563V139.97H119.271V149.688H116.94Z" fill="black" />
            <path d="M41.489 166.829C40.3955 166.829 39.6665 166.394 39.1603 165.523L40.193 164.754C40.4765 165.3 40.8714 165.533 41.2966 165.533C41.9649 165.533 42.3091 165.189 42.3091 164.156V159.195H43.8076V164.278C43.8076 165.685 43.0888 166.829 41.489 166.829ZM47.1829 166.829C45.9578 166.829 45.4211 165.989 45.4211 164.561V161.028H46.9095V164.379C46.9095 165.25 47.1525 165.553 47.7094 165.553C48.1751 165.553 48.4789 165.351 48.8636 164.845V161.028H50.3419V166.688H49.1269L49.0155 165.877H48.9851C48.489 166.455 47.9524 166.829 47.1829 166.829ZM51.9388 166.688V161.028H53.1437L53.2652 161.777H53.2955C53.7815 161.291 54.3688 160.886 55.1383 160.886C56.3533 160.886 56.8899 161.736 56.8899 163.154V166.688H55.4015V163.346C55.4015 162.455 55.1484 162.162 54.6017 162.162C54.1359 162.162 53.8423 162.384 53.4272 162.789V166.688H51.9388ZM60.8956 166.829C59.306 166.829 58.0707 165.736 58.0707 163.863C58.0707 162.02 59.3667 160.886 60.7032 160.886C62.2726 160.886 63.0725 162.02 63.0725 163.589C63.0725 163.873 63.0421 164.136 63.0117 164.278H59.5085C59.6401 165.209 60.2476 165.685 61.088 165.685C61.5436 165.685 61.9486 165.543 62.3637 165.29L62.8599 166.212C62.303 166.596 61.5942 166.829 60.8956 166.829ZM59.4882 163.285H61.8069C61.8069 162.516 61.4626 162.03 60.7336 162.03C60.1362 162.03 59.6097 162.455 59.4882 163.285ZM66.2276 166.688V165.837C68.1817 163.964 69.4676 162.698 69.4676 161.605C69.4676 160.866 69.0727 160.42 68.3539 160.42C67.797 160.42 67.3616 160.795 66.9769 161.2L66.1567 160.39C66.8452 159.651 67.5236 159.256 68.5462 159.256C69.9536 159.256 70.9054 160.147 70.9054 161.534C70.9054 162.799 69.7207 164.126 68.3842 165.523C68.7589 165.483 69.255 165.432 69.6094 165.432H71.2496V166.688H66.2276ZM74.9639 166.829C73.5363 166.829 72.2605 165.746 72.2605 163.235C72.2605 160.45 73.6578 159.256 75.1664 159.256C76.0878 159.256 76.756 159.64 77.2015 160.096L76.4118 160.997C76.1485 160.693 75.6929 160.461 75.2575 160.461C74.3564 160.461 73.6274 161.149 73.6274 163.235C73.6274 165.047 74.1944 165.705 74.9234 165.705C75.5005 165.705 75.9562 165.27 75.9562 164.409C75.9562 163.589 75.5309 163.215 74.8829 163.215C74.4779 163.215 74.0122 163.437 73.6274 164.075L73.5667 163.063C73.9717 162.496 74.65 162.162 75.1563 162.162C76.4118 162.162 77.3129 162.88 77.3129 164.409C77.3129 165.898 76.2397 166.829 74.9639 166.829ZM78.2327 164.328V163.265H81.007V164.328H78.2327ZM81.9194 166.688V165.837C83.8735 163.964 85.1594 162.698 85.1594 161.605C85.1594 160.866 84.7645 160.42 84.0456 160.42C83.4888 160.42 83.0534 160.795 82.6686 161.2L81.8485 160.39C82.537 159.651 83.2154 159.256 84.238 159.256C85.6454 159.256 86.5971 160.147 86.5971 161.534C86.5971 162.799 85.4125 164.126 84.076 165.523C84.4506 165.483 84.9468 165.432 85.3011 165.432H86.9414V166.688H81.9194ZM90.4431 166.829C89.0053 166.829 87.9422 166.009 87.9422 164.835C87.9422 163.923 88.5396 163.346 89.2179 162.982V162.941C88.6611 162.526 88.2257 161.989 88.2257 161.23C88.2257 160.015 89.1876 159.256 90.4937 159.256C91.8201 159.256 92.6706 160.045 92.6706 161.24C92.6706 161.949 92.1846 162.536 91.7087 162.87V162.921C92.3871 163.306 92.9642 163.852 92.9642 164.835C92.9642 165.969 91.9517 166.829 90.4431 166.829ZM90.9189 162.516C91.2632 162.141 91.4556 161.757 91.4556 161.331C91.4556 160.724 91.0809 160.299 90.4633 160.299C89.9469 160.299 89.5419 160.623 89.5419 161.23C89.5419 161.898 90.1393 162.202 90.9189 162.516ZM90.4734 165.776C91.1214 165.776 91.5771 165.422 91.5771 164.774C91.5771 164.045 90.8683 163.792 89.9166 163.387C89.5116 163.701 89.2179 164.146 89.2179 164.662C89.2179 165.341 89.7748 165.776 90.4734 165.776ZM94.2789 168.854L93.9751 168.044C94.7649 167.751 95.2002 167.214 95.1901 166.617L95.1395 165.564L95.666 166.434C95.5141 166.586 95.3116 166.657 95.0889 166.657C94.6029 166.657 94.1574 166.333 94.1574 165.776C94.1574 165.24 94.5927 164.895 95.1294 164.895C95.8077 164.895 96.1925 165.442 96.1925 166.353C96.1925 167.548 95.5141 168.449 94.2789 168.854ZM99.4503 166.688V165.837C101.404 163.964 102.69 162.698 102.69 161.605C102.69 160.866 102.295 160.42 101.577 160.42C101.02 160.42 100.584 160.795 100.2 161.2L99.3794 160.39C100.068 159.651 100.746 159.256 101.769 159.256C103.176 159.256 104.128 160.147 104.128 161.534C104.128 162.799 102.943 164.126 101.607 165.523C101.982 165.483 102.478 165.432 102.832 165.432H104.472V166.688H99.4503ZM107.984 166.829C106.435 166.829 105.443 165.493 105.443 163.012C105.443 160.531 106.435 159.256 107.984 159.256C109.513 159.256 110.515 160.542 110.515 163.012C110.515 165.493 109.513 166.829 107.984 166.829ZM107.984 165.665C108.632 165.665 109.108 165.047 109.108 163.012C109.108 160.977 108.632 160.41 107.984 160.41C107.336 160.41 106.85 160.977 106.85 163.012C106.85 165.047 107.336 165.665 107.984 165.665ZM111.395 166.688V165.837C113.349 163.964 114.635 162.698 114.635 161.605C114.635 160.866 114.24 160.42 113.521 160.42C112.964 160.42 112.529 160.795 112.144 161.2L111.324 160.39C112.012 159.651 112.691 159.256 113.713 159.256C115.121 159.256 116.072 160.147 116.072 161.534C116.072 162.799 114.888 164.126 113.551 165.523C113.926 165.483 114.422 165.432 114.776 165.432H116.417V166.688H111.395ZM120.344 166.688V162.283C120.344 161.848 120.384 161.149 120.404 160.714H120.364C120.171 161.109 119.969 161.483 119.756 161.898L118.602 163.731H122.622V164.875H117.154V163.852L119.939 159.387H121.731V166.688H120.344Z" fill="black" />
        </svg>
    )
}

function Polygon({ type, className = "" }: { type: PolygonTypes, className?: string }) {
    switch (type) {
        case "header-left":
            return <HeaderLeftPolygon className={className} />
        case "header-right":
            return <HeaderRightPolygon className={className} />
        case "mobile-header":
            return <MobileHeader className={className} />
    }
}

export type PolygonTypes = "header-left" | "header-right" | "mobile-header";

export default Polygon;