import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder storingen: diagnose en oplossingen voor veelvoorkomende problemen',
  description: 'Waterontharder werkt niet? De meest voorkomende storingen: zoutbrug, hars uitgeput, regeneratie mislukt, lekkage. Diagnose en oplossingen stap voor stap.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/storingen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom werkt mijn waterontharder niet meer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest voorkomende oorzaken zijn: een zoutbrug (korst van zout boven de pekeloplossing), zout op (reservoir is leeg), een defecte controller of klep, verstopte drain, of uitgewerkt harsbedvolume. Begin met controleren of er zout in het reservoir zit en of de controller stroom heeft. Start vervolgens een handmatige regeneratie. Als dat niet werkt, zijn technische problemen waarschijnlijker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een zoutbrug en hoe los ik het op?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een zoutbrug is een harde korstlaag van samengekoekt zout die zich boven de pekeloplossing vormt in het zoutreservoir. Hierdoor denkt de ontharder dat er zout is, maar lost er geen zout op in het water. Symptoom: het zoutniveau daalt nauwelijks. Oplossing: breek de brug voorzichtig met een lange stok of een oud bezem. Gebruik geen scherp gereedschap dat het reservoir kan beschadigen. Preventie: gebruik kwaliteitszout met lage onzuiverheden en laat het reservoir niet tot de bodem leegraken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is mijn water weer hard terwijl ik een ontharder heb?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er zijn drie hoofdoorzaken: (1) het harsbedvolume is uitgewerkt na 10-15 jaar gebruik; (2) het zoutreservoir is leeg of er is een zoutbrug; (3) de ontharder regenereert niet meer correct door een defecte controller of klep. Meet de hardheid met een teststrip. Is het harsbedvolume uitgewerkt, dan is vervanging (€300-500) of een nieuw apparaat de oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe weet ik of mijn waterontharder regenereert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een regeneratiecyclus duurt 1-2 uur en vindt doorgaans plaats rond 02:00 uur. U hoort zachte stromings- en spoelgeluiden. Controleer ook de controller: die geeft het tijdstip van de laatste regeneratie aan. U kunt ook handmatig een regeneratie starten via de knop of het menu op de controller. Als de cyclus niet start, controleer dan of de controller stroom heeft en of er voldoende zout in het reservoir is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik als mijn waterontharder lekt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zet onmiddellijk de bypassventiel op bypass en sluit desnoods de watertoevoer af. Lokaliseer het lek: is het bij een aansluiting, dan kunt u teflon tape of een nieuwe koppeling gebruiken. Lekt het uit het apparaat zelf (uit de harsbehuizing of de controleklep), dan heeft u waarschijnlijk een defecte afdichting of O-ring. Schakel dan een servicemonteur in. Droog de omgeving goed op om schimmelvorming te voorkomen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mijn waterontharder verbruikt te veel zout -- wat is er aan de hand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Te hoog zoutverbruik duidt op te frequente regeneraties. Oorzaken: de controller is ingesteld op tijdgestuurde in plaats van volumegestuurde regeneratie, het ingestelde waterverbruik is te laag waardoor de ontharder eerder regenereert dan nodig, of de hardheidsinstelling is te hoog. Stel de ontharder in op volumegestuurde regeneratie (meting via waterverbruiksmeter) voor het meest efficiente gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik het harsbedvolume van mijn waterontharder vervangen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemiddeld gaat een harsbedvolume 10-15 jaar mee. Vervanging is nodig als het water structureel te hard blijft ondanks correcte regeneratie en voldoende zout. IJzer in het regeneratiezout versnelt slijtage: gebruik altijd ijzervrij regeneratiezout (kijk op het etiket). Harsbedvervanging kost €300-500 bij een servicemonteur. Bij een apparaat ouder dan 12 jaar is een nieuw apparaat vaak voordeliger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe voer ik een handmatige regeneratie uit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De procedure verschilt per merk. Bij de meeste ontharders: zoek de regeneratieknop op de controller (soms een apart knopje, soms via het menu). Houd deze 3-5 seconden ingedrukt totdat de cyclus start. De ontharder doorloopt dan alle stappen (terugspoelung, pekeltoevoer, langzame spoeling, snelle spoeling) in 60-90 minuten. Raadpleeg de handleiding voor uw specifieke model. Zorg dat er voldoende zout in het reservoir is.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder storingen: diagnose en oplossingen voor veelvoorkomende problemen',
  description: 'Waterontharder werkt niet? De meest voorkomende storingen: zoutbrug, hars uitgeput, regeneratie mislukt, lekkage. Diagnose en oplossingen stap voor stap.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/storingen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderStoringenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Waterontharder storingen', item: 'https://waterfilterplatform.nl/waterontharder/storingen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Waterontharder storingen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterontharder storingen: diagnose en oplossingen
        </h1>

        <QuickAnswer answer="Veelvoorkomende waterontharder storingen zijn: zoutbrug (zoutkorst blokkeert pekelvorming), uitgewerkt harsbedvolume (na 10-15 jaar), mislukte regeneratie (controller of drain defect) en lekkage bij aansluitingen. Begin altijd met controleren van zoutniveau, controller-stroom en handmatige regeneratietest." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De 7 meest voorkomende waterontharder storingen
        </h2>
        <p className="text-gray-700 mb-6">
          Een waterontharder is een robuust apparaat, maar kent specifieke storingen die patroonmatig optreden. Hieronder de zeven meest voorkomende problemen met diagnose en oplossing.
        </p>

        <div className="space-y-6 mb-8">

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Zoutbrug</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Wat het is:</strong> een harde korstlaag van samengekoekt zout die zich boven de pekeloplossing vormt. Het zout lost niet op in water, waardoor er geen pekel voor regeneratie wordt aangemaakt.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Teken:</strong> het zoutniveau in het reservoir daalt niet of nauwelijks, maar het water wordt toch hard.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Oplossing:</strong> breek de zoutbrug voorzichtig met een lange stok door van bovenaf te duwen. Gebruik geen scherpe voorwerpen die het reservoir kunnen beschadigen. Na het doorbreken: handmatige regeneratie uitvoeren om de pekelconcentratie te herstellen.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Water wordt weer hard (harsbedvolume uitgeput)</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Wat het is:</strong> het ionenwisselende harsbedvolume is na 10-15 jaar uitgewerkt en kan geen calcium- en magnesiumionen meer vasthouden. IJzerverontreiniging in goedkoop zout versnelt deze slijtage aanzienlijk.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Teken:</strong> TDS-meting of hardheidsteststrip toont stijgende hardheidswaarden ondanks correct zoutniveau en regelmatige regeneratie.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Oplossing:</strong> harsbedvervanging door een servicemonteur (€300-500) of aanschaf van een nieuw apparaat bij apparaten ouder dan 12 jaar. Gebruik voortaan uitsluitend ijzervrij regeneratiezout.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Regeneratie mislukt</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Wat het is:</strong> de geplande regeneratiecyclus (doorgaans rond 02:00 uur) wordt niet of onvolledig uitgevoerd.
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Oorzaken:</strong> controller defect of stroomonderbreking, zoutreservoir leeg, drain verstopt door kalkafzetting, controleklep vastgelopen.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Diagnose en oplossing:</strong> start een handmatige regeneratie. Lukt dat, dan is de timer of het tijdschema het probleem. Lukt het niet, controleer dan de drain op verstopping en controleer de klep. Bij aanhoudende problemen: servicemonteur inschakelen voor klep- of controllerreparatie (€100-300).
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Lekkage bij aansluitingen</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Oorzaak:</strong> verbindingen lossen na temperatuurwisselingen of trillingen. Dit komt vooral voor bij installaties in ruimtes met grote temperatuurverschillen.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Oplossing:</strong> leeg de aansluiting via de bypass, draai de koppeling na of vervang de teflon tape. Bij lekkage uit het apparaat zelf: O-ringen of afdichtingen vervangen door een monteur.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">5</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Te hoog zoutverbruik</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Oorzaak:</strong> de regeneratiefrequentie staat te hoog ingesteld ten opzichte van het werkelijke waterverbruik. Dit komt veel voor bij tijdgestuurde regeneratie waarbij het verbruik overschat is.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Oplossing:</strong> schakel over naar volumegestuurde regeneratie. De ontharder meet dan het werkelijke waterverbruik en regenereert alleen wanneer nodig. Dit verlaagt het zoutverbruik vaak met 20-40%.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">6</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Zoutsmaak of -geur in water</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Oorzaak:</strong> een kleine hoeveelheid pekelwater lekt via de controleklep mee in het zachte water (zogenaamd &apos;pekel leak-by&apos;). Dit kan ook optreden als de spoelcyclus te kort is.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Oplossing:</strong> controleer de controleklep op slijtage van de afdichtingen. Laat een servicebeurt uitvoeren voor controle en vervanging van de afdichtingen. In de tussentijd kunt u via de bypass schakelen.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">7</span>
              <h3 className="font-semibold text-[#003F5C] text-lg">Waterdruk gedaald</h3>
            </div>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Oorzaak:</strong> verstopte sedimentfilters voor de ontharder, of fijne harskorrels die na een beschadiging in de leidingen zijn terechtgekomen.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Oplossing:</strong> vervang de sedimentfilter voor de ontharder. Als harskorrels in de leidingen zitten, laat u een achterspoelcyclus uitvoeren en spoelt u de leidingen door. Bij ernstige harsvervuiling: harsbedvervanging overwegen.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer een servicebeurt laten uitvoeren?
        </h2>
        <p className="text-gray-700 mb-4">
          Preventief onderhoud is goedkoper dan noodreparaties. Een jaarlijkse servicebeurt door een erkend installateur (BWT Service, Kinetico, of een lokale waterspecialist) omvat:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Controle en reiniging van de controleklep</li>
          <li>Meting van harsprestaties en regeneratie-efficiëntie</li>
          <li>Controle van zout- en pekelconcentratie</li>
          <li>Inspectie van alle aansluitingen en afdichtingen</li>
          <li>Software-update controller indien beschikbaar</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Kosten: een servicebeurt kost &euro;75-150. Dit is beperkt ten opzichte van de kosten van een kapotte cv-ketel of vaatwasser door kalk.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten reparatie versus vervangen
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Ingreep</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanbevolen bij</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Preventieve servicebeurt</td>
                <td className="border border-gray-300 px-3 py-2">&euro;75-150</td>
                <td className="border border-gray-300 px-3 py-2">Jaarlijks</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Controleklep reparatie/vervanging</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100-300</td>
                <td className="border border-gray-300 px-3 py-2">Apparaat jonger dan 8 jaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Harsbedvervanging</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300-500</td>
                <td className="border border-gray-300 px-3 py-2">Apparaat jonger dan 10 jaar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nieuw apparaat</td>
                <td className="border border-gray-300 px-3 py-2">&euro;800-2.500</td>
                <td className="border border-gray-300 px-3 py-2">Apparaat ouder dan 12 jaar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tijdelijk zonder ontharder: wat te doen?
        </h2>
        <p className="text-gray-700 mb-4">
          Als uw ontharder buiten werking is, schakel dan de bypass in zodat u ongezacht water blijft ontvangen. Tijdelijke maatregelen voor de meest gevoelige apparaten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Waterkoker:</strong> voeg een theelepel citroenzuur per liter toe aan het water na het koken, of ontkalk wekelijks</li>
          <li><strong>Koffiezetapparaat:</strong> stel de ontkalkmelding op een korter interval in</li>
          <li><strong>Douche:</strong> gebruik een kalkreiniger na gebruik om aanslag te voorkomen</li>
          <li><strong>Vaatwasser:</strong> voeg extra vaatwasmiddel toe en gebruik het speciaal-voor-hard-water programma indien aanwezig</li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterontharder storingen</h2>
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder uitleg en vergelijking</Link>,{' '}
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">regeneratie instellen</Link> en{' '}
          <Link href="/waterontharder/hoe-lang" className="text-[#005F8A] underline">hoe lang gaat een waterontharder mee</Link>.
        </p>
      </main>
    </>
  );
}
