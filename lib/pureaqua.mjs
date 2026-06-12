/**
 * PureAqua (shop.pureaqua.nl) - centrale, geteste single source of truth voor alle
 * commerciele deep-links vanaf het platform naar de Shopify-store van onze partner.
 *
 * Waarom centraal: zo belandt er nooit een verzonnen of dode shop-URL in de site en
 * zijn alle links consistent getagd (UTM) en als affiliate gelabeld. buildShopUrl()
 * gooit een fout bij een onbekende bestemming, zodat fabricage onmogelijk is en de
 * affiliate-gate (scripts/check-affiliate.mjs) elke afwijking kan afdwingen.
 *
 * Alleen GEVERIFIEERDE bestemmingen staan in DESTINATIONS. Nieuwe collectie-/product-
 * handles worden pas toegevoegd nadat de canonieke URL door PureAqua is bevestigd
 * (zie PUREAQUA-CONVERSIE-PLAN.md, punt 9).
 *
 * Pure data + functies, getest in test/pureaqua.test.mjs.
 */

export const STORE = 'https://shop.pureaqua.nl';

// Allowlist van geverifieerde bestemmingen. type: 'store' | 'collection' | 'product'.
// evidenceStatus: 'verified' = canonieke URL bevestigd/aanwezig in de codebase.
export const DESTINATIONS = {
  store: {
    key: 'store',
    label: 'Bekijk het assortiment bij PureAqua',
    url: STORE,
    type: 'store',
    evidenceStatus: 'verified',
  },
  waterontharders: {
    key: 'waterontharders',
    label: 'Bekijk waterontharders bij PureAqua',
    url: `${STORE}/collections/waterontharders`,
    type: 'collection',
    evidenceStatus: 'verified',
  },
};

// Vaste UTM-velden; campagne/inhoud worden per aanroep meegegeven.
const UTM_SOURCE = 'waterfilterplatform';
const UTM_MEDIUM = 'affiliate';

/** Maak een slug-veilige UTM-waarde (lowercase, ASCII, koppeltekens). */
export function utmSlug(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Bouw een volledige, getagde shop-URL voor een bestemming uit de allowlist.
 * @param {keyof typeof DESTINATIONS} key
 * @param {{ campaign?: string, content?: string }} [opts]
 * @returns {string}
 */
export function buildShopUrl(key, { campaign = 'algemeen', content = '' } = {}) {
  const dest = DESTINATIONS[key];
  if (!dest) {
    throw new Error(`Onbekende PureAqua-bestemming: "${key}". Voeg eerst een geverifieerde URL toe aan DESTINATIONS.`);
  }
  const url = new URL(dest.url);
  url.searchParams.set('utm_source', UTM_SOURCE);
  url.searchParams.set('utm_medium', UTM_MEDIUM);
  url.searchParams.set('utm_campaign', utmSlug(campaign) || 'algemeen');
  if (content) url.searchParams.set('utm_content', utmSlug(content));
  return url.toString();
}

/** Alle geverifieerde shop-paden (zonder query) - gebruikt door de affiliate-gate. */
export function allowedShopPaths() {
  return Object.values(DESTINATIONS).map(d => new URL(d.url).pathname || '/');
}
