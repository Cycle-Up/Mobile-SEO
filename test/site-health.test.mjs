import { test } from 'node:test';
import assert from 'node:assert/strict';
import { collectHealth, renderMarkdown } from '../scripts/site-health.mjs';

test('collectHealth runs and returns numeric metrics', () => {
  const s = collectHealth();
  for (const k of ['pageFiles', 'staticRoutes', 'dynamicRoutes', 'mdxCount', 'deadLinks', 'sitemapGaps', 'typographyTotal']) {
    assert.equal(typeof s[k], 'number', `${k} should be a number`);
  }
  assert.ok(s.pageFiles > 0);
  assert.ok(s.mdxCount > 0);
});

test('renderMarkdown produces a SITE-HEALTH document', () => {
  const md = renderMarkdown({
    pageFiles: 1, staticRoutes: 1, dynamicRoutes: 1, mdxCount: 1,
    deadLinks: 0, sitemapGaps: 0, typographyTotal: 10, typographyBaseline: 20,
  }, new Date('2026-05-29'));
  assert.match(md, /# SITE-HEALTH/);
  assert.match(md, /Dode interne links/);
  assert.match(md, /2026-05-29/);
});
