import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Brouwwater remineraliseren: mineralen toevoegen aan osmosewater',
  description: 'Remineraliseer osmosewater voor bier brouwen door calcium, magnesium, sulfaat en chloride toe te voegen. Stap-voor-stap gids met doseringen voor populaire.',
  alternates: { canonical: 'https://waterfilterplatform.nl/brouwwater/remineraliseren' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke mineralen moet ik toevoegen aan osmosewater voor bier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De vier basiszouten voor remineralisatie zijn: calciumchloride (CaCl2) voor calcium en chloride, calciumsulfaat/gips (CaSO4) voor calcium en sulfaat, magnesiumsulfaat/Epsom-zout (MgSO4) voor magnesium en extra sulfaat, en natriumchloride (NaCl) voor natrium en chloride. Welke combinatie je gebruikt hangt af van de bierstijl: een IPA vraagt meer sulfaat (gips), een stout meer chloride en bicarbonaat. pH-correctie gebeurt met melkzuur of zuringzuur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereken ik hoeveel mineralen ik nodig heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gebruik een brouwwater-calculator: Brewfather (app, gratis basisplan), Bru\'n Water (Excel-spreadsheet, gratis) of EZ Water Calculator (online, gratis). Je voert in: volume brouwwater, doelwaterprofiel (of bierstijl), en huidig waterprofiel (voor osmosewater: alles op 0). De calculator geeft exacte grammen per zout. Alternatief: gebruik de vuistregel 1 g CaCl2 per 10L geeft circa 72 mg/L Ca2+ en 127 mg/L Cl-.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen calciumchloride en calciumsulfaat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beide leveren calcium, maar het tweede ion verschilt: calciumchloride (CaCl2) geeft chloride (Cl-) dat rondte, zoetheid en moutkarakter bevordert. Calciumsulfaat/gips (CaSO4) geeft sulfaat (SO42-) dat droogheid, bitterheid en hoparoma accentueert. Voor een malt-forward bier (stout, lager) gebruik je meer calciumchloride. Voor een hop-forward bier (IPA, pale ale) gebruik je meer calciumsulfaat. De verhouding Cl/SO4 stuurt het smaakprofiel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verlaag ik de pH van mijn maischwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest gebruikte methoden zijn: (1) melkzuur (88% oplossing) in dosis van 0,5-2 mL per 10 liter, geeft lichte melkachtige noot bij overdosering maar is gemakkelijk te doseren; (2) zuringzuur/fosforzuur in vergelijkbare dosis, smaaksneutraler; (3) sauermalz (zuurmout) als ingredientvervanger, 1-5% van de maischgrain bill. Meet de maisch-pH 10-15 minuten na het inmaischen wanneer de enzymen actief zijn. Streefwaarde: 5,2-5,5.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik gewoon keukenzout gebruiken voor brouwwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, keukenzout (NaCl) is een legitiem brouwzout voor het toevoegen van natrium en chloride. Het versterkt zoetheid en moutkarakter. Gebruik het echter met mate: meer dan 150 mg/L natrium geeft een zilte, pekelachtige smaak. Gejodeerd keukenzout is ongeschikt omdat jodium gistgroei kan remmen. Gebruik niet-gejodeerd zeezout of brouwspecifiek NaCl. Dosering: 0,3-1 gram per 10 liter is doorgaans voldoende.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke volgorde voeg ik mineralen toe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los elk zout apart op in een kleine hoeveelheid warm water (circa 50-100 mL) voor je ze toevoegt, zodat ze volledig oplossen en je kunt controleren op precipitatie. Voeg de mineraaloplossingen toe aan het koude maischwater, nog voor het opwarmen. Na toevoeging goed roeren en de pH meten. Voeg zuren (melkzuur) toe na de mineralen. Voeg mineralen NOOIT toe aan heet wort: calciumsulfaat kan precipiteren bij hoge temperaturen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke app helpt mij bij het berekenen van brouwwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Brewfather is de meest gebruikte all-in-one brouw-app (iOS en Android, gratis basisplan) met een geintegreerde watercalculator. Je voert jouw wateranalyse in en de app berekent automatisch mineralentoevoeging voor elk opgeslagen recept. Bru\'n Water is een gratis Excel-spreadsheet van Martin Brungard, de meest uitgebreide tool voor gevorderden. EZ Water Calculator (online) is de toegankelijkste optie voor beginners. Alle drie ondersteunen osmosewater als startpunt.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Brouwwater remineraliseren: mineralen toevoegen aan osmosewater',
  description: 'Remineraliseer osmosewater voor bier brouwen door calcium, magnesium, sulfaat en chloride toe te voegen. Stap-voor-stap gids met doseringen voor populaire.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/brouwwater/remineraliseren',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function BrouwwaterRemineraliserenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Brouwwater', item: 'https://waterfilterplatform.nl/brouwwater' },
              { '@type': 'ListItem', position: 3, name: 'Brouwwater remineraliseren', item: 'https://waterfilterplatform.nl/brouwwater/remineraliseren' },
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
          <span>Brouwwater remineraliseren</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Brouwwater remineraliseren: mineralen toevoegen aan osmosewater
          </h1>
          <p className="text-[#005F8A] text-lg">
            Osmosewater is de schoonste brouwwaterbasis, maar te puur voor direct gebruik.
            Leer welke mineraalzouten je toevoegt, in welke hoeveelheden, en wat elk mineraal doet met je biersmaak.
          </p>
        </div>

        <QuickAnswer answer="Remineraliseer osmosewater met calciumchloride (rondte), calciumsulfaat/gips (bitterheid), magnesiumsulfaat/Epsom (gistvoeding) en natriumchloride (smaakversterker). Los op in warm water en voeg toe aan koud maischwater. Gebruik Brewfather of Bru&apos;n Water voor exacte grammen per bierstijl. Streef naar maisch-pH 5,2-5,5." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke mineraalzouten gebruik je voor remineralisatie?
        </h2>
        <p className="text-gray-700 mb-4">
          Elk brouwzout levert twee ionen: een kation en een anion. De keuze van zouten bepaalt
          welke ionen je aan het water toevoegt en in welke verhouding:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Zout</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bijdrage</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Dosering per 10L</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Effect op smaak</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Calciumchloride (CaCl2)</td>
                <td className="border border-gray-300 px-3 py-2">Ca2+ en Cl-</td>
                <td className="border border-gray-300 px-3 py-2">0,5-2 g</td>
                <td className="border border-gray-300 px-3 py-2">Rondte, zachtheid, moutkarakter</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Calciumsulfaat/gips (CaSO4)</td>
                <td className="border border-gray-300 px-3 py-2">Ca2+ en SO4 2-</td>
                <td className="border border-gray-300 px-3 py-2">0,5-2 g</td>
                <td className="border border-gray-300 px-3 py-2">Droogheid, bitterheidpercept, hoparoma</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Magnesiumsulfaat/Epsom (MgSO4)</td>
                <td className="border border-gray-300 px-3 py-2">Mg2+ en SO4 2-</td>
                <td className="border border-gray-300 px-3 py-2">0,1-0,5 g</td>
                <td className="border border-gray-300 px-3 py-2">Gistvoeding, extra sulfaat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Natriumchloride (NaCl)</td>
                <td className="border border-gray-300 px-3 py-2">Na+ en Cl-</td>
                <td className="border border-gray-300 px-3 py-2">0,3-1 g</td>
                <td className="border border-gray-300 px-3 py-2">Smaakversterker, zoetheid</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Melkzuur (88%)</td>
                <td className="border border-gray-300 px-3 py-2">pH-verlaging</td>
                <td className="border border-gray-300 px-3 py-2">0,5-2 mL</td>
                <td className="border border-gray-300 px-3 py-2">Neutraal bij juiste dosering</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Zuringzuur (lactic acid)</td>
                <td className="border border-gray-300 px-3 py-2">pH-verlaging</td>
                <td className="border border-gray-300 px-3 py-2">0,5 mL</td>
                <td className="border border-gray-300 px-3 py-2">Smaaksneutraler dan melkzuur</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterprofielen per bierstijl
        </h2>
        <p className="text-gray-700 mb-4">
          De volgende tabel geeft streefwaarden (in mg/L) voor de meest populaire bierstijlen,
          te bereiken vanuit osmosewater als startpunt. De maisch-pH-waarden zijn doelwaarden na
          mineraaltoevoeging en eventuele zuurcorrectie:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bierstijl</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Ca2+</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">Cl-</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">SO4 2-</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">HCO3-</th>
                <th className="border border-gray-300 px-3 py-2 text-center text-[#003F5C]">pH maisch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">American IPA</td>
                <td className="border border-gray-300 px-3 py-2 text-center">100</td>
                <td className="border border-gray-300 px-3 py-2 text-center">75</td>
                <td className="border border-gray-300 px-3 py-2 text-center">200</td>
                <td className="border border-gray-300 px-3 py-2 text-center">50</td>
                <td className="border border-gray-300 px-3 py-2 text-center">5,3</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Helles Lager</td>
                <td className="border border-gray-300 px-3 py-2 text-center">50</td>
                <td className="border border-gray-300 px-3 py-2 text-center">100</td>
                <td className="border border-gray-300 px-3 py-2 text-center">50</td>
                <td className="border border-gray-300 px-3 py-2 text-center">50</td>
                <td className="border border-gray-300 px-3 py-2 text-center">5,4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Irish Stout</td>
                <td className="border border-gray-300 px-3 py-2 text-center">80</td>
                <td className="border border-gray-300 px-3 py-2 text-center">80</td>
                <td className="border border-gray-300 px-3 py-2 text-center">25</td>
                <td className="border border-gray-300 px-3 py-2 text-center">125</td>
                <td className="border border-gray-300 px-3 py-2 text-center">5,5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Belgian Wit</td>
                <td className="border border-gray-300 px-3 py-2 text-center">60</td>
                <td className="border border-gray-300 px-3 py-2 text-center">150</td>
                <td className="border border-gray-300 px-3 py-2 text-center">75</td>
                <td className="border border-gray-300 px-3 py-2 text-center">75</td>
                <td className="border border-gray-300 px-3 py-2 text-center">5,4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">English Bitter</td>
                <td className="border border-gray-300 px-3 py-2 text-center">125</td>
                <td className="border border-gray-300 px-3 py-2 text-center">75</td>
                <td className="border border-gray-300 px-3 py-2 text-center">175</td>
                <td className="border border-gray-300 px-3 py-2 text-center">50</td>
                <td className="border border-gray-300 px-3 py-2 text-center">5,2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap: mineralen toevoegen aan osmosewater
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Bereken de doseringen</strong> met Brewfather, Bru&apos;n Water of EZ Water Calculator.
            Voer het volume brouwwater en het doelprofiel in. De app berekent grammen per zout.
          </li>
          <li>
            <strong>Weeg elk zout apart</strong> op een precisieweegschaal (minimaal 0,1 g nauwkeurig).
            Brouwzoutdoseringen zijn klein — een keukenweegschaal is onvoldoende nauwkeurig.
          </li>
          <li>
            <strong>Los op in warm water</strong> (50-100 mL, circa 40-50 graden Celsius) voor elk zout apart.
            Roer tot volledig opgelost. Controleer op precipitatie (troebeling kan wijzen op reactie).
          </li>
          <li>
            <strong>Voeg toe aan koud maischwater</strong> voor het opwarmen. Goed doorroeren.
            Voeg zuren (melkzuur) na de mineraalzouten toe.
          </li>
          <li>
            <strong>Meet de pH na inmaischen</strong> (10-15 minuten na toevoeging van het graan, bij
            maischtemperatuur). Doel: 5,2-5,5. Pas aan met extra zuur of mineralen indien nodig.
          </li>
          <li>
            <strong>Noteer alles</strong> voor reproductie. Apps zoals Brewfather slaan de watertoevoeging
            op per recept zodat je exact kunt herhalen bij de volgende batch.
          </li>
        </ol>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="font-semibold text-amber-800 mb-1">Belangrijk: voeg mineralen toe aan het maischwater, niet aan heet wort</p>
          <p className="text-amber-700 text-sm">
            Calciumsulfaat (gips) en calciumcarbonaat kunnen precipiteren bij koken. Voeg alle mineralen
            toe aan het koude maischwater voor het opwarmen. Spoelwater (sparge water) kan apart worden
            behandeld met een kleine hoeveelheid zuur om de pH licht te verlagen.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aanbevolen tools voor brouwwaterberekening
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Brewfather:</strong> all-in-one brouwapp (iOS/Android/web), geintegreerde watercalculator,
            gratis basisplan. Meest gebruiksvriendelijk voor beginners en gevorderden.
          </li>
          <li>
            <strong>Bru&apos;n Water:</strong> gratis Excel-spreadsheet van Martin Brungard, meest uitgebreide
            en wetenschappelijk onderbouwde tool. Ideaal voor gevorderden die dieper willen gaan.
          </li>
          <li>
            <strong>EZ Water Calculator:</strong> eenvoudige online tool, perfect voor beginners die
            snel willen starten zonder app te installeren.
          </li>
        </ul>

        <p className="text-gray-700 mb-6">
          Lees meer over de basis van <Link href="/brouwwater" className="text-[#005F8A] underline">brouwwater samenstellen</Link>,
          hoe je <Link href="/brouwwater/osmose" className="text-[#005F8A] underline">osmosewater instelt voor brouwen</Link>{' '}
          en wat het <Link href="/brouwwater/tds-profiel" className="text-[#005F8A] underline">optimale TDS-profiel per bierstijl</Link> is.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over brouwwater remineraliseren</h2>
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
          <Link href="/brouwwater/tds-profiel" className="text-[#005F8A] underline">TDS-profiel brouwwater</Link> en{' '}
          <Link href="/brouwwater/osmose" className="text-[#005F8A] underline">osmosewater voor brouwen</Link>.
        </p>
      </main>
    </>
  );
}
