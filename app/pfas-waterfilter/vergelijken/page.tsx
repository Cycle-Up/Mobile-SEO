import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'PFAS waterfilters vergelijken: RO, nanofiltration, koolstof',
  description:
    'Vergelijking van alle PFAS-filtertypen: RO (95-99%), nanofiltration (85-95%), actief kool (60-90% langketen), pitcher (20-40%). NSF/ANSI 58, 53 en P473 uitgelegd.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter/vergelijken' },
};

const faqItems = [
  {
    question: 'Welk waterfilter verwijdert PFAS het beste?',
    answer:
      'Omgekeerde osmose (RO) verwijdert 95-99% van alle PFAS-verbindingen en is de beste keuze voor zowel langketenige als kortketenige PFAS. Nanofiltration (NF) scoort 85-95% en is een goed alternatief. Actief-koolfilters met NSF/ANSI 53 zijn effectief voor langketenige PFAS (60-90%) maar onbetrouwbaar voor kortketenige PFAS zoals GenX (20-50%). Filterkruiken en eenvoudige filterkranen verwijderen PFAS niet betrouwbaar.',
  },
  {
    question: 'Wat is het verschil tussen NSF/ANSI 58, NSF/ANSI 53 en NSF/ANSI P473?',
    answer:
      'NSF/ANSI 58 is de norm voor omgekeerde-osmosesystemen en test reductie van meer dan 50 contaminanten inclusief alle gangbare PFAS. NSF/ANSI 53 geldt voor koolstoffilters die op specifieke gezondheidsschadelijke stoffen zijn getest, inclusief PFAS als dit in de productclassificatie is opgenomen. NSF/ANSI P473 is een aanvullende norm specifiek voor de verwijdering van PFOS en PFOA door koolstoffilters. Voor volledige PFAS-bescherming inclusief kortketenige verbindingen is NSF/ANSI 58 (RO) de sterkste garantie.',
  },
  {
    question: 'Waarom is koolstoffilter minder goed voor kortketenige PFAS zoals GenX?',
    answer:
      'Kortketenige PFAS (PFBA, PFPeA, PFBS, GenX/HFPO-DA) hebben een kortere koolstofketen en zijn daardoor minder hydrofob. Ze binden minder sterk aan het koolstofoppervlak in actief-koolfilters, waardoor adsorptie minder effectief is. Langketenige PFAS (PFOS, PFOA) binden sterker en worden voor 60-90% verwijderd. Bij omgekeerde osmose speelt bindingskracht geen rol: alle PFAS-moleculen, ook kortketenige, worden fysiek geblokkeerd door het membraan van 0,0001 micron.',
  },
  {
    question: 'Verwijdert een filterkraan of Brita-kan PFAS?',
    answer:
      'Nee. Standaard filterkruiken (zoals Brita Classic) en eenvoudige filterkranen gebruiken actief kool of ionenwisselaar en zijn niet gecertificeerd voor PFAS-verwijdering. Ze verwijderen geen of slechts 20-40% van sommige PFAS-verbindingen, en dit is niet gegarandeerd of gecertificeerd. Voor betrouwbare PFAS-verwijdering heeft u een systeem nodig met NSF/ANSI 58 (RO), NSF/ANSI 53 of NSF/ANSI P473 certificering.',
  },
  {
    question: 'Is nanofiltration een goed alternatief voor omgekeerde osmose bij PFAS?',
    answer:
      'Nanofiltration (NF) is een waardig alternatief: het verwijdert 85-95% van de meeste PFAS-verbindingen. Het voordeel ten opzichte van RO is dat NF meer mineralen doorlaat (hogere TDS), wat sommige gebruikers verkiezen. Het nadeel is dat NF minder effectief is voor de kleinste kortketenige PFAS en doorgaans duurder is (EUR 300-800) zonder duidelijke meerwaarde boven RO voor PFAS-verwijdering. In PFAS-hotspot-gebieden is de hogere zekerheid van RO de voorkeur.',
  },
  {
    question: 'Wat kost een PFAS-waterfilter per filtertype?',
    answer:
      'Filterkruik (pitcher): EUR 30-80 aanschaf, filters EUR 20 per 3 maanden. Onderbouw koolstofblok (NSF 53): EUR 100-300, filters EUR 50 per 6 maanden. Omgekeerde osmose (onderbouw): EUR 300-800, filters EUR 80 per jaar. Nanofiltration: EUR 300-800, filters EUR 100 per jaar. Professioneel systeem (inbouw kokend-water + RO): EUR 800-2.000 inclusief installatie, filters EUR 100 per jaar.',
  },
  {
    question: 'Hoe vergelijk ik PFAS-filtertypen voor mijn situatie?',
    answer:
      'Woon u in een PFAS-hotspot (Dordrecht, Schiphol, militaire bases) of heeft u putwateraansluiting? Kies omgekeerde osmose. Wilt u een betrouwbaar filter voor regulier kraanwater met bekende PFAS-waarden binnen de norm? Een NSF/ANSI 53 gecertificeerd koolstofblok is voldoende. Heeft u een huurwoning en mag u geen leidingen aanpassen? Kies een countertop RO-systeem of een gecertificeerd koolstofblok-tafelfilter. Wilt u de laagste kosten? Vergelijk de totale kosten over 5 jaar, niet alleen de aanschafprijs.',
  },
  {
    question: 'Wat betekent de "Rejection Rate" op een osmosefilter?',
    answer:
      'De Rejection Rate (afwijzingspercentage) geeft aan welk percentage van een specifieke stof het membraan tegenhoudt. Een Rejection Rate van 98% voor PFAS betekent dat bij een bronwaterconcentratie van 100 ng/L, het gefilterde water maximaal 2 ng/L bevat. Voor PFAS wilt u een Rejection Rate van minimaal 95%. Controleer dit in de technische specificaties van het systeem, niet in de marketingtekst.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/pfas-waterfilter/vergelijken' },
];

