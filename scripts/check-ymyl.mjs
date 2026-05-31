#!/usr/bin/env node
/**
 * YMYL-compliance gate voor WaterfilterPlatform.
 * Run: node scripts/check-ymyl.mjs
 *
 * Elk kennisbank-artikel dat als YMYL geldt (gezondheid/veiligheid) moet naar
 * minimaal 3 gezaghebbende bronnen resolven, zodat de gezondheidsdisclaimer en
 * de Article-citaties in de renderer betekenisvol zijn. Faalt (exit 1) als een
 * YMYL-artikel onvoldoende bronnen heeft.
 *
 * Pure helpers (evaluateYmylArticle, evaluateAll) zijn exporteerbaar voor tests;
 * de CLI-scan draait alleen bij directe uitvoering.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { parseFrontmatter } from './check-content.mjs';
import { isYmyl } from '../lib/ymyl.mjs';
import { sourcesForSlug } from '../lib/article-sources.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'content', 'kennisbank');

export const MIN_YMYL_SOURCES = 3;

/**
 * @returns {string|null} foutmelding of null wanneer in orde / niet-YMYL.
 */
export function evaluateYmylArticle(slug, frontmatter, sources) {
  if (!isYmyl(slug, frontmatter)) return null;
  if (!Array.isArray(sources) || sources.length < MIN_YMYL_SOURCES) {
    return `${slug}: YMYL maar slechts ${Array.isArray(sources) ? sources.length : 0} bron(nen) (min ${MIN_YMYL_SOURCES})`;
  }
  return null;
}

/**
 * @param {{slug:string, frontmatter:object}[]} articles
 * @param {(slug:string)=>string[]} resolve
 * @returns {{ ymylCount: number, failures: string[] }}
 */
export function evaluateAll(articles, resolve = sourcesForSlug) {
  let ymylCount = 0;
  const failures = [];
  for (const a of articles) {
    if (isYmyl(a.slug, a.frontmatter)) ymylCount++;
    const err = evaluateYmylArticle(a.slug, a.frontmatter, resolve(a.slug));
    if (err) failures.push(err);
  }
  return { ymylCount, failures };
}

function runCli() {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx') && !f.startsWith('_'));
  const articles = files.map(f => ({
    slug: f.replace(/\.mdx$/, ''),
    frontmatter: parseFrontmatter(fs.readFileSync(path.join(contentDir, f), 'utf-8')),
  }));

  const { ymylCount, failures } = evaluateAll(articles);

  console.log('\n🩺 YMYL-compliance check - WaterfilterPlatform\n');
  console.log(`Kennisbank-artikelen: ${articles.length} | YMYL: ${ymylCount}`);

  if (failures.length === 0) {
    console.log(`\n✅ Alle ${ymylCount} YMYL-artikelen resolven naar >=${MIN_YMYL_SOURCES} bronnen.\n`);
    return;
  }
  console.log(`\n❌ ${failures.length} YMYL-artikel(en) onvoldoende onderbouwd:\n`);
  for (const f of failures) console.log(`  ${f}`);
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
