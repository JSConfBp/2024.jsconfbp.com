import React from "react";
import styles from "./wide-image.module.scss";
import Image from "next/image";
import classNames from "classnames";

function WideImage({
  src,
  alt = "",
  priority = false,
  quality = 25,
  noMargin = false,
}) {
  return (
    <div
      className={classNames(
        styles.wide_image,
        noMargin ? styles.no_margin : "",
      )}
    >
      <Image
        src={src}
        alt={alt}
        sizes="100vw"
        placeholder="blur"
        quality={quality}
        fill
        priority={priority}
      />
    </div>
  );
}

export default WideImage;
