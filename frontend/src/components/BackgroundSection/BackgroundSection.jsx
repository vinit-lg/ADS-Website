import styles from "./BackgroundSection.module.css";

const BackgroundSection = ({ backgroundImage, title, subtitle, children }) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section className={styles.backgroundSection} style={sectionStyle}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default BackgroundSection;
