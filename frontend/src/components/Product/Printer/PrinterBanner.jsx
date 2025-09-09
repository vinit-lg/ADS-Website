import React from "react";
import styles from "./Printer.module.css";

export default function PrinterBanner({
  title = "Epson Printers",
  onRequestCallback,
}) {
  const handleClick = () => {
    if (onRequestCallback) onRequestCallback();
  };

  return (
    <section className={styles.banner} role="region" aria-label={`${title} banner`}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <button className={styles.ctaButton} type="button" onClick={handleClick}>
          Request a Call Back
        </button>
      </div>
    </section>
  );
}
