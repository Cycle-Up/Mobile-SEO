import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder regeneratie uitgelegd: hoe vaak en hoeveel zout?',
  description: 'Regeneratie is het herstelproces van een waterontharder waarbij harshars met zout worden doorgespoeld. Leer hoe regeneratie werkt, hoe vaak het plaatsvindt en hoeveel zout het kost.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/regeneratie' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe werkt de regeneratie van een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regeneratie bestaat uit vijf stappen. (1) Backwash: het harsbed wordt losgeschud en vuil wordt omhoog gespoeld. (2) Brine draw: pekelwater (NaCl-oplossing) wordt door het hars getrokken waardoor calcium- en magnesiumionen worden vervangen door natriumionen. (3) Slow rinse: zoutoplossing wordt langzaam doorgevoerd om alle harskorrels te behandelen. (4) Fast rinse: overtollig zout wordt met helder water doorspoeld. (5) Refill: het pekelreservoir wordt aangevuld met vers water om nieuw pekelwater te maken. Totale duur: 60-120 minuten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak moet een waterontharder regenereren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De frequentie hangt af van de waterhardheid en het waterverbruik van het huishouden. Bij een gezin van vier personen en gemiddeld hard water (14-20 dH) is een typische frequentie 2 tot 4 keer per week. Bij zachter water of minder verbruik kan dit minder zijn. Volumegestuurde systemen (die regenereren na een vooraf ingesteld aantal liter behandeld water) zijn efficienter dan timergestuurde systemen die op vaste tijden regenereren, ongeacht het werkelijke gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel zout verbruikt een waterontharder per maand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Per regeneratiecyclus verbruikt een waterontharder typisch 200 tot 400 gram zout. Voor een gezin van vier personen betekent dit bij 2-4 regeneraties per week een maandelijks verbruik van 5 tot 15 kilogram zout. Exacte verbruik hangt af van harscapaciteit, waterhardheid, ingestelde zouthoeveelheid per regeneratie en type systeem. Volumegestuurde systemen verbruiken gemiddeld 20-30% minder zout dan timergestuurde systemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het beste zout voor een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tabletzout (ook wel tablettzout of tabletten regeneratiezout) is de meest aanbevolen keuze voor de meeste waterontharders. Het heeft een hoge zuiverheidsgraad (99,5% NaCl of hoger), een lage ijzerinhoudswaarde, en lost gelijkmatig op waardoor zoutbrugvorming wordt voorkomen. Blokzout is geschikt voor grotere installaties. Korrelvulling (granulaat) lost snel op maar geeft meer risico op zoutbruggen. Vermijd goedkoop industriezout met hoge verontreinigingswaarden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik \'s nachts slapen als mijn ontharder regenereert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, regeneratie is stil en stoort niet. Het spoelwater wordt afgevoerd naar het riool. Het enige wat u mogelijk merkt is dat bij single-tank systemen tijdens regeneratie (60-120 minuten) ononthard water wordt geleverd als er toch verbruik is. De meeste huishoudens gebruiken geen water tussen 2:00 en 4:00 uur \'s nachts, het standaard regeneratietijdstip. Twin-tank systemen leveren altijd zacht water, ook tijdens regeneratie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een zoutbrug en hoe los ik het op?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een zoutbrug (salt bridge) is een harde koek van aan elkaar geklonken zoutkristallen die zich vormt boven in het pekelreservoir. Hierdoor lijkt het reservoir gevuld te zijn terwijl er geen pekelwater wordt aangemaakt, waardoor de regeneratie mislukt en het water niet meer onthard wordt. Oplossing: prik met een lange stok of bezem door de korst heen en breek de brug op. Preventie: gebruik tabletzout van hoge kwaliteit, houd het deksel gesloten en vul het reservoir niet te vol (maximaal 2/3).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen timer- en volumegestuurde regeneratie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij timergestuurde regeneratie regenereert de ontharder op vaste tijdsintervallen (bv. elke 3 dagen), ongeacht hoeveel water werkelijk is behandeld. Dit is eenvoudig maar inefficient: bij weinig verbruik wordt onnodig zout verbruikt, bij veel verbruik kan de hars uitgeput raken voor de volgende regeneratie. Volumegestuurde regeneratie start na een vooraf ingesteld aantal liter behandeld water. Het systeem meet het daadwerkelijke verbruik via een watermeter en regenereert precies op het juiste moment. Dit bespaart gemiddeld 20-30% zout en water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is het natrium na regeneratie schadelijk voor het milieu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het spoelwater tijdens regeneratie bevat een verhoogde natriumconcentratie (200-1000 mg/L) en calcium/magnesiumionen. In Nederland geldt een lozingsnorm van maximaal 150 mg/L natrium voor huishoudelijk afvalwater naar het riool. De piekconcentratie tijdens regeneratie kan deze norm tijdelijk overschrijden, maar het piekeffect wordt verdund in het rioolsysteem. Rioolwaterzuiveringsinstallaties (rwzi) verwijderen geen zouten, waardoor natrium in oppervlaktewater terechtkomt. In gebieden met al zout grondwater is dit een aandachtspunt. Voor septische tanks (IBA-systemen) is een waterontharder af te raden.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder regeneratie uitgelegd: hoe vaak en hoeveel zout?',
  description: 'Regeneratie is het herstelproces van een waterontharder waarbij harshars met zout worden doorgespoeld. Leer hoe regeneratie werkt, hoe vaak het plaatsvindt en hoeveel zout het kost.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/regeneratie',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderRegeneratiePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Waterontharder regeneratie', item: 'https://waterfilterplatform.nl/waterontharder/regeneratie' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterontharder" className="hover:underline">Waterontharder</a> &rsaquo;{' '}
          <span>Waterontharder regeneratie</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder regeneratie uitgelegd: hoe vaak en hoeveel zout?
          </h1>
          <p className="text-gray-600 text-lg">
            Regeneratie is het hart van elke waterontharder. Zonder dit herstelproces
            zou de harshars uitgeput raken en stopt de ontharder met werken. Begrijp hoe
            het werkt, hoe u het optimaliseert en wat het kost.
          </p>
        </div>

        <QuickAnswer answer="Regeneratie is het doorsturen van pekelwater (zoutoplossing) door het harsbed van een waterontharder, waardoor calcium- en magnesiumionen worden vervangen door natriumionen. Het proces duurt 60-120 minuten en vindt doorgaans 's nachts plaats. Verbruik: 200-400 gram zout per cyclus, 5-15 kg per maand voor een gezin van vier." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe werkt een waterontharder? Basisprincipe
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder werkt via het principe van <strong>ionenwisseling</strong>.
          In het hart van het apparaat bevindt zich een tank gevuld met kleine harskorrels
          (sulfonzuur-hars). Deze korrels zijn geladen met natriumionen (Na&sup1;&plus;).
        </p>
        <p className="text-gray-700 mb-6">
          Wanneer hard water door de harshars stroomt, worden calcium (Ca&sup2;&plus;) en
          magnesium (Mg&sup2;&plus;) ionen uitgewisseld tegen natriumionen. Het water dat
          de ontharder verlaat is zacht en bevat alleen natriumionen in plaats van calcium
          en magnesium. Na verloop van tijd raken alle natriumionen in de hars op, en is
          regeneratie nodig om de hars te herladen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Het regeneratieproces stap voor stap
        </h2>

        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2.5 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Backwash (terugspoelen)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Water stroomt omgekeerd door het harsbed (van onder naar boven). Dit schudt
              de harskorrels los, verwijdert vastgeklonken deeltjes en uitgespoeld vuil, en
              egalisiert het harsbed voor een optimale doorstroming in de volgende stappen.
              Duur: 5-10 minuten.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2.5 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">Brine draw (pekelwater intrekken)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Een geconcentreerde NaCl-oplossing (pekelwater) wordt vanuit het zoutreservoir
              langzaam door de harshars getrokken. De hoge natriumconcentratie in het pekelwater
              dwingt de calcium- en magnesiumionen los van de harskorrels. Ze worden vervangen
              door natriumionen uit het pekelwater. Dit is de kern van het regeneratieproces.
              Duur: 15-30 minuten.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2.5 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Slow rinse (langzaam naspoel)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Vers water wordt langzaam door de harshars gespoeld in dezelfde richting als
              het pekelwater. Dit zorgt ervoor dat de zoutoplossing volledig door het harsbed
              wordt verplaatst en alle harskorrels ook onderaan de tank worden behandeld.
              De resterende calcium- en magnesiumionen worden afgevoerd. Duur: 10-20 minuten.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2.5 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C]">Fast rinse (snel doorspoelen)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Water stroomt snel door de harshars om het overtollige zout te verwijderen.
              Na deze stap is de hars klaar voor gebruik: opgeladen met natriumionen en
              vrij van overmatig zout. Het spoelwater wordt afgevoerd naar het riool.
              Duur: 10-20 minuten.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2.5 py-1 rounded-full">5</span>
              <h3 className="font-semibold text-[#003F5C]">Refill (pekelreservoir aanvullen)</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Het pekelreservoir wordt automatisch aangevuld met een nauwkeurig volume
              vers water. Dit water lost de zoutkorrels of -tabletten op en maakt nieuw
              pekelwater voor de volgende regeneratiecyclus. Duur: 5-10 minuten, daarna
              12-24 uur rust voor optimale pekelconcentratie.
            </p>
          </div>
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-4 mb-6">
          <p className="text-sm text-[#003F5C]">
            <strong>Totale duur:</strong> Een complete regeneratiecyclus duurt 60 tot 120
            minuten, afhankelijk van het model en de harscapaciteit. De meeste ontharders
            zijn standaard ingesteld om te regenereren om 02:00 of 03:00 uur &apos;s nachts.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Timer vs. volumegestuurde regeneratie
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Kenmerk</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Timer-gestuurd</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Volume-gestuurd</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Triggerpunt</td>
                <td className="border border-gray-300 px-3 py-2">Vaste tijdsinterval (bv. elke 3 dagen)</td>
                <td className="border border-gray-300 px-3 py-2">Na X liter behandeld water</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Zoutverbruik</td>
                <td className="border border-gray-300 px-3 py-2">Hoger (onnodige regeneraties)</td>
                <td className="border border-gray-300 px-3 py-2">20-30% lager</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Risico op hard water</td>
                <td className="border border-gray-300 px-3 py-2">Ja, bij piekverbruik</td>
                <td className="border border-gray-300 px-3 py-2">Nee, altijd op tijd</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Kosten apparaat</td>
                <td className="border border-gray-300 px-3 py-2">Lager</td>
                <td className="border border-gray-300 px-3 py-2">Iets hoger</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Aanbeveling</td>
                <td className="border border-gray-300 px-3 py-2">Gelijkmatig verbruik</td>
                <td className="border border-gray-300 px-3 py-2">Wisselend verbruik, voorkeur</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zoutsoorten voor regeneratie
        </h2>
        <p className="text-gray-700 mb-4">
          De keuze van zout heeft invloed op de regeneratiekwaliteit en het onderhoud van
          uw ontharder. Gebruik altijd speciaal regeneratiezout met een hoge zuiverheidsgraad
          (minimaal 99,5% NaCl). Nooit keukenzout of strooizout gebruiken.
        </p>

        <div className="space-y-3 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] text-sm mb-1">
              Tabletzout (aanbevolen voor de meeste ontharders)
            </h3>
            <p className="text-gray-700 text-sm">
              Geperste cilindervormige tabletten van hoge zuiverheid. Lost gelijkmatig op,
              geeft weinig risico op zoutbrugvorming, geschikt voor alle gangbare ontharders.
              Meest verkochte keuze in Nederland.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] text-sm mb-1">
              Blokzout
            </h3>
            <p className="text-gray-700 text-sm">
              Grote blokken van evaporatiezout. Geschikt voor grotere industriele of
              semi-professionele installaties met grotere zoutbakken. Hoge zuiverheid,
              lang houdbaar.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] text-sm mb-1">
              Korrelvulling (granulaat)
            </h3>
            <p className="text-gray-700 text-sm">
              Losse kristallen die snel oplossen. Hogere kans op zoutbrugvorming bij vochtige
              omstandigheden of als het reservoir niet regelmatig wordt aangevuld. Minder
              aanbevolen voor thuisgebruik.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Problemen met regeneratie: checklist
        </h2>
        <p className="text-gray-700 mb-4">
          Als uw waterontharder niet meer correct regenereert, wordt het water weer hard.
          Controleer de volgende punten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Zout op?</strong> Controleer het zoutreservoir. Vul bij als het niveau
            te laag is (altijd minimaal 10-15 cm zout boven de waterstand houden).
          </li>
          <li>
            <strong>Zoutbrug?</strong> Prik door het zout om te controleren of er een harde
            koek boven het wateroppervlak hangt. Breek de brug door en roer het zout los.
          </li>
          <li>
            <strong>Timer onjuist ingesteld?</strong> Controleer of de klok correct is
            ingesteld (zomertijd vergeten na te zetten is een veelvoorkomende oorzaak).
          </li>
          <li>
            <strong>Waterdruk te laag?</strong> Bij waterdruk onder 2 bar kan de ejector
            in de ontharder onvoldoende pekelwater aanzuigen.
          </li>
          <li>
            <strong>Harsverslechtering?</strong> Na 10-15 jaar kan harshars zijn capaciteit
            verliezen en vervangen moeten worden.
          </li>
        </ul>

        <p className="text-gray-700 mb-6">
          Meer informatie over het gebruik van zout vindt u op onze pagina{' '}
          <Link href="/waterontharder/zout" className="text-[#005F8A] underline">
            waterontharder zout kiezen en doseren
          </Link>.
          Twijfelt u of een waterontharder of een andere aanpak beter bij uw situatie past?
          Lees dan de vergelijking op{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">
            waterontharder overzicht
          </Link>{' '}
          of bekijk het verschil via{' '}
          <Link href="/waterontkalker/vs-waterontharder" className="text-[#005F8A] underline">
            waterontkalker vs. waterontharder
          </Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over regeneratie
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
          <Link href="/waterontharder/zout" className="text-[#005F8A] underline">waterontharder zout</Link> en{' '}
          <Link href="/waterontkalker/vs-waterontharder" className="text-[#005F8A] underline">waterontkalker vs waterontharder</Link>.
        </p>
      </main>
    </>
  );
}
