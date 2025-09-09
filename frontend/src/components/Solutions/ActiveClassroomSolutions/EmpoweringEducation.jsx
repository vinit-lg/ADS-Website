import styles from "./EmpoweringEducation.module.css";

export default function EmpoweringEducation({
  title = "Empowering Education through Innovation",
  paragraphs = [
    "At Almoe Digital Solutions, we believe that the modern classroom should be interactive, engaging, and dynamic. Our range of active classroom solutions provides a comprehensive solution for schools and educational institutions. Our products, including projectors, interactive whiteboards, video conferencing solutions, video capturing solutions, active floor solutions, VR solutions, and eBooks, offer an innovative way of learning and teaching.",
    "Our projectors are easy to set up, have a long lifeh2, and provide crystal-clear images. Our interactive whiteboards use multi-touch technology and are perfect for collaboration and presentation. With our video conferencing solutions, teachers and students can connect from anywhere in the world. Our video capturing solutions make it easy to capture and share lessons.",
    "Our active floor solutions engage students and enhance their learning experience. Our VR solutions provide an immersive and engaging learning experience, and our eBooks offer a convenient and accessible solution for research, reading, and studying. Let’s transform your classroom today with Almoe Digital Solutions.",
  ],
  bgImage = "/Solutions/ActiveClassroomSolutions/AUTO+ID+SOLUTION-04.webp",
}) {
  return (
    <section
      className={styles.section}
      style={{
        ["--ee-bg"]: `url(${bgImage})`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.headerRow}>
          {/* small yellow orb */}
          <h2 className={styles.orb} aria-hidden />
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.copy}>
          {paragraphs.map((t, i) => (
            <p key={i} className={styles.p}>
              {t}
            </p>
          ))}
        </div>
      </div>

      {/* subtle floating dots like the reference */}
      <h2 className={`${styles.dot} ${styles.d1}`} />
      <h2 className={`${styles.dot} ${styles.d2}`} />
      <h2 className={`${styles.dot} ${styles.d3}`} />
      <h2 className={`${styles.dot} ${styles.d4}`} />
      <h2 className={`${styles.dot} ${styles.d5}`} />
    </section>
  );
}
