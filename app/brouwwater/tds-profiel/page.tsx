import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'TDS-profiel voor brouwwater: de juiste TDS per bierstijl',
  description: 'Het TDS-profiel van brouwwater bepaalt de biersmaak. Leer welke TDS-waarde optimaal is per bierstijl en hoe je osmosewater instelt op het juiste profiel.',
  alternates: { canonical: 'https://waterfilterplatform.nl/brouwwater/tds-profiel' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is TDS en waarom is het belangrijk voor bier brouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDS staat voor Total Dissolved Solids: de totale hoeveelheid opgeloste ionen in water, gemeten in mg/L (of ppm). Een TDS-meter meet de elektrische geleidbaarheid van water en rekent dit om naar een mg/L-schatting. Voor brouwen is TDS een snel overzicht van de algehele mineralenbelasting van het water, maar het zegt niets over welke mineralen aanwezig zijn. Twee waters met hetzelfde TDS kunnen een compleet ander smaakeffect hebben op bier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk TDS is optimaal voor een IPA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een American IPA streef je naar een TDS van 200-350 mg/L, gedomineerd door sulfaat (150-250 mg/L SO42-) en calcium (80-120 mg/L Ca2+). Hoog sulfaat accentueert droogheid, bitterheid en hoparoma. Het TDS-getal alleen is minder relevant dan de mineraalsamenstelling: een TDS van 250 mg/L met veel bicarbonaat geeft een compleet ander, minder geschikt resultaat voor een IPA. Gebruik Brewfather voor exacte berekeningen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik de TDS van brouwwater meten met een gewone TDS-meter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een standaard TDS-pen (ook wel TDS-meter of EC-meter met TDS-modus) kost 10-30 euro en is voldoende voor brouwen. Meet het water na mineraaltoevoeging maar voor het verwarmen. De meting geeft een snelle controle: als de TDS ver afwijkt van jouw doelprofiel, heb je te veel of te weinig mineralen toegevoegd. Belangrijk: een TDS-meter meet geen pH. Gebruik een aparte pH-pen voor de maisch-pH-meting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom zegt TDS alleen niet genoeg over brouwwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TDS is de som van alle opgeloste ionen maar zegt niets over de samenstelling. Voorbeeld: water A met TDS 200 bestaat uit 200 mg/L sulfaat (SO42-) en geeft een droog, bitter, hop-forward bier. Water B met hetzelfde TDS 200 bestaat uit 200 mg/L bicarbonaat (HCO3-) en is alkalisch, verhoogt de maisch-pH en past bij donkere bieren. Mineraalsamenstelling, niet TDS-getal, bepaalt of water geschikt is voor jouw bierstijl.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereik ik de juiste TDS voor een Pilsener-lager?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pilsener-water is het zachtste brouwwater ter wereld: TDS onder 50 mg/L. Startpunt is osmosewater (TDS 5-15 mg/L). Voeg minimale hoeveelheden calcium toe (streefwaarde 30-50 mg/L Ca2+) voor basisenzymactiviteit, met een lichte voorkeur voor chloride boven sulfaat voor de kenmerkende zachte, ronde Pilsner-mondvoel. Houd sulfaat laag (minder dan 50 mg/L) en bicarbonaat laag (minder dan 30 mg/L). Resulterende TDS: 50-80 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen TDS en geleidingsvermogen (EC)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EC (elektrisch geleidingsvermogen) wordt gemeten in microsiemens per centimeter (uS/cm of mS/cm). TDS-meters meten eigenlijk EC en rekenen dit om naar mg/L via een conversiefactor (doorgaans 0,5 of 0,7 afhankelijk van het watertype). EC en TDS zijn proportioneel: hogere EC betekent hoger TDS. Voor brouwen zijn beide bruikbaar; de meeste brouwapps werken met mg/L (TDS-eenheden). Een EC van 500 uS/cm correspondeert ruwweg met TDS 250-350 mg/L afhankelijk van de conversiefactor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verlaag ik het TDS van kraanwater voor brouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest effectieve methode is omgekeerde osmose: een osmosefilter verwijdert 95-99% van alle opgeloste stoffen en verlaagt TDS van 300-500 mg/L naar 5-15 mg/L. Daarna remineraliseer je naar het gewenste profiel. Alternatieven: verdunnen met gedestilleerd water of osmosewater (50/50 mix halveert het TDS), of voor specifieke ionen (bicarbonaat) koken en bezinken laten. Koken verwijdert calciumcarbonaat maar niet sulfaat of chloride. Osmose is de meest complete en reproduceerbare methode.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'TDS-profiel voor brouwwater: de juiste TDS per bierstijl',
  description: 'Het TDS-profiel van brouwwater bepaalt de biersmaak. Leer welke TDS-waarde optimaal is per bierstijl en hoe je osmosewater instelt op het juiste profiel.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/brouwwater/tds-profiel',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function BrouwwaterTdsProfielPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Brouwwater', item: 'https://waterfilterplatform.nl/brouwwater' },
              { '@type': 'ListItem', position: 3, name: 'TDS-profiel brouwwater', item: 'https://waterfilterplatform.nl/brouwwater/tds-profiel' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/brouwwater" className="hover:underline">Brouwwater</Link> &rsaquo;{' '}
          <span>TDS-profiel brouwwater</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            TDS-profiel voor brouwwater: de juiste TDS per bierstijl
          </h1>
          <p className="text-[#005F8A] text-lg">
            TDS (Total Dissolved Solids) geeft een eerste indicatie van de mineralenbelasting van brouwwater,
            maar de mineraalsamenstelling telt meer dan het getal zelf.
            Leer hoe je TDS en profiel combineert voor het perfecte brouwwater.
          </p>
        </div>

        <QuickAnswer answer="TDS van brouwwater loopt typisch van 50 mg/L (Pilsner-zacht) tot 500 mg/L (Burton IPA-water). Maar TDS alleen zegt niets: twee waters met TDS 200 kunnen volledig different smaken als het ene sulfaat-dominant is en het andere bicarbonaat-dominant. Meet TDS voor een snel overzicht, maar stuur op mineraalsamenstelling." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is TDS en hoe meet je het?
        </h2>
        <p className="text-gray-700 mb-4">
          TDS staat voor Total Dissolved Solids: de totale concentratie van alle opgeloste ionen in water,
          uitgedrukt in mg/L of ppm (parts per million). Een TDS-meter meet in werkelijkheid de elektrische
          geleidbaarheid (EC) van het water en converteert dit naar een mg/L-schatting via een ingebouwde factor.
        </p>
        <p className="text-gray-700 mb-4">
          Voor brouwen is een goedkope TDS-pen (10-30 euro) een handige tool:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Meet het osmosewater na productie (controle: moet onder 15 mg/L blijven)</li>
          <li>Meet het maischwater na mineraaltoevoeging (vergelijk met doelprofiel)</li>
          <li>Signaleer versleten membraan wanneer osmosewater TDS boven 30 mg/L stijgt</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Belangrijk: een TDS-meter meet geen pH. Gebruik altijd een aparte pH-meter voor de maisch-pH.
          De TDS-meter geeft een totaalcijfer; voor de samenstelling vertrouw je op je brouwwatercalculator.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom TDS alleen niet volstaat
        </h2>
        <p className="text-gray-700 mb-4">
          Overweeg twee waters, elk met TDS = 200 mg/L:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-2">Water A &mdash; TDS 200, sulfaat-dominant</p>
            <p className="text-gray-700 text-sm mb-1">
              Samenstelling: Ca2+ 70 mg/L, SO4 2- 200 mg/L, Cl- 30 mg/L
            </p>
            <p className="text-gray-700 text-sm">
              Effect: droog, bitter, scherpe hopfinish. Ideaal voor IPA en Pale Ale.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-2">Water B &mdash; TDS 200, bicarbonaat-dominant</p>
            <p className="text-gray-700 text-sm mb-1">
              Samenstelling: Ca2+ 50 mg/L, HCO3- 200 mg/L, Cl- 30 mg/L
            </p>
            <p className="text-gray-700 text-sm">
              Effect: alkalisch, verhoogt maisch-pH, past bij donkere mouten. Ideaal voor Stout en Porter.
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Hetzelfde TDS-getal, compleet andere toepassingen. TDS is een snelle sanity check, geen smaakgarantie.
          De mineraalsamenstelling &mdash; en specifiek de sulfaat/chloride-verhouding en het bicarbonaatniveau &mdash;
          bepaalt of het water geschikt is voor jouw bierstijl.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS-richtwaarden per biercategorie
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Categorie</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">TDS-bereik</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Dominant ion</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bierstijl</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Zeer licht</td>
                <td className="border border-gray-300 px-3 py-2">50-100 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Ca2+ + Cl-</td>
                <td className="border border-gray-300 px-3 py-2">Czech Pils, Helles</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Licht-matig</td>
                <td className="border border-gray-300 px-3 py-2">100-200 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">Ca2+ + SO4 2- + Cl-</td>
                <td className="border border-gray-300 px-3 py-2">Kolsch, Wit, Saison</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Matig</td>
                <td className="border border-gray-300 px-3 py-2">150-300 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">SO4 2- dominant</td>
                <td className="border border-gray-300 px-3 py-2">IPA, APA, Pale Ale</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Hoog sulfaat</td>
                <td className="border border-gray-300 px-3 py-2">300-500 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">SO4 2- hoog</td>
                <td className="border border-gray-300 px-3 py-2">Burton IPA, DIPA</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Hoog bicarbonaat</td>
                <td className="border border-gray-300 px-3 py-2">200-400 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">HCO3- hoog</td>
                <td className="border border-gray-300 px-3 py-2">Stout, Porter, Dunkles</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS van brouwwater versus TDS van eindbier
        </h2>
        <p className="text-gray-700 mb-4">
          Het TDS van je brouwwater is niet hetzelfde als het TDS van het eindproduct.
          Tijdens het brouwen worden ionen uit mout en hop onttrokken en komen ze in het wort.
          Zetmeel wordt omgezet in suikers, die na vergisting verdwijnen als alcohol en CO2.
        </p>
        <p className="text-gray-700 mb-6">
          Het TDS van afgewerkt bier is daardoor hoger dan het TDS van het gebruikte brouwwater.
          Brouwapps zoals Brewfather berekenen het brouwwater-TDS (het startpunt) en niet het eindbier-TDS.
          Als brouwer stuur je op het brouwwater-TDS en de mineraalsamenstelling; de rest volgt uit het recept.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe je het juiste TDS-profiel instelt met osmosewater
        </h2>
        <p className="text-gray-700 mb-4">
          Osmosewater geeft je een TDS van 5-15 mg/L als startpunt. Vanuit daar bouw je het profiel op:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            Bepaal de bierstijl en zoek het bijbehorende waterprofiel op (in Brewfather of de BJCP-richtlijnen)
          </li>
          <li>
            Voer het doelprofiel in de brouwwatercalculator in, met osmosewater (alles nul) als startwater
          </li>
          <li>
            Voeg de berekende hoeveelheden mineraalzouten toe aan het maischwater
          </li>
          <li>
            Meet het TDS na toevoeging ter verificatie en vergelijk met het verwachte TDS uit de calculator
          </li>
          <li>
            Meet de maisch-pH na 10 minuten en stuur bij met zuur indien nodig
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Meer over de specifieke mineraalzouten en doseringen vind je in de gids over{' '}
          <Link href="/brouwwater/remineraliseren" className="text-[#005F8A] underline">brouwwater remineraliseren</Link>.
          Voor de basis van brouwwater en historische profielen zie{' '}
          <Link href="/brouwwater" className="text-[#005F8A] underline">de complete brouwwatergids</Link>.
          Voor meer over het osmosefilter zelf, lees{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          TDS meten: praktische tips
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Kalibreer de TDS-meter:</strong> gebruik gedistilleerd water (TDS 0) voor nulkalibratie.
            Goedkope pennen kunnen driften; kalibreer maandelijks bij intensief gebruik
          </li>
          <li>
            <strong>Meet bij kamertemperatuur:</strong> TDS-meters compenseren deels voor temperatuur,
            maar meten bij 20-25 graden Celsius geeft de meest consistente resultaten
          </li>
          <li>
            <strong>Spoel de elektroden:</strong> spoel voor en na elke meting met het te meten water
            om kruisbesmetting te voorkomen
          </li>
          <li>
            <strong>TDS osmosefilter-controle:</strong> meting van het osmosewater boven 30 mg/L is een
            signaal dat het membraan vervangen moet worden
          </li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over TDS en brouwwater</h2>
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
          <Link href="/brouwwater" className="text-[#005F8A] underline">brouwwater gids</Link>,{' '}
          <Link href="/brouwwater/remineraliseren" className="text-[#005F8A] underline">remineraliseren</Link> en{' '}
          <Link href="/brouwwater/osmose" className="text-[#005F8A] underline">osmosewater voor brouwen</Link>.
        </p>
      </main>
    </>
  );
}
