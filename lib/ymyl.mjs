/**
 * YMYL-detectie voor kennisbank-artikelen en routes.
 *
 * Waterkwaliteit en gezondheid raken YMYL-gebied (handover YMYL_DECISION_RULES).
 * isYmyl bepaalt of een pagina de gezondheidsdisclaimer + extra trust verdient.
 * Detectie is conservatief en slug-gebaseerd, met een expliciete frontmatter-
 * override (`ymyl: true|false`) zodat classificatie zonder codewijziging te
 * corrigeren is.
 *
 * Pure functie + geexporteerde keywordlijst, getest in test/ymyl.test.mjs.
 */

// Slug-keywords die op gezondheid, veiligheid of medische context wijzen.
export const YMYL_KEYWORDS = [
  // Gezondheid / medisch
  'gezond', 'gezondheid', 'medisch', 'medicijn', 'medicijnrest',
  'nier', 'hart', 'bloeddruk', 'diabetes', 'darm', 'microbioom',
  'huid', 'dialyse', 'zwanger', 'baby', 'kind', 'allergie',
  'senioren', 'mantelzorg', 'immuun', 'haar',
  // Verontreinigingen / veiligheid
  'pfas', 'lood', 'nitraat', 'nitriet', 'chroom', 'uranium',
  'arseen', 'arsenicum', 'mangaan', 'bacterie', 'bacterien',
  'legionella', 'microplast', 'nanoplast', 'hormonen', 'pesticide',
  'pesticiden', 'glyfosaat', 'radium', 'radioactief', 'fluor',
  'fluoride', 'antibiotica', 'cryptosporidium', 'veiligheid',
];

const KEYWORD_RE = new RegExp(`(${YMYL_KEYWORDS.join('|')})`, 'i');

/** Normaliseer een frontmatter-override naar true/false/undefined. */
function readOverride(frontmatter) {
  if (!frontmatter || frontmatter.ymyl === undefined || frontmatter.ymyl === null) return undefined;
  const v = frontmatter.ymyl;
  if (typeof v === 'boolean') return v;
  const s = String(v).trim().toLowerCase();
  if (s === 'true' || s === 'yes' || s === 'high' || s === 'medium') return true;
  if (s === 'false' || s === 'no' || s === 'low' || s === 'none') return false;
  return undefined;
}

/**
 * @param {string} slug
 * @param {Record<string, unknown>} [frontmatter]
 * @returns {boolean}
 */
export function isYmyl(slug, frontmatter) {
  const override = readOverride(frontmatter);
  if (override !== undefined) return override;
  return KEYWORD_RE.test(String(slug || ''));
}
