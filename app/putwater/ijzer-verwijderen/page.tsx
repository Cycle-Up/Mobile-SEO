import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'IJzer verwijderen uit putwater: beluchting, zandfilter, kosten',
  description:
    'IJzer (Fe2+/Fe3+) uit putwater: beluchting plus zandfilter of oxidatiefilter. EU-norm 200 microgram/L. Installatiekosten 600-1500 euro uitgelegd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/putwater/ijzer-verwijderen' },
};

const faqItems = [
  {
    q: 'Hoe herken ik te veel ijzer in mijn putwater?',
    a: 'IJzer in putwater veroorzaakt roestbruine of geelbruine vlekken op wasgoed, sanitair, in toiletpotten en op tegels. Het water heeft een metaalachtige, bittere smaak en kan na contact met lucht bruin verkleuren (oxidatie van Fe2+ naar Fe3+). Hardnekkige aanslag in waterkokers en op kranen wijst eveneens op verhoogd ijzergehalte. Boven de EU-norm van 200 microgram per liter (0,2 mg/L) treden deze problemen zichtbaar op.',
  },
  {
    q: 'Wat is het verschil tussen Fe2+ en Fe3+ in putwater?',
    a: 'Fe2+ (tweewaardig of opgelost ijzer, ook wel ferro-ijzer) is helder in zuurstofarm putwater en pas zichtbaar na blootstelling aan lucht. Fe3+ (driewaardig of ferri-ijzer) is reeds geoxideerd en zichtbaar als bruine vlokken of neerslag in het water. De meeste putwaters bevatten Fe2+ dat direct uit de boorput komt. Een effectief filtersysteem zet eerst Fe2+ om in Fe3+ via beluchting of een oxidator, waarna een zandfilter of mediafilter het neerslag opvangt.',
  },
  {
    q: 'Welk filtersysteem verwijdert ijzer uit putwater?',
    a: 'De standaardaanpak is een combinatie van beluchting (oxidatie via luchtinjectie) en een drukzandfilter of mediafilter (met materialen als Birm, Greensand of pyrolusiet). Voor lage ijzergehaltes (tot 1 mg/L) volstaat vaak een sediment- en oxidatiefilter. Bij hoge gehaltes (boven 3 mg/L) of bij gelijktijdige aanwezigheid van mangaan is een professioneel ontijzerings- en ontmanganingsfilter aanbevolen. Omgekeerde osmose verwijdert ijzer eveneens, maar wordt door het ijzer snel verstopt zonder voorfilter.',
  },
  {
    q: 'Wat is de EU-norm voor ijzer in drinkwater?',
    a: 'De EU-drinkwaterrichtlijn 2020/2184 en het Nederlandse Drinkwaterbesluit stellen de indicatieve grenswaarde voor ijzer op 200 microgram per liter (0,2 mg/L). Dit is een esthetische en geen gezondheidsnorm: ijzer in deze concentratie is niet schadelijk voor de gezondheid, maar veroorzaakt smaak-, kleur- en aanslagproblemen. Voor putwater gebruikt als drinkwater is deze norm de aanbevolen bovengrens.',
  },
  {
    q: 'Wat kost een ijzerfilter voor putwater?',
    a: 'Een eenvoudig sediment- plus oxidatiefilter voor lage ijzerconcentraties kost 200 tot 500 euro inclusief plaatsing. Een professioneel ontijzerings- en ontmanganingssysteem met beluchter en automatische backwash kost 600 tot 1500 euro inclusief installatie. Jaarlijkse onderhoudskosten (filterzand bijvullen, controle, vervanging O-ringen) liggen rond 50 tot 150 euro. Voor een combinatiesysteem met UV-sterilisatie en osmose loopt het totaalbedrag op tot 2000-3000 euro.',
  },
  {
    q: 'Werkt een waterontharder ook tegen ijzer?',
    a: 'Een standaard waterontharder met natriumionenwisseling kan beperkte hoeveelheden ijzer (tot circa 0,3-0,5 mg/L) verwijderen, maar raakt hierdoor sneller verzadigd en moet vaker regenereren. Voor hogere ijzergehaltes is een waterontharder geen geschikte oplossing en bestaat het risico dat het hars onherstelbaar verstopt raakt. Gebruik altijd een ijzerfilter vóór de waterontharder als beide systemen worden ingezet.',
  },
  {
    q: 'Is ijzer in putwater schadelijk voor de gezondheid?',
    a: 'In de concentraties die in Nederlands putwater voorkomen (doorgaans 0,2 tot 5 mg/L) is ijzer niet acuut schadelijk voor de gezondheid. De WHO heeft geen gezondheidskundige grenswaarde vastgesteld omdat ijzer een essentieel mineraal is en de toxische dosis ver boven de natuurlijke concentraties ligt. De problemen zijn vooral esthetisch (smaak, kleur, vlekken) en functioneel (aanslag in leidingen, schade aan apparatuur, verstopping van filters).',
  },
  {
    q: 'Hoe vaak moet ik een ijzerfilter onderhouden?',
    a: 'Een drukzandfilter met automatische backwash spoelt zichzelf wekelijks (afhankelijk van waterverbruik en ijzergehalte). De filtermedia (Birm, Greensand of pyrolusiet) gaan 5 tot 10 jaar mee voordat ze moeten worden vervangen of aangevuld. Controleer jaarlijks de werkdruk, de luchtdosering en de filterstand. Bij dalende prestaties (bruine waterstroom, verminderde flow) is het tijd voor onderhoud. Een jaarlijks servicecontract bij de installateur kost 100 tot 200 euro.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'IJzer verwijderen uit putwater: beluchting, zandfilter, kosten',
  description:
    'IJzer (Fe2+/Fe3+) uit putwater: beluchting plus zandfilter of oxidatiefilter. EU-norm 200 microgram/L. Installatiekosten 600-1500 euro uitgelegd.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/putwater/ijzer-verwijderen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function PutwaterIjzerVerwijderenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Putwater', item: 'https://waterfilterplatform.nl/putwater' },
              { '@type': 'ListItem', position: 3, name: 'IJzer verwijderen', item: 'https://waterfilterplatform.nl/putwater/ijzer-verwijderen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/putwater" className="hover:underline">Putwater</Link> &rsaquo;{' '}
          <span>IJzer verwijderen</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            IJzer verwijderen uit putwater: beluchting, zandfilter en kosten
          </h1>
          <p className="text-gray-700 text-lg">
            IJzer veroorzaakt roestbruine vlekken, metaalsmaak en aanslag. Een beluchter plus zandfilter is de standaardoplossing. Installatiekosten: 600 tot 1500 euro.
          </p>
        </div>

        <QuickAnswer answer="IJzer in putwater (Fe2+/Fe3+) wordt verwijderd door beluchting (oxidatie) gevolgd door een zandfilter of mediafilter met Birm/Greensand/pyrolusiet. De EU-norm is 200 microgram per liter (0,2 mg/L) als esthetische grens. Installatiekosten van een professioneel ontijzeringssysteem: 600 tot 1500 euro. Bij hoge concentraties of gelijktijdig mangaan is een combinatiefilter aanbevolen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          IJzer in putwater: symptomen en oorzaken
        </h2>
        <p className="text-gray-700 mb-4">
          Verhoogd ijzergehalte in putwater is in Nederland geen uitzondering, vooral in Oost-Nederland (Drenthe, Overijssel, Gelderland), in veengebieden en bij ondiepe boorputten in ijzerrijke bodemlagen. Het ijzer in grondwater is doorgaans tweewaardig (Fe2+, opgelost) en daarom in eerste instantie helder; pas na contact met zuurstof verandert het in driewaardig ijzer (Fe3+) en wordt het zichtbaar als bruine vlokken of neerslag.
        </p>
        <p className="text-gray-700 mb-6">
          De zichtbare gevolgen zijn talrijk: roestbruine vlekken op wasgoed, geelbruine aanslag op kranen en in toiletten, een bittere metaalsmaak, beschadiging van wasmachines, vaatwassers en koffiezetapparaten, en verstopping van leidingen op de lange termijn. Lees meer over het bredere thema <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] underline">zware metalen in drinkwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en gezondheidsperspectief
        </h2>
        <p className="text-gray-700 mb-6">
          De EU-drinkwaterrichtlijn 2020/2184 en het Nederlandse Drinkwaterbesluit stellen de indicatieve grenswaarde voor ijzer op 200 microgram per liter (0,2 mg/L). Dit is een esthetische norm: ijzer in deze concentraties is niet schadelijk voor de gezondheid, maar veroorzaakt smaak-, kleur- en aanslagproblemen. De WHO heeft geen gezondheidskundige limiet ingesteld omdat ijzer een essentieel mineraal is en pas bij zeer hoge concentraties (boven 100 mg/L) toxisch wordt &mdash; ver boven wat in putwater voorkomt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtertechnieken voor ijzerverwijdering
        </h2>
        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Beluchting plus zandfilter</h3>
            <p className="text-gray-700 text-sm">De standaardaanpak: een beluchter (Venturi-injector of luchtcompressor) brengt zuurstof in het water, waardoor Fe2+ oxideert tot Fe3+. Het neerslag wordt vervolgens opgevangen in een drukzandfilter met automatische backwash. Geschikt voor ijzergehaltes tot 5 mg/L. Kosten: 600 tot 1200 euro inclusief installatie.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Mediafilter met Birm of Greensand</h3>
            <p className="text-gray-700 text-sm">Birm en Greensand zijn katalytische filtermedia die zelf de oxidatie van ijzer versnellen. Greensand vereist periodieke regeneratie met kaliumpermanganaat (KMnO4). Geschikt voor ijzer plus mangaan in combinatie. Kosten: 800 tot 1500 euro.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Oxidatiefilter (pyrolusiet)</h3>
            <p className="text-gray-700 text-sm">Pyrolusiet is een natuurlijk mangaandioxide-mineraal dat ijzer en mangaan tegelijk oxideert en filtreert. Robuust en onderhoudsarm. Geschikt voor hogere ijzergehaltes (tot 10 mg/L). Kosten: 1000 tot 1800 euro.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Omgekeerde osmose (na voorfiltratie)</h3>
            <p className="text-gray-700 text-sm">RO verwijdert ijzer voor 98% maar verstopt snel zonder voorfilter. Alleen geschikt na een sediment- en ijzerfilter, of bij zeer lage ijzergehaltes (onder 0,3 mg/L). Niet aanbevolen als enige techniek voor putwater met hoog ijzer.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kostenoverzicht ijzerverwijderingssysteem
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Systeem</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanschaf + installatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kosten per jaar</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Sediment plus oxidatiefilter</td>
                <td className="border border-gray-300 px-3 py-2">200-500 euro</td>
                <td className="border border-gray-300 px-3 py-2">30-80 euro</td>
                <td className="border border-gray-300 px-3 py-2">Lage Fe (tot 1 mg/L)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Beluchter plus zandfilter</td>
                <td className="border border-gray-300 px-3 py-2">600-1200 euro</td>
                <td className="border border-gray-300 px-3 py-2">50-120 euro</td>
                <td className="border border-gray-300 px-3 py-2">Standaard Fe (1-5 mg/L)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Greensand mediafilter</td>
                <td className="border border-gray-300 px-3 py-2">800-1500 euro</td>
                <td className="border border-gray-300 px-3 py-2">80-150 euro (KMnO4)</td>
                <td className="border border-gray-300 px-3 py-2">Fe plus Mn combinatie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Pyrolusiet oxidatiefilter</td>
                <td className="border border-gray-300 px-3 py-2">1000-1800 euro</td>
                <td className="border border-gray-300 px-3 py-2">60-120 euro</td>
                <td className="border border-gray-300 px-3 py-2">Hoge Fe (tot 10 mg/L)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie en onderhoud
        </h2>
        <p className="text-gray-700 mb-4">
          Laat een ijzerfilter altijd installeren door een erkend installateur die ervaring heeft met putwatersystemen. Het systeem moet correct worden afgesteld op uw debiet (liter per uur), de waterdruk en de specifieke ijzerconcentratie. Een verkeerd afgestelde beluchter levert onvoldoende oxidatie, met als gevolg een doorslaande ijzerpiek na het filter.
        </p>
        <p className="text-gray-700 mb-6">
          Het filter spoelt zichzelf doorgaans wekelijks via automatische backwash (terugspoelen met schoon water om opgevangen ijzerneerslag af te voeren). De filtermedia gaan 5 tot 10 jaar mee. Controleer jaarlijks de werkdruk, de luchtdosering en eventuele lekkages. Voor gerelateerde filterproducten, zie <Link href="/waterfilter/ijzer" className="text-[#005F8A] underline">waterfilter voor ijzer</Link> en <Link href="/waterfilter/mangaan" className="text-[#005F8A] underline">waterfilter voor mangaan</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Combinatie met andere putwaterproblemen
        </h2>
        <p className="text-gray-700 mb-6">
          In de praktijk komt ijzer in putwater zelden alleen voor. Vaak treden ook mangaan, hardheid en bacterien op. Een logische volgorde van filters is: sedimentfilter (5 micron) &rarr; ijzer- en mangaanfilter (beluchting plus mediafilter) &rarr; eventueel waterontharder &rarr; UV-sterilisator &rarr; optioneel omgekeerde osmose voor drinkwaterkraan. Deze opstelling beschermt elk filter tegen voortijdige verstopping en garandeert een complete behandeling. Zie de <Link href="/putwater" className="text-[#005F8A] underline">putwater hoofdpagina</Link> voor het totaaloverzicht.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
              <p className="text-sm text-gray-600">IJzer, lood, koper en arseen in drinkwater verklaard.</p>
            </Link>
            <Link href="/waterfilter/ijzer" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor ijzer</h3>
              <p className="text-sm text-gray-600">Productvergelijking en aankoopadvies voor ijzerfilters.</p>
            </Link>
            <Link href="/waterfilter/mangaan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor mangaan</h3>
              <p className="text-sm text-gray-600">Mangaan vaak in combinatie met ijzer: filteroplossingen.</p>
            </Link>
            <Link href="/putwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Putwater overzicht</h3>
              <p className="text-sm text-gray-600">Alle risico&apos;s en filteropties voor eigen waterwinning.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over ijzer verwijderen uit putwater
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/putwater" className="text-[#005F8A] underline">putwater overzicht</Link>,{' '}
          <Link href="/waterfilter/ijzer" className="text-[#005F8A] underline">ijzerfilter</Link>,{' '}
          <Link href="/waterfilter/mangaan" className="text-[#005F8A] underline">mangaanfilter</Link> en{' '}
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="text-[#005F8A] underline">zware metalen</Link>.
        </p>
      </main>
    </>
  );
}
