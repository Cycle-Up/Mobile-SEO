/**
 * JOEP waterontharder: centrale, controleerbare productfeiten voor alle pagina's.
 *
 * Een bron van waarheid zodat de Joep-pagina, CTA-blokken, gemeentepagina's en
 * vergelijkingen overal dezelfde feiten noemen. Bron: officiele Joep-productpagina
 * en voorwaarden (AquaSens); prijzen door PureAqua bevestigd op 24 september 2026.
 * Peildatum: september 2026.
 *
 * Bewust NIET opgenomen (niet aantoonbaar voor de Joep-handelsnaam of het PureAqua-
 * pakket): WRAS-certificering, "geschikt voor ieder huishouden", "onderhoudsvrij",
 * besparingspercentages, gezondheidsclaims (huid/eczeem) en PureAqua-garantie- of
 * proefbadges. Zie BLOCKED_JOEP_CLAIMS.
 *
 * Getest in test/joep.test.mjs.
 */

export const JOEP = {
  name: 'JOEP waterontharder',
  brandOwner: 'AquaSens',
  reviewPath: '/joep-waterontharder',
  shopUrl: 'https://pureaqua.nl/products/joep-waterontharder',
  // Prijzen bij PureAqua, door PureAqua bevestigd op 24 september 2026 (incl. btw).
  devicePrice: '1.699 euro',
  devicePriceSchema: '1699.00',
  installedPrice: '1.998 euro',
  installedPriceSchema: '1998.00',
  type: 'Ionenwisselaar met zout (een harstank met zoutbak)',
  dimensions: '48 x 27 x 48,5 cm (h x b x d)',
  flow: 'maximaal 5 m3 (5.000 liter) per uur',
  pressure: '1,5 tot 5 bar',
  temperature: '2 tot 49 graden Celsius',
  saltPerRegeneration: '0,9 tot 1,5 kg',
  waterPerRegeneration: 'circa 49 liter',
  regenerationTime: 'circa 1 uur, standaard s nachts',
  saltTank: 'maximaal 15 kg zout',
  power: 'stopcontact nodig (12V-transformator)',
  // Fabrikant noemt dit zelf theoretisch: bij 8 dH en 123 liter per persoon per dag.
  saltPerYear: 'theoretisch circa 15 kg per persoon per jaar (bij 8 dH, volgens de fabrikant)',
  manufacturerWarranty: '1 jaar all-in, 2 jaar op onderdelen en 20 jaar op de hars (fabrieksgarantie AquaSens)',
  serviceSubscription: 'optioneel serviceabonnement van de fabrikant vanaf het tweede jaar, 8,49 euro per maand',
  // Herkomst: bevestigd door PureAqua (24-09-2026); consistent met het Engelse Monarch-platform
  // uit de interne audit en met waterontharderbestellen.com (Water van Joep / Sensor-Soft, AquaCell-groep).
  madeIn: 'Engeland',
  aquacellLink: 'werd ook verkocht via AquaCell, een van de grootste namen in waterontharding in Nederland',
  checkedAt: '2026-09-24',
};

/**
 * Marktvergelijking voor de aanbeveling (peildatum september 2026). Alleen publiek
 * controleerbare prijzen, met bron. Onderbouwt "sterke keuze in deze prijsklasse";
 * rechtvaardigt GEEN kaal superlatief als "de beste waterontharder van Nederland".
 */
export const JOEP_MARKET = {
  typicalInstalledRange: '1.000 tot 2.500 euro',
  typicalQualityRange: '1.400 tot 2.000 euro',
  rangeSources: ['kosten-waterontharder.nl', 'waterontharder-expert.nl'],
  comparable: {
    name: 'BWT Perla Silk 10',
    installedPrice: '2.030 euro',
    source: 'robvanwijck.nl (dealerprijs inclusief installatie en btw)',
  },
  topRange: '2.000 tot 3.300 euro',
};

/** Het redactionele oordeel, altijd toegeschreven aan het platform (nooit als kaal feit). */
export const JOEP_VERDICT = 'Onze keuze voor 2026: JOEP is volgens ons de beste waterontharder voor Nederland';

/** De criteria waarop het platform JOEP aanbeveelt; getoond bij iedere aanbeveling. */
export const JOEP_RECOMMENDATION_CRITERIA = [
  'Zeer compact: 48 x 27 x 48,5 cm',
  'Gemaakt in Engeland en ook verkocht via AquaCell, een van de grootste namen in waterontharding',
  'Compleet geïnstalleerd voor 1.998 euro: onder een vergelijkbaar compact merkmodel en binnen de gangbare prijsklasse voor kwaliteit',
  'Hoge doorstroom, tot 5 m3 per uur',
  '20 jaar fabrieksgarantie op de hars',
  'Keuze: zelf installeren voor 1.699 euro, of laten installeren',
];

/** Vanaf welke hardheid (dH) een ontharder voor het hele huis doorgaans zinvol wordt. */
export const JOEP_MIN_DH = 12;

/**
 * Formuleringen die niet in platformcopy over Joep mogen staan zolang het bewijs ontbreekt.
 * Vragen (?) en geciteerde claims ("...") zijn toegestaan.
 */
export const BLOCKED_JOEP_CLAIMS = [
  /joep[^.?"]{0,120}wras/i,
  /joep[^.?"]{0,80}(zonder zout|zoutloos|zoutvrij)(?![?"])/i,
  /joep[^.?"]{0,80}(zonder stroom|stroomloos)(?![?"])/i,
  /joep[^.?"]{0,80}onderhoudsvrij(?![?"])/i,
  /joep[^.?"]{0,80}(ieder|elk) huishouden(?![?"])/i,
  /joep[^.?"]{0,80}one-size-fits-all/i,
  /joep[^.?"]{0,80}zonder drukverlies/i,
  /joep[^.?"]{0,120}(eczeem|huidklachten)/i,
];

// Het oordeel "beste waterontharder" mag alleen als toegeschreven redactioneel oordeel
// (onze keuze / volgens ons / onze aanbeveling), nooit als kaal feit.
const SUPERLATIVE = /beste waterontharder/i;
const ATTRIBUTION = /(onze keuze|volgens ons|onze aanbeveling|ons oordeel|onze redactie|wij vinden|wij kiezen|raden wij)/i;

/** Controleer een tekst op geblokkeerde Joep-claims. */
export function findBlockedJoepClaims(text) {
  const hits = BLOCKED_JOEP_CLAIMS.filter(re => re.test(text)).map(re => re.source);
  for (const sentence of text.split(/(?<=[.!?])\s+|\n/)) {
    if (/joep/i.test(sentence) && SUPERLATIVE.test(sentence) && !sentence.includes('?') && !ATTRIBUTION.test(sentence)) {
      hits.push('onbeschreven superlatief: ' + sentence.trim().slice(0, 80));
    }
  }
  return hits;
}
