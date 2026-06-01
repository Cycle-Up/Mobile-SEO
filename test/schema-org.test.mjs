import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSchema } from '../lib/schema-org.mjs';

/** Render exactly like the component and re-parse, to prove the JSON-LD is valid. */
function emit(props) {
  const schemas = buildSchema(props);
  if (!schemas) return null;
  return schemas.map(s => JSON.parse(JSON.stringify(s)));
}

test('Article produces valid JSON-LD with the expected core fields', () => {
  const out = emit({
    type: 'Article',
    article: {
      title: 'Testartikel',
      description: 'Een testbeschrijving.',
      datePublished: '2026-05-31',
      url: 'https://waterfilterplatform.nl/test',
      sources: ['RIVM', 'Vewin'],
    },
  });
  assert.equal(out.length, 1);
  const a = out[0];
  assert.equal(a['@context'], 'https://schema.org');
  assert.equal(a['@type'], 'Article');
  assert.equal(a.headline, 'Testartikel');
  assert.equal(a.url, 'https://waterfilterplatform.nl/test');
  // dateModified defaults to datePublished.
  assert.equal(a.dateModified, '2026-05-31');
  assert.equal(a.inLanguage, 'nl-NL');
  assert.ok(a.author && a.publisher, 'author + publisher present');
  assert.equal(a.citation.length, 2);
  assert.equal(a.citation[0]['@type'], 'CreativeWork');
});

test('FAQPage maps each item to a Question/Answer', () => {
  const out = emit({
    type: 'FAQPage',
    faqItems: [
      { question: 'Vraag 1?', answer: 'Antwoord 1.' },
      { question: 'Vraag 2?', answer: 'Antwoord 2.' },
    ],
  });
  const f = out[0];
  assert.equal(f['@type'], 'FAQPage');
  assert.equal(f.mainEntity.length, 2);
  assert.equal(f.mainEntity[0]['@type'], 'Question');
  assert.equal(f.mainEntity[0].name, 'Vraag 1?');
  assert.equal(f.mainEntity[0].acceptedAnswer['@type'], 'Answer');
  assert.equal(f.mainEntity[0].acceptedAnswer.text, 'Antwoord 1.');
});

test('BreadcrumbList numbers positions from 1', () => {
  const out = emit({
    type: 'BreadcrumbList',
    breadcrumbs: [
      { name: 'Home', url: 'https://waterfilterplatform.nl' },
      { name: 'Grohe Red', url: 'https://waterfilterplatform.nl/grohe-red' },
    ],
  });
  const b = out[0];
  assert.equal(b['@type'], 'BreadcrumbList');
  assert.deepEqual(
    b.itemListElement.map(i => i.position),
    [1, 2],
  );
  assert.equal(b.itemListElement[1].name, 'Grohe Red');
  assert.equal(b.itemListElement[1].item, 'https://waterfilterplatform.nl/grohe-red');
});

test('ItemList passed via the generic schema prop gets an @context', () => {
  const out = emit({
    schema: [
      {
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'A', url: 'https://waterfilterplatform.nl/a' },
          { '@type': 'ListItem', position: 2, name: 'B', url: 'https://waterfilterplatform.nl/b' },
        ],
      },
    ],
  });
  assert.equal(out.length, 1);
  const l = out[0];
  assert.equal(l['@context'], 'https://schema.org');
  assert.equal(l['@type'], 'ItemList');
  assert.equal(l.itemListElement.length, 2);
});

test('Unknown/empty props render nothing', () => {
  assert.equal(buildSchema({}), null);
  assert.equal(buildSchema({ type: 'Article' }), null); // no article data
  assert.equal(buildSchema({ type: 'FAQPage' }), null); // no faqItems
});
