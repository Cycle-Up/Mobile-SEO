#!/usr/bin/env node
/**
 * IndexNow voor gewijzigde pagina's na een productiedeploy.
 *
 * Bepaalt uit een git-diff welke publieke URL's zijn veranderd en meldt alleen die bij
 * IndexNow (Bing, en daarmee ChatGPT en Copilot). De hele sitemap bij elke deploy
 * insturen is tegen de IndexNow-richtlijnen; daarvoor blijft scripts/ping-indexnow.mjs.
 *
 * Gebruik: node scripts/indexnow-changed.mjs <base-sha> <head-sha> [--dry-run]
 * Draait automatisch via .github/workflows/indexnow.yml na een geslaagde productiedeploy.
 */

import { execFileSync } from 'child_process';
import { pathToFileURL } from 'url';
import { FACT_CARDS } from '../lib/feitenkaarten.mjs';

export const HOST = 'waterfilterplatform.nl';
export const KEY = '647df179ed2746cfad25559632287896';
const BASE = `https://${HOST}`;

// Pagina's die feiten uit lib/ tonen; bij een wijziging in lib/ of components/ opnieuw melden.
const FACT_PAGES = [
  ...Object.values(FACT_CARDS).map(c => c.path),
  '/beste-waterontharder-2026', '/countertop-osmose', '/aanbevolen', '/pfas-waterfilter', '/pfas-water',
];

/** Zet gewijzigde bestandspaden om naar publieke URL's (zonder dynamische routes). */
export function changedUrls(files) {
  const paths = new Set();
  for (const f of files) {
    let m;
    if ((m = f.match(/^app\/(.*)page\.tsx$/)) && !m[1].includes('[')) {
      paths.add('/' + m[1].replace(/\/$/, ''));
    } else if ((m = f.match(/^content\/kennisbank\/([^/]+)\.mdx$/))) {
      paths.add(`/kennisbank/${m[1]}`);
    } else if (f === 'public/llms.txt') {
      paths.add('/llms.txt');
    } else if (/^(lib|components)\//.test(f)) {
      FACT_PAGES.forEach(p => paths.add(p));
    }
  }
  return [...paths].map(p => (p === '/' ? BASE + '/' : BASE + p.replace(/^\/+/, '/'))).sort();
}

async function main() {
  const [base, head] = process.argv.slice(2).filter(a => !a.startsWith('--'));
  const dryRun = process.argv.includes('--dry-run');
  if (!base || !head) {
    console.error('Gebruik: node scripts/indexnow-changed.mjs <base-sha> <head-sha> [--dry-run]');
    process.exit(1);
  }
  const files = execFileSync('git', ['diff', '--name-only', '--diff-filter=AMR', base, head], { encoding: 'utf-8' })
    .split('\n').filter(Boolean);
  const urls = changedUrls(files);
  console.log(`${files.length} gewijzigde bestanden, ${urls.length} URL's`);
  urls.forEach(u => console.log('  ' + u));
  if (dryRun || urls.length === 0) return;
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${BASE}/${KEY}.txt`, urlList: urls.slice(0, 10_000) }),
  });
  console.log(`IndexNow: ${res.status} ${res.statusText}`);
  if (res.status >= 400) process.exit(1);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) await main();
