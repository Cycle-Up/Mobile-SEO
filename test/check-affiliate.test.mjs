import { test } from 'node:test';
import assert from 'node:assert/strict';
import { analyzeAffiliate, extractShopHrefs } from '../scripts/check-affiliate.mjs';

const allowed = ['/', '/collections/waterontharders'];

const goodAnchor = '<a href="https://pureaqua.nl/collections/waterontharders?utm_source=waterfilterplatform&amp;utm_medium=affiliate&amp;utm_campaign=waterontharder" rel="sponsored">Bekijk</a>';
const disclosure = '<p data-affiliate-disclosure>Transparantie...</p>';

test('a compliant shop link with disclosure passes', () => {
  const html = `<html>${goodAnchor}${disclosure}</html>`;
  assert.deepEqual(analyzeAffiliate(html, allowed), []);
});

test('missing disclosure is flagged', () => {
  const html = `<html>${goodAnchor}</html>`;
  const v = analyzeAffiliate(html, allowed);
  assert.ok(v.some(x => /disclosure/.test(x)));
});

test('missing rel=sponsored is flagged', () => {
  const html = `<html><a href="https://pureaqua.nl/?utm_source=waterfilterplatform&utm_medium=affiliate">x</a>${disclosure}</html>`;
  const v = analyzeAffiliate(html, allowed);
  assert.ok(v.some(x => /sponsored/.test(x)));
});

test('missing UTM is flagged', () => {
  const html = `<html><a href="https://pureaqua.nl/" rel="sponsored">x</a>${disclosure}</html>`;
  const v = analyzeAffiliate(html, allowed);
  assert.ok(v.some(x => /UTM/.test(x)));
});

test('a non-allowlisted (possibly fabricated) path is flagged', () => {
  const html = `<html><a href="https://pureaqua.nl/collections/verzonnen?utm_source=waterfilterplatform&utm_medium=affiliate" rel="sponsored">x</a>${disclosure}</html>`;
  const v = analyzeAffiliate(html, allowed);
  assert.ok(v.some(x => /allowlist/.test(x)));
});

test('pages without shop links produce no violations and JSON-LD url is ignored', () => {
  const html = '<html><script type="application/ld+json">{"url":"https://pureaqua.nl"}</script></html>';
  assert.equal(extractShopHrefs(html).length, 0);
  assert.deepEqual(analyzeAffiliate(html, allowed), []);
});
