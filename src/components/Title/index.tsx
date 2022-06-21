import React from "react";
import styles from "./styles.module.scss";

export function Title(props) {
  return <h1 className={styles.title}>{props.name}</h1>;
}
