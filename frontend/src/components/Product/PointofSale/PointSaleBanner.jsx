import React from "react";
import styles from "./PointSaleBanner.module.css";

export default function PointSaleBanner({
  title = "Point of Sale\nProducts",
  imageSrc = "/imgs/pos-hero.jpg",
  imageAlt = "Point of sale counter",
  onCta = () => {},
  ctaLabel = "Request a call back",
  bullets = [
    "All-in-one POS systems",
    "Convertible and mobile POS systems",
    "Self service kiosks",
    "Modular POS systems",
    "POS peripherals",
  ],
}) {
  return (
    <section className={styles.wrap} role="region" aria-label="Point of Sale Banner">
      <div className={styles.inner}>
        {/* Left image panel */}
        <figure className={styles.media}>
          <img src={imageSrc} alt={imageAlt} />
        </figure>

        {/* Right content column */}
        <div className={styles.rightCol}>
          <div className={styles.hero}>
            <h1 className={styles.heading}>
              {title.split("\n").map((line, i) => (
                <h2 key={i} className={styles.line}>{line}</h2>
              ))}
            </h1>

            <button type="button" className={styles.cta} onClick={onCta}>
              {ctaLabel}
            </button>
          </div>

          <div className={styles.panel}>
            <h3 className={styles.subhead}>
              Choose the POS Solution that’s right for you
            </h3>

            <ul className={styles.list}>
              {bullets.map((b, i) => (
                <li key={i} className={styles.item}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
