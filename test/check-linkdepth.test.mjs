import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeDepths } from '../scripts/check-linkdepth.mjs';

test('computeDepths does BFS from start', () => {
  const nodes = new Set(['/', '/a', '/a/x', '/b']);
  const edges = new Map([['/', ['/a']], ['/a', ['/a/x']]]);
  const d = computeDepths(nodes, edges, [], '/');
  assert.equal(d.get('/'), 0);
  assert.equal(d.get('/a'), 1);
  assert.equal(d.get('/a/x'), 2);
  assert.equal(d.get('/b'), undefined); // unreachable
});

test('global nav targets are reachable in 1 hop from anywhere', () => {
  const nodes = new Set(['/', '/a', '/hub', '/hub/deep']);
  const edges = new Map([['/', ['/a']], ['/hub', ['/hub/deep']]]);
  const d = computeDepths(nodes, edges, ['/hub'], '/');
  assert.equal(d.get('/hub'), 1);      // via global nav
  assert.equal(d.get('/hub/deep'), 2); // nav hub -> deep
});

test('nav edges only count for nodes that exist', () => {
  const nodes = new Set(['/']);
  const d = computeDepths(nodes, new Map(), ['/missing'], '/');
  assert.equal(d.get('/missing'), undefined);
});
