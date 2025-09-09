import styles from "./LabellersDiscover.module.css";

export default function LabellersDiscover() {
  return (
    <section className={styles.wrap} role="region" aria-label="Discover labellers">
      <div className={styles.inner}>
        <h3 className={styles.heading}>
          Discover which labeller is right for you
        </h3>

        <div className={styles.grid}>
          <button type="button" className={styles.card}>
            Home and Small Office
          </button>
          <button type="button" className={styles.card}>
            Industrial Usage
          </button>
          <button type="button" className={styles.card}>
            Office Use
          </button>
          <button type="button" className={styles.card}>
            Tapes &amp; Labels
          </button>
        </div>
      </div>
    </section>
  );
}
