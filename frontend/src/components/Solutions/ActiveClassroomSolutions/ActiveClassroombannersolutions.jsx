import React from "react";
import styles from "./ActiveClassroombannersolutions.module.css";

/**
 * Exact “Active Classroom Solutions” banner
 * Props:
 *  - title?: string
 *  - buttonLabel?: string
 *  - onButtonClick?: () => void
 *  - image?: string (background classroom photo)
 *  - minHeight?: string (e.g. "420px" | "56vh")
 */
export default function ActiveClassroombannersolutions({
  title = "Active Classroom Solutions",
  buttonLabel = "Enquire Now",
  onButtonClick = () => {},
  image = "/images/active-classroom.jpg",
  minHeight = "420px",
}) {
  return (
    <section
      className={styles.banner}
      style={{ ["--banner-min-h"]: minHeight, ["--banner-img"]: `url(${image})` }}
      aria-label={title}
    >
      {/* Background image + soft dark tint */}
      <div className={styles.bg} />
      <div className={styles.tint} />

      {/* Pale-yellow ribbon on the left */}
      <div className={styles.leftRibbon} />

      {/* Diagonal gradient panel on the right with content */}
      <div className={styles.rightPanel}>
        <h1 className={styles.title}>{title}</h1>
        <button className={styles.cta} type="button" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
