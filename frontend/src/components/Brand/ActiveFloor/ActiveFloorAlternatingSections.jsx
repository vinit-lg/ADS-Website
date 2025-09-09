import { useEffect, useState } from "react";
import styles from "./ActiveFloorAlternatingSections.module.css";

const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL ||
  process.env.REACT_APP_STRAPI_URL ||
  "http://localhost:1337";

function resolveImageUrl(image) {
  if (!image) return null;


  const maybeDataAttrUrl = image?.data?.attributes?.url || image?.data?.attributes?.formats;
  if (image?.data?.attributes) {
    const attrs = image.data.attributes;

    const formats = attrs.formats || {};
    const order = ["large", "medium", "small", "thumbnail"];
    for (const f of order) {
      if (formats[f]?.url) return prefixUrl(formats[f].url);
    }
    if (attrs.url) return prefixUrl(attrs.url);
  }


  if (image?.attributes) {
    const attrs = image.attributes;
    const formats = attrs.formats || {};
    const order = ["large", "medium", "small", "thumbnail"];
    for (const f of order) {
      if (formats[f]?.url) return prefixUrl(formats[f].url);
    }
    if (attrs.url) return prefixUrl(attrs.url);
  }

  if (image?.formats) {
    const formats = image.formats;
    const order = ["large", "medium", "small", "thumbnail"];
    for (const f of order) {
      if (formats[f]?.url) return prefixUrl(formats[f].url);
    }
  }
  if (image?.url) return prefixUrl(image.url);

  return null;
}

function prefixUrl(url) {
  if (!url) return null;

  if (url.startsWith("http://") || url.startsWith("https://")) return url;

  return `${STRAPI_URL.replace(/\/$/, "")}${url.startsWith("/") ? "" : "/"}${url}`;
}

export default function ActiveFloorAlternatingSections({ slug = "brand" }) {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchSections() {
      setLoading(true);
      setError(null);
      try {
        const url = `${STRAPI_URL}/api/brands?filters[slug][$eq]=${encodeURIComponent(
          slug
        )}&populate[alternating_sections][populate]=image`;
        const res = await fetch(url);
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Fetch failed: ${res.status} ${res.statusText} — ${text}`);
        }
        const json = await res.json();
        const brand = json.data?.[0];
        if (!brand) {
          if (isMounted) {
            setSections([]);
            setLoading(false);
          }
          return;
        }

        const rawSections =
          brand.alternating_sections ??
          brand.attributes?.alternating_sections ??
          brand.attributes?.alternatingSections ??
          [];

        const mapped = (rawSections || []).map((s) => {
       
          const imgUrl = resolveImageUrl(s.image ?? s.image);
          return {
            id: s.id ?? s.__uid ?? Math.random().toString(36).slice(2),
            title: (s.title || "").trim(),
            subtitle: s.subtitle || null,
            description: s.description || null,
            cta: s.cta || null,
            img: imgUrl,
            order: typeof s.order === "number" ? s.order : null,
          };
        });

      
        mapped.sort((a, b) => {
          const ao = a.order ?? 0;
          const bo = b.order ?? 0;
          return ao - bo;
        });

        if (isMounted) setSections(mapped);
      } catch (err) {
        console.error("Error loading brand sections:", err);
        if (isMounted) setError(err.message || "Failed to load sections");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchSections();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) return <div className={styles.loader}>Loading sections…</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!sections.length) return <div className={styles.empty}>No sections to display.</div>;

  return (
  <div className={styles.activeAlternativebackground}>
    {sections.map((section, idx) => (
      <div
        key={section.id}
        className={`${styles.row} ${idx % 2 !== 0 ? styles.rowReverse : ""}`}
      >
        {/* Text Content */}
        <div className={styles.textCol}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.subtitle && (
              <h3 className={styles.sectionSubtitle}>{section.subtitle}</h3>
            )}
            <p className={styles.sectionDesc}>{section.description}</p>
            {section.cta && (
              <a href="#" className={`btn ${styles.ctaButton}`}>
                {section.cta}
              </a>
            )}
        </div>
        {/* Image */}
        <div className={styles.imageCol}>
          {section.img ? (
            <img
              src={section.img}
              alt={section.title || "section image"}
              className={styles.sectionImage}
              loading="lazy"
            />
          ) : (
            <div className={styles.placeholderImage}>No image</div>
          )}
        </div>
      </div>
    ))}
  </div>
);
}
