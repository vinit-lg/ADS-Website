import React, { useRef, useState } from "react";
import styles from "./ChargingCartQuote.module.css";

/**
 * Props
 *  - headline: string (main text)
 *  - ctaText: string (button label)
 *  - onCtaClick?: () => void
 *  - videoSrc?: string (mp4/webm for the background)
 */
const ChargingCartQuote = ({
  headline = "So what are you waiting for?",
  ctaText = "Get A Quote Now!",
  onCtaClick,
  videoSrc,
}) => {
  const vidRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const toggleVideo = () => {
    const v = vidRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <section className={styles.wrap}>
      {/* Background video / fallback pattern */}
      <div className={styles.bg}>
        {videoSrc ? (
          <video
            ref={vidRef}
            className={styles.video}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div className={styles.pattern} />
        )}
        <div className={styles.overlay} />
      </div>

      {/* Foreground content */}
      <div className={styles.inner}>
        <h2 className={styles.title}>{headline}</h2>
        <button
          type="button"
          className={styles.cta}
          onClick={onCtaClick}
          aria-label={ctaText}
        >
          {ctaText}
        </button>
      </div>

      {/* Pause/Play control (bottom-right) */}
      <button
        type="button"
        className={styles.toggle}
        onClick={toggleVideo}
        aria-label={paused ? "Play background video" : "Pause background video"}
        title={paused ? "Play" : "Pause"}
      >
        {paused ? (
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default ChargingCartQuote;
