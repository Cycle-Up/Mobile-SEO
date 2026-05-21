import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kalk en mineralen in drinkwater -- calcium, magnesium en bicarbonaat | WaterfilterPlatform',
  description:
    'Kalk in drinkwater: calciumcarbonaat, waterhardheid en aanslag. Calcium (gem. 80 mg/L NL), magnesium en bicarbonaat. Osmose verwijdert 95% -- remineralisatie.',
  alternates: { canonical: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/kalk-mineralen' },
};

export default function KalkMineralenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Stoffen in drinkwater', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater' },
        { name: 'Kalk en mineralen in drinkwater — calcium, magnesium en bicarbonaat', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/kalk-mineralen' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Is kalk in drinkwater schadelijk voor de gezondheid?", answer: "Nee, kalk (calciumcarbonaat) in drinkwater is niet schadelijk voor de gezondheid. Het veroorzaakt wel aanslag op kranen, waterkokers en huishoudapparaten. Calcium en magnesium zijn juist nuttige mineralen voor botten en spieren." },
        { question: "Hoe hard is het water in Nederland?", answer: "De waterhardheid in Nederland varieert van zacht (4-6 dH in Zeeland) tot zeer hard (18-22 dH in Limburg). Er is geen EU-maximumnorm voor waterhardheid. Het gemiddelde calciumgehalte in Nederlands drinkwater is circa 80 mg/L." },
        { question: "Verwijdert een osmosefilter kalk uit drinkwater?", answer: "Ja, omgekeerde osmose verwijdert 95% of meer van alle opgeloste mineralen inclusief calcium, magnesium en bicarbonaat. Kwalitatieve osmosesystemen zijn voorzien van een remineralisatiecartridge die calcium en magnesium terugvoegt en de pH stabiliseert." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'Kalk en mineralen in drinkwater -- calcium, magnesium en bicarbonaat',
        description: 'Kalk in drinkwater: calciumcarbonaat, waterhardheid en aanslag. Calcium (gem. 80 mg/L NL), magnesium en bicarbonaat. Osmose verwijdert 95% -- remineralisatie.',
        datePublished: '2026-01-01',
        url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/kalk-mineralen',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; Kalk en mineralen
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Kalk en mineralen in drinkwater -- calcium, magnesium en bicarbonaat
          </h1>
          <QuickAnswer answer="Kalk (calciumcarbonaat) in drinkwater is niet schadelijk voor de gezondheid maar veroorzaakt aanslag op kranen, apparaten en in waterkokers. Calcium en magnesium zijn juist nuttige mineralen. Osmose verwijdert 95% van mineralen inclusief kalk -- daarna is remineralisatie aanbevolen om de smaak en mineraalbalans te herstellen." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat is kalk in drinkwater?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            De term "kalk" in de context van drinkwater verwijst naar calciumcarbonaat (CaCO3) dat neerslaat wanneer hard water wordt verwarmd of verdampt. Het is niet hetzelfde als de calciumionen (Ca2+) die opgelost in water aanwezig zijn. Opgelost calcium is nuttig; neergeslagen calciumcarbonaat is het witte aanslag dat je ziet op kranen, in waterkokers en in koffiezetapparaten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            De hardheid van water wordt uitgedrukt in graden dH (duitse hardheidsgraden) of mmol/L. In Nederland varieert de hardheid van zacht (4-6 dH in Zeeland) tot zeer hard (18-22 dH in Limburg). Er is geen EU-maximumnorm voor waterhardheid -- het is een kwaliteitsinformatieve parameter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Calcium: essentiele mineraal, gemiddeld 80 mg/L</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Calcium is een essentiele mineraal voor botten, tanden, spierwerking en bloedstolling. In Nederlands drinkwater zit gemiddeld circa 80 milligram calcium per liter, met regionale variaties van 20 mg/L (zacht water) tot meer dan 150 mg/L (zeer hard water).
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Er is geen EU-maximumnorm voor calcium in drinkwater. De WHO geeft richtlijnen maar geen bindende normen. Drinkwater levert een bijdrage aan de dagelijkse calciuminname, maar is niet de primaire bron -- zuivel, groenten en noten leveren veel meer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Magnesium: hart en spieren</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Magnesium speelt een rol bij meer dan 300 enzymatische reacties in het lichaam, waaronder spier- en zenuwfunctie en energiemetabolisme. In Nederlands drinkwater zit gemiddeld 8-15 mg/L magnesium, afhankelijk van de waterbron.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sommige epidemiologische studies suggereren een verband tussen zachter (magnesiumarm) water en een hoger risico op hart- en vaatziekten, maar het bewijs is niet eenduidig genoeg voor normatieve aanbevelingen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Bicarbonaat: buffercapaciteit van water</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bicarbonaat (HCO3-) bepaalt de buffercapaciteit van water: het vermogen om pH-schommelingen te weerstaan. Hard water heeft een hoog bicarbonaatgehalte en is daardoor stabieler in pH. Bicarbonaat draagt bij aan de licht kalkachtige smaak die sommige mensen als aangenaam ervaren.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Voor de afwasmachine is bicarbonaat relevant: water met een lage buffercapaciteit kan agressiever zijn voor glaswerk. Hard water met veel bicarbonaat laat juist een witte waas achter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Osmose verwijdert 95% -- remineralisatie nodig</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose</Link> verwijdert vrijwel alle opgeloste mineralen, inclusief calcium, magnesium en bicarbonaat (95% of meer). Het resultaat is zeer zacht, bijna gedistilleerd water met een lage pH (licht zuur door het ontbreken van buffercapaciteit).
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Dit water heeft voordelen (geen kalkaanslag, betere smaak voor koffie en thee) maar ook nadelen: het mist de nuttige mineralen van gewoon leidingwater. Kwalitatieve osmosesystemen zijn dan ook voorzien van een remineralisatiecartridge die calcium en magnesium terugvoegt en de pH stabiliseert.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer informatie over regionale waterhardheid: <Link href="/waterhardheid" className="text-[#005F8A] hover:underline">waterhardheid per gemeente</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welk filter filtert dit?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] hover:underline">Ionenwisseling: waterontharder werking</Link></li>
            <li><Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Osmose verwijdert 90-97% kalk</Link></li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Alle stoffen in drinkwater</h3>
              <p className="text-sm text-gray-600">Overzicht van alle verontreinigingen en stoffen die in drinkwater kunnen voorkomen.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp bij hard water</h3>
              <p className="text-sm text-gray-600">Welk filter of systeem past het best bij uw regio en waterhardheidsniveau?</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling voor kalkverwijdering</h3>
              <p className="text-sm text-gray-600">Hoe een waterontharder via ionenwisseling calcium en magnesium vervangt door natrium.</p>
            </Link>
            <Link href="/waterhardheid" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterhardheid in uw gemeente</h3>
              <p className="text-sm text-gray-600">Controleer de waterhardheid per gemeente en regio in Nederland.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
