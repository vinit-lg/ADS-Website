import React from "react";
import styles from "./ProductSupport.module.css";

export default function ProductSupport() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // hook this up to your API as needed
  };

  return (
    <section className={styles.wrap}>
      <div className={styles.rings} />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Product Support.</h1>
          <p className={styles.subtitle}>
            Rest assured, we’re fully committed to providing you with comprehensive
            support for all aspects of the product.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
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

          {/* Name */}
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

          {/* End User/Integrator */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="enduser" className={styles.label}>
                End User/Integrator <em>(required)</em>
              </label>
            </div>
            <input id="enduser" name="enduser" className={styles.input} required />
          </div>

          {/* Brand */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="brand" className={styles.label}>Brand</label>
            </div>
            <input id="brand" name="brand" className={styles.input} />
          </div>

          {/* Product Model Number */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="model" className={styles.label}>
                Product Model Number <em>(required)</em>
              </label>
            </div>
            <input id="model" name="model" className={styles.input} required />
          </div>

          {/* Product Serial Number */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="serial" className={styles.label}>
                Product Serial Number <em>(required)</em>
              </label>
            </div>
            <input id="serial" name="serial" className={styles.input} required />
          </div>

          {/* Invoice Number */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="invoice" className={styles.label}>
                Invoice Number <em>(required)</em>
              </label>
            </div>
            <input id="invoice" name="invoice" className={styles.input} required />
          </div>

          {/* Message */}
          <div className={styles.block}>
            <div className={styles.labelRow}>
              <label htmlFor="message" className={styles.label}>
                Message <em>(required)</em>
              </label>
            </div>
            <textarea
              id="message"
              name="message"
              className={`${styles.input} ${styles.textarea}`}
              required
            />
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
