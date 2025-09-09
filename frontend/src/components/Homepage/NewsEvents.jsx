import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./NewsEvents.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MdPauseCircleFilled, MdOutlinePlayCircleFilled } from "react-icons/md";


const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
const abs = (u) => (!u ? "" : u.startsWith("http") ? u : `${STRAPI_URL}${u}`);

// Custom Arrows
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

export default function NewsEvents() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [section, setSection] = useState(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/homepage?populate[newsEventsSection][populate][newsItems][populate]=image&populate[newsEventsSection][populate]=backgroundVideo`
        );
        const json = await res.json();
        console.log("NewsEvents API:", json);
        setSection(json?.data?.newsEventsSection || null);
      } catch (err) {
        console.error("NewsEvents fetch error:", err);
      }
    };
    fetchData();
  }, []);

  if (!section) return null;

  const { heading, backgroundVideo, newsItems } = section;

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.newsSection}>
      {/* Background Video */}
      {backgroundVideo?.url && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgVideo}
        >
          <source src={abs(backgroundVideo.url)} type="video/mp4" />
        </video>
      )}

      <div className={styles.overlay}>
        <div className="container">
          <h2 className={styles.heading}>{heading}</h2>
          <Slider {...settings} className={styles.slider}>
            {newsItems?.map((item) => (
              <div key={item.id} className={styles.card}>
                {item.image && (
                  <img
                    src={abs(item.image.url)}
                    alt={item.title}
                    className={styles.image}
                  />
                )}
                <p className={styles.text}>{item.title}</p>
                <a href={item.link} className="btnBlue">
                  Learn more
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Play / Pause Button */}
      {backgroundVideo?.url && (
        <button className={styles.playPause} onClick={toggleVideo}>
          {isPlaying ? <MdPauseCircleFilled /> : <MdOutlinePlayCircleFilled />}
        </button>
      )}
    </section>
  );
}
