import React, { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css"; 

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export default function Footer() {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${STRAPI_URL}/api/footer?populate=deep`);
        const json = await res.json();
        setFooter(json);
      } catch (err) {
        console.error("Error fetching footer:", err);
      }
    })();
  }, []);

  if (!footer) return null;

  const data = footer;

  const logoUrl = data.logo?.url ? `${STRAPI_URL}${data.logo.url}` : "";
  const bgUrl = data.backgroundImage?.url
    ? `${STRAPI_URL}${data.backgroundImage.url}`
    : "";
  const waveUrl = data.waveImage?.url ? `${STRAPI_URL}${data.waveImage.url}` : "";

  //Map platforms → icons
  const iconMap = {
    linkedin: <FaLinkedin />,
    instagram: <FaInstagram />,
  };

  return (
    <footer
      className={styles.footer}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgUrl}) center/cover no-repeat`,
      }}
    >
      <div className="container">
      <div className={styles.top}>
        {/* Logo */}
        <a className={styles.logo} href="/" aria-label="Almoe Digital Solutions">
          <img src={logoUrl} alt="Almoe Digital Solutions" />
        </a>

        {/* Link columns */}
        <nav className={styles.links} aria-label="Footer">
          <ul className={styles.col}>
            {data.linksCol1?.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ul className={styles.col}>
            {data.linksCol2?.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter */}
        <section className={styles.newsletter} aria-labelledby="nl-title">
          <h3 id="nl-title">{data.newsletterTitle}</h3>
          <p>{data.newsletterDescription}</p>
          <form
            className={styles.newsForm}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Newsletter signup form coming soon!");
            }}
          >
            <label className={styles.srOnly} htmlFor="nl-email">
              Email address
            </label>
            <input
              id="nl-email"
              type="email"
              placeholder="Email Address"
              required
              autoComplete="email"
            />
            <button type="submit">Sign Up</button>
          </form>
        </section>
      </div>

      {/* Wave strip */}
      <div
        className={styles.wave}
        aria-hidden="true"
        style={{ backgroundImage: `url(${waveUrl})` }}
      />

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.social}>
          <h5>Follow Us:</h5>
          {data.socials?.map((social) => (
            <a
              key={social.id}
              aria-label={social.platform}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {iconMap[social.platform.toLowerCase()] || social.platform}
            </a>
          ))}
        </div>

        <div className={styles.legal}>
          <h5>{data.legalText}</h5>
          <a href={data.privacyUrl}>Privacy Policy</a>
        </div>
      </div>
      </div>
    </footer>
  );
}
