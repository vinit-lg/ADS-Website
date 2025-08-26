import React from "react";
import styles from "./InfoSection.module.css";

const InfoSection = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  flipped = false,
  children
}) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <section
      className={`${styles.backgroundSection} ${flipped ? styles.flipped : ""}`}
      style={sectionStyle}
      
    >   
     <div className={styles.InfoContent}>
    <div className="container">
        <div className={styles.overlay}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          {children && <div className={styles.children}>{children}</div>}
        </div>
        </div>
          </div>
    </section>
  );
};

export default InfoSection;
