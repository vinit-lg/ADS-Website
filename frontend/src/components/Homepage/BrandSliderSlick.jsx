import React, { useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./BrandSliderSlick.module.css";

function Arrow({ className, style, onClick, dir = "next" }) {
  return (
    <button
      className={`${styles.nav} ${dir === "prev" ? styles.prev : styles.next}`}
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      type="button"
      style={style}
    >
      <span className={styles.arrow} />
    </button>
  );
}

export default function BrandSliderSlick({
  title = "Brands We Work With",
  items = [
    { src: "/brands/draper.png", alt: "Draper" },
    { src: "/brands/epson.png", alt: "Epson" },
    { src: "/brands/hp.png", alt: "HP" },
    { src: "/brands/microsoft.png", alt: "Microsoft" },
    { src: "/brands/neat.png", alt: "Neat" },
    { src: "/brands/graphtec.png", alt: "Graphtec" },
    { src: "/brands/panasonic.png", alt: "Panasonic" },
  ],
  autoplaySpeed = 0,   // 0 for smooth continuous scrolling (see css trick below)
  speed = 6000,        // total time to traverse (ms)
  slidesToShow = 5,
}) {
  const slickRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // slick settings
  const settings = useMemo(
    () => ({
      infinite: true,
      arrows: true,
      dots: false,
      speed,                 // animation duration
      autoplay: true,
      autoplaySpeed,         // 0 = next transition immediately (continuous effect)
      pauseOnHover: true,
      pauseOnFocus: true,
      cssEase: "linear",     // smooth continuous movement
      slidesToShow,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <Arrow dir="next" />,
      prevArrow: <Arrow dir="prev" />,
      responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 5 } },
        { breakpoint: 1024, settings: { slidesToShow: 4 } },
        { breakpoint: 768,  settings: { slidesToShow: 3 } },
        { breakpoint: 520,  settings: { slidesToShow: 2 } },
      ],
    }),
    [speed, autoplaySpeed, slidesToShow]
  );

  const togglePlay = () => {
    const api = slickRef.current;
    if (!api) return;
    if (paused) {
      api.slickPlay();
      setPaused(false);
    } else {
      api.slickPause();
      setPaused(true);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.wrap}>
          <Slider ref={slickRef} {...settings} className={styles.slider}>
            {items.map((it, i) => (
              <div key={`${it.alt}-${i}`} className={styles.slide}>
                <img className={styles.logo} src={it.src} alt={it.alt} />
              </div>
            ))}
          </Slider>

          {/* edge fades */}
          <div className={`${styles.fade} ${styles.left}`} aria-hidden="true" />
          <div className={`${styles.fade} ${styles.right}`} aria-hidden="true" />

          {/* pause/play button like your UI */}
          <button
            type="button"
            className={`${styles.pause} ${paused ? styles.playing : ""}`}
            aria-label={paused ? "Play slider" : "Pause slider"}
            aria-pressed={paused}
            onClick={togglePlay}
            title={paused ? "Play" : "Pause"}
          />
        </div>
      </div>
    </section>
  );
}
