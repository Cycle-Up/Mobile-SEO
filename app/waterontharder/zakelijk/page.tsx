import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Zakelijke waterontharder: voor bedrijven, kantoren en industrie',
  description: 'Een zakelijke waterontharder beschermt industriele apparatuur, verwarmingssystemen en leidingwerk tegen kalkaanslag. Vergelijking van zakelijke ontharders.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/zakelijk' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een zakelijke en huishoudelijke waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zakelijke waterontharders zijn ontworpen voor significant hogere watervolumes (100-10.000 m3 per dag versus 0,5-2 m3 voor huishoudelijk gebruik), grotere leidingdiameters (1"-4" versus 3/4"), hogere werkdrukken en continue bedrijfstijden van 16-24 uur per dag. Ze hebben grotere harsbedden, meer regeneratiezout-capaciteit en zijn uitgevoerd met duplex- of multi-tank-configuraties voor ononderbroken zachte waterlevering. Monitoring, SLA-service en certificeringen (NSF, KIWA) zijn standaard bij zakelijke systemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereken ik de benodigde capaciteit van een zakelijke waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De capaciteitsberekening gaat als volgt: (dagelijks waterverbruik in m3) x (waterhardheid in graden dH) = benodigde zachtingscapaciteit in m3.dH per dag. Voorbeeld: 100 m3/dag x 20 dH = 2.000 m3.dH/dag. De ontharder moet ruim boven deze waarde liggen (factor 1,5-2 aan te houden voor piekverbruik en efficienter zoutgebruik). Laat ook de lokale waterhardheid meten; in Nederland varieert die van 6 dH (Groningen) tot 28 dH (Zeeland). Een te kleine ontharder raakt overbelast en levert hard water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een duplex waterontharder nodig voor mijn bedrijf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een duplex (twin-tank) waterontharder heeft twee harsbedden die afwisselend regenereren. Terwijl tank A regenereert, levert tank B zacht water. Zo is er altijd zacht water beschikbaar, ook tijdens de regeneratiecyclus. Dit is essentieel voor: doorlopende productieprocessen (voedingsmiddelen, farmaceutisch), stoomketels en HVAC-systemen die niet mogen stoppen, horeca met continue waterafname. Een simplex ontharder (een tank) is voldoende als uw bedrijf een rustpauze heeft (nacht, weekend) waarin de regeneratie kan plaatsvinden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke zakelijke waterontharder is het meest energiezuinig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moderne zakelijke waterontharders met volumetrische regeneratie (regenereren op basis van verbruikt volume in plaats van vaste tijdsintervallen) zijn het meest energiezuinig. Ze regenereren alleen wanneer nodig, wat zout en water bespaart. Merken zoals BWT AQA therm (commercieel), Kinetico (zelfs stroomloos via waterdruk) en Culligan Gold Series scoren goed op efficiëntie. Stroomloze ontharders (Kinetico-type) zijn bijzonder interessant voor bedrijven met hoge energie-eisen of duurzaamheidsdoelstellingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe voorkom ik kalkschade aan mijn industriele apparatuur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest effectieve maatregelen: (1) Installeer een gedimensioneerde waterontharder op de hoofdinlaat of voor kritische apparatuur; (2) voer een jaarlijkse wateraudit uit om hardheid te monitoren; (3) documenteer kalkinspecties in uw onderhoudsprogramma; (4) bij stoomketels en HVAC: voer regelmatig een blowdown-procedure uit om opgeconcentreerde zouten te verwijderen; (5) gebruik antikalkinhibitoren als aanvulling bij lagere kalkaanslag-risicos. Begin altijd met een wateranalyse voor de juiste interventie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is huren van een zakelijke waterontharder beter dan kopen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huren heeft voordelen: lagere instapdrempel (EUR 100-500/maand inclusief service versus EUR 2.000-20.000 aanschaf), geen kapitaalbinding, all-inclusive onderhoud en filterwissel, flexibiliteit bij groei of verhuizing, en geen balansactivering. Partijen als Veolia, Evoqua en BWT Aqua bieden huurcontracten aan met SLA. Kopen is goedkoper na 3-5 jaar bij stabiele situaties. Voor startende bedrijven of bij onzekerheid over locatie of schaal is huren aantrekkelijker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke bedrijven hebben een zakelijke waterontharder nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bedrijven die het meest profiteren van een zakelijke waterontharder: horeca (espressomachines, stoomketels, vaatwassers), hotels (leidingwerk, verwarmingssystemen, linnenkamer), productiebedrijven in de voedings- en drankenindustrie, farmaceutische bedrijven (processwater), drukkerijen en textielverwerking (waar hard water vlekken veroorzaakt), zorginstellingen (sterilisatoren, wasserij) en kantoorgebouwen met grote verwarmingsinstallaties. Bij een waterhardheid boven 15 dH en significant waterverbruik is een ontharder financieel aantrekkelijk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt de installatie van een zakelijke waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De installatieduur hangt af van de grootte van het systeem en de complexiteit van de leidingaansluiting. Een kleinere zakelijke ontharder (tot 1" aansluiting) is in 4-8 uur te installeren. Grotere industriele systemen (2"-4" aansluiting, duplex-configuratie) vereisen 1-3 dagen, inclusief leidingaanpassingen door een erkend installateur. Plan de installatie bij voorkeur tijdens een gepland onderhoudsstop of in het weekend om productieonderbreking te minimaliseren. Inbedrijfstelling inclusief parameterinstelling en testrun duurt 1-2 uur extra.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Zakelijke waterontharder: voor bedrijven, kantoren en industrie',
  description: 'Een zakelijke waterontharder beschermt industriele apparatuur, verwarmingssystemen en leidingwerk tegen kalkaanslag.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/zakelijk',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderZakelijkPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Zakelijke waterontharder', item: 'https://waterfilterplatform.nl/waterontharder/zakelijk' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Zakelijke waterontharder</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Zakelijke waterontharder: voor bedrijven, kantoren en industrie
          </h1>
          <p className="text-gray-700 text-lg">
            Kalkschade kost Nederlandse bedrijven jaarlijks honderden miljoenen euro aan
            vroegtijdige apparaatvervangingen, verhoogd energieverbruik en productieverliezen.
            Een juist gedimensioneerde zakelijke waterontharder beschermt uw investering.
          </p>
        </div>

        <QuickAnswer answer="Een zakelijke waterontharder is ontworpen voor hoge volumes (100-10.000 m3 per dag), grotere leidingdiameters en continue bedrijfstijden. Kalkschade aan stoomketels kost EUR 5.000-50.000 per vervanging; een ontharder verlengt de levensduur meer dan 10 jaar. Duplex-systemen leveren altijd zacht water, ook tijdens regeneratie. Huurcontracten zijn beschikbaar bij Veolia, Culligan en BWT Aqua." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zakelijk versus huishoudelijk: de verschillen
        </h2>
        <p className="text-gray-700 mb-4">
          Een huishoudelijke waterontharder verwerkt 0,5-2 m3 water per dag op een leidingdiameter
          van 3/4" en staat stil wanneer er niemand thuis is. Zakelijke systemen verwerken
          100-10.000 m3 per dag op leidingdiameters van 1" tot 4", draaien 16-24 uur per dag
          en moeten bij apparaatstoring of ondermaatse kwaliteit direct alarm slaan.
        </p>
        <p className="text-gray-700 mb-6">
          De kostprijs van kalkschade is op zakelijk niveau ook exponentieel hoger. Een
          verwarmingselement in een huishoudelijke boiler kost EUR 50 om te vervangen. Een
          industriele stoomketel kost EUR 5.000-50.000 bij vervanging. De ROI van een
          zakelijke waterontharder is dan ook doorgaans bijzonder gunstig.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kalkschade zakelijk: wat staat er op het spel?
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Systeem</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kostprijs schade</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Preventie waterontharder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Stoomketel (bedrijf)</td>
                <td className="border border-gray-300 px-3 py-2">EUR 5.000-50.000 vervanging</td>
                <td className="border border-gray-300 px-3 py-2">10+ jaar levensduurverlenging</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Industriele vaatwasser</td>
                <td className="border border-gray-300 px-3 py-2">EUR 3.000-15.000</td>
                <td className="border border-gray-300 px-3 py-2">Levensduur 2x langer</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">HVAC-koelwatercircuit</td>
                <td className="border border-gray-300 px-3 py-2">Energieverbruik +15-30%</td>
                <td className="border border-gray-300 px-3 py-2">Directe energiebesparing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Productieleidingen (voedingsmiddelen)</td>
                <td className="border border-gray-300 px-3 py-2">Productieverlies + reiniging</td>
                <td className="border border-gray-300 px-3 py-2">Minder stilstand</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Typen zakelijke waterontharders
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Duplex/twin-tank ontharder</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Beste keuze doorlopend</span>
            </div>
            <p className="text-gray-700 text-sm">
              Twee harsbedden wisselen af: terwijl de ene tank regenereert levert de andere
              zacht water. Ideaal voor doorlopende productieprocessen, hotels, horeca en
              zorginstellingen waar de watertoevoer nooit mag stoppen. Hogere investering,
              maar noodzakelijk bij continu gebruik.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Simplex met tijdregeling</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Kantoor en restaurant</span>
            </div>
            <p className="text-gray-700 text-sm">
              Een harsbed, regeneratie geprogrammeerd tijdens rustperiodes (nacht of weekend).
              Geschikt voor kantoren, restaurants met vaste sluitingstijden en andere bedrijven
              met een voorspelbare waterafname. Goedkoper dan duplex, voldoende voor de meeste
              zakelijke toepassingen.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Industriele RO-systemen</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Ultrapuur water</span>
            </div>
            <p className="text-gray-700 text-sm">
              Voor farmaceutische productie, elektronica en labomgevingen waar ultralaag TDS
              vereist is. RO verwijdert 90-98% van alle opgeloste stoffen. Combinatie met EDI
              (electrodeionisatie) levert farmaceutisch water (purified water, PW) conform
              Europese Farmacopee.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Chemische dosering (antikalk-inhibitor)</h3>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-semibold">Goedkope optie</span>
            </div>
            <p className="text-gray-700 text-sm">
              Geen harsbedrijf, maar toevoeging van een kalkinhibitor (fosfaat- of polyfosfonaatverbinding)
              die kalkkristallisatie verhindert. Goedkoper in aanschaf (EUR 200-800) en eenvoudig
              te installeren, maar minder effectief dan echte ionenwisseling. Geschikt als
              aanvulling of voor lage risicoprofielen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Capaciteitsberekening: hoe groot moet de ontharder zijn?
        </h2>
        <p className="text-gray-700 mb-4">
          De juiste dimensionering is cruciaal. Een te kleine ontharder raakt overbelast
          en levert ongezacht water. Een te grote ontharder verspeelt zout en water bij
          onnodige regeneraties. De basisformule:
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">
            Benodigde capaciteit (m3.&deg;dH/dag) = dagverbruik (m3) &times; hardheid (&deg;dH)
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Voorbeeld: 100 m3/dag &times; 20 &deg;dH = 2.000 m3.&deg;dH/dag</li>
            <li>Ontharder selectie: capaciteit &gt;2.000, factor 1,5 veiligheidsmarge = &gt;3.000 m3.&deg;dH</li>
            <li>Lokale hardheid NL: 6 &deg;dH (Groningen) tot 28 &deg;dH (Zeeland, Limburg)</li>
            <li>Meet altijd ter plekke; waterhardheid kan per leiding en seizoen varieren</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wateraudit als eerste stap
        </h2>
        <p className="text-gray-700 mb-4">
          Voor bedrijven met een waterverbruik boven 200 m3 per dag of met complexe
          procesapparatuur is een professionele wateraudit aan te raden voor u investeert.
          Een wateraudit door Kiwa, SGS of een gespecialiseerde installateur brengt in kaart:
          huidig verbruik, hardheid per locatie, kritische verbruikspunten en ROI-berekening
          voor de aanbevolen filteroplossing. Kosten: EUR 500-3.000, afhankelijk van bedrijfsgrootte.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Huurmodellen: Veolia, Evoqua en BWT Aqua
        </h2>
        <p className="text-gray-700 mb-6">
          Grootschalige leveranciers zoals Veolia, Evoqua Water Technologies en BWT Aqua bieden
          huurcontracten aan voor zakelijke waterontharders inclusief monitoring, zoutlevering,
          filterwissel en een SLA met gegarandeerde responstijden. Maandelijkse huurkosten
          starten vanaf EUR 100 voor kleinere zakelijke systemen. Dit is aantrekkelijk voor
          bedrijven met beperkt investeringsbudget of die flexibiliteit willen behouden.
        </p>

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="waterontharder-zakelijk-cta"
          label="Bekijk de waterontharders bij PureAqua"
          title="Een waterontharder uitkiezen?"
          sub="Bekijk het aanbod waterontharders bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over zakelijke waterontharders
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder vergelijken</Link>,{' '}
          <Link href="/waterfilter/bedrijf" className="text-[#005F8A] underline">waterfilter voor bedrijf</Link>,{' '}
          <Link href="/waterfilter/horeca" className="text-[#005F8A] underline">waterfilter voor horeca</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/zakelijk/horeca" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterontharder horeca</h3>
              <p className="text-sm text-gray-600">Hoe horecabedrijven ontharden inzetten voor koffiemachines, vaatwasmachines en stoomovens.</p>
            </Link>
            <Link href="/zakelijk/industrie-proceswater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Industrieel proceswater ontharden</h3>
              <p className="text-sm text-gray-600">Welke industriële onthardercapaciteit nodig is bij continue proceswateraanvraag.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
