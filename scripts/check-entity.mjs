#!/usr/bin/env node
/**
 * Entiteit-consistentie-gate (NAP voor AI-kennisgraaf).
 * Run: node scripts/check-entity.mjs
 *
 * Borgt dat de canonieke entiteit-naam en -URL van het platform overal identiek
 * zijn en dat er geen afwijkende varianten insluipen (bv. "Waterfilter Platform"
 * met spatie, of een ander domein). Een consistente entiteit helpt AI-systemen
 * het platform eenduidig te herkennen.
 *
 * Pure helper findEntityIssues is exporteerbaar voor tests.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

export const CANONICAL = { name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' };

// Verboden varianten die op een inconsistente entiteit wijzen.
const BANNED_VARIANTS = [
  /Waterfilter Platform/,        // naam met spatie
  /Waterfilterplatform\.com/i,   // verkeerd TLD
  /https?:\/\/www\.waterfilterplatform/i, // www-variant naast canonical
];

const FILES = [
  'lib/schema-org.mjs',
  'app/layout.tsx',
  'public/llms.txt',
  'public/llms-full.txt',
  'public/ai.txt',
];

/**
 * @param {{file:string, text:string}[]} inputs
 * @param {{name:string,url:string}} canonical
 * @returns {string[]} lijst met problemen
 */
export function findEntityIssues(inputs, canonical = CANONICAL) {
  const issues = [];
  for (const { file, text } of inputs) {
    if (!text.includes(canonical.name)) {
      issues.push(`${file}: canonieke naam "${canonical.name}" ontbreekt`);
    }
    for (const re of BANNED_VARIANTS) {
      if (re.test(text)) issues.push(`${file}: verboden entiteit-variant ${re}`);
    }
  }
  return issues;
}

function runCli() {
  const inputs = FILES
    .filter(f => fs.existsSync(path.join(ROOT, f)))
    .map(f => ({ file: f, text: fs.readFileSync(path.join(ROOT, f), 'utf-8') }));
  const issues = findEntityIssues(inputs);

  console.log('\n🏷  Entiteit-consistentie-check - WaterfilterPlatform\n');
  console.log(`Gecontroleerde bestanden: ${inputs.length}`);
  if (issues.length === 0) {
    console.log(`\n✅ Entiteit "${CANONICAL.name}" (${CANONICAL.url}) is consistent.\n`);
    return;
  }
  console.log(`\n❌ ${issues.length} entiteit-inconsistentie(s):\n`);
  for (const i of issues) console.log(`  ${i}`);
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
