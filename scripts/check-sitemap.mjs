#!/usr/bin/env node
/**
 * Sitemap completeness checker for WaterfilterPlatform.
 * Run: node scripts/check-sitemap.mjs
 *
 * Compares the static app routes (literal app page.tsx routes) against the
 * paths emitted by app/sitemap.ts. Dynamic routes (gemeente) and kennisbank
 * MDX are treated as programmatically covered. Reports static routes that are
 * missing from the sitemap. Exits 1 if there are unexplained missing routes.
 *
 * Pure helpers are exported for unit tests; the CLI scan only runs when this
 * file is executed directly.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { buildRouteIndex } from './check-links.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SITEMAP = path.join(ROOT, 'app', 'sitemap.ts');
const CONTENT_DIR = path.join(ROOT, 'content', 'kennisbank');

// Public files / non-page routes that are intentionally not in the sitemap.
const NOT_PAGES = new Set(['/llms.txt', '/llms-full.txt', '/ai.txt', '/robots.txt', '/sitemap.xml']);

// Static routes intentionally excluded from the sitemap (utility/legal pages).
export const SITEMAP_EXCLUDED = new Set([]);

/** Extract literal BASE-relative paths emitted by the sitemap source. */
export function extractSitemapPaths(source) {
  const paths = new Set();
  // `url: BASE` (homepage, no path)
  if (/\burl:\s*BASE\b/.test(source)) paths.add('/');
  // `${BASE}/literal/path` up to the closing quote/backtick; skip any path that
  // contains further interpolation (e.g. gemeente loops with ${g.slug}).
  const re = /\$\{BASE\}([^`'"]*)/g;
  let m;
  while ((m = re.exec(source))) {
    let p = m[1];
    if (p.includes('${')) continue; // dynamic entry, not a literal path
    if (p === '') { paths.add('/'); continue; }
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    paths.add(p);
  }
  return paths;
}

export function computeMissing(appRoutes, covered, excluded = SITEMAP_EXCLUDED) {
  return [...appRoutes].filter(r => !covered.has(r) && !excluded.has(r)).sort();
}

function runCli() {
  const index = buildRouteIndex();
  // Static app routes = literal page routes, minus public/non-page files.
  const appRoutes = new Set([...index.staticRoutes].filter(r => !NOT_PAGES.has(r)));

  const source = fs.readFileSync(SITEMAP, 'utf-8');
  const covered = extractSitemapPaths(source);
  // kennisbank MDX are emitted programmatically.
  covered.add('/kennisbank');
  if (fs.existsSync(CONTENT_DIR)) {
    for (const f of fs.readdirSync(CONTENT_DIR)) {
      if (f.endsWith('.mdx') && !f.startsWith('_')) covered.add('/kennisbank/' + f.replace(/\.mdx$/, ''));
    }
  }

  const missing = computeMissing(appRoutes, covered);

  console.log('\n🗺️  Sitemap completeness check — WaterfilterPlatform\n');
  console.log(`Static app routes: ${appRoutes.size} | sitemap literal paths: ${covered.size}`);

  if (missing.length === 0) {
    console.log('\n✅ Alle statische routes staan in de sitemap.\n');
    return;
  }
  console.log(`\n❌ ${missing.length} statische route(s) ontbreken in de sitemap:\n`);
  for (const r of missing) console.log(`  ${r}`);
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
