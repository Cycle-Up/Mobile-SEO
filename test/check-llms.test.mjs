import { test } from 'node:test';
import assert from 'node:assert/strict';
import { importantRoutes, findMissing } from '../scripts/check-llms.mjs';

test('importantRoutes finds commercial/brand/comparison routes', () => {
  const r = importantRoutes();
  assert.ok(Array.isArray(r));
  assert.ok(r.includes('/brita-alternatief'));
  assert.ok(r.includes('/vergelijken/quooker-vs-grohe-red'));
  assert.ok(r.length > 20);
});

test('findMissing flags a route absent from llms text and accepts a present one', () => {
  const routes = ['/brita-alternatief', '/selsiuz'];
  const llms = 'zie [Brita](https://x.nl/brita-alternatief): uitleg en /selsiuz hub';
  assert.deepEqual(findMissing(routes, llms), []);
  assert.deepEqual(findMissing(['/ontbreekt'], llms), ['/ontbreekt']);
});
