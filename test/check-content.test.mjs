import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  RULES,
  parseFrontmatter,
  countWords,
  countInternalLinks,
  hasCta,
  validateArticle,
} from '../scripts/check-content.mjs';

function makeArticle({ title, description, date = '2026-05-29', slug = 'test', body }) {
  const fm = [
    '---',
    `title: "${title}"`,
    `description: "${description}"`,
    `date: "${date}"`,
    `slug: "${slug}"`,
    '---',
    '',
    body,
  ].join('\n');
  return fm;
}

const longBody =
  Array.from({ length: 750 }, (_, i) => `woord${i}`).join(' ') +
  '\n\nLees meer over [omgekeerde osmose](/omgekeerde-osmose) en een [osmosesysteem kopen](/omgekeerde-osmose/kopen).';

test('parseFrontmatter extracts key/value pairs', () => {
  const fm = parseFrontmatter('---\ntitle: "Hallo"\nslug: "x"\n---\nbody');
  assert.equal(fm.title, 'Hallo');
  assert.equal(fm.slug, 'x');
});

test('countWords ignores code fences and markdown punctuation', () => {
  const n = countWords('een twee drie\n```\ngenegeerd genegeerd\n```\nvier');
  assert.equal(n, 4);
});

test('countInternalLinks counts markdown links to internal paths', () => {
  assert.equal(countInternalLinks('[a](/x) en [b](/y/z) en [ext](https://x.nl)'), 2);
});

test('hasCta detects an osmose/kopen CTA', () => {
  assert.equal(hasCta('... [osmosesysteem kopen](/omgekeerde-osmose/kopen) ...'), true);
  assert.equal(hasCta('geen call to action hier'), false);
});

test('validateArticle: a well-formed article has no errors', () => {
  const raw = makeArticle({
    title: 'Een prima titel',
    description: 'Een nette beschrijving binnen de limiet.',
    body: longBody,
  });
  const { errors } = validateArticle(raw);
  assert.deepEqual(errors, []);
});

test('validateArticle: description over the limit is an error', () => {
  const raw = makeArticle({
    title: 'Titel',
    description: 'x'.repeat(RULES.maxDescriptionLength + 1),
    body: longBody,
  });
  const { errors } = validateArticle(raw);
  assert.ok(errors.some(e => e.includes('Description too long')));
});

test('validateArticle: too short and too few links are errors', () => {
  const raw = makeArticle({
    title: 'Titel',
    description: 'Korte beschrijving.',
    body: 'Veel te kort artikel met [een link](/omgekeerde-osmose).',
  });
  const { errors } = validateArticle(raw);
  assert.ok(errors.some(e => e.includes('Too short')));
  assert.ok(errors.some(e => e.includes('Too few internal links')));
});

test('validateArticle: missing frontmatter fields are errors', () => {
  const raw = '---\ntitle: "Alleen titel"\n---\n' + longBody;
  const { errors } = validateArticle(raw);
  assert.ok(errors.some(e => e.includes('Missing frontmatter: description')));
  assert.ok(errors.some(e => e.includes('Missing frontmatter: slug')));
});
