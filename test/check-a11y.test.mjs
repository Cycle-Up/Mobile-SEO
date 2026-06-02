import { test } from 'node:test';
import assert from 'node:assert/strict';
import { auditPageHtml } from '../scripts/check-a11y.mjs';

test('page with breadcrumb and alt-images passes', () => {
  const html = '<script type="application/ld+json">{"@type":"BreadcrumbList"}</script><img src="a" alt="beschrijving">';
  assert.deepEqual(auditPageHtml('kennisbank/x.html', html), []);
});

test('missing breadcrumb is flagged on content pages', () => {
  const issues = auditPageHtml('kennisbank/x.html', '<p>geen schema</p>');
  assert.ok(issues.some(i => /BreadcrumbList/.test(i)));
});

test('home and error pages may omit breadcrumb', () => {
  assert.deepEqual(auditPageHtml('index.html', '<p>home</p>'), []);
  assert.deepEqual(auditPageHtml('_not-found.html', '<p>404</p>'), []);
});

test('img without alt is flagged', () => {
  const html = '<script>{"@type":"BreadcrumbList"}</script><img src="a">';
  const issues = auditPageHtml('x.html', html);
  assert.ok(issues.some(i => /img.*alt/.test(i)));
});
