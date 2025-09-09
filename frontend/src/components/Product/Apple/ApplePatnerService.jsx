import React from "react";
import styles from "./ApplePatnerService.module.css";

// Replace with your actual image
import handshake from "/Products/Apple/partners-handshake.webp";

const rows = [
  { id: 1, label: "Configuration & Deployment", icon: "gear" },
  { id: 2, label: "Leasing Solutions", icon: "keys" },
  { id: 3, label: "Trade-in and Buyback", icon: "handshake" },
  { id: 4, label: "Warranty & Maintenance", icon: "tools" },
];

export default function ApplePatnerService() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT: Image */}
        <div className={styles.media}>
          <img src={handshake} alt="" className={styles.image} />
        </div>

        {/* RIGHT: Text + list */}
        <div className={styles.content}>
          <h2 className={styles.title}>Partner Services</h2>
          <p className={styles.lead}>
            Share your services or specializations here, then list them down as bullet
            points for mobile friendly easy reading
          </p>

          <ul className={styles.list} role="list">
            {rows.map((r) => (
              <li className={styles.item} key={r.id}>
                <h3 className={styles.iconWrap} data-variant={r.icon}>
                  <Icon name={r.icon} />
                </h3>
                <h3 className={styles.itemText}>{r.label}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --- Minimal inline SVGs to mirror the screenshot --- */
function Icon({ name }) {
  const stroke = "currentColor";
  const sw = 2;
  switch (name) {
    case "gear":
      return (
        <svg viewBox="0 0 48 48" className="svg" aria-hidden="true">
          <rect x="6" y="8" width="36" height="26" rx="4" fill="none" stroke={stroke} strokeWidth={sw} />
          <circle cx="18" cy="21" r="6" fill="none" stroke={stroke} strokeWidth={sw} />
          <path d="M18 11v4M18 27v4M8 17h8M8 25h8M22 21h10" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "keys":
      return (
        <svg viewBox="0 0 48 48" className="svg" aria-hidden="true">
          <circle cx="17" cy="17" r="8" fill="none" stroke={stroke} strokeWidth={sw} />
          <path d="M22 22l10 10m0 0h6m-6 0v6" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <circle cx="14" cy="17" r="2" fill="none" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 48 48" className="svg" aria-hidden="true">
          <path d="M6 30h10l6-6m20 6H32l-6-6" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 24l4-4c2-2 6-2 8 0l6 6" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <path d="M16 30l4 4c2 2 5 2 7 0l4-4" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <path d="M10 26l-4-4m36 8l4 4" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case "tools":
      return (
        <svg viewBox="0 0 48 48" className="svg" aria-hidden="true">
          <path d="M20 8l4 4-6 6-4-4M28 16l10 10" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 30l8 8M34 26l-8 8" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
          <circle cx="14" cy="14" r="3" fill="none" stroke={stroke} strokeWidth={sw} />
        </svg>
      );
    default:
      return null;
  }
}
