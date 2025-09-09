import React from "react";
import styles from "./PartnerEnquiry.module.css";

export default function PartnerEnquiry() {
  const hearOptions = ["Google", "Social Media", "Email", "Events", "Others"];

  const onSubmit = (e) => {
    e.preventDefault();
    // handle submit here
  };

  return (
    <section className={styles.wrap}>
      <div className={styles.bgOverlay} />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Partner With Us.</h1>
          <p className={styles.tagline}>
            Join forces with us to skyrocket your business to new heights and boost
            your bottom line.
          </p>
        </header>

        <form className={styles.form} onSubmit={onSubmit}>
          {/* Company Name */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="company" className={styles.label}>
                Company Name <em>(required)</em>
              </label>
            </div>
            <input id="company" name="company" className={styles.input} required />
          </div>

          {/* Country */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="country" className={styles.label}>Country</label>
            </div>
            <input id="country" name="country" className={styles.input} />
          </div>

          {/* Name (first/last) */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label className={styles.label}>
                Name <em>(required)</em>
              </label>
            </div>

            <div className={styles.grid2}>
              <div className={styles.fieldGroup}>
                <label htmlFor="firstName" className={styles.subLabel}>First Name</label>
                <input id="firstName" name="firstName" className={styles.input} required />
              </div>
              <div className={styles.fieldGroup}>
                <label htmlFor="lastName" className={styles.subLabel}>Last Name</label>
                <input id="lastName" name="lastName" className={styles.input} required />
              </div>
            </div>
          </div>

          {/* Designation */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="designation" className={styles.label}>Designation</label>
            </div>
            <input id="designation" name="designation" className={styles.input} />
          </div>

          {/* Email */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="email" className={styles.label}>
                Email <em>(required)</em>
              </label>
            </div>
            <input id="email" name="email" type="email" className={styles.input} required />
          </div>

          {/* Phone */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="phone" className={styles.label}>
                Phone <em>(required)</em>
              </label>
            </div>
            <input id="phone" name="phone" type="tel" className={styles.input} required />
            <p className={styles.helper}>Please Do Mention The Country Code</p>
          </div>

          {/* Website */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="website" className={styles.label}>Website</label>
            </div>
            <input
              id="website"
              name="website"
              placeholder="http://"
              className={styles.input}
            />
          </div>

          {/* Where did you hear about us? */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <h3 className={styles.label}>Where did you hear about us?</h3>
            </div>

            <div className={styles.chips}>
              {hearOptions.map((opt) => {
                const id = `hear-${opt.replace(/\s+/g, "").toLowerCase()}`;
                return (
                  <h5 key={opt} className={styles.chipWrap}>
                    <input type="checkbox" id={id} name="heard[]" className={styles.checkbox} />
                    <label htmlFor={id} className={styles.chip}>{opt}</label>
                  </h5>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="message" className={styles.label}>
                Message <em>(required)</em>
              </label>
            </div>
            <textarea id="message" name="message" className={`${styles.input} ${styles.textarea}`} required />
          </div>

          {/* Submit */}
          <div className={styles.actions}>
            <button type="submit" className={styles.submit}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
