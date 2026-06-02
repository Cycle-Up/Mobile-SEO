#!/usr/bin/env node
/**
 * AEO-health monitoringgate (item 50, + checks voor 46/47/48). Run NA de build:
 *   node scripts/check-aeo.mjs
 *
 * Meet de AI-vindbaarheidsdekking en bewaakt tegen regressie:
 * - quickAnswer-dekking (moet 100% zijn) en takeaways-dekking (metric).
 * - Organization heeft sameAs-of-contactPoint (entiteit).
 * - AI-bots staan zowel in robots.ts als ai.txt (item 46, consistentie).
 * - Steekproef: artikel-HTML bevat zijn quickAnswer-tekst (item 47, content in SSG).
 * - Steekproef: canonical is self-referential op het juiste domein (item 48).
 *
 * Faalt (exit 1) bij 0% quickAnswer-dekking-regressie, ontbrekende bots,
 * of content/canonical-steekproeffouten. Pure helpers zijn getest.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { parseFrontmatter } from './check-content.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CONTENT = path.join(ROOT, 'content', 'kennisbank');
const APP_BUILD = path.join(ROOT, '.next', 'server', 'app');

export const AI_BOTS = ['OAI-SearchBot', 'GPTBot', 'PerplexityBot', 'Google-Extended', 'ClaudeBot'];

/** @returns {string[]} bots die in een van beide bestanden ontbreken */
export function missingBots(robotsText, aiText) {
  const miss = [];
  for (const b of AI_BOTS) {
    if (!robotsText.includes(b)) miss.push(`robots.ts mist ${b}`);
    if (!aiText.includes(b)) miss.push(`ai.txt mist ${b}`);
  }
  return miss;
}

function contentMetrics() {
  const files = fs.existsSync(CONTENT)
    ? fs.readdirSync(CONTENT).filter(f => f.endsWith('.mdx') && !f.startsWith('_'))
    : [];
  let withQA = 0, withTakeaways = 0;
  for (const f of files) {
    const raw = fs.readFileSync(path.join(CONTENT, f), 'utf-8');
    const fm = parseFrontmatter(raw);
    if (fm.quickAnswer) withQA++;
    if (/^takeaways:/m.test(raw)) withTakeaways++;
  }
  return { total: files.length, withQA, withTakeaways };
}

function runCli() {
  const issues = [];
  const m = contentMetrics();

  // quickAnswer-dekking moet 100% zijn.
  if (m.total > 0 && m.withQA < m.total) issues.push(`quickAnswer-dekking ${m.withQA}/${m.total} (verwacht 100%)`);

  // AI-bot-consistentie (item 46).
  const robots = fs.readFileSync(path.join(ROOT, 'app', 'robots.ts'), 'utf-8');
  const aitxt = fs.readFileSync(path.join(ROOT, 'public', 'ai.txt'), 'utf-8');
  issues.push(...missingBots(robots, aitxt));

  // Organization-entiteit (sameAs of contactPoint).
  const schemaSrc = fs.readFileSync(path.join(ROOT, 'lib', 'schema-org.mjs'), 'utf-8');
  if (!/contactPoint|sameAs/.test(schemaSrc)) issues.push('Organization mist contactPoint/sameAs');

  // Steekproef gebouwde HTML (items 47 + 48).
  let sampled = 0;
  if (fs.existsSync(CONTENT) && fs.existsSync(APP_BUILD)) {
    const slugs = fs.readdirSync(CONTENT).filter(f => f.endsWith('.mdx') && !f.startsWith('_')).slice(0, 5);
    for (const f of slugs) {
      const slug = f.replace(/\.mdx$/, '');
      const html = path.join(APP_BUILD, 'kennisbank', `${slug}.html`);
      if (!fs.existsSync(html)) continue;
      sampled++;
      const content = fs.readFileSync(html, 'utf-8');
      const fm = parseFrontmatter(fs.readFileSync(path.join(CONTENT, f), 'utf-8'));
      // 47: het directe antwoord moet in de statische HTML staan (eerste 60 tekens).
      if (fm.quickAnswer) {
        const probe = fm.quickAnswer.slice(0, 40);
        if (!content.includes(probe)) issues.push(`${slug}: quickAnswer niet in SSG-HTML`);
      }
      // 48: canonical self-referential op het juiste domein.
      const canon = content.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
      const expected = `https://waterfilterplatform.nl/kennisbank/${slug}`;
      if (!canon || canon[1] !== expected) issues.push(`${slug}: canonical niet self-referential (${canon ? canon[1] : 'geen'})`);
    }
  }

  console.log('\n🤖 AEO-health - WaterfilterPlatform\n');
  console.log(`Kennisbank: ${m.total} | quickAnswer: ${m.withQA} (${m.total ? Math.round(m.withQA / m.total * 100) : 0}%) | takeaways: ${m.withTakeaways}`);
  console.log(`AI-bots (robots+ai.txt): ${AI_BOTS.length} gecontroleerd | HTML-steekproef: ${sampled}`);

  if (issues.length === 0) {
    console.log('\n✅ AEO-health in orde.\n');
    return;
  }
  console.log(`\n❌ ${issues.length} AEO-probleem(en):\n`);
  for (const i of issues) console.log(`  ${i}`);
  console.log('');
  process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runCli();
}
