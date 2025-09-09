import React from "react";
import styles from "./ProjectorsCollection.module.css";

export default function ProjectorsCollection({
  title, // optional
  description, // optional
  products = [],
  onView = () => {},
  showEnquire = true,
  enquireLabel = "Enquire now",
  onEnquire = () => {},
  className = "",
  id,
  columns = { desktop: 5, tablet: 3, mobile: 2, small: 1 },
}) {
  // CSS variables let you change the grid columns per breakpoint
  const columnVars = {
    ["--cols-desktop"]: columns.desktop ?? 5,
    ["--cols-tablet"]: columns.tablet ?? 3,
    ["--cols-mobile"]: columns.mobile ?? 2,
    ["--cols-small"]: columns.small ?? 1,
  };

  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.container} style={columnVars}>
        {/* Only render if title exists */}
        {title && <h1 className={styles.heading}>{title}</h1>}

        {/* Only render if description exists */}
        {description && <p className={styles.lede}>{description}</p>}

        <ul className={styles.grid}>
          {products.map((p) => (
            <li key={p.id} className={styles.card}>
              <div className={styles.pictureWrap}>
                <img className={styles.picture} src={p.img} alt={p.title} />
              </div>

              <h3 className={styles.title}>{p.title}</h3>

              <button
                className={styles.cta}
                type="button"
                onClick={() => onView(p.id)}
                aria-label={`View ${p.title}`}
              >
                {p.ctaLabel || "View Product"}
              </button>
            </li>
          ))}
        </ul>

        {/* Enquire button only if flag is true */}
        {showEnquire && (
          <div className={styles.enquireWrap}>
            <button
              className={styles.enquireBtn}
              type="button"
              onClick={onEnquire}
            >
              {enquireLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
