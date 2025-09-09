import React, { useEffect, useState } from "react";
import SustainabilityBanner from "../components/Sustainability/SustainabilityBanner";
import WeCareAboutYourTomorrow from "../components/Sustainability/WeCareAboutYourTomorrow";
import SustainabilityHighlights from "../components/Sustainability/SustainabilityHighlights";

const API_URL = "http://localhost:1337";

// Media URL resolver (handles nested/flat + absolute URLs + sized formats)
const getMediaUrl = (m) => {
  if (!m) return null;
  const pick = (obj) => {
    if (!obj) return null;
    if (typeof obj === "string") return obj;
    if (obj.url) return obj.url;
    if (obj.data?.attributes?.url) return obj.data.attributes.url;
    return null;
  };
  const sized =
    pick(m.formats?.large) ||
    pick(m.formats?.medium) ||
    pick(m.formats?.small) ||
    pick(m.formats?.thumbnail) ||
    pick(m);
  if (!sized) return null;
  return /^https?:\/\//i.test(sized)
    ? sized
    : `${API_URL}${sized.startsWith("/") ? "" : "/"}${sized}`;
};

// Unwrap Strapi v5 envelope
const unwrap = (json) => {
  if (!json) return null;
  if (json.data?.attributes) return { id: json.data.id, ...json.data.attributes };
  return json.data ?? json;
};

function Sustainability() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        // ✅ Sections: scope populate for both components in the dynamic zone
        const sectionsURL =
          `${API_URL}/api/sustainability` +
          `?populate[sections][on][sustainability.highlights][populate][items][populate]=image` +
          `&populate[sections][on][sustainability.we-care-about-your-tomorrow][populate]=*`;

        const [sectionsRes, bannerRes] = await Promise.all([
          fetch(sectionsURL, { signal: ac.signal }),
          fetch(`${API_URL}/api/sustainability?populate[bannerImage]=true`, { signal: ac.signal }),
        ]);

        if (!sectionsRes.ok) throw new Error(`Sections failed (${sectionsRes.status})`);
        if (!bannerRes.ok) throw new Error(`Banner failed (${bannerRes.status})`);

        const [sectionsJson, bannerJson] = await Promise.all([
          sectionsRes.json(),
          bannerRes.json(),
        ]);

        const s = unwrap(sectionsJson);
        const b = unwrap(bannerJson);

        const merged = {
          id: s?.id || b?.id,
          bannerTitle: b?.bannerTitle ?? s?.bannerTitle ?? "",
          bannerSubtitle: b?.bannerSubtitle ?? s?.bannerSubtitle ?? "",
          bannerImage: b?.bannerImage ?? s?.bannerImage ?? null,
          sections: Array.isArray(s?.sections) ? s.sections : [],
        };

        setData(merged);
      } catch (e) {
        if (e?.name !== "AbortError") {
          console.error("Sustainability fetch error:", e);
          setError(e?.message || "Failed to load Sustainability page");
        }
      }
    })();
    return () => ac.abort();
  }, []);

  if (error) return <div style={{ padding: 16, color: "crimson" }}>{error}</div>;
  if (!data) return <p>Loading...</p>;

  const bannerUrl = getMediaUrl(data.bannerImage);

  return (
    <div>
      <SustainabilityBanner
        title={data.bannerTitle}
        subtitle={data.bannerSubtitle}
        imageUrl={bannerUrl || ""}
      />

      {data.sections?.map((section, idx) => {
        const key = section.id ?? `${section.__component}-${idx}`;
        switch (section.__component) {
          case "sustainability.we-care-about-your-tomorrow":
            return (
              <WeCareAboutYourTomorrow
                key={key}
                heading={section.heading}
                paragraph={section.paragraph}
              />
            );

          case "sustainability.highlights":
            return (
              <SustainabilityHighlights
                key={key}
                items={section.items || []} // [{ id, heading, text, image }]
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

export default Sustainability;
