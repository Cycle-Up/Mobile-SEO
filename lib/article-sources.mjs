/**
 * Onderwerp -> gezaghebbende bronnen voor kennisbank-artikelen.
 *
 * Conform de handover-bronhierarchie (overheid/wetenschap > nutsbedrijf >
 * fabrikant > redactie). We koppelen erkende AUTORITEITEN en documenten per
 * onderwerp; we verzinnen geen specifieke studieclaims of cijfers. Wanneer een
 * artikel geen eigen `sources`-frontmatter heeft, levert sourcesForSlug een
 * onderwerp-passende lijst, met DEFAULT_SOURCES als terugval.
 *
 * Pure functie + data, getest in test/article-sources.test.mjs.
 */

// Spiegelt components/SourcesSection.tsx (generieke terugval).
export const DEFAULT_SOURCES = [
  'Drinkwaterbesluit (Stb. 2011, 293), inclusief wijzigingen 2023',
  'Europese Drinkwaterrichtlijn 2020/2184/EU',
  'RIVM - Drinkwaterkwaliteit in Nederland (jaarrapportage)',
  'Inspectie Leefomgeving en Transport (ILT) - Toezicht drinkwaterbedrijven',
  'WHO - Guidelines for Drinking-water Quality (4e editie, 2022)',
];

const WHO = 'WHO - Guidelines for Drinking-water Quality (4e editie, 2022)';
const DWB = 'Drinkwaterbesluit (Stb. 2011, 293), inclusief wijzigingen 2023';
const EU = 'Europese Drinkwaterrichtlijn 2020/2184/EU';
const ILT = 'Inspectie Leefomgeving en Transport (ILT) - Toezicht drinkwaterbedrijven';
const KWR = 'KWR Water Research Institute';
const VEWIN = 'Vewin - Vereniging van drinkwaterbedrijven in Nederland';
const GR = 'Gezondheidsraad - adviezen drinkwater en gezondheid';

// Volgorde-afhankelijke matchers; eerste passende groepen worden samengevoegd.
const TOPIC_SOURCES = [
  { test: /pfas/, sources: ['RIVM - PFAS in Nederland', EU, DWB, KWR] },
  { test: /lood/, sources: ['RIVM - Lood in drinkwater', GR, DWB, EU] },
  { test: /chroom/, sources: ['RIVM - Chroom-6', GR, DWB] },
  { test: /nitraat|nitriet/, sources: ['RIVM - Nitraat in drinkwater', WHO, DWB, EU] },
  { test: /microplast|nanoplast/, sources: ['WHO - Microplastics in drinking-water (2019)', 'RIVM - Microplastics', KWR] },
  { test: /legionella|bacterie|bacterien|cryptosporidium/, sources: ['RIVM - Legionella en microbiologie', WHO, DWB, ILT] },
  { test: /hormonen|medicijn|geneesmiddel/, sources: ['RIVM - Geneesmiddelen in water', KWR, VEWIN, EU] },
  { test: /pesticide|pesticiden|glyfosaat/, sources: ['RIVM - Bestrijdingsmiddelen in drinkwater', KWR, DWB, EU] },
  { test: /uranium|radium|radioactief/, sources: ['RIVM - Radioactiviteit en straling', 'ANVS - Autoriteit Nucleaire Veiligheid en Stralingsbescherming', WHO] },
  { test: /arseen|arsenicum|mangaan|ijzer|koper|zink|nikkel|aluminium|barium|cadmium|kwik/, sources: ['WHO - Guidelines for Drinking-water Quality (chemische parameters)', 'RIVM - Metalen in drinkwater', DWB] },
  { test: /fluor|fluoride/, sources: ['RIVM - Fluoride en drinkwater', WHO, 'KNMT - mondzorg en fluoride'] },
  { test: /baby|flesvoeding|zwanger|kind|gezin/, sources: ['Voedingscentrum - Voeding en water voor jonge kinderen', 'RIVM - Drinkwater en gezondheid', WHO, DWB] },
  { test: /gezond|gezondheid|nier|hart|bloeddruk|diabetes|darm|microbioom|huid|haar|dialyse|immuun|senioren|allergie/, sources: ['RIVM - Drinkwater en gezondheid', WHO, GR] },
  { test: /hardheid|kalk|dh-|mineralen/, sources: [VEWIN, 'RIVM - Hardheid van drinkwater', DWB] },
  { test: /osmose|ro-|reverse|membraan/, sources: [KWR, WHO, 'NSF/ANSI 58 - Reverse Osmosis Drinking Water Treatment Systems'] },
  { test: /keurmerk|nsf|kiwa|certifi/, sources: ['NSF/ANSI normen voor drinkwaterbehandeling', 'Kiwa - certificering drinkwatercomponenten', DWB] },
];

/**
 * @param {string} slug
 * @returns {string[]} >=3 bronnen; onderwerp-specifiek waar mogelijk, anders DEFAULT_SOURCES.
 */
export function sourcesForSlug(slug) {
  const s = String(slug || '').toLowerCase();
  const collected = [];
  for (const { test, sources } of TOPIC_SOURCES) {
    if (test.test(s)) {
      for (const src of sources) if (!collected.includes(src)) collected.push(src);
    }
  }
  if (collected.length >= 3) return collected;
  // Vul aan met DEFAULT_SOURCES tot minimaal 3 unieke bronnen.
  for (const src of DEFAULT_SOURCES) {
    if (!collected.includes(src)) collected.push(src);
    if (collected.length >= 3 && collected.length >= DEFAULT_SOURCES.length) break;
  }
  return collected.length >= 3 ? collected : DEFAULT_SOURCES;
}
