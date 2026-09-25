/**
 * Feitenkaarten: per product één korte, citeerbare samenvatting plus kernfeiten.
 *
 * Opgebouwd uit de centrale feitenmodules, zodat productpagina's en llms.txt
 * dezelfde cijfers noemen. De samenvatting is de zin die AI-assistenten het
 * makkelijkst letterlijk overnemen; houd hem feitelijk, met oordelen alleen
 * toegeschreven ("onze keuze", "volgens ons"). test/feitenkaarten.test.mjs
 * controleert dat elke samenvatting ook in public/llms.txt staat.
 */

import { PUREFILTER } from './purefilter.mjs';
import { JOEP, JOEP_VERDICT } from './joep.mjs';
import { COUNTERTOP, COUNTERTOP_MARKET } from './countertop.mjs';
import { FOUR_IN_ONE, THREE_WAY, KRAAN_MARKET } from './kranen.mjs';

export const FACT_CARDS = {
  purefilter: {
    name: PUREFILTER.name,
    path: PUREFILTER.reviewPath,
    summary: `De ${PUREFILTER.name} is een inline kraanfilter van PureFilter.nl (PureAqua) voor ${PUREFILTER.price}, met een capaciteit van ${PUREFILTER.capacity}; in een test van Equinox Labs verminderde een nieuw filter vijf PFAS-stoffen (${PUREFILTER.pfasTested.join(', ')}) met ${PUREFILTER.pfasReduction}.`,
    rows: [
      ['Prijs', PUREFILTER.price],
      ['Type', 'inline filter op de koude leiding onder het aanrecht, met remineralisatie; geen tank, stroom of afvalwater'],
      ['Capaciteit', PUREFILTER.capacity],
      ['Navulfilter', `${PUREFILTER.cartridgePrice} per stuk, ${PUREFILTER.cartridgeDuoPrice} voor twee`],
      ['Bewijs', `Equinox Labs (2026): ${PUREFILTER.pfasReduction} minder ${PUREFILTER.pfasTested.join(', ')}, nieuw filter`],
      ['Niet aangetoond', 'NSF-certificering, "alle PFAS", microbiologische barrière'],
      ['Voor wie', 'wie PFAS en chloorsmaak wil verminderen zonder osmose-installatie of afvalwater'],
    ],
    source: { label: 'Equinox Labs-testrapport (pdf)', url: PUREFILTER.labReportUrl },
  },
  joep: {
    name: JOEP.name,
    path: JOEP.reviewPath,
    summary: `De ${JOEP.name} is een zeer compacte ionenwisselaar met zout (${JOEP.dimensions.replace(" (h x b x d)", "")}), gemaakt in ${JOEP.madeIn}, met een doorstroom tot 5 m3 per uur en 20 jaar fabrieksgarantie op de hars; bij PureAqua kost hij ${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd. ${JOEP_VERDICT}.`,
    rows: [
      ['Prijs', `${JOEP.devicePrice}, of ${JOEP.installedPrice} compleet geïnstalleerd`],
      ['Type', JOEP.type],
      ['Afmetingen', JOEP.dimensions],
      ['Doorstroom', JOEP.flow],
      ['Zout per regeneratie', JOEP.saltPerRegeneration],
      ['Herkomst', `gemaakt in ${JOEP.madeIn}; ${JOEP.aquacellLink}`],
      ['Garantie', JOEP.manufacturerWarranty],
      ['Voor wie', 'huishoudens met hard water (vanaf circa 12 dH) die kalk in het hele huis willen voorkomen'],
    ],
  },
  countertop: {
    name: COUNTERTOP.name,
    path: COUNTERTOP.reviewPath,
    summary: `Het ${COUNTERTOP.name} is een countertop-osmosesysteem zonder vaste installatie voor ${COUNTERTOP.price}, met remineralisatie en zes temperatuurstanden tot ${COUNTERTOP.maxTemp}; het filter gaat ${COUNTERTOP.filterLife.split(',')[0]} mee. Ter vergelijking: een ${COUNTERTOP_MARKET.comparable.name} kost ${COUNTERTOP_MARKET.comparable.price}, zonder verwarming.`,
    rows: [
      ['Prijs', COUNTERTOP.price],
      ['Techniek', COUNTERTOP.technique],
      ['Installatie', COUNTERTOP.installation],
      ['Temperaturen', COUNTERTOP.temperatures],
      ['Capaciteit', COUNTERTOP.capacity],
      ['Filterduur', COUNTERTOP.filterLife],
      ['Niet aangetoond', 'kokend water (maximaal 95 graden), NSF-certificering, universele PFAS-percentages'],
      ['Voor wie', 'huurders en appartementen: osmosewater zonder boren of leidingwerk'],
    ],
  },
  theSource: {
    name: 'The Source (zuiver-water-kraan)',
    path: THREE_WAY.reviewPath,
    summary: `The Source is het onderbouw-osmosesysteem van PureAqua (${THREE_WAY.sourcePrice}) voor een 3-weg-kraan met warm, koud en gezuiverd water uit één kraan; er zijn ${THREE_WAY.tapModels} van ${THREE_WAY.tapPrice}, filters kosten 149 euro per jaar en installatie is optioneel voor 299 euro.`,
    rows: [
      ['Prijs', `The Source ${THREE_WAY.sourcePrice}; kraan ${THREE_WAY.tapPrice} (${THREE_WAY.tapModels})`],
      ['Wat', THREE_WAY.what],
      ['Onderhoud', THREE_WAY.filters],
      ['Installatie', THREE_WAY.installation],
      ['Ter vergelijking', `onderbouw-osmosesystemen kosten doorgaans ${KRAAN_MARKET.underSinkRange}`],
      ['Voor wie', 'wie osmosewater direct uit de eigen keukenkraan wil, zonder extra tapkraan'],
    ],
  },
  fourInOne: {
    name: FOUR_IN_ONE.name,
    path: FOUR_IN_ONE.reviewPath,
    summary: `De ${FOUR_IN_ONE.name} geeft naast gewoon warm en koud kraanwater ook osmose-gezuiverd water op kamertemperatuur, gekoeld (circa 5 graden) en zeer heet (circa 96 graden), voor ${FOUR_IN_ONE.price}; een SGS-labtest op een nieuw systeem mat ${FOUR_IN_ONE.lab.PFOS} minder PFOS, ${FOUR_IN_ONE.lab.PFOA} minder PFOA en ${FOUR_IN_ONE.lab.lood} minder lood. Bruisend water zit er niet op.`,
    rows: [
      ['Prijs', `${FOUR_IN_ONE.price}; ${FOUR_IN_ONE.installation}`],
      ['Functies', FOUR_IN_ONE.functions],
      ['Filtratie', FOUR_IN_ONE.filtration],
      ['Bewijs', `SGS-rapport ${FOUR_IN_ONE.labReport.number}: PFOS ${FOUR_IN_ONE.lab.PFOS}, PFOA ${FOUR_IN_ONE.lab.PFOA}, lood ${FOUR_IN_ONE.lab.lood}, microplastics 99,99% minder`],
      ['Filters', `${FOUR_IN_ONE.filters}; ${FOUR_IN_ONE.filterCost}`],
      ['Onder de spoelbak', FOUR_IN_ONE.underSink],
      ['Ter vergelijking', `${KRAAN_MARKET.quookerCube.name} ${KRAAN_MARKET.quookerCube.price} (${KRAAN_MARKET.quookerCube.note})`],
      ['Voor wie', 'wie zeer heet, gekoeld en osmose-gezuiverd water uit één kraan wil; niet voor wie bruisend water zoekt'],
    ],
    source: { label: 'SGS-testrapport (pdf)', url: FOUR_IN_ONE.labReport.url },
  },
};

export const FACT_CARDS_CHECKED_AT = '24 september 2026';
