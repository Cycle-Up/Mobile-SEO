import { test } from 'node:test';
import assert from 'node:assert/strict';

// Smoke test: confirms the Node built-in test runner is wired up and that the
// content checker module imports without executing its CLI scan.
test('test harness runs', () => {
  assert.equal(1 + 1, 2);
});

test('check-content module is importable without running the CLI', async () => {
  const mod = await import('../scripts/check-content.mjs');
  assert.equal(typeof mod.validateArticle, 'function');
  assert.equal(typeof mod.RULES, 'object');
});
