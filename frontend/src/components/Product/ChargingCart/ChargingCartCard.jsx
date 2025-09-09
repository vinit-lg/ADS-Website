import React, { useRef, useState } from "react";
import styles from "./ChargingCartCard.module.css";


const ChargingCartCard = ({
  title = "Formcase Charging Carts & Cases",
  videoSrc,
  items = [
    {
      id: 1,
      image:
        "/ChargingCart/TransformerCart+T32-PD-Perf-USB-C.webp",
      name: "TransformerCart T32-PD-Perf-USB-C",
      href: "#",
    },
    {
      id: 2,
      image:
         "/ChargingCart/TransformerCart+T32-PD-Perf-USB-C.webp",
      name: "TransformerCart T36-PD-Perf-USB-C",
      href: "#",
    },
    {
      id: 3,
      image:
          "/ChargingCart/TransformerCart+T32-PD-Perf-USB-C.webp",
      name: "TransformerCase T10_ T10C-USB-C",
      href: "#",
    },
    {
      id: 4,
      image:
         "/ChargingCart/TransformerCart+T32-PD-Perf-USB-C.webp",
      name: "TransformerCase T16 PD Performance",
      href: "#",
    },
    {
      id: 5,
      image:
        "/ChargingCart/TransformerCart+T32-PD-Perf-USB-C.webp",
      name: "TransformerCase T16 _ 20MLX",
      href: "#",
    },
  ],
  onWhatsAppClick,
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
      {/* Top bar with video background */}
      <div className={styles.videoBar}>
        {videoSrc ? (
          <video
            ref={vidRef}
            className={styles.bgVideo}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div className={styles.bgFallback} />
        )}
        <div className={styles.barOverlay} />
        <div className={styles.barContent}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <a href="#" className={styles.crumb}>Home</a>
            <h3 className={styles.sep}>›</h3>
            <a href="#" className={styles.crumb}>Products</a>
            <h3 className={styles.sep}>›</h3>
            <h3 className={styles.crumbCurrent}>Charging Carts &amp; Cases</h3>
          </nav>

          <button
            type="button"
            className={styles.videoToggle}
            aria-label={paused ? "Play background video" : "Pause background video"}
            onClick={toggleVideo}
            title={paused ? "Play" : "Pause"}
          >
            {/* Mimic the tiny “pause” glyph at the far right in the screenshot */}
            {paused ? (
              // play icon
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            ) : (
              // pause icon
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Section header */}
      <h2 className={styles.sectionTitle}>{title}</h2>

      {/* Grid */}
      <div className={styles.grid}>
        {items.map((p) => (
          <article key={p.id} className={styles.card}>
            <a className={styles.imageWrap} href={p.href} aria-label={p.name}>
              <img className={styles.image} src={p.image} alt={p.name} />
            </a>
            <a className={styles.cardTitle} href={p.href}>
              {p.name}
            </a>
          </article>
        ))}
      </div>

    </section>
  );
};

export default ChargingCartCard;
