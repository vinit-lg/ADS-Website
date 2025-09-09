import React from "react";
import styles from "./SustainabilityHighlights.module.css";

const API_URL = "http://localhost:1337";

const getMediaUrl = (m, apiUrl = API_URL) => {
  if (!m) return null;
  const pick = (obj) => {
    if (!obj) return null;
    if (typeof obj === "string") return obj;
    if (obj.url) return obj.url;
    if (obj.data?.attributes?.url) return obj.data.attributes.url;
    return null;
  };
  const sized =
    pick(m.formats?.large) ||
    pick(m.formats?.medium) ||
    pick(m.formats?.small) ||
    pick(m.formats?.thumbnail) ||
    pick(m);
  if (!sized) return null;
  return /^https?:\/\//i.test(sized)
    ? sized
    : `${apiUrl}${sized.startsWith("/") ? "" : "/"}${sized}`;
};

const SustainabilityHighlights = ({ items = [] }) => {
  // Only render items that have something (heading/text/image)
  const cleaned = items.filter(
    (it) =>
      (it.heading && it.heading.trim()) ||
      (it.text && it.text.trim()) ||
      it.image
  );
  if (!cleaned.length) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        {cleaned.map((it, idx) => {
          const title = it.heading?.trim() || "";
          const desc = it.text?.trim() || "";
          const imageUrl = getMediaUrl(it.image);

          return (
            <div key={it.id ?? idx} className={styles.block}>
              <div className={styles.grid}>
                {/* Left: text */}
                <div className={styles.content}>
                  {title && <h3 className={styles.heading}>{title}</h3>}
                  {desc && <p className={styles.text}>{desc}</p>}
                </div>

                {/* Right: image */}
                <div className={styles.media}>
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={title || "Sustainability highlight"}
                      className={styles.image}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SustainabilityHighlights;
