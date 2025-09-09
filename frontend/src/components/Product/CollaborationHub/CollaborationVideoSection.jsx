import React, { useRef, useState } from "react";
import styles from "./CollaborationVideo.module.css";

export default function CollaborationVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

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
    <section className={styles.wrap}>
      {/* Top intro strip */}
      <div className={styles.intro}>
        <div className={styles.introInner}>
          <h1 className={styles.title}>
            Connect. Contribute. From wherever you are.
          </h1>
          <p className={styles.lead}>
            Don’t let physical distance hinder your participation in vital
            meetings and decision-making processes. Welcome to Almoe Digital
            Solutions where we ensure you always have a seat at the table,
            whether you’re working from home or the office.
          </p>
        </div>
      </div>

      {/* Breadcrumb bar + play control */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.crumbs}>
          <a href="#" className={styles.crumb}>Home</a>
          <h5 className={styles.sep}>›</h5>
          <a href="#" className={styles.crumb}>Products</a>
          <h5 className={styles.sep}>›</h5>
          <h5 className={`${styles.crumb} ${styles.active}`}>Collaboration Hub</h5>
        </div>

        <button
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className={styles.playButton}
          onClick={togglePlay}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      {/* Full-bleed video */}
      <div className={styles.videoShell}>
        <video
          ref={videoRef}
          className={styles.video}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          poster="./poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}

/* ---------- Icons ---------- */
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.08" />
      <path d="M9 7l9 5-9 5V7z" fill="currentColor" />
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.08" />
      <path d="M9 7h3v10H9zM13.5 7h3v10h-3z" fill="currentColor" />
    </svg>
  );
}
