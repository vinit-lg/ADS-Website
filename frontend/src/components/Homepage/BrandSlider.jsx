import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./BrandSlider.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MdPauseCircleFilled, MdOutlinePlayCircleFilled } from "react-icons/md";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
const abs = (u) => (!u ? "" : u.startsWith("http") ? u : `${STRAPI_URL}${u}`);

// Custom arrows
function NextArrow({ onClick }) {
  return (
    <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}
function PrevArrow({ onClick }) {
  return (
    <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

const BrandSlider = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [data, setData] = useState(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Fetch from Strapi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/homepage?populate[brandSlider][populate]=*`
        );
        const json = await res.json();
        console.log("BrandSlider API:", json);

        setData(json?.data?.brandSlider || null);
      } catch (err) {
        console.error("Error fetching BrandSlider:", err);
      }
    };
    fetchData();
  }, []);

  if (!data) return null;

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ],
  };

  return (
    <section className={styles.brandSection}>
      {/* Background video */}
      {data.backgroundVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgVideo}
        >
          <source src={abs(data.backgroundVideo.url)} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="container">
        <div className={styles.overlay}>
          <h2 className={styles.heading}>{data.heading}</h2>

          <Slider {...settings} className={styles.slider}>
            {data.logos?.map((logo) => (
              <div key={logo.id} className={styles.slide}>
                <img src={abs(logo.url)} alt={logo.name} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Play/Pause button */}
        <button className={styles.playPause} onClick={toggleVideo}>
          {isPlaying ? <MdPauseCircleFilled /> : <MdOutlinePlayCircleFilled />}
        </button>
      </div>
    </section>
  );
};

export default BrandSlider;
