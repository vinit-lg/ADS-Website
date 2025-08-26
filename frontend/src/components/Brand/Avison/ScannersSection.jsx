import React from "react";
import styles from "./ScannersSection.module.css";
import ScannersBackground from "/Brand/Avison/scanner-1.webp";

const ScannersSection = () => {
  return (
    <section
      className={styles.backgroundSection}
      style={{ backgroundImage: `url(${ScannersBackground})` }}
    >
        <div className="container">
      <div className={styles.overlay}>
        <h1 className={styles.title}>Scanners</h1>
        <p className={styles.subtitle}>
          Avision offers a complete range of professional scanners tailored to your scanning needs.
        </p>
      </div>
      </div>
    </section>
  );
};

export default ScannersSection;
