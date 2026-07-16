import type { Metadata } from 'next';
import Link from 'next/link';
import { gemeenten } from '@/data/gemeenten';
import { SchemaOrg } from '@/components/SchemaOrg';

const BASE = 'https://waterfilterplatform.nl';
const URL = `${BASE}/rapporten/waterhardheid-nederland-2026`;
const PUBLISHED = '2026-07-16';

/**
 * Alle cijfers in dit rapport worden bij build-time berekend uit de on-site
 * dataset (data/gemeenten.ts). Zo blijven kop-cijfers, tabellen en tekst altijd
 * in sync met de data en staan er geen losse, verouderende getallen in de prose.
 */
function computeStats() {
  const n = gemeenten.length;
  const dHs = gemeenten.map(g => g.hardheid);
  const sum = dHs.reduce((a, b) => a + b, 0);
  const mean = Math.round((sum / n) * 10) / 10;
  const sorted = [...dHs].sort((a, b) => a - b);
  const median = sorted[Math.floor(n / 2)];
  const min = Math.min(...dHs);
  const max = Math.max(...dHs);

  const byHard = [...gemeenten].sort((a, b) => b.hardheid - a.hardheid || a.naam.localeCompare(b.naam));
  const hardst = byHard.slice(0, 8);
  const zachtst = [...gemeenten].sort((a, b) => a.hardheid - b.hardheid || a.naam.localeCompare(b.naam)).slice(0, 8);

  const catCount: Record<string, number> = {};
  for (const g of gemeenten) catCount[g.categorie] = (catCount[g.categorie] || 0) + 1;

  const provMap: Record<string, number[]> = {};
  for (const g of gemeenten) (provMap[g.provincie] ||= []).push(g.hardheid);
  const provincies = Object.entries(provMap)
    .map(([p, v]) => ({ naam: p, gem: Math.round((v.reduce((a, b) => a + b, 0) / v.length) * 10) / 10, aantal: v.length }))
    .sort((a, b) => b.gem - a.gem);

  const wbMap: Record<string, number[]> = {};
  for (const g of gemeenten) (wbMap[g.waterbedrijf] ||= []).push(g.hardheid);
  const waterbedrijven = Object.entries(wbMap)
    .map(([w, v]) => ({ naam: w, gem: Math.round((v.reduce((a, b) => a + b, 0) / v.length) * 10) / 10, aantal: v.length }))
    .sort((a, b) => b.aantal - a.aantal)
    .slice(0, 9);

  return { n, mean, median, min, max, hardst, zachtst, catCount, provincies, waterbedrijven };
}

const S = computeStats();

const CATEGORIE_VOLGORDE = ['zacht', 'matig', 'matig hard', 'hard', 'zeer hard'];

const quickAnswer =
  `Het Nederlandse kraanwater heeft een gemiddelde hardheid van ${S.mean.toString().replace('.', ',')} dH, met een spreiding van ${S.min} dH (zachtst) tot ${S.max} dH (hardst) over ${S.n} gemeenten. Het zuiden (Noord-Brabant en Limburg) is het hardst; het noorden (Groningen en Friesland) het zachtst.`;

export const metadata: Metadata = {
  title: 'Waterhardheid in Nederland 2026 - datarapport per gemeente',
  description:
    `Datarapport waterhardheid: gemiddeld ${S.mean.toString().replace('.', ',')} dH over ${S.n} gemeenten (${S.min}-${S.max} dH). Hardste en zachtste regio's, per provincie en waterbedrijf.`,
  alternates: { canonical: URL },
  openGraph: {
    title: 'Waterhardheid in Nederland 2026 - datarapport per gemeente',
    description: `Gemiddeld ${S.mean.toString().replace('.', ',')} dH over ${S.n} gemeenten. Hardste en zachtste regio's van Nederland.`,
    url: URL,
    type: 'article',
    locale: 'nl_NL',
  },
};

