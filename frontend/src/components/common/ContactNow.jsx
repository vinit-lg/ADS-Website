import React from "react";
import styles from "./ContactNow.module.css";

export default function ContactNow({
  title = "Experience the power of\ninteractive learning with Almoe",
  buttonLabel = "Get a Quote Now",
  onClick = () => {},
  bgImage = "/Solutions/ActiveClassroomSolutions/Solutions+Pages-06.webp",
  decorImage = "/images/contact-now-decor.png",
  minHeight = "560px",
  overlay = 0.35,
  showUnderline = true,
}) {
  return (
    <section
      className={styles.section}
      style={{
        ["--bg-img"]: `url(${bgImage})`,
        ["--decor-img"]: decorImage ? `url(${decorImage})` : "none",
        ["--min-h"]: minHeight,
        ["--overlay"]: overlay,
      }}
      aria-label="Contact Now"
    >
      <div className={styles.inner}>
        <h1 className={styles.title}>
          {title.split("\n").map((line, i) => (
            <h2 key={i} className={styles.line}>
              {line}
              {showUnderline && i === 1 && <i className={styles.underline} />}
            </h2>
          ))}
        </h1>

        <button className={styles.cta} type="button" onClick={onClick}>
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}
