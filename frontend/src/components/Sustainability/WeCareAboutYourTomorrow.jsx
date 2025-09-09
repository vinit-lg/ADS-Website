import React from "react";
import styles from "./WeCareAboutYourTomorrow.module.css";

const WeCareAboutYourTomorrow = ({ heading, paragraph }) => {
  return (
    <section className={styles.weCare}>
      <div className="container">
        <div className={styles.wecareContent}>
          <h2 className={styles.heading}>
            {heading || "We care about your tomorrow"}
          </h2>

          {paragraph ? (
            <p className={styles.text}>{paragraph}</p>
          ) : (
            <p className={styles.text}>
              At the heart of everything we do is our commitment to the
              environment. From our daily operations to collaborations, our
              staff, partners, and customers drive impactful change for a
              sustainable future.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeCareAboutYourTomorrow;
