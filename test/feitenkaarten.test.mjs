import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { FACT_CARDS } from '../lib/feitenkaarten.mjs';
import { findBlockedKraanClaims, FOUR_IN_ONE } from '../lib/kranen.mjs';
import { findBlockedJoepClaims, JOEP_POSITIONING } from '../lib/joep.mjs';
import { findBlockedCountertopClaims } from '../lib/countertop.mjs';
import { findBlockedPureFilterClaims, PUREFILTER } from '../lib/purefilter.mjs';

const llms = fs.readFileSync('public/llms.txt', 'utf-8');

test('every fact card summary is mirrored verbatim in llms.txt', () => {
  for (const [id, card] of Object.entries(FACT_CARDS)) {
    assert.ok(llms.includes(card.summary), `${id}: samenvatting ontbreekt of wijkt af in public/llms.txt`);
    assert.ok(llms.includes(`https://waterfilterplatform.nl${card.path}`), `${id}: link ontbreekt`);
  }
});

test('fact cards contain no blocked claims', () => {
  for (const [id, card] of Object.entries(FACT_CARDS)) {
    const text = [card.summary, ...card.rows.map(r => r.join(': '))].join('\n');
    const hits = [
      ...findBlockedKraanClaims(text),
      ...findBlockedJoepClaims(text),
      ...findBlockedCountertopClaims(text),
      ...findBlockedPureFilterClaims(text),
    ];
    assert.deepEqual(hits, [], id);
  }
});

test('JOEP fact card carries the attributed positioning', () => {
  assert.ok(FACT_CARDS.joep.summary.includes(JOEP_POSITIONING));
});

test('llms.txt links JOEP to the waterontharder hub, buy and price pages', () => {
  const joepLine = llms.split('\n').find(l => l.includes(FACT_CARDS.joep.summary));
  assert.ok(joepLine, 'JOEP-feitenkaartregel ontbreekt');
  for (const route of ['/waterontharder ', '/waterontharder/kopen', '/waterontharder/prijs']) {
    assert.ok(joepLine.includes(route), `JOEP-regel mist ${route.trim()}`);
  }
});

test('llms.txt PFAS section uses measured figures from the fact modules only', () => {
  const start = llms.indexOf('## PFAS: welk filter?');
  assert.ok(start >= 0, 'sectie PFAS: welk filter? ontbreekt');
  const end = llms.indexOf('\n## ', start + 1);
  const section = llms.slice(start, end === -1 ? undefined : end);
  for (const url of ['/pfas-waterfilter', '/pfas-water)', '/purefilter-review', '/4-in-1-kraan', '/the-source', '/countertop-osmose']) {
    assert.ok(section.includes(url), `PFAS-sectie mist ${url}`);
  }
  if (fs.existsSync('content/kennisbank/pfas-in-bronwater-flessenwater.mdx')) {
    assert.ok(section.includes('/kennisbank/pfas-in-bronwater-flessenwater'));
  }
  assert.ok(section.includes(`${PUREFILTER.pfasReduction} minder van vijf PFAS (${PUREFILTER.pfasTested.join(', ')})`));
  assert.ok(section.includes(`${FOUR_IN_ONE.lab.PFOS} minder PFOS en ${FOUR_IN_ONE.lab.PFOA} minder PFOA`));
  // Geen eigen PFAS-percentages voor The Source en het Water zuiver apparaat.
  for (const line of section.split('\n').filter(l => /the source|water zuiver apparaat/i.test(l))) {
    assert.doesNotMatch(line, /\d+([,.]\d+)?\s*%/, line.slice(0, 60));
  }
  const hits = [
    ...findBlockedKraanClaims(section),
    ...findBlockedJoepClaims(section),
    ...findBlockedCountertopClaims(section),
    ...findBlockedPureFilterClaims(section),
  ];
  assert.deepEqual(hits, []);
  assert.doesNotMatch(section, /[\u2013\u2014]/);
});
