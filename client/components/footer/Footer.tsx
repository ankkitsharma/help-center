import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import githubIcon from "@/public/github.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <div className={styles.navHeading}>Abstract</div>
        <ul className={styles.navLinks}>
          <a href="#">
            <li className={styles.navLink}>Branches</li>
          </a>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.navHeading}>Resources</div>
        <ul className={styles.navLinks}>
          <a href="#">
            <li className={styles.navLink}>Blog</li>
          </a>
          <a href="#">
            <li className={styles.navLink}>Help Center</li>
          </a>
          <a href="#">
            <li className={styles.navLink}>Release Notes</li>
          </a>
          <a href="#">
            <li className={styles.navLink}>Status</li>
          </a>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.navHeading}>Community</div>
        <ul className={styles.navLinks}>
          <a href="#">
            <li className={styles.navLink}>Twitter</li>
          </a>
          <a href="#">
            <li className={styles.navLink}>Linkedin</li>
          </a>
          <a href="#">
            <li className={styles.navLink}>Facebook</li>
          </a>
          <a href="#">
            <li className={styles.navLink}>Dribble</li>
          </a>
          <a href="#">
            <li className={styles.navLink}>Podcast</li>
          </a>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.navHeading}>Company</div>
        <ul className={styles.navLinks}>
          <a href="#">
            <li className={styles.navLink}>About us</li>
          </a>
          <a href="#">
            <li className={styles.navLink}>Careers</li>
          </a>
          <a href="#">
            <li className={styles.navLink}>Legal</li>
          </a>
        </ul>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.navHeading}>Contact Us</div>
        <ul className={styles.navLinks}>
          <a href="#">
            <li className={styles.navLink}>info@abstract.com</li>
          </a>
        </ul>
      </nav>
      <div className={styles.nav}>
        <div className={styles.navHeading}>
          Copyright <span>{new Date().getFullYear()}</span>
        </div>

        <Link
          href={"https://github.com/ankkitsharma/help-center"}
          className={styles.github}
          target="_blank"
        >
          <Image src={githubIcon} width={30} height={30} alt="github logo" />
          <div>ankkitsharma</div>
        </Link>
      </div>
    </div>
  );
}
