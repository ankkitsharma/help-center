import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.Hero + " " + styles["gradient-background"]}>
      <div className={styles.heading}>How can we help?</div>
      <form className={styles.form}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className={styles.searchBar}
        />
        <Image
          src={"/right-arrow.png"}
          width={20}
          height={20}
          alt="right arrow"
          className={styles.arrow}
        />
      </form>
    </div>
  );
}
