import React from "react";
import styles from "./ProjectorRangeBox.module.css";

export default function ProjectorRangeBox() {
  const categories = [
    "WorkForce Printers",
    "WorkForce Scanners",
    "LFP CAD/GIS",
    "ColorWorks Printers",
    "Receipt Printers",
  ];

  return (
    <section className={styles.boxSection}>
      <h2 className={styles.boxHeading}>
        Welcome to Epson’s range of innovative projectors, designed to meet
        diverse needs across various environments. Whether you’re looking for
        entry-level models, ultra-portable solutions, or specialized projectors
        for education, Epson delivers unparalleled performance and reliability.
        Explore our categories below to find the perfect projector for your
        requirements.
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
