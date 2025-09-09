import React, { useRef, useState, useEffect } from "react";
import styles from "./CollaborationTouch.module.css";

export default function CollaborationTouch() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Try to autoplay on mount (mobile may block—button still works)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };
    tryPlay();
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className={styles.touchWrap}>
      {/* Top wave with crisp purple stroke */}
      <svg
        className={styles.wave}
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* white fill above the curve so the page background stays white */}
        <path
          d="M0,64 C240,20 560,120 840,92 C1090,68 1265,92 1440,78 L1440,0 L0,0 Z"
          fill="#ffffff"
        />
        {/* the purple/indigo outline */}
        <path
          d="M0,64 C240,20 560,120 840,92 C1090,68 1265,92 1440,78"
          fill="none"
          stroke="#2217D8"
          strokeWidth="6.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Full-bleed background video */}
      <div className={styles.touchVideoWrap} aria-hidden="true">
        <video
          ref={videoRef}
          className={styles.touchVideo}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          poster="./touch-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* subtle vignette to match the darker corners look */}
        <div className={styles.touchVignette} />
      </div>

      {/* Foreground content */}
      <div className={styles.touchInner}>
        <h2 className={styles.touchTitle}>Get in touch.</h2>
        <a href="#enquire" className={styles.touchCta}>
          Enquire Now
        </a>
      </div>

      {/* Play / Pause control */}
      <button
        type="button"
        className={styles.touchPlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        onClick={togglePlay}
      >
        <span className={styles.playRing} />
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="18" height="18" className={styles.playIcon} aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="#1f2a44" />
            <path d="M9 7h3v10H9zM13.5 7h3v10h-3z" fill="#ffffff" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" className={styles.playIcon} aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="#1f2a44" />
            <path d="M9 7l9 5-9 5V7z" fill="#ffffff" />
          </svg>
        )}
      </button>
    </section>
  );
}
