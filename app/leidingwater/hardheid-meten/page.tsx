import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterhardheid meten: TDS-meter, druppeltest en meetstrips vergelijken',
  description:
    'Waterhardheid meten kan met een TDS-meter (indicatief), een druppeltest (nauwkeurig) of teststrips (snel maar minder precies). Hardheid in dH, GH of mg/L.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/hardheid-meten' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan ik een TDS-meter gebruiken om waterhardheid te meten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een TDS-meter geeft een indicatieve schatting van de waterhardheid, maar meet niet direct hardheid. In Nederlands leidingwater bestaat 70-80% van het TDS uit hardheid-gerelateerde ionen (calcium, magnesium, bicarbonaat). Een ruwe conversie is: TDS in mg/L gedeeld door 17,5 geeft een geschatte waterhardheid in dH. De afwijking is 20-30%. Voor nauwkeurige hardheidsmeting is een druppeltest (EDTA-titratie) beter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen dH, GH, mmol/L en ppm voor waterhardheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle eenheden drukken waterhardheid uit maar met andere schalen. Omrekening: 1 dH (Duitse graad) = 0,179 mmol/L = 17,8 mg/L CaCO3 = 17,8 ppm. GH (general hardness) is dezelfde meting als dH maar wordt vooral in de aquariumwereld gebruikt. Ppm in watercontext is gelijk aan mg/L CaCO3. Veel Nederlandse watermaatschappijen rapporteren hardheid in mmol/L of mg/L calcium.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe nauwkeurig is een druppeltest voor waterhardheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een druppeltest (EDTA-titratie) is de nauwkeurigste thuismethode voor hardheidsmeting, met een nauwkeurigheid van +/- 1 dH. Testsets zijn verkrijgbaar bij aquariumwinkels en online (merken zoals JBL, Salifert, Aquamerck) voor 5-15 euro. De werkwijze: voeg een indicator toe aan een watermonster, druppel de titratie-oplossing druppelsgewijs toe en tel het aantal druppels tot de kleur verandert. Elke druppel vertegenwoordigt een vaste hardheidseenheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe hard is leidingwater in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De waterhardheid in Nederland varieert sterk per regio. Zachter water: Amsterdam (6-8 dH, water van het IJmeer en Rijn), Rotterdam (7-10 dH). Hard water: Brabant en Limburg (15-25 dH, grondwater uit kalkrijke bodem). Zeeland (10-18 dH). Uw watermaatschappij publiceert de actuele hardheid per levergebied op hun website. Kijk op de website van Vitens, Evides, PWN of Brabant Water voor uw specifieke postcode.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom moet ik de waterhardheid meten na installatie van een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na installatie van een waterontharder is meting noodzakelijk om te verifiëren dat het systeem correct werkt en de gewenste uitvoerhardheid levert. Doel is doorgaans 4-8 dH (bij mengklep) of 0-2 dH voor volledig onthard water. Regelmatige controle (maandelijks) helpt om harsuitputting te detecteren voordat het systeem stopt met ontharderen. Bij een osmosefilter is de uitvoer doorgaans 0-2 dH.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn teststrips nauwkeurig genoeg voor waterontharder-instelling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teststrips voor waterhardheid zijn snel (30 seconden) en goedkoop (5-10 euro per 50 strips), maar hebben een nauwkeurigheid van slechts +/- 2-5 dH. Dit is voldoende voor een globale indicatie maar te onnauwkeurig voor het nauwkeurig instellen van een waterontharder of osmosefilter. Voor instelling en regelmatige controle gebruikt u beter een druppeltest (+/- 1 dH) of een geijkte hardheidsmeter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de juiste waterhardheid voor een aquarium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De optimale waterhardheid voor een aquarium hangt af van de vissen en planten. Zachte water vissen (discus, neonterra): 2-8 dH GH, 1-4 dH KH. Cichliden uit het Afrikaanse Rift-meer: 15-25 dH GH. Goudvissen en koikarpers: 10-20 dH. Gebruik GH-testsets (aquariumwinkel) voor nauwkeurige meting. Osmosewater (0-2 dH) kan worden gemengd met leidingwater of gemineraliseerd om de gewenste hardheid te bereiken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke methode is het meest betrouwbaar voor het meten van waterhardheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor thuisgebruik is de druppeltest (EDTA-titratie) de meest nauwkeurige methode (+/- 1 dH). Voor professionele of referentiemetingen is laboratoriumanalyse door een geaccrediteerd lab de gouden standaard; dit geeft ook calcium en magnesium afzonderlijk in mg/L. Een TDS-meter is indicatief maar niet specifiek voor hardheid. Teststrips zijn het minst nauwkeurig. Uw watermaatschappij publiceert ook actuele hardheidscijfers op hun website.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterhardheid meten: TDS-meter, druppeltest en meetstrips vergelijken',
  description:
    'Waterhardheid meten kan met een TDS-meter (indicatief), een druppeltest (nauwkeurig) of teststrips (snel maar minder precies). Hardheid in dH, GH of mg/L.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/hardheid-meten',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterhardheidMetenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Waterhardheid meten', item: 'https://waterfilterplatform.nl/leidingwater/hardheid-meten' },
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
          <span>Waterhardheid meten</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterhardheid meten: TDS-meter, druppeltest en meetstrips vergelijken
          </h1>
          <p className="text-[#005F8A] text-lg">
            Waterhardheid kunt u thuis meten met een TDS-meter (indicatief, 10-25 euro), een
            druppeltest of EDTA-titratie (nauwkeurig, +/- 1 dH) of hardheidsteststrips (snel maar
            minder precies). Op deze pagina vergelijken wij alle methoden, leggen wij de eenheden
            (dH, GH, mmol/L, ppm) uit en geven wij omrekeningsformules.
          </p>
        </section>

        <QuickAnswer answer="Waterhardheid meten: TDS-meter geeft ruwe schatting (TDS / 17,5 = geschatte dH), druppeltest is nauwkeurigst (+/- 1 dH, 5-15 euro), teststrips zijn snel maar onnauwkeurig (+/- 2-5 dH). Eenheden: 1 dH = 17,8 mg/L CaCO3 = 0,179 mmol/L. Zacht water: onder 7 dH. Hard water: boven 14 dH." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom waterhardheid meten?
        </h2>
        <p className="text-gray-700 mb-4">
          De waterhardheid van uw leidingwater is relevant voor meerdere toepassingen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Waterontharder of osmosefilter aanschaffen:</strong> om te beoordelen of
            aanschaf zinvol is en welke capaciteit benodigd is, moet u weten hoe hard uw
            leidingwater is. Zacht water (minder dan 7 dH) heeft doorgaans geen ontharder nodig
          </li>
          <li>
            <strong>Waterontharder instellen en controleren:</strong> na installatie meet u de
            uitvoerhardheid om het systeem correct af te stellen. Regelmatige controle detecteert
            harsuitputting tijdig
          </li>
          <li>
            <strong>Aquarium parameters controleren:</strong> voor zoetwater- en zoutwateraquaria
            zijn specifieke GH en KH (koolzuurhardheid) waarden vereist afhankelijk van de
            vissoorten en planten
          </li>
          <li>
            <strong>Brouwen en koffiezetten:</strong> bierbrouwen vereist specifieke
            waterprofielen per bierstijl. Koffiekwaliteit wordt beinvloed door waterhardheid;
            te hard water (boven 14 dH) geeft bittere extractie, te zacht water (onder 4 dH)
            geeft smaakloze koffie
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Eenheden voor waterhardheid: dH, GH, mmol/L, ppm en mg/L CaCO3
        </h2>
        <p className="text-gray-700 mb-4">
          Waterhardheid wordt wereldwijd in verschillende eenheden uitgedrukt. Dit kan verwarrend
          zijn. Hier is een overzicht:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eenheid</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Naam</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Waarde t.o.v. 1 dH</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Gebruik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">dH</td>
                <td className="border border-gray-300 px-3 py-2">Duitse graden</td>
                <td className="border border-gray-300 px-3 py-2">1 dH (referentie)</td>
                <td className="border border-gray-300 px-3 py-2">Duitsland, NL waterontharders</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">GH</td>
                <td className="border border-gray-300 px-3 py-2">General Hardness</td>
                <td className="border border-gray-300 px-3 py-2">= dH (zelfde schaal)</td>
                <td className="border border-gray-300 px-3 py-2">Aquariumwereld</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">mmol/L</td>
                <td className="border border-gray-300 px-3 py-2">SI-eenheid</td>
                <td className="border border-gray-300 px-3 py-2">0,179 mmol/L</td>
                <td className="border border-gray-300 px-3 py-2">Wetenschappelijk, NL watermaatschappijen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">mg/L CaCO3</td>
                <td className="border border-gray-300 px-3 py-2">Brits/Amerikaans</td>
                <td className="border border-gray-300 px-3 py-2">17,8 mg/L CaCO3</td>
                <td className="border border-gray-300 px-3 py-2">VS, VK, internationaal</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">ppm</td>
                <td className="border border-gray-300 px-3 py-2">Parts per million</td>
                <td className="border border-gray-300 px-3 py-2">17,8 ppm</td>
                <td className="border border-gray-300 px-3 py-2">= mg/L CaCO3 in water</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          <strong>Omrekeningsformule:</strong> dH &times; 17,8 = mg/L CaCO3 = ppm.
          dH &times; 0,179 = mmol/L. Voorbeeld: 15 dH = 267 mg/L CaCO3 = 267 ppm = 2,69 mmol/L.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Classificatie van waterhardheid
        </h2>
        <p className="text-gray-700 mb-4">
          Waterhardheid wordt ingedeeld in klassen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Minder dan 7 dH:</strong> zacht water. Weinig kalkvorming, zeep schuimt goed</li>
          <li><strong>7-14 dH:</strong> matig hard water. Lichte kalkaanslag zichtbaar bij waterkoker</li>
          <li><strong>14-21 dH:</strong> hard water. Duidelijke kalkvorming, waterontharder zinvol</li>
          <li><strong>Meer dan 21 dH:</strong> zeer hard water. Significante kalkaanslag, hogere zeepverbruik</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Methode 1: TDS-meter (indicatief)
        </h2>
        <p className="text-gray-700 mb-4">
          Een TDS-meter (Total Dissolved Solids) meet de elektrische geleidbaarheid van water en
          vertaalt dit naar een mg/L-waarde voor alle opgeloste stoffen. Het apparaat meet niet
          specifiek calcium en magnesium maar geeft een indicatie.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Conversie voor Nederlands leidingwater:</strong> TDS (mg/L) / 17,5 = geschatte
          dH. Waarom 17,5? In Nederlands leidingwater bestaat gemiddeld 70-80% van het TDS uit
          hardheid-gerelateerde ionen (Ca2+, Mg2+, HCO3-). De factor 17,5 is een gemiddelde
          kalibratie voor deze watersamenstelling.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Nauwkeurigheid:</strong> afwijking 20-30% ten opzichte van werkelijke hardheid</li>
          <li><strong>Prijs:</strong> 10-25 euro voor een betrouwbare pocket TDS-meter</li>
          <li>
            <strong>Geschikt voor:</strong> eerste orientatie, monitoring na osmosefilterinstallatie
            (controle of TDS laag blijft), niet voor nauwkeurige hardheidsbepaling
          </li>
          <li>
            <strong>Niet geschikt voor:</strong> nauwkeurig instellen van waterontharder,
            aquariumparameters controleren
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Methode 2: druppeltest (EDTA-titratie) - meest nauwkeurig
        </h2>
        <p className="text-gray-700 mb-4">
          De druppeltest, ook wel EDTA-titratiemethode, is de nauwkeurigste methode voor
          thuisgebruik. EDTA (ethyleendiaminetetra-azijnzuur) bindt selectief aan calcium- en
          magnesiumionen. Door titratie kan de exacte concentratie worden bepaald.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Werkwijze:</strong>
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>Neem een watermonster van de aanbevolen hoeveelheid (doorgaans 5 of 10 mL)</li>
          <li>Voeg de bufferoplossing en indicator toe (kleurt rood of roze)</li>
          <li>Druppel de titratie-oplossing toe, druppel voor druppel, en schud na elke druppel</li>
          <li>Tel het aantal druppels tot de kleur verandert van rood naar blauw of groen</li>
          <li>Elke druppel vertegenwoordigt een vaste hardheidseenheid (doorgaans 1 dH per druppel)</li>
        </ol>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Nauwkeurigheid:</strong> +/- 1 dH</li>
          <li><strong>Prijs:</strong> 5-15 euro voor een testset (JBL, Salifert, Aquamerck, Sera)</li>
          <li><strong>Geschikt voor:</strong> nauwkeurige hardheidsbepaling, waterontharder instellen, aquarium parameters</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Methode 3: teststrips (snel, minder precies)
        </h2>
        <p className="text-gray-700 mb-4">
          Hardheidsteststrips zijn strips met chemische reagentia die van kleur veranderen bij
          contact met water. De kleur wordt vergeleken met een referentiekaart.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Snelheid:</strong> resultaat in 30 seconden</li>
          <li><strong>Nauwkeurigheid:</strong> +/- 2-5 dH (te onnauwkeurig voor precieze instelling)</li>
          <li><strong>Prijs:</strong> 5-10 euro per 50 strips</li>
          <li>
            <strong>Geschikt voor:</strong> snelle globale check van leidingwater, reizen,
            eerste orientatie
          </li>
          <li>
            <strong>Niet geschikt voor:</strong> nauwkeurig instellen van waterontharder of
            osmosefilter, aquariumparameters waarbij 1-2 dH verschil relevant is
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid opzoeken via uw watermaatschappij
        </h2>
        <p className="text-gray-700 mb-4">
          De eenvoudigste manier om uw waterhardheid te weten is de website van uw
          watermaatschappij. Alle Nederlandse drinkwaterbedrijven publiceren actuele
          hardheidscijfers per levergebied:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Vitens</strong> (Midden- en Oost-Nederland): hardheid per postcode op vitens.nl</li>
          <li><strong>Evides</strong> (Zeeland, Zuid-Holland): waterinfo per postcode op evides.nl</li>
          <li><strong>PWN</strong> (Noord-Holland): hardheidskaart op pwn.nl</li>
          <li><strong>Brabant Water</strong> (Noord-Brabant): doorgaans 15-24 dH in grondwatergebieden</li>
          <li><strong>WML</strong> (Limburg): hardheid per gemeente op wml.nl</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Watermaatschappijen wisselen soms van waterbron (grondwater in de zomer, oppervlaktewater
          in de winter), waardoor de hardheid seizoensgebonden kan fluctueren. Testen geeft u de
          actuele waarde op het moment van meting. Lees ook meer over{' '}
          <Link href="/waterontharder/elektromagnetisch" className="text-[#005F8A] underline">elektromagnetische waterontharders</Link>{' '}
          als u overweegt uw harde water aan te pakken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hardheid van waterontharder-uitvoer controleren
        </h2>
        <p className="text-gray-700 mb-4">
          Na installatie van een waterontharder is regelmatige controle van de uitvoerhardheid
          essentieel. Doelwaarden afhankelijk van installatietype:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Ionenwisselaar (volledig onthard):</strong> 0-2 dH uitvoer.
            Via mengklep bijgemengd tot 4-8 dH voor leidingwatergebruik
          </li>
          <li>
            <strong>Osmosefilter:</strong> 0-2 dH uitvoer (vrijwel geen hardheid door het membraan)
          </li>
          <li>
            <strong>Gemengd water aan de kraan:</strong> 4-8 dH is het aanbevolen niveau;
            volledig zacht water (0 dH) kan agressief zijn voor leidingen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meting met een druppeltest maandelijks na installatie detecteert harsuitputting tijdig.
          Als de uitvoerhardheid stijgt boven 4 dH bij een ingestelde mengverhouding die eerder
          lagere waarden gaf, is regeneratie of harsvervangning nodig. Meer informatie over
          waterontharderonderhoud vindt u in onze vergelijking van{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">alle waterontharders</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid voor aquarium meten
        </h2>
        <p className="text-gray-700 mb-4">
          In de aquariumwereld zijn GH (general hardness) en KH (koolzuurhardheid, of carbonate
          hardness) de twee belangrijkste parameters. GH meet calcium en magnesium (totale
          hardheid). KH meet bicarbonaten en carbonaten (alkaliteit, pH-bufferend vermogen).
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Aanbevolen GH per vistype:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Zachtwater tropisch (discus, neontetra, corydoras):</strong> 2-8 dH GH</li>
          <li><strong>Algemene tropische vissen (guppy, mollies, platy):</strong> 8-16 dH GH</li>
          <li><strong>Cichliden uit Afrikaanse Rift-meren:</strong> 12-25 dH GH</li>
          <li><strong>Goudvissen en koikarpers:</strong> 10-20 dH GH</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor zachtwater vissen kunt u leidingwater mengen met water van een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
          (GH 0-1 dH) in de gewenste verhouding. Meet de GH van het mengsel met een druppeltest
          en pas de verhouding aan.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterhardheid/testen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid testen</h3>
              <p className="text-sm text-gray-600">Methoden en testkits om de hardheid van uw leidingwater te meten.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Calcium en magnesium: oorzaken van waterhardheid en effecten op gezondheid.</p>
            </Link>
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Werking van een waterontharder</h3>
              <p className="text-sm text-gray-600">Hoe een waterontharder kalkaanslag en hard water aanpakt.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp bij hard water</h3>
              <p className="text-sm text-gray-600">Vind de juiste oplossing voor hard water in uw situatie.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over het meten van waterhardheid
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
          <Link href="/waterontharder/elektromagnetisch" className="text-[#005F8A] underline">elektromagnetische waterontharder</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter voor zacht water</Link> en{' '}
          <Link href="/leidingwater" className="text-[#005F8A] underline">leidingwaterkwaliteit Nederland</Link>.
        </p>
      </main>
    </>
  );
}
