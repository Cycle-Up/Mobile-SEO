import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Silica in leidingwater: glasaanslag, normen en waterfilter',
  description:
    'Silica (opgelost kiezelzuur) in leidingwater veroorzaakt witte glasaanslag die moeilijk te verwijderen is. Concentraties in NL: 5-30 mg/L. Omgekeerde osmose verwijdert 85-95% silica.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/silica' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is silica in leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Silica in leidingwater is opgelost kiezelzuur (SiO2), afkomstig van de uitloging van kwarts en silicaathoudende gesteenten in de bodem. In Nederlands leidingwater zit typisch 5 tot 30 mg/L silica. Er is geen EU-norm voor silica in drinkwater omdat het geen gezondheidsrisico vormt bij normale concentraties. Het veroorzaakt wel hardnekkige glasaanslag die niet met zuur te verwijderen is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen silicaaanslag en kalkaanslag op glas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kalkaanslag (calciumcarbonaat) is wit, poederig en lost gemakkelijk op in azijn of citroenzuur. Silicaaanslag is transparant tot wit, glasachtig en hard, en lost NIET op in gewone zuren. Silicaaanslag vereist mechanische verwijdering (schuursponsje, steenwol) of speciale chemicalien zoals fluorwaterstofzuur, wat gevaarlijk is voor particulier gebruik. Als azijn niet helpt, is de aanslag waarschijnlijk silica.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verwijder ik silicaaanslag van glas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Silicaaanslag is moeilijk te verwijderen. Effectieve methoden zijn: (1) speciaal silicaverwijderaar op basis van ammoniumfluoride (verkrijgbaar in doe-het-zelfwinkels, met handschoenen gebruiken); (2) voorzichtig schuren met steenwol of een zachte schuurspons; (3) commerciele producten zoals Bar Keepers Friend of Cerama Bryte. Voorkomen is beter: direct afdrogen na watercontact en hydrofobe nanocoating op glas aanbrengen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter silica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, omgekeerde osmose verwijdert 85 tot 95% van het silica in leidingwater. De exacte verwijdering hangt af van het silicatype (monomeer versus colloidal), de pH en de membraankwaliteit. Bij hogere pH (boven 8) is silica deels geioniseerd en wordt het beter verwijderd door het RO-membraan. Bij lage pH is silica grotendeels elektrisch neutraal en iets moeilijker te verwijderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een waterontharder silica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, een waterontharder op basis van kationenwisseling verwijdert geen silica. De waterontharder wisselt positieve ionen (calcium, magnesium) uit, maar silica is in leidingwater aanwezig als negatief geladen of neutraal siliciumzuur. Alleen een anionenwisselaar (sterk basisch) verwijdert silica effectief, maar dit type is zeldzaam in huishoudelijke toepassingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is silica in leidingwater gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, opgelost silica in drinkwater is bij normale concentraties biologisch inert en niet gevaarlijk voor de gezondheid. Er is geen EU-norm of WHO-richtlijn voor silica in drinkwater. Kristallijn silica (kwartsstof) is via inademing wel gevaarlijk en kan silicose veroorzaken, maar dit heeft niets te maken met opgelost silica in drinkwater. Silica-rijke mineraalwaters worden zelfs commercieel verkocht als positief voor huid en haar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel silica zit er in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederlands leidingwater zit typisch 5 tot 30 mg/L silica. Grondwater bevat doorgaans meer silica (10 tot 30 mg/L) dan oppervlaktewater van de Rijn of Maas (5 tot 15 mg/L). De concentratie varieert per regio en seizoen. Drinkwaterbedrijven meten silica maar hoeven geen norm te respecteren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk filter verwijdert silica het meest effectief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest effectieve filters voor silicaverwijdering zijn: omgekeerde osmose (85 tot 95%), sterk basisch anionenwisseling (90 tot 99%) en electrodeionisatie (EDI, voor industrieel gebruik, 99%+). Nanofiltatie is minder effectief voor monomeer silica omdat de silicaatmoleculen vrij klein zijn. Actief koolfilters en waterontharders verwijderen geen silica.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Silica in leidingwater: glasaanslag, normen en waterfilter',
  description:
    'Silica (opgelost kiezelzuur) in leidingwater veroorzaakt hardnekkige glasaanslag die niet met zuur te verwijderen is. Osmosefilter verwijdert 85-95% silica.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/silica',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LeidingwaterSilicaPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Silica in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/silica' },
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
          <span>Silica in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Silica in leidingwater: glasaanslag, normen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Silica (opgelost kiezelzuur) is een onzichtbare stof in leidingwater die bij
            verdamping achterblijft als hardnekkige glasaanslag. Anders dan kalk lost silicaaanslag
            niet op in azijn. Omgekeerde osmose verwijdert 85 tot 95% en is de meest
            praktische thuisoplossing.
          </p>
        </section>

        <QuickAnswer answer="Silica (SiO2) in leidingwater is opgelost kiezelzuur dat bij verdamping uitdroogt tot harde glasaanslag die niet met azijn te verwijderen is. In Nederland zit 5-30 mg/L silica in leidingwater. Geen gezondheidsrisico. Omgekeerde osmose verwijdert 85-95%. Waterontharder helpt niet tegen silica." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is silica?
        </h2>
        <p className="text-gray-700 mb-4">
          Silica is de populaire naam voor siliciumdioxide (SiO&sub2;), ook bekend als
          kiezelzuur of in opgeloste vorm als silicaat. Het is een van de meest voorkomende
          verbindingen in de aardkorst: kwarts, zand, glas en veel gesteenten bestaan
          grotendeels uit SiO&sub2;. Door uitloging van deze mineralen via regenwater en
          grondwater komt silica in het drinkwatersysteem terecht.
        </p>
        <p className="text-gray-700 mb-4">
          In drinkwater komt silica voor in twee hoofdvormen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Reactief (monomeer) silica:</strong> opgelost als siliciumzuur
            (H&sub4;SiO&sub4;), de dominante vorm in drinkwater. Moleculair klein, relatief
            moeilijk te verwijderen door membraanfilters bij lage pH
          </li>
          <li>
            <strong>Colloidal silica:</strong> kleine gesuspendeerde silicaatdeeltjes, groter
            dan monomeer silica. Beter te verwijderen door ultra- en nanofiltatie
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Regulier drinkwater bevat vrijwel uitsluitend reactief monomeer silica. Colloidal
          silica is meer een probleem in industriele waterzuivering en specifieke
          grondwaterbronnen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Silicaconcentraties in Nederlands leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederlands leidingwater worden silicaconcentraties gemeten van
          <strong> 5 tot 30 mg/L</strong>. De concentratie varieert sterk per regio en
          waterbron:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Grondwater</strong> (de meeste huishoudens in Nederland): 10 tot 30 mg/L.
            Grondwater heeft langer contact met silicaathoudende gesteenten en lost meer
            silica op
          </li>
          <li>
            <strong>Oppervlaktewater Rijn:</strong> 5 tot 15 mg/L, afhankelijk van seizoen
            (in de winter hogere silicaconcentraties door minder algengroei)
          </li>
          <li>
            <strong>Oppervlaktewater Maas:</strong> vergelijkbaar met de Rijn, 5 tot 12 mg/L
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Er bestaat <strong>geen EU-norm</strong> en geen WHO-richtlijn voor silica in
          drinkwater, omdat bij normale concentraties geen gezondheidsrisico bestaat.
          Drinkwaterbedrijven meten silica als onderdeel van routinematige kwaliteitsmonitoring,
          maar zijn niet verplicht een grenswaarde te respecteren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Glasaanslag: silica versus kalk
        </h2>
        <p className="text-gray-700 mb-4">
          Het meest zichtbare probleem van silica in leidingwater is de <strong>glasaanslag</strong>
          op douches, kranen en sanitair. Wanneer water verdampt, blijft het opgeloste silica
          achter. Bij herhaaldelijk opdrogen vormt zich een harde, doorzichtige tot witte aanslag
          die steeds dikker en moeilijker te verwijderen wordt.
        </p>
        <p className="text-gray-700 mb-4">
          Het cruciale verschil met kalkaanslag:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kalkaanslag (CaCO&sub3;)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Silicaaanslag (SiO&sub2;)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Uiterlijk</td>
                <td className="border border-gray-300 px-3 py-2">Wit, poederig</td>
                <td className="border border-gray-300 px-3 py-2">Glasachtig, hard</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Oplost in azijn</td>
                <td className="border border-gray-300 px-3 py-2">Ja, snel</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Oplost in citroenzuur</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Verwijdering</td>
                <td className="border border-gray-300 px-3 py-2">Zuur reiniger</td>
                <td className="border border-gray-300 px-3 py-2">Mechanisch of HF</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterontharder helpt</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Als azijn of citroenzuur niet helpt bij hardnekkige aanslag op uw douche of kranen,
          is de kans groot dat u te maken heeft met silicaaanslag in plaats van (of naast)
          kalkaanslag. Voorkomen is in dit geval veel eenvoudiger dan verwijderen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is silicaaanslag een probleem?
        </h2>
        <p className="text-gray-700 mb-4">
          Silicaaanslag is een probleem in situaties waar water regelmatig verdampt of indroogt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Douche met glazen wand:</strong> het klassieke silicaprobleem. Waterdruppels
            drogen in op glas en laten na verloop van tijd een permanente nevel achter
          </li>
          <li>
            <strong>Keukenkranen en wastafels:</strong> rondspatten water dat indroogt op
            roestvrijstaal en chroom
          </li>
          <li>
            <strong>Zwembaden en spa&apos;s:</strong> bij hogere watertemperaturen versnelt
            silicaafzetting op de wanden en filters
          </li>
          <li>
            <strong>Stoomreinigers en strijkijzers:</strong> stoom laat silica achter bij
            condensatie op het verwarmingselement
          </li>
          <li>
            <strong>Industriele processen:</strong> halfgeleiderfabricage, fotovoltaische
            cellen en medische toepassingen vereisen water met extreen lage silicaconcentraties
            (ultrapuur water, onder 0,02 mg/L)
          </li>
          <li>
            <strong>Koffiezetapparaten en waterkokers:</strong> naast kalk draagt ook silica bij
            aan aanslag op verwarmingselementen
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheid: geen risico bij drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Opgelost silica in drinkwater vormt <strong>geen gezondheidsrisico</strong>. Het is
          biologisch inert bij de concentraties die in regulier drinkwater voorkomen. Silica
          wordt ook niet opgeslagen in het lichaam maar uitgescheiden via de nieren.
        </p>
        <p className="text-gray-700 mb-4">
          Sommige silica-rijke mineraalwaters worden commercieel verkocht met claims over
          voordelen voor huid, haar en nagels. Wetenschappelijk bewijs hiervoor is beperkt,
          maar schadelijkheid is evenmin aangetoond.
        </p>
        <p className="text-gray-700 mb-6">
          Belangrijk onderscheid: <strong>kristallijn silica (kwartsstof)</strong> is via
          inademing wel degelijk gevaarlijk en kan silicose (stoflongenziekte) veroorzaken bij
          beroepsmatige blootstelling (steenhouwers, zandstralers). Dit heeft echter niets te
          maken met opgelost silica in drinkwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Silica verwijderen: filtermethoden vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          Silicaverwijdering is technisch uitdagender dan de verwijdering van positief geladen
          ionen zoals calcium of magnesium. De meest effectieve methoden zijn:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2">85&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">Beste thuisoptie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sterk basisch anion</td>
                <td className="border border-gray-300 px-3 py-2">90&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">Industrieel/professioneel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltatie</td>
                <td className="border border-gray-300 px-3 py-2">40&ndash;70%</td>
                <td className="border border-gray-300 px-3 py-2">Minder effectief voor monomeer</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterontharder</td>
                <td className="border border-gray-300 px-3 py-2">~0%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor silica</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">~0%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor silica</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> is
          voor huishoudelijk gebruik de meest praktische keuze voor silicaverwijdering.
          Het RO-membraan kan monomeer silica verwijderen omdat bij hogere pH (boven 8) silica
          deels ioniseert (H&sub3;SiO&sub4;&sup1;&supmin;) en dan beter door het membraan wordt
          tegengehouden. Bij Nederlandse leidingwater-pH van 7,5 tot 8,5 is de verwijdering
          gemiddeld 85 tot 92%.
        </p>
        <p className="text-gray-700 mb-6">
          Een <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link> op
          basis van kationenwisseling helpt <strong>niet</strong> tegen silica. De waterontharder
          verwijdert positieve ionen (calcium&sup2;&plus;, magnesium&sup2;&plus;), maar silica
          is in water als neutraal siliciumzuur of als negatief geladen silicaat aanwezig.
          Een waterontharder heeft dan ook geen enkel effect op glasaanslag door silica.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Glasaanslag voorkomen en verwijderen
        </h2>
        <p className="text-gray-700 mb-4">
          Preventie is bij silicaaanslag veruit de beste strategie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Direct afdrogen:</strong> droog douche en glazen wanden direct na gebruik
            met een ruitenwisser of microvezeldoek. Dit is de goedkoopste en meest effectieve
            preventie
          </li>
          <li>
            <strong>Hydrofobe nanocoating:</strong> coating op basis van SiO&sub2; of
            fluoropolymeer behandelt het glasoppervlak zodat water parelt en minder aanslag
            achterlaat. Behandeling is circa een half jaar tot een jaar effectief
          </li>
          <li>
            <strong>Osmosewater gebruiken:</strong> installeer een osmosefilter voor de
            douchekop of het hele huis. Water met &lt;5 mg/L silica laat vrijwel geen aanslag
            achter
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Als silicaaanslag al aanwezig is, zijn de opties: (1) speciaal silicaverwijderaar
          met ammoniumfluoride (met handschoenen gebruiken, goed ventileren); (2) voorzichtig
          schuren met steenwolpad; (3) professionele glazenwasser voor ernstige gevallen.
          Zie ook onze pagina over{' '}
          <Link href="/leidingwater/hard-water" className="text-[#005F8A] underline">
            hard water en kalkproblemen
          </Link>{' '}
          voor een breder overzicht van wateraanslagproblemen.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over silica in leidingwater
          </h2>
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
          <Link href="/leidingwater/hard-water" className="text-[#005F8A] underline">hard water en kalk</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder kopen</Link> en{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>
      </main>
    </>
  );
}
