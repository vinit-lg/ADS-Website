import React from 'react';
import styles from './ClickShareConference.module.css';

const ClickShareConference = () => {
  return (
    <section className="container">
      
      <div className={styles.row}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>ClickShare Conference</h2>
          <p>
            ClickShare Conference is a wireless video conferencing solution designed for hybrid meetings. 
            It includes a base unit and a Button that connects to your laptop. Serving as a central hub, ClickShare Conference links your laptop to the room's audio and video equipment. 
            With the ClickShare Button or App, you can start your meeting in under 7 seconds with just one simple click.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src="/Brand/Barco/ClickShare_nextgen_family_right_buttonA-new.webp" 
            alt="ClickShare Conference setup" 
            className={styles.image} 
          />
        </div>
      </div>

      {/* Centered heading */}
      <h3 className={styles.centeredHeading}>
        ClickShare offers wireless video conferencing solutions that enhance hybrid collaboration with ease and efficiency, making meetings seamless and more productive.
      </h3>

      {/* Second row: 50% text content, 50% image */}
      <div className={styles.row}>
        <div className={styles.textContent}>
          <ul>
            <li>Clearly see remote participants and enable more inclusive and balanced collaboration by displaying them on a side screen or dual screen alongside meeting content.</li>
            <li>With Bring Your Own Device (BYOD) functionality, you can easily share content from your laptop, tablet, or smartphone using the ClickShare Mobile App, or via screen mirroring through Airplay, Miracast, or Google Cast.</li>
            <li>ClickShare also enhances interactivity in hybrid meetings, supporting touchscreens for features like annotation and blackboarding, making collaboration more engaging.</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src="/Brand/Barco/Small_Meeting_Room-07.webp" 
            alt="ClickShare Collaboration" 
            className={styles.image} 
          />
        </div>
      </div>
    </section>
  );
};

export default ClickShareConference;
