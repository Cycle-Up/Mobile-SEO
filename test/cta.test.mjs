import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ctaContent, CTA_CONTENT } from '../lib/cta.mjs';

const CONTEXTS = ['osmose', 'kokend', 'waterhardheid', 'algemeen', 'zakelijk'];

test('every context yields complete, internal-linking copy', () => {
  for (const ctx of CONTEXTS) {
    const c = ctaContent(ctx);
    assert.ok(c.title && c.sub && c.cta, `${ctx} has title/sub/cta`);
    assert.ok(c.link.startsWith('/'), `${ctx} link is internal`);
  }
});

test('each context maps to a distinct link', () => {
  const links = CONTEXTS.map(ctx => ctaContent(ctx).link);
  assert.equal(new Set(links).size, links.length, 'links are distinct per context');
});

test('unknown or missing context falls back to algemeen', () => {
  assert.deepEqual(ctaContent('bestaat-niet'), CTA_CONTENT.algemeen);
  assert.deepEqual(ctaContent(), CTA_CONTENT.algemeen);
});

test('copy is ASCII (no smart quotes or dashes)', () => {
  for (const ctx of CONTEXTS) {
    const c = ctaContent(ctx);
    for (const field of ['title', 'sub', 'cta']) {
      assert.ok(!/[‘’“”–—…]/.test(c[field]), `${ctx}.${field} is ASCII`);
    }
  }
});
