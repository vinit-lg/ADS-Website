import React from "react";
import styles from "./AppleContact.module.css";

export default function AppleContact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Contact Us */}
        <h2 className={styles.heading}>Contact Us</h2>

        <div className={styles.info}>
          {/* Address */}
          <div className={styles.row}>
            <span className={styles.icon}>
              <LocationIcon />
            </span>
            <div>
              <p className={styles.company}>
                Almoe Digital Solutions LLC (AV & IT)
              </p>
              <p className={styles.text}>
                Essa Saleh Al Gurg Bldg, 1st Floor, Karama, P.O. Box 14730,
                Dubai, UAE
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className={styles.row}>
            <span className={styles.icon}>
              <PhoneIcon />
            </span>
            <p className={styles.text}>Tel: +971 4 3378118</p>
          </div>

          {/* Email */}
          <div className={styles.row}>
            <span className={styles.icon}>
              <MailIcon />
            </span>
            <p className={styles.text}>info@almoe.com</p>
          </div>
        </div>

        {/* Office Hours */}
        <h3 className={styles.subheading}>Office Hours</h3>
        <p className={styles.days}>Monday – Friday</p>
        <p className={styles.text}>8 a.m. – 5 p.m.</p>

        {/* Social Links */}
        <div className={styles.social}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

/* --- Inline Icons --- */
function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 21c-4.5-6-6-9-6-12a6 6 0 0 1 12 0c0 3-1.5 6-6 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 11a16 16 0 0 0 6 6l1.36-1.25a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16v16H4z" stroke="currentColor" fill="none" />
      <polyline points="4,4 12,13 20,4" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zm.02 4.5H3V21h3V8zM9 8h3v2h.1a3.3 3.3 0 0 1 3-1.7c3.22 0 3.9 2.1 3.9 4.9V21h-3v-6.5c0-1.5-.03-3.5-2.1-3.5s-2.4 1.6-2.4 3.4V21H9V8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zm-5 3c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm4.5-2.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
    </svg>
  );
}
