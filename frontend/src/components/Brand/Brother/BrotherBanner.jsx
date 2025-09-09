// BrotherBanner.jsx
import React from "react";
import styles from "./BrotherBanner.module.css";

const BrotherBanner = ({ logoSrc = "/Brand/Brother/brother+white+logo.webp", cta1Href = "#", cta2Href = "#", cta3Href = "#" }) => {
  return (
    <header className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.brandWrap}>
          <img src={logoSrc} alt="Brother" className={styles.logo} />
        </div>

        <p className={styles.lead}>Discover which labeller is right for you</p>

        <nav className={styles.ctaRow} aria-label="Banner actions">
          <a className={styles.cta} href={cta1Href}>Home and Office Usage</a>
          <a className={styles.cta} href={cta2Href}>Industrial Usage</a>
          <a className={styles.cta} href={cta3Href}>Request a Call Back</a>
        </nav>
      </div>
    </header>
  );
};

export default BrotherBanner;
