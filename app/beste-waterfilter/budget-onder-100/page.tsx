import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Beste waterfilter onder EUR 100 — eerlijke vergelijking goedkope filters | WaterfilterPlatform',
  description: 'Top opties onder EUR 100: Brita Marella, ZeroWater, aanrechtfilters. Reele verwachtingen: filtert chloor en geur, GEEN PFAS of nitraat volledig.',
  alternates: { canonical: 'https://waterfilterplatform.nl/beste-waterfilter/budget-onder-100' },
  openGraph: {
    title: 'Beste waterfilter onder EUR 100 — eerlijke vergelijking goedkope filters',
    description: 'Top opties onder EUR 100: Brita Marella, ZeroWater, aanrechtfilters. Reele verwachtingen en jaarkosten.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Kan ik PFAS verwijderen met een waterfilter onder EUR 100?',
    answer: 'Een actief koolfilter (filterkan of aanrechtmodel onder EUR 100) verwijdert PFAS gedeeltelijk: 40-70% voor langketenige PFAS (PFOS, PFOA) bij een kwalitatief CTO-blokfilter. Voor kortketenige PFAS (PFBS, PFHxS) is de verwijdering minder betrouwbaar. Voor gecertificeerde PFAS-verwijdering van 95-99% is een osmosefilter (EUR 300+) de enige betrouwbare keuze. Nederlandse leidingwater bevat PFAS-concentraties ruim onder de EU-drinkwaternorm van 0,1 microg/L totaal PFAS; voor de meeste huishoudens is een goedkoper filter voldoende.',
  },
  {
    question: 'Filtert ZeroWater beter dan Brita?',
    answer: 'ZeroWater filtert meer ionen dan Brita: het vijflaags systeem brengt TDS naar 000 ppm, wat betekent dat vrijwel alle opgeloste stoffen worden verwijderd. Brita verwijdert chloor, kalk en sommige zware metalen maar laat meer ionen door. In de praktijk is Brita-water goed van smaak en veilig; ZeroWater is "schoner" maar filtert ook nuttige mineralen weg. ZeroWater-filters verslijten sneller in hard-watergebieden, wat de jaarlijkse kosten verhoogt. Voor smaakverbetering wint Brita op prijs-kwaliteit; voor lage TDS is ZeroWater beter.',
  },
  {
    question: 'Wat mag ik realistisch verwachten van een waterfilter onder EUR 100?',
    answer: 'Reele verwachtingen: (1) Merkbaar betere smaak door verwijdering van chloor en chloramine. (2) Vermindering van kalkdeeltjes en troebeling. (3) Gedeeltelijke verwijdering van sommige zware metalen (lood, koper) afhankelijk van het filtertype. Wat u NIET kunt verwachten: betrouwbare PFAS-verwijdering, nitraatverwijdering, verwijdering van bacterien of virussen. Voor huishoudens in gebieden met schoon leidingwater (wat in Nederland bijna altijd het geval is) is een filter onder EUR 100 voor smaakdoeleinden volledig voldoende.',
  },
  {
    question: 'Hoeveel liter filtert een Brita-filter voordat het vervangen moet worden?',
    answer: 'Een standaard Brita MAXTRA+ filter heeft een capaciteit van circa 150 liter (of maximaal 4 weken, afhankelijk van welke grens eerder wordt bereikt). Bij een verbruik van 2-3 liter per dag duurt dit 50-75 dagen. De Brita MAXTRA Pro filtert 200 liter (circa 6 weken). ZeroWater-filters zijn sterk afhankelijk van de waterhardheid: in zacht water gaan ze 150 liter mee, in zeer hard water (Limburg) slechts 20-40 liter. Een TDS-meter is inbegrepen bij ZeroWater om het filtermoment te bepalen.',
  },
  {
    question: 'Zijn goedkopere huismerken filterpatronen even goed?',
    answer: 'Goedkopere filterpatronen (compatibele huismerken) voor Brita-kannen kosten EUR 3-5 per stuk versus EUR 5-7 voor originele Brita-filters. De filterkwaliteit kan variabel zijn: sommige compatibele filters zijn NSF/ANSI gecertificeerd en vergelijkbaar van kwaliteit; andere zijn niet gecertificeerd en presteren slechter, met name op chloorverwijdering en sommige zware metalen. Controleer altijd of het compatibele filter NSF-58 of NSF-42 certificering heeft.',
  },
];

