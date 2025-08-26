import React from 'react';
import Carousel from '../../../components/Brand/Avison/Carousel';

const AvisonSlides = [
  {
    image: '/Brand/Avison/F5.webp',
    heading: 'Avision AD380 - Fast, and Affordable Sheet-Fed Scanner',
  },
  {
    image: '/Brand/Avison/F5_2.webp',
    heading: 'Avision AD380 - Fast, and Affordable Sheet-Fed Scanner',
  },
  {
    image: '/Brand/Avison/F5.webp',
    heading: 'Avision AD380 - Fast, and Affordable Sheet-Fed Scanner',
  },
];

const AvisonBrandCarousel = () => {
  return (
    <section>
      <Carousel slides={AvisonSlides} />
    </section>
  );
};

export default AvisonBrandCarousel;
