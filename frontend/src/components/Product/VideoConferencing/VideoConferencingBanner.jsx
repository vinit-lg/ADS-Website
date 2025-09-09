
import styles from "./VideoConferencingBanner.module.css";

export default function VideoConferencingBanner({
  title = "Video Conferencing",
  buttonLabel = "Request a Call Back",
  onButtonClick = () => {},
}) {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        {title && <h1 className={styles.heading}>{title}</h1>}

        {buttonLabel && (
          <button
            className={styles.cta}
            type="button"
            onClick={onButtonClick}
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </section>
  );
}
