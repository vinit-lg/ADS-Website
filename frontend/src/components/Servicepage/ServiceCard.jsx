import React from 'react';
import styles from './ServiceCard.module.css';

const services = [
  { title: "", imgSrc: "/serviceImage/Annual+Maintenance+Contract.webp" },
  { title: "", imgSrc: "/serviceImage/Annual+Maintenance+Contract.webp" },
  { title: "Shifting AV - Office Equipment", imgSrc: "/serviceImage/Annual+Maintenance+Contract.webp" },
  { title: "Spare Parts & Service", imgSrc: "/serviceImage/Annual+Maintenance+Contract.webp" },
  { title: "Third Part Installation", imgSrc: "/serviceImage/Annual+Maintenance+Contract.webp" },
  { title: "Warranty Claims", imgSrc: "/serviceImage/Annual+Maintenance+Contract.webp" },
];

function ServiceCard() {
  return (
    <section className={styles.servicesGrid}>
      <div className="container">
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, idx) => (
            <div
              key={idx}
              className={styles.card}
              style={{ backgroundImage: `url(${service.imgSrc})` }}
            >
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
