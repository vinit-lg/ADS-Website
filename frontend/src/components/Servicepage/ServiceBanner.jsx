import React from 'react';
import styles from './ServiceBanner.module.css';

function ServiceBanner() {
  return (
    <section className={styles.servicesBanner}>
      <div className="container">
        <h1 className={styles.bannerTitle}>Services &amp; Support</h1>
      </div>
    </section>
  );
}

export default ServiceBanner;
