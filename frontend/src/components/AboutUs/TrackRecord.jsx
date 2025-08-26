
import styles from "./TrackRecord.module.css";

const stats = [
  { number: "28+", label: "Years of Experience" },
  { number: "30+", label: "Partner Brands From Across The Globe" },
  { number: "20+", label: "Authorized Service & Support Partner Brands" },
  { number: "3,500+", label: "AV Installations" },
];

const TrackRecord = () => {
  return (
    <section className={styles.trackRecordSection}>
        <div className="container">
      <h2>Our Track Record of Excellence</h2>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default TrackRecord;
