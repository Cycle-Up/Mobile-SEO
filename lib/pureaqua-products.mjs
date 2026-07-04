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
    name: 'Countertop RO',
    category: 'Osmose-apparaat zonder installatie',
    tagline: 'Plug-and-play osmose-apparaat voor op het aanrecht; geen installatie nodig, ideaal voor huur of studentenkamer.',
    reviewHref: '/omgekeerde-osmose',
    reviewLabel: 'Lees hoe omgekeerde osmose werkt',
    relatedEntity: 'osmose',
    campaign: 'omgekeerde-osmose',
  },
  {
    key: 'joep',
    brand: 'JOEP',
    name: 'Joep waterontharder',
    category: 'Waterontharder',
    tagline: 'Compacte waterontharder van AquaSens; de aanrader van onze partner voor de meeste huishoudens.',
    reviewHref: '/joep-waterontharder',
    reviewLabel: 'Lees onze Joep-beoordeling',
    relatedEntity: 'hardheid',
    campaign: 'waterontharder',
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
            seller: PUREAQUA_ORG,
          },
        }
      : {}),
  };
}
