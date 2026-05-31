import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sourcesForSlug, DEFAULT_SOURCES } from '../lib/article-sources.mjs';

test('health/contaminant slugs get topic-specific sources (>=3)', () => {
  const cases = [
    ['pfas-drinkwater', /PFAS/i],
    ['lood-drinkwater', /Lood/i],
    ['drinkwater-nitraat', /Nitraat/i],
    ['microplastics-drinkwater', /Microplastics/i],
    ['waterfilter-legionella', /Legionella|microbiologie/i],
    ['drinkwater-baby', /Voedingscentrum|gezondheid/i],
    ['drinkwater-fluoride', /Fluoride/i],
  ];
  for (const [slug, re] of cases) {
    const out = sourcesForSlug(slug);
    assert.ok(out.length >= 3, `${slug} should have >=3 sources`);
    assert.ok(out.some(s => re.test(s)), `${slug} should include a topic source matching ${re}`);
    assert.equal(new Set(out).size, out.length, `${slug} sources must be unique`);
  }
});

test('non-topic slug falls back to DEFAULT_SOURCES', () => {
  const out = sourcesForSlug('kraanwater-ijsthee');
  assert.deepEqual(out, DEFAULT_SOURCES);
});

test('always returns at least 3 sources', () => {
  for (const slug of ['', 'x', 'sodastream-co2', 'grohe-red']) {
    assert.ok(sourcesForSlug(slug).length >= 3, `${slug} must yield >=3 sources`);
  }
});
