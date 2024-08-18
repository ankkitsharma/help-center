import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.siteLogo}>
        <Link href="/">Abstract | Help Center</Link>
      </div>
      <button className={styles.button}>Submit a request</button>
    </div>
  );
}
