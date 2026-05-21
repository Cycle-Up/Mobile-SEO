import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Brouwwater voor bier: de complete gids voor homebrew water',
  description: 'Water is 95% van bier. Leer hoe je brouwwater samenstelt, welke mineralen je nodig hebt en waarom osmosewater de perfecte basis is voor elk bierstijl.',
  alternates: { canonical: 'https://waterfilterplatform.nl/brouwwater' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk water gebruik ik het beste voor bier brouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater is de beste basis voor thuisbrouwers omdat het een schone lei biedt met TDS onder 10 mg/L. Je voegt vervolgens exact de mineralen toe die jouw bierstijl vereist. Kraanwater kan ook, mits je de samenstelling kent en eventuele bicarbonaat neutraliseert. Bronwater of mineraalwater is ongeschikt omdat de samenstelling vast staat en niet aanpasbaar is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is osmosewater goed voor brouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Osmosewater heeft een TDS van slechts 5-15 mg/L en bevat vrijwel geen mineralen. Dit is ideaal als startpunt: je hebt volledige controle over de mineraalsamenstelling en kunt elk historisch brouwwaterprofiel nabootsen. Burton-on-Trent water voor een bitter ale, Pilsner-zacht water voor een lager, of Dublin-alkalisch water voor een stout — alles is mogelijk vanaf de schone basis van osmosewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke mineralen zijn het belangrijkst in brouwwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De zes kernmineralen voor brouwen zijn: calcium (Ca2+, enzymactiviteit en pH-verlaging, 50-150 mg/L), magnesium (Mg2+, gistvoeding, 0-30 mg/L), natrium (Na+, smaakversterker, 0-150 mg/L), chloride (Cl-, rondte en zoetheid, 0-250 mg/L), sulfaat (SO42-, droogheid en bitterheid, 0-400 mg/L) en bicarbonaat (HCO3-, pH-buffering, meestal verlagen tot 0-150 mg/L). Calcium en de verhouding chloride/sulfaat zijn doorgaans het meest bepalend voor de biersmaak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de ideale pH voor brouwwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De ideale maisch-pH ligt tussen 5,2 en 5,5. Dit is de pH van het maischwater tijdens het maischen, niet van het brouwwater zelf. Een goede maisch-pH bevordert enzymactiviteit (amylase, protease), verbetert klaring en geeft een schonere biersmaak. Het brouwwater zelf heeft vaak een hogere pH (6,5-8), maar calcium en zuren (melkzuur of zuringzuur) worden toegevoegd om de maisch-pH te verlagen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik kraanwater gebruiken om bier te brouwen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, kraanwater kan worden gebruikt, maar je moet de samenstelling kennen. Vraag een waterrapport op bij jouw drinkwaterbedrijf of gebruik een wateranalysekit. Hard kraanwater met veel bicarbonaat (boven 150 mg/L) is problematisch voor lichte bieren: het verhoogt de maisch-pH, wat enzymactiviteit verstoort en troebele, rauwe smaken geeft. Voor donkere bieren (stout, porter) tolereert het recept meer bicarbonaat. Osmosewater is eenvoudiger en meer reproduceerbaar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen Burton- en Pilsner-water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Burton-on-Trent water is extreem sulfaatrijk (tot 800 mg/L SO42-) met hoog calcium, wat bitterheid en drooge afwerking accentueert — ideaal voor India Pale Ales en bitter ales. Pilsner-water uit Pilsen (Tsjechie) is het tegenovergestelde: uitzonderlijk zacht met TDS onder 50 mg/L, vrijwel mineraalvrij. Dit zachte water maakt de zachte, ronde, hopige smaken van een Bohemian Pilsner mogelijk. Twee extremen van het brouwwaterspectrum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe beinvloeden sulfaat en chloride de biersmaak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sulfaat (SO42-) accentueert droogheid, bitterheid en hoparoma. Hoge sulfaatwaarden (200-400 mg/L) maken een IPA scherper en droger. Chloride (Cl-) bevordert rondte, zoetheid en moutkarakter. Een hoge chloride/sulfaat-verhouding (Cl/SO4 groter dan 1) geeft een malt-forward, volle, zachte bier. Een lage verhouding (Cl/SO4 kleiner dan 1) maakt een hop-forward, droog, bitter bier. Het aanpassen van deze verhouding is een van de krachtigste tools voor de thuisbrouwer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik mijn brouwwater testen voor ik begin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij gebruik van osmosewater is testen minder kritiek — de TDS is sowieso laag en je bouwt het profiel zelf op. Bij kraanwater is testen sterk aanbevolen. Vraag gratis een waterrapport op bij jouw waterbedrijf (vewin.nl biedt een overzicht per regio). Alternatiief: gebruik een TDS-meter (circa 15 euro) voor een grove indicatie, of koop een professionele brouwwateranalyse. Apps zoals Brewfather en Bru\'n Water berekenen op basis van jouw waterrapport wat je moet toevoegen of neutraliseren.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Brouwwater voor bier: de complete gids voor homebrew water',
  description: 'Water is 95% van bier. Leer hoe je brouwwater samenstelt, welke mineralen je nodig hebt en waarom osmosewater de perfecte basis is voor elk bierstijl.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/brouwwater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function BrouwwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Brouwwater', item: 'https://waterfilterplatform.nl/brouwwater' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <span>Brouwwater</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Brouwwater voor bier: de complete gids voor homebrew water
          </h1>
          <p className="text-[#005F8A] text-lg">
            Water is 90-95% van bier. De mineraalsamenstelling beinvloedt smaak, enzymactiviteit, pH en klaring.
            Leer welke mineralen je nodig hebt en waarom osmosewater de perfecte basis is.
          </p>
        </div>

        <QuickAnswer answer="Brouwwater bepaalt voor 90-95% de samenstelling van bier. Calcium, sulfaat en chloride sturen pH, bitterheid en rondte. Osmosewater (TDS onder 10 mg/L) is de ideale basis: volledig aanpasbaar naar elk historisch brouwprofiel. Voeg mineraalzouten toe voor jouw bierstijl en corrigeer de maisch-pH naar 5,2-5,5." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Water is de belangrijkste grondstof voor bier
        </h2>
        <p className="text-gray-700 mb-4">
          Bier bestaat voor 90 tot 95 procent uit water. De overige ingredienten — mout, hop, gist — bepalen het karakter,
          maar water bepaalt de structuur. De mineraalsamenstelling van brouwwater beinvloedt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Enzymactiviteit:</strong> calcium activeert amylase- en proteaseenzymen die zetmeel omzetten in vergistbare suikers</li>
          <li><strong>Maisch-pH:</strong> de juiste pH (5,2-5,5) is essentieel voor optimale enzymwerking en bierklaring</li>
          <li><strong>Smaakprofiel:</strong> sulfaat accentueert bitterheid en droogheid; chloride bevordert rondte en zoetheid</li>
          <li><strong>Gistgezondheid:</strong> magnesium is een cofactor voor gistmetabolisme</li>
          <li><strong>Klaring:</strong> calcium helpt eiwitten en tannines te precipiteren voor een helder eindproduct</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Historische brouwsteden en hun water
        </h2>
        <p className="text-gray-700 mb-4">
          De grote brouwtradities van Europa ontstonden niet toevallig op hun specifieke locaties.
          Het lokale water bepaalde welke bierstijlen succesvol waren:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Stad</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Waterprofiel</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bekende bierstijl</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Burton-on-Trent (UK)</td>
                <td className="border border-gray-300 px-3 py-2">Extreem sulfaatrijk (SO4 tot 800 mg/L), hoog calcium</td>
                <td className="border border-gray-300 px-3 py-2">Bitter Ale, India Pale Ale</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Pilsen (CZ)</td>
                <td className="border border-gray-300 px-3 py-2">Bijna mineraalvrij, TDS onder 50 mg/L, uitzonderlijk zacht</td>
                <td className="border border-gray-300 px-3 py-2">Bohemian Pilsner, Lager</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Dublin (IE)</td>
                <td className="border border-gray-300 px-3 py-2">Hoog bicarbonaat (HCO3 circa 300 mg/L), matig sulfaat</td>
                <td className="border border-gray-300 px-3 py-2">Irish Stout, Porter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Munchen (DE)</td>
                <td className="border border-gray-300 px-3 py-2">Matig hard, hoog calcium en bicarbonaat</td>
                <td className="border border-gray-300 px-3 py-2">Marzen, Dunkel, Helles</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Edinburgh (UK)</td>
                <td className="border border-gray-300 px-3 py-2">Hard, mineraalrijk, hoog calcium en sulfaat</td>
                <td className="border border-gray-300 px-3 py-2">Scottish Ale, Heavy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-6">
          Dankzij osmosewater en remineralisatie kan een thuisbrouwer in Amsterdam exact het Burton-water nabootsen
          voor een traditionele IPA, of het zachte Pilsner-profiel recreeren voor een authentieke lager.
          Zie onze gids over <Link href="/brouwwater/remineraliseren" className="text-[#005F8A] underline">brouwwater remineraliseren</Link> voor stap-voor-stap doseringen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De zes kernmineralen voor brouwwater
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Mineraal</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Ion</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Rol in brouwen</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Normaal bereik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Calcium</td>
                <td className="border border-gray-300 px-3 py-2">Ca2+</td>
                <td className="border border-gray-300 px-3 py-2">Enzymactiviteit, pH-verlaging, klaring</td>
                <td className="border border-gray-300 px-3 py-2">50-150 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Magnesium</td>
                <td className="border border-gray-300 px-3 py-2">Mg2+</td>
                <td className="border border-gray-300 px-3 py-2">Gistvoeding, pekelachtige smaak bij overmaat</td>
                <td className="border border-gray-300 px-3 py-2">0-30 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Natrium</td>
                <td className="border border-gray-300 px-3 py-2">Na+</td>
                <td className="border border-gray-300 px-3 py-2">Zoetheid versterker bij laag niveau</td>
                <td className="border border-gray-300 px-3 py-2">0-150 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Chloride</td>
                <td className="border border-gray-300 px-3 py-2">Cl-</td>
                <td className="border border-gray-300 px-3 py-2">Rondte, zoetheid, moutkarakter</td>
                <td className="border border-gray-300 px-3 py-2">0-250 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sulfaat</td>
                <td className="border border-gray-300 px-3 py-2">SO4 2-</td>
                <td className="border border-gray-300 px-3 py-2">Droogheid, bitterheid, hoparomenversterker</td>
                <td className="border border-gray-300 px-3 py-2">0-400 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Bicarbonaat</td>
                <td className="border border-gray-300 px-3 py-2">HCO3-</td>
                <td className="border border-gray-300 px-3 py-2">pH-buffering, alkaliteit (meestal verlagen)</td>
                <td className="border border-gray-300 px-3 py-2">0-150 mg/L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom osmosewater de perfecte basis is
        </h2>
        <p className="text-gray-700 mb-4">
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">Omgekeerde osmose</Link> produceert water met een TDS van
          slechts 5-15 mg/L. Dit is de ideale schone lei voor brouwwater om drie redenen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Volledige controle:</strong> je weet precies wat erin zit (vrijwel niets) en kunt exact
            de mineralen toevoegen die jouw recept vereist
          </li>
          <li>
            <strong>Reproductie van elk historisch profiel:</strong> van Pilsner-zacht tot Burton-sulfaatrijk,
            alles is nabootsbaar vanuit een schone basis
          </li>
          <li>
            <strong>Geen bicarbonaat-probleem:</strong> kraanwater bevat vaak 100-300 mg/L bicarbonaat
            dat de maisch-pH verhoogt; osmosewater heeft dit probleem niet
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Het enige nadeel: osmosewater is te puur om direct te gebruiken. Mineralen zoals calcium zijn
          essentieel voor enzymactiviteit en gistgezondheid. Zie onze gedetailleerde gids over{' '}
          <Link href="/brouwwater/osmose" className="text-[#005F8A] underline">osmosewater voor bier brouwen</Link>{' '}
          voor installatie, capaciteit en onderhoud.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De chloride/sulfaat-verhouding: de smaakschakelaar
        </h2>
        <p className="text-gray-700 mb-4">
          De verhouding tussen chloride en sulfaat is een van de krachtigste knoppen voor de brouwer:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-2">Cl/SO4 &lt; 1 (sulfaat dominant)</p>
            <p className="text-gray-700 text-sm">Hop-forward bier: droger, bitterder, scherpere hopfinish. Ideaal voor IPA, Pale Ale, Bitter.</p>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-2">Cl/SO4 &gt; 1 (chloride dominant)</p>
            <p className="text-gray-700 text-sm">Malt-forward bier: voller, ronder, zachter, meer moutkarakter. Ideaal voor Stout, Wit, Lager.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gerelateerde brouwwater-gidsen
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <Link href="/brouwwater/osmose" className="text-[#005F8A] underline">
              Osmosewater voor bier brouwen
            </Link>{' '}
            &mdash; installatie, capaciteit en TDS-waarden
          </li>
          <li>
            <Link href="/brouwwater/remineraliseren" className="text-[#005F8A] underline">
              Brouwwater remineraliseren
            </Link>{' '}
            &mdash; mineraalzouten, doseringen en waterprofielen per bierstijl
          </li>
          <li>
            <Link href="/brouwwater/tds-profiel" className="text-[#005F8A] underline">
              TDS-profiel brouwwater
            </Link>{' '}
            &mdash; welk TDS is optimaal per biercategorie
          </li>
          <li>
            <Link href="/osmose-water" className="text-[#005F8A] underline">
              Osmosewater uitleg
            </Link>{' '}
            &mdash; alles over de eigenschappen van osmosewater
          </li>
        </ul>

        <CTABanner context="osmose" />

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterhardheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterhardheid</p>
              <p className="text-sm text-gray-600">Hardheid per gemeente en hoe dit de smaak en schuimvorming van bier beinvloedt.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</p>
              <p className="text-sm text-gray-600">RO als startpunt voor brouwwater: nagenoeg mineraalvrij en volledig controleerbaar.</p>
            </Link>
            <Link href="/waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Waterfilter vergelijken</p>
              <p className="text-sm text-gray-600">Welk filter past bij uw brouwerij: van actief koolfilter tot osmosefilter.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in water</p>
              <p className="text-sm text-gray-600">Calcium, magnesium en bicarbonaat: hun rol in brouwwater en smaakprofiel.</p>
            </Link>
          </div>
        </section>

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over brouwwater</h2>
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>,{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosewater</Link> en{' '}
          <Link href="/brouwwater/remineraliseren" className="text-[#005F8A] underline">brouwwater remineraliseren</Link>.
        </p>
      </main>
    </>
  );
}
