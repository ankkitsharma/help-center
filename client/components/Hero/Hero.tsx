"use client";
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { useSearch } from "@/utils/contexts/searchContext";

export default function Hero() {
  const { title, setTitle } = useSearch();

  const handleInputChange = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value;
    setTitle(searchTerm);
  };
  return (
    <div className={styles.Hero + " " + styles["gradient-background"]}>
      <div className={styles.heading}>How can we help?</div>
      <form className={styles.form}>
        <input
          type="search"
          name="search"
          value={title}
          id="search"
          placeholder="Search"
          onChange={handleInputChange}
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
