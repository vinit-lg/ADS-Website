import React from "react";
import styles from "./PointofService.module.css";

export default function PointofService({ sections = [] }) {
  return (
    <section className={styles.wrap}>
      {sections.map((s, i) => (
        <article
          key={i}
          className={styles.section}
          style={{ backgroundImage: `url(${s.image})` }}
          role="region"
          aria-label={s.title}
        >
          <div className={styles.overlay} />

          <div className={styles.inner}>
            <div className={styles.content}>
              <h2 className={styles.title}>{s.title}</h2>
              {s.text && <p className={styles.text}>{s.text}</p>}

              {s.ctaLabel && (
                <button
                  type="button"
                  className={styles.cta}
                  onClick={s.onCta}
                >
                  {s.ctaLabel}
                </button>
              )}
            </div>
          </div>

          <div className={styles.divider} aria-hidden="true" />
        </article>
      ))}
    </section>
  );
}
