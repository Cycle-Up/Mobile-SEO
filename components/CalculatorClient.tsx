'use client';

import { useState } from 'react';
import {
  saltCost, osmoseWaste, kokendTCO, bottledSavings, hardnessConvert,
  filterReplaceDate, kalkRisk, roRejection, householdUsage, saltRefillInterval,
} from '@/lib/calculators.mjs';
import { buildShopUrl } from '@/lib/pureaqua.mjs';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

type Field = { name: string; label: string; type?: string; def: string; step?: string; options?: [string, string][] };
type Result = { label: string; value: string };

const CONFIG: Record<string, { fields: Field[]; compute: (v: Record<string, string>) => Result[] }> = {
  zout: {
    fields: [
      { name: 'dH', label: 'Waterhardheid (dH)', def: '12', step: '1' },
      { name: 'persons', label: 'Aantal personen', def: '3', step: '1' },
      { name: 'pricePerKg', label: 'Zoutprijs (EUR/kg)', def: '0.5', step: '0.05' },
    ],
    compute: v => {
      const r = saltCost({ dH: +v.dH, persons: +v.persons, pricePerKg: +v.pricePerKg });
      return [
        { label: 'Waterverbruik', value: `${r.m3PerYear} m3/jaar` },
        { label: 'Zoutverbruik', value: `${r.saltKgPerYear} kg/jaar` },
        { label: 'Zoutkosten', value: `EUR ${r.costPerYear}/jaar` },
      ];
    },
  },
  afvalwater: {
    fields: [
      { name: 'permeatePerDayL', label: 'Gefilterd water per dag (L)', def: '10', step: '1' },
      { name: 'wasteRatio', label: 'Afvalwaterverhouding (concentraat:permeaat)', def: '1', step: '0.5' },
    ],
    compute: v => {
      const r = osmoseWaste({ permeatePerDayL: +v.permeatePerDayL, wasteRatio: +v.wasteRatio });
      return [
        { label: 'Gefilterd (permeaat)', value: `${r.permeatePerYearL} L/jaar` },
        { label: 'Afvalwater (concentraat)', value: `${r.wastePerYearL} L/jaar` },
        { label: 'Totaal toevoer', value: `${r.totalInPerYearL} L/jaar` },
      ];
    },
  },
  kokend: {
    fields: [
      { name: 'standbyW', label: 'Standby-vermogen boiler (W)', def: '10', step: '1' },
      { name: 'kwhPrice', label: 'Stroomprijs (EUR/kWh)', def: '0.35', step: '0.01' },
      { name: 'purchase', label: 'Aanschafprijs (EUR)', def: '1200', step: '50' },
      { name: 'years', label: 'Periode (jaar)', def: '5', step: '1' },
    ],
    compute: v => {
      const r = kokendTCO({ standbyW: +v.standbyW, kwhPrice: +v.kwhPrice, purchase: +v.purchase, years: +v.years });
      return [
        { label: 'Energie', value: `${r.kwhPerYear} kWh/jaar` },
        { label: 'Energiekosten', value: `EUR ${r.energyCostPerYear}/jaar` },
        { label: `Totale kosten (${v.years} jaar)`, value: `EUR ${r.totalCost}` },
      ];
    },
  },
  flessen: {
    fields: [
      { name: 'bottlesPerWeek', label: 'Flessen per week', def: '7', step: '1' },
      { name: 'bottlePrice', label: 'Prijs per fles (EUR)', def: '0.7', step: '0.05' },
    ],
    compute: v => {
      const r = bottledSavings({ bottlesPerWeek: +v.bottlesPerWeek, bottlePrice: +v.bottlePrice });
      return [
        { label: 'Flessen', value: `${r.bottlesPerYear}/jaar` },
        { label: 'Besparing met kraanwater', value: `EUR ${r.euroPerYear}/jaar` },
        { label: 'Indicatieve CO2-besparing', value: `${r.co2KgPerYear} kg/jaar` },
      ];
    },
  },
  hardheid: {
    fields: [
      { name: 'value', label: 'Waarde', def: '10', step: '0.1' },
      { name: 'unit', label: 'Eenheid', type: 'select', def: 'dH', options: [['dH', 'dH (Duitse graad)'], ['mmol', 'mmol/L'], ['ppm', 'ppm (mg/L CaCO3)'], ['fH', 'fH (Franse graad)']] },
    ],
    compute: v => {
      const r = hardnessConvert({ value: +v.value, unit: v.unit });
      return [
        { label: 'dH', value: `${r.dH}` },
        { label: 'mmol/L', value: `${r.mmol}` },
        { label: 'ppm (mg/L CaCO3)', value: `${r.ppm}` },
        { label: 'fH', value: `${r.fH}` },
      ];
    },
  },
  filterdatum: {
    fields: [
      { name: 'installISO', label: 'Installatiedatum', type: 'date', def: '2026-01-01' },
      { name: 'intervalMonths', label: 'Interval (maanden)', def: '6', step: '1' },
    ],
    compute: v => {
      const r = filterReplaceDate({ installISO: v.installISO, intervalMonths: +v.intervalMonths });
      return [{ label: 'Volgende vervangdatum', value: r.next ?? 'ongeldige datum' }];
    },
  },
  kalkrisico: {
    fields: [{ name: 'dH', label: 'Waterhardheid (dH)', def: '12', step: '1' }],
    compute: v => {
      const r = kalkRisk({ dH: +v.dH });
      return [
        { label: 'Hardheidsklasse', value: r.klasse },
        { label: 'Kalkrisico', value: r.risico },
      ];
    },
  },
  rejectie: {
    fields: [
      { name: 'tdsIn', label: 'TDS toevoer (mg/L)', def: '300', step: '10' },
      { name: 'tdsOut', label: 'TDS permeaat (mg/L)', def: '15', step: '5' },
    ],
    compute: v => {
      const r = roRejection({ tdsIn: +v.tdsIn, tdsOut: +v.tdsOut });
      return [
        { label: 'Rejectie', value: r.rejectionPct === null ? 'onbekend' : `${r.rejectionPct}%` },
        { label: 'Oordeel', value: r.verdict },
      ];
    },
  },
  verbruik: {
    fields: [{ name: 'persons', label: 'Aantal personen', def: '3', step: '1' }],
    compute: v => {
      const r = householdUsage({ persons: +v.persons });
      return [
        { label: 'Verbruik', value: `${r.perDayL} L/dag` },
        { label: 'Per jaar', value: `${r.perYearM3} m3/jaar` },
      ];
    },
  },
  zoutinterval: {
    fields: [
      { name: 'reservoirKg', label: 'Zoutreservoir (kg)', def: '25', step: '1' },
      { name: 'saltKgPerYear', label: 'Zoutverbruik (kg/jaar)', def: '50', step: '5' },
    ],
    compute: v => {
      const r = saltRefillInterval({ reservoirKg: +v.reservoirKg, saltKgPerYear: +v.saltKgPerYear });
      return [{ label: 'Bijvullen elke', value: r.days === null ? 'onbekend' : `${r.days} dagen` }];
    },
  },
};

