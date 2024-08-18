import React from "react";
import styles from "./CardContainer.module.css";
import Card from "../Card/Card";

export default function CardContainer() {
  return (
    <div className={styles.cardContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
