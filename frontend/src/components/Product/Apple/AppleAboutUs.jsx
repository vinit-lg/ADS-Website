import React from "react";
import styles from "./AppleAboutUs.module.css";

export default function AppleAboutUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>

        <div className={styles.card}>
          <p className={styles.p}>
            <strong>Almoe Digital Solutions</strong> is a proud Apple reseller for
            business, and we are involved in the Apple Distributor Partner Program.
          </p>

          <p className={styles.p}>
            We specialize in offering a wide range of authentic Apple products at
            competitive prices, from iPhones to MacBooks. Our expert team is
            dedicated to helping customers make informed choices, catering to both
            individual and corporate needs across the UAE.
          </p>

          <p className={styles.p}>
            We commit to delivering Apple's innovative technology with unparalleled
            service, ensuring every customer benefits from our expertise and the
            value we provide as a trusted Apple partner.
          </p>
        </div>
      </div>
    </section>
  );
}
