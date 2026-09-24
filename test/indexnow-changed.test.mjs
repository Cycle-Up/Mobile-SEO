import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { changedUrls, KEY } from '../scripts/indexnow-changed.mjs';

test('maps changed files to public URLs', () => {
  const urls = changedUrls([
    'app/page.tsx',
    'app/joep-waterontharder/page.tsx',
    'app/waterhardheid/[gemeente]/page.tsx',
    'content/kennisbank/pfas-in-drinkwater.mdx',
    'README.md',
  ]);
  assert.deepEqual(urls, [
    'https://waterfilterplatform.nl/',
    'https://waterfilterplatform.nl/joep-waterontharder',
    'https://waterfilterplatform.nl/kennisbank/pfas-in-drinkwater',
  ]);
});

test('lib changes re-announce the product fact pages', () => {
  const urls = changedUrls(['lib/joep.mjs']);
  assert.ok(urls.includes('https://waterfilterplatform.nl/joep-waterontharder'));
  assert.ok(urls.includes('https://waterfilterplatform.nl/4-in-1-kraan'));
});

test('IndexNow key file is published', () => {
  assert.equal(fs.readFileSync(`public/${KEY}.txt`, 'utf-8').trim(), KEY);
});
