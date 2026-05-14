/**
 * Ping IndexNow after deploy to get all pages crawled within 24h.
 * Run once: node scripts/ping-indexnow.mjs
 *
 * Key file must be live at: https://waterfilterplatform.nl/647df179ed2746cfad25559632287896.txt
 */

const HOST = 'waterfilterplatform.nl';
const KEY = '647df179ed2746cfad25559632287896';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Fetch all URLs from the sitemap
async function getSitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  const xml = await res.text();
  const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
  return [...matches].map(m => m[1]);
}

async function pingIndexNow(urls) {
  // IndexNow allows max 10 000 URLs per request
  const BATCH = 10_000;
  for (let i = 0; i < urls.length; i += BATCH) {
    const batch = urls.slice(i, i + BATCH);
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: batch,
      }),
    });
    console.log(`Batch ${i / BATCH + 1}: ${res.status} ${res.statusText} (${batch.length} URLs)`);
  }
}

const urls = await getSitemapUrls();
console.log(`Found ${urls.length} URLs in sitemap`);
await pingIndexNow(urls);
