// src/components/Careers/CareerContact.jsx
import React, { useRef, useState } from "react";
import styles from "./CareerContact.module.css";

export default function CareerContact({
  videoSrc,
  poster,
  countries = [],             // [{label, dialCode}]
  locations = [],             // ["Dubai", ...]
  employmentStatuses = [],    // ["Employed", ...]
  jobFields = [],             // ["AV Integration", ...]
  onSubmit,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else { v.pause(); setIsPlaying(false); }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(new FormData(e.currentTarget));
  };

  return (
    <section className={styles.wrap} aria-label="Careers Contact">
      <video
        ref={videoRef}
        className={styles.bg}
        src={videoSrc}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />

      <button
        type="button"
        className={styles.playPause}
        onClick={togglePlay}
        aria-pressed={!isPlaying}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" className={styles.icon}>
            <rect x="5" y="4" width="4" height="16" rx="1.5" />
            <rect x="15" y="4" width="4" height="16" rx="1.5" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className={styles.icon}>
            <path d="M8 5v14l11-7-11-7z" />
          </svg>
        )}
      </button>

      <div className={styles.cardWrap}>
        <h3 className={styles.heading}>Shape Your Future With Us!</h3>

        <form className={styles.card} onSubmit={handleSubmit}>
          {/* name row */}
          <div className={styles.rowTwo}>
            <div className={styles.field}>
              <label className={styles.label}>First Name (required)</label>
              <input name="firstName" className={styles.input} placeholder="First Name" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Last Name (required)</label>
              <input name="lastName" className={styles.input} placeholder="Last Name" required />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email (required)</label>
            <input name="email" type="email" className={styles.input} placeholder="Email" required />
          </div>

          {/* phone row */}
          <div className={styles.rowTwo}>
            <div className={styles.field}>
              <label className={styles.label}>Mobile/Phone Number (required)</label>
              <div className={styles.phoneRow}>
                <select name="country" className={`${styles.input} ${styles.select}`}>
                  {countries.length
                    ? countries.map((c, i) => (
                        <option key={i} value={c.label}>{c.label}</option>
                      ))
                    : (
                        <>
                          <option>United Arab Emirates</option>
                          <option>Saudi Arabia</option>
                          <option>Qatar</option>
                          <option>Oman</option>
                          <option>Kuwait</option>
                        </>
                      )}
                </select>
                <input
                  name="phone"
                  className={`${styles.input} ${styles.num}`}
                  type="tel"
                  placeholder={countries[0]?.dialCode || "+971"}
                  required
                />
              </div>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Your Location (required)</label>
            <select name="location" className={`${styles.input} ${styles.select}`} required>
              <option value="">Select an option</option>
              {locations.map((l, i) => (
                <option key={i} value={l}>{l}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Current Employment Status (required)</label>
            <select name="employmentStatus" className={`${styles.input} ${styles.select}`} required>
              <option value="">Select an option</option>
              {employmentStatuses.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Field of Job (required)</label>
            <select name="fieldOfJob" className={`${styles.input} ${styles.select}`} required>
              <option value="">Select an option</option>
              {jobFields.map((f, i) => (
                <option key={i} value={f}>{f}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Applying for the Post (required)</label>
            <input name="post" className={styles.input} placeholder="Mention the role (if any)" required />
          </div>

          {/* file upload */}
          <div className={styles.field}>
            <label className={styles.label}>Upload your CV (required)</label>
            <label className={styles.dropzone}>
              <input name="cv" type="file" className={styles.file} required />
              <span className={styles.plus}>+</span>
              <span className={styles.addText}>Add a file</span>
            </label>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Work Experience (required)</label>
            <textarea
              name="experience"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Explain your skills and work experience"
              required
            />
          </div>

          <div className={styles.actions}>
            <button className={styles.submit} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
