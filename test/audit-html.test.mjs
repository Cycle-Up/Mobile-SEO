import { test } from 'node:test';
import assert from 'node:assert/strict';
import { analyzeHtml } from '../scripts/audit-html.mjs';

const good = `<!doctype html><html><head>
<title>Titel</title>
<link rel="canonical" href="https://x.nl/a"/>
<meta name="description" content="Een nette korte beschrijving."/>
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article"}</script>
</head><body><h1>Kop</h1></body></html>`;

test('analyzeHtml: a well-formed page has no violations', () => {
  const r = analyzeHtml(good);
  assert.deepEqual(r.violations, []);
  assert.equal(r.canonical, 1);
  assert.equal(r.h1, 1);
  assert.equal(r.ldCount, 1);
});

test('analyzeHtml: flags missing canonical and double h1', () => {
  const html = '<head><title>T</title><meta name="description" content="d"></head><body><h1>a</h1><h1>b</h1></body>';
  const r = analyzeHtml(html);
  assert.ok(r.violations.some(v => v.startsWith('canonical=0')));
  assert.ok(r.violations.some(v => v.startsWith('h1=2')));
});

test('analyzeHtml: flags an over-long description', () => {
  const html = `<head><title>T</title><link rel="canonical" href="/x"><meta name="description" content="${'x'.repeat(200)}"></head><body><h1>a</h1></body>`;
  const r = analyzeHtml(html);
  assert.ok(r.violations.some(v => v.startsWith('description=200')));
});

test('analyzeHtml: flags invalid JSON-LD', () => {
  const html = '<head><title>T</title><link rel="canonical" href="/x"><meta name="description" content="d"></head><body><h1>a</h1><script type="application/ld+json">{bad json}</script></body>';
  const r = analyzeHtml(html);
  assert.ok(r.violations.some(v => v.includes('invalid JSON')));
});
