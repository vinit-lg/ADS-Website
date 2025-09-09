import React, { useEffect, useState } from "react";
import WeareBanner from "../../components/AboutUs/WeareBanner";
import WeareVideo from "../../components/AboutUs/WeareVideo";
import TrackRecord from "../../components/AboutUs/TrackRecord";

const API_URL = "http://localhost:1337";

// Normalize Strapi media (handles flat objects and nested { data: { attributes } })
const getMediaUrl = (m) => {
  if (!m) return null;
  if (m.url) return `${API_URL}${m.url}`;
  if (m.data?.attributes?.url) return `${API_URL}${m.data.attributes.url}`;
  const f =
    m.formats?.large?.url ||
    m.formats?.medium?.url ||
    m.formats?.small?.url ||
    m.formats?.thumbnail?.url;
  return f ? `${API_URL}${f}` : null;
};

// Unwrap possible Strapi v4/v5 envelopes (data/attributes)
const unwrap = (json) => {
  if (!json) return null;
  if (json.data?.attributes) return { id: json.data.id, ...json.data.attributes };
  return json.data ?? json;
};

const WhoWeAre = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        // Two safe requests (avoid bannerImage[related]!)
        const [sectionsRes, bannerRes] = await Promise.all([
          fetch(
            `${API_URL}/api/who-we-are?populate[sections][populate]=*`,
            { signal: ac.signal }
          ),
          fetch(
            `${API_URL}/api/who-we-are?populate[bannerImage]=true`,
            { signal: ac.signal }
          ),
        ]);

        if (!sectionsRes.ok) {
          throw new Error(`Sections request failed (${sectionsRes.status})`);
        }
        if (!bannerRes.ok) {
          throw new Error(`Banner request failed (${bannerRes.status})`);
        }

        const [sectionsJson, bannerJson] = await Promise.all([
          sectionsRes.json(),
          bannerRes.json(),
        ]);

        const s = unwrap(sectionsJson);
        const b = unwrap(bannerJson);

        // Merge: prefer banner fields from banner call; sections from sections call
        const merged = {
          id: s?.id || b?.id,
          bannerTitle: b?.bannerTitle ?? s?.bannerTitle ?? "",
          bannerSubtitle: b?.bannerSubtitle ?? s?.bannerSubtitle ?? "",
          bannerImage: b?.bannerImage ?? s?.bannerImage ?? null,
          sections: Array.isArray(s?.sections) ? s.sections : [],
        };

        // Debug (optional)
        // console.log("Merged WhoWeAre payload:", merged);

        setData(merged);
      } catch (e) {
        if (e?.name !== "AbortError") {
          console.error("WhoWeAre fetch error:", e);
          setError(e?.message || "Failed to load content");
        }
      }
    })();

    return () => ac.abort();
  }, []);

  if (error) {
    return (
      <div style={{ padding: "1rem", color: "crimson" }}>
        {error}
      </div>
    );
  }

  if (!data) return <p>Loading...</p>;

  const bannerUrl = getMediaUrl(data.bannerImage);

  return (
    <>
      <WeareBanner
        title={data.bannerTitle || ""}
        subtitle={data.bannerSubtitle || ""}
        imageUrl={bannerUrl || ""}
      />

      {data.sections?.map((section, idx) => {
        const key = section.id ?? `${section.__component}-${idx}`;
        switch (section.__component) {
          case "who-we-are.video-section": {
            const videoUrl = getMediaUrl(section.backgroundVideo);
            return (
              <WeareVideo
                key={key}
                title={section.title}
                subtitle={section.subtitle}
                description={section.description}
                videoSrc={videoUrl || ""}
              />
            );
          }
          case "who-we-are.track-record":
            return <TrackRecord key={key} {...section} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default WhoWeAre;
