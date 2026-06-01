#!/usr/bin/env node
/**
 * Genereert public/llms-full.txt: de uitgebreide, citatie-klare LLM-index.
 * Run: node scripts/generate-llms-full.mjs
 *
 * De curated narratieve kop (kernfeiten, FAQ, clusterbeschrijvingen) staat in
 * scripts/llms-full-preamble.md en wordt met de hand onderhouden. Daaronder
 * voegt dit script automatisch de VOLLEDIGE index toe: alle statische
 * cluster-/kernroutes (uit app/sitemap.ts) en alle kennisbank-artikelen
 * (titel/url/datum uit frontmatter). Zo veroudert de index nooit meer.
 *
 * Pure helpers (renderRouteIndex, renderKennisbankIndex, buildLlmsFull) zijn
 * exporteerbaar voor tests; schrijven gebeurt alleen bij directe uitvoering.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { extractSitemapPaths } from './check-sitemap.mjs';
import { parseFrontmatter } from './check-content.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BASE = 'https://waterfilterplatform.nl';
const PREAMBLE = path.join(__dirname, 'llms-full-preamble.md');
const SITEMAP = path.join(ROOT, 'app', 'sitemap.ts');
const CONTENT_DIR = path.join(ROOT, 'content', 'kennisbank');
const OUT = path.join(ROOT, 'public', 'llms-full.txt');

/** Groepeer literal routes per top-level segment en render een index-sectie. */
export function renderRouteIndex(paths) {
  const routes = [...paths].filter(p => p !== '/').sort();
  const groups = new Map();
  for (const r of routes) {
    const top = '/' + r.split('/')[1];
    if (!groups.has(top)) groups.set(top, []);
    groups.get(top).push(r);
  }
  const lines = ['## Volledige paginalijst (clusters en kernroutes)', ''];
  lines.push(`- Home: ${BASE}/`);
  for (const top of [...groups.keys()].sort()) {
    const items = groups.get(top).map(r => `${BASE}${r}`).join(', ');
    lines.push(`- **${top}**: ${items}`);
  }
  return lines.join('\n');
}

/** Render een sectie met alle kennisbank-artikelen (titel, url, datum). */
export function renderKennisbankIndex(articles) {
  const lines = ['## Kennisbank-artikelen (volledige lijst)', ''];
  const sorted = [...articles].sort((a, b) => a.slug.localeCompare(b.slug));
  for (const a of sorted) {
    const date = a.date ? ` (${a.date})` : '';
    const title = a.title || a.slug;
    lines.push(`- [${title}](${BASE}/kennisbank/${a.slug})${date}`);
  }
  lines.push('');
  lines.push(`Totaal: ${sorted.length} kennisbank-artikelen.`);
  return lines.join('\n');
}

const INDEX_FOOTER = [
  '## Index',
  '',
  `- Sitemap: ${BASE}/sitemap.xml`,
  `- Compacte index: ${BASE}/llms.txt`,
  `- AI-beleid: ${BASE}/ai.txt`,
  `- robots.txt: ${BASE}/robots.txt`,
].join('\n');

/** Bouw de volledige llms-full.txt-tekst uit preamble + autogen index. */
export function buildLlmsFull({ preamble, sitemapPaths, articles }) {
  return [
    preamble.trimEnd(),
    '',
    '---',
    '',
    renderRouteIndex(sitemapPaths),
    '',
    renderKennisbankIndex(articles),
    '',
    INDEX_FOOTER,
    '',
  ].join('\n');
}

function loadArticles() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.mdx') && !f.startsWith('_'))
    .map(f => {
      const fm = parseFrontmatter(fs.readFileSync(path.join(CONTENT_DIR, f), 'utf-8'));
      return { slug: f.replace(/\.mdx$/, ''), title: fm.title, date: fm.date };
    });
}

function runCli() {
  const preamble = fs.readFileSync(PREAMBLE, 'utf-8');
  const sitemapPaths = extractSitemapPaths(fs.readFileSync(SITEMAP, 'utf-8'));
  const articles = loadArticles();
  const text = buildLlmsFull({ preamble, sitemapPaths, articles });
  fs.writeFileSync(OUT, text);
  console.log(`llms-full.txt gegenereerd: ${sitemapPaths.size} routes + ${articles.length} kennisbank-artikelen.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
