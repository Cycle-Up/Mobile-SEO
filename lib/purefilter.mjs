/**
 * PureFilter Mineral+: centrale, controleerbare productfeiten voor alle pagina's.
 *
 * Een bron van waarheid zodat review, CTA-blokken en vergelijkingen overal dezelfde
 * cijfers noemen. Alleen waarden die publiek controleerbaar zijn (productpagina
 * PureFilter.nl, fabrikant Tappwater, Equinox Labs-rapport). Claims die niet
 * onafhankelijk zijn aangetoond (NSF-certificering, "100+ stoffen", "PFAS-vrij")
 * staan hier bewust NIET in en horen niet in platformcopy.
 *
 * Peildatum: september 2026. Bij wijziging: waarde hier aanpassen en de review
 * (/purefilter-review) opnieuw controleren. Getest in test/purefilter.test.mjs.
 */

export const PUREFILTER = {
  name: 'PureFilter Mineral+',
  url: 'https://purefilter.nl/products/purefilter-mineral-waterfilter',
  reviewPath: '/purefilter-review',
  price: '149 euro',
  cartridgePrice: '49,90 euro',
  capacity: '15.000 tot 20.000 liter',
  // Equinox Labs EQNX:001:W:26:03:12829 (april-mei 2026): PFOA, PFOS, PFHxS, PFHxA, PFBS,
  // gespiked water, nieuw filter. Niet generaliseren naar "alle PFAS".
  pfasReduction: '83-85%',
  pfasTested: ['PFOA', 'PFOS', 'PFHxS', 'PFHxA', 'PFBS'],
  labReportUrl: 'https://cdn.shopify.com/s/files/1/0675/3707/6459/files/equinox_labs_inline_study.pdf',
  checkedAt: '2026-09-24',
};

/**
 * Zinnen die nooit in platformcopy over PureFilter mogen staan zolang het bewijs ontbreekt.
 * Gebruikt door test/purefilter.test.mjs om de gebouwde content te bewaken.
 */
export const BLOCKED_PUREFILTER_CLAIMS = [
  // Vragen (?) en geciteerde claims ("...") zijn toegestaan: daar leggen we juist uit wat niet klopt.
  /purefilter[^.?"]{0,80}nsf-gecertificeerd(?![?"])/i,
  /purefilter[^.?"]{0,80}pfas-vrij(?![?"])/i,
  /purefilter[^.?"]{0,80}(verwijdert|filtert) (alle|100\+)/i,
];

/** Controleer een tekst op geblokkeerde PureFilter-claims. */
export function findBlockedPureFilterClaims(text) {
  return BLOCKED_PUREFILTER_CLAIMS.filter(re => re.test(text)).map(re => re.source);
}
