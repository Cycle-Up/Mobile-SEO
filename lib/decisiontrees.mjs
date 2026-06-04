/**
 * Beslisbomen voor de interactieve beslishulp. Pure data + helper, zodat de
 * client-component (components/DecisionTreeClient.tsx) ze afloopt en de
 * server-pagina een volledige, indexeerbare tekst-fallback kan renderen.
 *
 * Een node = { q, options: [{ label, result|next }] }. Een result =
 * { title, advice, href }. Getest in test/decisiontrees.test.mjs.
 */

const r = (title, advice, href) => ({ title, advice, href });

export const TREES = {
  'welke-waterfilter': {
    intro: 'Beantwoord de vragen om te zien welk type waterfilter bij jouw doel past.',
    node: {
      q: 'Wat wil je vooral aanpakken?',
      options: [
        { label: 'Alleen smaak en chloor', result: r('Filterkan of koolstoffilter', 'Voor smaak en chloor volstaat actief kool. Goedkoop en simpel.', '/filterkan') },
        { label: 'Lood, nitraat of PFAS', result: r('Omgekeerde osmose', 'Voor gezondheidsrelevante opgeloste stoffen is osmose de grondigste keuze.', '/omgekeerde-osmose') },
        { label: 'Kalk in huis', result: r('Waterontharder', 'Voor kalk door het hele huis is een ionenwisselaar de bewezen keuze.', '/waterontharder') },
        { label: 'Ik weet het niet zeker', result: r('Keuzehulp', 'Doorloop de uitgebreide keuzehulp voor een advies op maat.', '/keuzehulp') },
      ],
    },
  },
  'osmose-nodig': {
    intro: 'Bepaal of omgekeerde osmose voor jou zinvol is.',
    node: {
      q: 'Wil je lood, nitraat, PFAS of zeer zuiver water?',
      options: [
        { label: 'Ja, een of meer daarvan', result: r('Osmose is zinvol', 'Omgekeerde osmose verwijdert deze opgeloste stoffen grondig.', '/omgekeerde-osmose') },
        { label: 'Nee, alleen smaak/chloor', result: r('Osmose is overkill', 'Een koolstoffilter of filterkan volstaat voor smaak en chloor.', '/filtertechnieken/actief-kool') },
        { label: 'Alleen kalk', result: r('Kies een ontharder', 'Voor kalk in huis is een waterontharder logischer dan osmose.', '/waterontharder') },
      ],
    },
  },
  'welke-waterontharder': {
    intro: 'Vind het type waterontharder dat bij jouw situatie past.',
    node: {
      q: 'Heb je bezwaar tegen zout en onderhoud?',
      options: [
        { label: 'Nee, geen bezwaar', result: r('Ionenwisselaar (met zout)', 'De bewezen keuze die de hardheid meetbaar verlaagt.', '/waterontharder') },
        { label: 'Ja, liefst zoutvrij', result: r('Zoutloze opties (kritisch bekijken)', 'Zoutloze systemen verlagen de hardheid niet; het bewijs is wisselend.', '/vergelijken/zoutloze-waterontharder-vergelijken') },
        { label: 'Alleen kalkvrij drinkwater', result: r('Omgekeerde osmose', 'Voor kalkvrij drinkwater aan een tappunt is osmose geschikter.', '/omgekeerde-osmose') },
      ],
    },
  },
  'kokend-kraan-nodig': {
    intro: 'Bepaal of een kokend water kraan iets voor jou is.',
    node: {
      q: 'Hoe vaak gebruik je kokend water?',
      options: [
        { label: 'Heel vaak, meerdere keren per dag', result: r('Kokend water kraan overwegen', 'Bij intensief gebruik wegen gemak en ruimtebesparing op.', '/kokend-water-kraan') },
        { label: 'Af en toe', result: r('Een waterkoker volstaat', 'Bij incidenteel gebruik is een waterkoker goedkoper.', '/vergelijken/kokend-kraan-vs-waterkoker') },
        { label: 'Ik wil ook gefilterd/bruisend', result: r('4-in-1 kraan', 'Combineert kokend, gefilterd en bruisend water.', '/4-in-1-kraan') },
      ],
    },
  },
  'filteren-of-ontharden': {
    intro: 'Filteren, ontharden of allebei? Bepaal wat bij jouw doel past.',
    node: {
      q: 'Wat is je hoofddoel?',
      options: [
        { label: 'Kalk in huis tegengaan', result: r('Ontharden', 'Een waterontharder beschermt leidingen en apparaten tegen kalk.', '/waterontharder') },
        { label: 'Zuiver drinkwater', result: r('Filteren (osmose)', 'Voor zuiver drinkwater aan een tappunt is osmose de grondigste keuze.', '/omgekeerde-osmose') },
        { label: 'Allebei', result: r('Combineren', 'Een ontharder voor het huis plus osmose aan de keukenkraan.', '/vergelijken/ionenwisselaar-vs-osmose') },
      ],
    },
  },
  'putwater-filter': {
    intro: 'Welke behandeling past bij jouw put- of bronwater?',
    node: {
      q: 'Wat is het belangrijkste probleem?',
      options: [
        { label: 'Bacterien / microbiologisch', result: r('UV-sterilisatie', 'UV doodt micro-organismen; eerst troebelheid wegfilteren.', '/vergelijken/uv-vs-osmose') },
        { label: 'Nitraat / opgeloste stoffen', result: r('Omgekeerde osmose', 'Osmose verwijdert nitraat en andere opgeloste stoffen.', '/omgekeerde-osmose') },
        { label: 'IJzer / mangaan (bruine aanslag)', result: r('Ontijzering', 'Een ontijzeringsfilter pakt ijzer en mangaan aan.', '/kennisbank/water-ijzer-ontijzering') },
      ],
    },
  },
  'reisfilter': {
    intro: 'Welke reisfilter past bij jouw bestemming?',
    node: {
      q: 'Waar ga je naartoe?',
      options: [
        { label: 'Binnen de EU (veilig kraanwater)', result: r('Meestal geen filter nodig', 'In veel EU-landen is kraanwater veilig; check lokaal.', '/kennisbank/waterfilter-reizen-buitenland') },
        { label: 'Buiten de EU / onzeker water', result: r('Reisfilter of UV-pen', 'Een draagbaar filter of UV-behandeling tegen micro-organismen.', '/reisfilter') },
        { label: 'Camper of boot', result: r('Tank- en reisfilter', 'Let op tankhygiene en een geschikt draagbaar filter.', '/kennisbank/waterontharder-weg-op-vakantie') },
      ],
    },
  },
};

/** Verzamel alle eindadviezen (results) van een boom, voor fallback en tests. */
export function flattenOutcomes(node, acc = []) {
  if (!node || !node.options) return acc;
  for (const o of node.options) {
    if (o.result) acc.push(o.result);
    if (o.next) flattenOutcomes(o.next, acc);
  }
  return acc;
}
