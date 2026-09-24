/**
 * PureAqua Water zuiver apparaat (Countertop): centrale, controleerbare productfeiten.
 *
 * Een bron van waarheid voor de koopgids (/countertop-osmose), CTA-blokken en
 * vergelijkingen. Bron: PureAqua-productpagina en Shopify (prijs, 24-09-2026) en de
 * fabrikantspecificaties van het onderliggende product (door PureAqua bevestigde
 * productfamilie). Peildatum: september 2026.
 *
 * Bewust NIET opgenomen (niet aantoonbaar voor de geleverde unit): "kokend water"
 * (maximum is 95 graden), NSF-/IAPMO-certificering, universele 99%- of PFAS-claims,
 * een gegarandeerde filterduur van 12 maanden, garantie- en proefbadges, en de naam
 * van de toeleverancier (merkrecht niet vastgelegd). Zie BLOCKED_COUNTERTOP_CLAIMS.
 *
 * Getest in test/countertop.test.mjs.
 */

export const COUNTERTOP = {
  name: 'PureAqua Water zuiver apparaat',
  shortName: 'Water zuiver apparaat',
  reviewPath: '/countertop-osmose',
  shopUrl: 'https://pureaqua.nl/products/water-zuiver-apparaat',
  price: '495 euro',
  priceSchema: '495.00',
  technique: 'omgekeerde osmose met een 7-in-1-cartridge en remineralisatie',
  temperatures: 'zes standen: kamertemperatuur, 45, 55, 65, 85 en maximaal 95 graden',
  maxTemp: '95 graden',
  installation: 'geen vaste installatie: stekker erin, tank vullen, klaar',
  capacity: 'circa 12 liter gefilterd water per uur',
  tanks: 'ruwwatertank van circa 3,2 liter en een uitneembare schoonwatertank van circa 1,2 liter',
  portions: 'porties van 150 ml, 300 ml of doorlopend',
  dimensions: 'circa 30 x 22 x 35 cm',
  power: '2.150 W (verwarming), 220-240 V',
  filterLife: 'tot 1.200 liter of maximaal 12 maanden, eerder als de filterindicator dat aangeeft',
  checkedAt: '2026-09-24',
};

/** Marktvergelijking (peildatum september 2026), alleen publiek controleerbare prijzen. */
export const COUNTERTOP_MARKET = {
  comparable: {
    name: 'AquaTru Classic',
    price: '475 euro',
    note: 'zonder verwarming, tank van 2,7 liter',
    source: 'bol.com',
  },
};

/** Het redactionele oordeel, altijd toegeschreven aan het platform. */
export const COUNTERTOP_VERDICT =
  'Onze keuze voor 2026: het PureAqua Water zuiver apparaat is volgens ons de beste countertop-osmose voor Nederland';

/** De criteria waarop het platform deze countertop aanbeveelt. */
export const COUNTERTOP_CRITERIA = [
  'Omgekeerde osmose zonder installatie: geen boren, geen leidingwerk, ideaal voor huurwoning of appartement',
  'Zes temperatuurstanden tot 95 graden: gefilterd water voor thee en koffie uit hetzelfde apparaat',
  'Remineralisatie na de osmose, voor een vollere smaak',
  'Voor 495 euro: 20 euro meer dan een AquaTru Classic (475 euro, zonder verwarming)',
  'Porties van 150 ml, 300 ml of doorlopend, en een uitneembare schoonwatertank',
];

/** Formuleringen die niet in platformcopy over dit apparaat mogen staan (vragen zijn toegestaan). */
export const BLOCKED_COUNTERTOP_CLAIMS = [
  /(water zuiver apparaat|pureaqua countertop)[^.?"]{0,100}kokend(?![^.]*\?)/i,
  /(water zuiver apparaat|pureaqua countertop)[^.?"]{0,100}nsf(?![^.]*\?)/i,
  /(water zuiver apparaat|pureaqua countertop)[^.?"]{0,100}99[,.]?9?\s*%(?![^.]*\?)/i,
  /(water zuiver apparaat|pureaqua countertop)[^.?"]{0,100}pfas-vrij(?![^.]*\?)/i,
  /(water zuiver apparaat|pureaqua countertop)[^.?"]{0,100}(tappwater|bluewater)(?![^.]*\?)/i,
];

const SUPERLATIVE = /beste countertop/i;
const ATTRIBUTION = /(onze keuze|volgens ons|onze aanbeveling|ons oordeel|wij vinden|raden wij)/i;

/** Controleer een tekst op geblokkeerde claims over het Water zuiver apparaat. */
export function findBlockedCountertopClaims(text) {
  const hits = BLOCKED_COUNTERTOP_CLAIMS.filter(re => re.test(text)).map(re => re.source);
  for (const sentence of text.split(/(?<=[.!?])\s+|\n/)) {
    if (/water zuiver apparaat/i.test(sentence) && SUPERLATIVE.test(sentence) && !sentence.includes('?') && !ATTRIBUTION.test(sentence)) {
      hits.push('onbeschreven superlatief: ' + sentence.trim().slice(0, 80));
    }
  }
  return hits;
}
