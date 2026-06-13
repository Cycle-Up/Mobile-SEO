/**
 * Machine-leesbare datasets. Alle waarden komen uit officiele/publieke bronnen
 * (Drinkwaterbesluit, EU-richtlijn 2020/2184, RIVM, NSF/ANSI) en zijn waar geen
 * exact bron-percentage bestaat KWALITATIEF weergegeven (hoog/deels/laag), zodat
 * er geen cijfers worden verzonnen. Elke dataset noemt zijn bron.
 *
 * Gebruikt door de JSON-routes (app/data/*.json) en de Dataset-pagina's (app/data/*).
 */

export const DATASETS = {
  'drinkwaternormen': {
    name: 'Drinkwaternormen Nederland',
    description: 'Wettelijke maximumwaarden voor stoffen in drinkwater (Drinkwaterbesluit / EU-richtlijn 2020/2184).',
    source: 'Drinkwaterbesluit, EU-richtlijn 2020/2184, RIVM',
    columns: ['Stof', 'Norm', 'Eenheid', 'Bron'],
    rows: [
      ['PFAS (som)', '0,1', 'microgram/L', 'EU 2020/2184 (volledig van kracht 2026)'],
      ['Lood', '5', 'microgram/L', 'EU 2020/2184 / Drinkwaterbesluit (per 2026)'],
      ['Nitraat', '50', 'mg/L', 'Drinkwaterbesluit'],
      ['Nitriet', '0,5', 'mg/L', 'Drinkwaterbesluit'],
      ['Arseen', '10', 'microgram/L', 'Drinkwaterbesluit'],
    ],
  },
  'filtertechniek-matrix': {
    name: 'Filtertechnieken: poriegrootte en werking',
    description: 'Overzicht van waterfiltertechnieken met indicatieve poriegrootte en wat ze wel en niet aanpakken.',
    source: 'RIVM, KWR, NSF/ANSI (indicatieve poriegroottes)',
    columns: ['Techniek', 'Poriegrootte', 'Pakt aan', 'Pakt niet aan'],
    rows: [
      ['Microfiltratie', '0,1-10 micrometer', 'Deeltjes, veel bacterien', 'Opgeloste stoffen, virussen'],
      ['Ultrafiltratie', '0,01-0,1 micrometer', 'Bacterien, virussen, microplastics', 'Opgeloste zouten, kalk'],
      ['Nanofiltratie', '0,001-0,01 micrometer', 'Hardheid, deel opgeloste stoffen', 'Deel eenwaardige zouten'],
      ['Omgekeerde osmose', '~0,0001 micrometer', 'Vrijwel alle opgeloste stoffen', '(weinig; zeer fijn)'],
      ['Actief kool', 'adsorptie', 'Chloor, smaak, geur', 'Kalk, zware metalen, nitraat'],
      ['Ionenwisseling', 'n.v.t.', 'Hardheid (naar natrium)', 'Organische stoffen, deeltjes'],
      ['UV-sterilisatie', 'n.v.t.', 'Bacterien, virussen', 'Opgeloste stoffen, kalk'],
    ],
  },
  'keurmerken': {
    name: 'Waterfilter-keurmerken register',
    description: 'Betekenis en scope van de belangrijkste waterfilter- en materiaalkeurmerken.',
    source: 'NSF International / ANSI, Kiwa, WRAS, ACS, EU',
    columns: ['Keurmerk', 'Betekenis', 'Scope'],
    rows: [
      ['NSF/ANSI 42', 'Esthetische effecten', 'Chloor, smaak, geur, deeltjes'],
      ['NSF/ANSI 53', 'Gezondheidsrelevante stoffen', 'Lood, bepaalde chemicalien, cysten'],
      ['NSF/ANSI 58', 'Omgekeerde-osmosesystemen', 'TDS-reductie, lood, arseen e.a.'],
      ['Kiwa (bv. 113)', 'Materiaalveiligheid (NL)', 'Geen schadelijke afgifte aan drinkwater'],
      ['WRAS', 'Materiaalgoedkeuring (UK)', 'Contact met drinkwater'],
      ['ACS', 'Sanitaire conformiteit (FR)', 'Contact met drinkwater'],
      ['CE', 'EU-regelgeving', 'Zegt niets over filterprestatie'],
    ],
  },
  'verwijdering-matrix': {
    name: 'Verwijdering per filtertype (indicatief)',
    description: 'Indicatieve, kwalitatieve verwijdering van veelvoorkomende stoffen per filtertype. Geen exacte percentages; raadpleeg de gecertificeerde productspecificatie.',
    source: 'RIVM, NSF/ANSI productcertificeringen (kwalitatief samengevat)',
    columns: ['Techniek', 'Lood', 'Nitraat', 'PFAS', 'Kalk', 'Microplastics'],
    rows: [
      ['Omgekeerde osmose', 'hoog', 'hoog', 'hoog', 'hoog', 'hoog'],
      ['Actief kool', 'deels', 'laag', 'deels', 'nee', 'laag'],
      ['Ionenwisseling', 'laag', 'deels', 'nee', 'hoog', 'nee'],
      ['Ultrafiltratie', 'laag', 'nee', 'nee', 'nee', 'hoog'],
      ['Filterkan (kool)', 'deels', 'laag', 'deels', 'laag', 'laag'],
    ],
  },
  'poriegrootte-schaal': {
    name: 'Poriegrootte-schaal van filtertechnieken',
    description: 'Filtertechnieken gesorteerd van grof naar fijn met indicatieve poriegrootte in micrometer.',
    source: 'RIVM, KWR (indicatieve waarden)',
    columns: ['Techniek', 'Poriegrootte (micrometer)', 'Houdt globaal tegen'],
    rows: [
      ['Sediment/microfiltratie', '0,1-10', 'Zand, roest, deeltjes, bacterien'],
      ['Ultrafiltratie', '0,01-0,1', 'Bacterien, virussen, microplastics'],
      ['Nanofiltratie', '0,001-0,01', 'Hardheid, grotere moleculen'],
      ['Omgekeerde osmose', '~0,0001', 'Opgeloste ionen en zouten'],
    ],
  },
  'tds-ec-referentie': {
    name: 'TDS/EC-referentiewaarden per watertype',
    description: 'Indicatieve bereiken voor opgeloste stoffen (TDS) per watertype. Werkelijke waarden verschillen per bron.',
    source: 'WHO, RIVM, drinkwaterbedrijven (indicatieve bereiken)',
    columns: ['Watertype', 'TDS-bereik (mg/L)', 'Toelichting'],
    rows: [
      ['Osmose-/gedestilleerd water', '0-25', 'Vrijwel mineraalvrij'],
      ['Nederlands kraanwater', '150-500', 'Afhankelijk van hardheid en bron'],
      ['Hard kraanwater', '400-700', 'Veel calcium en magnesium'],
      ['Zeewater', '30000-40000', 'Zeer hoog zoutgehalte'],
    ],
  },
};
