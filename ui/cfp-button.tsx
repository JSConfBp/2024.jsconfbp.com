import Link from "next/link";

import styles from "./cfp-button.module.scss";

type CfpButtonProps = {
  children?: string;
  href?: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  [propName: string]: any;
}

function CfpButton({ children, className = "", href = "https://forms.gle/y3RN28awvwjkm2ws6", target = "_blank", ...props }: CfpButtonProps) {
  const buttonText = "Submit your talk proposal"

  if (typeof children !== "string" && typeof children !== "undefined") {
    console.error('Yo, CfpButton.tsx here: we expect the text for the button. You gave me something else. I\'m just gonna use a default value.')
    children = buttonText;
  }

  return (
    <div className={`${styles.main} ${className}`} {...props}>
      <Link href={href} target={target} className={styles.button}>
        {children || buttonText}
      </Link>
    </div >
  )
}

export default CfpButton;
