import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
const abs = (u) => (!u ? "" : u.startsWith("http") ? u : `${STRAPI_URL}${u}`);

function pickImageUrl(file) {
  if (!file) return "";
  const f = file.formats || {};
  const order = [f.large, f.medium, f.small, f.thumbnail].filter(Boolean);
  const chosen = order[0]?.url || file.url || "";
  return abs(chosen);
}

export default function HeroSection() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const url = `${STRAPI_URL}/api/homepage?populate[herosection][populate]=*`;
        const res = await fetch(url);
        const json = await res.json();
        console.log("HeroSection API:", json);

        const hsArr = json?.data?.herosection || [];
        const hs = Array.isArray(hsArr) ? hsArr[0] : null;
        if (!hs) {
          setLoading(false);
          return;
        }

        // Background video
        const bg0 = Array.isArray(hs.heroBackground)
          ? hs.heroBackground[0]
          : hs.heroBackground || null;

        const videoUrl = bg0?.mime?.startsWith("video/") ? abs(bg0.url) : "";

        // Side image
        const img0 = Array.isArray(hs.heroImage)
          ? hs.heroImage[0]
          : hs.heroImage || null;

        const imageUrl = pickImageUrl(img0);

        setHero({
          title: hs.heroTitle || "",
          subtitle: hs.heroSubtitle || "",
          ctaLabel: hs.heroCtaLabel || "",
          ctaUrl: hs.heroCtaUrl || "",
          secondaryCtaLabel: hs.heroSecondaryCtaLabel || "",
          secondaryCtaUrl: hs.heroSecondaryCtaUrl || "",
          videoSrc: videoUrl,
          poster: "/images/hero-poster.jpg",
          sideImg: imageUrl,
        });
      } catch (err) {
        console.error("Hero fetch failed:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <section className={styles.heroSection}>Loading…</section>;
  if (!hero) return null;

  return (
    <section className={styles.heroSection}>
      {/* Background Video */}
      {hero.videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideoBg}
          poster={hero.poster}
        >
          <source key={hero.videoSrc} src={hero.videoSrc} type="video/mp4" />
        </video>
      )}

      <div className={styles.heroOverlay}>
        <div className="container">
          <div className={styles.heroContent}>
            {/* Text */}
            <div className={styles.heroTextContent}>
              <h1 className="h1">{hero.title}</h1>
              <p className="p">{hero.subtitle}</p>

              <div className={styles.heroSectionButton}>
                {hero.ctaLabel && (
                  <a href={hero.ctaUrl || "/contactus"} className="btn">
                    {hero.ctaLabel}
                  </a>
                )}
                {hero.secondaryCtaLabel && (
                  <a
                    href={hero.secondaryCtaUrl || "#"}
                    className="btn"
                    style={{
                      background: "transparent",
                      border: "2px solid #fff",
                      color: "#fff",
                    }}
                  >
                    {hero.secondaryCtaLabel}
                  </a>
                )}
              </div>
            </div>

            {/* Side Image */}
            <div className={styles.heroImageContent}>
              {hero.sideImg && (
                <img key={hero.sideImg} src={hero.sideImg} alt="Hero" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
