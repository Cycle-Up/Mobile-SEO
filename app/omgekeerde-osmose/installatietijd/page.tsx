import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmosefilter installeren: hoe lang duurt het en wat heb je nodig?',
  description:
    'Een osmosefilter installeren duurt 2-4 uur voor een ervaren doe-het-zelver of 1-2 uur voor een loodgieter. Stap-voor-stap overzicht van de installatie en wat.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/installatietijd' },
};

const faqItems = [
  {
    question: 'Hoe lang duurt het installeren van een osmosefilter?',
    answer:
      'De installatietijd hangt af van uw ervaring en het type systeem. Een standaard onderbouw RO-systeem kost een doe-het-zelver met basis loodgieterskennis 2-4 uur. Een loodgieter installeert hetzelfde systeem in 1-2 uur. Een countertop osmosefilter is in 15 minuten klaar zonder gereedschap. Een 4-in-1 kokend water kraan met osmose kost een doe-het-zelver 3-5 uur vanwege de extra elektra-aansluiting.',
  },
  {
    question: 'Kan ik een osmosefilter zelf installeren?',
    answer:
      'Ja, de meeste standaard onderbouw osmosefilters zijn geschikt voor zelfinstallatie als u basiskennis van loodgieterswerk heeft. U moet een T-koppeling op de koudwaterleiding kunnen monteren, een kraangat in het aanrecht kunnen boren en een drain saddle op de afvoerpijp kunnen aanbrengen. Volg de instructies van de fabrikant nauwkeurig en sluit het water af voordat u begint. Bij twijfel over leidingen of bij een 4-in-1 kraan met elektra is professionele hulp verstandig.',
  },
  {
    question: 'Heb ik een loodgieter nodig voor een osmosefilter?',
    answer:
      'Niet per se. De meeste doe-het-zelvers installeren een standaard RO-systeem zelfstandig. Een loodgieter is aan te raden bij: koperen leidingen ouder dan 1960, loodleidingen (nooit zelf aanraken), beperkte ruimte onder het aanrecht of als u er niet zeker van bent hoe u de koudwateraftakking moet maken. Voor een 4-in-1 kokend water kraan is ook een elektricien nodig voor de elektra-aansluiting als er geen stopcontact aanwezig is.',
  },
  {
    question: 'Wat heb ik nodig om een osmosefilter te installeren?',
    answer:
      'Gereedschap: verstelbare moersleutel, Teflon tape (afdichtingstape), rolmeter, booromachine met geschikte bit voor het kraangat in het aanrecht, emmer en handdoeken. Materiaal wordt doorgaans meegeleverd met het systeem: T-koppeling voor de koudwaterleiding (3/8" of 1/2"), drain saddle voor de afvoerpijp, slangen en filterkraan. Controleer vooraf de aansluitmaten van uw bestaande leidingen.',
  },
  {
    question: 'Hoe boor ik een gat in mijn aanrecht voor de filterkraan?',
    answer:
      'Controleer eerst of uw aanrecht al een vooraf geboord dop-gat (blinde afsluiting) heeft, want dat bespaart werk. Zo niet: gebruik een gatenboor van 35-38 mm voor een standaard kraangat. Boor vanuit de bovenkant en gebruik bij composiet of graniet een diamantboor met water als koelvloeistof. Leg een natte doek op het aanrecht om krassen te voorkomen. Markeer het midden exact voor u begint. Twijfelt u? Laat een aanbouwbedrijf of loodgieter het gat boren.',
  },
  {
    question: 'Hoe sluit ik een osmosefilter aan op de waterleiding?',
    answer:
      'Sluit eerst het koudwater af via de hoofdafsluiter of de afsluiter onder het aanrecht. Monteer een ball valve met T-koppeling op de koudwaterleiding (gebruik Teflon tape voor de schroefdraad). Sluit de toevoerslang van het osmosefilter aan op de ball valve. Bevestig de drain saddle op de afvoerpijp voor het afvalwater. Sluit ten slotte de permeaatslang aan op de filterkraan en zet de drukopslagtank aan. Vul het systeem langzaam en controleer alle verbindingen op lekkage.',
  },
  {
    question: 'Hoe lang duurt het spoelen van een nieuw osmosefilter?',
    answer:
      'Een nieuw osmosefilter moet voor gebruik grondig gespoeld worden. Vul de drukopslagtank twee tot drie keer en gooi het water weg. Dit verwijdert productieresten, koolstofstof en de bewaaroplossing van het membraan. Dit spoelproces duurt afhankelijk van de tankgrootte en waterdruk 4-8 uur per vulling. Reken op een volledige dag voor het initieel doorspoelen. Na het spoelen is het water veilig voor consumptie.',
  },
  {
    question: 'Kan ik een osmosefilter installeren in een huurwoning?',
    answer:
      'Ja, in de meeste gevallen wel, maar u heeft toestemming van de verhuurder nodig als u een gat in het aanrecht wilt boren of aftakkingen aan de waterleiding wilt maken. Een countertop osmosefilter vereist geen enkele installatie en is altijd toegestaan. Vraag toestemming schriftelijk aan; verhuurders moeten redelijke aanpassingen toestaan tenzij er zwaarwegende redenen zijn. Documenteer de situatie voor en na de installatie en bewaar de originele kraan.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Osmosefilter installeren: hoe lang duurt het en wat heb je nodig?',
  description:
    'Een osmosefilter installeren duurt 2-4 uur voor een ervaren doe-het-zelver of 1-2 uur voor een loodgieter. Stap-voor-stap overzicht van de installatie en wat.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/omgekeerde-osmose/installatietijd',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function InstallatietijdPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Omgekeerde osmose',
                item: 'https://waterfilterplatform.nl/omgekeerde-osmose',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Osmosefilter installeren',
                item: 'https://waterfilterplatform.nl/omgekeerde-osmose/installatietijd',
              },
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
          <span>Osmosefilter installeren</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Osmosefilter installeren: hoe lang duurt het en wat heb je nodig?
          </h1>
          <p className="text-[#005F8A] text-lg">
            Een standaard onderbouw osmosefilter installeert een doe-het-zelver in 2-4 uur. Een loodgieter
            is sneller: 1-2 uur. Alles over de benodigde stappen, het gereedschap en wanneer u een
            professional inschakelt.
          </p>
        </section>

        <QuickAnswer answer="Een osmosefilter installeren duurt 2-4 uur (zelf) of 1-2 uur (loodgieter) voor een onderbouw systeem. Een countertop model is in 15 minuten klaar. U heeft een moersleutel, Teflon tape en een booromachine nodig. Na installatie is 4-8 uur spoelen per tankwisseling vereist." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tijdsinschatting per installatievorm
        </h2>
        <p className="text-gray-700 mb-4">
          De installatietijd verschilt fors afhankelijk van het type osmosefilter en wie het installeert.
          Hieronder een overzicht:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Installatievorm</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Tijd</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Vereiste kennis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Standaard onderbouw RO (zelf)</td>
                <td className="border border-gray-300 px-3 py-2 font-medium">2-4 uur</td>
                <td className="border border-gray-300 px-3 py-2">Basis loodgieterswerk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Standaard onderbouw RO (loodgieter)</td>
                <td className="border border-gray-300 px-3 py-2 font-medium">1-2 uur</td>
                <td className="border border-gray-300 px-3 py-2">Geen (loodgieter regelt alles)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">4-in-1 kokend water kraan (zelf)</td>
                <td className="border border-gray-300 px-3 py-2 font-medium">3-5 uur</td>
                <td className="border border-gray-300 px-3 py-2">Loodgieters + elektra</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">4-in-1 kokend water kraan (installateur)</td>
                <td className="border border-gray-300 px-3 py-2 font-medium">2-3 uur</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Countertop (tafelblad, geen installatie)</td>
                <td className="border border-gray-300 px-3 py-2 font-medium">15 min</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat heeft u nodig voor de installatie?
        </h2>
        <p className="text-gray-700 mb-3">
          Zorg dat het volgende gereedschap en materiaal aanwezig zijn voordat u begint:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Verstelbare moersleutel</strong> of waterpomp tang voor het vastdraaien van koppelingen</li>
          <li><strong>Teflon tape</strong> (PTFE tape) voor het afdichten van schroefdraadverbindingen</li>
          <li><strong>Rolmeter</strong> voor het bepalen van de juiste slanglengte</li>
          <li><strong>Booromachine</strong> met geschikte bit (35-38 mm gatenboor voor kraangat in aanrecht)</li>
          <li><strong>Emmer en handdoeken</strong> voor het opvangen van water tijdens de werkzaamheden</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">Aansluitpunten</h3>
        <p className="text-gray-700 mb-4">
          Een onderbouw osmosefilter heeft drie aansluitpunten nodig:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Koudwaterleiding:</strong> aansluiting via een T-koppeling met ball valve
            (3/8" of 1/2" afhankelijk van uw leiding). Controleer de diameter van uw koudwaterleiding
            voor aankoop van koppelingen.
          </li>
          <li>
            <strong>Afvoer:</strong> drain saddle op de afvoerpijp onder het aanrecht voor de
            afvoer van het concentraat (afvalwater).
          </li>
          <li>
            <strong>Kraan:</strong> de osmosekraan komt op het aanrecht en sluit aan op de
            drukopslagtank via de permeaatslang.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap installatieproces
        </h2>
        <p className="text-gray-700 mb-4">
          De globale installatiestappen voor een standaard onderbouw RO-systeem:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Watertoevoer afsluiten</strong> via de hoofdkraan of de afsluiter voor de
            keuken. Laat de bestaande kraan leeglopen.
          </li>
          <li>
            <strong>Koud water aftakking maken:</strong> monteer een T-koppeling met ball valve
            op de koudwatertoevoer. Gebruik Teflon tape op alle schroefdraadverbindingen.
          </li>
          <li>
            <strong>Pre-filters aansluiten:</strong> sluit het sedimentfilter en het pre-koolstoffilter
            aan op de toevoerleiding. Let op de stroomrichting (pijlen op de filterhuizen).
          </li>
          <li>
            <strong>RO-membraan installeren:</strong> breng het RO-membraan aan in de
            membraanbehuizing. Let op de correcte orientatie.
          </li>
          <li>
            <strong>Drukopslagtank aansluiten:</strong> verbind de tank via de bijgeleverde slang
            met het systeem. Controleer de voordruk van de tank (standaard 0,3-0,4 bar).
          </li>
          <li>
            <strong>Kraan boren in aanrecht</strong> (als er geen bestaand gat is): gebruik een
            gatenboor van 35-38 mm. Boor vanuit de bovenkant en zorg voor ondersteuning aan de
            onderkant om uitscheuren te voorkomen.
          </li>
          <li>
            <strong>Afvoer aansluiten:</strong> bevestig de drain saddle op de afvoerpijp boven de
            sifon. Boor een klein gat in de afvoerpijp en zet de drain saddle vast.
          </li>
          <li>
            <strong>Systeem vullen en spoelen:</strong> open langzaam de ball valve en vul de tank.
            Gooi de eerste twee tot drie tankwisselingen weg voor consumptie.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer schakelt u een loodgieter in?
        </h2>
        <p className="text-gray-700 mb-4">
          In de volgende situaties is professionele hulp verstandig of zelfs noodzakelijk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Koperen leidingen ouder dan 1960</strong> of leidingen waarvan u de staat
            niet kent. Beschadigde soldeerpunten kunnen leiden tot lekkage.
          </li>
          <li>
            <strong>Loodleidingen:</strong> raak loodleidingen nooit zelf aan. Een loodgieter
            voert de vervanging professioneel en veilig uit.
          </li>
          <li>
            <strong>Beperkte ruimte onder het aanrecht</strong> of ingewikkelde leidingloop.
          </li>
          <li>
            <strong>4-in-1 kokend water kraan:</strong> naast het loodgieterswerk is een geaard
            stopcontact nodig voor het verwarmingselement. Laat dit door een elektricien verzorgen
            als dit ontbreekt.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Kosten voor een loodgieter: reken op &euro;75-150 per uur. Een complete installatie
          van een standaard onderbouw RO kost inclusief materiaal doorgaans &euro;150-400. Voor
          een 4-in-1 kraan met elektra-aansluiting loopt dit op tot &euro;300-600 inclusief
          installateur en elektricien.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Countertop vs. onderbouw osmosefilter
        </h2>
        <p className="text-gray-700 mb-4">
          Een countertop osmosefilter (tafelmodel) is in 15 minuten klaar: aansluiten op de
          bestaande kraan via een adapter, geen boringen, geen loodgieterswerk. Ideaal voor
          huurwoningen of als u de installatie wilt vermijden. Nadeel: staat op het aanrecht en
          is minder elegant.
        </p>
        <p className="text-gray-700 mb-6">
          Een onderbouw systeem is onzichtbaar en wordt direct in de waterleiding geintegreerd.
          Meer informatie over de aankoop van een osmosefilter vindt u op onze pagina{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen
          </Link>
          . Overweegt u ook een kokend water kraan? Bekijk onze{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">
            kokend water kraan
          </Link>{' '}
          pagina voor opties met ingebouwde osmose.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/omgekeerde-osmose/installatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Installatie omgekeerde osmose</h3>
              <p className="text-sm text-gray-600">Stap-voor-stap uitleg over het installeren van een RO-systeem onder de gootsteen.</p>
            </Link>
            <Link href="/omgekeerde-osmose/inbouw" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Inbouw osmosefilter</h3>
              <p className="text-sm text-gray-600">Wat is een inbouwsysteem en wanneer kies je daarvoor boven een losstaand model?</p>
            </Link>
            <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp installatietypes</h3>
              <p className="text-sm text-gray-600">Welk installatietype past bij jouw keuken en waterleiding?</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: complete gids</h3>
              <p className="text-sm text-gray-600">Alles over hoe RO werkt, wat het filtert en welk systeem bij jou past.</p>
            </Link>
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/omgekeerde-osmose/installatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Installatie</h3>
            <p className="text-sm text-gray-600">Alles over het installeren van een omgekeerde osmose systeem.</p>
          </Link>
          <Link href="/omgekeerde-osmose/inbouw" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Inbouw</h3>
            <p className="text-sm text-gray-600">Inbouwopties en wat u moet weten voordat u begint.</p>
          </Link>
          <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Installatietype kiezen</h3>
            <p className="text-sm text-gray-600">Welk installatietype past het beste bij uw situatie?</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Terug naar het hoofdoverzicht van omgekeerde osmose.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <section className="mt-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over osmosefilter installatie
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#003F5C] cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
            omgekeerde osmose uitleg
          </Link>
          ,{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen
          </Link>{' '}
          en{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">
            kokend water kraan
          </Link>
          .
        </p>
      </main>
    </>
  );
}
