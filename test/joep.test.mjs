import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import { JOEP, JOEP_POSITIONING, JOEP_NO_FUSS, JOEP_NO_FUSS_POINTS, findBlockedJoepClaims } from '../lib/joep.mjs';
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

test('bare superlatives about a water softener are blocked, attributed ones allowed', () => {
  // Kaal: geblokkeerd.
  assert.ok(findBlockedJoepClaims('JOEP is de slimste waterontharder.').length > 0);
  assert.ok(findBlockedJoepClaims('JOEP is de goedkoopste waterontharder.').length > 0);
  assert.ok(findBlockedJoepClaims('De slimste betaalbare waterontharder van Nederland: JOEP').length > 0);
  assert.ok(findBlockedJoepClaims('De goedkoopste waterontharder van Nederland.').length > 0);
  assert.ok(findBlockedJoepClaims('JOEP, de voordeligste compacte ontharder.').length > 0);
  // Toegeschreven, als vraag, ontkend of algemeen advies: toegestaan.
  assert.equal(findBlockedJoepClaims('JOEP is volgens ons de slimste betaalbare waterontharder van Nederland, zonder poespas.').length, 0);
  assert.equal(findBlockedJoepClaims('Onze keuze: JOEP is de goedkoopste waterontharder in zijn klasse.').length, 0);
  assert.equal(findBlockedJoepClaims('Is JOEP de goedkoopste waterontharder?').length, 0);
  assert.equal(findBlockedJoepClaims('JOEP is niet de goedkoopste waterontharder.').length, 0);
  assert.equal(findBlockedJoepClaims('De goedkoopste waterontharder is niet altijd de voordeligste.').length, 0);
});

test('Joep positioning is attributed and passes the guard', () => {
  assert.match(JOEP_POSITIONING, /volgens ons/);
  assert.match(JOEP_POSITIONING, /slimste betaalbare waterontharder van Nederland, zonder poespas/);
  assert.deepEqual(findBlockedJoepClaims(JOEP_POSITIONING), []);
});

test('Joep no-fuss reasons come from the Joep facts and invent nothing', () => {
  assert.ok(JOEP_NO_FUSS.length >= 4 && JOEP_NO_FUSS.length <= 6);
  assert.deepEqual([...JOEP_NO_FUSS], Object.values(JOEP_NO_FUSS_POINTS));
  const all = JOEP_NO_FUSS.join('\n');
  assert.ok(all.includes(JOEP.dimensions.replace(' (h x b x d)', '')), 'afmetingen uit JOEP');
  assert.ok(all.includes(JOEP.installedPrice) && all.includes(JOEP.devicePrice), 'prijzen uit JOEP');
  assert.ok(all.includes(JOEP.saltTank), 'zoutbak uit JOEP');
  assert.match(JOEP.manufacturerWarranty, /20 jaar op de hars/);
  assert.match(JOEP_NO_FUSS_POINTS.warranty, /20 jaar fabrieksgarantie op de hars/);
  assert.match(JOEP.serviceSubscription, /optioneel/);
  assert.match(JOEP_NO_FUSS_POINTS.subscription, /optioneel/);
  // Niet aangetoonde eigenschappen mogen er niet in staan.
  assert.doesNotMatch(all, /\bapp\b|\bstil\b|stille|wras|besparing|bespaar|%|procent/i);
  assert.doesNotMatch(all + JOEP_POSITIONING, /[\u2013\u2014]/, 'geen gedachtestreepjes');
  assert.deepEqual(findBlockedJoepClaims(all), []);
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
