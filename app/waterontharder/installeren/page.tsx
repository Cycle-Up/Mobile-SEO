import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder installeren: kosten, stappen en loodgieter vs zelf doen',
  description: 'Een waterontharder installeren kost €200-500 bij een loodgieter. Ontdek de installatiestappen, wat u nodig hebt en wanneer professionele hulp verstandig is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/installeren' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kan ik een waterontharder zelf installeren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een waterontharder zelf installeren is mogelijk als u basiskennis heeft van loodgieterswerk. U heeft gereedschap nodig voor koperen of PVC-leidingen, kennis van bypassventielen en een uurtje of vier tot acht. Risico is lekkage bij een verkeerde aansluiting. Als u twijfelt, schakel dan een loodgieter in voor minimaal de wateraansluiting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost het installeren van een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De installatiekosten bij een loodgieter bedragen €200-400, afhankelijk van de complexiteit en regio. Zelf installeren kost €50-100 aan materialen (bypassventiel, teflon tape, koppelingen). Het apparaat zelf kost €800-2.500. Jaarlijkse zoutkosten bedragen €200-500 afhankelijk van waterverbruik en hardheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waar moet ik een waterontharder plaatsen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De ideale locatie is nabij de hoofdwaterleiding, vrostvrij (kelder of technische ruimte), met toegang tot drainage voor regeneratiewater, een 230V stopcontact voor de timer en voldoende ruimte voor het zoutreservoir. Vermijd plaatsing buiten of in ruimtes waar het kan bevriezen, want vorst beschadigt het harsbedvolume.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe sluit ik een waterontharder aan op de waterleiding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder wordt aangesloten op de koude waterleiding (3/4" of 1" aansluiting) na de hoofdkraan. U plaatst eerst een bypassventiel, sluit vervolgens de ontharder in lijn aan (inkomend koud water, uitgaand zacht water), verbindt de drainagelijn met het riool en sluit de stekker aan op een 230V stopcontact. Na vulling van het zoutreservoir stelt u de controller in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is een bypass ventiel bij een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een bypassventiel is een driewegkraan die u in staat stelt de waterontharder te omzeilen zonder het water af te sluiten. Dit is handig bij onderhoud, storingen of als de ontharder regenereert en u tijdelijk ongezacht water wilt hebben. Het is sterk aanbevolen om altijd een bypassventiel te installeren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe stel ik de waterhardheid in op mijn waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U stelt de waterhardheid in via de controller van de ontharder. Zoek eerst uw lokale waterhardheid op via de website van uw drinkwaterbedrijf (uitgedrukt in dH of mmol/L). Voer deze waarde in op de controller, samen met het gewenste regeneratietijdstip (standaard 02:00 uur) en het geschatte dagelijkse waterverbruik. De controller berekent dan automatisch de regeneratiefrequentie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik een vergunning nodig voor een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, in Nederland is geen vergunning nodig voor het installeren van een waterontharder. Wel is het verstandig om uw verzekeraar op de hoogte te stellen, omdat sommige verzekeringen vragen om een installatiecertificaat bij waterschade. Controleer ook de aansluitvoorwaarden van uw drinkwaterbedrijf, die kunnen eisen stellen aan terugstroombeveiliging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt de installatie van een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een professionele loodgieter installeert een waterontharder in 2-3 uur. Als u het zelf doet, rekent u op 4-8 uur, afhankelijk van uw ervaring en de bereikbaarheid van de aansluitpunten. Inclusief de initiiele regeneratiecyclus en het instellen van de controller duurt het gehele proces iets langer.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder installeren: kosten, stappen en loodgieter vs zelf doen',
  description: 'Een waterontharder installeren kost €200-500 bij een loodgieter. Ontdek de installatiestappen, wat u nodig hebt en wanneer professionele hulp verstandig is.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/installeren',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

