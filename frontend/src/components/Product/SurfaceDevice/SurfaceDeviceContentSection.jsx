import React from "react";
import styles from "./SurfaceDeviceContentSection.module.css";

export default function SurfaceDeviceContentSection({
  heading = "Laptops designed by Microsoft. Built for business. Inspired by the way you work.",
  subheading = "The modern workplace starts with Surface for Business",
  body = "Surface and Microsoft 365 give people the freedom to work their way from anywhere, protected by Microsoft security and modern manageability.",
  primaryLabel = "View 2-in-1s",
  secondaryLabel = "View Laptops",
  onPrimary = () => {},
  onSecondary = () => {},
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {subheading && <h3 className={styles.subheading}>{subheading}</h3>}
        {body && <p className={styles.body}>{body}</p>}

        <div className={styles.buttons}>
          <button className={styles.btn} onClick={onPrimary} type="button">
            {primaryLabel}
          </button>
          <button className={styles.btn} onClick={onSecondary} type="button">
            {secondaryLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
