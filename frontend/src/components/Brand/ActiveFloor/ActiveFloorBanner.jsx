import React from "react";
import styles from "./ActiveFloorBanner.module.css";

const ActiveFloorBanner = () => (
  <section className={styles.activefloorBanner}>
    <video
      className={styles.backgroundVideo}
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="container">
      <div className={styles.activefloorBannerContent}>
        <h1 className={styles.activefloorBannerTitle}>ActiveFloor</h1>
        <p className={styles.activefloorBannerSubtitle}>
          Interactive Floor Solutions for Engaging Learning and Play
        </p>
      </div>
    </div>
  </section>
);

export default ActiveFloorBanner;
