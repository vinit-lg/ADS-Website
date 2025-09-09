import React, { useEffect, useRef, useState } from "react";
import styles from "./AppleBannerSlider.module.css";


import lineup from "/Products/Apple/iPad+-+2nd+Bannner.webp";

const DEFAULT_SLIDES = [
  {
    id: 1,
    img: lineup,
    cta: { label: "ENQUIRE NOW", href: "#enquire_now" },
  },
  {
    id: 2,
    img: lineup,
    cta: { label: "ENQUIRE NOW", href: "#enquire_now" },
  },
  {
    id: 3,
    img: lineup,
    cta: { label: "ENQUIRE NOW", href: "#enquire_now" },
  },
];

export default function AppleBannerSlider({ slides = DEFAULT_SLIDES, auto = 0 }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const slideCount = slides.length;

  const go = (dir) => {
    setIndex((i) => (i + dir + slideCount) % slideCount);
  };

  // Keyboard navigation (left/right)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slideCount]);

  // Optional auto-advance (milliseconds). Pass auto={6000} to enable.
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => go(1), auto);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, slideCount]);

  // Touch swipe (basic)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let startX = 0;
    let delta = 0;

    const onStart = (e) => {
      startX = e.touches[0].clientX;
      delta = 0;
    };
    const onMove = (e) => {
      delta = e.touches[0].clientX - startX;
    };
    const onEnd = () => {
      if (Math.abs(delta) > 60) go(delta > 0 ? -1 : 1);
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
    };
  }, []);

  return (
    <section className={styles.hero} aria-roledescription="carousel">
      <button
        className={`${styles.arrow} ${styles.left}`}
        aria-label="Previous"
        onClick={() => go(-1)}
        type="button"
      >
        <ChevronLeft />
      </button>

      <div className={styles.stage}>
        <div
          className={styles.track}
          ref={trackRef}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <article className={styles.slide} key={s.id}>
              <h2 className={styles.title}>{s.title}</h2>

              <div className={styles.imageWrap}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className={styles.image} src={s.img} alt="" />
              </div>

              <a className={styles.cta} href={s.cta?.href || "#"}>
                {s.cta?.label || "ENQUIRE NOW"}
              </a>
            </article>
          ))}
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        aria-label="Next"
        onClick={() => go(1)}
        type="button"
      >
        <ChevronRight />
      </button>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M15.5 4.5L8 12l7.5 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d="M8.5 4.5L16 12l-7.5 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
