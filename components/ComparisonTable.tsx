interface Product {
  naam: string;
  prijs: string;
  osmoseFilter: boolean;
  kokendWater: boolean;
  koudWater: boolean;
  bruisendWater: boolean;
  filterLevensduur: string;
  installatie: string;
  highlight?: boolean;
}

const producten: Product[] = [
  {
    naam: 'PureAqua 4-in-1',
    prijs: '€ 699 – 899',
    osmoseFilter: true,
    kokendWater: true,
    koudWater: true,
    bruisendWater: true,
    filterLevensduur: '12 maanden',
    installatie: 'Eenvoudig, onder aanrecht',
    highlight: true,
  },
  {
    naam: 'Quooker Combi+',
    prijs: '€ 1.500 – 2.000',
    osmoseFilter: false,
    kokendWater: true,
    koudWater: false,
    bruisendWater: false,
    filterLevensduur: 'N.v.t.',
    installatie: 'Professionele monteur',
    highlight: false,
  },
  {
    naam: 'Quooker Fusion + CUBE',
    prijs: '€ 2.200 – 2.800',
    osmoseFilter: false,
    kokendWater: true,
    koudWater: true,
    bruisendWater: true,
    filterLevensduur: '3 maanden',
    installatie: 'Professionele monteur',
    highlight: false,
  },
  {
    naam: 'Grohe Blue Home',
    prijs: '€ 400 – 700',
    osmoseFilter: false,
    kokendWater: false,
    koudWater: true,
    bruisendWater: true,
    filterLevensduur: '3 maanden',
    installatie: 'Eenvoudig',
    highlight: false,
  },
];

function Vinkje({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="text-green-600 font-bold">✓</span>
  ) : (
    <span className="text-gray-300">✗</span>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <table className="w-full min-w-[600px] text-sm border-collapse">
        <thead>
          <tr className="bg-[#E0F2FE]">
            <th className="text-left py-3 px-4 font-semibold text-[#003F5C]">Kraan</th>
            <th className="py-3 px-3 font-semibold text-[#003F5C]">Prijs</th>
            <th className="py-3 px-3 font-semibold text-[#003F5C]">Osmose</th>
            <th className="py-3 px-3 font-semibold text-[#003F5C]">Kokend</th>
            <th className="py-3 px-3 font-semibold text-[#003F5C]">Koud</th>
            <th className="py-3 px-3 font-semibold text-[#003F5C]">Bruisend</th>
            <th className="py-3 px-3 font-semibold text-[#003F5C]">Filter</th>
          </tr>
        </thead>
        <tbody>
          {producten.map((p) => (
            <tr
              key={p.naam}
              className={p.highlight ? 'bg-[#005F8A] text-white font-medium' : 'border-b border-gray-100'}
            >
              <td className="py-3 px-4">
                {p.naam}
                {p.highlight && (
                  <span className="ml-2 text-xs bg-white text-[#005F8A] px-1.5 py-0.5 rounded font-bold">
                    Aanbevolen
                  </span>
                )}
              </td>
              <td className="py-3 px-3 text-center">{p.prijs}</td>
              <td className="py-3 px-3 text-center">
                {p.highlight ? (p.osmoseFilter ? '✓' : '✗') : <Vinkje ok={p.osmoseFilter} />}
              </td>
              <td className="py-3 px-3 text-center">
                {p.highlight ? (p.kokendWater ? '✓' : '✗') : <Vinkje ok={p.kokendWater} />}
              </td>
              <td className="py-3 px-3 text-center">
                {p.highlight ? (p.koudWater ? '✓' : '✗') : <Vinkje ok={p.koudWater} />}
              </td>
              <td className="py-3 px-3 text-center">
                {p.highlight ? (p.bruisendWater ? '✓' : '✗') : <Vinkje ok={p.bruisendWater} />}
              </td>
              <td className="py-3 px-3 text-center text-xs">{p.filterLevensduur}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 mt-2">Prijzen indicatief, inclusief installatie. Bijgewerkt mei 2026.</p>
    </div>
  );
}
