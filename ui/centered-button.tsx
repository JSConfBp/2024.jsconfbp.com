import Link from "next/link";

import styles from "./centered-button.module.scss";

type CenteredButtonProps = {
  children?: string;
  href?: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  [propName: string]: any;
};

function CenteredButton({
  children,
  className = "",
  href = "https://jsconfbp.com",
  target = "_blank",
  ...props
}: CenteredButtonProps) {
  const buttonText = "Simon says: click me!";

  if (typeof children !== "string" && typeof children !== "undefined") {
    console.error(
      "Yo, CfpButton.tsx here: we expect the text for the button. You gave me something else. I'm just gonna use a default value.",
    );
    children = buttonText;
  }

  return (
    <div className={`${styles.main} ${className}`} {...props}>
      <Link href={href} target={target} className={styles.button}>
        {children || buttonText}
      </Link>
    </div>
  );
}

export default CenteredButton;
