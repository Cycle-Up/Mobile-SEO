import { FOUR_IN_ONE } from '@/lib/kranen.mjs';

const ROWS: [string, string][] = [
  ['PFOS (PFAS)', FOUR_IN_ONE.lab.PFOS],
  ['PFOA (PFAS)', FOUR_IN_ONE.lab.PFOA],
  ['Lood', FOUR_IN_ONE.lab.lood],
  ['Vrij chloor', FOUR_IN_ONE.lab.chloor],
  ['Fluoride', FOUR_IN_ONE.lab.fluoride],
  ['Microplastics (polystyreen, 3 micrometer)', '99,99%'],
  ['Totaal coliforme bacteriën', FOUR_IN_ONE.lab.coliform],
];

/**
 * Labresultaten van het osmosesysteem van de PureAqua 4-in-1 kraan (SGS), met bron.
 * Cijfers komen uit lib/kranen.mjs; PureAqua gaf toestemming om het rapport te citeren.
 */
export function SgsResults() {
  const r = FOUR_IN_ONE.labReport;
  return (
    <section className="border border-gray-200 rounded-2xl p-5 bg-white">
      <h2 className="text-xl font-bold text-[#003F5C] mb-2">Getest door {r.lab}: dit haalt het osmosesysteem eruit</h2>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        Het complete osmosesysteem van de {FOUR_IN_ONE.name} is door het onafhankelijke laboratorium {r.lab} getest
        (rapport {r.number}, {r.date}). Gemeten reductie per stof:
      </p>
      <table className="w-full text-sm border-collapse mb-3">
        <thead>
          <tr className="bg-[#E0F2FE]">
            <th className="text-left py-2 px-3 font-semibold text-[#003F5C]">Stof</th>
            <th className="text-right py-2 px-3 font-semibold text-[#003F5C]">Minder</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([stof, waarde]) => (
            <tr key={stof} className="border-b border-gray-100">
              <td className="py-2 px-3 text-gray-700">{stof}</td>
              <td className="py-2 px-3 text-right font-semibold text-[#005F8A]">{waarde}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-500">
        Gemeten op een nieuw systeem bij circa 1,6 liter per minuut.{' '}
        <a href={r.url} className="underline" rel="noopener">Bekijk het {r.lab}-testrapport (pdf)</a>.
      </p>
    </section>
  );
}
