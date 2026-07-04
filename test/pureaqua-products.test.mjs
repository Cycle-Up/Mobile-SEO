import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS, buildProductSchema } from '../lib/pureaqua-products.mjs';
import { DESTINATIONS } from '../lib/pureaqua.mjs';

test('every product maps to a verified allowlist destination', () => {
  for (const p of PRODUCTS) {
    assert.ok(DESTINATIONS[p.key], `${p.name} heeft een geldige DESTINATIONS-key`);
    assert.equal(DESTINATIONS[p.key].evidenceStatus, 'verified');
    assert.ok(p.reviewHref.startsWith('/'), 'interne reviewpagina');
    assert.ok(p.tagline.length > 20, 'eerlijke, inhoudelijke tagline');
  }
});

test('offers only exist for products with a verified price, with PureAqua as seller', () => {
  for (const p of PRODUCTS) {
    const s = buildProductSchema(p);
    assert.equal(s['@type'], 'Product');
    assert.ok(s.url.startsWith('https://pureaqua.nl'));
    assert.ok(s.subjectOf.url.startsWith('https://waterfilterplatform.nl/'));
    if (p.price) {
      assert.equal(s.offers.price, p.price);
      assert.equal(s.offers.priceCurrency, 'EUR');
      assert.equal(s.offers.seller.name, 'PureAqua');
    } else {
      assert.equal('offers' in s, false, `${p.name} zonder geverifieerde prijs krijgt geen Offer`);
    }
  }
});

test('brands are truthful: PureAqua is seller, not the brand of Joep/AquaCell', () => {
  const byKey = k => buildProductSchema(PRODUCTS.find(p => p.key === k));
  assert.equal(byKey('joep').brand.name, 'JOEP');
  assert.equal(byKey('aquacell').brand.name, 'Aquacell');
  assert.equal(byKey('vierInEen').brand.name, 'PureAqua');
  assert.equal('brand' in byKey('tdsMeter'), false, 'onbekend merk wordt niet verzonnen');
});

test('The Source carries the published price and availability; unpriced products none', () => {
  const source = buildProductSchema(PRODUCTS.find(p => p.key === 'theSource'));
  assert.equal(source.offers.price, '395.00');
  assert.equal(source.offers.availability, 'https://schema.org/InStock');
  const joep = buildProductSchema(PRODUCTS.find(p => p.key === 'joep'));
  assert.equal('offers' in joep, false);
  const tds = buildProductSchema(PRODUCTS.find(p => p.key === 'tdsMeter'));
  assert.equal(tds.offers.price, '5.95');
  assert.equal('availability' in tds.offers, false, 'geen onbevestigde voorraadclaim');
});
