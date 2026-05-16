import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Drinkwaterfontein voor kantoor: kosten, types en regelgeving',
  description: 'Een drinkwaterfontein op kantoor is verplicht bij 10+ medewerkers (Arbowet). Vergelijking van kantoorwaterfonteinen: huren vs kopen, kosten per medewerker en de beste keuze.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/kantoor' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ben ik als werkgever verplicht een drinkwaterfontein op kantoor te plaatsen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Artikel 3.20 van het Arbeidsomstandighedenbesluit (Arbobesluit) verplicht werkgevers om gratis drinkwater beschikbaar te stellen aan werknemers. Bij 10 of meer medewerkers is een aparte drinkwatervoorziening in de praktijk noodzakelijk. Kraanwater is wettelijk gezien voldoende, maar werkgevers kiezen vaak voor een drinkwaterfontein vanwege comfort, temperatuur en filterkwaliteit. Bij werkzaamheden in warmte of fysieke arbeid gelden aanvullende verplichtingen voor de hoeveelheid beschikbaar water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel water heeft een kantoormedewerker per dag nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor kantoormedewerkers (zittend werk, normale temperatuur) wordt 1,5 tot 2 liter per werkdag als richtlijn gehanteerd. Bij warm weer of bij fysieke arbeid loopt dit op tot 3 liter per dag. Tel je een kantoor met 30 medewerkers: 30 x 2L = 60 liter per dag. Een standaard 19-liter fles gaat dan 7,5 uur mee bij doorlopend gebruik. Een mains-fed fontein heeft onbeperkte capaciteit en is daarvoor geschikter bij grote kantoren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is huren of kopen van een kantoorwaterfontein voordeliger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huren heeft lagere opstartkosten en onderhoud is veelal inbegrepen. Kopen is na 12-24 maanden goedkoper. Bij een huur mains-fed fontein betaal je €40-90 per maand; bij koop (€400-800 aanschaf) bedragen de maandelijkse kosten €15-30 voor filter en stroom. Voor kortstondig gebruik of startende bedrijven is huren praktischer. Voor gevestigde kantoren met een meerjarig contract is kopen bijna altijd voordeliger op de lange termijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe reinig ik een kantoorwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wekelijks: veeg het mondstuk af met een vochtige doek en gebruik een mild desinfectiemiddel. Maandelijks: verwijder de druppelplaat en reinig deze grondig. Elk kwartaal of halfjaars: volledige inwendige reiniging met citroenzuur of desinfectieoplossing, inclusief reservoir en interne leidingen. Jaarlijks: vervang het koolstoffilter en (indien aanwezig) de UV-lamp. Bij huurmodellen verzorgt de leverancier doorgaans de periodieke grootreiniging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een drinkwaterfontein aftrekken als bedrijfskosten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Kantoordrinkwaterfonteinen gelden als bedrijfsmiddel en de kosten (aanschaf, huur, filters, onderhoud) zijn volledig aftrekbaar als zakelijke kosten. Bij aanschaf boven de activeringsgrens (doorgaans €450 exclusief btw) wordt het apparaat geactiveerd op de balans en afgeschreven over de gebruiksduur. De btw is terugvorderbaar voor btw-plichtige ondernemers. Raadpleeg uw accountant voor de specifieke verwerking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel personen kan een kantoorwaterfontein aan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard mains-fed kantoorwaterfontein is ontworpen voor 20-50 personen. Het gekoelde reservoir bevat doorgaans 5-10 liter en wordt continu aangevuld vanuit het leidingwater. Voor grotere kantoren (50+ personen) zijn meerdere fonteinen of modellen met hogere koelcapaciteit nodig. Flessenfonteinen zijn doorgaans geschikt voor 10-25 personen per dag bij gebruik van een 19-liter fles per dag.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een drinkwaterfontein per medewerker per maand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een huur mains-fed fontein van €60 per maand voor 25 medewerkers bedragen de kosten €2,40 per medewerker per maand. Bij een gekochte fontein (aanschaf €600, maandelijks €20 voor filter en stroom, levensduur 5 jaar) bedragen de totale kosten over 5 jaar €1.800 voor 25 medewerkers, ofwel €1,20 per medewerker per maand. Dit is goedkoper dan flessenwater (circa €0,50-1,00 per persoon per dag).',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Drinkwaterfontein voor kantoor: kosten, types en regelgeving',
  description: 'Een drinkwaterfontein op kantoor is verplicht bij 10+ medewerkers (Arbowet). Vergelijking van kantoorwaterfonteinen, huren vs kopen en kosten per medewerker.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/drinkwaterfontein/kantoor',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterfonteinKantoorPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwaterfontein', item: 'https://waterfilterplatform.nl/drinkwaterfontein' },
              { '@type': 'ListItem', position: 3, name: 'Drinkwaterfontein kantoor', item: 'https://waterfilterplatform.nl/drinkwaterfontein/kantoor' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwaterfontein" className="hover:underline">Drinkwaterfontein</Link> &rsaquo;{' '}
          <span>Drinkwaterfontein kantoor</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwaterfontein voor kantoor: kosten, types en regelgeving
        </h1>

        <QuickAnswer answer="Werkgevers zijn verplicht drinkwater aan te bieden (Arbobesluit art. 3.20). Bij 10+ medewerkers is een aparte fontein gebruikelijk. Een mains-fed kantoorwaterfontein kost bij koop €15-30 per maand; huur circa €40-90 per maand. Per medewerker bedragen de kosten €1-3 per maand, afhankelijk van model en contract." />

        <CTABanner context="osmose" />

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Arbowet: werkgever verplicht tot drinkwatervoorziening
          </h2>
          <p className="text-gray-700 mb-4">
            Artikel 3.20 van het Arbeidsomstandighedenbesluit (Arbobesluit) verplicht werkgevers gratis drinkwater beschikbaar te stellen aan hun medewerkers. Bij kleine bedrijven kan dit kraanwater zijn. Bij grotere kantoren (10 of meer medewerkers), bij werk in warme omstandigheden of bij fysieke arbeid is een aparte, goed toegankelijke drinkwatervoorziening in de praktijk noodzakelijk.
          </p>
          <p className="text-gray-700">
            De Arbeidsinspectie controleert op naleving van dit artikel bij bedrijfsinspecties. Een werkgever die geen adequate drinkwatervoorziening aanbiedt, riskeert een eis tot verbetering en bij herhaling een boete. Een kwalitatieve drinkwaterfontein is dus zowel een wettelijke verplichting als een investering in werknemerstevredenheid en productiviteit.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Typen kantoorfonteinen: welke past bij uw bedrijf?
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Vrijstaand vloermodel (floorstanding)</h3>
            <p className="text-gray-700 text-sm mb-2">
              Het meest gebruikte type op kantoor. Staat los op de vloer (circa 100-120 cm hoog), heeft een groot reservoir en is geschikt voor 20-50 personen. Beschikbaar als flessenfontein of mains-fed. Compact genoeg voor kantine of koffiehoek.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Tafelmodel</h3>
            <p className="text-gray-700 text-sm mb-2">
              Kleiner formaat, staat op een tafel of aanrecht. Geschikt voor kleine kantoorruimtes of individuele afdelingen. Laagdrempeliger in gebruik, maar lagere capaciteit (geschikt voor 5-15 personen). Vaak goedkoper in aanschaf.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Wandgemonteerd model</h3>
            <p className="text-gray-700 text-sm mb-2">
              Ideaal voor gangen, kleedkamers, fabrieksomgevingen en sporthallen. Neemt geen vloeroppervlak in beslag. Vereist bevestiging aan de muur en een wateraansluiting. Populair in productieomgevingen en openbare ruimtes.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Capaciteitsberekening voor uw kantoor
        </h2>
        <p className="text-gray-700 mb-4">
          Als vuistregel geldt 1,5 tot 2 liter drinkwater per medewerker per werkdag bij kantoorwerk in een getempereerde ruimte. Bij warme omstandigheden of fysieke arbeid stijgt dit naar 2,5 tot 3 liter per persoon. Bij zomerse temperaturen rekent u beter met de hogere waarden.
        </p>
        <div className="bg-[#E0F2FE] rounded-lg p-4 mb-6 text-sm text-[#003F5C]">
          <strong>Rekenvoorbeeld:</strong> Kantoor met 40 medewerkers, 8 uur werkdag, normale temperatuur.
          40 x 2L = 80L per dag. Bij een 19L flessenfontein: 4-5 flessenwissel per dag &mdash; arbeidsintensief.
          Beter: een mains-fed model met onbeperkte capaciteit.
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Huren versus kopen: vergelijkingstabel
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Model</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanschafkosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Maandelijks</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Voordelen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Huur flessenfontein</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0</td>
                <td className="border border-gray-300 px-3 py-2">&euro;80-200 (fles+huur)</td>
                <td className="border border-gray-300 px-3 py-2">Geen investering, service inbegrepen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Koop flessenfontein</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200-500</td>
                <td className="border border-gray-300 px-3 py-2">&euro;30-80 (flessen)</td>
                <td className="border border-gray-300 px-3 py-2">Lagere maandlasten na break-even</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Huur mains-fed</td>
                <td className="border border-gray-300 px-3 py-2">&euro;0</td>
                <td className="border border-gray-300 px-3 py-2">&euro;40-90</td>
                <td className="border border-gray-300 px-3 py-2">Altijd water, geen flessen sjouwen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Koop mains-fed</td>
                <td className="border border-gray-300 px-3 py-2">&euro;400-800</td>
                <td className="border border-gray-300 px-3 py-2">&euro;15-30 (filter+stroom)</td>
                <td className="border border-gray-300 px-3 py-2">Goedkoopst op lange termijn</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Populaire leveranciers in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Op de Nederlandse markt zijn diverse leveranciers actief met volledige ontzorgingspakketten voor kantoor. De bekendste zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Eden Springs</strong>: grote Europese speler, flessenfonteinen en mains-fed, huurmodel met bezorgservice</li>
          <li><strong>Culligan</strong>: internationaal waterbedrijf, breed aanbod van mains-fed en RO-fonteinen voor zakelijk gebruik</li>
          <li><strong>Quooker Business</strong>: premium 4-in-1 kraan met kokend, koud, warm en bruisend water, geschikt voor representatieve kantooromgevingen</li>
          <li><strong>AquaVita</strong>: Nederlands merk, flessenfonteinen en mains-fed op huur, populair bij mkb</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bruisend water op kantoor: CO2-systeem
        </h2>
        <p className="text-gray-700 mb-4">
          Steeds meer kantoren bieden naast koud en warm water ook bruisend water aan. Dit gaat via een CO2-cartridge die in de fontein is geintegreerd of als apart apparaat staat. Een CO2-cartridge van 10 liter CO2 produceert circa 1.000-1.500 liter bruisend water en kost €30-50 om bij te vullen. Dit maakt bruisend kraanwater goedkoper dan bruisend bronwater in flessen (€0,50-1,00/L vs. €0,03-0,05/L voor bruisend leidingwater).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hygiene op kantoor: frequentie en verantwoordelijkheid
        </h2>
        <p className="text-gray-700 mb-6">
          Op kantoor is de intensiteit van gebruik hoger dan thuis, waardoor hygiene extra aandacht verdient. Het mondstuk (tapkraan) dient wekelijks gereinigd te worden, bij voorkeur dagelijks bij hoog gebruik. De druppelplaat wordt dagelijks leeggemaakt. Een volledige interne reiniging door een technicus vindt bij de meeste leveranciers maandelijks of kwartaalsgewijs plaats als onderdeel van het servicecontract.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over kantoorwaterfonteinen</h2>
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
          <Link href="/drinkwaterfontein" className="text-[#005F8A] underline">drinkwaterfontein overzicht</Link>,{' '}
          <Link href="/drinkwaterfontein/kopen" className="text-[#005F8A] underline">drinkwaterfontein kopen</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>
      </main>
    </>
  );
}
