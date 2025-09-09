import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./Testimonials.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
const abs = (u) => (!u ? "" : u.startsWith("http") ? u : `${STRAPI_URL}${u}`);

// Custom arrows
function NextArrow({ onClick }) {
  return (
    <button className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
      <BsArrowRight />
    </button>
  );
}
function PrevArrow({ onClick }) {
  return (
    <button className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
      <BsArrowLeft />
    </button>
  );
}

const Testimonials = () => {
  const [section, setSection] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/homepage?populate[testimonialsSection][populate][items][populate]=image`
        );
        const json = await res.json();
        console.log("Testimonials API:", json);

        setSection(json?.data?.testimonialsSection || null);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    })();
  }, []);

  if (!section) return null;

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        {/* Heading from Strapi */}
        <h2 className={styles.heading}>{section.heading}</h2>

        {/* Slider */}
        <Slider {...settings} className={styles.slider}>
          {section.items?.map((t) => (
            <div key={t.id} className={styles.card}>
              {t.image && (
                <img
                  src={abs(t.image.url)}
                  alt={t.name}
                  className={styles.image}
                />
              )}
              <h3 className={styles.name}>{t.name}</h3>
              <p className={styles.quote}>{t.quote}</p>
              <p className={styles.designation}>{t.designation}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
