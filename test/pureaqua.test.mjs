import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildShopUrl, DESTINATIONS, STORE, allowedShopPaths, utmSlug } from '../lib/pureaqua.mjs';

test('buildShopUrl tags every link with the fixed UTM scheme', () => {
  const url = new URL(buildShopUrl('waterontharders', { campaign: 'waterontharder', content: 'beste-waterontharder-2026-hero' }));
  assert.equal(url.origin, 'https://shop.pureaqua.nl');
  assert.equal(url.pathname, '/collections/waterontharders');
  assert.equal(url.searchParams.get('utm_source'), 'waterfilterplatform');
  assert.equal(url.searchParams.get('utm_medium'), 'affiliate');
  assert.equal(url.searchParams.get('utm_campaign'), 'waterontharder');
  assert.equal(url.searchParams.get('utm_content'), 'beste-waterontharder-2026-hero');
});

test('buildShopUrl throws on an unknown destination (no fabricated URLs)', () => {
  assert.throws(() => buildShopUrl('osmose-onbekend'), /Onbekende PureAqua-bestemming/);
});

test('campaign defaults to algemeen and content is optional', () => {
  const url = new URL(buildShopUrl('store'));
  assert.equal(url.searchParams.get('utm_campaign'), 'algemeen');
  assert.equal(url.searchParams.has('utm_content'), false);
});

test('all destinations point to the verified PureAqua store', () => {
  for (const d of Object.values(DESTINATIONS)) {
    assert.ok(d.url.startsWith(STORE), `${d.key} hoort onder de geverifieerde store te vallen`);
    assert.equal(d.evidenceStatus, 'verified');
  }
});

test('utmSlug normalizes to ascii slug', () => {
  assert.equal(utmSlug('Omgekeerde Osmose'), 'omgekeerde-osmose');
  assert.equal(utmSlug('  PFAS / lood  '), 'pfas-lood');
});

test('allowedShopPaths exposes the verified paths for the gate', () => {
  const paths = allowedShopPaths();
  assert.ok(paths.includes('/'));
  assert.ok(paths.includes('/collections/waterontharders'));
});
