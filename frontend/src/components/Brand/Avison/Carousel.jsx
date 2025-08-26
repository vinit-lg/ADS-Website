import React, { useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ slides }) => {
  if (!slides || slides.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prevSlide} aria-label="Previous slide">
        &#10094;
      </button>

      <div className={styles.slide}>
        <img src={slides[activeIndex].image} alt={slides[activeIndex].heading || `Slide ${activeIndex + 1}`} className={styles.image} />
        {slides[activeIndex].heading && (
          <div className={styles.caption}>
            <h2>{slides[activeIndex].heading}</h2>
          </div>
        )}
      </div>

      <button className={styles.arrow} onClick={nextSlide} aria-label="Next slide">
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
