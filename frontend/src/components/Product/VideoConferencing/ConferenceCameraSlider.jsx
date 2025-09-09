import styles from "./ConferenceCameraSlider.module.css";
import Slider from "react-slick";

export default function ConferenceCameraSlider({
  title = "Conference Cameras",
  items = [],
  showCTA = true,
  ctaLabel = "Book a Demo Now",
  onCTAClick = () => {},
  settings: settingsOverride = {},
}) {
  const settings = {
    infinite: true,
    speed: 450,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,          // use default arrows
    dots: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992,  settings: { slidesToShow: 3 } },
      { breakpoint: 768,  settings: { slidesToShow: 2 } },
      { breakpoint: 520,  settings: { slidesToShow: 1 } },
    ],
    ...settingsOverride,
  };

  return (
    <section className={styles.section}>
      <div className={styles.decorLeft} />
      <div className={styles.decorRight} />

      <div className={styles.container}>
        {title && <h2 className={styles.heading}>{title}</h2>}

        <div className={styles.sliderWrap}>
          <Slider {...settings}>
            {items.map((it) => (
              <div key={it.id} className={styles.slide}>
                <button type="button" className={styles.card} onClick={it.onClick}>
                  <div className={styles.media}>
                    <img className={styles.image} src={it.img} alt={it.title} />
                  </div>
                  <div className={styles.caption}>{it.title}</div>
                </button>
              </div>
            ))}
          </Slider>
        </div>

        {showCTA && (
          <div className={styles.ctaWrap}>
            <button type="button" className={styles.cta} onClick={onCTAClick}>
              {ctaLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
