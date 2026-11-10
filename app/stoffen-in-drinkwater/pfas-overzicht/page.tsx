import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { SourcesSection } from '@/components/SourcesSection';

// Stoffen-invalshoek: "pfoa pfos genx", "welke pfas stoffen". Normen staan op
// /drinkwaternormen/pfas, algemene uitleg op /pfas-water, regio's op /leidingwater/pfas.
const PAGE_URL = 'https://waterfilterplatform.nl/stoffen-in-drinkwater/pfas-overzicht';
const PAGE_TITLE = 'PFOA, PFOS en GenX: welke PFAS-stoffen er zijn';
const PAGE_DESCRIPTION =
  'PFOA, PFOS, GenX en andere PFAS-stoffen uitgelegd: waar ze vandaan komen, het verschil tussen lang- en kortketenig en welke stoffen in de drinkwaternorm tellen.';
const DATE_PUBLISHED = '2026-01-01';
const DATE_MODIFIED = '2026-11-10';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'article',
    url: PAGE_URL,
  },
};

const QUICK_ANSWER =
  "PFAS is een verzamelnaam voor duizenden synthetische stoffen met een sterke koolstof-fluorbinding, waardoor ze nauwelijks afbreken. De bekendste zijn PFOA, vroeger gebruikt bij de productie van Teflon, PFOS, vroeger gebruikt in blusschuim en textielbehandeling, en GenX (HFPO-DA), een vervanger van PFOA die Chemours in Dordrecht gebruikt. Je kunt PFAS grof indelen in langketenige stoffen, zoals PFOA en PFOS, en kortketenige stoffen, zoals GenX en PFBS. Voor drinkwater geldt een wettelijke norm voor de som van 20 aangewezen PFAS.";

const faqItems = [
  {
    question: 'Wat zijn PFAS?',
    answer:
      'PFAS (poly- en perfluoralkylstoffen) zijn duizenden synthetische stoffen met een fluorkoolstofketen. De koolstof-fluorbinding is zo sterk dat PFAS vrijwel niet afbreken in het milieu of het menselijk lichaam. Daarom worden ze ook wel eeuwige chemicaliën genoemd.',
  },
  {
    question: 'Wat is het verschil tussen PFOA, PFOS en GenX?',
    answer:
      'PFOA (perfluoroctaanzuur) en PFOS (perfluoroctaansulfonzuur) zijn langketenige PFAS die decennialang zijn gebruikt, onder meer bij de productie van Teflon en in blusschuim. Beide zijn in de EU aan banden gelegd. GenX (HFPO-DA) is een kortketenige stof die Chemours ontwikkelde als vervanger van PFOA. Ook GenX blijkt persistent.',
  },
  {
    question: 'Waarom maakt de ketenlengte uit?',
    answer:
      'Langketenige PFAS zoals PFOA en PFOS hopen sterker op in het lichaam. Kortketenige PFAS zoals GenX en PFBS zijn mobieler in water en worden minder goed vastgehouden door actief kool. Bij de keuze van een filter is dat verschil daarom van belang.',
  },
  {
    question: 'Welke PFAS-stoffen tellen mee in de drinkwaternorm?',
    answer:
      'De wettelijke EU-norm van 100 nanogram per liter geldt voor de som van 20 aangewezen PFAS, waaronder PFOA, PFOS, PFNA en PFHxS. Het RIVM hanteert daarnaast een advieswaarde van 4,4 nanogram per liter in PFOA-equivalenten, waarbij stoffen worden gewogen naar hun giftigheid.',
  },
];

const stoffen = [
  {
    stof: 'PFOA',
    naam: 'Perfluoroctaanzuur',
    gebruik: 'Vroeger bij de productie van Teflon (antiaanbaklagen)',
    keten: 'Langketenig',
  },
  {
    stof: 'PFOS',
    naam: 'Perfluoroctaansulfonzuur',
    gebruik: 'Vroeger in blusschuim en textielbehandeling',
    keten: 'Langketenig',
  },
  {
    stof: 'GenX (HFPO-DA)',
    naam: 'Hexafluorpropyleenoxide-dimeerzuur',
    gebruik: 'Vervanger van PFOA, gebruikt door Chemours in Dordrecht',
    keten: 'Kortketenig',
  },
  {
    stof: 'PFNA',
    naam: 'Perfluornonaanzuur',
    gebruik: 'Telt mee in de EFSA-som en in de wettelijke som van 20 PFAS',
    keten: 'Langketenig',
  },
  {
    stof: 'PFHxS',
    naam: 'Perfluorhexaansulfonzuur',
    gebruik: 'Telt mee in de EFSA-som en in de wettelijke som van 20 PFAS',
    keten: 'Langketenig',
  },
  {
    stof: 'PFBS',
    naam: 'Perfluorbutaansulfonzuur',
    gebruik: 'Kortketenige stof die vaker in milieu en water wordt gevonden',
    keten: 'Kortketenig',
  },
];

