#!/usr/bin/env node
/**
 * Typography ratchet for WaterfilterPlatform (AGENTS.md ASCII rule).
 * Run: node scripts/check-typography.mjs
 *
 * Counts "banned" typographic characters (smart quotes, en/em dash, ellipsis)
 * in app, content and the public llms/ai text files. The repo has a large
 * legacy backlog of these, so this is a RATCHET: it fails only when the count
 * rises above the recorded baseline (scripts/typography-baseline.json). When
 * the count drops, the baseline is lowered automatically so it can never creep
 * back up. New code should use straight ASCII quotes and hyphens.
 *
 * Pure helpers are exported for unit tests; the CLI only runs when executed
 * directly.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const BASELINE_FILE = path.join(__dirname, 'typography-baseline.json');

// U+2018/2019 single smart quotes, U+201C/201D double smart quotes,
// U+2013 en dash, U+2014 em dash, U+2026 ellipsis.
export const BANNED = new Set([0x2018, 0x2019, 0x201c, 0x201d, 0x2013, 0x2014, 0x2026]);

export function countBanned(text) {
  let n = 0;
  for (const ch of text) if (BANNED.has(ch.codePointAt(0))) n++;
  return n;
}

/** Decide pass/fail vs baseline. */
export function evaluate(total, baseline) {
  return { ok: total <= baseline, exceeded: Math.max(0, total - baseline), improved: total < baseline };
}

const EXTS = new Set(['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md']);

function walk(dir, onFile) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, onFile);
    else onFile(full);
  }
}

export function scanRepo(root = ROOT) {
  const perFile = [];
  let total = 0;
  const scan = file => {
    const c = countBanned(fs.readFileSync(file, 'utf-8'));
    if (c > 0) { perFile.push([path.relative(root, file), c]); total += c; }
  };
  for (const d of ['app', 'content']) {
    walk(path.join(root, d), f => { if (EXTS.has(path.extname(f))) scan(f); });
  }
  for (const f of ['public/llms.txt', 'public/llms-full.txt', 'public/ai.txt']) {
    const full = path.join(root, f);
    if (fs.existsSync(full)) scan(full);
  }
  perFile.sort((a, b) => b[1] - a[1]);
  return { total, perFile };
}

function runCli() {
  const { total, perFile } = scanRepo();
  let baseline = null;
  if (fs.existsSync(BASELINE_FILE)) {
    baseline = JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf-8')).baseline;
  }

  console.log('\n🔤 Typografie-ratchet — WaterfilterPlatform\n');
  console.log(`Banned tekens nu: ${total} | baseline: ${baseline ?? '(nog niet ingesteld)'}`);

  if (baseline === null) {
    fs.writeFileSync(BASELINE_FILE, JSON.stringify({ baseline: total, note: 'Smart quotes/dashes/ellipsis; ratchet mag niet stijgen. Verlaag door legacy te fixen.' }, null, 2) + '\n');
    console.log(`\n✅ Baseline ingesteld op ${total}. Nieuwe overtredingen laten dit getal stijgen en falen.\n`);
    return;
  }

  const { ok, exceeded, improved } = evaluate(total, baseline);
  if (!ok) {
    console.log(`\n❌ ${exceeded} nieuwe banned teken(s) boven de baseline. Top bestanden:\n`);
    for (const [f, c] of perFile.slice(0, 15)) console.log(`  ${String(c).padStart(4)}  ${f}`);
    console.log('\nGebruik rechte ASCII-aanhalingstekens en koppeltekens in nieuwe/gewijzigde code.\n');
    process.exit(1);
  }
  if (improved) {
    fs.writeFileSync(BASELINE_FILE, JSON.stringify({ baseline: total, note: 'Smart quotes/dashes/ellipsis; ratchet mag niet stijgen. Verlaag door legacy te fixen.' }, null, 2) + '\n');
    console.log(`\n✅ Verbeterd: baseline verlaagd naar ${total}.\n`);
  } else {
    console.log('\n✅ Geen toename t.o.v. baseline.\n');
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
