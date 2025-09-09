import React from "react";
import Slider from "react-slick";
import styles from "./HardwareProductCarousel.module.css";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

/* Custom arrows */
const PrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`${styles.slickArrow} ${styles.prevArrow}`}
    onClick={onClick}
    aria-label="Previous"
  >
    <BsArrowLeft />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={`${styles.slickArrow} ${styles.nextArrow}`}
    onClick={onClick}
    aria-label="Next"
  >
    <BsArrowRight />
  </button>
);

const HardwareProductCarousel = ({
  products = [],
  heading = "Hardware Products",
  buttonLabel = "View All Products",
  onButtonClick
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.HardwareProductCarouselBackground}>
      <div className="container-fluid">
        <div className={styles.HardwareProductHeading}>
          <h2>{heading}</h2>
        </div>

        <div className={styles.slickWrap}>
          <Slider {...settings}>
            {products.map((product, idx) => (
              <div key={idx} className={styles.slideItem}>
                <div className={styles.productCard}>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder} />
                  )}

                  <div className={styles.cardBody}>
                    <p className={styles.productName}>{product.name}</p>
                    {product.desc && (
                      <p className={styles.productDesc}>{product.desc}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className={styles.centerButtonWrapper}>
          <button
            className={`btn ${styles.centerButton}`}
            onClick={onButtonClick ? onButtonClick : () => {}}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HardwareProductCarousel;
