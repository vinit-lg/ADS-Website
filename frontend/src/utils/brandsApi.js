import axios from 'axios';
const STRAPI = import.meta.env.VITE_STRAPI_URL || process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337';

export async function fetchBrandBySlug(slug = 'activefloor') {
  const res = await axios.get(`${STRAPI}/api/brands/slug/${encodeURIComponent(slug)}`);
  // Strapi controller returns { data: { id, attributes: {...} } } or our entity
  // If using findBySlug route we made above it returns { data: entity }
  return res.data?.data || null;
}
