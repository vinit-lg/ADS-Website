import React from 'react';
import styles from './ServiceHighlights.module.css';

const highlights = [
  {
    text: "Extend the life of your technology investment",
    imgSrc: "/serviceImage/Extend+the+life+of+your+technology+investment.webp",
    alt: "Checkmark",
  },
  {
    text: "Lower your operational costs",
    imgSrc: "/serviceImage/Extend+the+life+of+your+technology+investment.webp",
    alt: "Checkmark",
  },
  {
    text: "Maximize the reliability and performance of your equipment",
    imgSrc: "/serviceImage/Extend+the+life+of+your+technology+investment.webp",
    alt: "Checkmark",
  },
  {
    text: "Keep critical operations running with emergency support",
    imgSrc: "/serviceImage/Extend+the+life+of+your+technology+investment.webp",
    alt: "Checkmark",
  },
];

function ServiceHighlights() {
  return (
    <section className={styles.serviceHighlights}>
      <div className="container">
        <ul className={styles.serviceHighlights__list}>
          {highlights.map(({ text, imgSrc, alt }, idx) => (
            <li className={styles.serviceHighlights__item} key={idx}>
              <img className={styles.highlightImage} src={imgSrc} alt={alt} />
              <h4 className={styles.textContent}>{text}</h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServiceHighlights;
