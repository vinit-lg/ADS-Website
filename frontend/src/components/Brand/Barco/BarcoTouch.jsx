import React from "react";
import styles from "./BarcoTouch.module.css";

const BarcoTouch= () => {
  return (
    <section className={styles.getInTouchSection}>
        <div className="container">
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Get in Touch now</h2>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>Contact Us</button>
          <button className={styles.secondaryButton}>Enquire Us</button>
        </div>
      </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/Brand/Barco/unsplash-image-W1B2LpQOBxA.webp"
          alt="Get in Touch Visual"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default BarcoTouch;
