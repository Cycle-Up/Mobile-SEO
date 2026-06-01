import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractTargets, findOrphans, ORPHAN_WHITELIST } from '../scripts/check-orphans.mjs';

test('extractTargets captures attribute, property and markdown link forms', () => {
  assert.deepEqual(extractTargets('<a href="/x">x</a>', '.tsx'), ['/x']);
  assert.deepEqual(extractTargets("{ href: '/y/z', title: 't' }", '.tsx'), ['/y/z']);
  assert.deepEqual(extractTargets('zie [hier](/a/b)', '.mdx'), ['/a/b']);
  // template-literal hrefs are skipped (dynamic)
  assert.deepEqual(extractTargets('href={`/kennisbank/${slug}`}', '.tsx'), []);
});

test('findOrphans flags routes without incoming links and respects whitelist', () => {
  const staticRoutes = new Set(['/', '/a', '/b', '/c']);
  const linked = new Set(['/a']); // only /a is linked
  // '/' is whitelisted; /b and /c are orphans; /a is linked
  assert.deepEqual(findOrphans(staticRoutes, linked), ['/b', '/c']);
});

test('findOrphans treats whitelisted utility routes as non-orphan', () => {
  assert.ok(ORPHAN_WHITELIST.has('/'));
  const orphans = findOrphans(new Set(['/', '/contact']), new Set([]), ORPHAN_WHITELIST);
  assert.deepEqual(orphans, []);
});
