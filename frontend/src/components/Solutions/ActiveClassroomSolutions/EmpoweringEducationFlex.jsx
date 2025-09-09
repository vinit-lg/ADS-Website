
import styles from "./EmpoweringEducationFlex.module.css";

export default function EmpoweringEducationFlex({
  image = "/images/classroom-students.jpg",
  imageAlt = "Students learning",
  paragraphs = [
    "Are you tired of traditional and boring classroom setups? At Almoe Digital Solutions, we believe that learning should be interactive and engaging. Our active classroom solutions provide a comprehensive solution for schools and educational institutions to transform their traditional classrooms into dynamic and innovative learning environments.",
    "With Almoe Digital Solutions, you'll enjoy seamless communication and collaboration with students and teachers from anywhere in the world. Our video conferencing solutions provide high-quality audio and video, making remote learning a breeze. Our video capturing solutions allow teachers to capture and share lessons with students, and our active floor solutions get students up and moving. Our VR solutions provide an immersive and engaging learning experience, and our eBooks offer a convenient and accessible solution for research, reading, and studying.",
    "We are committed to providing you with the best possible experience. Our team of experts will work with you to create the perfect active classroom solution for your school or educational institution. So why wait? Transform your classroom with Almoe Digital Solutions today!",
  ],
  buttonLabel = "Discover Our Products",
  onButtonClick = () => {},
  bgImage = "/images/empowering-flex-bg.png",
}) {
  return (
    <section
      className={styles.section}
      style={{ ["--ee-bg"]: `url(${bgImage})` }}
    >
      <div className={styles.container}>
        {/* Left circular image */}
        <div className={styles.left}>
          <div className={styles.circleWrap}>
            <img src={image} alt={imageAlt} className={styles.circleImg} />
          </div>
        </div>

        {/* Right text block */}
        <div className={styles.right}>
          {paragraphs.map((p, i) => (
            <p key={i} className={styles.p}>
              {p}
            </p>
          ))}

          <div className={styles.ctaWrap}>
            <button
              type="button"
              className={styles.cta}
              onClick={onButtonClick}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
