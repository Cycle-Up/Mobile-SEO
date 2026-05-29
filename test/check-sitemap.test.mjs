import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractSitemapPaths, computeMissing } from '../scripts/check-sitemap.mjs';

test('extractSitemapPaths picks up literal paths and the homepage', () => {
  const src = `
    { url: BASE, priority: 1 },
    { url: \`\${BASE}/omgekeerde-osmose\` },
    { url: \`\${BASE}/waterfilter/kopen\` },
    { url: \`\${BASE}/waterhardheid/\${g.slug}\` },
  `;
  const paths = extractSitemapPaths(src);
  assert.ok(paths.has('/'));
  assert.ok(paths.has('/omgekeerde-osmose'));
  assert.ok(paths.has('/waterfilter/kopen'));
  // dynamic gemeente entry must NOT be captured as a literal
  assert.ok(!paths.has('/waterhardheid'));
});

test('computeMissing reports app routes not covered by the sitemap', () => {
  const appRoutes = new Set(['/', '/a', '/b', '/c']);
  const covered = new Set(['/', '/a']);
  assert.deepEqual(computeMissing(appRoutes, covered), ['/b', '/c']);
});

test('computeMissing honours the excluded set', () => {
  const appRoutes = new Set(['/a', '/b']);
  const covered = new Set([]);
  assert.deepEqual(computeMissing(appRoutes, covered, new Set(['/b'])), ['/a']);
});
