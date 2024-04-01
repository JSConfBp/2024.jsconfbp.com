import Link from "next/link";

import styles from "./centered-button.module.scss";

type CenteredButtonProps = {
  children?: string;
  href?: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  [propName: string]: any;
};

function CenteredButton({
  children,
  className = "",
  href = "https://jsconfbp.com",
  target = "_blank",
  disabled = false,
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
    <div
      className={`${styles.main} ${className} ${disabled ? styles.disabled : ""}`}
      {...props}
    >
      <Link
        href={disabled ? "#" : href}
        target={target}
        className={styles.button}
      >
        {children || buttonText}
      </Link>
    </div>
  );
}

export default CenteredButton;
