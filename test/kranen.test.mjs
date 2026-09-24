import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { FOUR_IN_ONE, THREE_WAY, findBlockedKraanClaims, findBlockedSourceClaims } from '../lib/kranen.mjs';
import { DESTINATIONS } from '../lib/pureaqua.mjs';

test('kraan facts match the verified shop destinations', () => {
  assert.equal(FOUR_IN_ONE.shopUrl, DESTINATIONS.vierInEen.url);
  assert.equal(THREE_WAY.shopUrl, DESTINATIONS.zuiverWaterKranen.url);
});

test('blocked kraan claims are detected', () => {
  assert.ok(findBlockedKraanClaims('De PureAqua 4-in-1 kraan levert kokend water van 100 graden.').length > 0);
  assert.ok(findBlockedKraanClaims('De PureAqua 4-in-1 kraan geeft ook bruisend water.').length > 0);
  assert.ok(findBlockedKraanClaims('The Source is NSF/ANSI 58-gecertificeerd.').length > 0);
  assert.ok(findBlockedKraanClaims('De PureAqua 4-in-1 kraan is het beste Quooker-alternatief.').length > 0);
  assert.equal(findBlockedKraanClaims('Onze keuze: de PureAqua 4-in-1 kraan is volgens ons het beste Quooker-alternatief met zuiver water.').length, 0);
  assert.equal(findBlockedKraanClaims('De PureAqua 4-in-1 kraan geeft water van circa 96 graden.').length, 0);
  assert.equal(findBlockedKraanClaims('De PureAqua 4-in-1 kraan geeft gekoeld water, maar geen bruisend water.').length, 0);
});

// Sitebrede scan dekt voorlopig The Source; 4-in-1-scan volgt na de 4-in-1-opschoning.
test('no page, component or article makes a blocked The Source claim', () => {
  const offenders = [];
  const walk = dir => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|mdx|ts)$/.test(e.name)) {
        const hits = findBlockedSourceClaims(fs.readFileSync(p, 'utf-8'));
        if (hits.length) offenders.push(`${p}: ${hits.join(', ')}`);
      }
    }
  };
  ['app', 'content', 'components'].forEach(walk);
  assert.deepEqual(offenders, []);
});
