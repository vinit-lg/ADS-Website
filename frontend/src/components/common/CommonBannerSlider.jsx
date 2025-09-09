import React from "react";
import Slider from "react-slick";
import styles from "./CommonBannerSlider.module.css";

function Arrow({ onClick, direction }) {
  return (
    <button
      className={[
        styles.nav,
        direction === "prev" ? styles.prev : styles.next,
      ].join(" ")}
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous" : "Next"}
      type="button"
    >
      {direction === "prev" ? (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M15.5 4.5L8 12l7.5 7.5"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M8.5 4.5L16 12l-7.5 7.5"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default function CommonBannerSlider({
  title = "Home & Small Office",
  bgImage,             // e.g. "/imgs/slider-bg-art.png"
  slides = [],         // [{ image, title }]
  ctaLabel = "Book a Demo Now",
  onCta = () => {},
  autoplay = false,
  autoplaySpeed = 4000,
}) {
  const settings = {
    infinite: false,
    speed: 420,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed,
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.wrapper}>
      {/* Slider region with background artwork */}
      <div
        className={styles.sliderRegion}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      >
        <div className={styles.container}>
          <h2 className={styles.heading}>{title}</h2>

          <div className={styles.sliderWrap}>
            <Slider {...settings}>
              {slides.map((s, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.imgWrap}>
                    <img src={s.image} alt={s.title} />
                  </div>
                  <div className={styles.caption}>{s.title}</div>
                </div>
              ))}
            </Slider>
          </div>

          <div className={styles.ctaWrap}>
            <button className={styles.cta} onClick={onCta} type="button">
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
