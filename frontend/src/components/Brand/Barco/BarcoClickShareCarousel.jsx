import React, { useState } from "react";
import styles from "./BarcoClickShareCarousel.module.css";

const BarcoClickShareCarousel = ({ items, heading = "Barco ClickShare" }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + itemsPerPage < items.length;

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

  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.carouselBackground}>
      <div className="container">
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.carousel}>
          <button
            className={`${styles.arrow} ${!canGoPrev ? styles.disabled : ""}`}
            onClick={prevSlide}
            aria-label="Previous"
          >
            &#10094;
          </button>

          <div className={styles.itemsRow}>
            {visibleItems.map((item, idx) => (
              <div className={styles.itemCard} key={idx}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <p className={styles.itemName}>{item.name}</p>
                <button className={styles.itemButton} onClick={() => alert(`${item.name} button clicked`)}>
                  View Product
                </button>
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

export default BarcoClickShareCarousel;
