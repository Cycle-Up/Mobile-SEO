#!/usr/bin/env node
/**
 * Orphan-page detector for WaterfilterPlatform.
 * Run: node scripts/check-orphans.mjs
 *
 * A static route is an "orphan" when no other page links to it. We collect
 * internal link targets from every app/content file in both attribute form
 * (href="/x") and data-array/property form (href: '/x'), plus markdown links
 * ](/x). Kennisbank articles are linked via a mapped index (template literal),
 * so any /kennisbank/<slug> whose slug is registered in app/kennisbank/page.tsx
 * counts as linked. Self-links are ignored. Exits 1 if orphans remain.
 *
 * Pure helpers are exported for unit tests; the CLI scan only runs when this
 * file is executed directly.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { buildRouteIndex, normalizeLink } from './check-links.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP = path.join(ROOT, 'app');
const CONTENT = path.join(ROOT, 'content', 'kennisbank');

const NOT_PAGES = new Set(['/llms.txt', '/llms-full.txt', '/ai.txt', '/robots.txt', '/sitemap.xml']);
// Routes that are reachable without an in-content link (global nav / entry points).
export const ORPHAN_WHITELIST = new Set(['/', '/over-ons', '/contact', '/methodologie']);
const LINK_EXTS = new Set(['.tsx', '.jsx', '.ts', '.js', '.mdx', '.md']);

/** Extract internal link targets. For TSX/TS we match any quoted absolute path
 * (covers href="/x", href: '/x' and bare data-array entries like ['Naam','/x']),
 * skipping template literals and file paths. For MDX we match markdown links. */
export function extractTargets(content, ext) {
  const out = [];
  const push = v => {
    if (!v || v === '/' || v.includes('${')) return;
    if (/\.[a-z0-9]{2,4}$/i.test(v)) return; // file path (.svg/.txt/.png/...)
    out.push(v);
  };
  if (ext === '.mdx' || ext === '.md') {
    const re = /\]\((\/[^)\s]+)\)/g; let m;
    while ((m = re.exec(content))) push(m[1]);
  } else {
    const re = /["'`](\/[^"'`\s]+)["'`]/g; let m;
    while ((m = re.exec(content))) push(m[1]);
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

function fileRoute(file) {
  if (/[/\\]page\.(tsx|jsx|ts|js)$/.test(file)) {
    const relDir = path.relative(APP, path.dirname(file));
    if (relDir.startsWith('..')) return null;
    const segs = relDir.split(path.sep).filter(s => s && !(s.startsWith('(') && s.endsWith(')')));
    if (segs.some(s => s.includes('['))) return null; // dynamic page, not a static route
    return '/' + segs.join('/');
  }
  if (file.startsWith(CONTENT) && file.endsWith('.mdx')) {
    return '/kennisbank/' + path.basename(file, '.mdx');
  }
  return null;
}

/** Collect the set of internally-linked route paths across the repo. */
export function collectLinkedTargets(root = ROOT) {
  const linked = new Set();
  const addFromFile = file => {
    const ext = path.extname(file);
    if (!LINK_EXTS.has(ext)) return;
    const own = fileRoute(file);
    const content = fs.readFileSync(file, 'utf-8');
    for (const t of extractTargets(content, ext)) {
      const n = normalizeLink(t);
      if (n && n !== own) linked.add(n);
    }
  };
  walk(path.join(root, 'app'), addFromFile);
  walk(path.join(root, 'content'), addFromFile);

  // Kennisbank articles are linked via the mapped index page.
  const idx = path.join(root, 'app', 'kennisbank', 'page.tsx');
  if (fs.existsSync(idx)) {
    const src = fs.readFileSync(idx, 'utf-8');
    if (fs.existsSync(CONTENT)) {
      for (const f of fs.readdirSync(CONTENT)) {
        if (f.endsWith('.mdx') && !f.startsWith('_')) {
          const slug = f.replace(/\.mdx$/, '');
          if (src.includes(`'${slug}'`) || src.includes(`"${slug}"`) || src.includes(`/${slug}`)) {
            linked.add('/kennisbank/' + slug);
          }
        }
      }
    }
  }
  return linked;
}

/** Compute orphans = static routes with no incoming internal link. */
export function findOrphans(staticRoutes, linked, whitelist = ORPHAN_WHITELIST) {
  return [...staticRoutes]
    .filter(r => !NOT_PAGES.has(r) && !whitelist.has(r) && !linked.has(r))
    .sort();
}

function runCli() {
  const index = buildRouteIndex();
  const linked = collectLinkedTargets();
  const orphans = findOrphans(index.staticRoutes, linked);

  console.log('\n🔗 Orphan-check — WaterfilterPlatform\n');
  console.log(`Statische routes: ${index.staticRoutes.size} | met inkomende link: ${linked.size}`);

  if (orphans.length === 0) {
    console.log('\n✅ Geen orphan-pagina\'s (alle statische routes hebben >=1 inkomende interne link).\n');
    return;
  }
  console.log(`\n❌ ${orphans.length} orphan-pagina('s) zonder inkomende interne link:\n`);
  for (const o of orphans) console.log(`  ${o}`);
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