const producten = [
  { naam: 'Brita Marella XL', type: 'Filterkan', prijs: 'EUR 30-40', capaciteit: '3,5 liter', filter: 'MAXTRA+', filterkosten: 'EUR 5-7 / 4 wk', jaarkosten: 'EUR 35-55', pfas: 'Nee', nitraat: 'Nee', aanbeveling: 'Beste waarde' },
  { naam: 'ZeroWater 10-Cup', type: 'Filterkan', prijs: 'EUR 40-55', capaciteit: '2,35 liter', filter: 'ZeroWater', filterkosten: 'EUR 12-16 / 150L', jaarkosten: 'EUR 50-120', pfas: 'Gedeeltelijk', nitraat: 'Gedeeltelijk', aanbeveling: 'TDS 000' },
  { naam: 'Brita Flow', type: 'Filterkan/tap', prijs: 'EUR 35-50', capaciteit: '8 liter', filter: 'MAXTRA+', filterkosten: 'EUR 5-7 / 4 wk', jaarkosten: 'EUR 35-55', pfas: 'Nee', nitraat: 'Nee', aanbeveling: 'Gezin/kantoor' },
  { naam: 'Aquaphor Crystal H', type: 'Filterkan', prijs: 'EUR 25-35', capaciteit: '4 liter', filter: 'B15 Maxfor', filterkosten: 'EUR 4-6 / 6 wk', jaarkosten: 'EUR 25-45', pfas: 'Nee', nitraat: 'Nee', aanbeveling: 'Budget keuze' },
  { naam: 'PUR Classic', type: 'Aanrechtmodel', prijs: 'EUR 50-70', capaciteit: 'Onbeperkt', filter: 'PUR mineralen', filterkosten: 'EUR 8-12 / 3 mnd', jaarkosten: 'EUR 32-48', pfas: 'Nee', nitraat: 'Nee', aanbeveling: 'Hoge capaciteit' },
  { naam: 'Philips AWP3600', type: 'Aanrechtmodel', prijs: 'EUR 60-90', capaciteit: 'Onbeperkt', filter: 'Philips micro X-clean', filterkosten: 'EUR 12-18 / 3 mnd', jaarkosten: 'EUR 48-72', pfas: 'Nee', nitraat: 'Nee', aanbeveling: 'NSF gecertificeerd' },
];

