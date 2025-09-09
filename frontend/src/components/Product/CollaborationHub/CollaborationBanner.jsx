import React from "react";
import styles from "./CollaborationBanner.module.css";

export default function CollaborationBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h2 className={styles.title}>Collaboration Hub</h2>
        <a href="#request" className={styles.button}>
          Request a call back
        </a>
      </div>
    </section>
  );
}
