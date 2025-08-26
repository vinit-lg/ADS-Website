import React from "react";
import styles from "./DigitalOfficeSolution.module.css";

import DigitalOfficeBackground from "/Brand/Avison/Banner-1.webp";

const imagesRow = [
  "/Brand/Avison/PA10.webp",
  "/Brand/Avison/PA10.webp",
  "/Brand/Avison/PA10.webp",
];

const DigitalOfficeSolution = () => {
  return (
    <section
      className={styles.backgroundSection}
      style={{ backgroundImage: `url(${DigitalOfficeBackground})` }}
    >
        <div className="container">
      <div className={styles.overlay}>
        <h1 className={styles.title}>Digital Office Solution</h1>
        <h3 className={styles.subtitle}>
          Bring Professional scans to whether your Office or Home they are same
        </h3>
      </div>
      <div className={styles.imageRow}>
          {imagesRow.map((src, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={src} alt={`Solution ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default DigitalOfficeSolution;
