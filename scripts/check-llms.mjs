#!/usr/bin/env node
/**
 * llms.txt sync checker for WaterfilterPlatform.
 * Run: node scripts/check-llms.mjs
 *
 * Verifies that the "important" commercial/brand/comparison/buy-guide routes are
 * discoverable in public/llms.txt (the AI-discovery guide). A route counts as
 * present if its path appears anywhere in llms.txt (so aggregate bullets that
 * list several routes on one line are fine). Exits 1 if any are missing.
 *
 * Pure helpers are exported for unit tests; the CLI scan only runs when this
 * file is executed directly.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const APP = path.join(ROOT, 'app');
const LLMS = path.join(ROOT, 'public', 'llms.txt');

// Brand/hub singletons that are "important" beyond the pattern matches below.
const EXTRA_SINGLETONS = new Set([
  'selsiuz', 'grohe-blue', 'the-source', 'purefilter-review', 'quooker', 'filterkan',
  'sodastream', 'insinkerator', 'waterdrop',
]);


/** Collect the important commercial/brand/comparison/buy-guide routes. */
export function importantRoutes(appDir = APP) {
  const routes = [];
  for (const d of fs.readdirSync(appDir)) {
    if (!fs.existsSync(path.join(appDir, d, 'page.tsx'))) continue;
    if (/-alternatief$/.test(d) || /-waterontharder$/.test(d) || /^beste-/.test(d) || EXTRA_SINGLETONS.has(d)) {
      routes.push('/' + d);
    }
  }
  const verg = path.join(appDir, 'vergelijken');
  if (fs.existsSync(verg)) {
    for (const d of fs.readdirSync(verg)) {
      if (fs.existsSync(path.join(verg, d, 'page.tsx'))) routes.push('/vergelijken/' + d);
    }
  }
  return routes.sort();
}

/** Return the important routes whose path is not present anywhere in llmsText. */
export function findMissing(routes, llmsText) {
  return routes.filter(r => !llmsText.includes(r));
}

function runCli() {
  const routes = importantRoutes();
  const llms = fs.readFileSync(LLMS, 'utf-8');
  const missing = findMissing(routes, llms);

  console.log('\n🤖 llms.txt sync-check — WaterfilterPlatform\n');
  console.log(`Belangrijke routes: ${routes.length} | aanwezig in llms.txt: ${routes.length - missing.length}`);

  if (missing.length === 0) {
    console.log('\n✅ Alle belangrijke routes staan in llms.txt.\n');
    return;
  }
  console.log(`\n❌ ${missing.length} route(s) ontbreken in llms.txt:\n`);
  for (const m of missing) console.log(`  ${m}`);
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
