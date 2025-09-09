import React from "react";
import styles from "./ClassroomContent.module.css";

/**
 * Props
 * - intro: string
 * - heading: string
 * - items: string[]
 * - className?: string
 * - id?: string
 */
export default function ClassroomContent({
  intro = `Welcome to Almoe Digital Solutions, where we specialize in creating active classroom solutions for a variety of industries, including Education, Government, Healthcare, and Military. Our customizable solutions are perfect for training sessions, presentations, and classroom studies.`,
  heading = "Our active classroom solutions include:",
  items = [
    "Interactive Panels",
    "Interactive Whiteboards, Projection systems & classroom devices",
    "Interactive Software and Applications",
    "Classroom Management Software",
  ],
  className = "",
  id,
}) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {/* decor */}
      <div className={styles.bubbleTopRight} />
      <div className={styles.bubbleBottomRight} />

      <div className={styles.container}>
        <p className={styles.intro}>{intro}</p>

        {heading && <h3 className={styles.heading}>{heading}</h3>}

        <ul className={styles.list}>
          {items.map((text, i) => (
            <li key={i} className={styles.item}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
