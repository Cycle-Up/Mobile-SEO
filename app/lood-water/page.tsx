import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lood in kraanwater: oorzaken, risico\'s en hoe te verwijderen',
  description:
    'Lood in kraanwater: oude loden leidingen voor 1960, EU-norm 5 µg/L, gezondheidsrisico\'s (neurotoxisch, gevaarlijk voor kinderen), welke filters lood',
  alternates: { canonical: 'https://waterfilterplatform.nl/lood-water' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe weet ik of mijn kraanwater lood bevat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lood in kraanwater is niet te zien, ruiken of proeven. Indicatoren dat je risico loopt: je woning is gebouwd vóór 1960, je hebt een grijs-blauw gekleurde hoofdleiding in de meterkast, of je weet dat er nooit een leidingvervanging heeft plaatsgevonden. Zekerheid geeft alleen een watertest via een gecertificeerd laboratorium (€30–80). Laat het water tappen na minimaal 30 minuten stilstand voor de meest representatieve meting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de norm voor lood in drinkwater in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Per 12 januari 2021 geldt de herziene EU-drinkwaterrichtlijn (2020/2184). De maximale grenswaarde voor lood is verlaagd van 10 µg/L naar 5 µg/L. Drinkwaterbedrijven moeten in hun distributienetwerk aan 5 µg/L voldoen. Voor binnenhuisinstallaties (eigendomsgrens van de eigenaar) geldt dezelfde norm, maar handhaving is lastiger omdat de eigenaar verantwoordelijk is voor zijn eigen leidingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een Brita-filterkan lood uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard geactiveerde koolfilterkannen (zoals Brita Classic) zijn onvoldoende voor betrouwbare loodverwijdering. Ze zijn niet gecertificeerd voor loodreductie bij de EU-norm van 5 µg/L. Sommige premium filterpatronen (zoals Brita Maxtra Pro) claimen beperkte loodreductie, maar bieden geen garantie bij hogere loodconcentraties. Voor betrouwbare loodverwijdering heb je een NSF/ANSI 58-gecertificeerd systeem nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk filter verwijdert lood het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose (RO) is de meest effectieve methode: 95–98% loodverwijdering, gecertificeerd onder NSF/ANSI 58. NSF/ANSI 53-gecertificeerde koolstofblokfilters verwijderen ook 95%+ van lood, maar uitsluitend als het filter daarvoor specifiek gecertificeerd is (controleer het certificaat). Standaard GAC-granulaat koolfilters zijn onbetrouwbaar voor lood en worden niet aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt het om de kraan eerst te laten lopen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar het is slechts een tijdelijke maatregel. Laat de koude kraan minimaal 2 minuten doorlopen na een stilstandperiode van meer dan een uur. Dit spoelt het stilstaande water (dat lood uit leidingen heeft opgelost) weg. Gebruik dit spoelwater voor planten of toilet, niet voor drinken of koken. Het &ldquo;laten lopen&rdquo; vermindert het risico maar lost het probleem niet structureel op.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie loopt het meeste risico van lood in water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kinderen onder de 6 jaar zijn het meest kwetsbaar: hun hersenen en zenuwstelsel zijn nog in ontwikkeling en lood is sterk neurotoxisch bij kleine kinderen. Er bestaat geen veilige drempel voor loodblootstelling bij jonge kinderen. Ook zwangere vrouwen lopen een verhoogd risico vanwege de overdracht aan de foetus. Mensen in woningen gebouwd vóór 1960 hebben de hoogste kans op loden leidingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de gezondheidseffecten van lood in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er is geen veilige blootstellingsdrempel voor lood. Chronische blootstelling (ook aan lage niveaus) bij kinderen leidt tot verminderde cognitieve ontwikkeling, gedragsproblemen en lagere IQ-scores. Bij volwassenen: verhoogde bloeddruk, nierschade en reproductieve problemen. Acuut loodvergiftiging bij sterk verhoogde niveaus geeft buikpijn, braken en neurologische klachten. Het RIVM heeft geen veilig niveau vastgesteld.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik mijn loden leidingen laten vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, leidingrenovatie is de structurele oplossing. Loden binnenleidingen vervangen kost €1.000–5.000 afhankelijk van de woning. Subsidies zijn beschikbaar in sommige gemeenten. Tot de vervanging: laten lopen vóór gebruik en een gecertificeerd osmosefilter op de keukenkraan installeren. Het waterleidingbedrijf vervangt het deel op straat; voor het deel in de woning is de eigenaar verantwoordelijk.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: "Lood in kraanwater: oorzaken, risico's en hoe te verwijderen",
  description:
    "Lood in kraanwater via oude leidingen vóór 1960, EU-norm 5 µg/L, neurotoxische gezondheidsrisico's, welke filters lood verwijderen en stap-voor-stap aanpak.",
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  url: 'https://waterfilterplatform.nl/lood-water',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LoodWaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Lood in kraanwater', item: 'https://waterfilterplatform.nl/lood-water' },
            ],
          },
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>Lood in kraanwater</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Lood in kraanwater: oorzaken, risico&apos;s en hoe te verwijderen
        </h1>

        <div className="bg-[#E0F2FE] border-l-4 border-[#005F8A] rounded-lg p-4 mb-6">
          <p className="text-gray-700 text-sm font-medium">
            <strong>Samenvatting:</strong> Lood in kraanwater komt niet van het drinkwaterbedrijf, maar van oude leidingen in woningen gebouwd v&oacute;&oacute;r 1960. De EU-norm is in 2021 verlaagd naar 5 µg/L. Er is geen veilige ondergrens voor lood — kinderen zijn het meest kwetsbaar. Omgekeerde osmose verwijdert 95–98% van lood en is de meest betrouwbare filtermethode.
          </p>
        </div>

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waar komt lood in kraanwater vandaan?
        </h2>
        <p className="text-gray-700 mb-4">
          Het drinkwaterbedrijf levert loodvrij water. Lood in het water bij de kraan thuis komt uitsluitend van de binnenhuisinstallatie — de leidingen, soldeerverbindingen en koppelingen in de woning zelf.
        </p>
        <p className="text-gray-700 mb-4">
          De voornaamste bronnen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Loden hoofdleidingen (binnenkant woning):</strong> Tot in de jaren &apos;60 werden loden binnenbuizen standaard toegepast. Woningen gebouwd vóór 1960 hebben een significant risico op loden leidingen. In appartementen kan ook de aansluitpleiding (van straat naar gebouw) nog van lood zijn.</li>
          <li><strong>Soldeerverbindingen:</strong> Koperen leidingen uit de periode 1960–1985 werden vaak gelegd met loodtinhoudend soldeer. Dit soldeer lost langzaam op, met name bij zacht of zuur water.</li>
          <li><strong>Koppelingen en kranen van messing:</strong> Messing bevat tot 3% lood. Oudere kranen en koppelingen kunnen lood afgeven aan stilstaand water, met name bij hogere watertemperatuur.</li>
          <li><strong>Loodstukken in de meter en hoofdkraan:</strong> In oude woningen kunnen ook de watermeter-aansluiting en de hoofdkraan van lood zijn.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Belangrijk: lood lost sneller op als het water lang stilstaat (nacht, vakantie) en bij zachter of iets zuurder water. Het eerste water uit de kraan &apos;s ochtends bevat de hoogste loodconcentratie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm voor lood: verstrengd in 2021
        </h2>
        <p className="text-gray-700 mb-4">
          De herziene EU-drinkwaterrichtlijn (2020/2184) heeft de maximale grenswaarde voor lood per 12 januari 2021 gehalveerd van <strong>10 µg/L naar 5 µg/L</strong>. Dit weerspiegelt de wetenschappelijke consensus dat er geen veilige drempelwaarde bestaat voor loodblootstelling — het principe is: zo laag als redelijkerwijs haalbaar (ALARA).
        </p>
        <p className="text-gray-700 mb-6">
          In Nederland is de norm geïmplementeerd via het Drinkwaterbesluit. Drinkwaterbedrijven zijn verantwoordelijk voor het openbare net; woningeigenaren zijn zelf verantwoordelijk voor de binnenhuisinstallatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wie loopt risico?
        </h2>
        <p className="text-gray-700 mb-4">
          Niet iedereen heeft lood in het kraanwater. Je loopt verhoogd risico als:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Je woning is gebouwd <strong>vóór 1960</strong> (hoog risico op loden leidingen)</li>
          <li>Je woning is gebouwd <strong>tussen 1960 en 1985</strong> (risico op loodtinsoldeer bij koperleidingen)</li>
          <li>Je woont in een <strong>appartement</strong> met een collectieve aansluitpleiding die nooit vervangen is</li>
          <li>Je hebt <strong>zachter water</strong> (hardheid onder 10 °dH) — zachter water lost meer lood op</li>
          <li>Je water staat <strong>lang stil</strong> in de leidingen (nacht, langere afwezigheid)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s: neurotoxisch, geen veilige drempel
        </h2>
        <p className="text-gray-700 mb-4">
          Lood is een van de best gedocumenteerde neurotoxische stoffen. De WHO, EFSA en RIVM zijn eensluidend: er bestaat <strong>geen veilige ondergrens</strong> voor loodblootstelling.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Kinderen onder 6 jaar:</strong> De hersenen zijn nog in ontwikkeling. Chronische loodblootstelling leidt tot cognitieve schade, verminderd IQ, gedragsproblemen en leerproblemen. Zelfs blootstelling aan 1–2 µg/L boven langere tijd is meetbaar schadelijk.</li>
          <li><strong>Zwangere vrouwen:</strong> Lood passeert de placenta en kan de foetus bereiken. Verhoogde bloedloodwaarden bij moeders zijn geassocieerd met vroeggeboorte en laag geboortegewicht.</li>
          <li><strong>Volwassenen:</strong> Verhoogde bloeddruk, nierschade en reproductieve problemen bij langdurige blootstelling. Minder acuut dan bij kinderen, maar nog steeds ongewenst.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe controleer ik of mijn water lood bevat?
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li><strong>Visuele inspectie leidingen:</strong> Kijk in de meterkast: loden leidingen zijn grijsblauw van kleur en buigen zonder knikken. Koper is oranje-rood, gegalvaniseerd staal zilvergrijs.</li>
          <li><strong>Woning bouwjaar:</strong> Bouw vóór 1960 = hoog risico, 1960–1985 = matig risico, na 1985 = laag risico.</li>
          <li><strong>Watertest laten doen:</strong> Een gecertificeerd laboratorium (zoals SGS, Kiwa, ALcontrol) test op lood voor €30–80. Laat het water na minimaal 30 minuten stilstand tappen voor de worst-case meting. Sommige gemeenten bieden gratis testkits aan voor woningen gebouwd vóór 1960.</li>
          <li><strong>Gemeente of drinkwaterbedrijf vragen:</strong> Vraag na of de aansluitpleiding (van straat naar woning) al vervangen is. Drinkwaterbedrijven registreren dit.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke filters verwijderen lood?
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Loodverwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">NSF-certificering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten/jaar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95–98%</td>
                <td className="border border-gray-300 px-3 py-2">NSF/ANSI 58</td>
                <td className="border border-gray-300 px-3 py-2">€50–120</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Koolstofblokfilter (NSF 53)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">95%+</td>
                <td className="border border-gray-300 px-3 py-2">NSF/ANSI 53 vereist</td>
                <td className="border border-gray-300 px-3 py-2">€30–80</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">GAC-granulaat koolfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Wisselend</td>
                <td className="border border-gray-300 px-3 py-2">Geen standaard</td>
                <td className="border border-gray-300 px-3 py-2">€20–50</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Filterkraan (Brita-type)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Onvoldoende</td>
                <td className="border border-gray-300 px-3 py-2">Niet voor lood</td>
                <td className="border border-gray-300 px-3 py-2">€50–100</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">UV-lamp</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Niet van toepassing</td>
                <td className="border border-gray-300 px-3 py-2">€30–60</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-amber-900 text-sm">
            <strong>Let op NSF-certificering:</strong> Controleer altijd of een koolstofblokfilter specifiek gecertificeerd is voor loodreductie onder NSF/ANSI 53. Een filter zonder dit keurmerk biedt geen betrouwbare loodverwijdering, ook al staat &ldquo;koolfilter&rdquo; op de verpakking.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap: veilig drinkwater bij loodrisico
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li><strong>Laten lopen:</strong> Laat de koude kraan minimaal 2 minuten doorstromen na stilstand van meer dan 1 uur. Direct drinkbaar na gebruik of na lange afwezigheid. Dit is een tijdelijke maatregel, geen definitieve oplossing.</li>
          <li><strong>Watertest:</strong> Laat het water testen op lood door een gecertificeerd laboratorium (€30–80). Dit geeft zekerheid over de daadwerkelijke loodconcentratie in jouw situatie.</li>
          <li><strong>Filterkeuze:</strong> Bij loodwaarden boven 5 µg/L of bij aanwezigheid van kinderen: installeer een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerd osmosefilter</Link> (meest betrouwbaar) of een NSF/ANSI 53-gecertificeerd koolstofblokfilter op de keukenkraan.</li>
          <li><strong>Leidinginspectie:</strong> Laat een loodvrije leidinginspectie uitvoeren door een erkend installateur. Bij bevestigde loden leidingen: vervanging aanvragen.</li>
          <li><strong>Leidingvervanging:</strong> De structurele oplossing is vervanging van loden binnenhuisleidingen. Vraag subsidie aan bij de gemeente of Nationaal Warmtefonds (in sommige gemeenten beschikbaar als onderdeel van renovatieprogramma&apos;s).</li>
        </ol>

        <p className="text-gray-700 mb-6">
          Naast lood zijn er meer verontreinigingen die een risico kunnen vormen in kraanwater. Lees onze pagina&apos;s over <Link href="/pfas-water" className="text-[#005F8A] underline">PFAS in drinkwater</Link> en <Link href="/waterfilter/soorten" className="text-[#005F8A] underline">alle soorten waterfilters</Link> voor een compleet overzicht. Gebruik je putwater? Zie dan ook <Link href="/putwater" className="text-[#005F8A] underline">putwater filteren</Link>.
        </p>

        <div className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-6">
          Meer lezen: <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitgelegd</Link>, <Link href="/pfas-water" className="text-[#005F8A] underline">PFAS in drinkwater</Link> en <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid in jouw gemeente</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Zware metalen in drinkwater</p>
              <p className="text-sm text-gray-500">Overzicht van zware metalen in leidingwater</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Omgekeerde osmose filtertechniek</p>
              <p className="text-sm text-gray-500">Hoe werkt omgekeerde osmose filtratie?</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Drinkwaternormen</p>
              <p className="text-sm text-gray-500">Wettelijke normen voor drinkwater in Nederland</p>
            </Link>
            <Link href="/keuzehulp/pfas-lood" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Keuzehulp PFAS en lood</p>
              <p className="text-sm text-gray-500">Welk filter past bij jouw situatie?</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
