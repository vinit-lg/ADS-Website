import React, { useState } from "react";
import styles from "./ScannerProductsCarousel.module.css";

const ScannerProductsCarousel = ({ products, heading = "Scanner Products" }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + itemsPerPage < products.length;

  const prevSlide = () => {
    if (canGoPrev) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const nextSlide = () => {
    if (canGoNext) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.ScannerProductCarouselBackground}>
      <div className="container">
        <div className={styles.ScannerProductHeading}>
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
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <p className={styles.productName}>{product.name}</p>
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
      </div>
    </div>
  );
};

export default ScannerProductsCarousel;
