import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeTypography, renderKennisbankIndex } from '../scripts/generate-llms-full.mjs';

test('sanitizeTypography converts banned typography to ASCII', () => {
  assert.equal(sanitizeTypography('a–b—c'), 'a-b-c');
  assert.equal(sanitizeTypography('‘x’ “y”'), "'x' \"y\"");
  assert.equal(sanitizeTypography('drie…'), 'drie...');
});

test('renderKennisbankIndex includes a quickAnswer line per article', () => {
  const out = renderKennisbankIndex([
    { slug: 'pfas-drinkwater', title: 'PFAS', date: '2026-01-01', quickAnswer: 'Direct antwoord.' },
  ]);
  assert.match(out, /\[PFAS\]\(https:\/\/waterfilterplatform\.nl\/kennisbank\/pfas-drinkwater\)/);
  assert.match(out, /> Direct antwoord\./);
});
