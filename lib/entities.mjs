/**
 * Onderwerp -> kennisgraaf-entiteiten voor kennisbankartikelen.
 *
 * entitiesForSlug(slug) geeft de hoofd-entiteit (about) en bijkomende entiteiten
 * (mentions) terug, elk met een canonieke INTERNE concept-URL. Dit koppelt een
 * artikel expliciet aan de concept-knooppunten op de site, zodat AI-zoeksystemen
 * begrijpen waar het artikel over gaat. We gebruiken alleen bestaande, interne
 * canonieke URL's (geen verzonnen externe links).
 *
 * Pure functie + data, getest in test/entities.test.mjs.
 */

const B = 'https://waterfilterplatform.nl';

// Canonieke concept-knooppunten (naam + interne canonieke URL).
export const ENTITIES = {
  pfas: { name: 'PFAS', url: `${B}/drinkwaternormen/pfas` },
  osmose: { name: 'Omgekeerde osmose', url: `${B}/omgekeerde-osmose` },
  hardheid: { name: 'Waterhardheid', url: `${B}/waterhardheid` },
  lood: { name: 'Lood in drinkwater', url: `${B}/leidingwater/lood` },
  nitraat: { name: 'Nitraat', url: `${B}/stoffen-in-drinkwater/nitraat-nitriet` },
  microplastics: { name: 'Microplastics', url: `${B}/drinkwaternormen/microplastics` },
  ionenwisseling: { name: 'Ionenwisseling', url: `${B}/filtertechnieken/ionenwisseling` },
  actiefkool: { name: 'Actief kool', url: `${B}/filtertechnieken/actief-kool` },
  ultrafiltratie: { name: 'Ultrafiltratie', url: `${B}/filtertechnieken/ultrafiltratie` },
  legionella: { name: 'Legionella', url: `${B}/waterfilter/legionella` },
  fluoride: { name: 'Fluoride', url: `${B}/drinkwater/fluoride` },
  kalk: { name: 'Kalk en waterontharding', url: `${B}/waterhardheid` },
  drinkwater: { name: 'Drinkwaterkwaliteit Nederland', url: `${B}/drinkwaternormen` },
  kokendwater: { name: 'Kokend water kraan', url: `${B}/kokend-water-kraan` },
  filterkan: { name: 'Waterfilterkan', url: `${B}/filterkan` },
};

// Volgorde-afhankelijke matchers (slug-keyword -> entiteit-key).
const MATCHERS = [
  [/pfas/, 'pfas'],
  [/osmose|ro-|membraan|permeaat/, 'osmose'],
  [/hardheid|kalk|ontharder|dh-/, 'hardheid'],
  [/lood/, 'lood'],
  [/nitraat|nitriet/, 'nitraat'],
  [/microplast|nanoplast/, 'microplastics'],
  [/ionenwissel/, 'ionenwisseling'],
  [/actief-kool|koolstof|kool-/, 'actiefkool'],
  [/ultrafiltratie|uf-/, 'ultrafiltratie'],
  [/legionella|bacterie|bacterien/, 'legionella'],
  [/fluor/, 'fluoride'],
  [/kokend|quooker|waterkoker/, 'kokendwater'],
  [/filterkan|brita|filter-kan/, 'filterkan'],
  [/drinkwater|kraanwater|leidingwater/, 'drinkwater'],
];

/**
 * @param {string} slug
 * @returns {{about: {name:string,url:string}|null, mentions: {name:string,url:string}[]}}
 */
export function entitiesForSlug(slug) {
  const s = String(slug || '').toLowerCase();
  const keys = [];
  for (const [re, key] of MATCHERS) {
    if (re.test(s) && !keys.includes(key)) keys.push(key);
  }
  if (keys.length === 0) return { about: null, mentions: [] };
  const about = ENTITIES[keys[0]];
  const mentions = keys.slice(1, 4).map(k => ENTITIES[k]);
  return { about, mentions };
}
