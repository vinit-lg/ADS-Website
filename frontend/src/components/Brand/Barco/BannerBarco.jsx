import React from "react";
import styles from "./BannerBarco.module.css";

const BannerBarco = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              A wireless solution for effortless hybrid meetings and smooth
              collaboration
            </h1>
            <p className={styles.subtitle}>
              Effortless and inclusive collaboration in hybrid meeting spaces is
              just a click away with the ClickShare Conference wireless video
              system. Say goodbye to cables and complications.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="/Brand/Barco/6-BARCO_rgb_primarylogo_red.webp"
              alt="Barco Visual Display"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBarco;
