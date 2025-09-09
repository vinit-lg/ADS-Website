import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";

const STRAPI_URL = "http://localhost:1337"; // backend origin
const API_URL = `${STRAPI_URL}/api/homepage?populate[aboutSection][populate]=*`;

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [aboutData, setAboutData] = useState(null);

  // Animate section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Fetch About Section data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        console.log("About Section API:", json);

        if (json?.data?.aboutSection) {
          setAboutData(json.data.aboutSection);
        }
      } catch (err) {
        console.error("Error fetching About Section:", err);
      }
    };
    fetchData();
  }, []);

  if (!aboutData) return null;

  const bgImageUrl = aboutData.backgroundImage
    ? `${STRAPI_URL}${aboutData.backgroundImage.url}`
    : null;

  const rightImageUrl = aboutData.image
    ? `${STRAPI_URL}${aboutData.image.url}`
    : null;

  return (
    <section
      className={`${styles.aboutSection} ${isVisible ? styles.animate : ""}`}
      ref={sectionRef}
      style={{
        background: bgImageUrl
          ? `url(${bgImageUrl}) center/cover no-repeat`
          : "none",
      }}
    >
      <div className="container">
        <div className={styles.aboutSectionContent}>
          {/* Left Content */}
          <div className={styles.content}>
            <h3 className={styles.title}>
              {aboutData.heading}
              <br />
              <span>{aboutData.subheading}</span>
            </h3>

            <div className={styles.elevatingPara}>
              {aboutData.paragraphs?.map((p) => (
                <p key={p.id} className={styles.text}>
                  {p.text}
                </p>
              ))}
            </div>

            <button className={`btn ${styles.aboutbtn}`}>
              {aboutData.buttonText}
            </button>
          </div>

          {/* Right-hand image */}
          <div className={styles.imageWrapper}>
            {rightImageUrl && (
              <img
                src={rightImageUrl}
                alt="About Section"
                className={styles.mainImage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
