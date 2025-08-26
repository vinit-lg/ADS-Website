
import styles from "./ActiveFloorAlternatingSections.module.css";

const sections = [
  {
    title: "ActiveFloor",
    description: "ActiveFloor specializes in developing interactive floor solutions that encourages movement, learning, and brings joy. Our products are designed for schools, kindergartens, libraries, hospitals, supermarkets and more, transforming spaces into dynamic environments that promote activity-based engagement and fun.",
    img: "/Brand/ActiveFloor/IMG_20210421_125705.webp",
    cta: "Learn more",
  },

    {
    title: "ActiveFloor",
    subtitle: "The Interactive Wall",
    description: "ActiveFloor specializes in developing interactive floor solutions that encourages movement, learning, and brings joy. Our products are designed for schools, kindergartens, libraries, hospitals, supermarkets and more, transforming spaces into dynamic environments that promote activity-based engagement and fun.",
     img: "/Brand/ActiveFloor/IMG_20210421_125705.webp",
    cta: "Learn more",
  },

  {
    title: "SPORTsWall",
    subtitle: "The Interactive Wall",
    description: "The SPORTsWall offers an interactive experience for walls, allowing users to play ActiveFloor games using balls instead of feet. Ideal for physical education, it brings a new dimension of interactivity to classrooms, gyms, and training spaces.",
     img: "/Brand/ActiveFloor/IMG_20210421_125705.webp",
    cta: "Learn more",
  },
  {
    title: "MobileMax",
    subtitle: "The Portable Interactive Floor",
    description: "MobileMax offers the flexibility to take ActiveFloor anywhere. This portable solution can be used on tables or floors and easily adjusted to different sizes, making it perfect for versatile learning environments or spaces with multiple functions.",
     img: "/Brand/ActiveFloor/IMG_20210421_125705.webp",
    cta: "Learn more",
  },
];

const ActiveFloorAlternatingSections = () => {
  return (
    <div className={styles.activeAlternativebackground}>
      {sections.map((section, idx) => (
        <div
          key={section.title}
          className={`${styles.row} ${idx % 2 !== 0 ? styles.rowReverse : ""}`}
        >
          {/* Text Content */}
          <div className={styles.textCol}>
            <div className="container">
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <h3 className={styles.sectionSubtitle}>{section.subtitle}</h3>
            <p className={styles.sectionDesc}>{section.description}</p>
            {section.cta && (
              <a href="#" className={styles.ctaButton}>
                {section.cta}
              </a>
            )}
            </div>
          </div>
        
          {/* Image */}
          <div className={styles.imageCol}>
            <img src={section.img} alt={section.title} className={styles.sectionImage} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveFloorAlternatingSections;
