import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Mangaan in leidingwater: zwarte vlekken, smaak en gezondheidsrisico',
  description: 'Mangaan in leidingwater veroorzaakt zwarte vlekken, metalige smaak en bij hoge concentraties neurologische risicos. EU-norm 50 µg/L.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/mangaan' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe herken ik mangaan in leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest herkenbare tekenen van mangaan in leidingwater zijn: zwarte of donkerbruine aanslag in toiletpot, wasbak en wasmachine, zwarte vlekken op wit servies en op wasgoed, een metalige of bittere smaak van het water, en zwarte neerslag in waterkoker of koffiemachine. Oranje of bruine aanslag wijst eerder op ijzer; zwarte aanslag is kenmerkend voor mangaan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is mangaan in leidingwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de EU-drinkwaternorm van 50 microgram per liter is er geen bewezen gezondheidsrisico voor volwassenen. EFSA (2018) concludeerde dat ook de esthetische norm voldoende gezondheidskundige bescherming biedt bij normaal drinkwatergebruik. Bij chronische blootstelling boven 400 microgram per liter zag EFSA in studies een verband met cognitieve effecten bij kinderen. In Nederland voldoet leidingwater nagenoeg altijd aan de 50 microgram norm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert mangaan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor effectieve mangaanverwijdering zijn drie methoden geschikt: een mangaanzeoliet filter (specifiek voor mangaan en ijzer, verwijdert 95%+), een oxidatiefilter met beluchting (Mn2+ wordt omgezet naar vast MnO2, verwijdert 90%+), of een omgekeerde osmosefilter (verwijdert 90-95% van opgelost mangaan). Een actief koolfilter of filterkan verwijdert minder dan 30% van mangaan en is onvoldoende.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen mangaan en ijzer in leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ijzer geeft oranje of roodbruine vlekken en aanslag; mangaan geeft zwarte of donkergrijze vlekken. Beide komen vaak samen voor in diep grondwater. Ijzer ruikt soms metaalachtig; mangaan geeft een bittere, metalige smaak. De EU-norm voor ijzer is 200 microgram per liter (tegenover 50 microgram per liter voor mangaan). Bij beide problemen is een combinatie van oxidatiefilter en sedimentfilter gevolgd door actief kool of osmose de aanpak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe meet ik mangaan in mijn kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Via het jaarlijkse waterkwaliteitsrapport van uw drinkwaterbedrijf kunt u gratis de gemeten waarden op uw adres controleren. Voor een meting op adres zijn mangaan-teststrips verkrijgbaar (minder nauwkeurig, circa 15-30 euro). Een gecertificeerd laboratorium biedt nauwkeurige analyse voor circa 30-80 euro per meting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom zijn er zwarte vlekken in mijn toilet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zwarte vlekken in de toiletpot zijn een sterk signaal voor mangaan in het water. Mangaanoxide (MnO2) slaat neer als donkere, moeilijk te verwijderen aanslag. Dit is typisch aanwezig bij diep grondwater. Naast het installeren van een mangaanfilter verwijdert u bestaande aanslag met een zuur schoonmaakmiddel (citroenzuur of azijnzuur) en een stijve borstel.',
      },
    },
    {
      '@type': 'Question',
      name: "In welke regio's heeft Nederland hoog mangaan in grondwater?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hogere mangaanconcentraties in grondwater worden aangetroffen in: Drenthe (met name Drentse Aa en Hunze-gebied), de Veluwe en delen van Gelderland, het rivierengebied (IJsselvallei), en bepaalde gebieden in Groningen en Friesland. Drinkwaterbedrijven passen aangepaste zuiveringsprocessen toe in deze gebieden. Eigenaren van particuliere putten lopen meer risico op te hoog mangaan.",
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe kom ik van mangaanaanslag in mijn toilet af?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mangaanaanslag is hardnekkig maar verwijderbaar met citroenzuuroplossing (2-3 eetlepels citroenzuur in 0,5 liter water) of geconcentreerd azijnzuur. Breng aan op de aanslag, laat 30-60 minuten inwerken en schrobben. Herhaal indien nodig. Vermijd chloorhoudende schoonmaakmiddelen: die lossen mangaan niet op en kunnen de aanslag fixeren. Structurele oplossing: mangaanfilter installeren om herhaling te voorkomen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Mangaan in leidingwater: zwarte vlekken, smaak en gezondheidsrisico',
  description: 'Mangaan in leidingwater veroorzaakt zwarte vlekken, metalige smaak en bij hoge concentraties neurologische risicos. EU-norm 50 µg/L.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/mangaan',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function MangaanLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Mangaan in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/mangaan' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/leidingwater" className="hover:underline">Leidingwater</Link> &rsaquo;{' '}
          <span>Mangaan in leidingwater</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Mangaan in leidingwater: zwarte vlekken, smaak en gezondheidsrisico
          </h1>
          <p className="text-gray-700 text-lg">
            Zwarte vlekken in uw toilet of een metalige smaak in uw water? De oorzaak is waarschijnlijk
            mangaan in het leidingwater. De EU-norm is 50 &micro;g/L; filteroplossingen aanpakken
            dit effectief tot &gt;90%.
          </p>
        </div>

        <QuickAnswer answer="Mangaan in leidingwater herkent u aan zwarte aanslag in toilet en wasmachine en een metalige smaak. EU-norm is 50 microgram per liter. Bij normale leidingwaterniveaus geen gezondheidsrisico. Mangaanzeoliet filter of oxidatiefilter verwijdert 90-95%. Actief koolfilter werkt niet tegen mangaan." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is mangaan en hoe komt het in leidingwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Mangaan (Mn) is een zwaar metaal dat van nature voorkomt in de bodem en in gesteente. Bij diep grondwater lost mangaan op in het water, met name in zuurstofarm milieu. Naast de natuurlijke oorsprong kan industriele lozing bijdragen aan verhoogde mangaangehalten in oppervlaktewater.
        </p>
        <p className="text-gray-700 mb-6">
          Drinkwaterbedrijven in gebieden met hoger mangaan in de bron passen speciale zuivering toe: beluchting (oxidatie) gevolgd door filtratie op zandfilters of mangaanzeoliet. Eigenaren van particuliere putten hebben geen zuivering en lopen meer risico op te hoog mangaan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en EFSA-advies
        </h2>
        <p className="text-gray-700 mb-4">
          De EU-drinkwaternorm voor mangaan is 50 &micro;g/L (microgram per liter, ofwel 0,05 mg/L). Deze norm is primair een esthetische norm: boven dit niveau veroorzaakt mangaan zichtbare aanslag en smaakproblemen.
        </p>
        <p className="text-gray-700 mb-6">
          Het Europese voedselveiligheidsagentschap EFSA publiceerde in 2018 een rapport waarin het concludeerde dat de esthetische norm van 50 &micro;g/L ook voldoende bescherming biedt voor de gezondheid. Bij aanzienlijk hogere concentraties (&gt;400 &micro;g/L, zoals bij industriele blootstelling) zijn in studies neurologische effecten gevonden bij kinderen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Herkenningsgids: mangaan vs. ijzer
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kenmerk</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Mangaan</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">IJzer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Kleur aanslag</td>
                <td className="border border-gray-300 px-3 py-2">Zwart/donkergrijs</td>
                <td className="border border-gray-300 px-3 py-2">Oranje/roodbruin</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Smaak water</td>
                <td className="border border-gray-300 px-3 py-2">Metaalachtig, bitter</td>
                <td className="border border-gray-300 px-3 py-2">IJzerachtig, aards</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">EU-norm</td>
                <td className="border border-gray-300 px-3 py-2">50 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">200 &micro;g/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Watertype</td>
                <td className="border border-gray-300 px-3 py-2">Diep grondwater</td>
                <td className="border border-gray-300 px-3 py-2">Diep grondwater, oude leidingen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Wasmachine effect</td>
                <td className="border border-gray-300 px-3 py-2">Zwarte vlekken in wasgoed</td>
                <td className="border border-gray-300 px-3 py-2">Oranje vlekken in wasgoed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s bij hoge concentraties
        </h2>
        <p className="text-gray-700 mb-4">
          Bij de Nederlandse drinkwaternorm van 50 &micro;g/L is er geen bewezen gezondheidsrisico voor de algemene bevolking. De zorg concentreert zich op drie scenario&apos;s:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Neurologische effecten bij kinderen:</strong> Een EFSA-rapport uit 2018 legde een verband tussen chronische blootstelling aan mangaanconcentraties boven 400 &micro;g/L en cognitieve achteruitgang bij kinderen. Dit niveau wordt niet bereikt in normaal Nederlands leidingwater, maar kan voorkomen bij particuliere putten in mangaanrijke gebieden.
          </li>
          <li>
            <strong>Parkinson-achtige symptomen:</strong> Bij beroepsmatige blootstelling (mijnwerkers, lassers) aan hoge mangaanconcentraties zijn neurologische aandoeningen gedocumenteerd. Dit betreft inhalatie van mangaanstof, niet drinkwater.
          </li>
          <li>
            <strong>Bij normale NL drinkwaterniveaus (&lt;50 &micro;g/L):</strong> Geen bewezen gezondheidsrisico. Het probleem is hoofdzakelijk esthetisch (vlekken, smaak).
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regio&apos;s in Nederland met hoog mangaan in grondwater
        </h2>
        <p className="text-gray-700 mb-4">
          Hogere mangaangehalten in grondwater komen voor in gebieden met specifieke bodemgesteldheid:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Drenthe:</strong> Drentse Aa stroomgebied, Hunze-gebied</li>
          <li><strong>Gelderland:</strong> Veluwerand, IJsselvallei</li>
          <li><strong>Groningen en Friesland:</strong> Delen met diep kleigrondwater</li>
          <li><strong>Achterhoek:</strong> Lokale piekwaarden bij particuliere putten</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Aangesloten op het openbare leidingnet hoeft u zich in deze gebieden doorgaans geen zorgen te maken: drinkwaterbedrijven passen aangepaste zuivering toe. Eigenaren van particuliere putten doen er goed aan het water jaarlijks te laten testen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteroplossingen voor mangaan
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Mangaanverwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bijzonder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Mangaanzeoliet filter</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">95%+</td>
                <td className="border border-gray-300 px-3 py-2">Specifiek voor mangaan/ijzer</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Oxidatiefilter (beluchting)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">90%+</td>
                <td className="border border-gray-300 px-3 py-2">Mn&#178;+ wordt neergeslagen als MnO&#178;</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">90&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">Brede filtratie, ook PFAS en lood</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-semibold">&lt;30%</td>
                <td className="border border-gray-300 px-3 py-2">Onvoldoende voor mangaan</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          Bij een combinatie van mangaan en ijzer (frequent samen aanwezig in diep grondwater) is de aanbevolen aanpak:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Beluchting/oxidatie:</strong> Mn&#178;+ en Fe&#178;+ worden omgezet naar vaste neerslagen</li>
          <li><strong>Sedimentfilter:</strong> Vangt het gevormde MnO&#178; en Fe&#178;O&#178; op</li>
          <li><strong>Actief koolfilter of osmose:</strong> Verdere zuivering voor smaak en resterende stoffen</li>
        </ol>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over mangaan in leidingwater</h2>
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
          <Link href="/leidingwater/ijzer" className="text-[#005F8A] underline">ijzer in leidingwater</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
              <p className="text-sm text-gray-600">Overzicht van zware metalen zoals mangaan, ijzer en lood in drinkwater: normen en gezondheidsrisicos.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: uitleg en werking</h3>
              <p className="text-sm text-gray-600">Hoe een osmosefilter mangaan en andere opgeloste metalen effectief verwijdert uit leidingwater.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
