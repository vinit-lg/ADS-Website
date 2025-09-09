// src/pages/Careers.jsx
import React, { useEffect, useState } from "react";
import CareerBanner from "../components/Careers/CareerBanner";
import CareerThink from "../components/Careers/CareerThink";
import CareerContact from "../components/Careers/CareerContact";
import { API } from "../lib/strapi";

const mediaUrl = (m) => (m?.url?.startsWith("http") ? m.url : (m?.url ? `${API}${m.url}` : ""));

export default function Careers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const url =
        `${API}/api/careers-page` +
        `?publicationState=preview` +
        `&populate[banner][populate][background]=true` +
        `&populate[thinkSections][populate][image]=true` +
        `&populate[contact][populate][video]=true` +
        `&populate[contact][populate][poster]=true` +
        `&populate[contact][populate][countries]=true` +
        `&populate[contact][populate][locations]=true` +
        `&populate[contact][populate][employmentStatuses]=true` +
        `&populate[contact][populate][jobFields]=true`;

      const res = await fetch(url);
      const json = await res.json();
      setData(json.data || null); // Strapi v5 flattened
    })();
  }, []);

  if (!data) return <div style={{ padding: 24 }}>Loading…</div>;

  const banner = data.banner;
  const thinks = data.thinkSections || [];
  const contact = data.contact;

  return (
    <>
      {banner && (
        <CareerBanner
          backgroundImage={mediaUrl(banner.background)}
          rotatingWords={banner.headingWords || ["Build", "Growth", "Career"]}
          companyName={banner.companyName || "Almoe Digital Solutions"}
          cycleDelayMs={banner.cycleDelayMs ?? 2000}
          typeSpeedMs={banner.typeSpeedMs ?? 120}
          deleteSpeedMs={banner.deleteSpeedMs ?? 80}
        />
      )}

      {thinks.map((sec) => (
        <CareerThink
          key={sec.id}
          title={sec.title || ""}
          description={sec.description || ""}
          subText={sec.subText || ""}
          image={mediaUrl(sec.image)}
          reverse={!!sec.reverse}
        />
      ))}

      {contact && (
  <CareerContact
    videoSrc={mediaUrl(contact.video)}
    poster={mediaUrl(contact.poster)}
    countries={(contact.countries || []).map(c => ({ label: c.label, dialCode: c.dialCode }))}
    locations={(contact.locations || []).map(o => o.label)}
    employmentStatuses={(contact.employmentStatuses || []).map(o => o.label)}
    jobFields={(contact.jobFields || []).map(o => o.label)}
    onSubmit={async (formElData) => {
      // Build Strapi multipart FormData
      const payload = new FormData();
      const cv = formElData.get("cv");
      if (cv) payload.append("files.cv", cv);

      const fields = [
        "firstName","lastName","email","country","phone",
        "location","employmentStatus","fieldOfJob","post","experience"
      ];
      fields.forEach((k) => payload.append(`data[${k}]`, formElData.get(k) || ""));

      const res = await fetch(`${API}/api/careers/apply`, { method: "POST", body: payload });
      if (!res.ok) {
        const msg = await res.text().catch(() => "");
        throw new Error(`Submit failed ${res.status}: ${msg}`);
      }
      // success: show toast / clear form
      alert("Application submitted. Thank you!");
    }}
  />
)}
    </>
  );
}
