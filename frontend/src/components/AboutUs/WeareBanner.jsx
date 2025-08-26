import React from "react";
import styles from "./WeareBanner.module.css";

const WeareBanner = () => (
  <section className={styles.banner}>
    <div className="container">
    <div className={styles.bannerContent}>
      <h1>We Are Almoe Digital Solutions</h1>
      <h2>A leading AV and IT solutions company</h2>
    </div>
    </div>
  </section>
);

export default WeareBanner;
