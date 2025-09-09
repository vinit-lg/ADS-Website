import React from "react";
import styles from "./DrapperSwap.module.css";

export default function DrapperSwap({
  topImage = "/assets/draper-room.jpg",
  bottomImage = "/assets/draper-screen.jpg",
  topAlt = "projection room",
  bottomAlt = "projection screen closeup"
}) {
  return (
    <div className={styles.swapWrap}>

      {/* First row: left = text, right = image */}
      <section className={styles.row}>
        <div className={styles.textCol}>
          <h2 className={styles.bigTitle}>Draper® Projection Screens</h2>
          <p className={styles.lead}>
            Draper Projection Screens is a renowned leader in the manufacturing of
            high-quality projection screens designed for diverse applications,
            including corporate, education, home cinema, and entertainment.
            With a legacy of innovation and precision, Draper offers an extensive
            range of screens, from motorized and fixed-frame designs to portable
            and custom solutions, ensuring an exceptional viewing experience.
            Their products are engineered with advanced materials that enhance
            image clarity, brightness, and color accuracy, catering to the evolving
            needs of modern audiovisual setups. Committed to sustainability, Draper
            integrates eco-friendly practices in its manufacturing processes,
            reflecting its dedication to reducing environmental impact. Trusted by
            professionals worldwide, Draper continues to set benchmarks in projection technology.
          </p>
        </div>

        <div className={styles.imageCol}>
          <img src={topImage} alt={topAlt} className={styles.roundedImage} />
        </div>
      </section>

      {/* Separator line */}
      <div className={styles.separator} />

      {/* Second row: left = image, right = text */}
      <section className={`${styles.row} ${styles.rowReverse}`}>
        <div className={styles.imageCol}>
          <img src={bottomImage} alt={bottomAlt} className={styles.roundedImage} />
        </div>

        <div className={styles.textCol}>
          <h3 className={styles.sectionTitle}>Motorized Projection Screens</h3>
          <p className={styles.lead}>
            Draper® offers a comprehensive range of motorized projection screens featuring
            motorized retractable surfaces, versatile motor and control options, and the
            industry's broadest selection of viewing surfaces. Use the filters below to
            choose the ideal screen for your installation—from quiet motors for home
            theaters to heavy-duty options for large venues. Every motorized solution is
            engineered for smooth, reliable operation and long service life.
          </p>
          <p className={styles.lead}>
            Whether selecting an electric screen for a classroom or designing a custom
            home cinema, Draper provides guidance, accessories and professional support
            to ensure your screen performs flawlessly with your AV setup.
          </p>
        </div>
      </section>
    </div>
  );
}
