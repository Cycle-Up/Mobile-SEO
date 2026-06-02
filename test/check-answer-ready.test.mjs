import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isDefinitionSlug, opensWithDefinition, questionHeadingRatio } from '../scripts/check-answer-ready.mjs';

test('isDefinitionSlug detects definition-style slugs', () => {
  assert.equal(isDefinitionSlug('wat-is-osmosewater'), true);
  assert.equal(isDefinitionSlug('osmose-water-uitleg'), true);
  assert.equal(isDefinitionSlug('kraanwater-ijsthee'), false);
});

test('opensWithDefinition checks the first sentences for a definition cue', () => {
  assert.equal(opensWithDefinition('Osmosewater is water dat door een membraan is gezuiverd. Meer...'), true);
  assert.equal(opensWithDefinition('Veel mensen vragen zich af hoe het zit. Daarna leggen we uit...'), false);
});

test('questionHeadingRatio counts question headings', () => {
  const raw = '## Wat kost het?\n\ntekst\n\n## Kosten\n\ntekst\n\n### Is het veilig?\n';
  const r = questionHeadingRatio(raw);
  assert.equal(r.total, 3);
  assert.equal(r.questions, 2);
  assert.ok(Math.abs(r.ratio - 2 / 3) < 1e-9);
});
