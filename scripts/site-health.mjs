#!/usr/bin/env node
/**
 * Site-health snapshot for WaterfilterPlatform.
 * Run: node scripts/site-health.mjs   (writes SITE-HEALTH.md)
 *
 * Derives a single overview from the existing checkers: route counts, MDX
 * count, dead internal links, sitemap gaps and the typography ratchet. Reuses
 * the same pure helpers as the gates so the numbers stay consistent.
 *
 * collectHealth() / renderMarkdown() are exported for unit tests; the CLI only
 * writes the file when executed directly.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { buildRouteIndex, isValidLink, extractLinks } from './check-links.mjs';
import { scanRepo } from './check-typography.mjs';
import { extractSitemapPaths, computeMissing } from './check-sitemap.mjs';
import { collectLinkedTargets, findOrphans } from './check-orphans.mjs';
import { importantRoutes, findMissing } from './check-llms.mjs';
import { HUB_ITEMLIST_ROUTES } from './audit-html.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const NOT_PAGES = new Set(['/llms.txt', '/llms-full.txt', '/ai.txt', '/robots.txt', '/sitemap.xml']);
const LINK_EXTS = new Set(['.tsx', '.jsx', '.ts', '.js', '.mdx', '.md']);

function walk(dir, onFile) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, onFile);
    else onFile(full);
  }
}

export function collectHealth(root = ROOT) {
  const index = buildRouteIndex();
  const staticRoutes = [...index.staticRoutes].filter(r => !NOT_PAGES.has(r));

  // dead links
  let deadLinks = 0;
  for (const d of ['app', 'content']) {
    walk(path.join(root, d), file => {
      const ext = path.extname(file);
      if (!LINK_EXTS.has(ext)) return;
      const content = fs.readFileSync(file, 'utf-8');
      for (const href of extractLinks(content, ext)) {
        if (href.includes('${')) continue;
        if (!isValidLink(href, index)) deadLinks++;
      }
    });
  }

  // mdx count
  const cDir = path.join(root, 'content', 'kennisbank');
  const mdxFiles = fs.existsSync(cDir)
    ? fs.readdirSync(cDir).filter(f => f.endsWith('.mdx') && !f.startsWith('_')) : [];
  const mdxCount = mdxFiles.length;
  // AEO: quickAnswer-dekking (directe antwoorden voor AI-extractie).
  let qaCount = 0;
  for (const f of mdxFiles) {
    if (/^quickAnswer:/m.test(fs.readFileSync(path.join(cDir, f), 'utf-8'))) qaCount++;
  }

  // page routes (app page files)
  let pageFiles = 0;
  walk(path.join(root, 'app'), f => { if (/[/\\]page\.(tsx|jsx|ts|js)$/.test(f)) pageFiles++; });

  // sitemap gaps
  const sitemapSrc = fs.readFileSync(path.join(root, 'app', 'sitemap.ts'), 'utf-8');
  const covered = extractSitemapPaths(sitemapSrc);
  covered.add('/kennisbank');
  if (fs.existsSync(cDir)) for (const f of fs.readdirSync(cDir)) {
    if (f.endsWith('.mdx') && !f.startsWith('_')) covered.add('/kennisbank/' + f.replace(/\.mdx$/, ''));
  }
  const sitemapGaps = computeMissing(new Set(staticRoutes), covered).length;

  // typography
  const typo = scanRepo();
  let typoBaseline = null;
  const bf = path.join(__dirname, 'typography-baseline.json');
  if (fs.existsSync(bf)) typoBaseline = JSON.parse(fs.readFileSync(bf, 'utf-8')).baseline;

  // orphans
  const linked = collectLinkedTargets(root);
  const orphans = findOrphans(index.staticRoutes, linked).length;

  // llms sync
  const llms = fs.existsSync(path.join(root, 'public', 'llms.txt'))
    ? fs.readFileSync(path.join(root, 'public', 'llms.txt'), 'utf-8') : '';
  const llmsMissing = findMissing(importantRoutes(path.join(root, 'app')), llms).length;

  // hub ItemList coverage (source-level check, no build needed)
  const hubItemListOk = HUB_ITEMLIST_ROUTES.filter(h => {
    const f = path.join(root, 'app', h, 'page.tsx');
    return fs.existsSync(f) && fs.readFileSync(f, 'utf-8').includes('ItemList');
  }).length;

  return {
    pageFiles,
    staticRoutes: staticRoutes.length,
    dynamicRoutes: index.dynamicRoutes.length,
    mdxCount,
    qaCount,
    deadLinks,
    sitemapGaps,
    typographyTotal: typo.total,
    typographyBaseline: typoBaseline,
    orphans,
    llmsMissing,
    hubItemListOk,
    hubItemListTotal: HUB_ITEMLIST_ROUTES.length,
  };
}

export function renderMarkdown(stats, date = new Date()) {
  const ok = v => (v === 0 ? 'OK' : 'LET OP');
  return `# SITE-HEALTH

Automatisch gegenereerd door \`scripts/site-health.mjs\` (\`node scripts/site-health.mjs\`).
Laatste run: ${date.toISOString().slice(0, 10)}.

| Metriek | Waarde | Status |
|---|---|---|
| Route-bestanden (app/**/page) | ${stats.pageFiles} | - |
| Statische routes | ${stats.staticRoutes} | - |
| Dynamische route-patronen | ${stats.dynamicRoutes} | - |
| Kennisbank-artikelen (MDX) | ${stats.mdxCount} | - |
| quickAnswer-dekking (AEO) | ${stats.qaCount}/${stats.mdxCount} | ${stats.qaCount === stats.mdxCount ? 'OK' : 'LET OP'} |
| Dode interne links | ${stats.deadLinks} | ${ok(stats.deadLinks)} |
| Orphan-pagina's | ${stats.orphans} | ${ok(stats.orphans)} |
| Sitemap-gaten | ${stats.sitemapGaps} | ${ok(stats.sitemapGaps)} |
| llms.txt ontbrekend | ${stats.llmsMissing} | ${ok(stats.llmsMissing)} |
| Hubs met ItemList | ${stats.hubItemListOk}/${stats.hubItemListTotal} | ${stats.hubItemListOk === stats.hubItemListTotal ? 'OK' : 'LET OP'} |
| Banned typografie | ${stats.typographyTotal} | ${stats.typographyBaseline !== null && stats.typographyTotal <= stats.typographyBaseline ? 'OK (<= baseline ' + stats.typographyBaseline + ')' : 'LET OP'} |

Gates: \`npm test\`, \`npm run verify\` (eslint + check-content + typografie + links + sitemap + orphans + llms + ymyl + llms-full),
\`npm run build && npm run audit-html\` (post-build canonical/title/h1/description/JSON-LD/ItemList).
`;
}

function runCli() {
  const stats = collectHealth();
  const md = renderMarkdown(stats);
  fs.writeFileSync(path.join(ROOT, 'SITE-HEALTH.md'), md);
  console.log('\n🩺 SITE-HEALTH.md bijgewerkt\n');
  console.log(md);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
