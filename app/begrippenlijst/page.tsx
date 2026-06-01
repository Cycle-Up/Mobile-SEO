import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export function generateMetadata(): Metadata {
  return {
    title: 'Begrippenlijst waterfilters en drinkwater: alle termen uitgelegd',
    description:
      'Waterfilter begrippenlijst: TDS, dH, osmose, permeaat, ionenwisseling, PFAS en meer. Heldere definities van alle termen rond waterfiltratie en drinkwater.',
    alternates: { canonical: 'https://waterfilterplatform.nl/begrippenlijst' },
    openGraph: {
      title: 'Begrippenlijst waterfilters en drinkwater',
      description:
        'Alle termen rond waterfiltratie en drinkwaterkwaliteit helder uitgelegd, van TDS en dH tot omgekeerde osmose en PFAS.',
      url: 'https://waterfilterplatform.nl/begrippenlijst',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const BASE = 'https://waterfilterplatform.nl';

const terms: { name: string; description: string; href: string }[] = [
  { name: 'Actief kool (GAC/CTO)', description: 'Adsorptiemateriaal dat chloor, geur, smaak en sommige organische stoffen uit water bindt. Verwijdert geen opgeloste ionen zoals kalk, nitraat of lood.', href: '/filtertechnieken/actief-kool' },
  { name: 'Afvalwater (concentraat)', description: 'Het waterstroompje met geconcentreerde verontreinigingen dat een osmosesysteem afvoert. Moderne systemen halen een verhouding van 1:1 of beter.', href: '/omgekeerde-osmose/afvalwater' },
  { name: 'Boosterpomp', description: 'Pomp die de waterdruk voor een osmosemembraan verhoogt. Verbetert opbrengst en rendement bij lage leidingdruk.', href: '/omgekeerde-osmose/boosterpomp' },
  { name: 'CE-markering', description: 'Verklaring dat een product aan EU-regelgeving voldoet. Zegt op zichzelf niets over de filterprestatie of waterkwaliteit.', href: '/keurmerken/ce-markering' },
  { name: 'dH (Duitse hardheidsgraad)', description: 'Eenheid voor waterhardheid. 1 dH komt overeen met ongeveer 17,8 mg calciumcarbonaat per liter. Boven 15 dH spreekt men van hard water.', href: '/waterhardheid' },
  { name: 'Demineralisatie', description: 'Het verwijderen van vrijwel alle opgeloste mineralen en zouten uit water, bijvoorbeeld via omgekeerde osmose of destillatie.', href: '/kennisbank/gedestilleerd-water' },
  { name: 'Ionenwisseling', description: 'Techniek waarbij hardheidsionen (calcium en magnesium) worden uitgewisseld voor natrium. Dit is de basis van de meeste waterontharders.', href: '/filtertechnieken/ionenwisseling' },
  { name: 'Kiwa 113', description: 'Nederlandse materiaalveiligheidsnorm die garandeert dat een product geen schadelijke stoffen aan het drinkwater afgeeft.', href: '/keurmerken/kiwa-113' },
  { name: 'Membraan (RO)', description: 'Semi-permeabel filtervlies met poriën rond 0,0001 micrometer dat opgeloste stoffen tegenhoudt. Het hart van een omgekeerde-osmosesysteem.', href: '/omgekeerde-osmose/membraan' },
  { name: 'Microplastics', description: 'Kunststofdeeltjes kleiner dan 5 millimeter. Worden vrijwel volledig tegengehouden door omgekeerde osmose en ultrafiltratie.', href: '/drinkwaternormen/microplastics' },
  { name: 'Nanofiltratie (NF)', description: 'Membraanfiltratie tussen ultrafiltratie en osmose in. Verwijdert hardheid, pesticiden en hormonen, maar laat een deel van de zouten door.', href: '/filtertechnieken/nanofiltration' },
  { name: 'Nitraat', description: 'Stikstofverbinding die vooral via landbouw in water komt. De norm is 50 mg per liter; osmose en ionenwisseling verlagen het gehalte.', href: '/stoffen-in-drinkwater/nitraat-nitriet' },
  { name: 'NSF/ANSI 58', description: 'Internationale prestatienorm specifiek voor omgekeerde-osmosesystemen, met geverifieerde reductie van TDS, lood en arseen.', href: '/keurmerken/nsf-ansi-58' },
  { name: 'Omgekeerde osmose (RO)', description: 'Filtratie waarbij water onder druk door een membraan wordt geperst. Verwijdert 90-99% van opgeloste stoffen, inclusief lood, nitraat, PFAS en microplastics.', href: '/omgekeerde-osmose' },
  { name: 'Permeaat', description: 'Het gezuiverde water dat een osmosemembraan passeert. Tegenhanger van het concentraat (afvalwater).', href: '/omgekeerde-osmose' },
  { name: 'PFAS', description: 'Groep zeer persistente fluorverbindingen. De EU-norm voor drinkwater is 0,1 microgram per liter voor de som; osmose verwijdert 90-99%.', href: '/drinkwaternormen/pfas' },
  { name: 'pH-waarde', description: 'Maat voor zuurgraad van 0 tot 14. Osmosewater is licht zuur (rond 6-7); remineralisatie brengt de pH richting neutraal.', href: '/osmose-water/ph' },
  { name: 'Remineralisatie', description: 'Het terugvoegen van calcium en magnesium aan gefilterd water voor betere smaak en een hogere pH.', href: '/osmose-water/remineralisatie' },
  { name: 'Sedimentfilter', description: 'Voorfilter dat zand, roest en deeltjes groter dan 1 tot 5 micrometer tegenhoudt en zo het hoofdfilter beschermt.', href: '/sedimentfilter' },
  { name: 'TDS (Total Dissolved Solids)', description: 'Totaal aan opgeloste stoffen in milligram per liter. Nederlands kraanwater zit doorgaans op 200-500; osmosewater op 5-25.', href: '/kennisbank/tds-water' },
  { name: 'Ultrafiltratie (UF)', description: 'Membraanfiltratie met poriën van 0,01 tot 0,1 micrometer. Houdt bacterien, virussen en microplastics tegen, maar laat mineralen door.', href: '/filtertechnieken/ultrafiltratie' },
  { name: 'UV-sterilisatie', description: 'Ultraviolet licht dat micro-organismen inactiveert zonder chemie. Verwijdert geen opgeloste verontreinigingen.', href: '/waterfilter/uv-sterilisatie' },
  { name: 'Waterhardheid', description: 'Het gehalte aan calcium en magnesium in water, uitgedrukt in dH. Bepaalt kalkaanslag en welk filter zinvol is.', href: '/waterhardheid' },
  { name: 'Waterontharder', description: 'Systeem dat via ionenwisseling hardheidsionen vervangt door natrium, waardoor kalkaanslag afneemt.', href: '/waterontharder' },
];

export default function BegrippenlijstPage() {
  return (
    <>
      <SchemaOrg
        type="DefinedTermSet"
        definedTerms={{
          name: 'Begrippenlijst waterfilters en drinkwater',
          description: 'Definities van termen rond waterfiltratie, drinkwaterkwaliteit en filtertechnieken in Nederland.',
          url: `${BASE}/begrippenlijst`,
          terms: terms.map(t => ({ name: t.name, description: t.description, url: `${BASE}${t.href}` })),
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: BASE },
          { name: 'Begrippenlijst', url: `${BASE}/begrippenlijst` },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Begrippenlijst</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Begrippenlijst waterfilters en drinkwater
          </h1>
          <p className="text-gray-600 text-lg">
            Heldere definities van de belangrijkste termen rond waterfiltratie en drinkwaterkwaliteit -
            van TDS en dH tot omgekeerde osmose, PFAS en remineralisatie. Elk begrip linkt door naar
            een uitgebreide uitleg.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer
          question="Wat betekenen de belangrijkste waterfilter-termen?"
          answer="De kernbegrippen: TDS is het totaal aan opgeloste stoffen (mg/L); dH is de eenheid voor waterhardheid; omgekeerde osmose (RO) is filtratie via een membraan dat 90-99% van opgeloste stoffen verwijdert; permeaat is het gezuiverde water en concentraat het afvalwater; remineralisatie voegt mineralen terug toe voor smaak en pH."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-5">Alle begrippen van A tot Z</h2>
          <dl className="space-y-4">
            {terms.map(t => (
              <div key={t.name} className="border border-gray-100 rounded-xl p-4">
                <dt className="font-semibold text-gray-900 mb-1">
                  <Link href={t.href} className="hover:text-[#005F8A]">{t.name}</Link>
                </dt>
                <dd className="text-sm text-gray-600 leading-relaxed">{t.description}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-400 mt-4">
            Definities samengesteld door de redactie op basis van het Drinkwaterbesluit, RIVM,
            NSF/ANSI- en Kiwa-documentatie. Bijgewerkt mei 2026.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen per cluster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/filtertechnieken', 'Filtertechnieken', 'Alle technieken vergeleken'],
              ['/drinkwaternormen', 'Drinkwaternormen', 'Wettelijke normen in Nederland'],
              ['/stoffen-in-drinkwater', 'Stoffen in drinkwater', 'Per stofgroep uitgelegd'],
              ['/keurmerken', 'Keurmerken', 'NSF, Kiwa, ACS en CE'],
              ['/omgekeerde-osmose', 'Omgekeerde osmose', 'Complete gids over RO'],
              ['/waterhardheid', 'Waterhardheid', 'Per gemeente in Nederland'],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
