import React from "react";
import Slider from "react-slick";
import styles from "./AlmoeCommon.module.css";

/** Arrow components */
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      aria-label="Previous"
      onClick={onClick}
      className={`${styles.navBtn} ${styles.left}`}
    >
      <svg viewBox="0 0 24 24" className={styles.chev} aria-hidden="true">
        <path
          d="M15.5 4.5L8 12l7.5 7.5"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      aria-label="Next"
      onClick={onClick}
      className={`${styles.navBtn} ${styles.right}`}
    >
      <svg viewBox="0 0 24 24" className={styles.chev} aria-hidden="true">
        <path
          d="M8.5 4.5L16 12l-7.5 7.5"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function AlmoeCommonSlider({
  title,       // no default here, so always dynamic
  items = [],
}) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 450,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1180, settings: { slidesToShow: 3 } },
      { breakpoint: 900,  settings: { slidesToShow: 2 } },
      { breakpoint: 560,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.sliderSection} aria-label={title}>
      <div className={styles.container}>
        {title && <h2 className={styles.heading}>{title}</h2>}

        <div className={styles.sliderWrap}>
          <Slider {...settings} className={styles.slickRoot}>
            {items.map((it, i) => (
              <div key={i} className={styles.cardOuter}>
                <div className={styles.card}>
                  <div className={styles.imageBox}>
                    <img src={it.image} alt={it.title} />
                  </div>
                  <div className={styles.cardTitle}>{it.title}</div>
                  <a href={it.href || "#"} className={styles.cta}>
                    {it.ctaText || "View Product"}
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
