import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

const FALLBACK_MENU = [
  // { label: "About Us", href: "/about-us" },
  // { label: "Services", href: "/services" },
  // { label: "Contact Us", href: "/contact-us" },
];

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [openMobileIndex, setOpenMobileIndex] = useState(null);

  const [logo, setLogo] = useState("");
  const [menu, setMenu] = useState(FALLBACK_MENU);
  const [socialLinks, setSocialLinks] = useState([]);
  const [callUs, setCallUs] = useState({ label: "Call Us", number: "" });

  const navRef = useRef(null);
  useOnClickOutside(navRef, () => setOpenIndex(null));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/navbar?populate[menu][populate][children]=true&populate[logo]=true&populate[socialLinks]=true`
        );
        const json = await res.json();
        console.log("✅ Navbar API:", json);

        const data = json?.data;
        if (!data) return;

        // ✅ Menu + children
        setMenu(Array.isArray(data.menu) && data.menu.length > 0 ? data.menu : FALLBACK_MENU);

        // ✅ Logo
        const logoUrl =
          data.logo?.url
            ? `${STRAPI_URL}${data.logo.url}`
            : data.logo?.formats?.thumbnail?.url
            ? `${STRAPI_URL}${data.logo.formats.thumbnail.url}`
            : "";
        setLogo(logoUrl);

        // ✅ Social links
        setSocialLinks(Array.isArray(data.socialLinks) ? data.socialLinks : []);

        // ✅ Call Us
        setCallUs({
          label: data.callUsLabel || "Call Us",
          number: data.callUsNumber || "",
        });
      } catch (err) {
        console.error("❌ Navbar fetch error:", err);
        setMenu(FALLBACK_MENU);
      }
    })();
  }, []);

  return (
    <header className={styles.adsHeader} ref={navRef}>
      <div className={`${styles.adsNav} container`}>
        {/* Logo */}
        <a className={styles.adsLogo} href="/" aria-label="Almoe Digital Solutions">
          {logo ? (
            <img src={logo} alt="Almoe Digital Solutions Logo" />
          ) : (
            <span style={{ color: "white" }}>LOGO</span>
          )}
        </a>

        {/* Burger */}
        <button
          className={`${styles.adsBurger} ${mobileOpen ? styles.isOpen : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Menu */}
        <nav className={`${styles.adsMenu} ${mobileOpen ? styles.show : ""}`} aria-label="Primary">
          <ul className={styles.adsMenuList}>
            {menu.map((item, idx) => {
              const children = Array.isArray(item.children) ? item.children : [];
              const hasChildren = children.length > 0;
              const isOpen = openIndex === idx;
              const isMobileOpen = openMobileIndex === idx;

              return (
                <li
                  key={item.id || idx}
                  className={`${styles.adsMenuItem} ${hasChildren ? styles.hasChildren : ""} ${
                    isOpen ? styles.open : ""
                  }`}
                  onMouseEnter={() => setOpenIndex(idx)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  <a className={styles.adsLink} href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>

                  {hasChildren && (
                    <>
                      <button
                        className={styles.adsCaret}
                        aria-label={`Expand ${item.label}`}
                        aria-expanded={isMobileOpen}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenMobileIndex(isMobileOpen ? null : idx);
                        }}
                      />
                      <div
                        className={`${styles.adsDropdown} ${
                          mobileOpen ? (isMobileOpen ? styles.show : "") : isOpen ? styles.show : ""
                        }`}
                      >
                        <ul>
                          {children.map((c) => (
                            <li key={c.id || c.label}>
                              <a href={c.href} onClick={() => setMobileOpen(false)}>
                                {c.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className={styles.adsActions}>
            <div className={styles.adsSocial}>
              {socialLinks.map((s) => (
                <a key={s.id} aria-label={s.platform} href={s.url} target="_blank" rel="noreferrer">
                  {s.platform === "LinkedIn" && <LiaLinkedinIn />}
                  {s.platform === "Instagram" && <FaInstagram />}
                  {!["LinkedIn", "Instagram"].includes(s.platform) && s.platform}
                </a>
              ))}
            </div>
            {callUs.number && (
              <a className='btnOrange' href={`tel:${callUs.number}`}>
                {callUs.label}
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
