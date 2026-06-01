/**
 * Pure tekst-helpers (geen Next/React-afhankelijkheden), zodat ze met
 * node --test getest kunnen worden. lib/seo.ts herexporteert clampDescription
 * voor bestaande TSX-imports.
 */

/**
 * Knip een meta-description tot maximaal `max` tekens, op een woordgrens, en
 * verwijder afsluitende leestekens/spaties. Geen ellipsis (houdt output ASCII
 * en schoon). Gebruikt om programmatische descriptions (bv. gemeente-pagina's)
 * binnen de snippet-lengte te houden.
 * @param {string} text
 * @param {number} [max]
 * @returns {string}
 */
export function clampDescription(text, max = 160) {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > max - 30 ? slice.slice(0, lastSpace) : slice;
  return cut.replace(/[\s.,;:!?-]+$/, '');
}
