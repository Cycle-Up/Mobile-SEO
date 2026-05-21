import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Omgekeerde osmose vs ultrafiltratie: wat is het verschil?',
  description: 'Omgekeerde osmose (RO) filtert tot 0,0001 µm en verwijdert 95-99% van alle verontreinigingen. Ultrafiltratie (UF) filtert tot 0,01 µm en verwijdert bacteriën.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/vs-ultrafiltratie' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen omgekeerde osmose en ultrafiltratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose (RO) filtert tot 0,0001 micrometer en verwijdert vrijwel alles: virussen, bacterien, ionen, zware metalen, PFAS, nitraat en hormonen. Ultrafiltratie (UF) filtert tot 0,01 micrometer en verwijdert bacterien, protozoa en grote virussen, maar niet opgeloste chemicalieen zoals PFAS, nitraat of lood. RO vereist hogere waterdruk en produceert afvalwater; UF werkt bij lagere druk en zonder afvalwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert ultrafiltratie ook PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. PFAS-moleculen (zoals PFOS en PFOA) zijn te klein voor een ultrafiltratieembraan. UF-membranen hebben porieen van 0,01-0,1 micrometer; PFAS-moleculen zijn slechts enkele nanometers groot en passeren het membraan. Voor effectieve PFAS-verwijdering (95-99%) is omgekeerde osmose of actief-koolfiltratie met specifiek PFAS-koolstofblok nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke filtermethode is beter: RO of ultrafiltratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dat hangt af van uw waterprobleem. Is uw water bacteriologisch onveilig maar chemisch schoon, dan volstaat ultrafiltratie. Bevat uw water PFAS, nitraat, lood, hormonen of andere opgeloste chemicalieen, dan is omgekeerde osmose noodzakelijk. RO is breder inzetbaar maar vereist meer onderhoud, meer ruimte en produceert afvalwater. UF is eenvoudiger en zuiniger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Produceert ultrafiltratie ook afvalwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, dat is een groot voordeel van ultrafiltratie ten opzichte van omgekeerde osmose. UF-systemen produceren geen afvalwater: vrijwel al het inkomende water wordt als productwater geleverd. RO-systemen produceren 3-4 liter afvalwater per liter productwater (zonder permeaatpomp). Dit maakt UF aanzienlijk zuiniger in watergebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert ultrafiltratie bacteriën en virussen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ultrafiltratie verwijdert bacterien met een log-reductie van 4 of meer (meer dan 99,99%). Protozoa zoals Giardia en Cryptosporidium worden volledig tegengehouden. Grote virussen (norovirus, rotavirus) worden voor het grootste deel tegengehouden. Kleine virussen (enterovirussen, sommige fagen) kunnen bij beschadigd membraan toch doorlaten. Omgekeerde osmose verwijdert ook de kleinste virussen compleet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ultrafiltratie goedkoper dan omgekeerde osmose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, op bijna alle fronten. UF-membranen kosten €20-80 en gaan 2-5 jaar mee. Een volledig UF-systeem kost €100-300. RO-systemen kosten €250-800, het membraan €25-70 en de jaarlijkse filterkosten zijn hoger. Bovendien bespaart UF op waterkosten door het ontbreken van afvalwater. UF heeft ook geen pomp nodig, wat energiekosten scheelt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik ultrafiltratie gebruiken voor babywater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ultrafiltratie verwijdert bacterien en protozoa effectief, maar niet nitraat, lood of PFAS. Voor babywater in een gebied met nitraat (landbouwgebied) of PFAS-verontreiniging is omgekeerde osmose veiliger. In gebieden met bacteriologisch zuiver maar microbiologisch onzeker water (campings, buitenland, eigen waterput) biedt UF een goede bescherming. Controleer altijd de lokale waterkwaliteitsrapportage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de nadelen van omgekeerde osmose ten opzichte van ultrafiltratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De nadelen van RO ten opzichte van UF zijn: (1) hoog afvalwatergebruik (3-4 liter per liter product zonder permeaatpomp); (2) hogere aanschaf- en onderhoudskosten; (3) verwijdert ook nuttige mineralen zoals calcium en magnesium (remineralisatie noodzakelijk voor optimale smaak en gezondheid); (4) vereist hogere waterdruk (minimaal 2,8 bar); (5) trage productie bij lage druk. UF behoudt mineralen en is energie- en waterefficienter.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Omgekeerde osmose vs ultrafiltratie: wat is het verschil?',
  description: 'Omgekeerde osmose (RO) filtert tot 0,0001 µm en verwijdert 95-99% van alle verontreinigingen. Ultrafiltratie (UF) filtert tot 0,01 µm en verwijdert bacteriën.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/vs-ultrafiltratie',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function RoVsUltrafiltatiePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Omgekeerde osmose', item: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
              { '@type': 'ListItem', position: 3, name: 'RO vs ultrafiltratie', item: 'https://waterfilterplatform.nl/omgekeerde-osmose/vs-ultrafiltratie' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/omgekeerde-osmose" className="hover:underline">Omgekeerde osmose</Link> &rsaquo;{' '}
          <span>RO vs ultrafiltratie</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Omgekeerde osmose vs ultrafiltratie: wat is het verschil?
        </h1>

        <QuickAnswer answer="Omgekeerde osmose (RO) filtert tot 0,0001 µm en verwijdert 95-99% van alles inclusief PFAS, nitraat, lood en hormonen, maar produceert afvalwater. Ultrafiltratie (UF) filtert tot 0,01 µm, verwijdert bacteriën en protozoa effectief, maar niet opgeloste chemicaliën. UF is goedkoper en zuiniger; RO is breder inzetbaar." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtratieniveaus vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          Waterfiltratie kent meerdere niveaus, van grof tot extreem fijn. Elk niveau verwijdert een andere groep van verontreinigingen. Hieronder het complete overzicht van microfiltratie tot omgekeerde osmose:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Poriemaat</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Druk nodig</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Wat het verwijdert</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Microfiltratie (MF)</td>
                <td className="border border-gray-300 px-3 py-2">0,1-10 µm</td>
                <td className="border border-gray-300 px-3 py-2">Laag</td>
                <td className="border border-gray-300 px-3 py-2">Sediment, grote protozoa</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Ultrafiltratie (UF)</td>
                <td className="border border-gray-300 px-3 py-2">0,01-0,1 µm</td>
                <td className="border border-gray-300 px-3 py-2">Matig</td>
                <td className="border border-gray-300 px-3 py-2">Bacterien, protozoa, grote virussen, colloiden</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nanofiltratie (NF)</td>
                <td className="border border-gray-300 px-3 py-2">0,001-0,01 µm</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
                <td className="border border-gray-300 px-3 py-2">Virussen, hardheid, sommige chemicalieen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">0,0001 µm</td>
                <td className="border border-gray-300 px-3 py-2">Zeer hoog</td>
                <td className="border border-gray-300 px-3 py-2">Alles: virussen, ionen, zware metalen, PFAS, zouten</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat ultrafiltratie wel en niet verwijdert
        </h2>
        <p className="text-gray-700 mb-4">
          Ultrafiltratie is zeer effectief voor microbiologische bescherming, maar heeft beperkingen bij chemische verontreinigingen:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="border border-green-200 bg-green-50 rounded-xl p-4">
            <h3 className="font-semibold text-green-800 mb-2">UF verwijdert WEL</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Bacterien (&gt;99,99% verwijdering)</li>
              <li>Protozoa (Giardia, Cryptosporidium)</li>
              <li>Grote virussen (norovirus, rotavirus)</li>
              <li>Colloiden en gesuspendeerde deeltjes</li>
              <li>Sommige microplastics (grotere deeltjes)</li>
              <li>Troebeling (turbiditeit)</li>
            </ul>
          </div>
          <div className="border border-red-200 bg-red-50 rounded-xl p-4">
            <h3 className="font-semibold text-red-800 mb-2">UF verwijdert NIET</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>PFAS (molecuul te klein)</li>
              <li>Nitraat (opgelost ion)</li>
              <li>Lood en andere zware metalen (ionen)</li>
              <li>Hormonen en medicijnen</li>
              <li>Kalk (calcium, magnesium)</li>
              <li>Chloor en organische chemicalieen</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat RO verwijdert dat UF niet verwijdert
        </h2>
        <p className="text-gray-700 mb-4">
          Het RO-membraan heeft een poriemaat van slechts 0,0001 micrometer en filtreert op moleculair niveau. Dit maakt het geschikt voor verontreinigingen die UF laat passeren:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Verontreiniging</th>
                <th className="border border-gray-300 px-3 py-2 text-left">RO-verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">UF-verwijdering</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">PFAS (PFOS/PFOA)</td>
                <td className="border border-gray-300 px-3 py-2">95-99%</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Lood (Pb)</td>
                <td className="border border-gray-300 px-3 py-2">95-99%</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2">85-95%</td>
                <td className="border border-gray-300 px-3 py-2">0%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Hormonen (ethinylestradiol)</td>
                <td className="border border-gray-300 px-3 py-2">97-99%</td>
                <td className="border border-gray-300 px-3 py-2">&lt;30%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Arseen</td>
                <td className="border border-gray-300 px-3 py-2">95-99%</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Fluoride</td>
                <td className="border border-gray-300 px-3 py-2">85-95%</td>
                <td className="border border-gray-300 px-3 py-2">0%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voordelen van ultrafiltratie ten opzichte van omgekeerde osmose
        </h2>
        <p className="text-gray-700 mb-4">
          Ondanks de beperktere filterbreedte heeft UF een aantal aanzienlijke voordelen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Geen afvalwater:</strong> RO produceert 3-4 liter afval per 1 liter productwater (zonder permeaatpomp). UF produceert geen afvalwater &mdash; vrijwel al het water wordt benut.</li>
          <li><strong>Geen elektrische pomp nodig:</strong> UF werkt bij lage druk (normaal leidingwaterdruk volstaat). Geen extra energieverbruik voor een boosterpomp.</li>
          <li><strong>Mineralen blijven behouden:</strong> UF verwijdert geen opgeloste mineralen zoals calcium en magnesium. Het water behoudt zijn natuurlijke mineralenbalans en smaak.</li>
          <li><strong>Goedkopere membranen:</strong> UF-membranen kosten €20-80 en gaan 2-5 jaar mee. RO-membranen kosten €25-120 en gaan 2-3 jaar mee.</li>
          <li><strong>Eenvoudiger systeem:</strong> geen opslagtank nodig, snellere doorstroming, minder onderhoud.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Toepassingen van ultrafiltratie
        </h2>
        <p className="text-gray-700 mb-4">
          UF heeft specifieke toepassingsgebieden waar het uitblinkt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Drinkwater in landen zonder chemische verontreiniging:</strong> in gebieden waar het water bacteriologisch onveilig maar chemisch schoon is, biedt UF uitstekende bescherming zonder de complexiteit van RO</li>
          <li><strong>Voorfiltratie voor RO:</strong> een UF-membraan als prefilter voor een RO-systeem verlengt de levensduur van het RO-membraan aanzienlijk</li>
          <li><strong>Noodwaterfiltratie:</strong> draagbare UF-filters zijn licht en compact (denk aan Lifestraw, Sawyer Squeeze)</li>
          <li><strong>Reisfilters:</strong> vrijwel alle trekkers- en campingwaterfilters zijn gebaseerd op UF-technologie</li>
          <li><strong>Landhuizen met eigen bron:</strong> bescherming tegen bacterien en protozoa uit grondwater zonder PFAS-risico</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kiest u voor omgekeerde osmose?
        </h2>
        <p className="text-gray-700 mb-4">
          RO is de aangewezen keuze als uw water een of meer van de volgende problemen heeft:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>PFAS-verontreiniging:</strong> in toenemende mate aangetoond in Nederland, met name bij Delfland en delen van Noord-Brabant (vliegveldomgeving)</li>
          <li><strong>Loodleidingen:</strong> woningen voor 1960 kunnen loodleidingen hebben die loodionen aan het drinkwater afgeven</li>
          <li><strong>Nitraat:</strong> landbouwgebieden (Brabant, Limburg, Gelderland) met hogere nitraatconcentraties in grondwater</li>
          <li><strong>Hormonen en medicijnen:</strong> voor extra bescherming naast de drinkwaterzuivering, met name bij gebruik van oppervlaktewater als bron</li>
          <li><strong>Hoge zuiverheid voor specifiek gebruik:</strong> brouwen van bier of espresso, aquaria, hydroponics, laboratoriumwerk</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer volstaat ultrafiltratie?
        </h2>
        <p className="text-gray-700 mb-4">
          UF is een uitstekende en efficiëntere keuze in de volgende situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>U wilt bescherming tegen bacterien en protozoa maar uw water is chemisch schoon</li>
          <li>U wilt zuinig omgaan met water (geen afvalwater)</li>
          <li>U wilt de mineraalbalans van het water behouden</li>
          <li>Uw ruimte of budget is beperkt</li>
          <li>U woont in een gebied zonder PFAS, nitraat- of loodprobleem</li>
        </ul>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filtertechnieken/ultrafiltratie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Ultrafiltratie uitgelegd</h3>
            <p className="text-sm text-gray-600">Hoe werkt ultrafiltratie en voor welke toepassingen is het geschikt?</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechniek omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">De techniek achter RO-filtratie uitgelegd voor consumenten.</p>
          </Link>
          <Link href="/vergelijken/waterfilter-vs-waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter vs waterontharder</h3>
            <p className="text-sm text-gray-600">Wat is het verschil en welke oplossing past bij uw situatie?</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Hoe werkt het membraan en wat filtert het eruit?</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over RO vs ultrafiltratie</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilter soorten vergelijken</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
