import React from "react";
import styles from "./ChargingCartBanner.module.css";

const ChargingCartBanner = () => {
  return (
    <section className={styles.container}>
      {/* Top gradient hero */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Charging Carts &amp; Cases</h1>
      </div>

      {/* Light content area */}
      <div className={styles.content}>
        <button className={styles.cta} type="button">
          Request a Call Back
        </button>

        <p className={styles.tagline}>
          Discover which Charging Cart/Case is right for you with Almoe Digital Solutions
        </p>

        {/* WhatsApp floating button */}
        <a
          href="#"
          aria-label="Chat on WhatsApp"
          className={styles.whatsappFab}
        >
          {/* WhatsApp SVG icon */}
          <svg
            viewBox="0 0 32 32"
            width="22"
            height="22"
            aria-hidden="true"
          >
            <path
              d="M19.11 17.31c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.73.92-.9 1.11-.17.19-.33.22-.61.07-.29-.14-1.2-.44-2.29-1.41-.85-.75-1.41-1.68-1.58-1.96-.16-.29-.02-.45.12-.59.12-.12.29-.31.43-.47.14-.16.19-.26.29-.45.1-.19.05-.36-.02-.51-.07-.14-.64-1.55-.88-2.13-.23-.56-.47-.49-.64-.5-.16-.01-.36-.01-.55-.01-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.04.14.19 2.07 3.17 5.02 4.45.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.11.56-.08 1.69-.69 1.93-1.35.24-.66.24-1.22.17-1.34-.07-.12-.27-.19-.56-.33zM16.02 3C9.83 3 4.8 8.03 4.8 14.22c0 2.4.78 4.63 2.11 6.43L5 29l8.56-2.23c1.73.95 3.71 1.49 5.8 1.49 6.19 0 11.22-5.03 11.22-11.22C30.58 8.03 25.55 3 19.36 3h-3.34zm0 2.4h3.34c4.86 0 8.82 3.96 8.82 8.82 0 4.86-3.96 8.82-8.82 8.82-1.9 0-3.66-.6-5.1-1.62l-.36-.25-5.08 1.33 1.36-4.88-.26-.38c-1.16-1.6-1.85-3.56-1.85-5.62 0-4.86 3.96-8.82 8.82-8.82z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ChargingCartBanner;
