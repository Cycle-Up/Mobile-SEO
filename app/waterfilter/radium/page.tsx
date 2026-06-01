import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Radium en radon in drinkwater: risico, normen en waterfilter',
  description:
    'Radium en radon in grondwater komen voor in Brabant en Gelderland door uraniumhoudende bodemlagen. EU-norm voor radium-226+228 is 0,1 Bq/L.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/radium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zit er radium in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In leidingwater van Nederlandse drinkwaterbedrijven wordt radium altijd getest en voldoet het ruimschoots aan de EU-norm van 0,1 Bq/L. Het risico op verhoogde radiumconcentraties betreft uitsluitend particuliere putten en boorputten in risicogebieden zoals de Kempen in Noord-Brabant, de Achterhoek in Gelderland en diep grondwater in Zeeland.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de risicogebieden voor radium in grondwater in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De voornaamste risicogebieden zijn de Kempen (Noord-Brabant), de Achterhoek (Gelderland) en diep grondwater in Zeeland. Deze gebieden kenmerken zich door uraniumhoudende geologische formaties op grotere diepte. Roestkleurig water en een ijzerrijke bodem zijn indicatoren die verder onderzoek rechtvaardigen. Particuliere boorputten in deze gebieden dienen op radioactiviteit geanalyseerd te worden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de gezondheidsrisicos van radium in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Radium gedraagt zich chemisch als calcium en wordt bij chronische inname ingebouwd in botweefsel. Ioniserende straling vanuit het radium beschadigt DNA en verhoogt het risico op botkanker en leukemie bij langdurige blootstelling. Het IARC classificeert ioniserende straling als groep 1 kankerverwekkend. Radon-222, een vluchtig dochterproduct van radium, verhoogt bij inademing het risico op longkanker.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter radium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Omgekeerde osmose verwijdert 95-99% van opgelost radium uit drinkwater. Het RO-membraan houdt de geladen radiumionen (Ra2+) effectief tegen. Ionenwisseling (cationenwisseling) behaalt vergelijkbare rendementen van 90-99%. Voor particuliere putten in risicogebieden is een osmosefilter de meest praktische thuisoplossing voor radiumverwijdering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter ook radon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, radon is een vluchtig radioactief gas en passeert het RO-membraan grotendeels ongehinderd. De effectieve methoden voor radonverwijdering zijn beluchting (aeratie) en ontgassing, waarbij het gas uit het water wordt gestripped. Actief kool kan radon tijdelijk adsorberen maar is wegens de korte halfwaardetijd van 3,8 dagen en veiligheidsrisico bij verzadiging niet aanbevolen voor huishoudelijk gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor radium in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn 2020/2184 stelt de gecombineerde activiteitsconcentratie van radium-226 en radium-228 op maximaal 0,1 Bq/L (bequerel per liter). Voor radon geldt een indicatieve waarde van 100 Bq/L, die in Nederland vrijwillig is en niet bindend. De totale indicatieve doses (TID) mogen niet meer dan 0,1 mSv per jaar bedragen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe laat ik mijn bronwater testen op radium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Radioactiviteitsmetingen voor radium vereisen een geaccrediteerd laboratorium zoals Kiwa of RIVM. De analyse omvat alpha-spectroscopie voor radium-226 en radium-228 afzonderlijk. De kosten voor een compleet radiumanalyse liggen tussen 100 en 200 euro. Radon vereist een aparte meting met een andere meetmethode. Neem contact op met uw provinciale omgevingsdienst voor het juiste bemonsteringsprotocol.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen radium-226 en radium-228?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Radium-226 is een alfa-straler met een halfwaardetijd van 1.600 jaar en maakt deel uit van de uranium-238 vervalreeks. Radium-228 is een beta-straler met een halfwaardetijd van 5,75 jaar en hoort bij de thorium-232 vervalreeks. Radium-226 geeft via verval aanleiding tot radon-222, het radioactieve gas. De EU-norm geldt voor de gecombineerde activiteit van beide isotopen samen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Radium en radon in drinkwater: risico, normen en waterfilter',
  description:
    'Radium en radon in grondwater komen voor in Brabant en Gelderland door uraniumhoudende bodemlagen. EU-norm voor radium-226+228 is 0,1 Bq/L.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/radium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterRadiumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Radium in drinkwater', item: 'https://waterfilterplatform.nl/waterfilter/radium' },
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
          <span>Radium in drinkwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Radium en radon in drinkwater: risico, normen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Radium is een radioactief element dat in diep grondwater kan voorkomen door uraniumhoudende
            bodemlagen. In risicogebieden zoals de Kempen en de Achterhoek is testen van particuliere
            putten noodzakelijk. Een osmosefilter verwijdert 95&ndash;99% van opgelost radium.
          </p>
        </section>

        <QuickAnswer answer="Radium in drinkwater is een risico bij particuliere putten in uraniumhoudende gebieden zoals Noord-Brabant en Gelderland. De EU-norm is 0,1 Bq/L voor radium-226 en radium-228 samen. Leidingwater voldoet altijd aan de norm. Een osmosefilter verwijdert 95-99% van opgelost radium; radon vereist beluchting." />

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is radium?
        </h2>
        <p className="text-gray-700 mb-4">
          Radium (Ra) is een radioactief aardalkalimetaal dat van nature voorkomt als onderdeel van de
          uranium-vervalreeks. Het element werd in 1898 ontdekt door Marie en Pierre Curie en is sindsdien
          intensief bestudeerd vanwege zijn radioactieve eigenschappen. In drinkwater zijn twee isotopen
          het meest relevant:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Radium-226</strong> (halfwaardetijd 1.600 jaar): alfa-straler, onderdeel van de
            uranium-238 vervalreeks. Geeft via verval aanleiding tot radon-222, een vluchtig radioactief gas
          </li>
          <li>
            <strong>Radium-228</strong> (halfwaardetijd 5,75 jaar): beta-straler, onderdeel van de
            thorium-232 vervalreeks. Levert indirecte stralingsschade via dochternucliden
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          <strong>Radon-222</strong> is een vluchtig radioactief gas dat vrijkomt bij het verval van
          radium-226. Radon lost op in grondwater en kan vrijkomen bij gebruik van het water, waarna
          het via inademing in de longen terechtkomt. Dit maakt radon in gesloten ruimten een apart
          gezondheidsrisico naast het radium in het water zelf.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Herkomst van radium in Nederlands grondwater
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland is radium in drinkwater in de meeste gevallen geen actueel probleem voor
          gebruikers van leidingwater. Drinkwaterbedrijven testen hun bronwater op radioactiviteit
          en leidingwater voldoet altijd aan de geldende normen. Het risico concentreert zich bij
          <strong> particuliere putten en boorputten</strong> in specifieke geologische risicogebieden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>De Kempen (Noord-Brabant):</strong> uraniumhoudende geologische formaties in de
            diepe ondergrond. Roestkleurig water en ijzerrijke bodem zijn kenmerken van deze regio die
            verder onderzoek rechtvaardigen
          </li>
          <li>
            <strong>De Achterhoek (Gelderland):</strong> diep grondwater in sedimentlagen met verhoogde
            uranium- en thoriumgehalten
          </li>
          <li>
            <strong>Diep grondwater in Zeeland:</strong> specifieke watervoerende lagen op grotere diepte
            kunnen hogere radioactiviteitsconcentraties bevatten
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Radium laat gemakkelijk op in grondwater wanneer zuurstofarm (anaeroob) water in contact
          komt met radiumhoudende mineralen. De concentraties nemen toe met de diepte van de put en
          de verblijftijd van het water in de bodem. IJzerrijke bodem is vaak een indicator voor
          diepe geologische lagen die ook radium kunnen bevatten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-normen en indicatieve waarden
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-drinkwaterrichtlijn 2020/2184</strong> bevat specifieke normen voor radioactiviteit
          in drinkwater:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Norm / waarde</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bindend?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Radium-226 + Radium-228</td>
                <td className="border border-gray-300 px-3 py-2">max 0,1 Bq/L</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Radon-222</td>
                <td className="border border-gray-300 px-3 py-2">indicatief 100 Bq/L</td>
                <td className="border border-gray-300 px-3 py-2">Nee (NL vrijwillig)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Totale indicatieve doses (TID)</td>
                <td className="border border-gray-300 px-3 py-2">max 0,1 mSv/jaar</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          De eenheid bequerel (Bq) geeft het aantal radioactieve vervallen per seconde aan. Een
          concentratie van 0,1 Bq/L betekent dat er per liter water per seconde 0,1 radioactieve
          vervallen plaatsvinden. Dit is een uiterst gevoelige meting die speciale
          laboratoriumapparatuur vereist.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s van radium en radon
        </h2>
        <p className="text-gray-700 mb-4">
          Het IARC (Internationaal Agentschap voor Kankeronderzoek) classificeert ioniserende straling
          als <strong>groep 1 kankerverwekkend</strong> bij mensen. De gezondheidsrisicos van radium
          in drinkwater zijn specifiek:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Botkanker en leukemie:</strong> radium gedraagt zich chemisch als calcium en wordt
            bij chronische inname ingebouwd in botweefsel. Ioniserende straling vanuit het radium
            beschadigt beenmerg en omliggend botweefsel. Historische studies bij radiumwijzerplaatschilders
            (Radium Girls, VS, jaren 1920-1930) documenteerden ernstige botaandoeningen
          </li>
          <li>
            <strong>Longkanker via radon:</strong> radon-222, gevormd door verval van radium-226,
            lost op in grondwater en komt vrij bij gebruik van het water. Ingeademd radon en zijn
            kortstondige dochternucliden deponeren alfa-energie in longweefsel. Na roken is radon
            de grootste oorzaak van longkanker in westerse landen
          </li>
          <li>
            <strong>Interne bestraling:</strong> ingeslikt radium geeft interne orgaanblootstelling
            via het maagdarmkanaal voordat het in het bot wordt opgenomen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het risico bij de huidige EU-norm van 0,1 Bq/L wordt als aanvaardbaar laag beschouwd.
          De TID-norm van 0,1 mSv/jaar voor alle radioactieve stoffen samen (exclusief radon en
          tritium) zorgt voor een totaalbegrip van de stralingsbelasting via drinkwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verwijderingsmethoden vergelijken
        </h2>
        <p className="text-gray-700 mb-4">
          Radium en radon vereisen verschillende verwijderingsstrategieen omdat radium een opgelost ion
          is terwijl radon een vluchtig gas is:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Radium verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Radon verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Thuistoepassing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2">95&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">Ongeschikt</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ionenwisseling (cation)</td>
                <td className="border border-gray-300 px-3 py-2">90&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">Ongeschikt</td>
                <td className="border border-gray-300 px-3 py-2">Ja (professioneel)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltatie</td>
                <td className="border border-gray-300 px-3 py-2">90&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">Ongeschikt</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Beluchting / ontgassing</td>
                <td className="border border-gray-300 px-3 py-2">Ongeschikt</td>
                <td className="border border-gray-300 px-3 py-2">90&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">Professioneel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool</td>
                <td className="border border-gray-300 px-3 py-2">Ongeschikt</td>
                <td className="border border-gray-300 px-3 py-2">Tijdelijk effectief</td>
                <td className="border border-gray-300 px-3 py-2">Niet aanbevolen</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Voor huishoudens met een particuliere put in een risicogebied is een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> de
          meest praktische keuze voor radiumverwijdering. Radon vereist aanvullend een beluchtingssysteem
          of ontgassingsunit, die door een gespecialiseerde waterbehandelaar worden geinstalleerd.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronwater testen op radium en radon
        </h2>
        <p className="text-gray-700 mb-4">
          Radioactiviteitsmetingen vereisen gespecialiseerde apparatuur en geaccrediteerde laboratoria.
          In Nederland zijn de volgende instanties geschikt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Kiwa Water Research:</strong> geaccrediteerd voor radioactiviteitsanalyse,
            inclusief alpha-spectroscopie voor radium-226 en radium-228 afzonderlijk
          </li>
          <li>
            <strong>RIVM:</strong> het Rijksinstituut voor Volksgezondheid en Milieu voert
            referentiemetingen uit en biedt methodologisch advies
          </li>
          <li>
            <strong>Geaccrediteerde milieulaboratoria:</strong> Eurofins en SGS bieden radiochemische
            analyses voor particulieren en bedrijven
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          De kosten voor een compleet radiumanalyse (radium-226 en radium-228) liggen tussen
          <strong> 100 en 200 euro</strong>. Radon vereist een aparte meting met een andere
          meetmethode en dient tegelijkertijd met het watermonster te worden genomen omdat radon
          snel ontwijkt. Naast radioactiviteit is een uitgebreider{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitsonderzoek</Link>{' '}
          aanbevolen voor particuliere boorputten.
        </p>
        <p className="text-gray-700 mb-6">
          Neem voor bemonsteringsadvies contact op met uw provinciale omgevingsdienst. Zij kunnen
          aangeven of uw locatie in een geologisch risicogebied ligt en welk meetpakket passend is.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/radioactieve-stoffen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Radioactieve stoffen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van radioactieve stoffen die in drinkwater kunnen voorkomen en de bijbehorende normen.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose werkt en waarom het 95-99% van opgelost radium verwijdert.</p>
          </Link>
          <Link href="/waterfilter/strontium" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Strontium in leidingwater</h3>
            <p className="text-sm text-gray-600">Strontium is chemisch verwant aan radium. Lees over bronnen, gezondheidseffecten en filteroplossingen.</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Complete gids over EU- en Nederlandse drinkwaternormen voor alle relevante stoffen.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over radium en radon in drinkwater
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterfilter/arseen" className="text-[#005F8A] underline">arseen in drinkwater</Link>,{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
