import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { FACT_CARDS } from '../lib/feitenkaarten.mjs';
import { findBlockedKraanClaims } from '../lib/kranen.mjs';
import { findBlockedJoepClaims } from '../lib/joep.mjs';
import { findBlockedCountertopClaims } from '../lib/countertop.mjs';
import { findBlockedPureFilterClaims } from '../lib/purefilter.mjs';

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
