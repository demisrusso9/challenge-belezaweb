import React from "react";
import styles from "./styles.module.scss";

export function Content({ children }) {
  return <div className={styles.content}>{children}</div>;
}
