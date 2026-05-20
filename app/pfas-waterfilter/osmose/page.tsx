import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'PFAS verwijderen met omgekeerde osmose: 95-99% reductie',
  description:
    'Omgekeerde osmose verwijdert 95-99% van alle PFAS-verbindingen via een membraan van 0,0001 micron. Vergelijking met koolstoffilter, installatiekosten en NSF/ANSI 58 certificering uitgelegd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter/osmose' },
};

const faqItems = [
  {
    question: 'Hoeveel procent PFAS verwijdert omgekeerde osmose?',
    answer:
      'Omgekeerde osmose verwijdert 95-99% van alle PFAS-verbindingen, inclusief PFOS, PFOA en de meeste kortketenige varianten zoals PFBA en PFPeA. Het membraan van 0,0001 micron blokkeert PFAS-moleculen fysiek, ongeacht het type. Dit is het hoogste verwijderingspercentage van alle beschikbare filtertechnieken voor thuisgebruik.',
  },
  {
    question: 'Waarom is het membraan van omgekeerde osmose zo effectief tegen PFAS?',
    answer:
      'Een omgekeerde-osmosemembraan heeft een poriegrootte van 0,0001 micron (0,1 nanometer). PFAS-moleculen zijn gemiddeld 0,5-2 nanometer groot. Het membraan blokkeert deze moleculen dus fysiek via uitsluiting op basis van grootte en lading. Dit is anders dan actief-koolfiltratie, waarbij PFAS via adsorptie wordt vastgehouden en de koolstof op termijn verzadigd raakt.',
  },
  {
    question: 'Wat is het verschil tussen omgekeerde osmose en koolstoffilter voor PFAS?',
    answer:
      'Omgekeerde osmose verwijdert 95-99% van alle PFAS via fysieke uitsluiting en is effectief voor zowel lange- als kortketenige PFAS. Actief-koolfilter verwijdert 60-90% van langketenige PFAS maar slechts 20-50% van kortketenige PFAS (GenX, PFBA). Koolstof raakt bovendien verzadigd, waarna de effectiviteit daalt zonder zichtbare waarschuwing. In PFAS-hotspot-gebieden is omgekeerde osmose de veiligste keuze.',
  },
  {
    question: 'Wat kost de installatie van een osmosefilter voor PFAS?',
    answer:
      'Een onderbouw-osmosesysteem kost aanschaf EUR 300-800 inclusief installatiemateriaal. Professionele loodgieterinstallatie kost EUR 100-200 extra. Doe-het-zelf installatie is mogelijk met basiskennis van loodgieterij. Jaarlijkse filterkosten bedragen EUR 80-150 voor voorfilters en membraanwissel. Over 5 jaar zijn de totale kosten EUR 700-1.750, veel minder dan flessenwater voor een gezin.',
  },
  {
    question: 'Wat betekent NSF/ANSI 58 certificering voor PFAS-verwijdering?',
    answer:
      'NSF/ANSI 58 is de internationale norm voor omgekeerde-osmosesystemen en omvat specifieke tests voor PFAS-verwijdering (Section 7 Contaminant Reduction). Alleen systemen met dit keurmerk zijn onafhankelijk getest en bewezen effectief voor PFAS-reductie. NSF/ANSI 42 (geur en smaak) geeft geen garantie voor PFAS-verwijdering. Vraag altijd om het volledige certificaat met de lijst van geremoveerde stoffen.',
  },
  {
    question: 'Hoe meet ik de effectiviteit van mijn osmosefilter voor PFAS?',
    answer:
      'U kunt de TDS (Total Dissolved Solids) meten met een goedkope TDS-meter (EUR 10-20). Een goed werkend RO-systeem produceert water met een TDS onder 30 mg/L uit kraanwater met TDS 200-400 mg/L. Een stijgende TDS-waarde wijst op membraanslijtage. Voor directe PFAS-meting is een geaccrediteerd laboratoriumtest nodig (EUR 100-200); dit wordt aanbevolen bij aanschaf en na 3 jaar gebruik.',
  },
  {
    question: 'Verwijdert osmose ook kortketenige PFAS zoals GenX?',
    answer:
      'Ja. Omgekeerde osmose verwijdert ook kortketenige PFAS zoals GenX (HFPO-DA), PFBA en PFPeA voor 90-99%. Kortketenige PFAS zijn iets kleiner van molecuulgrootte dan langketenige PFAS, maar het RO-membraan van 0,0001 micron blokkeert ze nog steeds in zeer hoge mate. Koolstoffilters zijn voor kortketenige PFAS veel minder effectief (20-50%), wat omgekeerde osmose de enige betrouwbare optie maakt bij GenX-vervuiling.',
  },
  {
    question: 'Hoe vaak moet ik het osmosemembraan vervangen bij PFAS-verontreiniging?',
    answer:
      'In normale omstandigheden gaat een osmosemembraan 3-5 jaar mee. In gebieden met verhoogde PFAS-concentraties in kraanwater wordt aangeraden het membraan na 2 jaar te vervangen als voorzorgsmaatregel, ook als de TDS-waarde nog goed is. Een versleten membraan laat meer verontreinigingen door zonder zichtbare kwaliteitsverslechtering. Vervang voorfilters elk 6-12 maanden om het membraan te beschermen.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Osmose voor PFAS', url: 'https://waterfilterplatform.nl/pfas-waterfilter/osmose' },
];

