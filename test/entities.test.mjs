import { test } from 'node:test';
import assert from 'node:assert/strict';
import { entitiesForSlug, ENTITIES } from '../lib/entities.mjs';

test('topic slugs resolve to a primary about-entity with an internal URL', () => {
  const cases = [
    ['pfas-drinkwater', 'PFAS'],
    ['osmose-water-koffie', 'Omgekeerde osmose'],
    ['lood-drinkwater', 'Lood in drinkwater'],
    ['drinkwater-nitraat', 'Nitraat'],
    ['waterfilter-legionella', 'Legionella'],
  ];
  for (const [slug, name] of cases) {
    const { about } = entitiesForSlug(slug);
    assert.ok(about, `${slug} should have an about-entity`);
    assert.equal(about.name, name);
    assert.ok(about.url.startsWith('https://waterfilterplatform.nl/'), `${slug} url is internal`);
  }
});

test('mentions are distinct from about and capped', () => {
  const { about, mentions } = entitiesForSlug('osmose-water-pfas-microplastics');
  assert.ok(about);
  assert.ok(mentions.length <= 3);
  assert.ok(!mentions.some(m => m.url === about.url), 'mentions exclude the about-entity');
});

test('unknown slug yields no entities', () => {
  const { about, mentions } = entitiesForSlug('sodastream-co2-cilinder');
  assert.equal(about, null);
  assert.equal(mentions.length, 0);
});

test('all entity URLs are canonical and internal', () => {
  for (const e of Object.values(ENTITIES)) {
    assert.match(e.url, /^https:\/\/waterfilterplatform\.nl\//);
    assert.ok(e.name.length > 0);
  }
});

test('grounded entities link to a valid Dutch Wikipedia article via sameAs', () => {
  const grounded = Object.values(ENTITIES).filter(e => e.sameAs);
  // de geverifieerde concept-entiteiten zijn gegrond in de kennisgraaf
  assert.ok(grounded.length >= 6, 'minstens 6 entiteiten zijn gegrond');
  for (const e of grounded) {
    assert.ok(Array.isArray(e.sameAs) && e.sameAs.length > 0);
    for (const url of e.sameAs) {
      assert.match(url, /^https:\/\/nl\.wikipedia\.org\/wiki\/\S+$/, `${e.name} sameAs is een nl.wikipedia-URL`);
    }
  }
});

test('PFAS about-entity carries the verified Wikipedia sameAs', () => {
  const { about } = entitiesForSlug('pfas-drinkwater');
  assert.ok(about.sameAs);
  assert.equal(about.sameAs[0], 'https://nl.wikipedia.org/wiki/Poly-_en_perfluoralkylstoffen');
});
