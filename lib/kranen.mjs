/**
 * PureAqua-kranen: centrale, controleerbare feiten voor de 4-in-1 kraan en de
 * zuiver-water-kranen (3-weg-kraan met The Source).
 *
 * Bron: interne productaudits (Shopify-catalogus en leveranciershandleidingen,
 * juli-augustus 2026), founderbevestigingen en de PureAqua-productpagina's.
 * Peildatum: september 2026.
 *
 * Bewust NIET opgenomen: "kokend water van 100 graden" (de 4-in-1 geeft circa 96
 * graden), "NSF-gecertificeerd systeem", een causale UV-claim ("UV doodt 99,9%"),
 * "zuiniger dan een waterkoker", bruisend water bij de 4-in-1, en voor The Source een
 * NSF/ANSI 58-certificering of "tot 99% van alle stoffen" (listing niet gekoppeld aan
 * de verkochte SKU). Zie BLOCKED_KRAAN_CLAIMS. Getest in test/kranen.test.mjs.
 */

export const FOUR_IN_ONE = {
  name: 'PureAqua 4-in-1 kraan',
  reviewPath: '/4-in-1-kraan',
  shopUrl: 'https://pureaqua.nl/products/pureaqua-4-in-1-kraan',
  price: '1.948 euro',
  priceSchema: '1948.00',
  installation: 'installatie optioneel voor 299 euro',
  functions: 'gewoon warm en koud kraanwater, plus gezuiverd water op kamertemperatuur, gekoeld en zeer heet (circa 96 graden)',
  hot: 'circa 96 graden; circa 1,2 liter direct beschikbaar uit een tank van 2,3 liter, na 3 tot 4 minuten weer op temperatuur',
  chilled: 'gekoeld tot circa 5 graden, tot 20 liter per uur',
  filtration: 'omgekeerde osmose in drie stappen: voorfilter, osmosemembraan en remineralisatie',
  underSink: 'twee apparaten onder de spoelbak (heet-/koelunit circa 23 x 44 x 40 cm en osmose-unit circa 15 x 38 x 47 cm) en twee stopcontacten',
  filters: 'voorfilter en remineralisatiefilter circa jaarlijks, osmosemembraan circa elke twee jaar (of eerder bij hoog gebruik)',
  // SGS-rapport op het complete osmosesysteem, nieuw (start-of-life), circa 1,6 l/min.
  lab: {
    PFOS: 'meer dan 99,6%',
    PFOA: '99,5%',
    lood: 'meer dan 99,8%',
    fluoride: '97,6%',
    microplastics: '99,99% (polystyreen, 3 micrometer)',
  },
  checkedAt: '2026-09-24',
};

export const THREE_WAY = {
  name: 'zuiver-water-kraan met The Source',
  reviewPath: '/the-source',
  shopUrl: 'https://pureaqua.nl/collections/zuiver-water-kranen',
  tapModels: '15 kraanmodellen',
  tapPrice: '540 tot 840 euro',
  sourcePrice: '395 euro',
  installation: 'installatie optioneel voor 299 euro',
  what: 'een 3-weg-kraan (warm, koud en gezuiverd water uit één kraan) met het osmosesysteem The Source onder het aanrecht',
  filters: 'één set van drie filters per jaar, 149 euro',
  checkedAt: '2026-09-24',
};

/** Marktvergelijking (PureAqua-prijzen van Quooker, Shopify-controle september 2026). */
export const KRAAN_MARKET = {
  quookerCube: { name: 'Quooker Flex PRO3 met CUBE', price: '2.240 euro', note: 'kokend, gekoeld en bruisend; filtert met actieve kool, geen omgekeerde osmose' },
  quookerBase: { name: 'Quooker Flex PRO3', price: '1.220 euro', note: 'alleen kokend water' },
  underSinkRange: '300 tot 800 euro plus installatie',
};

export const FOUR_IN_ONE_VERDICT =
  'Onze keuze voor 2026: de PureAqua 4-in-1 kraan is volgens ons het beste Quooker-alternatief met zuiver water';

export const THREE_WAY_VERDICT =
  'Onze keuze voor 2026: een zuiver-water-kraan met The Source is volgens ons de beste manier om osmosewater uit je eigen kraan te tappen';

export const FOUR_IN_ONE_CRITERIA = [
  'Zeer heet (circa 96 graden), gekoeld én osmose-gezuiverd water uit één kraan',
  'Onafhankelijk laboratorium (SGS): PFOS meer dan 99,6%, PFOA 99,5% en lood meer dan 99,8% minder, gemeten op een nieuw systeem',
  'Voor 1.948 euro; een Quooker Flex PRO3 met CUBE kost bij PureAqua 2.240 euro en filtert met actieve kool, niet met omgekeerde osmose',
  'Remineralisatie na de osmose en lekdetectie',
  'Installatie optioneel voor 299 euro',
];

export const THREE_WAY_CRITERIA = [
  'Osmosewater rechtstreeks uit je eigen keukenkraan, zonder aparte tapkraan ernaast',
  'Keuze uit 15 kraanmodellen en kleuren, van 540 tot 840 euro',
  'The Source onder het aanrecht, los vanaf 395 euro',
  'Onderhoud: één set van drie filters per jaar voor 149 euro',
  'Installatie optioneel voor 299 euro',
];

/** Formuleringen die niet in platformcopy mogen staan (vragen zijn toegestaan). */
export const BLOCKED_KRAAN_CLAIMS = [
  /pureaqua 4-in-1[^.?"]{0,120}(100 ?°|100 graden)(?![^.]*\?)/i,
  /pureaqua 4-in-1[^.?"]{0,120}(nsf-gecertificeerd|nsf\/ansi 58)(?![^.]*\?)/i,
  /pureaqua 4-in-1[^.?"]{0,120}(?<!(geen|zonder|niet) )bruisend(?![^.]*\?)/i,
  /pureaqua 4-in-1[^.?"]{0,120}zuiniger dan een waterkoker/i,
  /pureaqua 4-in-1[^.?"]{0,120}uv[^.?"]{0,60}99[,.]9/i,
  /the source[^.?"]{0,80}nsf(?![^.]*\?)/i,
  /the source[^.?"]{0,100}tot (circa )?99/i,
];

const ATTRIBUTION = /(onze keuze|volgens ons|onze aanbeveling|ons oordeel|wij vinden|raden wij)/i;

/** Controleer een tekst op geblokkeerde kraanclaims en onbeschreven superlatieven. */
export function findBlockedKraanClaims(text) {
  const hits = BLOCKED_KRAAN_CLAIMS.filter(re => re.test(text)).map(re => re.source);
  for (const sentence of text.split(/(?<=[.!?])\s+|\n/)) {
    const subject = /pureaqua 4-in-1|the source/i.test(sentence);
    const superlative = /(beste quooker-alternatief|beste osmosekraan|beste manier om osmosewater)/i.test(sentence);
    if (subject && superlative && !sentence.includes('?') && !ATTRIBUTION.test(sentence)) {
      hits.push('onbeschreven superlatief: ' + sentence.trim().slice(0, 80));
    }
  }
  return hits;
}

/** Alleen de The Source-regels (sitebreed gehandhaafd; 4-in-1-regels volgen na opschoning). */
export function findBlockedSourceClaims(text) {
  return findBlockedKraanClaims(text).filter(h => /the source/i.test(h));
}
