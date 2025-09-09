import React from "react";
import styles from "./EducationHero.module.css";

export default function EductaionHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* Left: Text */}
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Welcome to<br />
            Interactive<br />
            Education!
          </h1>

          <p className={styles.desc}>
            Unlock boundless possibilities in learning with our cutting-edge
            interactive products designed to revolutionize the educational
            experience. Explore our innovative solutions tailored to inspire
            engagement, foster creativity, and ignite a passion for learning in
            students of all ages.
          </p>
        </div>

        {/* Right: Image */}
        <div className={styles.media}>
          <img
            className={styles.photo}
            src="/Products/Education/Rectangle+4131.webp"
            alt="Interactive education setup"
          />
        </div>
      </div>
    </section>
  );
}
