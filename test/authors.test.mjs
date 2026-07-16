import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  AUTHORS,
  DEFAULT_AUTHOR,
  REVIEW_TEAM,
  authorUrl,
  buildPersonSchema,
  buildReviewTeamSchema,
} from '../lib/authors.mjs';

test('every author has the required registry fields', () => {
  for (const [key, a] of Object.entries(AUTHORS)) {
    assert.equal(a.key, key, `${key}: key matches map key`);
    for (const field of ['slug', 'name', 'role', 'shortBio', 'profilePath']) {
      assert.ok(a[field], `${key}: ${field} present`);
    }
    assert.ok(Array.isArray(a.credentials) && a.credentials.length > 0, `${key}: credentials`);
    assert.ok(Array.isArray(a.knowsAbout) && a.knowsAbout.length > 0, `${key}: knowsAbout`);
    assert.ok(a.profilePath.startsWith('/redactie/'), `${key}: profile under /redactie`);
    assert.ok(a.profilePath.endsWith(a.slug), `${key}: profilePath endswith slug`);
  }
});

test('default author is Jeroen Dijkstra', () => {
  assert.equal(DEFAULT_AUTHOR.name, 'Jeroen Dijkstra');
});

test('authorUrl builds an absolute canonical URL', () => {
  assert.equal(authorUrl(DEFAULT_AUTHOR), 'https://waterfilterplatform.nl/redactie/jeroen-dijkstra');
});

test('buildPersonSchema emits a valid Person node', () => {
  const p = buildPersonSchema();
  assert.equal(p['@type'], 'Person');
  assert.ok(p['@id'].endsWith('#person'));
  assert.equal(p.name, DEFAULT_AUTHOR.name);
  assert.equal(p.url, authorUrl(DEFAULT_AUTHOR));
  assert.ok(p.jobTitle, 'jobTitle present');
  assert.ok(Array.isArray(p.alumniOf) && p.alumniOf.length >= 1, 'alumniOf present');
  assert.ok(p.alumniOf.every(o => o['@type'] === 'EducationalOrganization'), 'alumniOf typed');
  assert.ok(Array.isArray(p.sameAs) && p.sameAs.length >= 1, 'sameAs present');
  for (const url of p.sameAs) assert.match(url, /^https:\/\//, 'sameAs absolute https');
  assert.equal(p.worksFor['@id'], 'https://waterfilterplatform.nl/#organization');
});

test('buildReviewTeamSchema emits a valid Organization node', () => {
  const o = buildReviewTeamSchema();
  assert.equal(o['@type'], 'Organization');
  assert.equal(o.name, REVIEW_TEAM.name);
  assert.equal(o.url, 'https://waterfilterplatform.nl/redactie');
});

test('sameAs contains no guessed profile hosts', () => {
  // Alleen bevestigde persoonspagina's; een kapotte of gegokte URL schaadt trust.
  const allowedHosts = ['www.linkedin.com', 'www.pureaqua.nl', 'blog.pureaqua.nl', 'transmission.frl'];
  for (const a of Object.values(AUTHORS)) {
    for (const url of a.sameAs ?? []) {
      const host = new URL(url).host;
      assert.ok(allowedHosts.includes(host), `unexpected sameAs host: ${host}`);
    }
  }
});
