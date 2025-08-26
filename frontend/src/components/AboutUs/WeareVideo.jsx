import styles from "./WeareVideo.module.css";

const WeareVideo = ({ title, subtitle, description, videoSrc }) => {
  return (
    <section className={styles.videoSection}>
      <div className="container">
      <video className={styles.videoBg} autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.overlay}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
      </div>
    </section>
  );
};

export default WeareVideo;
