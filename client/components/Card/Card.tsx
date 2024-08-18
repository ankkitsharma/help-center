import React from "react";
import styles from "./Card.module.css";

export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
