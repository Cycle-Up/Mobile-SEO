import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clampDescription } from '../lib/text.mjs';

test('short text is returned unchanged', () => {
  const s = 'Korte beschrijving.';
  assert.equal(clampDescription(s, 160), s);
});

test('long text is clamped to <= max and cut on a word boundary', () => {
  const s = 'a'.repeat(10) + ' ' + 'woord '.repeat(60); // ruim boven 160
  const out = clampDescription(s, 160);
  assert.ok(out.length <= 160, `length ${out.length} should be <= 160`);
  assert.ok(!/\s$/.test(out), 'no trailing whitespace');
  // Mag niet midden in een woord eindigen: laatste teken is geen losse letter na een afgekapt woord.
  assert.ok(!out.endsWith('woor'), 'should not cut mid-word when a space is near');
});

test('trailing punctuation/whitespace is trimmed', () => {
  const base = 'Zin een. Zin twee, met komma en streepje -';
  const padded = base + ' ' + 'x'.repeat(200);
  const out = clampDescription(padded, base.length + 1);
  assert.ok(!/[\s.,;:!?-]$/.test(out), 'no trailing punctuation/space');
});

test('respects a custom max', () => {
  const s = 'een twee drie vier vijf zes zeven acht negen tien';
  assert.ok(clampDescription(s, 20).length <= 20);
});
