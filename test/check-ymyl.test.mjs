import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateYmylArticle, evaluateAll } from '../scripts/check-ymyl.mjs';

test('YMYL article with >=3 sources passes', () => {
  assert.equal(evaluateYmylArticle('pfas-drinkwater', {}, ['a', 'b', 'c']), null);
});

test('YMYL article with <3 sources fails', () => {
  const err = evaluateYmylArticle('pfas-drinkwater', {}, ['a']);
  assert.match(err, /pfas-drinkwater/);
  assert.match(err, /min 3/);
});

test('non-YMYL article is skipped even with no sources', () => {
  assert.equal(evaluateYmylArticle('kalk-koffiemachine', {}, []), null);
});

test('evaluateAll counts YMYL and collects failures', () => {
  const articles = [
    { slug: 'pfas-drinkwater', frontmatter: {} },     // YMYL
    { slug: 'drinkwater-baby', frontmatter: {} },      // YMYL
    { slug: 'kalk-koffiemachine', frontmatter: {} },   // niet-YMYL
  ];
  // Resolver geeft te weinig bronnen voor baby -> 1 failure, ymylCount 2.
  const resolve = (slug) => (slug === 'drinkwater-baby' ? ['x'] : ['a', 'b', 'c']);
  const { ymylCount, failures } = evaluateAll(articles, resolve);
  assert.equal(ymylCount, 2);
  assert.equal(failures.length, 1);
  assert.match(failures[0], /drinkwater-baby/);
});
