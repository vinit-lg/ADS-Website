import React, { useRef, useState, useEffect } from "react";
import Select from "react-select";
import styles from "./ClientContact.module.css";
import { MdPauseCircleFilled, MdOutlinePlayCircleFilled } from "react-icons/md";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// ✅ Country list
const countries = [
  { name: "Afghanistan", code: "+93" },
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "United Arab Emirates", code: "+971" }, // ✅ Default
  { name: "Qatar", code: "+974" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Oman", code: "+968" },
  { name: "Kuwait", code: "+965" },
  { name: "Bahrain", code: "+973" },
  { name: "Nepal", code: "+977" },
  { name: "Pakistan", code: "+92" },
  { name: "Singapore", code: "+65" },
  { name: "Malaysia", code: "+60" },
  { name: "South Africa", code: "+27" },
  { name: "Australia", code: "+61" },
  { name: "Canada", code: "+1" },
  { name: "France", code: "+33" },
  { name: "Germany", code: "+49" },
  { name: "Turkey", code: "+90" },
];

// ✅ Options for react-select (only country name in UI)
const countryOptions = countries.map((c) => ({
  value: c.name,
  label: c.name,
  code: c.code,
}));

const ClientContact = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // ✅ State for Strapi content
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "United Arab Emirates",
    phone: "+971",
    email: "",
    companyName: "",
    message: "",
  });

  // Fetch clientContact section from Strapi
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${STRAPI_URL}/api/homepage?populate[clientContact][populate]=*`
        );
        const json = await res.json();
        setContent(json?.data?.clientContact || null);
      } catch (err) {
        console.error("Error fetching ClientContact:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Play / Pause video
  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle country change → set code in phone
  const handleCountryChange = (selected) => {
    setForm((prev) => ({
      ...prev,
      country: selected.value,
      phone: selected.code, // ✅ auto-fill phone code
    }));
  };

  // Submit form → Strapi
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${STRAPI_URL}/api/contact-messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: form }),
      });

      if (!res.ok) throw new Error(`Failed with status ${res.status}`);

      const json = await res.json();
      console.log("Form submitted:", json);
      alert("✅ Your message has been sent!");

      // Reset form
      setForm({
        firstName: "",
        lastName: "",
        country: "United Arab Emirates",
        phone: "+971",
        email: "",
        companyName: "",
        message: "",
      });
    } catch (err) {
      console.error("Form submit failed:", err);
      alert("❌ Failed to send message. Please try again.");
    }
  };

  if (loading) return null;

  const bgVideoUrl = content?.backgroundVideo
    ? `${STRAPI_URL}${content.backgroundVideo.url}`
    : "";

  return (
    <section className={styles.contactSection}>
      {/* ✅ Background Video */}
      {bgVideoUrl && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgVideo}
        >
          <source src={bgVideoUrl} type="video/mp4" />
        </video>
      )}

      {/* ✅ Overlay Content */}
      <div className={styles.overlay}>
        <div className={styles.header}>
          <h2 className={styles.title}>{content?.heading}</h2>
          <p className={styles.subtitle}>{content?.subtitle}</p>
        </div>

        {/* ✅ Contact Form */}
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Full Name */}
            <label className={styles.label}>
              Full Name <span>(required)</span>
            </label>
            <div className={styles.nameRow}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <label className={styles.label}>
              Phone <span>(required)</span>
            </label>
            <div className={styles.phoneRow}>
              <div style={{ flex: 1 }}>
                <Select
                  options={countryOptions}
                  value={countryOptions.find(
                    (opt) => opt.value === form.country
                  )}
                  onChange={handleCountryChange}
                  className="countrySelect"
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderRadius: "20px",
                      borderColor: "#ccc",
                      minHeight: "42px",
                      background: "#fff",
                      fontSize: "0.95rem",
                      boxShadow: "none",
                    }),
                    menu: (base) => ({
                      ...base,
                      borderRadius: "10px",
                      marginTop: "5px",
                      zIndex: 9999,
                    }),
                    option: (base, state) => ({
                      ...base,
                      padding: "10px 15px",
                      fontSize: "0.9rem",
                      backgroundColor: state.isFocused
                        ? "#f5f5f5"
                        : "#fff",
                      color: "#000",
                      cursor: "pointer",
                    }),
                  }}
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                style={{ flex: 1 }}
              />
            </div>

            {/* Email */}
            <label className={styles.label}>
              Email <span>(required)</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            {/* Company Name */}
            <label className={styles.label}>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter company name"
              value={form.companyName}
              onChange={handleChange}
            />

            {/* Message */}
            <label className={styles.label}>
              Message <span>(required)</span>
            </label>
            <textarea
              name="message"
              placeholder="Your message here..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Submit */}
            <div className={styles.clientButton}>
              <button type="submit" className="btnOrange">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ Play / Pause Button */}
      <button className={styles.playPause} onClick={toggleVideo}>
        {isPlaying ? <MdPauseCircleFilled /> : <MdOutlinePlayCircleFilled />}
      </button>
    </section>
  );
};

export default ClientContact;
