#!/usr/bin/env node
/**
 * Answer-ready-analyse voor AEO (items 8 + 9).
 * Run: node scripts/check-answer-ready.mjs
 *
 * - definition-first: definitie-artikelen ("wat is X", "X uitleg") horen in de
 *   eerste 1-2 zinnen een directe definitie te geven.
 * - question-headings: rapporteert het aandeel H2/H3 dat als vraag is geformuleerd
 *   (informatief; vraag-koppen helpen AI bij het matchen van vraag-intent).
 *
 * Pure helpers (isDefinitionSlug, opensWithDefinition, questionHeadingRatio) zijn
 * exporteerbaar voor tests. De CLI is informatief (faalt niet), zodat het geen
 * mass-rewrite afdwingt; regressiebewaking loopt via check-aeo.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'content', 'kennisbank');

const DEFINITION_CUES = /\b(is|zijn|betekent|verwijst naar|staat voor|wordt|noemt? men|heet)\b/i;

export function isDefinitionSlug(slug) {
  return /(^|-)(wat-is|wat-zijn|uitleg|betekenis|definitie)(-|$)/.test(String(slug || ''));
}

/** Body zonder frontmatter -> eerste 2 zinnen bevatten een definitie-cue? */
export function opensWithDefinition(body) {
  const text = String(body || '')
    .replace(/^#.*$/gm, '')           // koppen weg
    .replace(/^>.*$/gm, '')           // quotes weg
    .replace(/[*_`>#]/g, '')
    .trim();
  const firstChunk = text.split(/(?<=[.!?])\s+/).slice(0, 2).join(' ');
  return DEFINITION_CUES.test(firstChunk);
}

/** Aandeel H2/H3-koppen dat als vraag eindigt (met ?). */
export function questionHeadingRatio(raw) {
  const heads = (raw.match(/^#{2,3}\s+.+$/gm) || []);
  if (heads.length === 0) return { total: 0, questions: 0, ratio: 0 };
  const questions = heads.filter(h => h.trim().endsWith('?')).length;
  return { total: heads.length, questions, ratio: questions / heads.length };
}

function stripFrontmatter(raw) {
  return raw.replace(/^---[\s\S]*?---\n/, '');
}

function runCli() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx') && !f.startsWith('_'));
  const defOffenders = [];
  let qTotal = 0, qQuestions = 0;

  for (const f of files) {
    const raw = fs.readFileSync(path.join(contentDir, f), 'utf-8');
    const slug = f.replace(/\.mdx$/, '');
    const body = stripFrontmatter(raw);
    if (isDefinitionSlug(slug) && !opensWithDefinition(body)) defOffenders.push(slug);
    const q = questionHeadingRatio(raw);
    qTotal += q.total; qQuestions += q.questions;
  }

  console.log('\n🔎 Answer-ready-analyse - WaterfilterPlatform\n');
  console.log(`Definitie-artikelen zonder definitie-opening: ${defOffenders.length}`);
  for (const s of defOffenders) console.log(`  - ${s}`);
  const ratio = qTotal ? ((qQuestions / qTotal) * 100).toFixed(1) : '0.0';
  console.log(`\nVraag-koppen: ${qQuestions}/${qTotal} (${ratio}%) van alle H2/H3 zijn vragen.\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
