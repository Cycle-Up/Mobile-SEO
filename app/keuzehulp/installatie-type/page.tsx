import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Welk type waterfilter past bij uw keuken? Aanrecht, onderkast of inbouw | WaterfilterPlatform',
  description: 'Vergelijk de 4 installatietypes: filterkan, aanrechtmodel, onderkastfilter en inbouw osmose. Geschikt voor huur of koop, prijs en capaciteit per type.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keuzehulp/installatie-type' },
  openGraph: {
    title: 'Welk type waterfilter past bij uw keuken? Aanrecht, onderkast of inbouw',
    description: 'Vergelijk 4 installatietypes voor waterfilters: filterkan, aanrechtmodel, onderkastfilter en inbouw osmose.',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Mag ik als huurder een waterfilter installeren?',
    answer: 'Een filterkan of aanrechtmodel vereist geen installatie en is altijd toegestaan in huurwoningen. Een onderkastfilter vereist een kleine aansluiting op de waterleiding; dit is technisch eenvoudig en niet permanent, maar vraag uw verhuurder toestemming. Een osmosefilter met eigen kraantje vereist een extra boorgat in het aanrecht; dit is permanenter en vraagt altijd toestemming van de verhuurder.',
  },
  {
    question: 'Wat is het verschil tussen een aanrechtmodel en een onderkastfilter?',
    answer: 'Een aanrechtmodel staat op het aanrecht en is via een adapter op de kraan aangesloten. Het neemt ruimte op het aanrecht in en werkt via een kraanschakelaar. Een onderkastfilter zit verborgen onder het aanrecht, heeft doorgaans een hogere capaciteit, een eigen kleine aparte kraan, en vergt een professionele installatie (1-2 uur). Onderkastfilters bieden betere filtratie en zijn esthetischer, aanrechtmodellen zijn flexibeler en makkelijker te verplaatsen.',
  },
  {
    question: 'Hoe lang duurt de installatie van een onderkastfilter?',
    answer: 'Een installateur plaatst een onderkastfilter in 1-2 uur. Werkzaamheden: aansluiting op de koudwaterleiding (kogelkraan), afvoer naar sifon, en plaatsing van het filtersysteem onder het aanrecht. De extra kraan (als apart tapkraantje) vereist een boorgat in het aanrecht (circa 35 mm). Sommige leveranciers bieden installatie inbegrepen bij aankoop.',
  },
  {
    question: 'Heeft een osmosefilter een aparte kraan nodig?',
    answer: 'Ja, een osmosefilter heeft altijd een aparte drinkwaterkraan naast de bestaande keukenkraan. Dit kraantje levert gefilterd water; het normale kraan blijft voor spoelwater. De extra kraan vereist een boorgat in het aanrecht. Veel aanrechten hebben al een derde gat voor zeeppomp of kokendwaterkraan; dat gat kan worden hergebruikt. Zonder extra gat is in sommige gevallen een kraandoorvoer in de waterleiding mogelijk, maar dit is minder gangbaar.',
  },
  {
    question: 'Wat is de capaciteit van een onderkastfilter versus een filterkan?',
    answer: 'Een filterkan levert 1-3 liter per vulbeurt en filtert 2-4 liter per uur via zwaartekracht. Een aanrechtmodel levert 1-3 liter per minuut op leidingwaterdruk. Een onderkastfilter met actief kool levert 2-5 liter per minuut. Een osmosefilter produceert 150-400 liter per dag (opslagtank vereist), maar levert via de kraan 1-2 liter per minuut vanuit de tank. Voor een gezin van 4 is een osmosefilter met opslagtank comfortabeler dan een filterkan.',
  },
];

