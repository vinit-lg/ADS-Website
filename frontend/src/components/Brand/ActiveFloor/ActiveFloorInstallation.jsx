import React, { useEffect, useState } from "react";
import styles from "./ActiveFloorInstallation.module.css";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";


const ActiveFloorInstallation = ({ brandSlug = null }) => {
  const [heading, setHeading] = useState("What’s Included in an ActiveFloor Installation?");
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstallation = async () => {
      setLoading(true);
      setError(null);

      try {
        const populate =
          "populate[installation][populate][0]=left_items&populate[installation][populate][1]=right_items";

        const url = brandSlug
          ? `${STRAPI_URL}/api/brands?filters[slug][$eq]=${encodeURIComponent(brandSlug)}&${populate}`
          : `${STRAPI_URL}/api/brands?${populate}`;

        const res = await fetch(url);
        if (!res.ok) {
          const txt = await res.text().catch(() => "");
          throw new Error(`Strapi request failed: ${res.status} ${res.statusText}${txt ? " — " + txt : ""}`);
        }

        const json = await res.json();
        // json.data may be an array (brands list) — take first result
        const raw = Array.isArray(json.data) ? json.data[0] : json.data;
        const payload = raw ?? null;
        const attrs = payload?.attributes ?? payload ?? null;

        const installation = attrs?.installation ?? payload?.installation ?? null;

        const headingVal = installation?.heading ?? "What’s Included in an ActiveFloor Installation?";
        const left = installation?.left_items ?? [];
        const right = installation?.right_items ?? [];

        setHeading(headingVal);
        setLeftItems(
          (left || [])
            .map((i) => (typeof i === "string" ? i : i?.text ?? ""))
            .map((s) => s.trim())
            .filter(Boolean)
        );
        setRightItems(
          (right || [])
            .map((i) => (typeof i === "string" ? i : i?.text ?? ""))
            .map((s) => s.trim())
            .filter(Boolean)
        );
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("ActiveFloorInstallation fetch error:", err);
        setError(String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchInstallation();
  }, [brandSlug]);

  if (loading) {
    return (
      <section className={styles.wrapper} aria-labelledby="af-installation-heading">
        <div className="container">
          <h2 id="af-installation-heading" className={styles.heading}>
            {heading}
          </h2>
          <div style={{ textAlign: "center", padding: 24 }}>Loading…</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.wrapper} aria-labelledby="af-installation-heading">
        <div className="container">
          <h2 id="af-installation-heading" className={styles.heading}>
            {heading}
          </h2>
          <div style={{ textAlign: "center", padding: 24, color: "crimson", whiteSpace: "pre-wrap" }}>{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.wrapper} aria-labelledby="af-installation-heading">
      <div className="container">
        <h2 id="af-installation-heading" className={styles.heading}>
          {heading}
        </h2>

        <div className={styles.columns}>
          <ul className={styles.list}>
            {leftItems.map((text, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.badge} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path fill="white" d="M9.5 16.2L5.3 12l1.1-1.1 3.1 3.1 7.9-8.1L18 7.9z" />
                  </svg>
                </span>
                <span className={styles.itemText}>{text}</span>
              </li>
            ))}
          </ul>

          <ul className={styles.list}>
            {rightItems.map((text, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.badge} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path fill="white" d="M9.5 16.2L5.3 12l1.1-1.1 3.1 3.1 7.9-8.1L18 7.9z" />
                  </svg>
                </span>
                <span className={styles.itemText}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ActiveFloorInstallation;
