import React from "react";
import styles from "./LabellersTapes.module.css";

export default function LabellersTapes({
  title = "Tapes & Labels",
  imageSrc = "/imgs/tapes-wheel.png",
  imageAlt = "Tapes & Labels",
  ctaLabel = "View Products",
  onClick = () => {},
}) {
  return (
    <section className={styles.wrap} role="region" aria-label="Tapes & Labels">
      {/* background artwork */}
      <span className={styles.leftRing} aria-hidden="true" />
      <span className={styles.blueBall} aria-hidden="true" />
      <span className={styles.dotted} aria-hidden="true" />
      <span className={styles.bigDot} aria-hidden="true" />
      <span className={styles.smallDot} aria-hidden="true" />

      <div className={styles.container}>
        <h2 className={styles.heading}>{title}</h2>

        <figure className={styles.figure}>
          <div className={styles.imageBox}>
            <img className={styles.image} src={imageSrc} alt={imageAlt} />
          </div>
          <figcaption className={styles.caption}>{title}</figcaption>
        </figure>

        <div className={styles.ctaWrap}>
          <button type="button" className={styles.cta} onClick={onClick}>
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
