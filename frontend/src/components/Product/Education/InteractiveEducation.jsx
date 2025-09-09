import React from "react";
import styles from "./InteractiveEducation.module.css";

export default function InteractiveEducation() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Why Choose Interactive Education?</h2>

        <ul className={styles.list}>
          <li>
            <h4 className={styles.icon}>✔</h4>
            <strong>Engagement:</strong> Spark curiosity and excitement in the
            classroom with interactive learning experiences that captivate
            students' attention.
          </li>
          <li>
            <h4 className={styles.icon}>✔</h4>
            <strong>Flexibility:</strong> Adapt to diverse learning styles and
            environments with portable solutions that bring interactive
            education wherever you go.
          </li>
          <li>
            <h4 className={styles.icon}>✔</h4>
            <strong>Innovation:</strong> Stay ahead of the curve with
            cutting-edge technology designed to enhance teaching and learning in
            the digital age.
          </li>
          <li>
            <h4 className={styles.icon}>✔</h4>
            <strong>Collaboration:</strong> Foster teamwork and communication
            skills through collaborative activities and interactive projects.
          </li>
          <li>
            <h4 className={styles.icon}>✔</h4>
            <strong>Empowerment:</strong> Empower educators to unleash their
            creativity and personalize learning experiences to meet the needs of
            every student.
          </li>
        </ul>

        <h2 className={styles.subheading}>
          Experience the Future of Learning Today!
        </h2>

        <p className={styles.desc}>
          Transform education and inspire greatness with Interactive Education's
          innovative products. Discover the power of interactive learning and
          unleash the potential of every student. Get started on your journey to
          educational excellence today!
        </p>
      </div>
    </section>
  );
}
