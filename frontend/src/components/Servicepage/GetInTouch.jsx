import React from 'react';
import styles from './GetInTouch.module.css';

function GetInTouch() {
  const handleContactClick = () => {
    window.location.href = '/contact-us';
  };

  return (
    <section className={styles.getInTouch}>
      <div className="container">
      <h2 className={styles.title}>Get in Touch</h2>
      <button className="button" onClick={handleContactClick}>
        Contact Us
      </button>
      </div>
    </section>
  );
}

export default GetInTouch;