// Per rekentool de meest passende PureAqua-bestemming (contextueel, na het resultaat).
const CTA_MAP: Record<string, { dest: string; campaign: string; label: string }> = {
  zout: { dest: 'joep', campaign: 'waterontharder', label: 'Bekijk de Joep waterontharder (zonder zout)' },
  afvalwater: { dest: 'zuiverWaterKranen', campaign: 'omgekeerde-osmose', label: 'Bekijk een osmosesysteem met kraan' },
  kokend: { dest: 'vierInEen', campaign: 'kokend-water', label: 'Bekijk de PureAqua 4-in-1 kraan' },
  flessen: { dest: 'zuiverWaterKranen', campaign: 'omgekeerde-osmose', label: 'Stop met flessen: bekijk de zuiver-water-kranen' },
  hardheid: { dest: 'waterontharders', campaign: 'waterontharder', label: 'Bekijk de waterontharders bij PureAqua' },
  filterdatum: { dest: 'filtersets', campaign: 'omgekeerde-osmose', label: 'Bekijk de filtersets bij PureAqua' },
  kalkrisico: { dest: 'waterontharders', campaign: 'waterontharder', label: 'Bekijk de waterontharders bij PureAqua' },
  rejectie: { dest: 'zuiverWaterKranen', campaign: 'omgekeerde-osmose', label: 'Bekijk een osmosesysteem met kraan' },
  verbruik: { dest: 'zuiverWaterKranen', campaign: 'omgekeerde-osmose', label: 'Bekijk de zuiver-water-kranen' },
  zoutinterval: { dest: 'joep', campaign: 'waterontharder', label: 'Bekijk de Joep waterontharder (zonder zout)' },
};

export function CalculatorClient({ kind }: { kind: string }) {
  const cfg = CONFIG[kind];
  const [values, setValues] = useState<Record<string, string>>(
    () => Object.fromEntries((cfg?.fields ?? []).map(f => [f.name, f.def])),
  );
  if (!cfg) return null;

  const m = CTA_MAP[kind];
  const cta = m
    ? { label: m.label, href: buildShopUrl(m.dest as Parameters<typeof buildShopUrl>[0], { campaign: m.campaign, content: `hulpmiddelen-${kind}-cta` }) }
    : null;

  let results: Result[] = [];
  try {
    results = cfg.compute(values);
  } catch {
    results = [];
  }

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 my-6" aria-label="Rekenhulp">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        {cfg.fields.map(f => (
          <label key={f.name} className="text-sm text-gray-700">
            <span className="block mb-1 font-medium">{f.label}</span>
            {f.type === 'select' ? (
              <select
                className="w-full border border-gray-200 rounded-lg px-3 py-2"
                value={values[f.name]}
                onChange={e => setValues(v => ({ ...v, [f.name]: e.target.value }))}
              >
                {f.options!.map(([val, lab]) => (
                  <option key={val} value={val}>{lab}</option>
                ))}
              </select>
            ) : (
              <input
                type={f.type ?? 'number'}
                step={f.step}
                className="w-full border border-gray-200 rounded-lg px-3 py-2"
                value={values[f.name]}
                onChange={e => setValues(v => ({ ...v, [f.name]: e.target.value }))}
              />
            )}
          </label>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
        {results.map(r => (
          <div key={r.label} className="flex justify-between px-4 py-2.5 text-sm">
            <span className="text-gray-600">{r.label}</span>
            <span className="font-semibold text-[#003F5C]">{r.value}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3">
        Indicatieve berekening op basis van je invoer en transparante aannames. Geen exacte meting.
      </p>
      {cta && (
        <div className="mt-4 bg-[#E0F2FE] border border-[#BAE6FD] rounded-xl p-4">
          <a
            href={cta.href}
            rel="sponsored"
            className="inline-flex items-center gap-1.5 bg-[#005F8A] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#003F5C] transition-colors"
          >
            {cta.label}
          </a>
          <AffiliateDisclosure className="mt-2" />
        </div>
      )}
    </div>
  );
}
