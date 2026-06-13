import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildShopUrl, DESTINATIONS, STORE, allowedShopPaths, utmSlug, affiliateClickPayload } from '../lib/pureaqua.mjs';

test('buildShopUrl tags every link with the fixed UTM scheme', () => {
  const url = new URL(buildShopUrl('waterontharders', { campaign: 'waterontharder', content: 'beste-waterontharder-2026-hero' }));
  assert.equal(url.origin, 'https://pureaqua.nl');
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

test('the verified money pages from the briefing are in the allowlist', () => {
  const paths = allowedShopPaths();
  for (const p of [
    '/collections/zuiver-water-kranen',
    '/products/the-source',
    '/products/pureaqua-4-in-1-kraan',
    '/products/countertop-ro',
    '/products/joep-waterontharder',
    '/products/aquacell-waterontharder',
    '/products/tds-meter-test-uw-waterkwaliteit',
  ]) {
    assert.ok(paths.includes(p), `allowlist mist ${p}`);
  }
});

test('product destinations build a tagged product URL', () => {
  const url = new URL(buildShopUrl('vierInEen', { campaign: 'kokend-water', content: 'quooker-alternatief-hero' }));
  assert.equal(url.pathname, '/products/pureaqua-4-in-1-kraan');
  assert.equal(url.searchParams.get('utm_campaign'), 'kokend-water');
  assert.equal(DESTINATIONS.vierInEen.type, 'product');
});

test('affiliateClickPayload builds a dataLayer event from a shop URL', () => {
  const href = buildShopUrl('waterontharders', { campaign: 'waterontharder', content: 'joep-productcta' });
  const p = affiliateClickPayload(href);
  assert.ok(p);
  assert.equal(p.event, 'affiliate_click');
  assert.equal(p.affiliate_partner, 'pureaqua');
  assert.equal(p.destination, '/collections/waterontharders');
  assert.equal(p.utm_source, 'waterfilterplatform');
  assert.equal(p.utm_medium, 'affiliate');
  assert.equal(p.utm_campaign, 'waterontharder');
  assert.equal(p.utm_content, 'joep-productcta');
});

test('affiliateClickPayload ignores non-shop and invalid URLs', () => {
  assert.equal(affiliateClickPayload('https://waterfilterplatform.nl/zoeken'), null);
  assert.equal(affiliateClickPayload('https://example.com'), null);
  assert.equal(affiliateClickPayload('not-a-url'), null);
});
