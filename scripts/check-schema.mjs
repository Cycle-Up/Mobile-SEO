#!/usr/bin/env node
/**
 * JSON-LD schema-validatiegate (item 20). Run NA de build:
 *   node scripts/check-schema.mjs
 *
 * Parseert alle <script type="application/ld+json"> in .next/server/app/**.html
 * en controleert per @type een set minimale verplichte velden. Zo blijft de
 * structured data die AI-systemen uitlezen volledig en consistent.
 *
 * Pure helper validateSchemaObject is exporteerbaar voor tests.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.join(__dirname, '..', '.next', 'server', 'app');

// Minimale verplichte velden per @type (alleen types die wij uitsturen).
export const REQUIRED_FIELDS = {
  Article: ['headline', 'datePublished', 'author', 'publisher', 'inLanguage', 'mainEntityOfPage'],
  FAQPage: ['mainEntity'],
  BreadcrumbList: ['itemListElement'],
  Organization: ['name', 'url'],
  WebSite: ['name', 'url'],
  HowTo: ['name', 'step'],
  DefinedTermSet: ['name', 'hasDefinedTerm'],
  QAPage: ['mainEntity'],
};

/**
 * @param {object} obj - een geparset JSON-LD object
 * @returns {string[]} ontbrekende-veld-meldingen (leeg = ok of onbekend type)
 */
export function validateSchemaObject(obj) {
  if (!obj || typeof obj !== 'object') return ['niet-object JSON-LD'];
  const type = obj['@type'];
  const req = REQUIRED_FIELDS[type];
  if (!req) return [];
  const missing = req.filter(f => obj[f] === undefined || obj[f] === null || obj[f] === '');
  return missing.map(f => `${type}: ontbrekend veld "${f}"`);
}

function extractJsonLd(html) {
  const out = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    try { out.push(JSON.parse(m[1])); } catch { out.push({ __parseError: true }); }
  }
  return out;
}

function walkHtml(dir, acc) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkHtml(p, acc);
    else if (e.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

function runCli() {
  if (!fs.existsSync(APP_DIR)) {
    console.error('Geen build gevonden (.next/server/app). Draai eerst: npm run build');
    process.exit(1);
  }
  const files = walkHtml(APP_DIR, []);
  let checked = 0, parseErrors = 0;
  const issues = [];
  for (const f of files) {
    const html = fs.readFileSync(f, 'utf-8');
    for (const obj of extractJsonLd(html)) {
      checked++;
      if (obj.__parseError) { parseErrors++; issues.push(`${path.relative(APP_DIR, f)}: ongeldige JSON-LD`); continue; }
      for (const msg of validateSchemaObject(obj)) issues.push(`${path.relative(APP_DIR, f)}: ${msg}`);
    }
  }

  console.log('\n🧩 JSON-LD schema-validatie - WaterfilterPlatform\n');
  console.log(`HTML-bestanden: ${files.length} | JSON-LD blokken: ${checked} | parse-fouten: ${parseErrors}`);
  if (issues.length === 0) {
    console.log('\n✅ Alle JSON-LD valideert (verplichte velden aanwezig).\n');
    return;
  }
  const uniq = [...new Set(issues)];
  console.log(`\n❌ ${uniq.length} schema-probleem(en) (eerste 30):\n`);
  for (const i of uniq.slice(0, 30)) console.log(`  ${i}`);
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
