import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TREES, flattenOutcomes } from '../lib/decisiontrees.mjs';

test('every tree has an intro and a root node with options', () => {
  for (const [key, t] of Object.entries(TREES)) {
    assert.ok(t.intro && t.intro.length > 0, `${key} has intro`);
    assert.ok(t.node && Array.isArray(t.node.options) && t.node.options.length >= 2, `${key} has options`);
  }
});

test('flattenOutcomes returns results with title/advice/href', () => {
  for (const [key, t] of Object.entries(TREES)) {
    const outcomes = flattenOutcomes(t.node);
    assert.ok(outcomes.length >= 2, `${key} has outcomes`);
    for (const o of outcomes) {
      assert.ok(o.title && o.advice, `${key} outcome complete`);
      assert.ok(o.href.startsWith('/'), `${key} outcome links internally`);
    }
  }
});
