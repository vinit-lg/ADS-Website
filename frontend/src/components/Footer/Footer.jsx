import React from "react";
import "./Footer.css";


export default function Footer() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="ads-footer">
      {/* <div className="container"> */}
      <div className="ads-footer-top">
        {/* Brand */}
        <a className="ads-footer-logo" href="/" aria-label="Almoe Digital Solutions">
          <img src="/images/ALMOE_DIGITAL_SOLUTIONS.webp" alt="Almoe Digital Solutions" />
        </a>

        {/* Link columns */}
        <nav className="ads-footer-links" aria-label="Footer">
          <ul className="ads-col">
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/av-brands">AV Brands</a></li>
            <li><a href="/it-brands">IT Brands</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
          <ul className="ads-col">
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/partner-with-us">Partner With Us</a></li>
            <li><a href="/product-enquiry">Product Enquiry</a></li>
            <li><a href="/product-support">Product Support</a></li>
            <li><a href="/sustainability">Sustainability</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <section className="ads-newsletter" aria-labelledby="nl-title">
          <h3 id="nl-title">Join our mailing list</h3>
          <p>Get updates and special offers from us!</p>
          <form className="ads-news-form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="nl-email">Email address</label>
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

      {/* Wave strip (image) */}
      <div className="ads-footer-wave" aria-hidden="true" />

      {/* Bottom bar */}
      <div className="ads-footer-bottom">
        <div className="ads-footer-social">
          <h5>Follow Us:</h5>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/almoe/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.15V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z"/>
            </svg>
          </a>
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/almoe"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.26 2.4.43.6.23 1 .5 1.5.95.45.45.72.9.95 1.5.17.5.37 1.2.43 2.4.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.26 1.9-.43 2.4-.23.6-.5 1-.95 1.5-.45.45-.9.72-1.5.95-.5.17-1.2.37-2.4.43-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.26-2.4-.43-.6-.23-1-.5-1.5-.95-.45-.45-.72-.9-.95-1.5-.17-.5-.37-1.2-.43-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.26-1.9.43-2.4.23-.6.5-1 .95-1.5.45-.45.9-.72 1.5-.95.5-.17 1.2-.37 2.4-.43C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .07 5.7.13 4.8.33 4.1.6c-.8.3-1.5.8-2.2 1.5-.7.7-1.1 1.4-1.5 2.2-.27.7-.47 1.6-.53 2.9C0 8.3 0 8.7 0 12s0 3.7.07 5c.06 1.3.26 2.2.53 2.9.3.8.8 1.5 1.5 2.2.7.7 1.4 1.1 2.2 1.5.7.27 1.6.47 2.9.53 1.3.07 1.7.07 5 .07s3.7 0 5-.07c1.3-.06 2.2-.26 2.9-.53.8-.3 1.5-.8 2.2-1.5.7-.7 1.1-1.4 1.5-2.2.27-.7.47-1.6.53-2.9.07-1.3.07-1.7.07-5s0-3.7-.07-5c-.06-1.3-.26-2.2-.53-2.9-.3-.8-.8-1.5-1.5-2.2-.7-.7-1.4-1.1-2.2-1.5-.7-.27-1.6-.47-2.9-.53C15.7 0 15.3 0 12 0z"/>
              <circle cx="12" cy="12" r="3.2"/><circle cx="17.4" cy="6.6" r="1.2"/>
            </svg>
          </a>
        </div>

        <div className="ads-footer-legal">
          <h5>© Copyrights Reserved to Almoe Digital Solutions.</h5>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}
