/**
 * PureAqua-productcatalogus voor het platform (kortere route naar product).
 *
 * Waarheidsgetrouw: alleen gegevens die al gepubliceerd/bevestigd zijn. Prijzen
 * staan er ALLEEN in als ze geverifieerd zijn (The Source: vanaf-prijs zoals
 * gepubliceerd op /the-source; TDS-meter: prijs uit de PureAqua-linkbriefing
 * 2026-06-13). Overige producten krijgen bewust GEEN prijs/Offer tot PureAqua
 * actuele prijzen bevestigt - geen verzonnen data (zie kwaliteitsstandaard).
 *
 * key verwijst naar de geverifieerde DESTINATIONS-allowlist in lib/pureaqua.mjs;
 * de affiliate-gate (scripts/check-affiliate.mjs) borgt dat links kloppen.
 * relatedEntity koppelt het product aan de gegronde kennisgraaf-entiteiten
 * (lib/entities.mjs). reviewHref is de interne, onafhankelijke context-pagina.
 *
 * Pure data + helper, getest in test/pureaqua-products.test.mjs.
 */

import { DESTINATIONS } from './pureaqua.mjs';

export const PRODUCTS = [
  {
    key: 'purefilterMineral',
    brand: 'PureFilter',
    shopName: 'PureFilter.nl',
    name: 'PureFilter Mineral+',
    category: 'Inline waterfilter onder het aanrecht',
    tagline: 'Compact filter op de koude leiding: geen tank, stroom of afvalwater. Labtest: circa 83-85% minder van vijf PFAS; voegt mineralen toe voor de smaak.',
    reviewHref: '/purefilter-review',
    reviewLabel: 'Lees onze PureFilter-review',
    relatedEntity: 'actiefkool',
    campaign: 'purefilter',
    // Prijs zoals gepubliceerd op PureFilter.nl (peildatum september 2026, zie lib/purefilter.mjs).
    price: '149.00',
    priceCurrency: 'EUR',
  },
  {
    key: 'vierInEen',
    brand: 'PureAqua',
    name: 'PureAqua 4-in-1 kraan',
    category: 'Kokendwaterkraan met filter',
    tagline: 'Kokend, koud, warm en gefilterd water uit een kraan. Alternatief voor een Quooker of Selsiuz.',
    reviewHref: '/4-in-1-kraan',
    reviewLabel: 'Lees onze uitleg over 4-in-1 kranen',
    relatedEntity: 'kokendwater',
    campaign: 'kokend-water',
  },
  {
    key: 'theSource',
    brand: 'PureAqua',
    name: 'The Source 50',
    category: 'Omgekeerde-osmosesysteem',
    tagline: 'Stroomloos osmosesysteem onder het aanrecht (NSF/ANSI 58, circa 1:1 verhouding), voor huishoudens tot 4 personen.',
    reviewHref: '/the-source',
    reviewLabel: 'Lees onze The Source-review',
    relatedEntity: 'osmose',
    campaign: 'omgekeerde-osmose',
    // Vanaf-prijs + beschikbaarheid zoals gepubliceerd op /the-source (aanbieder-opgave).
    price: '395.00',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  {
    key: 'countertopRo',
    brand: 'PureAqua',
    name: 'Water zuiver apparaat (Countertop)',
    category: 'Osmose-apparaat zonder installatie',
    tagline: 'Onze keuze als beste countertop-osmose: omgekeerde osmose met remineralisatie en zes temperatuurstanden tot 95 graden, zonder installatie.',
    reviewHref: '/countertop-osmose',
    reviewLabel: 'Lees onze countertop-koopgids',
    relatedEntity: 'osmose',
    campaign: 'omgekeerde-osmose',
    // Prijs bij PureAqua (Shopify-controle 24-09-2026).
    price: '495.00',
    priceCurrency: 'EUR',
  },
  {
    key: 'joep',
    brand: 'JOEP',
    name: 'Joep waterontharder',
    category: 'Waterontharder',
    tagline: 'Onze aanbeveling bij hard water: compacte ontharder met zout van AquaSens, tot 5 m3 per uur. 1.699 euro, of 1.998 euro compleet geïnstalleerd door PureAqua.',
    reviewHref: '/joep-waterontharder',
    reviewLabel: 'Lees onze Joep-beoordeling',
    relatedEntity: 'hardheid',
    campaign: 'waterontharder',
    // Prijs zonder installatie; met installatie 1.998 euro (bevestigd door PureAqua, 24-09-2026).
    price: '1699.00',
    priceCurrency: 'EUR',
  },
  {
    key: 'aquacell',
    brand: 'Aquacell',
    name: 'AquaCell waterontharder',
    category: 'Waterontharder',
    tagline: 'Alternatieve waterontharder in het PureAqua-assortiment.',
    reviewHref: '/aquacell-waterontharder',
    reviewLabel: 'Lees onze AquaCell-pagina',
    relatedEntity: 'hardheid',
    campaign: 'waterontharder',
  },
  {
    key: 'tdsMeter',
    name: 'TDS-meter',
    category: 'Watertest',
    tagline: 'Meet in seconden het aantal opgeloste deeltjes (TDS) in je kraanwater; laagdrempelige eerste stap.',
    reviewHref: '/uitleg/wat-betekent-tds-meting',
    reviewLabel: 'Lees wat een TDS-meting betekent',
    relatedEntity: 'drinkwater',
    campaign: 'water-testen',
    // Prijs uit de PureAqua-linkbriefing (2026-06-13).
    price: '5.95',
    priceCurrency: 'EUR',
  },
];

// PureAqua als verkoper/partner-entiteit (zelfde @id als in de Organization-sponsor).
export const PUREAQUA_ORG = {
  '@type': 'Organization',
  '@id': 'https://pureaqua.nl/#organization',
  name: 'PureAqua',
  url: 'https://pureaqua.nl',
};

// PureFilter.nl: webshop van PureAqua voor het losse PureFilter-inline-filter.
export const PUREFILTER_ORG = {
  '@type': 'Organization',
  '@id': 'https://purefilter.nl/#organization',
  name: 'PureFilter.nl',
  url: 'https://purefilter.nl',
  parentOrganization: { '@id': 'https://pureaqua.nl/#organization' },
};

/** Naam van de winkel waar het product verkocht wordt (standaard PureAqua). */
export function shopNameFor(p) {
  return p.shopName || 'PureAqua';
}

/**
 * Bouw een schema.org Product-node voor een catalogus-item. Waarheidsgetrouw:
 * merk per product (PureAqua is bij Joep/AquaCell de verkoper, niet het merk),
 * Offer alleen bij geverifieerde prijs (met PureAqua als seller), en subjectOf
 * naar onze interne, onafhankelijke context-pagina (kennisgraaf-koppeling).
 * @param {typeof PRODUCTS[number]} p
 * @returns {object}
 */
export function buildProductSchema(p) {
  const dest = DESTINATIONS[p.key];
  return {
    '@type': 'Product',
    name: p.name,
    description: p.tagline,
    category: p.category,
    url: dest.url,
    ...(p.brand ? { brand: { '@type': 'Brand', name: p.brand } } : {}),
    subjectOf: { '@type': 'WebPage', url: `https://waterfilterplatform.nl${p.reviewHref}` },
    ...(p.price
      ? {
          offers: {
            '@type': 'Offer',
            price: p.price,
            priceCurrency: p.priceCurrency,
            ...(p.availability ? { availability: p.availability } : {}),
            url: dest.url,
            seller: p.shopName === 'PureFilter.nl' ? PUREFILTER_ORG : PUREAQUA_ORG,
          },
        }
      : {}),
  };
}
