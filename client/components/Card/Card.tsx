import React from "react";
import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.title}>Branches</div>
      <div className={styles.description}>
        Abstract Branches lets you manage, version, and document your designs in
        one place.
      </div>
    </div>
  );
}
