import React from "react";
import styles from "./CircularoFeature.module.css";

const features = [
  {
    title: "eSigning Workflows",
    desc: "Collect all signatures in one step, no need to wait for back-and-forth emails. Stay in control of the entire signing process."
  },
  {
    title: "Sync Existing Documents",
    desc: "Easily sync your documents with tools like MS Office and Google Drive, no downloads required."
  },
  {
    title: "Multi-language Support",
    desc: "Enjoy a fully Arabized interface with multilingual options for both you and your document recipients."
  },
  {
    title: "Easy & Secure Sharing",
    desc: "Ensure that only the intended recipients can access your documents with various identity verification methods."
  },
  {
    title: "Advanced Customizations",
    desc: "Personalize everything—design, domain, email notifications, and more to fit your needs."
  },
  {
    title: "Smart Management",
    desc: "Organize your files effortlessly using built-in management tools designed to help you categorize and keep track of everything."
  }
];

export default function CircularoFeature({ imageSrc = "/Brand/Circularo/product-hero-2.webp", imageAlt = "team working" }) {
  return (
    <section className={styles.section} aria-label="Circularo Features">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Features</h2>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <svg
                  className={styles.checkSvg}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                >
                  <circle cx="12" cy="12" r="10" fill="#0b0b0b" />
                  <path
                    d="M7.5 12.5l2.2 2.2 6.8-6.8"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Image row under the features */}
        <div className={styles.imageWrap}>
          <img src={imageSrc} alt={imageAlt} className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
}
