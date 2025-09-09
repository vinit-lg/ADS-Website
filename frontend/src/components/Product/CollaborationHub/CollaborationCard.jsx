import React from "react";
import styles from "./CollaborationCard.module.css";

// Replace with your actual product images
import hub85 from "/Products/CollaborationHub/Hub-3-85-Mobile-Stand.webp";
import hub50 from "/Products/CollaborationHub/Hub-3-85-Mobile-Stand.webp";
import hub3 from "/Products/CollaborationHub/Hub-3-85-Mobile-Stand.webp";

const products = [
  { id: 1, title: 'Surface Hub 2S 85"', img: hub85, link: "#" },
  { id: 2, title: 'Surface Hub 2S 50"', img: hub50, link: "#" },
  { id: 3, title: "Surface Hub 3", img: hub3, link: "#" },
];

export default function CollaborationCard() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Title + description */}
        <div className={styles.header}>
          <h2 className={styles.title}>Seamlessly Share & Create Together</h2>
          <p className={styles.desc}>
            The range of products in our Collaboration Hub is designed to meet
            diverse industrial needs, spanning from classrooms to boardrooms.
            We’re here to make it inclusive for anyone, anywhere in the hybrid
            space. Explore our products today to ensure you have the tools and
            technology needed to collaborate effectively, share spaces offline
            and online and contribute in-person or remotely.
          </p>
          <p className={styles.descStrong}>
            We are also available to assist you through a hassle-free transition
            from a traditional work setup to a hybrid space. Contact us to
            explore more!
          </p>
        </div>

        {/* Product grid */}
        <div className={styles.grid}>
          {products.map((p) => (
            <div className={styles.card} key={p.id}>
              <div className={styles.imageWrap}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={p.img} className={styles.image} alt="" />
              </div>
              <p className={styles.cardTitle}>{p.title}</p>
              <a href={p.link} className={styles.button}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
