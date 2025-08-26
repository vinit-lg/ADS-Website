import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const MENU = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Brand",
    href: "/brands",
    children: [
      { label: "Avision", href: "/categories/all-categories/brands/avision" },
      { label: "Active Floor", href: "/categories/all-categories/brands/active-floor" },
      { label: "Barco", href: "/categories/all-categories/brands/barco" },
      { label: "Brother", href: "/categories/all-categories/brands/brother" },
      { label: "Circularo", href: "/categories/all-categories/brands/circularo" },
      { label: "Draper", href: "/categories/all-categories/brands/draper" },
      { label: "Epson", href: "/categories/all-categories/brands/epson" },
      { label: "Ergonomic Solutions", href: "/categories/all-categories/brands/ergonomic-solutions" },
      { label: "HP", href: "/categories/all-categories/brands/hp" },
      { label: "Logitech", href: "/categories/all-categories/brands/logitech" },
      { label: "Manico", href: "/categories/all-categories/brands/manico" },
      { label: "Microsoft", href: "/categories/all-categories/brands/microsoft" },
      { label: "PrehKeyTec", href: "/categories/all-categories/brands/prehkeytec" },
      { label: "Prokraya", href: "/categories/all-categories/brands/prokraya" },
      { label: "Promethean", href: "/categories/all-categories/brands/promethean" },
      { label: "SES", href: "/categories/all-categories/brands/ses" },
      { label: "Sony", href: "/categories/all-categories/brands/sony" },
      { label: "Specktron", href: "/categories/all-categories/brands/specktron" },
      { label: "Swivl", href: "/categories/all-categories/brands/swivl" },
      { label: "Toshiba", href: "/categories/all-categories/brands/toshiba" },
      { label: "Vusion", href: "/categories/all-categories/brands/vusion" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Active Classroom Solutions", href: "/solutions/active-classroom-solutions" },
      { label: "Audio Visual Integration", href: "/solutions/audio-visual-integration" },
      { label: "Auto ID Solutions", href: "/solutions/auto-id-solutions" },
      { label: "Home Entertainment Solutions", href: "/solutions/home-entertainment-solutions" },
      { label: "Point of Sale Solution", href: "/solutions/point-of-sale-solution" },
      { label: "Video Conferencing Solutions", href: "/solutions/video-conferencing-solutions" },
      { label: "Professional Display Solutions", href: "/solutions/professional-display-solutions" },
      { label: "Printing Solutions", href: "/solutions/printing-solutions" },
      { label: "Scanning Solutions", href: "/solutions/scanning-solutions" },
      { label: "Labelling Solutions", href: "/solutions/labelling-solutions" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Apple Devices", href: "/categories/all-categories/products/apple-devices" },
      { label: "Collaboration Hub", href: "/categories/all-categories/products/collaboration-hub" },
      { label: "Charging Carts & Cases", href: "/categories/all-categories/products/charging-carts-cases" },
      { label: "Education", href: "/categories/all-categories/products/education" },
      { label: "Labellers", href: "/categories/all-categories/products/labellers" },
      { label: "Point of Sale Product", href: "/categories/all-categories/products/point-of-sale-product" },
      { label: "Printers", href: "/categories/all-categories/products/printers" },
      { label: "Projectors", href: "/categories/all-categories/products/projectors" },
      { label: "Surface Devices", href: "/categories/all-categories/products/surface-devices" },
      { label: "Video Capturing", href: "/categories/all-categories/products/video-capturing" },
      { label: "Video Conferencing", href: "/categories/all-categories/products/video-conferencing" },
    ],
  },
  { label: "Services", href: "/services" },
  {
    label: "Inquiry & Assistance",
    href: "/inquiry",
    children: [
      { label: "Product and Solutions Enquiry", href: "/product-and-solutions-enquiry" },
      { label: "Partner With Us Enquiry", href: "/partner-with-us" },
      { label: "Product Support", href: "/product-support" },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact Us", href: "/contact-us" },
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
  const [openIndex, setOpenIndex] = useState(null); // desktop hover/focus
  const [openMobileIndex, setOpenMobileIndex] = useState(null); // mobile expand
  const navRef = useRef(null);
  useOnClickOutside(navRef, () => {
    setOpenIndex(null);
  });

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="ads-header" ref={navRef}>
      <div className="ads-nav">
        <a className="ads-logo" href="/" aria-label="Almoe Digital Solutions">
          <img src="/images/ALMOE_DIGITAL_SOLUTIONS.webp" alt="Almoe Digital Solutions" />
        </a>

        <button
          className={`ads-burger ${mobileOpen ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`ads-menu ${mobileOpen ? "show" : ""}`} aria-label="Primary">
          <ul className="ads-menu-list">
            {MENU.map((item, idx) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              const isOpen = openIndex === idx;
              const isMobileOpen = openMobileIndex === idx;
              return (
                <li
                  key={item.label}
                  className={`ads-menu-item ${hasChildren ? "has-children" : ""} ${isOpen ? "open" : ""}`}
                  onMouseEnter={() => setOpenIndex(idx)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  <a className="ads-link" href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>

                  {hasChildren && (
                    <>
                      {/* Mobile expand caret */}
                      <button
                        className="ads-caret"
                        aria-label={`Expand ${item.label}`}
                        aria-expanded={isMobileOpen}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenMobileIndex(isMobileOpen ? null : idx);
                        }}
                      />
                      <div className={`ads-dropdown ${mobileOpen ? (isMobileOpen ? "show" : "") : isOpen ? "show" : ""}`}>
                        <ul>
                          {item.children.map((c) => (
                            <li key={c.label}>
                              <a href={c.href} onClick={() => setMobileOpen(false)}>{c.label}</a>
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

          <div className="ads-actions">
            <div className="ads-social">
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/almoe/">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.15V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z"/></svg>
              </a>
              <a aria-label="Instagram" href="https://www.instagram.com/almoe">
                <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.26 2.4.43.6.23 1 .5 1.5.95.45.45.72.9.95 1.5.17.5.37 1.2.43 2.4.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.26 1.9-.43 2.4-.23.6-.5 1-.95 1.5-.45.45-.9.72-1.5.95-.5.17-1.2.37-2.4.43-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.26-2.4-.43-.6-.23-1-.5-1.5-.95-.45-.45-.72-.9-.95-1.5-.17-.5-.37-1.2-.43-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.26-1.9.43-2.4.23-.6.5-1 .95-1.5.45-.45.9-.72 1.5-.95.5-.17 1.2-.37 2.4-.43C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .07 5.7.13 4.8.33 4.1.6c-.8.3-1.5.8-2.2 1.5-.7.7-1.1 1.4-1.5 2.2-.27.7-.47 1.6-.53 2.9C0 8.3 0 8.7 0 12s0 3.7.07 5c.06 1.3.26 2.2.53 2.9.3.8.8 1.5 1.5 2.2.7.7 1.4 1.1 2.2 1.5.7.27 1.6.47 2.9.53 1.3.07 1.7.07 5 .07s3.7 0 5-.07c1.3-.06 2.2-.26 2.9-.53.8-.3 1.5-.8 2.2-1.5.7-.7 1.1-1.4 1.5-2.2.27-.7.47-1.6.53-2.9.07-1.3.07-1.7.07-5s0-3.7-.07-5c-.06-1.3-.26-2.2-.53-2.9-.3-.8-.8-1.5-1.5-2.2-.7-.7-1.4-1.1-2.2-1.5-.7-.27-1.6-.47-2.9-.53C15.7 0 15.3 0 12 0z"/><circle cx="12" cy="12" r="3.2"/><circle cx="17.4" cy="6.6" r="1.2"/></svg>
              </a>
            </div>
             <a className="ads-call" href="tel:+97143912929">Call Us</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
