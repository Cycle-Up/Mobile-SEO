#!/usr/bin/env node
/**
 * Sync-gate voor public/llms-full.txt.
 * Run: node scripts/check-llms-full.mjs
 *
 * llms-full.txt wordt gegenereerd door scripts/generate-llms-full.mjs. Deze gate
 * faalt (exit 1) als het bestand niet in sync is met de content: elke statische
 * cluster-/kernroute (uit app/sitemap.ts) en elk kennisbank-artikel moet als
 * canonieke URL in llms-full.txt voorkomen. Oplossing bij falen: regenereren.
 *
 * Pure helper (computeMissing) is exporteerbaar voor tests.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { extractSitemapPaths } from './check-sitemap.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BASE = 'https://waterfilterplatform.nl';
const LLMS_FULL = path.join(ROOT, 'public', 'llms-full.txt');
const SITEMAP = path.join(ROOT, 'app', 'sitemap.ts');
const CONTENT_DIR = path.join(ROOT, 'content', 'kennisbank');

/** @returns {string[]} vereiste URL's die ontbreken in de tekst. */
export function computeMissing(text, requiredUrls) {
  return requiredUrls.filter(u => !text.includes(u));
}

export function requiredUrls(sitemapPaths, slugs) {
  const urls = [];
  for (const p of sitemapPaths) {
    if (p === '/') continue;
    urls.push(`${BASE}${p}`);
  }
  for (const s of slugs) urls.push(`${BASE}/kennisbank/${s}`);
  return urls;
}

function runCli() {
  const text = fs.readFileSync(LLMS_FULL, 'utf-8');
  const sitemapPaths = extractSitemapPaths(fs.readFileSync(SITEMAP, 'utf-8'));
  const slugs = fs.existsSync(CONTENT_DIR)
    ? fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx') && !f.startsWith('_')).map(f => f.replace(/\.mdx$/, ''))
    : [];
  const required = requiredUrls(sitemapPaths, slugs);
  const missing = computeMissing(text, required);

  console.log('\n🤖 llms-full.txt sync-check - WaterfilterPlatform\n');
  console.log(`Vereiste URL's: ${required.length} (routes ${sitemapPaths.size - 1} + kennisbank ${slugs.length})`);

  if (missing.length === 0) {
    console.log('\n✅ llms-full.txt is in sync met de content.\n');
    return;
  }
  console.log(`\n❌ ${missing.length} URL('s) ontbreken in llms-full.txt. Draai: node scripts/generate-llms-full.mjs\n`);
  for (const m of missing.slice(0, 25)) console.log(`  ${m}`);
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
