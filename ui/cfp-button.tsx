import Link from "next/link";

import styles from "./cfp-button.module.scss";

interface CfpButtonProps {
  children?: string;
  [propName: string]: any;
}

function CfpButton({ children, ...props }: CfpButtonProps) {
  const buttonText = "Submit your talk proposal"

  if (typeof children !== "string" && typeof children !== "undefined") {
    console.error('Yo, CfpButton.tsx here: we expect the text for the button. You gave me something else. I\'m just gonna use a default value.')
    children = buttonText;
  }

  return (
    <div className={styles.main} {...props}>
      <Link href="https://forms.gle/y3RN28awvwjkm2ws6" target="_blank" className={styles.button}>
        {children || buttonText}
      </Link>
    </div>
  )
}

export default CfpButton;
