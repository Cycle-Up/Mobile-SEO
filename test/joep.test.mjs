import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { JOEP, findBlockedJoepClaims } from '../lib/joep.mjs';
import { DESTINATIONS } from '../lib/pureaqua.mjs';

test('Joep facts are complete', () => {
  for (const k of ['name', 'brandOwner', 'shopUrl', 'devicePrice', 'flow', 'saltPerRegeneration', 'checkedAt']) {
    assert.ok(JOEP[k], `${k} present`);
  }
});

test('Joep shop URL matches the verified destination', () => {
  assert.equal(JOEP.shopUrl, DESTINATIONS.joep.url);
});

test('blocked Joep claims are detected', () => {
  assert.ok(findBlockedJoepClaims('JOEP is WRAS-gecertificeerd.').length > 0);
  assert.ok(findBlockedJoepClaims('Bekijk de Joep waterontharder (zonder zout)').length > 0);
  assert.ok(findBlockedJoepClaims('Joep is geschikt voor ieder huishouden.').length > 0);
  assert.ok(findBlockedJoepClaims('JOEP is de beste waterontharder van Nederland.').length > 0);
  assert.equal(findBlockedJoepClaims('Joep is een ionenwisselaar met zout.').length, 0);
  assert.equal(findBlockedJoepClaims('Onze keuze voor 2026: JOEP is volgens ons de beste waterontharder voor Nederland.').length, 0);
});

test('no page, component or article makes a blocked Joep claim', () => {
  const offenders = [];
  const walk = dir => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|mdx|ts)$/.test(e.name)) {
        const hits = findBlockedJoepClaims(fs.readFileSync(p, 'utf-8'));
        if (hits.length) offenders.push(`${p}: ${hits.join(', ')}`);
      }
    }
  };
  ['app', 'content', 'components'].forEach(walk);
  assert.deepEqual(offenders, []);
});