function Kpi({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-[#BAE6FD] bg-[#F0F9FF] p-4 text-center">
      <div className="text-2xl md:text-3xl font-bold text-[#003F5C]">{value}</div>
      <div className="text-xs text-gray-600 mt-1 font-medium">{label}</div>
      {sub && <div className="text-[11px] text-gray-400 mt-0.5">{sub}</div>}
    </div>
  );
}

export default function WaterhardheidNederland2026Page() {
  return (
    <>
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterhardheid in Nederland 2026: datarapport per gemeente',
          description: metadata.description as string,
          datePublished: PUBLISHED,
          dateModified: PUBLISHED,
          url: URL,
        }}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'Dataset',
            name: 'Waterhardheid in Nederland per gemeente (2026)',
            description:
              `Indicatieve waterhardheid (dH) per Nederlandse gemeente met waterbedrijf; ${S.n} gemeenten, gemiddeld ${S.mean} dH (${S.min}-${S.max} dH).`,
            url: URL,
            inLanguage: 'nl-NL',
            isAccessibleForFree: true,
            creator: { '@id': `${BASE}/#organization` },
            license: `${BASE}/ai.txt`,
            spatialCoverage: { '@type': 'Place', name: 'Nederland' },
            variableMeasured: { '@type': 'PropertyValue', name: 'Waterhardheid', unitText: 'dH' },
            distribution: [
              { '@type': 'DataDownload', encodingFormat: 'application/json', contentUrl: `${BASE}/data/gemeente-hardheid.json` },
            ],
          },
        ]}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: BASE },
          { name: 'Rapporten', url: `${BASE}/rapporten` },
          { name: 'Waterhardheid in Nederland 2026', url: URL },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/rapporten" className="hover:text-[#005F8A]">Rapporten</Link>
            <span className="mx-2">/</span>
            <span>Waterhardheid in Nederland 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid in Nederland 2026: datarapport per gemeente
          </h1>
          <p className="quick-answer text-gray-700 text-lg leading-relaxed" data-speakable="true">
            {quickAnswer}
          </p>
          <p className="text-xs text-gray-400 mt-3">
            Gepubliceerd op 16 juli 2026 &middot; Bron: on-site dataset op basis van openbare opgaven van
            drinkwaterbedrijven (indicatief) &middot;{' '}
            <a href="/data/gemeente-hardheid.json" className="text-[#005F8A] underline">download JSON</a>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Kop-cijfers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <Kpi value={`${S.mean.toString().replace('.', ',')} dH`} label="Landelijk gemiddelde" sub={`mediaan ${S.median} dH`} />
          <Kpi value={`${S.min}-${S.max} dH`} label="Spreiding" sub={`over ${S.n} gemeenten`} />
          <Kpi value={`${S.max} dH`} label="Hardst" sub={`${S.hardst[0].naam} e.a. (${S.hardst[0].waterbedrijf})`} />
          <Kpi value={`${S.min} dH`} label="Zachtst" sub={`${S.zachtst[0].naam} e.a. (${S.zachtst[0].waterbedrijf})`} />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Kernbevindingen</h2>
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li>
              Gemiddeld is Nederlands kraanwater {S.mean.toString().replace('.', ',')} dH (mediaan {S.median} dH):
              matig tot matig hard. Geen enkele gemeente in de dataset heeft echt zacht water onder de
              stadswaterkraan.
            </li>
            <li>
              Er is een duidelijke noord-zuidgradient: het zuiden ({S.provincies[0].naam},{' '}
              {S.provincies[1].naam}) is het hardst, het noorden ({S.provincies[S.provincies.length - 1].naam},{' '}
              {S.provincies[S.provincies.length - 2].naam}) het zachtst.
            </li>
            <li>
              De hardheid loopt op van {S.min} dH tot {S.max} dH - meer dan een verdrievoudiging tussen de
              zachtste en hardste gemeente.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Gemiddelde waterhardheid per provincie</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="py-2 pr-4">Provincie</th>
                  <th className="py-2 pr-4">Gemiddelde hardheid (dH)</th>
                  <th className="py-2">Gemeenten</th>
                </tr>
              </thead>
              <tbody>
                {S.provincies.map((p) => (
                  <tr key={p.naam} className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium text-gray-800">{p.naam}</td>
                    <td className="py-2 pr-4">{p.gem.toString().replace('.', ',')}</td>
                    <td className="py-2 text-gray-500">{p.aantal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Hardste gemeenten</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-200">
                    <th className="py-2 pr-4">Gemeente</th>
                    <th className="py-2 pr-4">dH</th>
                    <th className="py-2">Waterbedrijf</th>
                  </tr>
                </thead>
                <tbody>
                  {S.hardst.map((g) => (
                    <tr key={g.naam} className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-medium text-gray-800">{g.naam}</td>
                      <td className="py-2 pr-4">{g.hardheid}</td>
                      <td className="py-2 text-gray-500">{g.waterbedrijf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Zachtste gemeenten</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-200">
                    <th className="py-2 pr-4">Gemeente</th>
                    <th className="py-2 pr-4">dH</th>
                    <th className="py-2">Waterbedrijf</th>
                  </tr>
                </thead>
                <tbody>
                  {S.zachtst.map((g) => (
                    <tr key={g.naam} className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-medium text-gray-800">{g.naam}</td>
                      <td className="py-2 pr-4">{g.hardheid}</td>
                      <td className="py-2 text-gray-500">{g.waterbedrijf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Hardheid per waterbedrijf</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Je waterhardheid wordt bepaald door je waterbedrijf en de bron waaruit het put. De grootste
            leveranciers en hun gemiddelde hardheid:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="py-2 pr-4">Waterbedrijf</th>
                  <th className="py-2 pr-4">Gemiddelde hardheid (dH)</th>
                  <th className="py-2">Gemeenten (in dataset)</th>
                </tr>
              </thead>
              <tbody>
                {S.waterbedrijven.map((w) => (
                  <tr key={w.naam} className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium text-gray-800">{w.naam}</td>
                    <td className="py-2 pr-4">{w.gem.toString().replace('.', ',')}</td>
                    <td className="py-2 text-gray-500">{w.aantal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Verdeling naar hardheidsklasse</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-200">
                  <th className="py-2 pr-4">Hardheidsklasse</th>
                  <th className="py-2 pr-4">Aantal gemeenten</th>
                  <th className="py-2">Aandeel</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORIE_VOLGORDE.filter((c) => S.catCount[c]).map((c) => (
                  <tr key={c} className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium text-gray-800 capitalize">{c}</td>
                    <td className="py-2 pr-4">{S.catCount[c]}</td>
                    <td className="py-2 text-gray-500">{Math.round((S.catCount[c] / S.n) * 100)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat betekent dit voor jou?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Hoe harder je water, hoe sneller je kalkaanslag ziet op kranen, in de waterkoker en in
            apparaten. In het zuiden en oosten (vaak boven 14 dH) loont het eerder om kalk structureel aan
            te pakken met een{' '}
            <Link href="/waterontharder" className="text-[#005F8A] underline hover:text-[#003F5C]">waterontharder</Link>;
            in het zachtere noorden en westen is regelmatig ontkalken van apparaten meestal voldoende. Wat
            hardheid precies betekent lees je in{' '}
            <Link href="/kennisbank/hoeveel-kalk-kraanwater-nederland" className="text-[#005F8A] underline hover:text-[#003F5C]">
              hoeveel kalk zit er in Nederlands kraanwater
            </Link>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Zoek je de exacte waarde voor jouw gemeente? Bekijk de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:text-[#003F5C]">waterhardheid per gemeente</Link>{' '}
            of de{' '}
            <Link href="/data/gemeente-hardheid" className="text-[#005F8A] underline hover:text-[#003F5C]">open dataset</Link>.
            De waarde van je eigen waterbedrijf per postcode is altijd leidend boven een regionaal gemiddelde.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Methode en bronnen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Dit rapport is samengesteld uit de on-site waterhardheid-dataset met {S.n} Nederlandse
            gemeenten. Per gemeente is de indicatieve hardheid in Duitse hardheidsgraden (dH) en het
            leverende drinkwaterbedrijf vastgelegd, op basis van openbare opgaven van de waterbedrijven.
            Gemiddelden per provincie en waterbedrijf zijn ongewogen gemiddelden van de gemeenten in de
            dataset; de hardheid kan binnen een leveringsgebied verschillen. Waarden zijn indicatief en
            richtinggevend, geen meting per adres.
          </p>
          <p className="text-sm text-gray-500">
            Bronnen: openbare opgaven van de Nederlandse drinkwaterbedrijven (o.a. Vitens, Brabant Water,
            Evides, Dunea, WML, PWN, WMD, Waternet), aangevuld met de landelijke context van Vewin en RIVM.
          </p>
        </section>

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/waterhardheid', 'Waterhardheid per gemeente'],
              ['/data/gemeente-hardheid', 'Open dataset (JSON)'],
              ['/kennisbank/hoeveel-kalk-kraanwater-nederland', 'Hoeveel kalk in kraanwater?'],
              ['/rapporten/staat-van-drinkwater-2026', 'Staat van drinkwater 2026'],
            ].map(([href, t]) => (
              <Link
                key={href}
                href={href}
                className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all"
              >
                {t}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
