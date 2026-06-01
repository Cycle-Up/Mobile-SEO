#!/usr/bin/env node
/**
 * Content quality checker for WaterfilterPlatform kennisbank articles.
 * Run: node scripts/check-content.mjs
 * Exits with code 1 if any article fails a required check.
 *
 * Pure helpers (parseFrontmatter, countWords, countInternalLinks, hasCta,
 * validateArticle) are exported for unit tests; the CLI scan only runs when
 * this file is executed directly.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'content', 'kennisbank');

export const RULES = {
  minWords: 700,
  maxDescriptionLength: 155,
  maxTitleLength: 70,
  minInternalLinks: 2,
  requiredFrontmatter: ['title', 'description', 'date', 'slug'],
};

export function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      fm[key.trim()] = rest.join(':').trim().replace(/^["']|["']$/g, '');
    }
  }
  return fm;
}

export function countWords(text) {
  return text.replace(/```[\s\S]*?```/g, '').replace(/[#*`\[\]]/g, ' ').split(/\s+/).filter(Boolean).length;
}

export function countInternalLinks(text) {
  const matches = text.match(/\(\/[^)]+\)/g) || [];
  return matches.length;
}

export function hasCta(body) {
  return /pureaqua|osmose.*kopen|kokend.*kraan|\/omgekeerde-osmose\/kopen/i.test(body);
}

/**
 * Validate one article's raw MDX content against RULES.
 * @returns {{ errors: string[], warnings: string[], words: number, links: number }}
 */
export function validateArticle(raw, rules = RULES) {
  const fm = parseFrontmatter(raw);
  const body = raw.replace(/^---[\s\S]*?---\n/, '');
  const errors = [];
  const warnings = [];

  for (const key of rules.requiredFrontmatter) {
    if (!fm[key]) errors.push(`Missing frontmatter: ${key}`);
  }
  if (fm.description && fm.description.length > rules.maxDescriptionLength) {
    errors.push(`Description too long: ${fm.description.length} chars (max ${rules.maxDescriptionLength})`);
  }
  if (fm.title && fm.title.length > rules.maxTitleLength) {
    warnings.push(`Title may be long: ${fm.title.length} chars (recommended max ${rules.maxTitleLength})`);
  }
  const words = countWords(body);
  if (words < rules.minWords) {
    errors.push(`Too short: ${words} words (min ${rules.minWords})`);
  }
  const links = countInternalLinks(body);
  if (links < rules.minInternalLinks) {
    errors.push(`Too few internal links: ${links} (min ${rules.minInternalLinks})`);
  }
  if (!hasCta(body)) {
    warnings.push('No CTA detected (link to pureaqua or osmose/kopen page)');
  }
  return { errors, warnings, words, links };
}

function runCli() {
  const files = fs.readdirSync(contentDir)
    .filter(f => f.endsWith('.mdx') && !f.startsWith('_'));

  let failed = 0;
  const results = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { errors, warnings, words, links } = validateArticle(raw);
    if (errors.length > 0) failed++;
    results.push({ file, words, links, errors, warnings });
  }

  console.log('\n📋 Content Quality Report — WaterfilterPlatform Kennisbank\n');
  console.log(`Checked ${files.length} articles\n`);

  for (const r of results) {
    const status = r.errors.length > 0 ? '❌' : r.warnings.length > 0 ? '⚠️ ' : '✅';
    console.log(`${status} ${r.file.padEnd(45)} ${String(r.words).padStart(5)} woorden  ${r.links} interne links`);
    for (const e of r.errors) console.log(`     ERROR: ${e}`);
    for (const w of r.warnings) console.log(`     WARN:  ${w}`);
  }

  console.log(`\n${files.length - failed}/${files.length} artikelen geslaagd`);

  if (failed > 0) {
    console.log(`\n❌ ${failed} artikel(en) voldoen niet aan de kwaliteitseisen.\n`);
    process.exit(1);
  } else {
    console.log('\n✅ Alle artikelen voldoen aan de minimumvereisten.\n');
  }
}

// Only run the CLI scan when executed directly (not when imported by tests).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
