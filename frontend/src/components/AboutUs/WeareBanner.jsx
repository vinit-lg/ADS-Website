import React, { useEffect } from "react";
import styles from "./WeareBanner.module.css";

const WeareBanner = ({ title, subtitle, imageUrl }) => {
  // Debug log to check if imageUrl is correct
  useEffect(() => {
    console.log("WeareBanner props:", { title, subtitle, imageUrl });
  }, [title, subtitle, imageUrl]);

  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: imageUrl
          ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imageUrl})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={styles.bannerContent}>
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
          {!imageUrl && (
            <p style={{ color: "red" }}>
              ⚠️ No background image set — check console logs
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeareBanner;