const howToSchema = {
  '@type': 'HowTo',
  name: 'Waterontharder zelf installeren in 8 stappen',
  description: 'Stap-voor-stap een waterontharder aansluiten op de hoofdwaterleiding, inclusief bypassventiel, drain, zoutreservoir en eerste regeneratie.',
  totalTime: 'PT6H',
  inLanguage: 'nl-NL',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Watertoevoer afsluiten', text: 'Sluit de watertoevoer af via de hoofdkraan of het afsluitventiel vlak voor de installatielocatie.' },
    { '@type': 'HowToStep', position: 2, name: 'Bypassventiel plaatsen', text: 'Plaats een bypassventiel zodat de ontharder altijd omzeild kan worden zonder het hele huis droog te zetten.' },
    { '@type': 'HowToStep', position: 3, name: 'Ontharder in lijn plaatsen', text: 'Plaats de ontharder in lijn: koud water inkomend aan de invoerzijde, zacht water uitgaand aan de uitvoerzijde. Let op de pijlrichting.' },
    { '@type': 'HowToStep', position: 4, name: 'Drain aansluiten', text: 'Sluit de drainslang aan van de drain outlet naar de dichtstbijzijnde rioolaansluiting, met een luchtgat tegen terugstroom.' },
    { '@type': 'HowToStep', position: 5, name: 'Zoutreservoir vullen', text: 'Vul het zoutreservoir met minimaal 5 kg regeneratiezout (tabletten of grove kristallen, geen keukenzout).' },
    { '@type': 'HowToStep', position: 6, name: 'Controller instellen', text: 'Voer de lokale waterhardheid in, stel het regeneratietijdstip in (standaard 02:00 uur) en het dagelijkse waterverbruik.' },
    { '@type': 'HowToStep', position: 7, name: 'Initiele regeneratie uitvoeren', text: 'Start handmatig een eerste regeneratiecyclus om het harsbed te activeren en te spoelen.' },
    { '@type': 'HowToStep', position: 8, name: 'TDS en hardheid meten', text: 'Meet na installatie de hardheid om te bevestigen dat het water correct wordt onthard (doel: onder 5 dH of naar wens).' },
  ],
};

