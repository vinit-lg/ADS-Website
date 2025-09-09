import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./CareerBanner.module.css";

export default function CareerBanner({
  backgroundImage,
  rotatingWords = ["Build", "Growth", "Career"],
  companyName = "Almoe Digital Solutions",
  cycleDelayMs = 2000,
  typeSpeedMs = 120, 
  deleteSpeedMs = 80,
  startDelayMs = 400,
}) {
  const words = useMemo(
    () =>
      Array.isArray(rotatingWords) && rotatingWords.length
        ? rotatingWords
        : ["Build"],
    [rotatingWords]
  );


  const [text, setText] = useState("");

  const textRef = useRef("");
  const indexRef = useRef(0);
  const deletingRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const loop = (delay) => {
      timerRef.current = setTimeout(() => {
        if (cancelled) return;

        const full = words[indexRef.current % words.length];

        if (!deletingRef.current && textRef.current.length < full.length) {
          textRef.current = full.slice(0, textRef.current.length + 1);
          setText(textRef.current);
          loop(typeSpeedMs);
          return;
        }

        if (!deletingRef.current && textRef.current.length === full.length) {
          deletingRef.current = true;
          loop(cycleDelayMs);
          return;
        }

        if (deletingRef.current && textRef.current.length > 0) {
          textRef.current = full.slice(0, textRef.current.length - 1);
          setText(textRef.current);
          loop(deleteSpeedMs);
          return;
        }

        deletingRef.current = false;
        indexRef.current = (indexRef.current + 1) % words.length;
        loop(typeSpeedMs);
      }, delay);
    };

    loop(startDelayMs);

    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [words, typeSpeedMs, deleteSpeedMs, cycleDelayMs, startDelayMs]);

  return (
    <section
      className={styles.banner}
      style={{ "--bg": `url(${backgroundImage})` }}
      aria-label="Careers hero banner"
    >
      <div className="container">
        <div className={styles.overlay} />
        <div className={styles.inner}>
          <h1 className={styles.title}>
            <span className={styles.typing}>
              {text}
              <span className={styles.caret} aria-hidden="true" />
            </span>
          </h1>

          <h2 className={`${styles.title} ${styles.line}`}>For Everyone At</h2>
          <h2 className={`${styles.title} ${styles.company}`}>{companyName}</h2>
        </div>
      </div>
    </section>
  );
}
