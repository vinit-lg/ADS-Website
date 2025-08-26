import React, { useRef } from "react";
import Slider from "react-slick";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Marcus Tolledo",
    image: "/images/testimonials-image.webp",
    text: "Almoe Digital Solutions has truly elevated our educational experience. Their active classroom solutions have invigorated our lessons and engaged our students like never before.",
    designation: "Marcus Tolledo (zayed University)"
  },
  {
    id: 2,
    name: "Shafeer N",
    image: "/images/testimonials-image.webp",
    text: "Their team demonstrated an impressive understanding of our organization's specific needs and objectives, developing tailored IT solutions.",
      designation: "Marcus Tolledo (zayed University)"
  },
  {
    id: 3,
    name: "Renson Thomas",
    image: "/images/testimonials-image.webp",
    text: "Their tailored solutions have had a profound impact on our teaching practices, with seamless integration and unparalleled support.",
      designation: "Marcus Tolledo (zayed University)"
  },
  {
    id: 4,
    name: "Additional Client",
    image: "/images/testimonials-image.webp",
    text: "An additional testimonial text for showing the carousel effect with more than three cards.",
    designation: "Marcus Tolledo (zayed University)"
  },
];

function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials-slider-section">
        <div className="container">
      <h2 className="section-heading">What do our clients have to say?</h2>
      <Slider ref={sliderRef} {...settings}>
        {testimonialsData.map(({ id, name, designation, image, text }) => (
          <div key={id} className="testimonial-card">
            <img src={image} alt={name} className="testimonial-image" />
            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-text">“{text}”</p>
             <p className="testimonial-designation">{designation}</p>
          </div>
        ))}
      </Slider>
      <div className="slider-buttons">
        <button
          className="slider-btn"
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Previous"
        >
          &#10094;
        </button>
        <button
          className="slider-btn"
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Next"
        >
          &#10095;
        </button>
      </div>
      </div>
    </section>
  );
}

export default Testimonials;
