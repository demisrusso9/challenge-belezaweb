import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface ButtonProps {
  name: string;
  link: string;
}

export function Button({ name, link }: ButtonProps) {
  return (
    <Link to={`/${link}`}>
      <button className={styles.button}>{name}</button>
    </Link>
  );
}
