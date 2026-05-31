import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeMissing, requiredUrls } from '../scripts/check-llms-full.mjs';

const BASE = 'https://waterfilterplatform.nl';

test('computeMissing returns nothing when all URLs are present', () => {
  const text = `index ${BASE}/grohe-red and ${BASE}/kennisbank/pfas-drinkwater`;
  const required = [`${BASE}/grohe-red`, `${BASE}/kennisbank/pfas-drinkwater`];
  assert.deepEqual(computeMissing(text, required), []);
});

test('computeMissing reports a missing kennisbank URL', () => {
  const text = `only ${BASE}/grohe-red here`;
  const required = [`${BASE}/grohe-red`, `${BASE}/kennisbank/nieuw-artikel`];
  assert.deepEqual(computeMissing(text, required), [`${BASE}/kennisbank/nieuw-artikel`]);
});

test('requiredUrls builds route + kennisbank URLs and skips home', () => {
  const urls = requiredUrls(new Set(['/', '/grohe-red', '/vergelijken/bwt-vs-brita']), ['ijsthee']);
  assert.ok(!urls.includes(`${BASE}/`));
  assert.ok(urls.includes(`${BASE}/grohe-red`));
  assert.ok(urls.includes(`${BASE}/vergelijken/bwt-vs-brita`));
  assert.ok(urls.includes(`${BASE}/kennisbank/ijsthee`));
});
