import React from "react";
import styles from "./Classroomcircleimage.module.css";

/**
 * Props
 * - text?: string
 * - imgSrc: string (required)       // circle image URL
 * - imgAlt?: string
 * - stripeHeight?: string           // e.g., "220px"
 */
export default function Classroomcircleimage({
  text = "Bringing the future of education to your classroom",
  imgSrc = "/images/classroom-circle.jpg",
  imgAlt = "Students at interactive board",
  stripeHeight = "220px",
}) {
  return (
    <section
      className={styles.section}
      style={{ ["--stripe-h"]: stripeHeight }}
    >
      {/* background stripe */}
      <div className={styles.stripe}>
        <div className={styles.container}>
          <h2 className={styles.title}>{text}</h2>
        </div>
      </div>

      {/* right circular image */}
      <div className={styles.circleWrap}>
        <img className={styles.circleImg} src={imgSrc} alt={imgAlt} />
      </div>
    </section>
  );
}
