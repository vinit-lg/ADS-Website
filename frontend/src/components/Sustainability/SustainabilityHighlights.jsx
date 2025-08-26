import React from "react";
import styles from "./SustainabilityHighlights.module.css";

const sections = [
  {
    title: "Partnering for the planet",
    text: `Almoe's rich legacy in distribution and integration aligns seamlessly with Logitech's global commitment to sustainability. On January 19, 2024, an employee engagement outing turned out to be both exciting and eco-friendly as Almoe team engaged in a kayaking adventure along with mangrove planting on the Yas Beach. When together, the goal of sustainability seems closer.`,
    imgSrc: "/serviceImage/sustainability-1.webp",
    imgAlt: "Kayaking and mangrove planting",
  },
  {
    title: "Practicing what we preach",
    text: `Our efforts are conscious, and result driven not just with delivering our products and services but also while we work towards the sustainable development goals. Its effect? Our giveaways too have sustainability written all over as we distributed glass bottles and cloth bags as giveaways during a local exhibition.`,
    imgSrc: "/serviceImage/sustainability-1.webp",
    imgAlt: "Glass bottle giveaway",
  },
  {
    title: "Mindfulness workshop",
    text: `In February, our team embraced mindfulness at the "Introduction to Meditation" workshop. Participants explored the basics of Anapana meditation, discovering its profound benefits through guided practices and insightful discussions on the global impact of Vipassana. Many attendees reported feeling significantly calmer and more focused, highlighting the transformative power of mindfulness for enhancing employee well-being.`,
    imgSrc: "/serviceImage/sustainability-1.webp",
    imgAlt: "Mindfulness meditation workshop",
  },
  {
    title: "Almoe Super Cup: Hitting a Sustainable Six",
    text: `We believe in sustainable practices that extend beyond tree planting (although we love them!). The Almoe Super Cup cricket match blended employee well-being (SDG 3) with in-depth discussions on broader sustainability initiatives, aligning with the UN Sustainable Development Goals. This enjoyable event demonstrated how small actions can collectively drive a sustainable future.`,
    imgSrc: "/serviceImage/sustainability-1.webp",
    imgAlt: "Almoe Super Cup cricket match",
  },
];

const SustainabilityHighlights = () => {
  return (
    <section className={styles.SustainabilityHighlights}>
        <div className="container">
      {sections.map(({ title, text, imgSrc, imgAlt }, index) => (
        <div key={index} className={styles.section}>
          <div className={styles.content}>
            <h3 className={styles.heading}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={imgSrc} alt={imgAlt} className={styles.image} />
          </div>
        </div>
        
      ))}
      </div>
    </section>
  );
};

export default SustainabilityHighlights;
