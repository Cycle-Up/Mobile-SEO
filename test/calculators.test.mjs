import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  saltCost, osmoseWaste, kokendTCO, bottledSavings, hardnessConvert,
  filterReplaceDate, kalkRisk, roRejection, householdUsage, saltRefillInterval,
} from '../lib/calculators.mjs';

test('saltCost scales with persons and dH', () => {
  const a = saltCost({ dH: 10, persons: 2 });
  assert.ok(a.saltKgPerYear > 0 && a.costPerYear > 0);
  const b = saltCost({ dH: 20, persons: 2 });
  assert.ok(b.saltKgPerYear > a.saltKgPerYear, 'harder water = more salt');
});

test('osmoseWaste computes waste from ratio', () => {
  const r = osmoseWaste({ permeatePerDayL: 10, wasteRatio: 1 });
  assert.equal(r.permeatePerYearL, 3650);
  assert.equal(r.wastePerYearL, 3650);
  assert.equal(r.totalInPerYearL, 7300);
});

test('kokendTCO adds purchase + yearly energy', () => {
  const r = kokendTCO({ standbyW: 10, kwhPrice: 0.35, purchase: 1000, years: 5 });
  assert.ok(r.kwhPerYear > 80 && r.kwhPerYear < 90); // 10W -> ~87.6 kWh
  assert.ok(r.totalCost > 1000);
});

test('bottledSavings yields euro and co2', () => {
  const r = bottledSavings({ bottlesPerWeek: 7, bottlePrice: 1 });
  assert.equal(r.bottlesPerYear, 364);
  assert.equal(r.euroPerYear, 364);
  assert.ok(r.co2KgPerYear > 0);
});

test('hardnessConvert round-trips dH', () => {
  const r = hardnessConvert({ value: 10, unit: 'dH' });
  assert.equal(r.dH, 10);
  // ppm should be ~178.5
  assert.ok(Math.abs(r.ppm - 178.5) < 1);
  // converting back from ppm gives ~10 dH
  const back = hardnessConvert({ value: r.ppm, unit: 'ppm' });
  assert.ok(Math.abs(back.dH - 10) < 0.1);
});

test('filterReplaceDate adds months', () => {
  assert.equal(filterReplaceDate({ installISO: '2026-01-15', intervalMonths: 6 }).next, '2026-07-15');
  assert.equal(filterReplaceDate({ installISO: 'bad', intervalMonths: 6 }).next, null);
});

test('kalkRisk classifies by dH', () => {
  assert.equal(kalkRisk({ dH: 5 }).klasse, 'zacht');
  assert.equal(kalkRisk({ dH: 10 }).klasse, 'gemiddeld');
  assert.equal(kalkRisk({ dH: 18 }).klasse, 'hard');
});

test('roRejection computes percentage and verdict', () => {
  const good = roRejection({ tdsIn: 300, tdsOut: 15 });
  assert.equal(good.rejectionPct, 95);
  assert.match(good.verdict, /goed/);
  const bad = roRejection({ tdsIn: 300, tdsOut: 200 });
  assert.match(bad.verdict, /versleten/);
});

test('householdUsage scales with persons', () => {
  const r = householdUsage({ persons: 3 });
  assert.equal(r.perDayL, 360);
  assert.ok(r.perYearM3 > 0);
});

test('saltRefillInterval returns days', () => {
  const r = saltRefillInterval({ reservoirKg: 25, saltKgPerYear: 50 });
  assert.ok(r.days > 0);
  assert.equal(saltRefillInterval({ reservoirKg: 25, saltKgPerYear: 0 }).days, null);
});
