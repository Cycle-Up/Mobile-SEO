/**
 * PureAqua (pureaqua.nl) - centrale, geteste single source of truth voor alle
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

export const STORE = 'https://pureaqua.nl';

// Allowlist van geverifieerde bestemmingen (bron: PureAqua-linkbriefing 2026-06-13).
// type: 'store' | 'collection' | 'product' | 'page'. evidenceStatus 'verified' = canonieke
// URL door PureAqua bevestigd. Ankertekst varieren we per pagina via de `label`-prop van
// AffiliateCTA (zie anchors-suggesties in de comments); niet sitebreed dezelfde exacte tekst.
export const DESTINATIONS = {
  store: {
    key: 'store',
    label: 'Bekijk het assortiment bij PureAqua',
    url: STORE,
    type: 'store',
    evidenceStatus: 'verified',
  },
  // 1. PRIMAIR conversiepunt: osmosesysteem + kraan.
  // anchors: "osmosesysteem met kraan", "zuiver water kraan", "3-weg osmosekraan"
  zuiverWaterKranen: {
    key: 'zuiverWaterKranen',
    label: 'Bekijk de zuiver-water-kranen bij PureAqua',
    url: `${STORE}/collections/zuiver-water-kranen`,
    type: 'collection',
    evidenceStatus: 'verified',
  },
  // 2. Het osmosesysteem zelf. anchors: "The Source omgekeerde-osmosesysteem", "RO-systeem voor thuis"
  theSource: {
    key: 'theSource',
    label: 'Bekijk The Source bij PureAqua',
    url: `${STORE}/products/the-source`,
    type: 'product',
    evidenceStatus: 'verified',
  },
  // 3. 4-in-1 kraan (kokend + zuiver). anchors: "4-in-1 kraan met kokend en gefilterd water",
  // "alternatief voor een Quooker"
  vierInEen: {
    key: 'vierInEen',
    label: 'Bekijk de PureAqua 4-in-1 kraan',
    url: `${STORE}/products/pureaqua-4-in-1-kraan`,
    type: 'product',
    evidenceStatus: 'verified',
  },
  // 4. Plug & play osmose. anchors: "osmose-apparaat zonder installatie", "countertop osmosesysteem"
  countertopRo: {
    key: 'countertopRo',
    label: 'Bekijk de Countertop RO bij PureAqua',
    url: `${STORE}/products/countertop-ro`,
    type: 'product',
    evidenceStatus: 'verified',
  },
  // 5a. Waterontharder PRIMAIR. anchors: "Joep waterontharder", "compacte waterontharder zonder zout/stroom"
  joep: {
    key: 'joep',
    label: 'Bekijk de Joep waterontharder bij PureAqua',
    url: `${STORE}/products/joep-waterontharder`,
    type: 'product',
    evidenceStatus: 'verified',
  },
  // 5b. Waterontharder SECUNDAIR.
  aquacell: {
    key: 'aquacell',
    label: 'Bekijk de AquaCell waterontharder bij PureAqua',
    url: `${STORE}/products/aquacell-waterontharder`,
    type: 'product',
    evidenceStatus: 'verified',
  },
  // 5c. Waterontharder-collectie (voor roundups/overzichten).
  waterontharders: {
    key: 'waterontharders',
    label: 'Bekijk waterontharders bij PureAqua',
    url: `${STORE}/collections/waterontharders`,
    type: 'collection',
    evidenceStatus: 'verified',
  },
  // 6. Leadmagnet (EUR 5,95). anchors: "test je waterkwaliteit met een TDS-meter"
  tdsMeter: {
    key: 'tdsMeter',
    label: 'Test je waterkwaliteit met een TDS-meter',
    url: `${STORE}/products/tds-meter-test-uw-waterkwaliteit`,
    type: 'product',
    evidenceStatus: 'verified',
  },
  // Ondersteunend: pillar-gids en cluster-collecties (context-links/autoriteit).
  osmoseGids: {
    key: 'osmoseGids',
    label: 'Lees de osmose-gids van PureAqua',
    url: `${STORE}/pages/osmose-waterfilter`,
    type: 'page',
    evidenceStatus: 'verified',
  },
  osmoseSystemen: {
    key: 'osmoseSystemen',
    label: 'Bekijk de drinkwaterfiltersystemen bij PureAqua',
    url: `${STORE}/collections/drinkwaterfiltersystemen`,
    type: 'collection',
    evidenceStatus: 'verified',
  },
  kokendWaterKranen: {
    key: 'kokendWaterKranen',
    label: 'Bekijk de kokend-water-kranen bij PureAqua',
    url: `${STORE}/collections/kokend-water-kranen`,
    type: 'collection',
    evidenceStatus: 'verified',
  },
  filtersets: {
    key: 'filtersets',
    label: 'Bekijk de filtersets bij PureAqua',
    url: `${STORE}/collections/filterset-waterfiltersysteem`,
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

/**
 * Bouw de dataLayer-payload voor een klik op een PureAqua-shoplink. Pure functie,
 * gebruikt door components/AffiliateAnalytics.tsx (GTM/GA4-ready). Retourneert null
 * als de href geen pureaqua.nl-link is, zodat alleen relevante kliks tellen.
 * @param {string} href
 * @returns {null | {event:string, affiliate_partner:string, destination:string, utm_source:string, utm_medium:string, utm_campaign:string, utm_content:string, url:string}}
 */
export function affiliateClickPayload(href) {
  let url;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  if (url.hostname !== 'pureaqua.nl') return null;
  return {
    event: 'affiliate_click',
    affiliate_partner: 'pureaqua',
    destination: url.pathname || '/',
    utm_source: url.searchParams.get('utm_source') || '',
    utm_medium: url.searchParams.get('utm_medium') || '',
    utm_campaign: url.searchParams.get('utm_campaign') || '',
    utm_content: url.searchParams.get('utm_content') || '',
    url: url.href,
  };
}
