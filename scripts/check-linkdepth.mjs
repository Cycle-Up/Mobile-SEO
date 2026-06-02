#!/usr/bin/env node
/**
 * Klikdiepte- en hub-spoke-analyse (items 26 + 30).
 * Run: node scripts/check-linkdepth.mjs
 *
 * Bouwt een uitgaande-link-graaf over STATISCHE routes (page.tsx + kennisbank-MDX),
 * modelleert de globale navigatie (header/footer staat op elke pagina) en doet een
 * BFS vanaf "/". Rapporteert max klikdiepte, statische routes dieper dan 3 kliks en
 * een hub-spoke-overzicht per top-cluster. De programmatische gemeente-laag
 * (dynamische [gemeente]-routes) valt hier bewust buiten.
 *
 * Pure helper computeDepths is exporteerbaar voor tests.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP = path.join(ROOT, 'app');
const CONTENT = path.join(ROOT, 'content', 'kennisbank');

export const MAX_DEPTH = 3;

/**
 * BFS-diepte vanaf start, met globale nav-edges vanaf elke node.
 * @param {Set<string>} nodes - alle geldige routes
 * @param {Map<string,string[]>} edges - route -> uitgaande routes
 * @param {string[]} navTargets - globaal bereikbare routes (header/footer)
 * @param {string} start
 * @returns {Map<string, number>}
 */
export function computeDepths(nodes, edges, navTargets, start = '/') {
  const depth = new Map([[start, 0]]);
  const queue = [start];
  const nav = navTargets.filter(t => nodes.has(t));
  while (queue.length) {
    const cur = queue.shift();
    const d = depth.get(cur);
    // Uitgaande links van de pagina zelf + de globale navigatie (overal aanwezig).
    const outbound = (edges.get(cur) || []).concat(nav);
    for (const t of outbound) {
      if (!nodes.has(t)) continue;
      if (!depth.has(t) || depth.get(t) > d + 1) {
        depth.set(t, d + 1);
        queue.push(t);
      }
    }
  }
  return depth;
}

function normalize(href) {
  if (!href) return null;
  let h = href.split('#')[0].split('?')[0];
  if (h.length > 1 && h.endsWith('/')) h = h.slice(0, -1);
  return h || '/';
}

function fileRoute(file) {
  if (/[/\\]page\.(tsx|jsx|ts|js)$/.test(file)) {
    const relDir = path.relative(APP, path.dirname(file));
    const segs = relDir.split(path.sep).filter(s => s && !(s.startsWith('(') && s.endsWith(')')));
    if (segs.some(s => s.includes('['))) return null;
    return '/' + segs.join('/') || '/';
  }
  if (file.startsWith(CONTENT) && file.endsWith('.mdx')) return '/kennisbank/' + path.basename(file, '.mdx');
  return null;
}

function extractHrefs(content, ext) {
  const out = [];
  const re = ext === '.mdx' ? /\]\((\/[^)\s]+)\)/g : /["'`](\/[^"'`\s]+)["'`]/g;
  let m;
  while ((m = re.exec(content))) {
    const v = m[1];
    if (v.includes('${') || /\.[a-z0-9]{2,4}$/i.test(v)) continue;
    out.push(normalize(v));
  }
  return out;
}

function walk(dir, onFile) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, onFile);
    else onFile(full);
  }
}

function build() {
  const nodes = new Set(['/']);
  const edges = new Map();
  const files = [];
  walk(APP, f => files.push(f));
  walk(CONTENT, f => files.push(f));

  for (const f of files) {
    const r = fileRoute(f);
    if (r) nodes.add(r);
  }
  for (const f of files) {
    const ext = path.extname(f);
    if (!['.tsx', '.jsx', '.ts', '.js', '.mdx'].includes(ext)) continue;
    const r = fileRoute(f);
    if (!r) continue;
    const targets = extractHrefs(fs.readFileSync(f, 'utf-8'), ext).filter(t => nodes.has(t) && t !== r);
    const prev = edges.get(r) || [];
    edges.set(r, [...new Set(prev.concat(targets))]);
  }
  // Kennisbank-index linkt alle artikelen.
  const idxArticles = [...nodes].filter(n => n.startsWith('/kennisbank/'));
  edges.set('/kennisbank', [...new Set((edges.get('/kennisbank') || []).concat(idxArticles))]);
  // /onderwerpen linkt programmatisch elke top-level cluster-hub (template-literal
  // links die de statische extractor niet ziet); modelleer dat expliciet.
  if (nodes.has('/onderwerpen')) {
    const topLevelRoots = [...nodes].filter(n => n !== '/' && n.split('/').length === 2);
    edges.set('/onderwerpen', [...new Set((edges.get('/onderwerpen') || []).concat(topLevelRoots))]);
  }
  return { nodes, edges };
}

function navTargetsFromLayout() {
  const layout = path.join(APP, 'layout.tsx');
  if (!fs.existsSync(layout)) return [];
  return [...new Set(extractHrefs(fs.readFileSync(layout, 'utf-8'), '.tsx'))];
}

function runCli() {
  const { nodes, edges } = build();
  const nav = navTargetsFromLayout();
  const depth = computeDepths(nodes, edges, nav);

  const tooDeep = [];
  let max = 0;
  for (const n of nodes) {
    const d = depth.get(n);
    if (d === undefined) continue;
    if (d > max) max = d;
    if (d > MAX_DEPTH) tooDeep.push(`${n} (${d})`);
  }
  const unreachable = [...nodes].filter(n => !depth.has(n));

  // Hub-spoke-overzicht per top-cluster.
  const clusters = {};
  for (const n of nodes) {
    if (n === '/') continue;
    const top = '/' + n.split('/')[1];
    clusters[top] = (clusters[top] || 0) + 1;
  }

  console.log('\n🔗 Klikdiepte- en hub-spoke-analyse - WaterfilterPlatform\n');
  console.log(`Statische routes: ${nodes.size} | nav-links: ${nav.length} | max diepte: ${max}`);
  console.log(`Routes > ${MAX_DEPTH} kliks: ${tooDeep.length} | onbereikbaar: ${unreachable.length}`);
  const topClusters = Object.entries(clusters).sort((a, b) => b[1] - a[1]).slice(0, 12);
  console.log('\nGrootste clusters (routes):');
  for (const [c, n] of topClusters) console.log(`  ${c.padEnd(28)} ${n}`);

  if (tooDeep.length || unreachable.length) {
    console.log('\n❌ Te diepe of onbereikbare statische routes (eerste 25):\n');
    for (const x of [...tooDeep, ...unreachable.map(u => `${u} (onbereikbaar)`)].slice(0, 25)) console.log(`  ${x}`);
    console.log('');
    process.exit(1);
  }
  console.log(`\n✅ Alle statische routes binnen ${MAX_DEPTH} kliks en bereikbaar.\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
