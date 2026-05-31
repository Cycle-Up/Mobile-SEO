/**
 * SEO helpers shared across routes.
 *
 * clampDescription leeft als pure helper in lib/text.mjs (testbaar met
 * node --test) en wordt hier herexporteerd zodat bestaande imports
 * (`@/lib/seo`) ongewijzigd blijven werken.
 */

export { clampDescription } from './text.mjs';
