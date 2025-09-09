
import styles from "./SurfaceDevicePro.module.css";

export default function SurfaceDevicePro({
  label = "All New",
  title = "Surface Pro 9",
  videoSrc = "/videos/surface-pro-9.mp4",
  poster = "/images/surface-pro-9-poster.jpg",
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {label && <h4 className={styles.label}>{label}</h4>}
        {title && <h1 className={styles.title}>{title}</h1>}

        <div className={styles.videoWrap}>
          {/* Autoplay hero video; muted+playsInline to auto-play on mobile */}
          <video
            className={styles.video}
            src={videoSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