const filterData = [
  {
    type: 'Omgekeerde osmose (RO)',
    langketens: '95-99%',
    kortketens: '90-99%',
    certif: 'NSF/ANSI 58',
    kosten: 'EUR 300-800',
    aanbevolen: true,
  },
  {
    type: 'Nanofiltration (NF)',
    langketens: '90-95%',
    kortketens: '85-93%',
    certif: 'NSF/ANSI 58 (NF)',
    kosten: 'EUR 300-800',
    aanbevolen: true,
  },
  {
    type: 'Actief kool (onderbouw, NSF 53)',
    langketens: '60-90%',
    kortketens: '20-50%',
    certif: 'NSF/ANSI 53 / P473',
    kosten: 'EUR 100-300',
    aanbevolen: false,
  },
  {
    type: 'Actief kool (pitcher/kan)',
    langketens: '20-40%',
    kortketens: '0-20%',
    certif: 'Geen PFAS-claim',
    kosten: 'EUR 30-80',
    aanbevolen: false,
  },
  {
    type: 'Sedimentfilter',
    langketens: '0%',
    kortketens: '0%',
    certif: 'Niet van toepassing',
    kosten: 'EUR 20-60',
    aanbevolen: false,
  },
];

export default function PfasVergelijkenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'PFAS waterfilters vergelijken: RO, nanofiltration, koolstof',
          description:
            'Vergelijking van alle PFAS-filtertypen: RO (95-99%), nanofiltration (85-95%), actief kool (60-90% langketen), pitcher (20-40%). NSF/ANSI 58, 53 en P473.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          url: 'https://waterfilterplatform.nl/pfas-waterfilter/vergelijken',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS waterfilters vergelijken: welk type verwijdert het meest?
          </h1>
          <QuickAnswer answer="Omgekeerde osmose (RO) is de beste keuze: 95-99% voor alle PFAS inclusief kortketenige GenX. Nanofiltration scoort 85-95%. Actief-koolfilter met NSF/ANSI 53 haalt 60-90% van langketenige PFAS maar slechts 20-50% van kortketenige PFAS. Filterkruiken zijn niet geschikt voor PFAS-verwijdering." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijkingstabel: PFAS-verwijdering per filtertype
          </h2>
          <p className="text-gray-700 mb-4">
            Niet elk waterfilter is even effectief voor PFAS. Onderstaande tabel geeft de bewezen verwijderingspercentages per filtertype voor zowel langketenige PFAS (PFOS, PFOA) als kortketenige PFAS (GenX, PFBA, PFPeA). De kortketenige varianten zijn de meest lastig te verwijderen en komen voor rond industrielocaties zoals Chemours in Dordrecht.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Filtertype</th>
                  <th className="p-3 text-left">Langketenige PFAS</th>
                  <th className="p-3 text-left">Kortketenige PFAS</th>
                  <th className="p-3 text-left">Certificering</th>
                  <th className="p-3 text-left">Aanschaf</th>
                  <th className="p-3 text-center">Aanbevolen</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((f, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{f.type}</td>
                    <td className={`p-3 font-semibold ${f.aanbevolen ? 'text-green-700' : 'text-yellow-700'}`}>{f.langketens}</td>
                    <td className={`p-3 font-semibold ${f.aanbevolen ? 'text-green-700' : 'text-red-600'}`}>{f.kortketens}</td>
                    <td className="p-3 text-sm">{f.certif}</td>
                    <td className="p-3">{f.kosten}</td>
                    <td className="p-3 text-center">
                      {f.aanbevolen ? (
                        <span className="text-green-600 font-bold">&#10003;</span>
                      ) : (
                        <span className="text-red-500">&#10007;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500">
            Bron: NSF International, EPA, RIVM (2023-2024). Percentages bij gecertificeerde systemen en correct onderhoud.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom kortketenige PFAS het verschil maakt
          </h2>
          <p className="text-gray-700 mb-4">
            De aanduiding "langketen" en "kortketen" verwijst naar het aantal koolstofatomen in de PFAS-molecule. Langketenige PFAS zoals PFOS (8 koolstoffen) en PFOA (8 koolstoffen) worden al langer gemeten en zijn beter bestudeerd. Kortketenige PFAS zoals GenX/HFPO-DA, PFBA (4 koolstoffen) en PFPeA (5 koolstoffen) zijn veelal vervangingsstoffen die door de industrie werden ingevoerd na het verbod op PFOS en PFOA.
          </p>
          <p className="text-gray-700 mb-4">
            Het probleem is dat kortketenige PFAS minder goed binden aan actief kool. Waar een NSF/ANSI 53 gecertificeerd koolstofblok langketenige PFAS voor 60-90% kan verwijderen, haalt hetzelfde filter kortketenige PFAS slechts voor 20-50% weg. Dit is bijzonder relevant in gebieden rond Chemours (Dordrecht), waar GenX de voornaamste PFAS-stof in het kraanwater is.
          </p>
          <p className="text-gray-700 mb-6">
            Wilt u meer weten over de techniek achter koolstoffiltratie? Lees onze pagina over{' '}
            <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline">
              actief-kool waterfilters
            </Link>{' '}
            of bekijk de vergelijking met{' '}
            <Link href="/filtertechnieken/nanofiltration" className="text-[#005F8A] underline">
              nanofiltration
            </Link>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            NSF/ANSI 58, 53 en P473: de certificeringen uitgelegd
          </h2>
          <p className="text-gray-700 mb-4">
            De NSF/ANSI-certificeringen zijn de internationale normen voor filtereffectiviteit. Ze worden toegekend door onafhankelijke testlaboratoria en zijn de enige betrouwbare manier om de PFAS-verwijderingsclaims van fabrikanten te verificieren.
          </p>
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58 — Omgekeerde osmose</h3>
              <p className="text-gray-700 text-sm">
                De meest uitgebreide norm voor RO-systemen. Test op meer dan 50 contaminanten inclusief alle gangbare PFAS (PFOS, PFOA, GenX, PFBA, PFPeA en andere). Sectie 7 van de norm specificeert minimale verwijderingspercentages per stof. Dit is de sterkste garantie voor PFAS-bescherming en geldt ook voor sommige nanofiltratiesystemen.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 53 — Koolstoffilters (gezondheid)</h3>
              <p className="text-gray-700 text-sm">
                Norm voor koolstoffilters die gezondheidsschadelijke stoffen verwijderen. Geldt voor PFAS als de fabrikant hier specifiek op heeft getest en gecertificeerd is. Niet alle NSF/ANSI 53 gecertificeerde filters zijn getest op PFAS: controleer de specifieke contaminantenlijst bij het certificaat.
              </p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI P473 — PFOS en PFOA specifiek</h3>
              <p className="text-gray-700 text-sm">
                Aanvullende norm specifiek voor de verwijdering van PFOS en PFOA door koolstoffilters. Let op: P473 dekt alleen PFOS en PFOA, niet GenX, PFBA of andere kortketenige PFAS. In gebieden met GenX-problematiek is P473 niet voldoende.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 42 — Alleen geur en smaak</h3>
              <p className="text-gray-700 text-sm">
                NSF/ANSI 42 zegt uitsluitend iets over de verwijdering van smaak- en geurstoffen (met name chloor). Het geeft geen enkele garantie voor PFAS-verwijdering. Producten die alleen NSF/ANSI 42 vermelden zijn niet geschikt als PFAS-filter.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Per situatie: welk filtertype kiest u?
          </h2>
          <div className="space-y-4 mb-6">
            {[
              {
                situatie: 'PFAS-hotspot (Dordrecht, Schiphol, militaire bases)',
                advies: 'Omgekeerde osmose met NSF/ANSI 58. Dit is de enige betrouwbare keuze voor gebieden met zowel langketenige als kortketenige PFAS-vervuiling.',
                kleur: 'border-green-500',
              },
              {
                situatie: 'Putwater of bronwater in landbouwgebied',
                advies: 'Omgekeerde osmose, aangevuld met een voorafgaande wateranalyse (accrediteerd laboratorium). Putwater bevat soms andere verontreinigingen die aanvullende filters vereisen.',
                kleur: 'border-green-500',
              },
              {
                situatie: 'Regulier kraanwater, buiten hotspot',
                advies: 'NSF/ANSI 53 gecertificeerd koolstofblok is voldoende voor langketenige PFAS als de concentraties laag zijn. Voor gemoedsrust: kies RO.',
                kleur: 'border-yellow-400',
              },
              {
                situatie: 'Huurwoning, geen aanpassingen aan leidingen',
                advies: 'Countertop RO-systeem (geen installatie vereist) of NSF/ANSI 53 gecertificeerd tafelfilter. Vermijd gewone filterkruiken.',
                kleur: 'border-blue-400',
              },
            ].map((item, i) => (
              <div key={i} className={`border-l-4 ${item.kleur} pl-4 bg-gray-50 rounded-r-lg p-3`}>
                <h3 className="font-semibold text-[#005F8A] mb-1">{item.situatie}</h3>
                <p className="text-gray-700 text-sm">{item.advies}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-6">
            Bekijk ook onze pagina over{' '}
            <Link href="/pfas-waterfilter/osmose" className="text-[#005F8A] underline">
              omgekeerde osmose voor PFAS
            </Link>{' '}
            voor een diepgaande uitleg van het RO-systeem, of ga direct naar het{' '}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">
              PFAS waterfilter overzicht
            </Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section className="mb-10 mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over PFAS waterfilters vergelijken
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
            <Link href="/pfas-waterfilter/osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose voor PFAS</h3>
              <p className="text-sm text-gray-600">Hoe werkt RO tegen PFAS? Membraangrootte, installatie en NSF/ANSI 58 uitgelegd</p>
            </Link>
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief-kool waterfilters</h3>
              <p className="text-sm text-gray-600">Hoe werkt actief kool, wanneer is het effectief en wat zijn de beperkingen voor PFAS?</p>
            </Link>
            <Link href="/filtertechnieken/nanofiltration" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Nanofiltration uitgelegd</h3>
              <p className="text-sm text-gray-600">Nanofiltration vs omgekeerde osmose: effectiviteit, kosten en toepassingen vergeleken</p>
            </Link>
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS waterfilter overzicht</h3>
              <p className="text-sm text-gray-600">Complete gids: alles over PFAS in drinkwater en hoe u uzelf het beste beschermt</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
