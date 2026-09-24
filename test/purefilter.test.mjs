import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { PUREFILTER, findBlockedPureFilterClaims } from '../lib/purefilter.mjs';
import { DESTINATIONS } from '../lib/pureaqua.mjs';

test('PureFilter facts are complete', () => {
  for (const k of ['name', 'url', 'price', 'capacity', 'pfasReduction', 'labReportUrl', 'checkedAt']) {
    assert.ok(PUREFILTER[k], `${k} present`);
  }
  assert.equal(PUREFILTER.pfasTested.length, 5);
});

test('PureFilter product URL matches the verified shop destination', () => {
  assert.equal(PUREFILTER.url, DESTINATIONS.purefilterMineral.url);
});

test('blocked claims are detected', () => {
  assert.ok(findBlockedPureFilterClaims('PureFilter Mineral+ is NSF-gecertificeerd.').length > 0);
  assert.ok(findBlockedPureFilterClaims('Met PureFilter drink je PFAS-vrij water.').length > 0);
  assert.ok(findBlockedPureFilterClaims('PureFilter verwijdert alle PFAS.').length > 0);
  assert.equal(findBlockedPureFilterClaims('PureFilter vermindert vijf PFAS met circa 83-85%.').length, 0);
});

test('no page or article makes a blocked PureFilter claim', () => {
  const roots = ['app', 'content', 'components'];
  const offenders = [];
  const walk = dir => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(tsx|mdx|ts)$/.test(e.name)) {
        const hits = findBlockedPureFilterClaims(fs.readFileSync(p, 'utf-8'));
        if (hits.length) offenders.push(`${p}: ${hits.join(', ')}`);
      }
    }
  };
  roots.forEach(walk);
  assert.deepEqual(offenders, []);
});
