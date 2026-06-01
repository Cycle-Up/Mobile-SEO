import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeLink, isValidLink, extractLinks } from '../scripts/check-links.mjs';

const index = {
  staticRoutes: new Set(['/', '/omgekeerde-osmose', '/kennisbank/osmose-water']),
  dynamicRoutes: [
    [{ kind: 'lit', value: 'waterhardheid' }, { kind: 'dyn' }],
    [{ kind: 'lit', value: 'blog' }, { kind: 'catch' }],
  ],
};

test('normalizeLink strips hash and trailing slash', () => {
  assert.equal(normalizeLink('/omgekeerde-osmose#faq'), '/omgekeerde-osmose');
  assert.equal(normalizeLink('/omgekeerde-osmose/'), '/omgekeerde-osmose');
  assert.equal(normalizeLink('https://x.nl'), null);
  assert.equal(normalizeLink('#anchor'), null);
});

test('isValidLink accepts an existing static route', () => {
  assert.equal(isValidLink('/omgekeerde-osmose', index), true);
  assert.equal(isValidLink('/kennisbank/osmose-water#kop', index), true);
});

test('isValidLink rejects a non-existing route (typo)', () => {
  assert.equal(isValidLink('/omgekeerde-osmoze', index), false);
  assert.equal(isValidLink('/kennisbank/bestaat-niet', index), false);
});

test('isValidLink matches a dynamic segment as wildcard', () => {
  assert.equal(isValidLink('/waterhardheid/amsterdam', index), true);
  assert.equal(isValidLink('/waterhardheid/amsterdam/extra', index), false);
});

test('isValidLink matches a catch-all route', () => {
  assert.equal(isValidLink('/blog/a/b/c', index), true);
  assert.equal(isValidLink('/blog', index), false);
});

test('extractLinks finds hrefs in TSX and markdown links in MDX', () => {
  assert.deepEqual(extractLinks('<a href="/x">x</a> <Link href=\'/y/z\'>', '.tsx'), ['/x', '/y/z']);
  assert.deepEqual(extractLinks('zie [hier](/a/b) en [ext](https://x.nl)', '.mdx'), ['/a/b']);
});
