import React from "react";
import styles from "./WeareVideo.module.css";

const WeareVideo = ({ title, subtitle, description, videoSrc }) => {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        {/* Show video only if exists */}
        {videoSrc && (
          <video
            className={styles.videoBg}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className={styles.overlay}>
          {title && <h2>{title}</h2>}
          {subtitle && <h3>{subtitle}</h3>}
          {description && <p>{description}</p>}
        </div>
      </div>
    </section>
  );
};

export default WeareVideo;
