import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter of waterverzachter: wat is het verschil?',
  description:
    'Een waterfilter zuivert water van schadelijke stoffen. Een waterverzachter verwijdert alleen kalk. Vergelijking van waterfilter vs waterverzachter: wanneer hebt u welk systeem nodig?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/waterverzachter' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een waterfilter en een waterverzachter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterfilter is een breed begrip voor elk systeem dat water zuivert: koolstoffilters, osmosefilters, UV-filters en keramische filters vallen er allemaal onder. Een waterverzachter (ook waterontharder genoemd) is een specifiek type ionenwisselaar dat uitsluitend calcium- en magnesiumionen verwijdert om waterhardheid te verlagen. Een waterverzachter filtert dus geen PFAS, nitraten, medicijnresten of zware metalen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een waterontharder ook als waterfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Een waterontharder (ionenwisselaar) verwijdert alleen calcium- en magnesiumionen en vervangt deze door natriumionen. Het verwijdert geen PFAS, pesticiden, nitraten, medicijnresten, lood, chloor of bacterien. Voor zuiver drinkwater is een aanvullend waterfilter, bij voorkeur een omgekeerde osmosefilter, noodzakelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan een osmosefilter het hele huis van zacht water voorzien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard onder-aanrecht osmosefilter produceert 150-300 liter per dag en is bedoeld voor drinkwater en koken. Voor het ontharden van al het huishoudwater (douche, wasmachine, vaatwasser, cv-ketel) is een waterontharder voor het hele huis noodzakelijk. Er bestaan grote osmose-installaties voor huishoudelijk gebruik, maar die zijn duurder in aanschaf en onderhoud.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de beste combinatie: waterfilter of waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De professionele aanpak is: een waterontharder voor het hele huis (beschermt leidingen, cv-ketel, wasmachine en vaatwasser tegen kalkafzetting) plus een omgekeerde osmosefilter voor drinkwater (verwijdert PFAS, nitraten, medicijnresten en resterende mineralen voor maximale drinkwaterkwaliteit). Dit is duurder maar biedt de beste bescherming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een waterfilter vergeleken met een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een onder-aanrecht osmosefilter kost 300-800 euro aanschaf plus 50-120 euro per jaar aan filtervervanging. Een waterontharder kost 500-2.000 euro aanschaf plus 150-300 euro per jaar aan zout en onderhoud. De combinatie van beide systemen vraagt een initiele investering van 800-2.500 euro plus jaarlijkse kosten van 200-400 euro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een magnetische waterverzachter echt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wetenschappelijk onderzoek geeft geen overtuigend bewijs dat magnetische waterverzachters de waterhardheid structureel verlagen of kalkafzetting voorkomen. Onafhankelijke studies tonen wisselende en niet-reproduceerbare resultaten. Een magnetische waterverzachter is geen gelijkwaardig alternatief voor een ionenwisselaar. Wij raden deze systemen niet aan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke opties zijn er voor huurders voor waterverzachting of waterfiltratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huurders kunnen kiezen voor: een tafelmodel osmosefilter (geen installatie nodig, 150-300 euro), een waterfilterkan (Brita, 30-60 euro, verwijdert chloor en deels hardheid), of een huurcontract voor een waterontharder (15-35 euro per maand, inclusief installatie en onderhoud). Overleg altijd met de verhuurder voor permanente installaties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe meet ik de waterhardheid in mijn regio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U kunt de waterhardheid opzoeken op de website van uw drinkwaterbedrijf of via de website van waterfilterplatform.nl. Zelf meten kan met goedkope teststrips (2-5 euro) of een TDS-meter. Water boven 15 dH (Duitse hardheidsgraden) geldt als hard en rechtvaardigt een waterontharder. Veel Nederlandse regio\'s, met name in Limburg en Noord-Brabant, hebben hard tot zeer hard water.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter of waterverzachter: wat is het verschil?',
  description:
    'Een waterfilter zuivert water van schadelijke stoffen. Een waterverzachter verwijdert alleen kalk. Vergelijking en advies over wanneer u welk systeem nodig hebt.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/waterverzachter',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterVsWaterverzachterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter vs waterverzachter', item: 'https://waterfilterplatform.nl/waterfilter/waterverzachter' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Waterfilter vs waterverzachter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter of waterverzachter: wat is het verschil?
          </h1>
          <p className="text-[#005F8A] text-lg">
            De termen waterfilter en waterverzachter worden vaak door elkaar gebruikt, maar ze lossen
            verschillende problemen op. Een waterfilter verwijdert schadelijke stoffen uit drinkwater.
            Een waterverzachter verwijdert uitsluitend kalk. Begrijp het verschil voordat u investeert.
          </p>
        </section>

        <QuickAnswer answer="Een waterfilter (osmose, koolstof, UV) zuivert water van PFAS, nitraten, medicijnresten en zware metalen. Een waterverzachter (ionenwisselaar) verwijdert alleen kalk. Voor optimale bescherming combineert u beide systemen: waterontharder voor het hele huis en osmosefilter voor drinkwater." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is een waterfilter?
        </h2>
        <p className="text-gray-700 mb-4">
          De term <strong>waterfilter</strong> is een verzamelnaam voor elk systeem dat ongewenste
          stoffen uit water verwijdert. Er bestaan veel verschillende typen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Omgekeerde osmosefilter (RO):</strong> verwijdert 95-99% van alle opgeloste stoffen,
            inclusief PFAS, nitraten, medicijnresten, zware metalen, bacterien en kalk
          </li>
          <li>
            <strong>Koolstofblokfilter (actief kool):</strong> verwijdert chloor, chloorkoolwaterstoffen
            en verbetert smaak en geur; beperkte werking op zware metalen
          </li>
          <li>
            <strong>UV-filter:</strong> inactiveert bacterien, virussen en parasieten; verwijdert geen
            opgeloste chemische stoffen
          </li>
          <li>
            <strong>Keramisch filter:</strong> verwijdert deeltjes, bacterien en parasieten; geschikt voor
            bronwater en reizen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een waterfilter pakt een breed spectrum van verontreinigingen aan en is primair gericht op
          <strong> drinkwaterkwaliteit</strong>. Een osmosefilter is de meest volledige oplossing voor
          thuis. Lees meer op onze pagina over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is een waterverzachter of waterontharder?
        </h2>
        <p className="text-gray-700 mb-4">
          Een <strong>waterverzachter</strong> &mdash; ook wel <strong>waterontharder</strong> of
          <strong> waterontkalker</strong> genoemd &mdash; is een specifiek apparaat dat de hardheid
          van water verlaagt. Het werkt via <strong>ionenwisseling</strong>: calcium- (Ca&sup2;&plus;)
          en magnesiumionen (Mg&sup2;&plus;) worden uitgewisseld tegen natriumionen (Na&plus;) die vastzaten
          aan een harskraal. Het resultaat is zacht water zonder kalk.
        </p>
        <p className="text-gray-700 mb-4">
          De begrippen waterverzachter en waterontharder zijn synoniem en beide correct. De term
          waterontkalker wordt soms gebruikt maar is minder nauwkeurig, omdat het systeem de volledige
          hardheid verwijdert, niet alleen kalk (calciumcarbonaat).
        </p>
        <p className="text-gray-700 mb-6">
          Belangrijk: een waterontharder verwijdert <strong>geen</strong> PFAS, pesticiden, nitraten,
          medicijnresten, lood, bacterien of andere verontreinigingen. Het voegt ook natrium toe aan
          het water, wat voor sommige mensen &mdash; met name mensen op een natriumarm dieet &mdash;
          relevant is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: osmosefilter vs waterontharder
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Osmosefilter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Waterontharder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Wat verwijdert het?</td>
                <td className="border border-gray-300 px-3 py-2">PFAS, nitraten, medicijnresten, zware metalen, kalk, chloor, bacterien</td>
                <td className="border border-gray-300 px-3 py-2">Alleen calcium en magnesium (kalk)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Effect op smaak</td>
                <td className="border border-gray-300 px-3 py-2">Neutraal/plat (remineralisatie aanbevolen)</td>
                <td className="border border-gray-300 px-3 py-2">Licht zoutiger, zacht gevoel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Effect op hardheid</td>
                <td className="border border-gray-300 px-3 py-2">Verwijdert vrijwel alle hardheid</td>
                <td className="border border-gray-300 px-3 py-2">Verwijdert volledige hardheid</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Natriumtoevoeging</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
                <td className="border border-gray-300 px-3 py-2">Ja (ca. 46 mg/L per 10 dH verwijderd)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Aanschafkosten</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;2.000 + installatie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Jaarlijkse kosten</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50&ndash;120 (filters)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;150&ndash;300 (zout + onderhoud)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Bereik</td>
                <td className="border border-gray-300 px-3 py-2">Alleen drinkwater (1 kraan)</td>
                <td className="border border-gray-300 px-3 py-2">Hele huisinstallatie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Installatie</td>
                <td className="border border-gray-300 px-3 py-2">Zelf te plaatsen (onder aanrecht)</td>
                <td className="border border-gray-300 px-3 py-2">Loodgieter vereist</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kiest u voor een waterfilter?
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterfilter &mdash; bij voorkeur een osmosefilter &mdash; is de juiste keuze als u
          zich zorgen maakt over de <strong>chemische kwaliteit</strong> van uw drinkwater:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            U woont nabij landbouwgebieden en wilt nitraten en pesticiden verwijderen
          </li>
          <li>
            U maakt zich zorgen over PFAS (poly- en perfluoralkylstoffen) in drinkwater
          </li>
          <li>
            U wilt medicijnresten, hormonen en microplastics verwijderen
          </li>
          <li>
            U heeft een oudere woning met loden of koperen leidingen (lood- of koperoplossing)
          </li>
          <li>
            U gebruikt een eigen waterput of bron (eigen bronwater is niet gegarandeerd schoon)
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een waterontharder lost deze problemen <strong>niet</strong> op. Zie ook onze uitleg over
          de{' '}
          <Link href="/waterfilter/hardheid" className="text-[#005F8A] underline">relatie tussen waterhardheid en waterfilters</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer kiest u voor een waterontharder?
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder is zinvol als u last heeft van de gevolgen van <strong>hard water</strong>
          (meer dan 15 dH):
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            Kalkafzetting in de cv-ketel (verhoogt energieverbruik met 7-15% per millimeter kalk)
          </li>
          <li>
            Witte aanslag op kranen, douches en sanitair die moeilijk te verwijderen is
          </li>
          <li>
            Versnelde slijtage van wasmachine, vaatwasser en waterkoker
          </li>
          <li>
            Verstopte douchekoppen en leidingen door kalkopbouw
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een osmosefilter helpt ook bij hardheid, maar <strong>alleen voor drinkwater</strong> aan
          een kraan, niet voor de rest van de huisinstallatie. Lees meer op de pagina over de{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De beste combinatie: waterontharder + osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          De professionele aanpak bij hard en chemisch belast water is de combinatie van beide systemen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Waterontharder voor het hele huis:</strong> zacht water door alle kranen, beschermt
            leidingen, cv-ketel, wasmachine en vaatwasser. Minder zeepverbruik (30-50% minder).
          </li>
          <li>
            <strong>Osmosefilter voor drinkwater:</strong> een onder-aanrecht RO-systeem op de
            keukenkraan verwijdert alle resterende verontreinigingen inclusief het natrium dat de
            waterontharder toevoegt. U krijgt chemisch zuiver drinkwater van de beste kwaliteit.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Dit is duurder in aanschaf (&euro;800&ndash;2.500 samen) maar biedt maximale bescherming van zowel
          apparaten als gezondheid. Voor gezinnen in harde waterregio&apos;s &mdash; Limburg, Noord-Brabant,
          Zeeland &mdash; verdient deze investering zich terug via lagere energierekeningen, minder
          onderhoud en langere apparaatlevensduur.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Magnetische waterverzachter: een waarschuwing
        </h2>
        <p className="text-gray-700 mb-6">
          Magnetische waterverzachters worden op de markt gebracht als installatievrij alternatief voor
          ionenwisselaars. Wetenschappelijk onafhankelijk onderzoek toont echter geen consistente of
          reproduceerbare verlaging van waterhardheid aan. De Consumentenbond en onafhankelijke
          waterspecialisten raden deze producten niet aan als vervanging voor een echte waterontharder.
          Koop geen magnetische waterverzachter op basis van marketingclaims zonder wetenschappelijke
          onderbouwing.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen: waterfilter vs waterverzachter
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link> en{' '}
          <Link href="/waterfilter/hardheid" className="text-[#005F8A] underline">waterfilter voor hard water</Link>.
        </p>
      </main>
    </>
  );
}
