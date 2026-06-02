import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findEntityIssues, CANONICAL } from '../scripts/check-entity.mjs';

test('consistent inputs yield no issues', () => {
  const inputs = [
    { file: 'a', text: `Welkom bij ${CANONICAL.name} - ${CANONICAL.url}` },
    { file: 'b', text: `${CANONICAL.name} is onafhankelijk.` },
  ];
  assert.deepEqual(findEntityIssues(inputs), []);
});

test('missing canonical name is flagged', () => {
  const issues = findEntityIssues([{ file: 'x', text: 'geen merknaam hier' }]);
  assert.equal(issues.length, 1);
  assert.match(issues[0], /ontbreekt/);
});

test('banned variant (name with space) is flagged', () => {
  const issues = findEntityIssues([{ file: 'x', text: `${CANONICAL.name} en Waterfilter Platform` }]);
  assert.ok(issues.some(i => /variant/.test(i)));
});

test('wrong TLD variant is flagged', () => {
  const issues = findEntityIssues([{ file: 'x', text: `${CANONICAL.name} op waterfilterplatform.com` }]);
  assert.ok(issues.some(i => /variant/.test(i)));
});
