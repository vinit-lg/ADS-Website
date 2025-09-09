import React, { useEffect, useState } from "react";
import styles from "./StatsHighlights.module.css";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export default function StatsHighlights() {
  const [section, setSection] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/homepage?populate[statsHighlights][populate][background]=true&populate[statsHighlights][populate][stats]=true`
        );
        const json = await res.json();
        console.log("StatsHighlights API:", json);

        const data = json?.data?.statsHighlights;

        if (data) {
          setSection({
            heading: data.heading,
            background: data.background?.url
              ? `${STRAPI_URL}${data.background.url}`
              : "",
            stats: data.stats || [],
            ctaLabel: data.ctaLabel,
            ctaLink: data.ctaLink,
          });
        }
      } catch (err) {
        console.error("Failed to fetch StatsHighlights:", err);
      }
    })();
  }, []);

  if (!section) return <p style={{ color: "red" }}>No stats data</p>;

  return (
    <section
      className={styles.statsHighlights}
      style={{
        backgroundImage: section.background
          ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${section.background})`
          : "none",
      }}
    >
      <div className="container">
        {/* Heading */}
        {section.heading && (
          <h2 className={styles.statsHeading}>{section.heading}</h2>
        )}

        {/* Stats list */}
        <div className={styles.statsCards}>
          {section.stats.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {section.ctaLabel && (
          <a href={section.ctaLink} className={`btn ${styles.statsButton}`}>
            {section.ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