export default function InstallatieTypePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Keuzehulp', item: 'https://waterfilterplatform.nl/keuzehulp' },
              { '@type': 'ListItem', position: 3, name: 'Installatietype', item: 'https://waterfilterplatform.nl/keuzehulp/installatie-type' },
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
            headline: 'Welk type waterfilter past bij uw keuken? Aanrecht, onderkast of inbouw',
            description: 'Vergelijk 4 installatietypes voor waterfilters: filterkan, aanrechtmodel, onderkastfilter en inbouw osmose.',
            datePublished: '2026-05-17',
            dateModified: '2026-05-17',
            url: 'https://waterfilterplatform.nl/keuzehulp/installatie-type',
            publisher: { '@type': 'Organization', name: 'WaterfilterPlatform', url: 'https://waterfilterplatform.nl' },
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keuzehulp">Keuzehulp</Link> &rsaquo; Installatietype
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Welk type waterfilter past bij uw keuken? Aanrecht, onderkast of inbouw
          </h1>
          <QuickAnswer answer="Er zijn 4 installatietypes: filterkan (geen installatie, portable), aanrechtmodel (15 minuten op kraan, flexibel), onderkastfilter (professionele installatie, hogere capaciteit, eigen kraantje) en inbouw osmose (vaste installatie, aparte drinkwaterkraan, hoogste waterkwaliteit). Voor huurwoningen zijn de eerste twee het eenvoudigst; voor koopwoningen met kwaliteitswensen is osmose de beste keuze." />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-6">De 4 installatietypes uitgelegd</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-[#003F5C] mb-2">1. Filterkan — geen installatie, portabel</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <p className="font-medium text-gray-700">Prijs aanschaf</p>
                  <p className="text-gray-600">EUR 20-50</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Installatiemoeite</p>
                  <p className="text-gray-600">Geen — direct gebruiksklaar</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Geschikt voor huur</p>
                  <p className="text-green-700 font-medium">Ja, altijd</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Capaciteit</p>
                  <p className="text-gray-600">1-3 liter per vulbeurt</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                De filterkan is de meest toegankelijke optie. U vult de kan met kraanwater; het water filtert via zwaartekracht door een koolstoffilter of combinatiefilter. Ideaal voor singles, studenten en tijdelijke situaties. De voornaamste beperking is de lage capaciteit: voor een gezin van 4 moet u de kan meerdere keren per dag vullen.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-[#003F5C] mb-2">2. Aanrechtmodel — 15 minuten installatie op kraan</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <p className="font-medium text-gray-700">Prijs aanschaf</p>
                  <p className="text-gray-600">EUR 50-150</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Installatiemoeite</p>
                  <p className="text-gray-600">Laag — kraanconnector</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Geschikt voor huur</p>
                  <p className="text-green-700 font-medium">Ja, geen toestemming nodig</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Capaciteit</p>
                  <p className="text-gray-600">1-3 liter per minuut</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Een aanrechtfilter wordt via een verloopstuk op de bestaande kraan geschroefd en staat op het aanrecht. Een schakelaar op het apparaat of de kraan wisselt tussen gefilterd en ongefilterd water. Neemt aanrechtruimte in, maar vereist geen boring of loodgieter. Flexibel: u neemt het mee bij verhuizing. Werkt niet op alle krantypen (draaikranen, trekkranen).
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <h3 className="text-xl font-semibold text-[#003F5C] mb-2">3. Onderkastfilter — professionele installatie, capaciteitsvoordeel</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <p className="font-medium text-gray-700">Prijs aanschaf</p>
                  <p className="text-gray-600">EUR 100-400</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Installatiemoeite</p>
                  <p className="text-gray-600">Middel — loodgieter 1-2 uur</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Geschikt voor huur</p>
                  <p className="text-yellow-600 font-medium">Vraag toestemming verhuurder</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Capaciteit</p>
                  <p className="text-gray-600">2-5 liter per minuut</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Een onderkastfilter zit verborgen in de kast onder het aanrecht en is aangesloten op de koudwaterleiding. Een apart klein kraantje levert gefilterd water. Het systeem is onzichtbaar, heeft hogere capaciteit dan aanrechtmodellen en filterlevensduur van 6-12 maanden. De installateur boort een gat voor het extra kraantje (35 mm) en sluit het systeem aan op de waterleiding via een T-koppeling of kogelkraan.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 border-[#005F8A]">
              <h3 className="text-xl font-semibold text-[#003F5C] mb-2">4. Inbouw osmose — vaste installatie, hoogste kwaliteit</h3>
              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <p className="font-medium text-gray-700">Prijs aanschaf</p>
                  <p className="text-gray-600">EUR 300-2500</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Installatiemoeite</p>
                  <p className="text-gray-600">Hoog — loodgieter halve dag</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Geschikt voor huur</p>
                  <p className="text-red-600 font-medium">Toestemming vereist, permanent</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Capaciteit</p>
                  <p className="text-gray-600">150-400 liter per dag (tank)</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Een osmosefilter met opslagtank levert de hoogste waterkwaliteit: PFAS, lood, nitraat, bacterien, medicijnresten — vrijwel alles wordt verwijderd. Het systeem heeft een eigen drinkwaterkraan naast de bestaande keukenkraan. Installatie omvat aansluiting op koud water, afvoer van concentraat, plaatsing van de opslagtank en aanluiting van de drinkwaterkraan. Ideaal voor koopwoningen waarbij kwaliteit prioriteit heeft.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Vergelijkingstabel: alle 4 installatietypes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Eigenschap</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Filterkan</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Aanrecht</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Onderkast</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Inbouw osmose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Prijs</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 20-50</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 50-150</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 100-400</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 300-2500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Installatie</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Geen</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">15 minuten</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">1-2 uur loodgieter</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Halve dag</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Huurwoning</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Toestemming</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Toestemming</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Filtert PFAS</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Nee</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Gedeeltelijk</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja 95-99%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Capaciteit/dag</td>
                  <td className="border border-gray-300 px-3 py-2">5-15 liter</td>
                  <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
                  <td className="border border-gray-300 px-3 py-2">Onbeperkt</td>
                  <td className="border border-gray-300 px-3 py-2">150-400 liter (tank)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Jaarlijks onderhoud</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 40-80</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 30-60</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 30-80</td>
                  <td className="border border-gray-300 px-3 py-2">EUR 60-100</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            <li><Link href="/keuzehulp/budget" className="text-[#005F8A] hover:underline">Waterfilter per budget: wat kunt u verwachten?</Link></li>
            <li><Link href="/keuzehulp/huurwoning" className="text-[#005F8A] hover:underline">Waterfilter voor huurwoning</Link></li>
            <li><Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose: complete gids</Link></li>
            <li><Link href="/keuzehulp" className="text-[#005F8A] hover:underline">Terug naar keuzehulp overzicht</Link></li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmose: uitleg en installatie</h3>
              <p className="text-sm text-gray-600">Hoe een inbouw osmosefilter werkt, wat de installatie inhoudt en voor wie het de beste keuze is.</p>
            </Link>
            <Link href="/keurmerken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter keurmerken checklist</h3>
              <p className="text-sm text-gray-600">Welke keurmerken en certificeringen zijn betrouwbaar bij het kiezen van een waterfilter?</p>
            </Link>
          </div>
        </section>

        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="keuzehulp-installatie-type-cta"
          label="Bekijk de zuiver-water-kranen bij PureAqua"
          title="Weet je welk installatietype past?"
          sub="Bekijk de zuiver-water-kranen (inbouw) of vraag naar de Countertop RO (zonder installatie) bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
