import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  routeToSourceFile,
  pickLastModified,
  mdxFrontmatterDate,
} from '../lib/sitemap-dates.mjs';
import fs from 'fs';
import os from 'os';
import path from 'path';

test('routeToSourceFile maps the homepage to app/page.tsx', () => {
  assert.equal(routeToSourceFile('/'), 'app/page.tsx');
  assert.equal(routeToSourceFile(''), 'app/page.tsx');
});

test('routeToSourceFile maps nested routes to their page.tsx', () => {
  assert.equal(routeToSourceFile('/grohe-red'), 'app/grohe-red/page.tsx');
  assert.equal(routeToSourceFile('/vergelijken/bwt-vs-brita'), 'app/vergelijken/bwt-vs-brita/page.tsx');
  assert.equal(routeToSourceFile('/grohe-red/'), 'app/grohe-red/page.tsx');
});

test('pickLastModified prefers a valid frontmatter date', () => {
  const buildDate = new Date('2026-01-01T00:00:00Z');
  const gitDate = new Date('2026-03-01T00:00:00Z');
  const out = pickLastModified({ frontmatterDate: '2026-05-31', gitDate, buildDate });
  assert.equal(out.toISOString().slice(0, 10), '2026-05-31');
});

test('pickLastModified falls back to git date, then build date', () => {
  const buildDate = new Date('2026-01-01T00:00:00Z');
  const gitDate = new Date('2026-03-01T00:00:00Z');
  assert.equal(pickLastModified({ gitDate, buildDate }).toISOString(), gitDate.toISOString());
  assert.equal(pickLastModified({ buildDate }).toISOString(), buildDate.toISOString());
  // Invalid frontmatter date is ignored.
  assert.equal(pickLastModified({ frontmatterDate: 'not-a-date', buildDate }).toISOString(), buildDate.toISOString());
});

test('mdxFrontmatterDate reads the date field, returns null when absent', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mdxdate-'));
  const withDate = path.join(dir, 'a.mdx');
  fs.writeFileSync(withDate, '---\ntitle: "X"\ndate: "2026-04-15"\nslug: "x"\n---\nBody');
  assert.equal(mdxFrontmatterDate(withDate), '2026-04-15');

  const noDate = path.join(dir, 'b.mdx');
  fs.writeFileSync(noDate, '---\ntitle: "Y"\nslug: "y"\n---\nBody');
  assert.equal(mdxFrontmatterDate(noDate), null);

  assert.equal(mdxFrontmatterDate(path.join(dir, 'missing.mdx')), null);
});
