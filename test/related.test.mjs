import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickRelated, tokens } from '../lib/related.mjs';

const ARTICLES = [
  { slug: 'osmose-water-koffie', title: 'Osmosewater voor koffie' },
  { slug: 'osmose-water-thee', title: 'Osmosewater voor thee' },
  { slug: 'kraanwater-ijsthee', title: 'IJsthee met kraanwater' },
  { slug: 'pfas-drinkwater', title: 'PFAS in drinkwater' },
  { slug: 'kraanwater-cold-brew-koffie', title: 'Cold brew met kraanwater' },
];

test('tokens drops stopwords and short tokens', () => {
  const t = tokens('osmose-water-voor-de-koffie');
  assert.ok(t.includes('osmose'));
  assert.ok(t.includes('koffie'));
  assert.ok(!t.includes('water'));
  assert.ok(!t.includes('de'));
});

test('pickRelated returns token-overlapping articles and excludes self', () => {
  const out = pickRelated('osmose-water-koffie', ARTICLES, 4);
  assert.ok(!out.some(r => r.slug === 'osmose-water-koffie'), 'excludes self');
  // Beide delen een token (osmose resp. koffie) en horen in de selectie.
  assert.ok(out.some(r => r.slug === 'osmose-water-thee'), 'osmose overlap included');
  assert.ok(out.some(r => r.slug === 'kraanwater-cold-brew-koffie'), 'koffie overlap included');
  // pfas deelt niets en hoort er niet bij.
  assert.ok(!out.some(r => r.slug === 'pfas-drinkwater'), 'no-overlap excluded');
});

test('pickRelated breaks score ties alphabetically', () => {
  const out = pickRelated('osmose-water-koffie', ARTICLES, 4);
  assert.equal(out[0].slug, 'kraanwater-cold-brew-koffie', 'alpha tiebreak at equal score');
});

test('no overlap yields empty', () => {
  assert.deepEqual(pickRelated('waterontharder-zout-kopen', [{ slug: 'pfas-drinkwater', title: 'x' }]), []);
});
