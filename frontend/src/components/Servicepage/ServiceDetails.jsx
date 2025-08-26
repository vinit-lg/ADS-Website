import React from "react";
import styles from "./ServiceDetails.module.css";

const services = [
  {
    title: "Expert Audio-Visual Solutions",
    subTitle: "Almoe Digital Solutions",
    description:
      "As a leading audio-visual systems company, Almoe Digital Solutions is responsible for some of the world’s most complex and high-profile AV installations. We are uniquely positioned to meet your individual requirements and challenges, 365 days a year. Our team of experts is dedicated to providing you with the best service and support for all of your audio-visual needs.",
    imgSrc: "/serviceImage/unsplash-image-nxZDMUQhN4o.webp",
  },
  {
    title: "Optimum Performance with our Service Centre",
    subTitle: "Almoe Digital Solutions",
    description:
      "Keep your equipments’ at optimum performance by servicing it at the Almoe Service Centre. Our team of experts can help you with installation, maintenance, repairs, and upgrades for all of your audio-visual equipment. We are committed to ensuring that your equipment is running smoothly and efficiently, so you can focus on your business.",
    imgSrc: "/serviceImage/unsplash-image-nxZDMUQhN4o.webp",
  },
  {
    title: "Fast and Efficient Repairs",
    subTitle: "Almoe Digital Solutions",
    description:
      "Our primary goal is to get your AV/ IT equipment repaired properly and return it to you as quickly and as soon as possible. Services offered include repairs, maintenance, and upgrades. We understand the importance of having reliable equipment, and we are dedicated to getting your equipment back to you in a timely manner. Contact us today to schedule your repair or maintenance service.",
    imgSrc: "/serviceImage/unsplash-image-nxZDMUQhN4o.webp",
  },
];

function ServiceDetails() {
  return (
    <section className={styles.ourServices}>
      <div className="container">
        <div className={styles.cardsContainer}>
          {services.map(({ title, subTitle, description, imgSrc }, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.textContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <h4 className={styles.cardsubTitle}>{subTitle}</h4>
                <p className={styles.cardDescription}>{description}</p>
              </div>
              <div className={styles.imageWrapper}>
                <img src={imgSrc} alt={title} className={styles.cardImage} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;
