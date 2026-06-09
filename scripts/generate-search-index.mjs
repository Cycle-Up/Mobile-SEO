#!/usr/bin/env node
/**
 * Genereert public/search-index.json: een compacte, statische zoekindex over de
 * hele site (alle sitemap-routes + alle kennisbank-artikelen). De index voedt de
 * client-side zoekfunctie op /zoeken.
 *
 * Run: node scripts/generate-search-index.mjs
 *
 * Geen verzonnen data: titels/omschrijvingen komen uit artikel-frontmatter; voor
 * routes zonder frontmatter wordt een leesbare titel uit de slug afgeleid. Pure
 * helpers (humanize, buildSearchIndex) zijn exporteerbaar voor tests.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { extractSitemapPaths } from './check-sitemap.mjs';
import { parseFrontmatter } from './check-content.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SITEMAP = path.join(ROOT, 'app', 'sitemap.ts');
const CONTENT_DIR = path.join(ROOT, 'content', 'kennisbank');
const OUT = path.join(ROOT, 'public', 'search-index.json');

// Bekende acroniemen/notaties die hoofdlettergevoelig moeten blijven.
const ACRONYMS = {
  pfas: 'PFAS', tds: 'TDS', ec: 'EC', ro: 'RO', uv: 'UV', dh: 'dH',
  'nsf-ansi': 'NSF/ANSI', nsf: 'NSF', co2: 'CO2', ph: 'pH', wkk: 'WKK',
  bnb: 'B&B', '4-in-1': '4-in-1', bwt: 'BWT', faq: 'FAQ',
};

/** Maak van een slug-segment een leesbare titel. */
export function humanize(segment) {
  const s = String(segment || '').replace(/\.(json|xml|txt|md|csv)$/i, '');
  if (!s) return '';
  if (ACRONYMS[s.toLowerCase()]) return ACRONYMS[s.toLowerCase()];
  const words = s.split('-').map(w => {
    const lw = w.toLowerCase();
    if (ACRONYMS[lw]) return ACRONYMS[lw];
    return w;
  });
  const joined = words.join(' ');
  return joined.charAt(0).toUpperCase() + joined.slice(1);
}

/** Leesbare categorie uit het top-level-segment. */
function categoryFor(routePath) {
  const top = routePath.split('/')[1] || '';
  return humanize(top) || 'Algemeen';
}

/**
 * Bouw de zoekindex.
 * @param {string[]} paths  sitemap-routes (zonder host)
 * @param {{slug:string,title?:string,description?:string,quickAnswer?:string}[]} articles
 * @returns {{t:string,u:string,d:string,c:string}[]}
 */
export function buildSearchIndex(paths, articles) {
  const bySlug = new Map(articles.map(a => [a.slug, a]));
  const seen = new Set();
  const entries = [];

  // 1) Kennisbank-artikelen: rijke titel + omschrijving.
  for (const a of [...articles].sort((x, y) => x.slug.localeCompare(y.slug))) {
    const u = `/kennisbank/${a.slug}`;
    seen.add(u);
    entries.push({
      t: a.title || humanize(a.slug),
      u,
      d: (a.description || a.quickAnswer || '').slice(0, 180),
      c: 'Kennisbank',
    });
  }

  // 2) Alle overige sitemap-routes.
  for (const p of [...paths].sort()) {
    if (p === '/' || seen.has(p)) continue;
    if (p.startsWith('/kennisbank/')) {
      // al gedekt via frontmatter; sla dubbele over
      const slug = p.replace('/kennisbank/', '');
      if (bySlug.has(slug)) continue;
    }
    seen.add(p);
    const last = p.split('/').filter(Boolean).pop() || '';
    entries.push({ t: humanize(last), u: p, d: '', c: categoryFor(p) });
  }

  return entries;
}

function loadArticles() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, f), 'utf-8');
      const fm = parseFrontmatter(raw);
      return { slug: f.replace(/\.mdx$/, ''), title: fm.title, description: fm.description, quickAnswer: fm.quickAnswer };
    });
}

function main() {
  const sitemapSrc = fs.readFileSync(SITEMAP, 'utf-8');
  const paths = extractSitemapPaths(sitemapSrc);
  const articles = loadArticles();
  const index = buildSearchIndex(paths, articles);
  fs.writeFileSync(OUT, JSON.stringify(index));
  console.log(`search-index.json gegenereerd: ${index.length} items (${articles.length} artikelen + ${index.length - articles.length} routes).`);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main();
}
