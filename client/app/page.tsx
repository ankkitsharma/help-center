import React, { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import CardContainer from "@/components/CardContainer/CardContainer";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Hero />
      <CardContainer />
      <Footer />
    </div>
  );
}
