import React from "react";
import styles from "./SurfaceDevice.module.css";

export default function SurfaceDeviceBanner({
  title = "Surface for Business",
  buttonLabel = "Request a call back",
  onButtonClick = () => {},
}) {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h1 className={styles.heading}>{title}</h1>
        <button className={styles.cta} onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
