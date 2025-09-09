// Usage: STRAPI_URL=http://localhost:1337 STRAPI_API_TOKEN=<token-if-needed> node scripts/seed-brands.js
const axios = require('axios');

const STRAPI = process.env.STRAPI_URL || 'http://localhost:1337';
const TOKEN = process.env.STRAPI_API_TOKEN || '';

const brands = [
  {
    name: 'Avison',
    slug: 'avison',
    description: 'High-performance scanners & imaging solutions',
    heroTitle: 'Discover Avison',
    heroSubtitle: 'Fast, accurate, and affordable imaging',
    heroVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    carousel: [],
    products: [],
    meta: {}
  },
  {
    name: 'ActiveFloor',
    slug: 'activefloor',
    description: 'Interactive floor solutions for engagement',
    heroTitle: 'ActiveFloor',
    heroSubtitle: 'Interactive Floor Solutions for Engaging Learning and Play',
    heroVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    carousel: [],
    products: [],
    meta: {}
  },
  {
    name: 'Barco',
    slug: 'barco',
    description: 'Display & visualization solutions',
    heroTitle: 'Barco Displays',
    heroSubtitle: 'High quality visualization',
    heroVideoUrl: '',
    carousel: [],
    products: [],
    meta: {}
  },
  {
    name: 'Brother',
    slug: 'brother',
    description: 'Printers and office equipment',
    heroTitle: 'Brother Printers',
    heroSubtitle: 'Reliable office devices',
    heroVideoUrl: '',
    carousel: [],
    products: [],
    meta: {}
  }
];

(async () => {
  try {
    const headers = { 'Content-Type': 'application/json' };
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

    for (const b of brands) {
      // check exists by slug
      const found = await axios.get(`${STRAPI}/api/brands`, { params: { 'filters[slug][$eq]': b.slug } }).catch(()=>null);
      if (found && found.data && found.data.data && found.data.data.length > 0) {
        console.log(`Brand ${b.slug} already exists — skipping`);
        continue;
      }
      const res = await axios.post(`${STRAPI}/api/brands`, { data: b }, { headers });
      console.log('Created brand:', res.data.data?.attributes?.slug || res.data);
    }
    console.log('Seed finished');
  } catch (err) {
    console.error('Seed error:', err.response?.data || err.message);
  }
})();
