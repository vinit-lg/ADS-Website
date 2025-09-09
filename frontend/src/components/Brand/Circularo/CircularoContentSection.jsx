import React from 'react';
import styles from './CircularoContentSection.module.css';

const features = [
  {
    title: 'Signing Made Easy:',
    desc: 'Sign any contract effortlessly without complicated setups or hefty costs.'
  },
  {
    title: 'Streamlined eSigning Workflows:',
    desc: 'Get all signatures in one go, ensuring fast and secure approval processes.'
  },
  {
    title: 'Seamless Document Syncing:',
    desc: 'Integrations with MS Office, Google Drive, and more help sync files effortlessly.'
  },
  {
    title: 'Multi-language Support:',
    desc: 'Fully Arabized user interface with multilingual capabilities for global reach.'
  },
  {
    title: 'Secure Sharing:',
    desc: 'Ensure only intended recipients access your documents with advanced identity verification.'
  },
  {
    title: 'Advanced Customizations:',
    desc: 'Customize every aspect from design to notifications, creating a tailored experience.'
  },
  {
    title: 'Smart Document Management:',
    desc: 'Organize and categorize your files using powerful, built-in management tools.'
  }
];

export default function CircularoContentSection() {
  return (
    <section className={styles.section} aria-label="Why choose Circularo">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.headline}>
            Why choose
            <br />
            <span className={styles.brand}>Circularo?</span>
          </h2>
        </div>

        <div className={styles.right}>
          <ul className={styles.list}>
            {features.map((f, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.check} aria-hidden="true">
                  {/* Simple circular check icon (SVG) */}
                  <svg className={styles.checkSvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="#0b0b0b"/>
                    <path d="M7.5 12.5l2.2 2.2 6.8-6.8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>

                <div className={styles.text}>
                  <span className={styles.title}>{f.title}</span>
                  <span className={styles.desc}>{f.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottomBorder} />
    </section>
  );
}
