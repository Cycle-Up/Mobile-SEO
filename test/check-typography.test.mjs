import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countBanned, evaluate } from '../scripts/check-typography.mjs';

test('countBanned counts smart quotes, dashes and ellipsis', () => {
  assert.equal(countBanned('gewoon ascii "quotes" en - koppelteken'), 0);
  assert.equal(countBanned('zo’n ding'), 1);          // right single quote
  assert.equal(countBanned('“hallo”'), 2);        // double smart quotes
  assert.equal(countBanned('bereik 3–4 liter'), 1);    // en dash
  assert.equal(countBanned('pauze — en verder'), 1);   // em dash
  assert.equal(countBanned('en zo verder…'), 1);       // ellipsis
});

test('evaluate fails when the count rises above baseline', () => {
  assert.equal(evaluate(100, 100).ok, true);
  assert.equal(evaluate(101, 100).ok, false);
  assert.equal(evaluate(101, 100).exceeded, 1);
});

test('evaluate flags improvement when count drops below baseline', () => {
  const r = evaluate(90, 100);
  assert.equal(r.ok, true);
  assert.equal(r.improved, true);
});
