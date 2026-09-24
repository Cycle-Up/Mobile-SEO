/**
 * JOEP waterontharder: centrale, controleerbare productfeiten voor alle pagina's.
 *
 * Een bron van waarheid zodat de Joep-pagina, CTA-blokken, gemeentepagina's en
 * vergelijkingen overal dezelfde feiten noemen. Bron: officiele Joep-productpagina
 * en voorwaarden (AquaSens) en de actieve PureAqua-productpagina (apparaatprijs).
 * Peildatum: september 2026 (Shopify-controle 30 juli 2026).
 *
 * Bewust NIET opgenomen (niet aantoonbaar voor de Joep-handelsnaam of het PureAqua-
 * pakket): WRAS-certificering, "geschikt voor ieder huishouden", "onderhoudsvrij",
 * besparingspercentages, gezondheidsclaims (huid/eczeem), een complete opleverprijs
 * en PureAqua-garantie- of proefbadges. Zie BLOCKED_JOEP_CLAIMS.
 *
 * Getest in test/joep.test.mjs.
 */

export const JOEP = {
  name: 'JOEP waterontharder',
  brandOwner: 'AquaSens',
  reviewPath: '/joep-waterontharder',
  shopUrl: 'https://pureaqua.nl/products/joep-waterontharder',
  // Apparaatprijs op PureAqua; installatie is een aparte, optionele regel. Geen opleverprijs.
  devicePrice: '1.799 euro',
  devicePriceSchema: '1799.00',
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
  checkedAt: '2026-09-24',
};

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

/** Controleer een tekst op geblokkeerde Joep-claims. */
export function findBlockedJoepClaims(text) {
  return BLOCKED_JOEP_CLAIMS.filter(re => re.test(text)).map(re => re.source);
}
