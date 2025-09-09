import React from "react";
import styles from "./SustainabilityBanner.module.css";

const SustainabilityBanner = ({ title, subtitle, imageUrl }) => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title || "Sustainability"}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityBanner;
