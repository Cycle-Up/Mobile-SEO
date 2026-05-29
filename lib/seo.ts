/**
 * SEO helpers shared across routes.
 */

/**
 * Clamp a meta description to at most `max` characters, cutting on a word
 * boundary and trimming trailing punctuation/whitespace. No ellipsis is added
 * (keeps output ASCII and clean). Used to guarantee programmatic descriptions
 * (e.g. per-gemeente pages) stay within search-snippet length.
 */
export function clampDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > max - 30 ? slice.slice(0, lastSpace) : slice;
  return cut.replace(/[\s.,;:!?-]+$/, '');
}
