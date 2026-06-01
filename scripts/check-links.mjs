#!/usr/bin/env node
/**
 * Internal link checker for WaterfilterPlatform.
 * Run: node scripts/check-links.mjs
 *
 * Extracts internal links (href="/..." in TSX, ](/...) in MDX) and validates
 * them against the actual route tree (app page.tsx files) and the kennisbank MDX
 * slugs. Dynamic segments ([slug], [...slug], [[...slug]]) are matched as
 * wildcards. Exits 1 if any dead internal link is found.
 *
 * Pure helpers are exported for unit tests; the CLI scan only runs when this
 * file is executed directly.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const CONTENT_DIR = path.join(ROOT, 'content', 'kennisbank');

// Paths that are valid targets but are not app routes (public files, anchors).
const WHITELIST = new Set(['/', '/llms.txt', '/llms-full.txt', '/ai.txt', '/robots.txt', '/sitemap.xml']);

function walk(dir, onFile) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, onFile);
    else onFile(full);
  }
}

/** Turn an app/ route directory into segment tokens, dropping route groups. */
function routeSegments(relDir) {
  return relDir
    .split(path.sep)
    .filter(seg => seg && !(seg.startsWith('(') && seg.endsWith(')')));
}

function segToken(seg) {
  if (seg.startsWith('[[...') && seg.endsWith(']]')) return { kind: 'optcatch' };
  if (seg.startsWith('[...') && seg.endsWith(']')) return { kind: 'catch' };
  if (seg.startsWith('[') && seg.endsWith(']')) return { kind: 'dyn' };
  return { kind: 'lit', value: seg };
}

/** Build the route index: { staticRoutes:Set, dynamicRoutes:[tokens[]] }. */
export function buildRouteIndex({ appDir = APP_DIR, contentDir = CONTENT_DIR } = {}) {
  const staticRoutes = new Set(WHITELIST);
  const dynamicRoutes = [];

  if (fs.existsSync(appDir)) {
    walk(appDir, file => {
      if (!/[/\\]page\.(tsx|jsx|ts|js)$/.test(file)) return;
      const relDir = path.relative(appDir, path.dirname(file));
      const segs = routeSegments(relDir);
      const tokens = segs.map(segToken);
      if (tokens.every(t => t.kind === 'lit')) {
        staticRoutes.add('/' + tokens.map(t => t.value).join('/'));
      } else {
        dynamicRoutes.push(tokens);
      }
    });
  }
  // app/page.tsx -> '/'
  staticRoutes.add('/');

  if (fs.existsSync(contentDir)) {
    for (const f of fs.readdirSync(contentDir)) {
      if (f.endsWith('.mdx') && !f.startsWith('_')) {
        staticRoutes.add('/kennisbank/' + f.replace(/\.mdx$/, ''));
      }
    }
  }
  return { staticRoutes, dynamicRoutes };
}

function matchDynamic(linkSegs, tokens) {
  let i = 0;
  for (let t = 0; t < tokens.length; t++) {
    const tok = tokens[t];
    if (tok.kind === 'catch') {
      // must consume at least one, and it's the last meaningful token
      return linkSegs.length - i >= 1;
    }
    if (tok.kind === 'optcatch') {
      return true; // matches zero or more remaining
    }
    if (i >= linkSegs.length) return false;
    if (tok.kind === 'lit' && tok.value !== linkSegs[i]) return false;
    i++;
  }
  return i === linkSegs.length;
}

/** Normalize a link: strip hash/query. Returns null if not an internal page link. */
export function normalizeLink(href) {
  if (!href || !href.startsWith('/')) return null;
  if (href.startsWith('//')) return null; // protocol-relative
  let p = href.split('#')[0].split('?')[0];
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p || '/';
}

export function isValidLink(href, index) {
  const p = normalizeLink(href);
  if (p === null) return true; // not an internal link we check (external/anchor)
  if (index.staticRoutes.has(p)) return true;
  const segs = p.split('/').filter(Boolean);
  return index.dynamicRoutes.some(tokens => matchDynamic(segs, tokens));
}

/** Extract internal link hrefs from file content based on extension. */
export function extractLinks(content, ext) {
  const links = [];
  if (ext === '.mdx' || ext === '.md') {
    const re = /\]\((\/[^)\s]+)\)/g;
    let m;
    while ((m = re.exec(content))) links.push(m[1]);
  } else {
    // TSX/JSX: href="/..." or href='/...'; skip template literals with ${}
    const re = /href=(?:"(\/[^"]*)"|'(\/[^']*)')/g;
    let m;
    while ((m = re.exec(content))) links.push(m[1] || m[2]);
  }
  return links;
}

function runCli() {
  const index = buildRouteIndex();
  const dead = [];
  const checkedFrom = (file) => path.relative(ROOT, file);

  const scanDir = (dir, exts) => {
    if (!fs.existsSync(dir)) return;
    walk(dir, file => {
      const ext = path.extname(file);
      if (!exts.includes(ext)) return;
      const content = fs.readFileSync(file, 'utf-8');
      for (const href of extractLinks(content, ext)) {
        if (href.includes('${')) continue;
        if (!isValidLink(href, index)) {
          dead.push({ href, file: checkedFrom(file) });
        }
      }
    });
  };

  scanDir(APP_DIR, ['.tsx', '.jsx', '.ts', '.js']);
  scanDir(CONTENT_DIR, ['.mdx', '.md']);

  const uniqueTargets = new Set(dead.map(d => d.href));
  console.log(`\n🔗 Internal link check — WaterfilterPlatform\n`);
  console.log(`Static routes: ${index.staticRoutes.size} | dynamic route patterns: ${index.dynamicRoutes.length}`);

  if (dead.length === 0) {
    console.log('\n✅ Geen dode interne links gevonden.\n');
    return;
  }
  console.log(`\n❌ ${dead.length} dode interne link(s) naar ${uniqueTargets.size} unieke target(s):\n`);
  const byTarget = {};
  for (const d of dead) (byTarget[d.href] ||= []).push(d.file);
  for (const [href, files] of Object.entries(byTarget).sort()) {
    console.log(`  ${href}`);
    for (const f of [...new Set(files)].slice(0, 5)) console.log(`      <- ${f}`);
  }
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
