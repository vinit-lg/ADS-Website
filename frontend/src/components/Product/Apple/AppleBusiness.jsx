import React from "react";
import styles from "./AppleBusiness.module.css";

// Replace with your actual Apple devices image path
import devices from "/Products/Apple/1.webp";

export default function AppleBusiness() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section Title */}
        <h2 className={styles.title}>Apple for Business</h2>

        <div className={styles.content}>
          {/* Left side image */}
          <div className={styles.imageWrap}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={devices} className={styles.image} alt="" />
          </div>

          {/* Right side text */}
          <div className={styles.textBlock}>
            <h3 className={styles.subTitle}>Mac for Business</h3>
            <p className={styles.description}>
              Experience the incredible performance of Mac. The game-changing
              power of Apple silicon, superfast SSD storage, and stunning
              displays mean productivity just got a big boost.
            </p>
          </div>
        </div>
           <div className={styles.content}>
          {/* Left side image */}
          <div className={styles.imageWrap}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={devices} className={styles.image} alt="" />
          </div>

          {/* Right side text */}
          <div className={styles.textBlock}>
            <h3 className={styles.subTitle}>Mac for Business</h3>
            <p className={styles.description}>
              Experience the incredible performance of Mac. The game-changing
              power of Apple silicon, superfast SSD storage, and stunning
              displays mean productivity just got a big boost.
            </p>
          </div>
        </div>
           <div className={styles.content}>
          {/* Left side image */}
          <div className={styles.imageWrap}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={devices} className={styles.image} alt="" />
          </div>

          {/* Right side text */}
          <div className={styles.textBlock}>
            <h3 className={styles.subTitle}>Mac for Business</h3>
            <p className={styles.description}>
              Experience the incredible performance of Mac. The game-changing
              power of Apple silicon, superfast SSD storage, and stunning
              displays mean productivity just got a big boost.
            </p>
          </div>
        </div>
        <div className={styles.macButton}>
        Enquire Now
        </div>
      </div>
    </section>
  );
}
