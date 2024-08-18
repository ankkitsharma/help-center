import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.siteLogo}>Abstract | Help Center</div>
      <button className={styles.button}>Submit a request</button>
    </div>
  );
}
