/**
 * Kies gerelateerde kennisbankartikelen op basis van overlappende slug-tokens.
 *
 * pickRelated levert de meest verwante artikelen ("gerelateerde vragen") zodat
 * AI-systemen en lezers verwante content vinden en de interne linkstructuur
 * dichter wordt (topical authority, ook cross-cluster).
 *
 * Pure functie, getest in test/related.test.mjs.
 */

const STOPWORDS = new Set([
  'water', 'kraanwater', 'met', 'voor', 'de', 'het', 'een', 'in', 'je', 'en',
  'van', 'of', 'is', 'wat', 'hoe', 'op', 'bij', 'per', 'naar', 'zonder',
]);

export function tokens(slug) {
  return String(slug || '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(t => t.length >= 3 && !STOPWORDS.has(t));
}

/**
 * @param {string} currentSlug
 * @param {{slug:string, title?:string}[]} articles
 * @param {number} n
 * @returns {{slug:string, title:string}[]}
 */
export function pickRelated(currentSlug, articles, n = 4) {
  const cur = new Set(tokens(currentSlug));
  if (cur.size === 0) return [];
  const scored = [];
  for (const a of articles) {
    if (!a || a.slug === currentSlug) continue;
    const overlap = tokens(a.slug).filter(t => cur.has(t)).length;
    if (overlap > 0) scored.push({ slug: a.slug, title: a.title || a.slug, score: overlap });
  }
  scored.sort((x, y) => (y.score - x.score) || x.slug.localeCompare(y.slug));
  return scored.slice(0, n).map(({ slug, title }) => ({ slug, title }));
}
