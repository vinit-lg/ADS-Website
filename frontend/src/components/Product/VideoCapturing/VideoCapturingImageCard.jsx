import React from "react";
import styles from "./VideoCapturingImageCard.module.css";

export default function VideoCapturingImageCard({
  leftImage = "/images/swivl-robot.png",
  rightImage = "/images/swivl-teams.png",
  leftLabel = "Swivl Robot",
  rightLabel = "Swivl Teams",
  onLeftClick = () => {},
  onRightClick = () => {},
  className = "",
  id,
}) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.splitBg} />
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* LEFT */}
          <div className={styles.col}>
            <div className={styles.media}>
              <img className={styles.image} src={leftImage} alt={leftLabel} />
            </div>
            <button className={styles.cta} type="button" onClick={onLeftClick}>
              {leftLabel}
            </button>
          </div>

          {/* RIGHT */}
          <div className={styles.col}>
            <div className={styles.media}>
              <img className={styles.image} src={rightImage} alt={rightLabel} />
            </div>
            <button className={styles.cta} type="button" onClick={onRightClick}>
              {rightLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
