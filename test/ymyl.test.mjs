import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isYmyl, YMYL_KEYWORDS } from '../lib/ymyl.mjs';

test('health/safety slugs are classified as YMYL', () => {
  const ymylSlugs = [
    'osmose-water-gezond',
    'drinkwater-baby',
    'pfas-drinkwater',
    'lood-drinkwater',
    'waterfilter-legionella',
    'drinkwater-microbioom-darm',
    'osmose-water-diabetes-type2',
    'nierstenen-water-hardheid',
    'drinkwater-fluoride',
    'waterfilter-hormonen-medicijnen',
  ];
  for (const s of ymylSlugs) {
    assert.equal(isYmyl(s), true, `${s} should be YMYL`);
  }
});

test('non-health product/appliance slugs are not YMYL', () => {
  const safe = [
    'kalk-koffiemachine',
    'kraanwater-ijsthee',
    'waterfilter-stoomoven',
    'kraanwater-limonade-zelf-maken',
    'waterontharder-zout-kopen',
    'sodastream-co2',
    'osmose-water-koffie-smaak',
    'waterfilter-strijkijzer-stoom',
  ];
  for (const s of safe) {
    assert.equal(isYmyl(s), false, `${s} should NOT be YMYL`);
  }
});

test('frontmatter override wins over the heuristic', () => {
  // Forced on for a slug that otherwise would not match.
  assert.equal(isYmyl('kalk-koffiemachine', { ymyl: true }), true);
  assert.equal(isYmyl('kalk-koffiemachine', { ymyl: 'true' }), true);
  // Forced off for a slug that otherwise matches a keyword.
  assert.equal(isYmyl('drinkwater-baby', { ymyl: false }), false);
  assert.equal(isYmyl('drinkwater-baby', { ymyl: 'low' }), false);
  // Unrecognised override value falls back to the heuristic.
  assert.equal(isYmyl('drinkwater-baby', { ymyl: 'maybe' }), true);
});

test('keyword list is non-empty and lowercase', () => {
  assert.ok(YMYL_KEYWORDS.length > 10);
  for (const k of YMYL_KEYWORDS) assert.equal(k, k.toLowerCase());
});
