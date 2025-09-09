import React from "react";
import styles from "./CircularoIntegeration.module.css";

export default function CircularoIntegeration({
  imageSrc = "/Brand/Circularo/integration.webp",
  imageAlt = "integration list mockup"
}) {
  return (
    <section className={styles.section} aria-label="Integrate Circularo">
      <div className={styles.inner}>
        {/* Top two-column row */}
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <h2 className={styles.title}>Integrate Circularo with Ease</h2>
            <p className={styles.lead}>
              Integrate with your favorite tools like Microsoft, Google, and Dropbox.
              Circularo's REST API enables custom integrations, ensuring your workflows remain
              uninterrupted.
            </p>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.imageCard}>
              <img src={imageSrc} alt={imageAlt} className={styles.sideImage} />
            </div>
          </div>
        </div>

        {/* Secure & Trusted section (full width under the row) */}
        <div className={styles.secureSection}>
          <h3 className={styles.secureTitle}>Secure & Trusted Digital Signatures</h3>

          <p className={styles.securePara}>
            Circularo ensures that your digital signatures are secure, legally binding,
            and verifiable across a wide range of regions and industries. By supporting
            national digital identity systems, Circularo integrates with government-approved
            digital authentication services, ensuring maximum compliance and security when
            signing documents online.
          </p>

          <p className={styles.securePara}>
            Additionally, Circularo is compatible with X.509 standards and PKCS #12 certificates,
            using trusted electronic certificates issued by Accredited Certificate Authorities
            (AATL or EUTL). This guarantees that all digitally signed documents meet international
            legal standards, making them admissible in court and compliant with regional and global regulations.
          </p>

          <p className={styles.securePara}>
            Whether you're conducting business locally or internationally, Circularo ensures that
            your eSigning processes are legally compliant, verifiable, and recognized by trusted
            certification bodies worldwide.
          </p>

          <p className={styles.contactLine}>
            <a href="/contact" className={styles.contactLink}>Contact us</a> for more details!.
          </p>
        </div>
      </div>
    </section>
  );
}