export default function WaterontharderInstallerenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Waterontharder installeren', item: 'https://waterfilterplatform.nl/waterontharder/installeren' },
            ],
          },
          faqSchema,
          articleSchema,
          howToSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Waterontharder installeren</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterontharder installeren: kosten, stappen en loodgieter vs zelf doen
        </h1>

        <QuickAnswer answer="Een waterontharder installeren kost bij een loodgieter €200-400 aan arbeidskosten. Zelf installeren kan met basiskennis loodgieterswerk in 4-8 uur voor €50-100 aan materialen. Plaatsing nabij hoofdwaterleiding, drainage en stopcontact vereist. Altijd bypassventiel installeren. Waterdruk controleren: 2-8 bar nodig." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Ideale installatielocatie voor uw waterontharder
        </h2>
        <p className="text-gray-700 mb-4">
          De locatiekeuze is cruciaal voor een probleemloze werking. Een waterontharder plaatst u bij voorkeur in een <strong>kelder of technische ruimte</strong> nabij de hoofdwaterleiding. De locatie moet aan vier voorwaarden voldoen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Nabij de hoofdwaterleiding</strong> (koude waterinvoer) zodat al het water in huis wordt onthard voordat het de warmwaterboiler bereikt</li>
          <li><strong>Drainage aanwezig</strong> voor het afvoeren van regeneratiewater (zoutoplossing) naar het riool</li>
          <li><strong>Stroomcontact aanwezig</strong> (230V) voor de elektronische timer en controller</li>
          <li><strong>Vorstvrij</strong> &mdash; bij temperaturen onder nul raakt het harsbedvolume beschadigd en kunnen leidingen bevriezen</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Vermijd installatie in een garage zonder vorstbeveiliging of buiten. Een bijkeuken nabij de meterkast is vaak een uitstekende optie als kelder ontbreekt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Benodigde aansluitingen
        </h2>
        <p className="text-gray-700 mb-4">
          Voordat u begint, controleert u of alle benodigde aansluitingen aanwezig zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>3/4" of 1" koude waterleiding</strong> &mdash; de ontharder wordt op de hoofdwaterleiding aangesloten, niet op een aftakking</li>
          <li><strong>Drainageaansluiting</strong> &mdash; voor het afvoeren van regeneratiewater (pekelwater) naar het riool; een flexibele drain slang van 1,5-2 meter volstaat doorgaans</li>
          <li><strong>230V stopcontact</strong> &mdash; voor de elektronische controller en timer; gebruik bij voorkeur een geaard stopcontact</li>
          <li><strong>Zoutreservoir</strong> &mdash; apart of geintegreerd in het apparaat; reserveer voldoende ruimte voor het bijvullen (minimaal 25 kg zakken)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterdruk controleren
        </h2>
        <p className="text-gray-700 mb-4">
          Een waterontharder werkt betrouwbaar bij een waterdruk van <strong>2 tot 8 bar</strong>. Controleer dit vooraf met een waterdrukmanometer op uw dichtstbijzijnde buitenkraan of bij de hoofdafsluiter. In de meeste Nederlandse woningen bedraagt de druk 3,5-6 bar, wat ruimschoots voldoende is.
        </p>
        <p className="text-gray-700 mb-6">
          Is de druk hoger dan 8 bar, dan is een <strong>drukreducer</strong> noodzakelijk. Te hoge druk beschadigt het harsbedvolume en de afdichtingen van de ontharder. Is de druk te laag (onder 2 bar), dan regenereert de ontharder inefficient.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Installatiestappen: zo doet u het zelf
        </h2>
        <p className="text-gray-700 mb-4">
          Hieronder de acht stappen voor een correcte installatie:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li><strong>Watertoevoer afsluiten</strong> via de hoofdkraan of het afsluitventiel vlak voor de installatielocatie</li>
          <li><strong>Bypassventiel plaatsen</strong> zodat de ontharder te allen tijde omzeild kan worden zonder het hele huis droog te zetten</li>
          <li><strong>Ontharder in lijn plaatsen</strong>: koud water inkomend aan de invoerzijde, zacht water uitgaand aan de uitvoerzijde &mdash; let op de pijlrichting op het apparaat</li>
          <li><strong>Drain aansluiten</strong>: slang van de drain outlet naar het dichtstbijzijnde rioolaansluiting; maak een luchtgat zodat er geen terugstroom optreedt</li>
          <li><strong>Zoutreservoir vullen</strong> met minimaal 5 kg regeneratiezout (tabletten of grove kristallen, geen keukenzout)</li>
          <li><strong>Controller instellen</strong>: voer de lokale waterhardheid in (te vinden op de site van uw drinkwaterbedrijf), stel het gewenste regeneratietijdstip in (standaard 02:00 uur) en het dagelijkse waterverbruik</li>
          <li><strong>Initiiele regeneratie uitvoeren</strong>: start handmatig een eerste regeneratiecyclus om het harsbedvolume te activeren en te spoelen</li>
          <li><strong>TDS en hardheid meten</strong> na installatie om te bevestigen dat het water correct wordt onthard (doel: onder 5 dH of naar wens)</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bypassventiel: altijd installeren
        </h2>
        <p className="text-gray-700 mb-4">
          Het bypassventiel is geen optioneel onderdeel, maar een essentieel onderdeel van elke waterontharderinstallatie. Met een bypassventiel kunt u de ontharder in drie situaties omzeilen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Tijdens de regeneratiecyclus (dan loopt ongezacht water direct door)</li>
          <li>Bij onderhoud of reparatie aan de ontharder</li>
          <li>Als u tijdelijk ongezacht water wilt (bijv. voor tuinbewatering of het wassen van de auto)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Veel moderne waterontharders worden geleverd met een ingebouwd bypassventiel. Bij oudere modellen of bij losse installatie voegt u een driewegkraan toe aan de leidingaansluiting.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zelf installeren of loodgieter inschakelen?
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Zelf installeren</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Loodgieter inschakelen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kosten installatie</td>
                <td className="border border-gray-300 px-3 py-2">&euro;50-100 (materiaal)</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200-400</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Tijdsduur</td>
                <td className="border border-gray-300 px-3 py-2">4-8 uur</td>
                <td className="border border-gray-300 px-3 py-2">2-3 uur</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Vereiste kennis</td>
                <td className="border border-gray-300 px-3 py-2">Basis loodgieterswerk</td>
                <td className="border border-gray-300 px-3 py-2">Geen (voor u)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Risico op lekkage</td>
                <td className="border border-gray-300 px-3 py-2">Aanwezig bij foute aansluiting</td>
                <td className="border border-gray-300 px-3 py-2">Minimaal</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Garantie</td>
                <td className="border border-gray-300 px-3 py-2">Zelf verantwoordelijk</td>
                <td className="border border-gray-300 px-3 py-2">Installatieopdracht gedekt</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Een loodgieter is sterk aanbevolen als uw leidingwerk van koper of verouderd materiaal is, als de installatielocatie moeilijk bereikbaar is, of als uw huisverzekering een installatiecertificaat eist. De meerprijs van &euro;200-400 is bescheiden ten opzichte van de totale investering.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Totale kosten van een waterontharder
        </h2>
        <p className="text-gray-700 mb-4">
          Wat kost een waterontharder over de volledige looptijd? Reken op de volgende posten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Apparaatkosten</strong>: &euro;800-2.500 afhankelijk van merk, capaciteit en technologie (zoutgebaseerd of zoutloos)</li>
          <li><strong>Installatiekosten</strong>: &euro;200-400 bij een loodgieter, of &euro;50-100 als u het zelf doet</li>
          <li><strong>Jaarlijkse zoutkosten</strong>: &euro;200-500 afhankelijk van waterverbruik (huishoudgrootte) en de hardheid van uw leidingwater</li>
          <li><strong>Onderhoud</strong>: &euro;75-150 per jaar voor een preventieve servicebeurt (optioneel maar aanbevolen)</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Over een periode van tien jaar bedragen de totale kosten &euro;4.000-8.000, inclusief aanschaf en jaarlijks zout. De besparing op kalkschade (cv-ketel, vaatwasser, boiler) kan hiertegenover staan.
        </p>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Keuringen en verzekeringen
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland is een installatiecertificaat voor een waterontharder niet wettelijk verplicht. Toch zijn er twee zaken om rekening mee te houden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Huisverzekering</strong>: sommige verzekeraars vragen bij waterschade om bewijs van correcte installatie. Een factuur van een erkend installateur volstaat in de meeste gevallen.</li>
          <li><strong>Terugstroombeveiliging</strong>: het drinkwaterbedrijf kan eisen dat er een terugstroombeveiliging (KIWA-norm) wordt geplaatst om verontreiniging van het drinkwaternet te voorkomen. Vraag uw installateur hiernaar.</li>
        </ul>

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterontharder installeren</h2>
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
          <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">waterontharder regeneratie instellen</Link> en{' '}
          <Link href="/waterontharder/zout" className="text-[#005F8A] underline">welk zout voor waterontharder</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering en installatienorm</h3>
              <p className="text-sm text-gray-600">Welke CE-eisen gelden voor waterontharders en hoe NEN 1006 de installatie reguleert.</p>
            </Link>
            <Link href="/onderhoud/storingen-oplossen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Storingen na installatie oplossen</h3>
              <p className="text-sm text-gray-600">Veelvoorkomende storingen na installatie en hoe u ze diagnosticeert.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
