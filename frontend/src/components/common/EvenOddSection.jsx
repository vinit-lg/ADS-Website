import React from "react";
import styles from "./EvenOddSection.module.css";

export default function EvenOddSection({
  title,
  description,
  imageSrc,
  imageAlt = "",
  ctaText = "Learn more",
  ctaLink = "#",
  index = 0,
  reverse,
  bg = "auto",
  children,
}) {
  // Determine layout: odd section in screenshot = image left / text right (white)
  // even section in screenshot = text left / image right (grey)
  const isEven = index % 2 === 1;
  const layoutReverse = typeof reverse === "boolean" ? reverse : isEven;

  const bgClass =
    bg === "grey" ? styles.bgGrey :
    bg === "light" ? styles.bgLight :
    isEven ? styles.bgGrey : styles.bgLight;

  return (
    <section className={`${styles.section} ${bgClass}`}>
      <div className={`${styles.inner} ${layoutReverse ? styles.reverse : ""}`}>
        {/* Media */}
        <div className={styles.media}>
          <img className={styles.photo} src={imageSrc} alt={imageAlt} />
        </div>

        {/* Copy */}
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{description}</p>
          {children}
          {ctaText && (
            <a className={styles.button} href={ctaLink}>
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
