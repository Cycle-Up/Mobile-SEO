import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor oudere woning: lood, koper en verouderde leidingen',
  description: 'In woningen van voor 1960 kunnen loodleidingen aanwezig zijn. Lood in drinkwater is gevaarlijk. Ontdek welk waterfilter beschermt tegen lood, koper en andere risicos in oude woningen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/oudere-woning' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe weet ik of mijn huis loodleidingen heeft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Woningen gebouwd voor 1960 hebben een grote kans op loodleidingen of loodgesoldeerde verbindingen. Controleer zichtbare leidingen in de meterkast of kelder: lood is grijs van kleur, zacht (u kunt er een nagel in krassen) en zwaarder dan koper. Een onzekere methode is de magneettest: lood is niet magnetisch, maar koper ook niet, dus deze test sluit lood niet uit. Zekerheid geeft een laboratoriumtest van het kraanwater na stilstand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is lood in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Er is geen veilige ondergrens voor lood in drinkwater vastgesteld. Lood is een neurotoxine dat zich opstapelt in het lichaam. Bij kinderen jonger dan 6 jaar en bij ongeboren kinderen veroorzaakt chronische blootstelling aan zelfs lage concentraties onomkeerbare schade aan de hersenontwikkeling, leervermogen en IQ. Bij volwassenen is er verhoogd risico op hoge bloeddruk en nierschade. De WHO-richtlijnwaarde is 10 µg/L, maar de WHO erkent dat er geen veilige drempelwaarde bestaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een waterfilter lood uit drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een osmosefilter verwijdert meer dan 95% van het lood uit drinkwater. Koolstofblokfilters (NSF/ANSI 53 gecertificeerd) verwijderen lood voor 85-99% afhankelijk van het type. Een standaard Brita-filterkan verwijdert lood slechts gedeeltelijk (50-70%) en is niet gecertificeerd voor loodverwijdering. Voor effectieve loodreductie kiest u voor een NSF 53-gecertificeerde koolstofblokfilter of een osmosesysteem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de WHO-norm voor lood in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO-richtlijnwaarde voor lood in drinkwater is 10 µg/L (microgram per liter). De Europese drinkwaterrichtlijn (2020/2184) heeft deze norm aangescherpt naar 5 µg/L, met een overgangsperiode tot 2036. Nederland implementeert deze norm via het Drinkwaterbesluit. Echter: de WHO erkent expliciet dat er geen biologisch veilige drempelwaarde voor lood bestaat. Elke reductie van de blootstelling is dan ook wenselijk, vooral voor kinderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe test ik mijn water op lood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U kunt uw water laten testen via een gecertificeerd laboratorium zoals Kiwa, SGS Intron of uw regionale GGD. Een basistest op lood kost circa €50-80. Volg het RIVM-protocol: laat het water minimaal 4 uur stilstaan in de leiding (nacht), tap vervolgens de eerste 250 ml (de zogenaamde "first draw") als monster en stuur dit in. Dit geeft de hoogste blootstelling. Een snellere maar minder betrouwbare optie zijn diptests die in winkels verkrijgbaar zijn (circa €10-20).',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang moet ik water laten doorlopen om lood weg te spoelen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laat de koude kraan 2-3 minuten doorlopen voordat u het water gebruikt voor drinken of koken. Dit spoelt het water dat langdurig in contact stond met loodleidingen weg. Gebruik voor het doorspoelen het water voor het toilet spoelen of planten water geven om verspilling te beperken. Dit is een tijdelijke maatregel; structureel bescherming vereist een filter of leiding vervanging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is koper in kraanwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij normale concentraties is koper in kraanwater geen acuut gezondheidsrisico voor gezonde volwassenen. De EU-drinkwaternorm voor koper is 2 mg/L. Groene aanslag in bad of toilet, of een metallische smaak, wijst op verhoogde koperconcentraties. Bij kinderen met de ziekte van Wilson (een zeldzame kopermetabolismestoornis) is elk extra koper problematisch. Een osmosefilter of NSF 53-gecertificeerde koolstofblokfilter verwijdert koper effectief.',
      },
    },
    {
      '@type': 'Question',
      name: 'Helpt een Brita-filterkan tegen lood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard Brita-filterkan is niet NSF/ANSI 53 gecertificeerd voor loodverwijdering en biedt onvoldoende bescherming bij significante loodconcentraties. Brita-kannen zijn primarily ontworpen voor smaak en kalkverbetering, niet voor zware metalen. Als lood een reeel risico is in uw woning, kiest u voor een NSF 53-gecertificeerde koolstofblokfilter of een osmosesysteem dat meer dan 95% lood verwijdert.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor oudere woning: lood, koper en verouderde leidingen',
  description: 'In woningen van voor 1960 kunnen loodleidingen aanwezig zijn. Lood in drinkwater is gevaarlijk. Ontdek welk waterfilter beschermt tegen lood, koper en andere risicos in oude woningen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/oudere-woning',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterOudereWoningPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter oudere woning', item: 'https://waterfilterplatform.nl/waterfilter/oudere-woning' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Waterfilter oudere woning</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor oudere woning: lood, koper en verouderde leidingen
          </h1>
          <p className="text-gray-600 text-lg">
            In woningen gebouwd voor 1960 kunnen loodleidingen aanwezig zijn. Lood in drinkwater is een serieus gezondheidsrisico, met name voor jonge kinderen en zwangere vrouwen. Er is geen veilige ondergrens. Op deze pagina leest u hoe u het risico in kaart brengt en welk waterfilter effectief beschermt.
          </p>
        </div>

        <QuickAnswer answer="Woningen van voor 1960 hebben een groot risico op loodleidingen. Er is geen veilige drempelwaarde voor lood in drinkwater. Een osmosefilter verwijdert meer dan 95% lood. Test uw water als u twijfelt (circa 50-80 euro via een lab). Tijdelijk: spoel elke ochtend 2-3 minuten door voor gebruik." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Loodleidingen in Nederland: hoe groot is het probleem?
        </h2>
        <p className="text-gray-700 mb-4">
          Tot ver in de twintigste eeuw was lood het standaardmateriaal voor waterleidingen in Nederlandse woningen. De tijdlijn:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bouwperiode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Loodrisico</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Actie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Voor 1960</td>
                <td className="border border-gray-300 px-3 py-2">Hoog: loodleidingen standaard</td>
                <td className="border border-gray-300 px-3 py-2">Testen en filteren of vervangen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">1960-1975</td>
                <td className="border border-gray-300 px-3 py-2">Matig: deels koper, deels lood, loodsolderingen</td>
                <td className="border border-gray-300 px-3 py-2">Controleren en testen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Na 1975</td>
                <td className="border border-gray-300 px-3 py-2">Laag: lood verboden in binneninstallaties</td>
                <td className="border border-gray-300 px-3 py-2">Geen actie vereist voor lood</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Het RIVM schat dat 1,5 tot 2 miljoen woningen in Nederland nog (gedeeltelijk) loodleidingen hebben. Dit is een van de meest onderschatte volksgezondheidsproblemen in de Nederlandse binnenomgeving.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom is lood in drinkwater zo gevaarlijk?
        </h2>
        <p className="text-gray-700 mb-4">
          Lood is een zogenaamd neurotoxine: het schaadt het zenuwstelsel. Bijzonder gevaarlijk is dat er biologisch geen veilige drempelwaarde bestaat. Elk beetje extra lood in het lichaam telt mee. De WHO heeft de richtlijnwaarde dan ook niet als veilige grens maar als praktisch haalbare limiet vastgesteld.
        </p>
        <div className="space-y-4 mb-6">
          <div className="border border-red-100 bg-red-50 rounded-xl p-5">
            <h3 className="font-semibold text-red-800 mb-2">Meest kwetsbare groepen</h3>
            <ul className="list-disc pl-5 text-red-800 text-sm space-y-1">
              <li><strong>Kinderen jonger dan 6 jaar:</strong> Onomkeerbare schade aan hersenontwikkeling, lager IQ, verminderd leervermogen en gedragsproblemen bij chronische blootstelling aan zelfs lage concentraties.</li>
              <li><strong>Zwangere vrouwen en foetus:</strong> Lood passeert de placenta en de bloedhersenbarrier van de foetus. Vroeggeboorte en neurologische schade zijn gedocumenteerde risicos.</li>
              <li><strong>Zuigelingen en flesvoeding:</strong> Als kraanwater wordt gebruikt voor het aanmaken van flesvoeding in een huis met loodleidingen, kan de blootstelling van het kind hoog zijn.</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Bij volwassenen is lood ook schadelijk, met name voor het cardiovasculaire systeem (hoge bloeddruk, verhoogd risico op hart- en vaatziekten) en de nieren (nierschade bij chronische blootstelling).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komt lood in uw drinkwater terecht?
        </h2>
        <p className="text-gray-700 mb-4">
          Het drinkwater dat uw watermaatschappij levert, is vrijwel altijd vrij van lood. Het probleem ontstaat in de eigen binneninstallatie van uw woning. Lood lost op uit loodleidingen in contact met water, afhankelijk van:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Contacttijd:</strong> Water dat lang stilstaat in een loodleiding lost meer lood op. De concentratie is het hoogst in de eerste liter die &apos;s ochtends uit de kraan stroomt (first draw).</li>
          <li><strong>pH van het water:</strong> Zacht, licht zuur water (laag pH) lost meer lood op dan hard, alkalisch water. Sommige regio&apos;s in Nederland hebben van nature zacht, licht zuur water wat het risico verhoogt.</li>
          <li><strong>Temperatuur:</strong> Warm water lost meer lood op dan koud water. Gebruik nooit warm kraanwater voor koken of drinken als u loodleidingen heeft.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap voor stap: wat doet u bij loodrisico?
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Tijdelijk: doorspoelen (flushing):</strong> Laat elke ochtend de koude watertoevoerkraan 2-3 minuten doorlopen voordat u water gebruikt voor drinken, koken of het aanmaken van babyvoeding. Gebruik dit spoelwater voor toilet of plant.
          </li>
          <li>
            <strong>Tijdelijk: vermijd warm kraanwater:</strong> Gebruik nooit warm kraanwater direct uit de leidingen voor drinken of koken. Kook koud water op als u warm water nodig heeft.
          </li>
          <li>
            <strong>Zekerheid: test uw water:</strong> Laat een first-draw monstername uitvoeren bij Kiwa, SGS Intron of via uw GGD. Kosten circa €50-80 voor een loodmeting. Bij concentraties boven 2 µg/L is onmiddellijk actie sterk aanbevolen.
          </li>
          <li>
            <strong>Structureel: osmosefilter plaatsen:</strong> Een osmosefilter verwijdert &gt;95% van het lood uit drinkwater. Dit is de meest directe bescherming voor de drinkwaterkraan als leidingvervanging niet direct mogelijk is.
          </li>
          <li>
            <strong>Definitief: loodleidingen vervangen:</strong> De enige structurele oplossing is het verwijderen van alle loodleidingen en -verbindingen. Dit kost afhankelijk van de omvang circa €1.000-€5.000 via een erkend installateur. Overheidssubsidie is in sommige gemeenten beschikbaar.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Koperoxide en zinken leidingen: andere risicos in oude woningen
        </h2>
        <p className="text-gray-700 mb-4">
          Naast lood kennen oudere woningen ook andere leidingproblemen:
        </p>
        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Koper in water: groene vlekken als signaal</h3>
            <p className="text-gray-700 text-sm">
              Groene of blauwe vlekken in de douchecabine, het bad of op sanitair wijzen op opgelost koper in het kraanwater. Dit gebeurt bij koperleidingen in combinatie met licht zuur of zacht water. Koper heeft een EU-drinkwaternorm van 2 mg/L. Bij normale concentraties is het geen acuut risico voor gezonde volwassenen, maar bij kinderen met specifieke stofwisselingsstoornissen (ziekte van Wilson) is het problematisch. Een osmosefilter of NSF 53-gecertificeerde koolstofblokfilter verwijdert koper effectief.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">Zinken leidingen (voor 1965)</h3>
            <p className="text-gray-700 text-sm">
              Zinken leidingen werden gebruikt voor 1965. Zink zelf is relatief weinig toxisch bij de concentraties die in drinkwater voorkomen. Maar zink lost op bij lager pH en geeft smaakafwijkingen (metaalachtig). Bovendien zijn zink leidingen vaak gesoldeerd met lood, wat het loodrisico combineert met zinkafzetting. Vervanging is de beste oplossing; een osmosefilter verwijdert ook zink effectief.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welk waterfilter werkt het beste tegen lood?
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elk filter is gelijkwaardig als het gaat om loodverwijdering. Overzicht van de effectiviteit:
        </p>
        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
              <h3 className="font-semibold text-[#003F5C]">Omgekeerde osmose</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Meest effectief &gt;95%</span>
            </div>
            <p className="text-gray-700 text-sm">
              Een osmosemembraan heeft een moleculaire cutoff die ver beneden de grootte van loodionen ligt. Osmose verwijdert consistent &gt;95% van het lood, samen met vrijwel alle andere zware metalen, nitraat, PFAS en farmaceutische resten. De meest brede en betrouwbare bescherming voor drinkwater in oudere woningen.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
              <h3 className="font-semibold text-[#003F5C]">NSF/ANSI 53 gecertificeerde koolstofblokfilter</h3>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-semibold">Effectief 85-99% (bij certificaat)</span>
            </div>
            <p className="text-gray-700 text-sm">
              Koolstofblokfilters die NSF/ANSI 53 gecertificeerd zijn voor loodverwijdering presteren goed: 85-99% loodreductie. Let op: alleen filters met dit specifieke certificaat zijn getest en goedgekeurd voor lood. Standaard koolstoffilters zonder dit certificaat bieden geen betrouwbare loodreductie.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
              <h3 className="font-semibold text-[#003F5C]">Standaard Brita-filterkan</h3>
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-semibold">Onvoldoende voor lood</span>
            </div>
            <p className="text-gray-700 text-sm">
              Een standaard Brita-kan is ontworpen voor smaakverbetering, kalkvermindering en chloorverwijdering. Het ionenwisselaarshars in de Brita-filter kan een deel van het lood verwijderen (circa 50-70%), maar het filter is niet gecertificeerd voor loodverwijdering en biedt onvoldoende bescherming als loodconcentraties significant zijn. Voor loodrisico is de Brita-kan niet de juiste keuze.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktische stappen samengevat
        </h2>
        <p className="text-gray-700 mb-4">
          Als u in een woning van voor 1960 woont of als u twijfelt over uw leidingen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Test uw water op lood via een gecertificeerd lab (circa &euro;50-80)</li>
          <li>Bij loodconcentratie &gt;2 µg/L: osmosefilter direct installeren als bescherming</li>
          <li>Plan vervanging van loodleidingen op de middellange termijn bij een erkend installateur</li>
          <li>Gebruik in de tussentijd nooit warm kraanwater voor drinken of koken</li>
          <li>Bij kinderen jonger dan 6 jaar of zwangere vrouwen: gebruik uitsluitend osmosewater of flessenwater voor drinken en bereiden van voedsel</li>
        </ol>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over lood en waterfilters in oudere woningen</h2>
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
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfiltertypen vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
