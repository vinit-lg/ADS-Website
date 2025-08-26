
import React, { useState } from "react";
import styles from "./HardwareProductCarousel.module.css"; 

const HardwareProductCarousel = ({
  products,
  heading = "Hardware Products",
  buttonLabel = "View All Products",
  onButtonClick
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4; 

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + itemsPerPage < products.length;

  const prevSlide = () => {
    if (canGoPrev) setStartIndex(startIndex - itemsPerPage);
  };

  const nextSlide = () => {
    if (canGoNext) setStartIndex(startIndex + itemsPerPage);
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.HardwareProductCarouselBackground}>
      <div className="container">
        <div className={styles.HardwareProductHeading}>
          <h2>{heading}</h2>
        </div>
        <div className={styles.carousel}>
          <button
            className={`${styles.arrow} ${!canGoPrev ? styles.disabled : ""}`}
            onClick={prevSlide}
            aria-label="Previous"
          >
            &#10094;
          </button>

          <div className={styles.productsRow}>
            {visibleProducts.map((product, idx) => (
              <div className={styles.productCard} key={idx}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <p className={styles.productName}>{product.name}</p>
                {product.desc && <p className={styles.productDesc}>{product.desc}</p>}
              </div>
            ))}
          </div>

          <button
            className={`${styles.arrow} ${!canGoNext ? styles.disabled : ""}`}
            onClick={nextSlide}
            aria-label="Next"
          >
            &#10095;
          </button>
        </div>

        <div className={styles.centerButtonWrapper}>
          <button
            className={styles.centerButton}
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
