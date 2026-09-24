import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { COUNTERTOP, findBlockedCountertopClaims } from '../lib/countertop.mjs';
import { DESTINATIONS } from '../lib/pureaqua.mjs';

test('countertop facts are complete', () => {
  for (const k of ['name', 'shopUrl', 'price', 'maxTemp', 'technique', 'filterLife', 'checkedAt']) {
    assert.ok(COUNTERTOP[k], `${k} present`);
  }
});

test('countertop shop URL matches the verified destination', () => {
  assert.equal(COUNTERTOP.shopUrl, DESTINATIONS.countertopRo.url);
});

test('blocked countertop claims are detected', () => {
  assert.ok(findBlockedCountertopClaims('Het Water zuiver apparaat levert kokend water.').length > 0);
  assert.ok(findBlockedCountertopClaims('Het Water zuiver apparaat is NSF-gecertificeerd.').length > 0);
  assert.ok(findBlockedCountertopClaims('Het Water zuiver apparaat is de beste countertop van Nederland.').length > 0);
  assert.equal(findBlockedCountertopClaims('Onze keuze: het Water zuiver apparaat is volgens ons de beste countertop-osmose.').length, 0);
  assert.equal(findBlockedCountertopClaims('Het Water zuiver apparaat verwarmt tot 95 graden.').length, 0);
});

test('no page, component or article makes a blocked countertop claim', () => {
  const offenders = [];
  const walk = dir => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|mdx|ts)$/.test(e.name)) {
        const hits = findBlockedCountertopClaims(fs.readFileSync(p, 'utf-8'));
        if (hits.length) offenders.push(`${p}: ${hits.join(', ')}`);
      }
    }
  };
  ['app', 'content', 'components'].forEach(walk);
  assert.deepEqual(offenders, []);
});
