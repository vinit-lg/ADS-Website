import React from "react";
import styles from "./ActiveFloorInstallation.module.css";

const installationItems = [
  {
    title: "Vinyl Floor (3.2 x 2 meters)",
  },
  {
    title: "Ceiling-Mounted Projector Kit",
  },
  {
    title: "Tracking Camera (e.g., Kinect 2)",
  },
  {
    title: "Installation Box & Materials",
  },
  {
    title: "PC with Windows 8/10 or 10",
  },
  {
    title: "Wireless Keyboard",
  },
  {
    title: "Standard Speakers",
  },
  {
    title: "Software License & Support",
  },
  {
    title: "Service Agreement",
  },
];

const ActiveFloorInstallation = () => {
  return (
    <section className={styles.installationSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What’s Included in an ActiveFloor Installation?</h2>
        <ul className={styles.installationList}>
          {installationItems.map(({ title, description }, index) => (
            <li key={index} className={styles.installationItem}>
              <h3 className={styles.itemTitle}>{title}</h3>
              <p className={styles.itemDescription}>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActiveFloorInstallation;
