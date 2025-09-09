import React from "react";
import styles from "./Drapper.module.css";

export default function DrapperBanner({
  background = "/Brand/Draper/DrapperBanner.webp",
}) {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${background})` }}
      aria-label="Draper Projection Screens Banner"
    >
      {/* Dark overlay for text contrast */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Draper</h1>
          <p className={styles.subtitle}>Projection Screens</p>
        </div>
      </div>
    </section>
  );
}
