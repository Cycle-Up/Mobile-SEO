/**
 * Pure rekenfuncties voor de interactieve hulpmiddelen (calculators).
 *
 * Alle formules zijn TRANSPARANT en indicatief: ze rekenen met gebruikersinput
 * en gedocumenteerde, gelabelde aannames - geen verzonnen meetwaarden. De
 * functies zijn puur (geen DOM/React) en worden getest in test/calculators.test.mjs.
 * De client-component components/CalculatorClient.tsx roept ze aan.
 */

// Gedocumenteerde, indicatieve aannames (pas aan op basis van bron/situatie).
export const ASSUMPTIONS = {
  litersPerPersonPerDay: 120,        // CBS-orde van grootte huishoudelijk verbruik
  saltKgPerM3PerDH: 0.018,           // indicatief zoutverbruik ionenwisseling per m3 per dH
  co2GramPerBottle: 160,             // indicatief CO2 per 1,5L PET-fles (productie+transport)
};

const round = (n, d = 2) => {
  const f = 10 ** d;
  return Math.round(n * f) / f;
};

/** 1. Zoutverbruik en -kosten van een waterontharder per jaar. */
export function saltCost({ dH, persons, pricePerKg = 0.5, litersPerPersonPerDay = ASSUMPTIONS.litersPerPersonPerDay }) {
  const m3PerYear = (persons * litersPerPersonPerDay * 365) / 1000;
  const saltKgPerYear = m3PerYear * dH * ASSUMPTIONS.saltKgPerM3PerDH;
  return {
    m3PerYear: round(m3PerYear, 1),
    saltKgPerYear: round(saltKgPerYear, 1),
    costPerYear: round(saltKgPerYear * pricePerKg, 2),
  };
}

/** 2. Osmose afvalwater en opbrengst per jaar. */
export function osmoseWaste({ permeatePerDayL, wasteRatio }) {
  const wastePerDayL = permeatePerDayL * wasteRatio;
  return {
    permeatePerYearL: round(permeatePerDayL * 365, 0),
    wastePerYearL: round(wastePerDayL * 365, 0),
    totalInPerYearL: round((permeatePerDayL + wastePerDayL) * 365, 0),
  };
}

/** 3. Kokend water kraan energie + totale kosten (TCO). */
export function kokendTCO({ standbyW, kwhPrice = 0.35, purchase = 0, years = 5 }) {
  const kwhPerYear = (standbyW / 1000) * 24 * 365;
  const energyCostPerYear = kwhPerYear * kwhPrice;
  return {
    kwhPerYear: round(kwhPerYear, 0),
    energyCostPerYear: round(energyCostPerYear, 2),
    totalCost: round(purchase + energyCostPerYear * years, 2),
  };
}

/** 4. Flessenwater vs kraanwater: besparing en indicatieve CO2. */
export function bottledSavings({ bottlesPerWeek, bottlePrice = 0.7 }) {
  const bottlesPerYear = bottlesPerWeek * 52;
  return {
    bottlesPerYear,
    euroPerYear: round(bottlesPerYear * bottlePrice, 2),
    co2KgPerYear: round((bottlesPerYear * ASSUMPTIONS.co2GramPerBottle) / 1000, 1),
  };
}

/** 5. Waterhardheid omrekenen tussen eenheden. Input in dH of mmol/l of ppm of fh. */
export function hardnessConvert({ value, unit }) {
  // Eerst naar dH normaliseren met standaard omrekenfactoren.
  let dH;
  switch (unit) {
    case 'dH': dH = value; break;
    case 'mmol': dH = value / 0.17833; break;      // 1 dH = 0,17833 mmol/L
    case 'ppm': dH = value / 17.848; break;        // 1 dH = 17,848 mg/L CaCO3 (ppm)
    case 'fH': dH = value / 1.7848; break;         // 1 dH = 1,7848 fH
    default: dH = value;
  }
  return {
    dH: round(dH, 2),
    mmol: round(dH * 0.17833, 3),
    ppm: round(dH * 17.848, 1),
    fH: round(dH * 1.7848, 2),
  };
}

/** 6. Volgende filter-vervangdatum. */
export function filterReplaceDate({ installISO, intervalMonths }) {
  const d = new Date(installISO);
  if (Number.isNaN(d.getTime())) return { next: null };
  d.setMonth(d.getMonth() + intervalMonths);
  return { next: d.toISOString().slice(0, 10) };
}

// Gedeelde hardheidsklassen (consistent met de site).
export const HARDNESS_CLASSES = [
  { max: 8, klasse: 'zacht', risico: 'laag kalkrisico' },
  { max: 14, klasse: 'gemiddeld', risico: 'matig kalkrisico' },
  { max: Infinity, klasse: 'hard', risico: 'hoog kalkrisico' },
];

/** 7. Kalkrisico-indicator op basis van dH. */
export function kalkRisk({ dH }) {
  const c = HARDNESS_CLASSES.find(c => dH <= c.max);
  return { dH, klasse: c.klasse, risico: c.risico };
}

/** 8. Osmose membraan-rejectie op basis van TDS in/uit. */
export function roRejection({ tdsIn, tdsOut }) {
  if (!tdsIn || tdsIn <= 0) return { rejectionPct: null, verdict: 'onbekend' };
  const rejectionPct = round((1 - tdsOut / tdsIn) * 100, 1);
  const permeateRatio = (tdsOut / tdsIn) * 100;
  const verdict = permeateRatio > 50 ? 'membraan waarschijnlijk versleten' : 'membraan presteert goed';
  return { rejectionPct, verdict };
}

/** 9. Indicatief huishoudelijk waterverbruik. */
export function householdUsage({ persons, litersPerPersonPerDay = ASSUMPTIONS.litersPerPersonPerDay }) {
  const perDay = persons * litersPerPersonPerDay;
  return { perDayL: round(perDay, 0), perYearM3: round((perDay * 365) / 1000, 1) };
}

/** 10. Zout-bijvulinterval in dagen. */
export function saltRefillInterval({ reservoirKg, saltKgPerYear }) {
  if (!saltKgPerYear || saltKgPerYear <= 0) return { days: null };
  return { days: round(reservoirKg / (saltKgPerYear / 365), 0) };
}
