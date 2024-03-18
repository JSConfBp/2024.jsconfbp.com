import React from "react";
import styles from "./talk_abstract.module.scss";

function TalkAbstract({ children }) {
  return <div className={styles.talk_abstract}>{children}</div>;
}

export default TalkAbstract;
