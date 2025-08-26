import React, { useRef } from "react";
import Slider from "react-slick";
import "./BrandsSlider.css";


const brandLogos = [
  { id: 1, logoUrl: "/images/gess-dubai.webp", alt: "Brand 1" },
  { id: 2, logoUrl: "/images/gess-dubai.webp", alt: "Brand 2" },
  { id: 3, logoUrl: "/images/gess-dubai.webp", alt: "Brand 3" },
  { id: 4, logoUrl: "/images/gess-dubai.webp", alt: "Brand 4" },
  { id: 5, logoUrl: "/images/gess-dubai.webp", alt: "Brand 5" },
  { id: 6, logoUrl: "/images/gess-dubai.webp", alt: "Brand 6" },
  { id: 7, logoUrl: "/images/gess-dubai.webp", alt: "Brand 7" },
  { id: 8, logoUrl: "/images/gess-dubai.webp", alt: "Brand 8" },
];

function BrandSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="brand-slider-section">
      <div className="container">
        <h2 className="brand-slider-heading">Brands We Work With</h2>
        <div className="brandsSlider">
        <Slider ref={sliderRef} {...settings}>
          {brandLogos.map((brand) => (
            <div className="brand-slide" key={brand.id}>
              <img src={brand.logoUrl} alt={brand.alt} className="brand-logo" />
            </div>
          ))}
        </Slider>
          </div>
        <div className="slider-buttons">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="slider-arrow left"
            aria-label="Previous"
          >
            &#10094;
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="slider-arrow right"
            aria-label="Next"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
