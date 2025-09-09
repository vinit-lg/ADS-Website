import React from "react";
import styles from "./SolutionEnquiry.module.css";

export default function SolutionEnquiry() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Get in touch.</h1>
          <p className={styles.subtitle}>Product/Solution Enquiry</p>
        </header>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            // Handle submit here
          }}
        >
          {/* Name */}
          <div className={styles.labelRow}>
            <label className={styles.label}>Name <em>(required)</em></label>
          </div>

          <div className={styles.grid2}>
            <div className={styles.fieldGroup}>
              <label htmlFor="firstName" className={styles.subLabel}>
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder=""
                className={styles.input}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="lastName" className={styles.subLabel}>
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder=""
                className={styles.input}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className={styles.fieldBlock}>
            <div className={styles.labelRow}>
              <label htmlFor="email" className={styles.label}>
                Email <em>(required)</em>
              </label>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              required
            />
          </div>

          {/* Phone */}
          <div className={styles.fieldBlock}>
            <div className={styles.labelRow}>
              <label htmlFor="phone" className={styles.label}>
                Phone <em>(required)</em>
              </label>
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              className={styles.input}
              required
            />
            <p className={styles.helper}>
              Please Do Mention The Country Code
            </p>
          </div>

          {/* Designation */}
          <div className={styles.fieldBlock}>
            <div className={styles.labelRow}>
              <label htmlFor="designation" className={styles.label}>
                Designation
              </label>
            </div>
            <input
              id="designation"
              name="designation"
              type="text"
              className={styles.input}
            />
          </div>

          {/* Company Name */}
          <div className={styles.fieldBlock}>
            <div className={styles.labelRow}>
              <label htmlFor="company" className={styles.label}>
                Company Name <em>(required)</em>
              </label>
            </div>
            <input
              id="company"
              name="company"
              type="text"
              className={styles.input}
              required
            />
          </div>

          {/* Country */}
          <div className={styles.fieldBlock}>
            <div className={styles.labelRow}>
              <label htmlFor="country" className={styles.label}>
                Country
              </label>
            </div>
            <input
              id="country"
              name="country"
              type="text"
              className={styles.input}
            />
          </div>

          {/* Brand */}
          <div className={styles.fieldBlock}>
            <div className={styles.labelRow}>
              <label htmlFor="brand" className={styles.label}>
                Brand
              </label>
            </div>
            <input
              id="brand"
              name="brand"
              type="text"
              className={styles.input}
            />
          </div>

          {/* Product/Solution */}
          <div className={styles.fieldBlock}>
            <div className={styles.labelRow}>
              <label htmlFor="product" className={styles.label}>
                Product/Solution <em>(required)</em>
              </label>
            </div>
            <input
              id="product"
              name="product"
              type="text"
              className={styles.input}
              required
            />
          </div>

          {/* Message */}
          <div className={styles.fieldBlock}>
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

          <div className={styles.actions}>
            <button type="submit" className={styles.submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
