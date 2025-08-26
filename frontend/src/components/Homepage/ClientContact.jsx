import React from "react";
import styles from "./ClientContact.module.css";

export default function ClientContact() {
  return (
    <div className={styles.clientContactSection}>
      <div className="container">
        <div className={styles.clientContactContents}>
        <h2>So why wait?</h2>
        <p>Power Up Your Business with our Solutions and join the ranks of our satisfied clients today.</p>
        </div>
    <div className={styles.contactPage}>
      <div className={styles.panelWrap}>
        <form className={styles.panel} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.rowBetween}>
            <h2 className={styles.title}>
              Full Name <h3 className={styles.req}>(required)</h3>
            </h2>
          </div>

          <div className={styles.grid2}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" className={styles.input} />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" className={styles.input} />
            </div>
          </div>

          <div className={styles.rowBetween}>
            <h2 className={styles.title}>
              Phone <h3 className={styles.req}>(required)</h3>
            </h2>
          </div>

          <div className={styles.gridPhone}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="country">Country</label>
              <div className={styles.selectWrap}>
                <select id="country" className={`${styles.input} ${styles.select}`} defaultValue="uae">
                  <option value="uae">United Arab Emirates</option>
                  <option value="sa">Saudi Arabia</option>
                  <option value="qa">Qatar</option>
                  <option value="kw">Kuwait</option>
                  <option value="om">Oman</option>
                </select>
                <h3 className={styles.chev} aria-hidden>▾</h3>
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="phone">Number</label>
              <input id="phone" type="tel" className={styles.input} placeholder="+971" />
            </div>
          </div>

          <div className={styles.fieldBlock}>
            <div className={styles.rowBetween}>
              <h2 className={styles.title}>
                Email <h3 className={styles.req}>(required)</h3>
              </h2>
            </div>
            <input type="email" className={styles.input} />
          </div>

          <div className={styles.fieldBlock}>
            <label className={styles.title} htmlFor="company">Company Name</label>
            <input id="company" type="text" className={styles.input} />
          </div>

          <div className={styles.fieldBlock}>
            <div className={styles.rowBetween}>
              <h2 className={styles.title}>
                Message <h3 className={styles.req}>(required)</h3>
              </h2>
            </div>
            <textarea className={`${styles.input} ${styles.textarea}`} />
          </div>

          <div className={styles.actions}>
            <button className={styles.sendBtn} type="submit">Send</button>
          </div>
        </form>
      </div>

      <a className={styles.whatsApp} href="#" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden>
          <path d="M.5 31.5l2.6-7.7A14 14 0 1116 30a14 14 0 01-7.1-1.9L.5 31.5z" fill="#25D366"/>
          <circle cx="16" cy="16" r="11" fill="#25D366"/>
          <path d="M12.3 9.6c-.3-.7-.6-.7-.9-.7h-.7c-.3 0-.7.1-1 .5-.3.3-1.3 1.2-1.3 3s1.3 3.5 1.5 3.8c.2.3 2.6 4.1 6.4 5.6 3.2 1.3 3.8 1.1 4.5 1 .7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.1-.3-.2-.7-.4-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.9.2-.3.4-1.1 1.2-1.3 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.4 0-.7-.2-.3-.8-2-1.2-2.8z" fill="#fff"/>
        </svg>
      </a>
      </div>
    </div>
    </div>
  );
}
