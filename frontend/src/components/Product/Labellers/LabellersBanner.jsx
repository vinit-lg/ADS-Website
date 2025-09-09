import React from "react";
import styles from "./Labellers.module.css";

export default function LabellersBanner() {
  return (
    <section className={styles.banner} role="region" aria-label="Labellers banner">
      <div className={styles.inner}>
        <h1 className={styles.title}>Labellers</h1>
        <button className={styles.cta} type="button">
          Request a Call Back
        </button>
      </div>
    </section>
  );
}