export default function BudgetOnder100Page() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Beste waterfilter', item: 'https://waterfilterplatform.nl/beste-waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Budget onder EUR 100', item: 'https://waterfilterplatform.nl/beste-waterfilter/budget-onder-100' },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
          {
            '@type': 'Article',
            headline: 'Beste waterfilter onder EUR 100 — eerlijke vergelijking goedkope filters',
            description: 'Top opties onder EUR 100: Brita Marella, ZeroWater, aanrechtfilters. Reele verwachtingen en jaarkosten.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/beste-waterfilter/budget-onder-100',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/beste-waterfilter">Beste waterfilter</Link> &rsaquo; Budget onder EUR 100
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Beste waterfilter onder EUR 100 — eerlijke vergelijking goedkope filters
          </h1>
          <QuickAnswer answer="De beste waterfilter onder EUR 100 is de Brita Marella XL voor dagelijks gebruik (EUR 30-40, jaarkosten EUR 35-55) of ZeroWater voor maximale ionenverwijdering (EUR 40-55). Reele verwachtingen: chloor, geur en kalk worden goed gefilterd. PFAS en nitraat worden NIET volledig verwijderd. Neem jaarlijkse filterkosten altijd mee in uw overweging." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Reele verwachtingen van filters onder EUR 100</h2>
          <p className="text-gray-700 mb-4">
            Veel verkopers claimen dat goedkope filters alles verwijderen. Dat is niet waar. Hier is wat een filter onder EUR 100 realistisch doet:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-800 mb-2">Wat filters onder EUR 100 WEL doen</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Chloor en chloramine verwijderen (smaak, geur)</li>
                <li>Kalkdeeltjes en troebeling verminderen</li>
                <li>Sommige zware metalen (koper, lood) gedeeltelijk</li>
                <li>TDS verminderen (ZeroWater)</li>
                <li>Drinkwater aangenamer van smaak maken</li>
              </ul>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-4">
              <h3 className="font-semibold text-red-800 mb-2">Wat filters onder EUR 100 NIET doen</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>PFAS volledig verwijderen (alleen gedeeltelijk)</li>
                <li>Nitraat verwijderen</li>
                <li>Bacterien of virussen verwijderen</li>
                <li>Arseen of fluoride volledig verwijderen</li>
                <li>Medicijnresten effectief aanpakken</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-4 text-sm">
            Voor de meeste Nederlandse huishoudens is dit geen probleem: ons leidingwater voldoet aan alle drinkwaternormen. Als u specifieke zorgen heeft over PFAS of nitraat in uw regio, overweeg dan een osmosefilter (EUR 300+).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Vergelijkingstabel: producten onder EUR 100</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-2 py-2 text-left">Product</th>
                  <th className="border border-gray-300 px-2 py-2 text-left">Type</th>
                  <th className="border border-gray-300 px-2 py-2 text-left">Prijs</th>
                  <th className="border border-gray-300 px-2 py-2 text-left">Jaarkosten</th>
                  <th className="border border-gray-300 px-2 py-2 text-left">PFAS</th>
                  <th className="border border-gray-300 px-2 py-2 text-left">Tip</th>
                </tr>
              </thead>
              <tbody>
                {producten.map((p, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-300 px-2 py-2 font-medium">{p.naam}</td>
                    <td className="border border-gray-300 px-2 py-2">{p.type}</td>
                    <td className="border border-gray-300 px-2 py-2">{p.prijs}</td>
                    <td className="border border-gray-300 px-2 py-2">{p.jaarkosten}</td>
                    <td className="border border-gray-300 px-2 py-2 text-red-600">{p.pfas}</td>
                    <td className="border border-gray-300 px-2 py-2 text-[#005F8A] font-medium">{p.aanbeveling}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Jaarlijkse filterkosten: de verborgen kosten</h2>
          <p className="text-gray-700 mb-4">
            De aanschafprijs is slechts een deel van de werkelijke kosten. De filterpatronen zijn bij goedkope systemen relatief duur per liter water:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
            <li>Brita MAXTRA+: EUR 5-7 per 150 liter = circa 3-5 eurocent per liter</li>
            <li>ZeroWater (zacht water): EUR 12-16 per 150 liter = circa 8-11 eurocent per liter</li>
            <li>ZeroWater (hard water): EUR 12-16 per 30 liter = circa 40-55 eurocent per liter (!</li>
            <li>Aanrechtfilter (Philips): EUR 12-18 per 300 liter = circa 4-6 eurocent per liter</li>
          </ul>
          <p className="text-gray-700 mt-3 text-sm">
            Ter vergelijking: een osmosefilter kost 4-8 eurocent per liter inclusief afschrijving van het systeem — vergelijkbaar met een filterkan maar met een veel breder filterspectrum.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003F5C] cursor-pointer">{item.question}</summary>
                <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/filterkan" className="text-[#005F8A] hover:underline">Filterkan vergelijking: alle merken</Link></li>
            <li><Link href="/keuzehulp/budget" className="text-[#005F8A] hover:underline">Waterfilter per budget: EUR 50, EUR 200 en EUR 500+</Link></li>
            <li><Link href="/beste-waterfilter/studentenkamer" className="text-[#005F8A] hover:underline">Beste waterfilter voor studentenkamer</Link></li>
            <li><Link href="/beste-waterfilter" className="text-[#005F8A] hover:underline">Terug naar beste waterfilter overzicht</Link></li>
            <li><Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] hover:underline">Actief koolfilter: werking en kosten</Link></li>
            <li><Link href="/keuzehulp" className="text-[#005F8A] hover:underline">Waterfilter keuzehulp</Link></li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool: betaalbare filtertechniek</h3>
              <p className="text-sm text-gray-600">Hoe actief kool filterkannen onder 100 euro werken en welke prestaties u kunt verwachten.</p>
            </Link>
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Budget keuzehulp waterfilter</h3>
              <p className="text-sm text-gray-600">Hoe u de totale eigendomskosten van budgetfilters berekent en wanneer een duurder model loont.</p>
            </Link>
          </div>
        </section>

        <AffiliateCTA
          destination="countertopRo"
          campaign="omgekeerde-osmose"
          content="beste-waterfilter-budget-onder-100-cta"
          label="Bekijk de Countertop RO"
          title="Osmose zonder installatie?"
          sub="De Countertop RO is een plug-and-play osmose-apparaat zonder installatie bij onze partner PureAqua."
        />

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
