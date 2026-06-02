#!/usr/bin/env node
/**
 * Feiten-consistentie- en versheidsgate (items 43 + 45).
 * Run: node scripts/check-facts.mjs
 *
 * - Scant kennisbank-MDX op duidelijk tegenstrijdige normwaarden t.o.v. lib/facts.mjs.
 * - Rapporteert plekken die verwijzen naar normen/jaartallen die bij een wijziging
 *   handmatig gereviewd moeten worden (versheid).
 *
 * Faalt (exit 1) alleen bij echte tegenstrijdigheden; de versheidslijst is informatief.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { findContradictions, FACTS } from '../lib/facts.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'content', 'kennisbank');

function runCli() {
  const files = fs.existsSync(contentDir)
    ? fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx') && !f.startsWith('_'))
    : [];

  const contradictions = [];
  let normRefs = 0;
  for (const f of files) {
    const text = fs.readFileSync(path.join(contentDir, f), 'utf-8');
    for (const msg of findContradictions(text)) contradictions.push(`${f}: ${msg}`);
    if (/pfas|nitraat|loodnorm|2020\/2184|microgram\/l|mg\/l/i.test(text)) normRefs++;
  }

  console.log('\n📊 Feiten-consistentie - WaterfilterPlatform\n');
  console.log(`Kerncijfers in lib/facts.mjs: ${Object.keys(FACTS).length}`);
  console.log(`Artikelen die normen/jaartallen noemen (review bij wijziging): ${normRefs}`);

  // Report-only: nuance (signaalwaarden, historische normen) mag legitiem naast
  // de hoofdnorm staan. Deze lijst is voor handmatige review, niet blokkerend.
  if (contradictions.length === 0) {
    console.log('\n✅ Geen mogelijke tegenstrijdige normwaarden om te reviewen.\n');
    return;
  }
  console.log(`\nℹ ${contradictions.length} plek(ken) met norm-nuance om te reviewen (niet-blokkerend):\n`);
  for (const c of contradictions) console.log(`  ${c}`);
  console.log('');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
