import React from 'react';
import styles from './CircularoBanner.module.css';

export default function CircularoBanner({ phoneImg = '/assets/phone-mockup.png' }) {
  return (
    <section className={styles.hero} aria-label="Circularo hero">
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Circularo</h1>

          <h2 className={styles.lead}>
            Simplify digital documentation and signatures
          </h2>

          <p className={styles.copy}>
            Circularo simplifies and accelerates your personal and business
            paperwork with an all-in-one digital platform designed to transform
            how you manage, sign, and share documents.
          </p>

          <div className={styles.ctaRow}>
            <button className={styles.primaryBtn}>Contact Us</button>
            <button className={styles.secondaryBtn}>Enquire Us</button>
          </div>
        </div>

        <div className={styles.right}>
          <img src={phoneImg} alt="app mockup" className={styles.phone} />
        </div>
      </div>
    </section>
  );
}
