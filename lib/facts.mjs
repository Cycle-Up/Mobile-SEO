/**
 * Centrale, gezaghebbende kerncijfers over Nederlands drinkwater (items 43 + 45).
 *
 * Eenmalige bron-van-waarheid voor normen/waarden zodat een wijziging op 1 plek
 * doorwerkt en content niet uiteenloopt. Alleen officiele, controleerbare waarden
 * (Drinkwaterbesluit / EU 2020/2184 / RIVM). Geen verzonnen cijfers.
 *
 * Gebruikt door scripts/check-facts.mjs (consistentie- en versheidscontrole).
 */

export const FACTS = {
  pfasSomNorm: { value: '0,1', unit: 'microgram/L', label: 'EU-norm som-PFAS in drinkwater', keyword: /pfas/i },
  loodNorm: { value: '5', unit: 'microgram/L', label: 'Loodnorm drinkwater (Drinkwaterbesluit)', keyword: /\blood\b/i },
  nitraatNorm: { value: '50', unit: 'mg/L', label: 'Nitraatnorm drinkwater', keyword: /nitraat/i },
  euRichtlijn: { value: '2020/2184', unit: '', label: 'EU-drinkwaterrichtlijn', keyword: /eu-richtlijn|drinkwaterrichtlijn/i },
  hardZachtGrens: { value: '8', unit: 'dH', label: 'Grens zacht water', keyword: /zacht water/i },
  hardGrens: { value: '14', unit: 'dH', label: 'Grens hard water', keyword: /hard water/i },
};

// Tegenstrijdige waarden die NOOIT naast het juiste begrip mogen staan
// (duidelijk foute normwaarden). Conservatief om valse positieven te vermijden.
export const CONTRADICTIONS = [
  { keyword: /som.{0,20}pfas|pfas.{0,20}som/i, wrong: /0,5\s*microgram/i, fact: 'pfasSomNorm' },
  { keyword: /loodnorm|norm voor lood/i, wrong: /\b10\s*microgram|\b50\s*microgram/i, fact: 'loodNorm' },
  { keyword: /nitraatnorm|norm voor nitraat/i, wrong: /\b25\s*mg|\b100\s*mg/i, fact: 'nitraatNorm' },
];

/**
 * Zoek tegenstrijdige cijfers in een tekst.
 * @param {string} text
 * @returns {string[]} meldingen
 */
export function findContradictions(text) {
  const issues = [];
  for (const c of CONTRADICTIONS) {
    if (c.keyword.test(text) && c.wrong.test(text)) {
      issues.push(`Mogelijk tegenstrijdig cijfer bij ${c.fact}`);
    }
  }
  return issues;
}

/** Render een korte, citeerbare feitenregel. */
export function factLine(key) {
  const f = FACTS[key];
  if (!f) return '';
  return `${f.label}: ${f.value}${f.unit ? ' ' + f.unit : ''}`;
}
