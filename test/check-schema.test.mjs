import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateSchemaObject, REQUIRED_FIELDS } from '../scripts/check-schema.mjs';

test('valid Article passes', () => {
  const obj = {
    '@type': 'Article',
    headline: 'Titel',
    datePublished: '2026-01-01',
    author: { '@type': 'Organization' },
    publisher: { '@type': 'Organization' },
    inLanguage: 'nl-NL',
    mainEntityOfPage: { '@id': 'x' },
  };
  assert.deepEqual(validateSchemaObject(obj), []);
});

test('Article missing a required field is flagged', () => {
  const obj = { '@type': 'Article', headline: 'Titel' };
  const issues = validateSchemaObject(obj);
  assert.ok(issues.length > 0);
  assert.ok(issues.some(i => /datePublished/.test(i)));
});

test('unknown type is ignored', () => {
  assert.deepEqual(validateSchemaObject({ '@type': 'Recipe', name: 'x' }), []);
});

test('every required-field list is non-empty', () => {
  for (const [t, fields] of Object.entries(REQUIRED_FIELDS)) {
    assert.ok(fields.length > 0, `${t} should require fields`);
  }
});
