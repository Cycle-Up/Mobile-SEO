import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'IJzer in kraanwater: roestkleur, smaak en het beste waterfilter',
  description:
    'IJzer in kraanwater geeft roestbruine kleur, metaalachtige smaak en roestafzetting op sanitair. EU-norm is 200 ug/L. Oxidatiefilter of osmosefilter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kraanwater/ijzer' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waardoor komt rood of roestkleurig water uit de kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roestkleurig of roodbruin water wordt bijna altijd veroorzaakt door ijzer. In grondwater lost ijzer op als kleurloos Fe2+ (ferrous ijzer). Zodra dit water in contact komt met zuurstof in de leiding of in de glas, oxideert Fe2+ naar Fe3+ (ferric ijzer) dat als roestrood neerslag zichtbaar wordt. Mogelijke oorzaken thuis zijn geroeste ijzeren leidingen (woningen voor 1960), een eigen waterput in ijzerrijke bodem, geroeste gietijzeren hoofdleidingen of een uitgeputte waterontharder met een vervuild harsbed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor ijzer in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn 2020/2184 stelt de maximumwaarde voor ijzer op 200 microgram per liter (ug/L, oftewel 0,2 mg/L). Dit is een indicatorparameter: ijzer dient als indicator voor de staat van het distributiesysteem (roest, corrosie) en is bij deze concentratie geen directe gezondheidsbedreiging. De smaakdrempel voor ijzer ligt op circa 0,3 mg/L: boven dit niveau smaakt water naar metaal. Gezondheidsrisico bij volwassenen treedt pas op bij langdurige inname boven 5 mg/L, wat in Nederlands leidingwater niet voorkomt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter ijzer uit drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een omgekeerde osmose filter verwijdert 95 tot 99% van het ijzer, zowel opgelost Fe2+ als gesuspendeerd Fe3+. Het sedimentprefilter vangt grotere roestdeeltjes op, terwijl het RO-membraan de opgeloste ijzerionen tegenhoudt. Bij hoge ijzerconcentraties (boven 1 mg/L) in eigen bronwater is pre-oxidatie (beluchting) aanbevolen om Fe2+ om te zetten naar filtreerbaar Fe3+ voordat het water het RO-membraan bereikt; anders kan opgelost Fe2+ het membraan vervuilen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen ijzer en mangaan in water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De kleur van het neerslag is het voornaamste onderscheid: ijzer geeft roodbruin neerslag (roest), mangaan geeft zwart of donkergrijs neerslag. IJzer oxideert sneller dan mangaan bij contact met lucht. Beide metalen komen vaak samen voor in diep grondwater. De EU-norm voor ijzer is 200 ug/L, voor mangaan slechts 50 ug/L. Filteroplossingen overlappen grotendeels: osmose en katalytische oxidatiefilters zijn effectief voor beide stoffen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een waterontharder voor ijzerverwijdering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een waterontharder (ionenuitwisselaar) verwijdert ijzer als bijwerking omdat ijzerionen uitgewisseld worden samen met calcium en magnesium. Echter, ijzer vervuilt het harsbed en kan de werking van de ontharder ernstig beperken. Bij meer dan 0,3 mg/L ijzer in het water is een ijzerblokkeer-zouttoevoeging (ijzervrij zout) aanbevolen, of beter nog: een aparte ijzerverwijderaar voor de ontharder. Roestijzer (Fe3+) beschadigt het harsbed permanent en moet voor de ontharder worden gefilterd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verwijder ik ijzer uit mijn eigen bronwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij ijzerconcentraties boven 1 mg/L in eigen bronwater is een volledige ijzerverwijderingsinstallatie aanbevolen: een beluchtingstank (oxideert Fe2+ naar Fe3+), gevolgd door een oxidatiefilter of groenzandfilter (vangt neergeslagen ijzer op), en een fijnfilter als eindstap. Bij lage concentraties (onder 0,5 mg/L) volstaat een osmosefilter. Schakel een professioneel installateur in voor een volledige bronwateranalyse en op maat gemaakte installatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn roestpijpen gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geroeste ijzeren leidingen in oude woningen (voor 1960) geven ijzer en roestdeeltjes af aan het water. Hoewel een hoge ijzerinname bij volwassenen pas boven 5 mg/L een gezondheidsrisico vormt, zijn roestdeeltjes ongewenst vanwege smaak, verkleuring van sanitair en wasgoed. Bovendien kunnen roestpijpen ook lood en andere zware metalen uitlogen. Bij een woning met ijzeren leidingen is leidingvervanging de beste langetermijnoplossing; op korte termijn is een osmosefilter onder het aanrecht effectief.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'IJzer in kraanwater: roestkleur, smaak en het beste waterfilter',
  description:
    'IJzer in kraanwater geeft roestbruine kleur, metaalachtige smaak en roestafzetting op sanitair. EU-norm 200 ug/L. Osmosefilter verwijdert 95-99% ijzer.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kraanwater/ijzer',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KraanwaterIJzerPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kraanwater', item: 'https://waterfilterplatform.nl/kraanwater' },
              { '@type': 'ListItem', position: 3, name: 'IJzer in kraanwater', item: 'https://waterfilterplatform.nl/kraanwater/ijzer' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kraanwater" className="hover:underline">Kraanwater</Link> &rsaquo;{' '}
          <span>IJzer in kraanwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            IJzer in kraanwater: roestkleur, smaak en het beste waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Roestbruin water, metaalachtige smaak en oranje vlekken op sanitair zijn
            klassieke symptomen van te veel ijzer in kraanwater. De EU-norm is 200 microgram
            per liter. Een osmosefilter of katalytisch oxidatiefilter verwijdert ijzer effectief
            en herstelt de waterkwaliteit.
          </p>
        </section>

        <QuickAnswer answer="IJzer in kraanwater herkent u aan roestrood water na stilstand, metaalachtige smaak en oranje vlekken op sanitair. De EU-norm is 200 ug/L. Leidingwater van watermaatschappijen voldoet altijd aan de norm. IJzerproblemen thuis wijzen op roestpijpen, eigen bronwater of een waterontharder met vervuild harsbed. Een osmosefilter verwijdert 95-99% ijzer." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is ijzer in water?
        </h2>
        <p className="text-gray-700 mb-4">
          IJzer (Fe) is het op drie na meest voorkomende element in de aardkorst en lost op
          in grondwater vanuit ijzerhoudende mineralen en gesteenten. In drinkwater komt ijzer
          voor in twee vormen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Fe2+ (ferrous ijzer, opgelost):</strong> kleurloos bij het tappen,
            maar vervaagt snel naar roodbruin bij contact met zuurstof. Dit is de dominante
            vorm in diep grondwater en in eigen putten.
          </li>
          <li>
            <strong>Fe3+ (ferric ijzer, neergeslagen):</strong> onoplosbaar, roestrood-bruin
            neerslag dat als vlokken of deeltjes zichtbaar is in het water. Ontstaat door
            oxidatie van Fe2+ bij contact met zuurstof of chloor.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Leidingwater van Nederlandse drinkwatermaatschappijen voldoet altijd aan de EU-norm
          voor ijzer: watermaatschappijen behandelen het bronwater en verwijderen ijzer voor
          distributie. Een ijzerprobleem thuis wijst daarom altijd op een lokale bron: geroeste
          leidingen in uw woning, een eigen waterput of boorput, of een waterontharder met
          vervuild harsbed.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronnen van ijzer in uw water
        </h2>
        <p className="text-gray-700 mb-4">
          De meest voorkomende oorzaken van te veel ijzer in huishoudelijk water:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Eigen waterput of boorput in ijzerrijke bodem:</strong> provincies
            Brabant, Gelderland en Friesland staan bekend om grondwater met hoge
            ijzerconcentraties. Ondiep en middeldiep grondwater in zandgebieden bevat
            regelmatig meer dan 1 mg/L ijzer.
          </li>
          <li>
            <strong>Geroeste ijzeren leidingen:</strong> woningen gebouwd voor 1960
            hebben soms nog (deels) ijzeren binnenhuisleidingen. Corrosie van deze leidingen
            geeft roest en ijzerdeeltjes af aan het water, met name na een nacht stilstand.
          </li>
          <li>
            <strong>Gietijzeren hoofdleidingen:</strong> in sommige oudere wijken zijn de
            gemeentelijke hoofdleidingen nog van gietijzer. Bij corrosie of drukveranderingen
            kunnen roestdeeltjes loskomen.
          </li>
          <li>
            <strong>Uitgeputte of vervuilde waterontharder:</strong> een waterontharder
            met een oud of vervuild harsbed kan ijzer dat eerder werd opgenomen teruggeven
            aan het water, waardoor de ijzerconcentratie na de ontharder hoger is dan ervoor.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Symptomen: hoe herkent u ijzer in uw water?
        </h2>
        <p className="text-gray-700 mb-4">
          Herkent u een of meer van deze signalen? Dan is verhoogd ijzergehalte de
          waarschijnlijke oorzaak:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Roodbruin of oranjebruin water</strong> bij de eerste straal na een
            nacht stilstand; wordt vaak helderder nadat u een paar minuten heeft laten lopen
          </li>
          <li>
            <strong>Roestvlekken op porselein</strong> (toilet, wastafel, bad) die snel
            terugkomen na schoonmaken
          </li>
          <li>
            <strong>Oranje of bruine vlekken op wit wasgoed</strong> na het wassen, met
            name bij warm wassen
          </li>
          <li>
            <strong>Metaalachtige smaak</strong> van kraanwater, koffie of thee; de
            smaakdrempel voor ijzer ligt op circa 0,3 mg/L
          </li>
          <li>
            <strong>Roestkorrels in de waterkoker</strong> of op de bodem van pannen
            na het koken van water
          </li>
          <li>
            <strong>Verstopte sproeikop</strong> of verminderde waterstroom door
            ijzerafzetting in de kleine gaatjes
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en gezondheidseffecten
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-drinkwaterrichtlijn 2020/2184</strong> stelt de maximumwaarde voor
          ijzer op <strong>200 microgram per liter (ug/L, oftewel 0,2 mg/L)</strong>.
          Dit is een indicatorparameter, bedoeld als signaal voor de staat van het
          distributiesysteem, niet prim<wbr/>air als gezondheidsnorm.
        </p>
        <p className="text-gray-700 mb-4">
          De smaakdrempel voor ijzer ligt op circa <strong>0,3 mg/L</strong>: boven dit
          niveau smaakt water naar metaal. Een gezondheidsrisico voor volwassenen treedt
          in de praktijk pas op bij langdurige inname boven <strong>5 mg/L</strong>, wat
          in Nederlands leidingwater niet voorkomt. Bij eigen bronwater in ijzerrijke
          gebieden kunnen concentraties echter sterk varieren, soms tot boven 5 mg/L.
        </p>
        <p className="text-gray-700 mb-6">
          Kinderen, zwangere vrouwen en mensen met bepaalde bloedaandoeningen (zoals
          hemochromatose) zijn gevoeliger voor hoge ijzerinname en doen er verstandig
          aan bij verhoogde ijzerconcentraties in bronwater te filteren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          IJzer verwijderen: filtermethoden vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          De beste methode hangt af van de concentratie ijzer en de vorm (opgelost Fe2+
          of neergeslagen Fe3+):
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Effectiviteit</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Beste voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">95 tot 99%</td>
                <td className="border border-gray-300 px-3 py-2">Drinkwater; lage tot middelhoge concentraties (&lt;1 mg/L)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Katalytisch oxidatiefilter (groenzand, birm)</td>
                <td className="border border-gray-300 px-3 py-2">90 tot 99%</td>
                <td className="border border-gray-300 px-3 py-2">Eigen bron met hoge concentraties (&gt;1 mg/L)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Beluchting + sedimentatie</td>
                <td className="border border-gray-300 px-3 py-2">80 tot 95%</td>
                <td className="border border-gray-300 px-3 py-2">Eerste stap bij hoge Fe2+-concentraties in bronwater</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sedimentfilter (5 micron)</td>
                <td className="border border-gray-300 px-3 py-2">Gedeeltelijk</td>
                <td className="border border-gray-300 px-3 py-2">Vangt alleen gesuspendeerd Fe3+ op, niet opgelost Fe2+</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterontharder</td>
                <td className="border border-gray-300 px-3 py-2">Gedeeltelijk</td>
                <td className="border border-gray-300 px-3 py-2">Bijwerking; ijzer beschadigt harsbed op termijn</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter voor ijzer: hoe het werkt
        </h2>
        <p className="text-gray-700 mb-4">
          Een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose filter</Link>{' '}
          onder het aanrecht is voor de meeste huishoudens met ijzerproblemen de meest
          praktische oplossing. Het systeem werkt in meerdere stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Sedimentfilter (5 micron):</strong> vangt zichtbare roestdeeltjes
            en gesuspendeerd Fe3+ op
          </li>
          <li>
            <strong>Actief koolfilter (prefilter):</strong> verwijdert chloor en
            organische verbindingen die het membraan kunnen beschadigen
          </li>
          <li>
            <strong>RO-membraan (0,0001 micron):</strong> houdt opgeloste ijzerionen
            (Fe2+ en Fe3+) en alle andere opgeloste stoffen tegen; verwijdering 95 tot 99%
          </li>
          <li>
            <strong>Actief kool postfilter:</strong> verfijnt de smaak van het geproduceerde
            water
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Bij hoge ijzerconcentraties in bronwater (boven 1 mg/L) is pre-oxidatie via
          beluchting aanbevolen: opgelost Fe2+ wordt omgezet naar neergeslagen Fe3+ dat
          door het sedimentfilter wordt tegengehouden, waardoor het RO-membraan minder
          snel vervuilt. Bij twijfel over de concentratie in uw bronwater: laat testen
          bij een geaccrediteerd laboratorium.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Eigen bron met ijzer: complete aanpak
        </h2>
        <p className="text-gray-700 mb-4">
          Bij ijzerconcentraties boven 1 mg/L in een eigen bron of boorput is een
          volledige ijzerverwijderingsinstallatie aan te bevelen, omdat een osmosefilter
          alleen bij hogere concentraties het membraan te snel vervuilt:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Beluchtingstank:</strong> perslucht wordt door het bronwater geblazen;
            Fe2+ oxideert naar Fe3+ en CO2 wordt verwijderd
          </li>
          <li>
            <strong>Oxidatiefilter (groenzand of birm):</strong> filtert neergeslagen Fe3+
            en kataly<wbr/>seert verdere oxidatie; meest effectief voor concentraties
            tot 15 mg/L
          </li>
          <li>
            <strong>Fijnfilter (1 tot 5 micron):</strong> vangt resterende fijne
            ijzerdeeltjes op
          </li>
          <li>
            <strong>Osmosefilter als eindtrap (optioneel):</strong> voor drinkwaterkwaliteit
            bij de keukenkraan, na de ijzerverwijderingsinstallatie
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Schakel altijd een professioneel waterbehandelingsbedrijf in voor bronwateranalyse
          en dimensionering van de installatie. De aanpak is sterk afhankelijk van de
          exacte samenstelling van uw bronwater: ook mangaan, pH, hardheid en biologische
          parameters spelen een rol.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          IJzer versus mangaan: het verband
        </h2>
        <p className="text-gray-700 mb-4">
          IJzer en mangaan komen in grondwater bijna altijd samen voor en hebben een
          vergelijkbare herkomst en gedrag. Beide zijn opgelost in zuurstofarm diep
          grondwater en neergeslagen in geoxideerd water. Zie de pagina over{' '}
          <Link href="/waterfilter/mangan" className="text-[#005F8A] underline">mangaan in drinkwater</Link>{' '}
          voor een gedetailleerde behandeling van mangaanspecifieke aspecten, symptomen
          en filteropties.
        </p>
        <p className="text-gray-700 mb-6">
          Als u zwart neerslag ziet naast roodbruin neerslag, is de kans groot dat u
          zowel ijzer als mangaan in uw water heeft. Een osmosefilter verwijdert
          beide effectief in een stap.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over ijzer in kraanwater
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
          <Link href="/waterfilter/mangan" className="text-[#005F8A] underline">mangaan in drinkwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/kraanwater" className="text-[#005F8A] underline">kraanwater kwaliteit</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
