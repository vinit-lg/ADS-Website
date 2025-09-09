import React, { useEffect, useState } from "react";
import styles from "./ActiveFloorBanner.module.css";

const STRAPI_URL =  import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export default function BrandBanner({ slug = "brand" }) {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchBrand = async () => {
      setLoading(true);
      setErr(null);

      try {
        const url = `${STRAPI_URL}/api/brands?filters[slug][$eq]=${encodeURIComponent(
          slug
        )}&populate[banner][populate]=backgroundVideo`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
    

        const item = json.data?.[0] ?? json.data; 
       
        const brandObj = item?.attributes ? item.attributes : item;
        let b = brandObj?.banner ?? null;

        if (!b) {
          if (json.data && Array.isArray(json.data) && json.data.length === 1) {
        
            b = json.data[0].attributes?.banner ?? null;
          }
        }

        if (mounted) {
          setBanner(b ?? null);
        }
      } catch (e) {
        console.error("Brand banner fetch error:", e);
        if (mounted) setErr(e.message || "Fetch error");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchBrand();
    return () => {
      mounted = false;
    };
  }, [slug]);

  if (loading) return <div>Loading banner...</div>;
  if (err) return <div>Error: {err}</div>;
  if (!banner) return <div>Banner not found for slug "{slug}"</div>;

  let videoPath =
    banner?.backgroundVideo?.data?.attributes?.url ??
    banner?.backgroundVideo?.url ??
    banner?.backgroundVideo?.data?.url ??
    null;

  // build absolute URL
  const videoUrl =
    videoPath && (videoPath.startsWith("http") || videoPath.startsWith("//"))
      ? videoPath
      : videoPath
      ? `${STRAPI_URL}${videoPath}`
      : null;

  const title = banner?.title ?? "Brand";
  const subtitle = banner?.subtitle ?? "";

  return (
    <section className={styles.activefloorBanner}>
      {videoUrl ? (
        <video
          className={styles.backgroundVideo}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : null}

      <div className="container">
        <div className={styles.activefloorBannerContent}>
          <h1 className={styles.activefloorBannerTitle}>{title}</h1>
          <p className={styles.activefloorBannerSubtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
