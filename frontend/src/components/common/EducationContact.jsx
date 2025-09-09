import React from "react";
import styles from "./EducationContact.module.css";

export default function EducationContact({
  title = "Contact Us",
  description = "Have questions or need assistance? Our technical team is here to help! Whether you're seeking product information, technical support, or guidance on implementing interactive solutions in your educational setting, we're just a click or call away. Reach out to us today and let us be your partner in transforming learning experiences.",
  buttonText = "Contact Us",
  buttonLink = "#",
}) {
  return (
    <section className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.desc}>{description}</p>
        <a href={buttonLink} className={styles.button}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
