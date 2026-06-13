#!/usr/bin/env node
/**
 * Affiliate-guardrail voor WaterfilterPlatform (post-build).
 * Run: npm run build (eerst), dan: node scripts/check-affiliate.mjs
 *
 * Bewaakt de commerciele koppeling naar de PureAqua Shopify-store, zodat de
 * eerlijkheids- en kwaliteitsstandaard nooit stilletjes wordt geschonden. Per
 * gebouwde HTML-pagina met een zichtbare shop-link (href naar pureaqua.nl)
 * geldt:
 *   - de link heeft rel="...sponsored..." (affiliate-annotatie);
 *   - de link draagt utm_source=waterfilterplatform en utm_medium=affiliate;
 *   - het pad (zonder query) staat in de geverifieerde allowlist (geen fabricage);
 *   - de pagina bevat een zichtbare affiliate-disclosure (data-affiliate-disclosure).
 *
 * analyzeAffiliate is exporteerbaar voor tests; de CLI-scan draait alleen bij
 * directe uitvoering.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { allowedShopPaths } from '../lib/pureaqua.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const HTML_DIR = path.join(ROOT, '.next', 'server', 'app');

/** Haal alle <a>-openingstags naar de shop uit een HTML-document. */
export function extractShopAnchors(html) {
  const anchors = [];
  const re = /<a\b[^>]*\bhref=("|')(https?:\/\/pureaqua\.nl[^"']*)\1[^>]*>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    anchors.push({ tag: m[0], href: m[2].replace(/&amp;/g, '&') });
  }
  return anchors;
}

/** Convenience: alleen de hrefs (gebruikt door de CLI-teller en tests). */
export function extractShopHrefs(html) {
  return extractShopAnchors(html).map(a => a.href);
}

/**
 * Controleer een HTML-document. Retourneert een lijst met overtredingen (strings).
 * @param {string} html
 * @param {string[]} [allowed] geverifieerde shop-paden
 */
export function analyzeAffiliate(html, allowed = allowedShopPaths()) {
  const violations = [];
  const anchors = extractShopAnchors(html);
  if (anchors.length === 0) return violations;

  if (!/data-affiliate-disclosure/.test(html)) {
    violations.push('shop-link zonder zichtbare affiliate-disclosure op de pagina');
  }

  for (const { tag, href } of anchors) {
    let url;
    try {
      url = new URL(href);
    } catch {
      violations.push(`onparseerbare shop-URL: ${href}`);
      continue;
    }
    const pathOnly = url.pathname || '/';
    if (!allowed.includes(pathOnly)) {
      violations.push(`shop-pad niet in allowlist (mogelijk verzonnen/dood): ${pathOnly}`);
    }
    if (url.searchParams.get('utm_source') !== 'waterfilterplatform' || url.searchParams.get('utm_medium') !== 'affiliate') {
      violations.push(`shop-link mist verplichte UTM (source/medium): ${href}`);
    }
    if (!/\brel=["'][^"']*sponsored/i.test(tag)) {
      violations.push(`shop-link mist rel="sponsored": ${href}`);
    }
  }
  return violations;
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
    console.error('Geen .next/server/app gevonden. Draai eerst: npm run build');
    process.exit(1);
  }
  const allowed = allowedShopPaths();
  let pages = 0;
  let pagesWithShop = 0;
  const byType = new Map();

  walk(HTML_DIR, file => {
    if (!file.endsWith('.html')) return;
    pages++;
    const route = '/' + path.relative(HTML_DIR, file).replace(/\.html$/, '').replace(/\\/g, '/');
    const html = fs.readFileSync(file, 'utf-8');
    if (extractShopHrefs(html).length > 0) pagesWithShop++;
    for (const v of analyzeAffiliate(html, allowed)) {
      if (!byType.has(v)) byType.set(v, []);
      byType.get(v).push(route);
    }
  });

  console.log('\nAffiliate-guardrail - WaterfilterPlatform\n');
  console.log(`Pagina's gescand: ${pages} | met PureAqua shop-link: ${pagesWithShop}`);
  console.log(`Geverifieerde allowlist-paden: ${allowed.join(', ')}`);

  const total = [...byType.values()].reduce((n, arr) => n + arr.length, 0);
  if (total === 0) {
    console.log('\nAffiliate-links voldoen aan rel=sponsored + UTM + allowlist + disclosure.');
    return;
  }
  console.log(`\n${total} overtreding(en):`);
  for (const [type, routes] of byType) {
    console.log(`  [${routes.length}x] ${type}`);
    console.log(`        bv. ${routes.slice(0, 3).join(', ')}`);
  }
  process.exit(1);
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  runCli();
}
