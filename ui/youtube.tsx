import React from "react";
import classnames from "classnames";

import styles from "./youtube.module.scss";

function Youtube({ src, title = "", className = "" }) {
  return (
    <div className={classnames(styles.embed, className)}>
      <iframe
        title={`Embed video ${title}`}
        src={`https://www.youtube.com/embed/${src}`}
        // @ts-expect-error https://stackoverflow.com/questions/46934039/what-is-the-gesture-media-html-attribute
        gesture="media"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