export default function PfasOsmosePage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'PFAS verwijderen met omgekeerde osmose: 95-99% reductie',
          description:
            'Omgekeerde osmose verwijdert 95-99% van alle PFAS-verbindingen via een membraan van 0,0001 micron. Vergelijking met koolstoffilter, installatiekosten en NSF/ANSI 58.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          url: 'https://waterfilterplatform.nl/pfas-waterfilter/osmose',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Omgekeerde osmose</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS verwijderen met omgekeerde osmose: 95-99% reductie
          </h1>
          <QuickAnswer answer="Omgekeerde osmose verwijdert 95-99% van alle PFAS-verbindingen via een membraan van 0,0001 micron. Dit is effectiever dan koolstoffilters (60-90% voor langketenige PFAS, slechts 20-50% voor kortketenige PFAS zoals GenX). Installatiekosten bedragen EUR 300-800. Eis altijd NSF/ANSI 58 certificering." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe werkt omgekeerde osmose tegen PFAS?
          </h2>
          <p className="text-gray-700 mb-4">
            Omgekeerde osmose (RO) is de meest effectieve filtermethode voor PFAS-verwijdering uit drinkwater. Water wordt onder druk door een semidoorlaatbaar membraan met een poriegrootte van 0,0001 micron (0,1 nanometer) geperst. PFAS-moleculen, die gemiddeld 0,5-2 nanometer groot zijn, worden fysiek geblokkeerd en via het afvalwater afgevoerd.
          </p>
          <p className="text-gray-700 mb-4">
            Dit mechanisme verschilt fundamenteel van actief-koolfiltratie, waarbij PFAS wordt geadsorbeerd aan het koolstofoppervlak. Bij koolstof raakt het adsorptieoppervlak op termijn verzadigd, waarna PFAS zonder waarschuwing doorlekt. Bij omgekeerde osmose is het membraan een constante fysieke barriere: zolang het membraan intact is, worden PFAS-moleculen geblokkeerd, ongeacht de concentratie in het bronwater.
          </p>
          <p className="text-gray-700 mb-6">
            Moderne 5-traps RO-systemen combineren een sedimentvoorfilter, twee actief-koolvoorfilters, het RO-membraan en een nafilter. De voorfilters verlengen de levensduur van het kostbare membraan door grotere deeltjes, chloor en organische stoffen eerst te verwijderen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Omgekeerde osmose vs. koolstoffilter voor PFAS: vergelijking
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Eigenschap</th>
                  <th className="p-3 text-left">Omgekeerde osmose (RO)</th>
                  <th className="p-3 text-left">Actief-koolfilter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 font-medium text-[#003F5C]">Langketenige PFAS (PFOS, PFOA)</td>
                  <td className="p-3 text-green-700 font-semibold">95-99%</td>
                  <td className="p-3 text-yellow-700">60-90%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium text-[#003F5C]">Kortketenige PFAS (GenX, PFBA)</td>
                  <td className="p-3 text-green-700 font-semibold">90-99%</td>
                  <td className="p-3 text-red-600">20-50%</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-medium text-[#003F5C]">Filtermechanisme</td>
                  <td className="p-3">Fysieke uitsluiting (membraan)</td>
                  <td className="p-3">Adsorptie (koolstofoppervlak)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium text-[#003F5C]">Risico op verzadiging</td>
                  <td className="p-3 text-green-700">Laag (membraan sluit)</td>
                  <td className="p-3 text-red-600">Hoog (koolstof raakt vol)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-medium text-[#003F5C]">NSF-certificering</td>
                  <td className="p-3">NSF/ANSI 58</td>
                  <td className="p-3">NSF/ANSI 53 (P473 voor GenX)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium text-[#003F5C]">Aanschafkosten</td>
                  <td className="p-3">EUR 300-800</td>
                  <td className="p-3">EUR 100-300</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-medium text-[#003F5C]">Afvalwaterproductie</td>
                  <td className="p-3">Ja (verhouding 3:1 modern)</td>
                  <td className="p-3">Nee</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Bron: NSF International, EPA WQA (2023). Percentages bij gecertificeerde systemen en correct onderhoud.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Membraangrootte en PFAS-moleculen: de wetenschap
          </h2>
          <p className="text-gray-700 mb-4">
            De effectiviteit van omgekeerde osmose tegen PFAS is goed te begrijpen vanuit de molecuulgrootte. Een RO-membraan heeft een poriegrootte van 0,0001 micron, ook wel 0,1 nanometer of 1 Angstrom genoemd. PFAS-moleculen variieren in grootte:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>PFOS (perfluoroctaansulfonaat): circa 1,4 nanometer</li>
            <li>PFOA (perfluoroctaanzuur): circa 1,2 nanometer</li>
            <li>GenX (HFPO-DA): circa 0,9 nanometer</li>
            <li>PFBA (perfluorbutaanzuur): circa 0,6 nanometer</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Zelfs de kleinste kortketenige PFAS-moleculen zijn 6 keer groter dan de poriegrootte van een RO-membraan. Dit verklaart de hoge verwijderingspercentages voor alle typen PFAS. Daarnaast speelt ionische afstoting een rol: PFAS-anionen worden afgestoten door de negatief geladen membraanoppervlakte, wat de effectiviteit verder vergroot.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            NSF/ANSI 58 certificering: waarom dit essentieel is
          </h2>
          <p className="text-gray-700 mb-4">
            NSF/ANSI 58 is de internationale norm voor omgekeerde-osmosesystemen voor huishoudelijk gebruik. De norm test systemen op meer dan 50 contaminanten, inclusief PFAS. Alleen een geldig NSF/ANSI 58-certificaat garandeert dat het systeem daadwerkelijk getest en bewezen effectief is voor PFAS-verwijdering.
          </p>
          <p className="text-gray-700 mb-4">
            Niet alle certificeringen zijn gelijkwaardig voor PFAS:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li><strong>NSF/ANSI 58</strong>: goudstandaard voor RO-systemen, inclusief PFAS-test</li>
            <li><strong>NSF/ANSI 53</strong>: voor koolstoffilters die specifiek op PFAS getest zijn</li>
            <li><strong>NSF/ANSI P473</strong>: specifiek voor PFOS en PFOA in koolstoffilters</li>
            <li><strong>NSF/ANSI 42</strong>: alleen geur en smaak, geen garantie voor PFAS</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Controleer het certificaat altijd via de NSF-website (nsf.org) met het modelnummer van het systeem. Sommige fabrikanten claimen certificering voor oudere modellen terwijl het actuele product niet gecertificeerd is.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Installatiekosten en praktische overwegingen
          </h2>
          <p className="text-gray-700 mb-4">
            Een onderbouw-osmosesysteem is de meest gebruikelijke keuze voor huishoudens die PFAS willen verwijderen. De installatie vereist aansluiting op de koude waterleiding onder het aanrecht en een aparte filterkraan op het aanrecht.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                titel: 'Aanschafkosten',
                tekst: 'EUR 300-800 voor een kwalitatief onderbouw-osmosesysteem met NSF/ANSI 58 certificering. Countertop (tafelmodel) systemen kosten EUR 150-400 en vereisen geen installatie.',
              },
              {
                titel: 'Installatiekosten',
                tekst: 'Doe-het-zelf installatie is mogelijk in 1-2 uur met basiskennis van loodgieterij. Aansluitingen zijn standaard 3/8" of 1/2". Professionele installatie kost EUR 100-200.',
              },
              {
                titel: 'Jaarlijkse filterkosten',
                tekst: 'Sediment- en koolstofvoorfilters EUR 30-50 per set (jaarlijks vervangen). Osmosemembraan EUR 40-80 (elke 3 jaar, of 2 jaar in PFAS-hotspots). Totaal circa EUR 50-80 per jaar.',
              },
              {
                titel: 'TDS-monitoring',
                tekst: 'Een TDS-meter (EUR 10-20) geeft direct inzicht in de werking van het membraan. Water boven 30 mg/L TDS uit een nieuw systeem wijst op een defect membraan of slechte installatie. Controleer maandelijks.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-[#005F8A] mb-1">{item.titel}</h3>
                <p className="text-gray-700 text-sm">{item.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-6">
            Wilt u meer weten over hoe osmosesystemen zich verhouden tot andere filteropties? Bekijk onze{' '}
            <Link href="/pfas-waterfilter/vergelijken" className="text-[#005F8A] underline">
              volledige vergelijking van PFAS-waterfilters
            </Link>{' '}
            of lees over de{' '}
            <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] underline">
              techniek van omgekeerde osmose
            </Link>{' '}
            in detail.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section className="mb-10 mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over osmose en PFAS
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg">
                <summary className="p-4 font-semibold text-[#005F8A] cursor-pointer hover:bg-gray-50">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken: omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Uitgebreide technische uitleg over hoe RO-membranen werken en wat ze verwijderen</p>
            </Link>
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter overzicht</h3>
              <p className="text-sm text-gray-600">Complete gids: welk waterfilter verwijdert PFAS het meest betrouwbaar?</p>
            </Link>
            <Link href="/drinkwaternormen/pfas" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen voor PFAS</h3>
              <p className="text-sm text-gray-600">EU-grenswaarden, Nederlandse regelgeving en wat de normen betekenen voor uw veiligheid</p>
            </Link>
            <Link href="/pfas-waterfilter/vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Alle PFAS-filtertypen vergelijken</h3>
              <p className="text-sm text-gray-600">RO vs nanofiltration vs koolstof vs pitcher: welke haalt PFAS er echt uit?</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
