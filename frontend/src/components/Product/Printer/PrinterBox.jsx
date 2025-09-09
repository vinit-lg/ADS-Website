import React from "react";
import styles from "./PrinterBox.module.css";

export default function PrinterBox() {
  const categories = [
    "WorkForce Printers",
    "WorkForce Scanners",
    "LFP CAD/GIS",
    "ColorWorks Printers",
    "Receipt Printers",
    "LFP Photographic/Proofing",
  ];

  return (
    <section className={styles.boxSection}>
      <h2 className={styles.boxHeading}>
        Discover which printer is right for you with Almoe Digital Solutions
      </h2>
      <div className={styles.boxGrid}>
        {categories.map((item, idx) => (
          <button key={idx} className={styles.boxButton}>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
