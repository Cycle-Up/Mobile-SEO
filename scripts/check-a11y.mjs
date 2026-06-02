#!/usr/bin/env node
/**
 * Post-build a11y/structuur-gate (items 16 + 18). Run NA de build:
 *   node scripts/check-a11y.mjs
 *
 * - Elke content-pagina heeft een BreadcrumbList-JSON-LD (breadkruimels helpen
 *   AI en gebruikers de plek in de sitestructuur te begrijpen).
 * - Geen enkele <img> zonder alt-attribuut (betekenisvolle alt-teksten).
 *
 * Fout-/systeempagina's en niet-HTML-metadata-routes zijn uitgezonderd.
 * Pure helper auditPageHtml is exporteerbaar voor tests.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.join(__dirname, '..', '.next', 'server', 'app');

// Pagina's die geen breadcrumb hoeven (home + fout-/systeempagina's).
const NO_BREADCRUMB_OK = new Set(['index.html', '_not-found.html', '_global-error.html']);

/**
 * @param {string} relPath - pad t.o.v. app-dir (bv. "kennisbank/pfas.html")
 * @param {string} html
 * @returns {string[]} problemen
 */
export function auditPageHtml(relPath, html) {
  const issues = [];
  if (!NO_BREADCRUMB_OK.has(relPath) && !html.includes('"BreadcrumbList"')) {
    issues.push(`${relPath}: geen BreadcrumbList`);
  }
  const imgs = html.match(/<img\b[^>]*>/g) || [];
  for (const img of imgs) {
    if (!/\salt=/.test(img)) issues.push(`${relPath}: <img> zonder alt`);
  }
  return issues;
}

function walk(dir, base, acc) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, base, acc);
    else if (e.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

function isExcluded(rel) {
  return /(^|\/)(sitemap|icon|apple-icon|opengraph-image|twitter-image|manifest)/.test(rel)
    || rel.endsWith('.xml.html');
}

function runCli() {
  if (!fs.existsSync(APP_DIR)) {
    console.error('Geen build gevonden (.next/server/app). Draai eerst: npm run build');
    process.exit(1);
  }
  const files = walk(APP_DIR, APP_DIR, []);
  const issues = [];
  let checked = 0;
  for (const f of files) {
    const rel = path.relative(APP_DIR, f);
    if (isExcluded(rel)) continue;
    checked++;
    issues.push(...auditPageHtml(rel, fs.readFileSync(f, 'utf-8')));
  }

  console.log('\n♿ A11y/structuur-gate - WaterfilterPlatform\n');
  console.log(`Gecontroleerde pagina's: ${checked}`);
  if (issues.length === 0) {
    console.log('\n✅ Alle pagina\'s hebben breadcrumbs; geen img zonder alt.\n');
    return;
  }
  const uniq = [...new Set(issues)];
  console.log(`\n❌ ${uniq.length} probleem(en) (eerste 30):\n`);
  for (const i of uniq.slice(0, 30)) console.log(`  ${i}`);
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
