import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosewater koken: veilig voor pasta, thee en babyvoeding?',
  description:
    'Osmosewater koken is veilig voor pasta, rijst en thee. Voor babyvoeding adviseert de WHO remineralisatie. Osmosewater heeft een lagere kookpunt-neutraliteit.',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-water/koken' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is osmosewater veilig om mee te koken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, osmosewater is chemisch zuiver en veilig voor alle kookdoeleinden. Het bevat geen schadelijke contaminanten, chloor of zware metalen. Voor dagelijks koken van pasta, rijst, groenten, soepen en sauzen is osmosewater uitstekend geschikt. Het enige aandachtspunt is de lage mineraalinhoud bij specifieke toepassingen zoals babyvoeding of het zetten van thee en koffie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik osmosewater gebruiken voor babyvoeding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zuiver osmosewater heeft een calciumgehalte van minder dan 5 mg/L, terwijl de WHO voor het aanmaken van poedermelk water adviseert met minimaal 30 mg/L calcium. Voor babyvoeding wordt daarom een remineralisatiefilter aanbevolen zodat het water aan de WHO-richtlijn voldoet. De KNOV-richtlijn voor Nederland stelt dat leidingwater dat aan drinkwaternormen voldoet mag worden gebruikt voor babyvoeding. Controleer altijd de actuele richtlijn van uw huisarts of consultatiebureau.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kookt osmosewater sneller of langzamer dan kraanwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het kookpunt van water is 100 graden Celsius bij zeeniveau, ongeacht het TDS-gehalte. Osmosewater kookt niet sneller of langzamer dan hard kraanwater. Het theoretische verschil in kookpunt door het ontbreken van opgeloste stoffen is kleiner dan 0,01 graden Celsius en heeft geen praktisch effect op kooktijden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is osmosewater goed voor thee en koffie zetten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zuiver osmosewater met een TDS van 1-20 mg/L is te zacht voor optimale thee- en koffiezetting. De Specialty Coffee Association (SCA) adviseert een TDS van 75-150 mg/L voor koffie. Te zacht water geeft een vlakke, weinig gelaagde smaak bij koffie en een wrange, samentrekkende smaak bij thee. Een remineralisatiefilter lost dit op door calcium en magnesium terug te voegen aan het osmosewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verliest voedsel mineralen als ik kook in osmosewater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij koken in osmosewater worden iets meer mineralen uit groenten en pasta uitgeloogd dan in hard kraanwater, maar het verschil is verwaarloosbaar voor uw dagelijkse mineraalinname. De mineralen die u nodig hebt komen grotendeels uit de voeding zelf, niet uit het kookwater. Koken in osmosewater heeft geen negatief voedingskundig effect voor gezonde volwassenen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het voordeel van koken met osmosewater voor mijn pannen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater bevat geen kalk (calcium en magnesium), waardoor er geen kalkaanslag ontstaat in pannen, waterkokers en koffiezetapparaten. Dit verlengt de levensduur van uw apparaten, bespaart op onderhoudskosten en elimineert de noodzaak van regelmatig ontkalken. Pannen blijven ook visueel schoner zonder witte kalkranden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wordt osmosewater harder als ik het kook?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Bij koken verdampt water maar blijven opgeloste stoffen achter, waardoor de concentratie stijgt. Kraanwater wordt door koken dus harder. Osmosewater heeft al een TDS van minder dan 20 mg/L en blijft ook na koken nagenoeg mineraalvrij. Er is geen calciumconcentratie die kan oplopen tot kalkaanslag.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosewater koken: veilig voor pasta, thee en babyvoeding?',
  description:
    'Osmosewater koken is veilig voor pasta, rijst en thee. Voor babyvoeding adviseert de WHO remineralisatie. Osmosewater heeft een lagere kookpunt-neutraliteit.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/osmose-water/koken',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function OsmoseWaterKokenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Osmosewater', item: 'https://waterfilterplatform.nl/osmose-water' },
              { '@type': 'ListItem', position: 3, name: 'Osmosewater koken', item: 'https://waterfilterplatform.nl/osmose-water/koken' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/osmose-water" className="hover:underline">Osmosewater</Link> &rsaquo;{' '}
          <span>Osmosewater koken</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosewater koken: veilig voor pasta, thee en babyvoeding?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Osmosewater is chemisch zuiver en veilig voor alle kookdoeleinden. Voor babyvoeding en
            koffiezetten zijn er aandachtspunten rondom de lage mineraalinhoud. Ontdek per toepassing
            wat osmosewater doet &mdash; en wat niet.
          </p>
        </section>

        <QuickAnswer answer="Osmosewater is veilig om mee te koken voor pasta, rijst, groenten en soepen. Voor babyvoeding adviseert de WHO remineralisatie (min. 30 mg/L calcium). Thee en koffie vereisen remineralisatie voor optimale smaak (TDS 75-150 mg/L). Kooktijden verschillen niet. Groot voordeel: geen kalkaanslag in pannen of waterkoker." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Is osmosewater veilig om mee te koken?
        </h2>
        <p className="text-gray-700 mb-4">
          Ja. Osmosewater is chemisch zuiver water met een TDS (Total Dissolved Solids) van doorgaans
          1-20 mg/L. Het bevat geen chloor, geen zware metalen, geen pesticiden en geen PFAS. Voor het
          koken van pasta, rijst, groenten, soepen en sauzen is osmosewater uitstekend geschikt &mdash;
          er zijn geen veiligheidsrisico&apos;s verbonden aan het gebruik ervan als kookvloeistof.
        </p>
        <p className="text-gray-700 mb-6">
          De enige aandachtspunten bij osmosewater als kookwater betreffen specifieke toepassingen
          waarbij de lage mineraalinhoud relevant is: babyvoeding, thee en koffie, en in mindere
          mate brood bakken. Voor al deze situaties bestaan eenvoudige oplossingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater voor babyvoeding: WHO-advies en KNOV-richtlijn
        </h2>
        <p className="text-gray-700 mb-4">
          Dit is het meest besproken aandachtspunt bij osmosewater als kookwater. De{' '}
          <strong>WHO-richtlijn voor babyvoeding</strong> adviseert voor het aanmaken van
          poedermelk (flesvoeding) water met een calciumgehalte van minimaal <strong>30 mg/L</strong>.
          Zuiver osmosewater heeft een calciumgehalte van minder dan 5 mg/L &mdash; ruim onder
          deze drempel.
        </p>
        <p className="text-gray-700 mb-4">
          De achtergrond van dit advies is dat zuigelingen in de eerste levensmaanden sterk afhankelijk
          zijn van calcium en andere mineralen in hun voeding. Flesvoeding die wordt aangemaakt met
          bijna mineraalvrij water levert minder mineralen dan voeding aangemaakt met normaal leidingwater.
          Bij uitsluitend borstvoeding speelt dit geen rol.
        </p>
        <p className="text-gray-700 mb-6">
          De <strong>KNOV-richtlijn (Koninklijke Nederlandse Organisatie van Verloskundigen)</strong>{' '}
          stelt dat leidingwater dat voldoet aan de Nederlandse drinkwaternormen mag worden gebruikt
          voor babyvoeding. Voor ouders die osmosewater willen gebruiken zijn twee opties beschikbaar:
          een{' '}
          <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">
            remineralisatiefilter
          </Link>{' '}
          (postcart die calcium en magnesium terugvoegt) of speciaal zuigelingenwater dat aan
          de mineraaldrempels voldoet.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Pasta en rijst koken in osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          Pasta en rijst koken in osmosewater werkt uitstekend. Er is geen verschil in gaarheid,
          kooktijd of textuur ten opzichte van koken in gewoon kraanwater. Een veelgehoorde mythe is
          dat zacht water pasta sneller gaar maakt of een andere textuur geeft &mdash; in de praktijk
          is dit verschil bij normale kooktijden niet meetbaar.
        </p>
        <p className="text-gray-700 mb-4">
          Wat wel merkbaar is: bij koken in hard kraanwater ontstaat een wit schuim en kalkranden
          in de pan. Bij osmosewater blijft de pan schoon. Pasta absorbeert osmosewater gelijkmatig
          zonder dat kalkdeeltjes het wateroppervlak belagen.
        </p>
        <p className="text-gray-700 mb-6">
          Voor rijst geldt dat osmosewater een iets gelijkmatiger wateropname geeft vanwege de
          afwezigheid van kalk die de rijstkorrelstructuur beinvloedt. Het smaaksverschil is
          subtiel en afhankelijk van de rijstsoort en bereiding.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Thee en koffie met osmosewater: remineralisatie aanbevolen
        </h2>
        <p className="text-gray-700 mb-4">
          Voor thee en koffie is de mineraalsamenstelling van het water bepalend voor de smaak.
          De <strong>Specialty Coffee Association (SCA)</strong> heeft normen vastgesteld voor
          optimaal koffiewater: een TDS van <strong>75-150 mg/L</strong>, met name calcium en
          magnesium als dragers van smaakmoleculen uit koffiepoeder.
        </p>
        <p className="text-gray-700 mb-4">
          Osmosewater met een TDS van 1-20 mg/L is te zacht: koffie gezet met zuiver osmosewater
          smaakt vlak en minder complex. Bij thee geeft te zacht water een wrange, astringente smaak
          omdat theepoly fenolen te sterk extraheren zonder de bufferende werking van mineralen.
        </p>
        <p className="text-gray-700 mb-6">
          De oplossing is een{' '}
          <Link href="/osmose-water/smaak" className="text-[#005F8A] underline">
            remineralisatiefilter of mineraalpatroon
          </Link>{' '}
          dat aan het osmosewater wordt gekoppeld. Hiermee wordt het TDS verhoogd naar het
          optimale bereik voor thee en koffie. Zie ook onze vergelijkingspagina over{' '}
          <Link href="/osmose-water/gezondheid" className="text-[#005F8A] underline">
            osmosewater en gezondheid
          </Link>{' '}
          voor meer informatie over de mineraalbalans.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kooktijd en kookpunt: mythe ontkracht
        </h2>
        <p className="text-gray-700 mb-4">
          Een veelgehoorde bewering is dat osmosewater sneller kookt dan hard kraanwater. Dit klopt
          theoretisch gezien minimaal: opgeloste stoffen verhogen het kookpunt van water licht
          (kookpuntverhoging). Bij de TDS-waarden van normaal kraanwater (150-400 mg/L) is de
          kookpuntverhoging echter minder dan <strong>0,01 graden Celsius</strong>.
        </p>
        <p className="text-gray-700 mb-6">
          In de praktijk kookt osmosewater dus op nagenoeg exact dezelfde temperatuur (100&deg;C
          bij zeeniveau) als kraanwater. Het verschil in kooktijd is nul. De mythe van het
          "sneller kokende zachte water" is weliswaar fysisch correct maar in de keuken irrelevant.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Soepen en sauzen: osmosewater als neutrale basis
        </h2>
        <p className="text-gray-700 mb-4">
          Voor soepen, bouillons en sauzen is osmosewater een uitstekende keuze. De smaak van
          soep wordt bepaald door de ingredienten, niet door het water. Bouillon getrokken in
          osmosewater smaakt schoner en helder, omdat er geen chloor of mineraalcompetitie is
          die de extractie van smaakmoleculen beinvloedt.
        </p>
        <p className="text-gray-700 mb-4">
          Professionele koks in Michelin-sterrenrestaurants gebruiken standaard gefilterd water
          voor bouillons en fonds, juist omdat een neutrale waterbasis de ingredienten centraal
          stelt. Osmosewater biedt thuis hetzelfde voordeel: geen chloor, geen kalk, een zuivere
          basis.
        </p>
        <p className="text-gray-700 mb-6">
          Een extra voordeel: bij het inkoken van sauzen en bouillons concentreert het water.
          Kraanwater dat inkookt laat een kalkneerslag achter in de pan. Osmosewater kookt in
          zonder neerslag, waardoor het resultaat visueel aantrekkelijker is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kalk in de keuken: het grootste praktische voordeel
        </h2>
        <p className="text-gray-700 mb-4">
          Een van de meest tastbare voordelen van koken met osmosewater is de afwezigheid van
          kalk. In gebieden met hard water (hardheid boven 200 mg/L CaCO3, zoals grote delen
          van Noord-Holland, Zuid-Holland en Utrecht) vormt kalk een constante last:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Waterkokers verkalken snel en moeten regelmatig worden ontkalkt</li>
          <li>Pannen krijgen witte kalkranden en -vlekken</li>
          <li>Koffiezetapparaten en espressomachines vereisen frequente ontkalking</li>
          <li>Glas en bestek vertonen kalksporen na het afwassen</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Met osmosewater verdwijnen al deze problemen volledig. De waterkoker blijft schoon,
          pannen zijn makkelijker schoon te houden en koffiezetapparaten hebben geen ontkalking meer
          nodig. Op jaarbasis bespaart dit niet alleen tijd en moeite, maar ook de aanschafkosten
          van ontkalkers en de vervanging van verkalkte apparaten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Overzicht: osmosewater per kooktoepassing
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Toepassing</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt?</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Pasta en rijst</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Geen verschil in smaak of kooktijd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Soep en bouillon</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja, aanbevolen</td>
                <td className="border border-gray-300 px-3 py-2">Neutrale basis versterkt smaak ingredienten</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Thee en koffie</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Met remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">TDS 75-150 mg/L optimaal voor smaak</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Babyvoeding</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Met remineralisatie</td>
                <td className="border border-gray-300 px-3 py-2">WHO: min. 30 mg/L Ca aanbevolen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Brood bakken</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">Optioneel 50/50 mengen</td>
                <td className="border border-gray-300 px-3 py-2">Zeer zacht water kan gist beinvloeden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Groenten blancheren</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Kleur van groenten blijft helder</td>
              </tr>
            </tbody>
          </table>
        </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/osmose-water/mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in osmosewater</h3>
            <p className="text-sm text-gray-600">Welke mineralen nodig zijn en hoe je ze toevoegt aan osmosewater.</p>
          </Link>
          <Link href="/osmose-water/gezondheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater en gezondheid</h3>
            <p className="text-sm text-gray-600">De gezondheidseffecten van osmosewater dagelijks drinken.</p>
          </Link>
          <Link href="/kraanwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kraanwater</h3>
            <p className="text-sm text-gray-600">Alles over kraanwater: kwaliteit, samenstelling en gebruik in de keuken.</p>
          </Link>
          <Link href="/osmose-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosewater</h3>
            <p className="text-sm text-gray-600">Alles over osmosewater: werking, voordelen en toepassingen.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over osmosewater en koken
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
          <Link href="/osmose-water/remineraliseren" className="text-[#005F8A] underline">osmosewater remineraliseren</Link>,{' '}
          <Link href="/osmose-water/smaak" className="text-[#005F8A] underline">smaak van osmosewater verbeteren</Link>,{' '}
          <Link href="/osmose-water/gezondheid" className="text-[#005F8A] underline">osmosewater en gezondheid</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>
      </main>
    </>
  );
}
