import React from "react";
import styles from "./CareerThink.module.css";

export default function CareerThink({
  title = "Think AV. Think Almoe",
  description = `Almoe is a leading provider of Audio Visual (AV) solutions in the Middle East.
We are always on the lookout for passionate and talented individuals to join our team.`,
  subText = `If you are enthusiastic about AV technology and want to be part of a
dynamic and innovative team, then Almoe could be the perfect fit for you.
Our team is made up of experts in the field, and we work together to create
exceptional experiences for our clients.`,
  image,
  reverse = false, // pass true on even sections to swap image + text
}) {
  return (
    <div className="container">
    <section className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.subText}>{subText}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={image} alt="" className={styles.image} />
      </div>
    </section>
    </div>
  );
}