export default function PfasOverzichtPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Stoffen in drinkwater', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater' },
        { name: 'PFAS-stoffen', url: PAGE_URL },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="Article" article={{
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        url: PAGE_URL,
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; PFAS-stoffen
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            PFOA, PFOS en GenX: welke PFAS-stoffen er zijn
          </h1>
          <QuickAnswer answer={QUICK_ANSWER} />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <AuthorBox datePublished={DATE_PUBLISHED} dateModified={DATE_MODIFIED} />

        <p className="text-gray-700 leading-relaxed">
          Deze pagina gaat over de stoffen zelf. Wat PFAS in kraanwater betekenen, lees je op{' '}
          <Link href="/pfas-water" className="text-[#005F8A] hover:underline">PFAS in drinkwater</Link>. De
          wettelijke grens en de RIVM-advieswaarde staan op{' '}
          <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline">PFAS-normen voor drinkwater</Link>.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat zijn PFAS?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PFAS staat voor poly- en perfluoralkylstoffen: een grote groep van duizenden synthetische stoffen met een
            fluorkoolstofketen als basis. De koolstof-fluorbinding is een van de sterkste in de organische chemie.
            Daardoor breken PFAS vrijwel niet af in de natuur, de bodem, het water of het menselijk lichaam.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            PFAS zijn gebruikt omdat ze water, vet en vuil afstoten en tegen hitte kunnen. Je vond ze in
            antiaanbaklagen, blusschuim, waterafstotende kleding en voedselverpakkingen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">De bekendste PFAS-stoffen</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Stof</th>
                  <th className="p-3 text-left">Volledige naam</th>
                  <th className="p-3 text-left">Waar bekend van</th>
                  <th className="p-3 text-left">Keten</th>
                </tr>
              </thead>
              <tbody>
                {stoffen.map((s, i) => (
                  <tr key={s.stof} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{s.stof}</td>
                    <td className="p-3">{s.naam}</td>
                    <td className="p-3">{s.gebruik}</td>
                    <td className="p-3">{s.keten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            PFOA en PFOS zijn in de EU aan banden gelegd, maar blijven door hun persistentie nog lang in het milieu
            aanwezig. GenX werd door Chemours ontwikkeld als vervanger van PFOA; ook deze stof blijkt slecht af te
            breken. Een uitgebreidere uitleg per stof vind je bij{' '}
            <Link href="/pfas-waterfilter/pfas-soorten" className="text-[#005F8A] hover:underline">PFAS-soorten uitgelegd</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Langketenig en kortketenig: waarom dat uitmaakt</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Langketenige PFAS zoals PFOA en PFOS hopen sterker op in het lichaam. Kortketenige PFAS zoals GenX en PFBS
            zijn mobieler in water en worden minder goed vastgehouden door actief kool. Dat verschil speelt mee bij de
            zuivering van drinkwater en bij de keuze van een filter thuis.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
            <p className="font-semibold text-blue-800 mb-1">Ophoping in het lichaam</p>
            <p className="text-blue-700 text-sm">
              PFAS hopen op in het menselijk lichaam, vooral in bloed en lever. Langdurige blootstelling aan
              verhoogde concentraties wordt in onderzoek in verband gebracht met onder meer een verminderde werking van het immuunsysteem en een
              verhoogd cholesterol.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welke stoffen tellen mee in de norm?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            De wettelijke EU-norm voor drinkwater is 100 nanogram per liter voor de som van 20 aangewezen PFAS,
            waaronder PFOA, PFOS, PFNA en PFHxS. Het RIVM hanteert daarnaast een advieswaarde van 4,4 nanogram per
            liter in PFOA-equivalenten; daarbij weegt elke stof mee naar zijn giftigheid. Hoe die twee getallen zich
            tot elkaar verhouden, leggen we uit op{' '}
            <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] hover:underline">PFAS-normen voor drinkwater</Link>.
            Waar in Nederland de waarden het hoogst zijn, lees je op{' '}
            <Link href="/leidingwater/pfas" className="text-[#005F8A] hover:underline">PFAS in leidingwater per regio</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat betekent dit voor een filter?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Omdat kortketenige stoffen zich minder goed laten vangen door actief kool, maakt het voor je filterkeuze
            uit welke PFAS je wilt verminderen.{' '}
            <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose</Link>{' '}
            werkt via een membraan en is minder afhankelijk van de ketenlengte. Welke filters PFAS verminderen en wat
            daarvan gemeten is, staat in onze{' '}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] hover:underline">gids over PFAS-waterfilters</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Veelgestelde vragen over PFAS-stoffen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS-waterfilter gids</h3>
              <p className="text-sm text-gray-600">Welke filters PFAS verminderen en wat er gemeten is.</p>
            </Link>
            <Link href="/leidingwater/pfas" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in leidingwater per regio</h3>
              <p className="text-sm text-gray-600">Waar de waarden het hoogst zijn en hoe je jouw adres opzoekt.</p>
            </Link>
            <Link href="/drinkwaternormen/pfas" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS-normen voor drinkwater</h3>
              <p className="text-sm text-gray-600">EU-norm van 100 ng/L voor de som van 20 PFAS en de RIVM-advieswaarde.</p>
            </Link>
            <Link href="/pfas-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater</h3>
              <p className="text-sm text-gray-600">Wat PFAS in kraanwater betekenen en wat de feiten zijn.</p>
            </Link>
          </div>
        </section>

        <SourcesSection
          sources={[
            'RIVM, PFAS in drinkwater en de advieswaarde van 4,4 ng/L PFOA-equivalenten',
            'Europese Drinkwaterrichtlijn 2020/2184/EU, PFAS-parameters van kracht per 12 januari 2026',
            'EFSA, wetenschappelijk advies over PFAS in voedsel (2020)',
          ]}
        />

        <HealthDisclaimer />
        <CTABanner context="osmose" />
      </div>
    </>
  );
}
