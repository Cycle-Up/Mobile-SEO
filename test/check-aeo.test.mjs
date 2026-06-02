import { test } from 'node:test';
import assert from 'node:assert/strict';
import { missingBots, AI_BOTS } from '../scripts/check-aeo.mjs';

test('no missing bots when both files list all', () => {
  const all = AI_BOTS.join(' ');
  assert.deepEqual(missingBots(all, all), []);
});

test('flags a bot missing from robots', () => {
  const all = AI_BOTS.join(' ');
  const robotsWithout = AI_BOTS.filter(b => b !== 'GPTBot').join(' ');
  const miss = missingBots(robotsWithout, all);
  assert.ok(miss.some(i => /robots\.ts mist GPTBot/.test(i)));
});

test('flags a bot missing from ai.txt', () => {
  const all = AI_BOTS.join(' ');
  const aiWithout = AI_BOTS.filter(b => b !== 'ClaudeBot').join(' ');
  const miss = missingBots(all, aiWithout);
  assert.ok(miss.some(i => /ai\.txt mist ClaudeBot/.test(i)));
});
