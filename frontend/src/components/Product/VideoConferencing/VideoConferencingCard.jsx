import React from "react";
import styles from "./VideoConferencingCard.module.css";

export default function VideoConferencingCard({
  heading = "Discover which video conferencing product is right for you with Almoe Digital Solutions",
  items = [],
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}

        <div className={styles.grid}>
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={styles.card}
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
