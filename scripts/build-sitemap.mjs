// Génère sitemap.xml automatiquement depuis projets/data.js
// Usage : node build-sitemap.mjs

import { readFileSync, writeFileSync } from 'fs';

const BASE_URL = 'https://wander-it.be';
const today = new Date().toISOString().split('T')[0];

// Charger data.js (extraction du tableau PROJETS)
const raw = readFileSync('./projets/data.js', 'utf8');
const match = raw.match(/window\.PROJETS\s*=\s*(\[[\s\S]*\]);/);
if (!match) throw new Error('Impossible de lire window.PROJETS dans data.js');
const projets = eval(match[1]);

// Garder uniquement les vrais projets (pas les placeholders)
const vraisProjets = projets.filter(p => !p.imageCard.includes('placehold.co'));

const pages = [
  { loc: '/',                  priority: '1.0' },
  { loc: '/a-propos.html',     priority: '0.8' },
  { loc: '/realisations.html', priority: '0.8' },
  ...vraisProjets.map(p => ({
    loc: `/projets/projet.html?id=${p.id}`,
    priority: '0.7',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `
  <url>
    <loc>${BASE_URL}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}

</urlset>
`;

writeFileSync('./sitemap.xml', xml);
console.log(`✓ sitemap.xml généré — ${pages.length} URLs (${vraisProjets.length} projets)`);
pages.forEach(p => console.log(`  ${BASE_URL}${p.loc}`));
