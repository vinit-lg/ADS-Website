// Point this to your Strapi server
export const API = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export function mediaUrl(m) {
  if (!m) return "";
  const url = m.url || "";
  return url.startsWith("http") ? url : `${API}${url}`;
}

export async function getCareerBanner() {
  const res = await fetch(
    `${API}/api/careers-page?populate[banner][populate]=background&publicationState=preview`
  );
  if (!res.ok) {
    const msg = await res.text().catch(() => res.statusText);
    throw new Error(`Failed to load Career Banner: ${res.status} ${msg}`);
  }
  const json = await res.json();

  return json?.data?.banner || null;
}


export async function getCareerThinkSections() {
  const res = await fetch(
    `${API}/api/careers-page?populate[thinkSections][populate]=image&publicationState=preview`
  );
  if (!res.ok) {
    const msg = await res.text().catch(() => res.statusText);
    throw new Error(`Failed to load Careers Think Sections: ${res.status} ${msg}`);
  }
  const json = await res.json();
  return json?.data?.thinkSections || [];
}

