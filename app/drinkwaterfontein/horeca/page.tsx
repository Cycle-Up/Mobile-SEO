import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Drinkwaterfontein voor horeca: tafelwater en personeelswater',
  description: 'Een drinkwaterfontein voor horeca levert gekoeld, gefilterd en bruisend tafelwater. Vergelijking van horeca waterfonteinen voor restaurants, hotels en cafes in 2026.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/horeca' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is een tafelwatersysteem goedkoper dan flessenwater voor een restaurant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, aanzienlijk. Bij 40 gasten per dag die elk gemiddeld 0,5 liter water drinken en u EUR 0,80 per fles betaalt, zijn uw jaarlijkse flessenkosten circa EUR 5.800. Een tafelwatersysteem (installatie EUR 2.000-5.000 + jaarlijkse kosten filter en CO2 circa EUR 400-800) verdient zichzelf terug in minder dan 1 jaar. Na terugverdientijd bespaart u EUR 4.000-5.000 per jaar netto. Bovendien hoeft u geen flessen meer te sjouwen, op te slaan en te retourneren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke horeca drinkwaterfontein is het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De beste horeca drinkwaterfonteinen voor tafelwater in 2026: Quooker CUBE Horeca (compacte tafelunit, gefilterd plat en bruisend, geschikt voor tafelpresentatie), Zip HydroTap Commercial (gekoeld, bruisend en kokend in een, ingebouwde ultraviolet-desinfectie), Billi Commercial (Australisch merk, hoge capaciteit, energiezuinig), Grohe Blue Professional (bekende kwaliteit, mooi design). Kies op basis van gewenste functies (alleen koud, of ook warm/kokend), capaciteit (gasten per dag) en budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe installeer ik een tafelwatersysteem in een restaurant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Installatie vereist drie aansluitingen: (1) wateraansluiting op het leidingnet (3/8" of 1/2", door een erkend loodgieter), (2) elektra voor de koelunit (220V, geaard stopcontact nabij het systeem), (3) CO2-aansluiting voor bruisend water (losse CO2-cilinder van 6 of 10 kg, via slangaansluiting). De installatie duurt 2-4 uur. Sommige leveranciers bieden installatie inclusief aan. Zorg voor een goede plek voor de CO2-cilinder: stabiel, niet in directe zon, toegankelijk voor verwisseling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe snel verdien ik een horeca drinkwaterfontein terug?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De terugverdientijd hangt af van het aantal gasten en uw huidige flessenwaterkosten. Een rekenvoorbeeld: bij 40 gasten per dag en flessenwater van EUR 0,80 per fles bespaart u EUR 5.000-6.000 per jaar. Een installatie van EUR 3.000-4.000 verdient u terug in 6-9 maanden. Bij kleinere restaurants (15-20 gasten per dag) is de terugverdientijd 12-18 maanden. Druk reservatierestaurants (80+ couverts) verdienen hun systeem terug in 3-6 maanden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe hygienisch zijn horeca drinkwaterfonteinen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mits correct onderhouden zijn horeca drinkwaterfonteinen zeer hygenisch. Aanbevolen onderhoud: wekelijks tapstuk reinigen met toegestaan desinfectiemiddel, maandelijks het filtersysteem doorspoelen en ventielen inspecteren, jaarlijkse professionele onderhoudsbeurt inclusief filterwissel. Moderne systemen van Zip en Billi hebben ingebouwde UV-desinfectie die bacteriegroei in het systeem verhindert. Controleer de filtervervanging op tijd: een overbelast filter kan verslechteren in plaats van verbeteren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik ook bruisend water leveren via een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, vrijwel alle horeca tafelwatersystemen hebben een CO2-module voor bruisend water. U sluit een losse CO2-cilinder aan (6 of 10 kg, te huren bij gasleveranciers of brewshops). Een cilinder van 10 kg levert circa 5.000 liter bruisend water en gaat bij een gemiddeld restaurant 2-4 maanden mee. De bruisintensiteit is instelbaar van licht bruisend tot sterk bruisend. Losse CO2-cilinders voor horeca zijn significant goedkoper per liter dan patronen (EUR 3-5 per 10 kg vs. EUR 25 voor een SodaStream-cilinder van 60L).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost onderhoud van een horeca drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jaarlijkse onderhoudskosten voor een horeca drinkwaterfontein: filtervervanging EUR 80-200 (afhankelijk van systeem en waterverbruik), professionele servicebeurt EUR 100-200 per jaar, CO2-cilinders EUR 200-600 per jaar afhankelijk van verbruik. Totale jaarkosten: circa EUR 400-1.000. Bij een huurcontract inclusief onderhoud betaalt u EUR 80-200 per maand all-in. Vergelijk dit met flessenwater: bij een restaurant van gemiddelde grootte betaalt u EUR 3.000-6.000 per jaar aan flessenwater.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Drinkwaterfontein voor horeca: tafelwater en personeelswater',
  description: 'Een drinkwaterfontein voor horeca levert gekoeld, gefilterd en bruisend tafelwater voor gasten en voldoet aan de Arbowet voor personeelswater.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/drinkwaterfontein/horeca',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterfonteinHorecaPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwaterfontein', item: 'https://waterfilterplatform.nl/drinkwaterfontein' },
              { '@type': 'ListItem', position: 3, name: 'Drinkwaterfontein horeca', item: 'https://waterfilterplatform.nl/drinkwaterfontein/horeca' },
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
          <span>Drinkwaterfontein horeca</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Drinkwaterfontein voor horeca: tafelwater en personeelswater
          </h1>
          <p className="text-gray-700 text-lg">
            Stop met flessenwater sjouwen. Een horeca drinkwaterfontein levert gefilterd, gekoeld
            en bruisend tafelwater rechtstreeks aan tafel &mdash; goedkoper, duurzamer en professioneler
            dan flessenwater.
          </p>
        </div>

        <QuickAnswer answer="Een horeca drinkwaterfontein vervangt flessenwater met gefilterd gekoeld en bruisend tafelwater. Bij 40 gasten per dag bespaart u EUR 5.000 per jaar op flessenwater en verdient u de installatie terug in minder dan 1 jaar. Populaire systemen: Quooker CUBE Horeca, Zip HydroTap Commercial en Billi Commercial." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Twee toepassingen in de horeca
        </h2>
        <p className="text-gray-700 mb-4">
          In de horeca zijn er twee verschillende redenen om een drinkwaterfontein te installeren.
          Beide zijn waardevol, maar vragen om een andere aanpak.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">1. Tafelwater voor gasten</h3>
            <p className="text-gray-700 text-sm">
              Gekoeld gefilterd water &mdash; plat of bruisend &mdash; als vervanger van flessenwater.
              Moderne uitstraling, lagere kosten, minder plastic afval. Gasten waarderen de
              duurzame keuze en de verzorgde presentatie via een elegante tafelunit of via
              de bar.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">2. Personeelsdrinkwater</h3>
            <p className="text-gray-700 text-sm">
              De Arbowet verplicht werkgevers bij 10+ medewerkers een drinkwatervoorziening.
              Een aparte personeelsfontein (of gedeelde unit) voldoet aan deze verplichting
              en is goedkoper en hygienieker dan flessenwater of losse kranen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tafelwatersysteem vs. flessenwater: de vergelijking
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aspect</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Tafelwatersysteem</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Flessenwater</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kosten/jaar (20 gasten/dag)</td>
                <td className="border border-gray-300 px-3 py-2">EUR 300-600 (filter + CO2)</td>
                <td className="border border-gray-300 px-3 py-2">EUR 2.000-5.000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">CO2-voetafdruk</td>
                <td className="border border-gray-300 px-3 py-2">Laag</td>
                <td className="border border-gray-300 px-3 py-2">Hoog (transport + plastic)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Uitstraling</td>
                <td className="border border-gray-300 px-3 py-2">Modern, premium</td>
                <td className="border border-gray-300 px-3 py-2">Standaard</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Personeel handelingen</td>
                <td className="border border-gray-300 px-3 py-2">Minimaal</td>
                <td className="border border-gray-300 px-3 py-2">Dagelijks flessen sjouwen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Aanpasbaar bruisniveau</td>
                <td className="border border-gray-300 px-3 py-2">Ja, instelbaar</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Opslagruimte nodig</td>
                <td className="border border-gray-300 px-3 py-2">Minimaal (CO2-cilinder)</td>
                <td className="border border-gray-300 px-3 py-2">Veel (pallets flessen)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Populaire horeca tafelwatersystemen in 2026
        </h2>
        <p className="text-gray-700 mb-4">
          De markt voor horeca tafelwateroplossingen is de afgelopen jaren sterk gegroeid. Dit zijn
          de meest gebruikte systemen in de Nederlandse horeca:
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Quooker CUBE Horeca</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Populair in NL</span>
            </div>
            <p className="text-gray-700 text-sm">
              Compacte tafelunit van het bekende Nederlandse merk. Levert gefilterd plat en bruisend
              gekoeld water. Geschikt voor tafelpresentatie of gebruik achter de bar. Eenvoudige
              installatie, herkenbaar design. Filterpatroon wisselbaar zonder gereedschap.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Zip HydroTap Commercial</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">Hoge capaciteit</span>
            </div>
            <p className="text-gray-700 text-sm">
              Australisch premium merk met ingebouwde UV-desinfectie. Levert gekoeld, bruisend
              en kokend water uit een enkele kraan. Hoge capaciteit voor drukke restaurants.
              Energiezuinig dankzij SLEEP-modus. Inclusief actieve koolfilter.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Billi Commercial</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Energiezuinig</span>
            </div>
            <p className="text-gray-700 text-sm">
              Billi staat bekend om het laagste energieverbruik in zijn klasse. Compacte
              onderkastunit met hoge tapsnelheid. Geschikt voor grotere keukens en
              kantines. Filtratie via hollow-fibre membraantechnologie.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Grohe Blue Professional</h3>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-semibold">Elegante keuken</span>
            </div>
            <p className="text-gray-700 text-sm">
              Van het bekende sanitairmerk Grohe. Professionele versie van het populaire
              thuismodel, geschikt voor lichte horecaomgevingen en hotels. Strak design,
              betrouwbare filtratie en eenvoudig filteronderhoud.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatie en CO2 voor bruisend water
        </h2>
        <p className="text-gray-700 mb-4">
          De installatie van een horeca tafelwatersysteem vereist drie aansluitingen: een
          wateraansluiting op het leidingnet (door een erkend loodgieter), een geaard stopcontact
          voor de koelunit en een CO2-cilinder voor bruisend water.
        </p>
        <p className="text-gray-700 mb-4">
          Voor horeca zijn altijd losse CO2-cilinders aan te raden, niet SodaStream-patronen.
          Een cilinder van 10 kg levert circa 5.000 liter bruisend water en kost EUR 20-40 bij
          een gasleverancier. Dat is meer dan tien keer goedkoper per liter dan patronen.
          Cilinders zijn te huren of te kopen bij gasleveranciers en brouwwinkels.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          ROI: terugverdientijd voor een restaurant
        </h2>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <p className="font-semibold text-[#003F5C] mb-3">Rekenvoorbeeld: restaurant met 40 gasten/dag</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Flessenwater: 40 gasten &times; EUR 0,80 &times; 350 dagen = <strong>EUR 11.200/jaar</strong></li>
            <li>Tafelwatersysteem: filter + CO2 = <strong>EUR 600-900/jaar</strong></li>
            <li>Besparing per jaar: <strong>&gt;EUR 10.000</strong></li>
            <li>Investering installatie: EUR 2.000-4.000</li>
            <li>Terugverdientijd: <strong>&lt;6 maanden</strong></li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hygieneonderhoud
        </h2>
        <p className="text-gray-700 mb-6">
          Correct onderhoud is essentieel voor de hygieneborging. Wekelijks reinigt u het tapstuk
          met een toegestaan desinfectiemiddel. Maandelijks doorspoelen en ventielinspectie.
          Jaarlijks een professionele servicebeurt inclusief filtervervanging. Moderne systemen
          van Zip en Billi beschikken over ingebouwde UV-desinfectie, die continue bacterieveiligheid
          garandeert ook tussen servicevisites in. Documenteer het onderhoud in uw HACCP-plan.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over horeca drinkwaterfonteinen
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
          <Link href="/drinkwaterfontein" className="text-[#005F8A] underline">drinkwaterfonteinen overzicht</Link>,{' '}
          <Link href="/drinkwaterfontein/kopen" className="text-[#005F8A] underline">drinkwaterfontein kopen</Link>,{' '}
          <Link href="/waterfilter/horeca" className="text-[#005F8A] underline">waterfilter voor horeca</Link> en{' '}
          <Link href="/bruisend-water" className="text-[#005F8A] underline">bruisend water uit de kraan</Link>.
        </p>
      </main>
    </>
  );
}
