import React from "react";
import styles from "./Projector.module.css";

export default function ProjectorBanner({
  title = "Epson Projectors",
  ctaText = "Request a Call Back",
  onRequestCallback,
}) {
  const handleClick = () => {
    if (onRequestCallback) onRequestCallback();
  };

  return (
    <section className={styles.banner} role="region" aria-label={`${title} banner`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>

        <button
          type="button"
          className={styles.ctaButton}
          onClick={handleClick}
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
}
