// ActiveFloorContact.jsx
import React, { useState } from "react";
import Select, { components } from "react-select";
import { HiChevronDown } from "react-icons/hi";
import styles from "./ActiveFloorContact.module.css";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// small country list (expand as needed)
const countries = [
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "India", code: "+91" },
  { name: "Qatar", code: "+974" },
];

const countryOptions = countries.map((c) => ({
  value: c.name,
  label: c.name,
  code: c.code,
}));

// custom dropdown indicator using react-icons (centered)
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <HiChevronDown size={18} />
    </components.DropdownIndicator>
  );
};

const ActiveFloorContact = ({ onSubmit }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "United Arab Emirates",
    phone: "+971",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (k) => (ev) => {
    const val = ev?.target ? ev.target.value : ev;
    setForm((s) => ({ ...s, [k]: val }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const handleCountryChange = (selected) => {
    if (!selected) return;
    setForm((prev) => ({
      ...prev,
      country: selected.value,
      phone: selected.code || prev.phone,
    }));
    setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const submitToStrapi = async (payload) => {
    const res = await fetch(`${STRAPI_URL}/api/contact-messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: payload }),
    });
    if (!res.ok) {
      throw new Error(`Failed with status ${res.status}`);
    }
    return res.json();
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setSending(true);
    try {
      if (onSubmit) {
        await onSubmit(form);
      } else {
        await submitToStrapi(form);
      }

      setSent(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        country: "United Arab Emirates",
        phone: "+971",
        message: "",
      });
      setErrors({});
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error("Submit failed:", err);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={styles.hero} aria-labelledby="af-contact-heading">
      <div className="container">
        <div className={styles.overlay} />
        <div className={styles.inner}>
          <h2 id="af-contact-heading" className={styles.title}>
            Explore the possibilities of ActiveFloor’s interactive solutions and bring a new level of engagement to your space! Contact us today!
          </h2>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.label}>Name</label>
            <div className={styles.row}>
              <div className={styles.col}>
                <input
                  className={`${styles.input} ${errors.firstName ? styles.invalid : ""}`}
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange("firstName")}
                  aria-invalid={!!errors.firstName}
                />
                {errors.firstName && <div className={styles.fieldError}>{errors.firstName}</div>}
              </div>

              <div className={styles.col}>
                <input
                  className={styles.input}
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange("lastName")}
                />
              </div>
            </div>

            <label className={styles.label}>
              Email <span className={styles.muted}>(required)</span>
            </label>
            <input
              className={`${styles.input} ${errors.email ? styles.invalid : ""}`}
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange("email")}
              type="email"
              aria-invalid={!!errors.email}
            />
            {errors.email && <div className={styles.fieldError}>{errors.email}</div>}

            <label className={styles.label}>
              Phone <span className={styles.muted}>(required)</span>
            </label>
            <div className={styles.row}>
              <div className={styles.colCountry}>
                <Select
                  options={countryOptions}
                  value={countryOptions.find((opt) => opt.value === form.country)}
                  onChange={handleCountryChange}
                  classNamePrefix="countrySelect"
                  className={styles.countrySelect} // wrapper class (module-scoped)
                  components={{ DropdownIndicator }}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderRadius: 28,
                      minHeight: 56,
                      boxShadow: "inset 0 -10px 30px rgba(0,0,0,0.6)",
                      border: "none",
                      paddingLeft: 12,
                      background: "rgba(2, 8, 23, 0.95)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                    }),
                    valueContainer: (base) => ({ ...base, padding: "0 8px" }),
                    singleValue: (base) => ({ ...base, margin: 0, color: "#fff" }),
                    indicatorsContainer: (base) => ({
                      ...base,
                      alignItems: "center",
                      paddingRight: 8,
                    }),
                    dropdownIndicator: (base) => ({
                      ...base,
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                    }),
                    indicatorSeparator: () => ({ display: "none" }),
                    menu: (base) => ({ ...base, zIndex: 9999, borderRadius: 12, overflow: "hidden" }),
                    option: (base, state) => ({
                      ...base,
                      padding: "10px 12px",
                      background: state.isFocused ? "#0b1224" : "#fff",
                      color: state.isFocused ? "#fff" : "#000",
                    }),
                  }}
                />
              </div>
              <div className={styles.col}>
                <input
                  className={`${styles.input} ${errors.phone ? styles.invalid : ""}`}
                  placeholder="+971 5xx xxx xxxx"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <div className={styles.fieldError}>{errors.phone}</div>}
              </div>
            </div>

            <label className={styles.label}>
              Message <span className={styles.muted}>(required)</span>
            </label>
            <textarea
              className={`${styles.textarea} ${errors.message ? styles.invalid : ""}`}
              rows={5}
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message && <div className={styles.fieldError}>{errors.message}</div>}

            <div className={styles.submitRow}>
              <button className='btnOrange' type="submit" disabled={sending}>
                {sending ? "Sending…" : sent ? "Sent" : "Send"}
              </button>
            </div>

            {Object.keys(errors).length > 0 && (
              <div className={styles.errorSummary} role="alert">
                Please fix the highlighted fields.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ActiveFloorContact;
