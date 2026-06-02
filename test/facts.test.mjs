import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findContradictions, factLine, FACTS } from '../lib/facts.mjs';

test('clean text has no contradictions', () => {
  assert.deepEqual(findContradictions('De som-PFAS-norm is 0,1 microgram per liter.'), []);
});

test('contradictory PFAS value is flagged', () => {
  const issues = findContradictions('De som PFAS norm is 0,5 microgram per liter.');
  assert.ok(issues.some(i => /pfasSomNorm/.test(i)));
});

test('factLine renders a citable fact', () => {
  assert.match(factLine('pfasSomNorm'), /0,1 microgram\/L/);
  assert.equal(factLine('bestaat-niet'), '');
});

test('all facts have value and label', () => {
  for (const [k, f] of Object.entries(FACTS)) {
    assert.ok(f.value && f.label, `${k} complete`);
  }
});
