#!/usr/bin/env node
/**
 * Post-build HTML auditor for WaterfilterPlatform.
 * Run: npm run build  (first), then: node scripts/audit-html.mjs
 *
 * Scans the prerendered HTML in .next/server/app and checks, per page:
 *   - exactly 1 canonical link
 *   - exactly 1 title element
 *   - exactly 1 h1
 *   - a meta description of at most 160 chars
 *   - all JSON-LD blocks parse as valid JSON
 * Aggregates violations by type (with examples) and exits 1 if any are found.
 *
 * analyzeHtml is exported for unit tests; the CLI scan only runs when this file
 * is executed directly.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const HTML_DIR = path.join(ROOT, '.next', 'server', 'app');

export const MAX_DESCRIPTION = 160;

function countMatches(html, re) {
  return (html.match(re) || []).length;
}

/** Decode the common HTML entities so length reflects the real text. */
export function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

/** Analyze one HTML document. Returns counts + a list of violation strings. */
export function analyzeHtml(html, maxDescription = MAX_DESCRIPTION) {
  const canonical = countMatches(html, /<link[^>]+rel=["']canonical["']/gi);
  const title = countMatches(html, /<title[\s>]/gi);
  const h1 = countMatches(html, /<h1[\s>]/gi);

  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]*>/i);
  let descLen = null;
  if (descMatch) {
    const c = descMatch[0].match(/content=["']([\s\S]*?)["']/i);
    descLen = c ? decodeEntities(c[1]).length : 0;
  }

  // JSON-LD blocks
  const jsonLdErrors = [];
  let ldCount = 0;
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    ldCount++;
    let raw = m[1].trim();
    // Next/React escapes "<" as < inside JSON-LD; JSON.parse handles \u escapes.
    try {
      JSON.parse(raw);
    } catch {
      jsonLdErrors.push(`ld-block#${ldCount} invalid JSON`);
    }
  }

  const violations = [];
  if (canonical !== 1) violations.push(`canonical=${canonical} (expected 1)`);
  if (title !== 1) violations.push(`title=${title} (expected 1)`);
  if (h1 !== 1) violations.push(`h1=${h1} (expected 1)`);
  if (descLen === null) violations.push('meta description missing');
  else if (descLen > maxDescription) violations.push(`description=${descLen} chars (max ${maxDescription})`);
  for (const e of jsonLdErrors) violations.push(e);

  return { canonical, title, h1, descLen, ldCount, violations };
}

function walk(dir, onFile) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, onFile);
    else onFile(full);
  }
}

function runCli() {
  if (!fs.existsSync(HTML_DIR)) {
    console.error(`\n⚠️  ${path.relative(ROOT, HTML_DIR)} bestaat niet. Draai eerst \`npm run build\`.\n`);
    process.exit(2);
  }

  let pages = 0;
  const byType = {}; // violationType -> { count, examples:[] }
  const addViolation = (type, route) => {
    const key = type.replace(/=\d+/g, '=N').replace(/#\d+/g, '#N');
    (byType[key] ||= { count: 0, examples: [] });
    byType[key].count++;
    if (byType[key].examples.length < 5) byType[key].examples.push(`${route} (${type})`);
  };

  walk(HTML_DIR, file => {
    if (!file.endsWith('.html')) return;
    const route = '/' + path.relative(HTML_DIR, file).replace(/\.html$/, '').replace(/\\/g, '/');
    // Skip Next internal special pages (error/not-found) - no canonical by design.
    if (/^\/_/.test(route.split('/').pop()) || route === '/_not-found' || route === '/_global-error') return;
    pages++;
    const html = fs.readFileSync(file, 'utf-8');
    const { violations } = analyzeHtml(html);
    for (const v of violations) addViolation(v, route);
  });

  const totalViolations = Object.values(byType).reduce((a, b) => a + b.count, 0);
  console.log('\n🔍 Post-build HTML audit — WaterfilterPlatform\n');
  console.log(`Pages scanned: ${pages}`);

  if (totalViolations === 0) {
    console.log('\n✅ Geen HTML-violations gevonden (canonical/title/h1/description/JSON-LD).\n');
    return;
  }
  console.log(`\n❌ ${totalViolations} violation(s) over ${Object.keys(byType).length} type(s):\n`);
  for (const [type, info] of Object.entries(byType).sort((a, b) => b[1].count - a[1].count)) {
    console.log(`  [${info.count}x] ${type}`);
    for (const ex of info.examples) console.log(`        e.g. ${ex}`);
  }
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
