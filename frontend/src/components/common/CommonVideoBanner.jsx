import React, { useRef, useState, useEffect } from "react";
import styles from "./CommonVideoBanner.module.css";

export default function CommonVideoBanner({
  videoSrc,
  poster,
  height = 100,
  breadcrumb = null,
  autoPlay = true,
  muted = true,
  loop = true,
  showDivider = true,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(Boolean(autoPlay));

  useEffect(() => {
    // keep toggle in sync on mount/update
    const v = videoRef.current;
    if (!v) return;
    if (autoPlay) {
      v.play().catch(() => setIsPlaying(false));
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }, [autoPlay]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <section
        className={styles.banner}
        style={{ height: typeof height === "number" ? `${height}px` : height }}
        role="region"
        aria-label="Video banner"
      >
        {/* Video */}
        <video
          ref={videoRef}
          className={styles.video}
          src={videoSrc}
          poster={poster}
          playsInline
          muted={muted}
          loop={loop}
          autoPlay={autoPlay}
        />

        {/* Content row (breadcrumb left, control right) */}
        <div className={styles.row}>
          <div className={styles.breadcrumb}>
            {typeof breadcrumb === "string" ? (
              <h4>{breadcrumb}</h4>
            ) : (
              breadcrumb
            )}
          </div>

          <button
            className={styles.control}
            type="button"
            onClick={toggle}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              // Pause icon
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path d="M7 4h4v16H7zM13 4h4v16h-4z" fill="currentColor" />
              </svg>
            ) : (
              // Play icon
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path d="M8 5l12 7-12 7z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>

        {/* subtle gradient at top/bottom to help legibility (optional look) */}
        <div className={styles.fadeTop} aria-hidden="true" />
        <div className={styles.fadeBottom} aria-hidden="true" />
      </section>

      {/* {showDivider && <div className={styles.divider} aria-hidden="true" />} */}
    </>
  );
}
