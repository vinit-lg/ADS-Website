import React from "react";
import styles from "./SurfaceDeviceProCollection.module.css";

export default function SurfaceDeviceProCollection({
  heading = "2-in-1 flexibility to work your way",
  description = "The iconic Kickstand transforms every Surface 2-in-1 from full touchscreen laptop with keyboard, portable tablet, digital canvas, to docked workstation. Optional 4G keeps you connected, and built-in security helps keep you protected.",
  items = [],
  className = "",
  id,
  showHeading = true,
  showDescription = true,
}) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        {showHeading && heading && <h2 className={styles.heading}>{heading}</h2>}
        {showDescription && description && (
          <p className={styles.description}>{description}</p>
        )}

        <ul className={styles.grid}>
          {items.map((it) => (
            <li key={it.id} className={styles.card}>
              <div className={styles.media}>
                <img className={styles.image} src={it.img} alt={it.title} />
              </div>

              <h3 className={styles.title}>{it.title}</h3>

              <button
                type="button"
                className={styles.cta}
                onClick={it.onClick}
                aria-label={`${it.ctaLabel || "Learn More"} about ${it.title}`}
              >
                {it.ctaLabel || "Learn More"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
