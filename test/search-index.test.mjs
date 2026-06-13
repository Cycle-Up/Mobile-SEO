import { test } from 'node:test';
import assert from 'node:assert/strict';
import { humanize, buildSearchIndex } from '../scripts/generate-search-index.mjs';

test('humanize turns slugs into readable titles and respects acronyms', () => {
  assert.equal(humanize('omgekeerde-osmose'), 'Omgekeerde osmose');
  assert.equal(humanize('pfas'), 'PFAS');
  assert.equal(humanize('waterhardheid-omrekenen'), 'Waterhardheid omrekenen');
  assert.equal(humanize('tds-ec-referentie'), 'TDS EC referentie');
  assert.equal(humanize('drinkwaternormen.json'), 'Drinkwaternormen');
});

test('buildSearchIndex prefers article frontmatter and includes routes', () => {
  const paths = ['/', '/omgekeerde-osmose', '/kennisbank/pfas-drinkwater', '/hulpmiddelen/zout-kosten'];
  const articles = [
    { slug: 'pfas-drinkwater', title: 'PFAS in drinkwater', description: 'Wat PFAS is.' },
  ];
  const index = buildSearchIndex(paths, articles);
  const urls = index.map(e => e.u);

  // home is excluded
  assert.ok(!urls.includes('/'));
  // article keeps its title and is categorized as Kennisbank
  const art = index.find(e => e.u === '/kennisbank/pfas-drinkwater');
  assert.ok(art);
  assert.equal(art.t, 'PFAS in drinkwater');
  assert.equal(art.c, 'Kennisbank');
  // the article route is not duplicated by the raw sitemap path
  assert.equal(urls.filter(u => u === '/kennisbank/pfas-drinkwater').length, 1);
  // a plain route gets a humanized title + category
  const tool = index.find(e => e.u === '/hulpmiddelen/zout-kosten');
  assert.ok(tool);
  assert.equal(tool.t, 'Zout kosten');
  assert.equal(tool.c, 'Hulpmiddelen');
});

test('buildSearchIndex produces unique URLs', () => {
  const paths = ['/a', '/a', '/b', '/kennisbank/x'];
  const articles = [{ slug: 'x', title: 'X' }];
  const index = buildSearchIndex(paths, articles);
  const urls = index.map(e => e.u);
  assert.equal(new Set(urls).size, urls.length);
});
