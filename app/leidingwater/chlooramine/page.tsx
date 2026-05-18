import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Chlooramine in leidingwater: verschil met chloor en gevolgen voor waterfilters',
  description:
    'Sommige drinkwaterbedrijven schakelen over van chloor naar chlooramine als desinfectant. Chlooramine is stabieler maar lastiger te verwijderen: vereist.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/chlooramine' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is chlooramine en hoe verschilt het van chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chlooramine is een verbinding van ammoniak (NH3) en chloor. Het vormt een stabielere desinfectant dan vrij chloor en reist verder door het leidingnet zonder verlies. Chloor is een sterker oxidatiemiddel en verdampt bij staan, terwijl chlooramine niet verdampt en langer actief blijft. In de VS en het VK is chlooramine de dominante desinfectant; in Nederland gebruiken de meeste waterbedrijven nog vrij chloor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een gewone Brita-filterkan chlooramine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Standaard actief koolfilters zoals in Brita-filterkannen zijn niet effectief tegen chlooramine. Gewone actieve kool adsorbeert vrij chloor uitstekend maar heeft onvoldoende reactiecapaciteit voor de stabilere chlooramine-verbinding. Voor chlooraminefiltratie is catalytisch actief kool (bijv. Centaur-kool) of een osmosefilter vereist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gebruik ik water met chlooramine in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste Nederlandse gemeenten wordt nog vrij chloor gebruikt als desinfectant. Toch schakelen sommige regio\'s over naar chlooramine, met name bij lange transportleidingen of in droge jaren waarbij water langer in het net verblijft. Controleer het jaarrapport of de watersamenstelling op de website van uw drinkwaterbedrijf om zekerheid te krijgen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert chlooramine het meest effectief?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Catalytisch actief kool (zoals Centaur-koolgrade) verwijdert chlooramine voor 90% of meer via chemische katalyse. KDF-filtermedium reageert chemisch met chlooramine en is effectief als aanvullend medium. Een osmosefilter (RO) verwijdert chlooramine via het semi-permeabele membraan met een rendement van 90-98%. Dit is de meest volledige oplossing, zeker in combinatie met een actief kool voorfil ter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is chlooramine gevaarlijk om te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de concentraties die worden gehanteerd in drinkwater (minder dan 3 mg/L) is chlooramine voor de meeste mensen niet direct gevaarlijk. Bezorgdheid bestaat over desinfectiebijproducten (DBP\'s): chlooramine kan haloacetonitrilen (HAN\'s) vormen die mogelijk toxischer zijn dan de trihalomethanen (THM\'s) van chloordesinfectie. Langetermijnonderzoek loopt nog. Voor nierdialysepatienten is chlooramine levensgevaarlijk en moet het volledig worden verwijderd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is chlooramine gevaarlijk bij nierdialyse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij nierdialyse worden grote hoeveelheden water direct in contact gebracht met het bloed via het dialysemembraan. Chlooramine passeert dit membraan en kan hemolytische anemie (afbraak van rode bloedcellen) veroorzaken, wat levensgevaarlijk is. Ziekenhuizen en dialysecentra moeten chlooramine 100% verwijderen met gespecialiseerde waterzuiveringsinstallaties, waaronder katalytisch actief kool en RO-membranen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verdampt chlooramine als ik water laat staan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Dit is een belangrijk verschil met vrij chloor. Vrij chloor verdampt als u water een uur laat staan of verhit. Chlooramine verdampt niet bij staan of koken. Het blijft chemisch stabiel in water, wat de reden is dat het zo effectief is voor lange distributienetten, maar ook de reden waarom gewone actief kool en het simpelweg bewaren van water geen oplossing biedt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe ruikt en smaakt chlooramine in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chlooramine geeft een rubber- of chloorachtige smaak en geur aan water. Sommige mensen vinden het minder scherp dan vrij chloor, anderen ervaren de geur juist als onaangenamer, vergelijkbaar met een natte zwempakgeur. De smaakperceptie verschilt per persoon. Bij een plotselinge overgang van chloor naar chlooramine in uw drinkwaterregio merkt u dit doorgaans aan een veranderde watersmaak.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Chlooramine in leidingwater: verschil met chloor en gevolgen voor waterfilters',
  description:
    'Sommige drinkwaterbedrijven schakelen over van chloor naar chlooramine als desinfectant. Chlooramine is stabieler maar lastiger te verwijderen: vereist.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/chlooramine',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ChlooraminePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Chlooramine in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/chlooramine' },
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
          <span>Chlooramine in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Chlooramine in leidingwater: verschil met chloor en gevolgen voor waterfilters
          </h1>
          <p className="text-[#005F8A] text-lg">
            Chlooramine vervangt in steeds meer regio&apos;s het traditionele chloor als desinfectant in
            leidingwater. Het is stabieler en reist verder door het net &mdash; maar gewone actief koolfilters
            zijn er niet tegen bestand. Ontdek welke filters wel werken en wat chlooramine betekent voor
            uw gezondheid.
          </p>
        </section>

        <QuickAnswer answer="Chlooramine is een combinatie van ammoniak en chloor die stabieler is dan vrij chloor en niet verdampt bij staan. Gewone actief koolfilters verwijderen chlooramine NIET. Effectieve opties zijn catalytisch actief kool (Centaur-grade), KDF-medium of een osmosefilter. Voor nierdialyse is chlooramine levensgevaarlijk." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is chlooramine?
        </h2>
        <p className="text-gray-700 mb-4">
          Chlooramine ontstaat wanneer chloor reageert met ammoniak (NH3) in water. Afhankelijk van de
          verhouding tussen chloor en ammoniak en de pH van het water worden drie varianten gevormd:
          <strong> monochloraminen</strong> (NH2Cl), <strong>dichloraminen</strong> (NHCl2) en
          <strong> trichloraminen</strong> (NCl3). In drinkwaterbehandeling wordt bewust monochloramien
          gevormd door nauwkeurig gedoseerde toevoeging van ammoniak aan gechloreerd water.
        </p>
        <p className="text-gray-700 mb-6">
          Als desinfectant heeft chlooramine twee grote voordelen ten opzichte van vrij chloor: het is
          chemisch stabieler en daardoor effectief over langere afstanden in het distributiestelsel, en
          het vormt minder trihalomethanen (THM&apos;s) &mdash; een bekende groep desinfectiebijproducten
          die bij vrij chloor ontstaan. Dit maakt chlooramine aantrekkelijk voor drinkwaterbedrijven
          die te maken hebben met lange transportleidingen of die hun THM-gehaltes willen verlagen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chlooramine in Nederland en internationaal
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste Nederlandse drinkwaterbedrijven gebruiken nog vrij chloor als einddesinfectant,
          soms in combinatie met UV-straling of ozon. Toch schakelen sommige regio&apos;s over naar
          chlooramine, met name wanneer water lange transportleidingen moet doorlopen of tijdens droge
          perioden waarbij water langer in het net verblijft en vrij chloor sneller uitgeput raakt.
        </p>
        <p className="text-gray-700 mb-6">
          Internationaal is het beeld anders. In de <strong>Verenigde Staten</strong> gebruiken meer
          dan 30% van de drinkwaterbedrijven chlooramine als primaire desinfectant. In het{' '}
          <strong>Verenigd Koninkrijk</strong> is chlooramine eveneens wijdverspreid, met name in
          Engeland en Wales. Voor Nederlanders die naar deze landen verhuizen of er langdurig verblijven,
          is het belangrijk te weten dat hun bestaande waterfilter mogelijk niet voldoet.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloor versus chlooramine: de belangrijkste verschillen
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Eigenschap</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Vrij chloor</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Chlooramine</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Oxidatiekracht</td>
                <td className="border border-gray-300 px-3 py-2">Sterk</td>
                <td className="border border-gray-300 px-3 py-2">Zwakker</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Stabiliteit in net</td>
                <td className="border border-gray-300 px-3 py-2">Lager (verlies over afstand)</td>
                <td className="border border-gray-300 px-3 py-2">Hoger (stabiel over lange afstand)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Verdampt bij staan</td>
                <td className="border border-gray-300 px-3 py-2">Ja (1-2 uur)</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Verwijderbaar door gewone actief kool</td>
                <td className="border border-gray-300 px-3 py-2">Ja</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">THM-vorming (trihalomethanen)</td>
                <td className="border border-gray-300 px-3 py-2">Hoog</td>
                <td className="border border-gray-300 px-3 py-2">Laag</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">HAN-vorming (haloacetonitrilen)</td>
                <td className="border border-gray-300 px-3 py-2">Laag</td>
                <td className="border border-gray-300 px-3 py-2">Mogelijk hoger</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Smaak en geur van chlooramine in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Chlooramine geeft een karakteristieke rubber- of chloorachtige smaak en geur aan drinkwater.
          De smaakperceptie is persoonlijk: sommige mensen vinden chlooramine minder indringend dan vrij
          chloor, anderen ervaren het als onaangenamer &mdash; vergelijkbaar met de geur van een natte
          duikpak of zwembadwater na intensief gebruik.
        </p>
        <p className="text-gray-700 mb-6">
          Een belangrijk punt: omdat chlooramine <em>niet</em> verdampt, helpt het invullen van een
          waterkruik of het laten staan van water op het aanrecht niet om de geur te verminderen.
          Dit is het tegenovergestelde van water met vrij chloor, waarbij even wachten of licht
          verwarmen het probleem grotendeels oplost.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten van chlooramine
        </h2>
        <p className="text-gray-700 mb-4">
          Bij de concentraties die drinkwaterbedrijven hanteren (maximaal 3 mg/L, in de praktijk
          veelal 1-2 mg/L) vormt chlooramine voor de meeste mensen geen direct gezondheidsrisico.
          De EU-drinkwaternormen stellen een maximum van 0,5 mg/L voor chloor en gerelateerde
          desinfectantia. Toch zijn er aandachtspunten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Haloacetonitrilen (HAN&apos;s):</strong> chlooramine kan bij reactie met organische
            stof in water HAN&apos;s vormen als desinfectiebijproducten. Sommige studies suggereren dat
            HAN&apos;s potentieel toxischer zijn dan de THM&apos;s van chloordesinfectie, maar het
            onderzoek loopt nog en grenswaarden zijn niet vastgesteld
          </li>
          <li>
            <strong>Huidgevoeligheid:</strong> mensen met atopische dermatitis of psoriasis rapporteren
            soms verhoogde huidklachten bij douchen met chlooraminewater, mogelijk door de zwakkere
            oxidatieve irritatie over langere contacttijd
          </li>
          <li>
            <strong>Ammoniumvrijstelling:</strong> bij sommige pH-omstandigheden kan chlooramine
            in water geleidelijk afbreken en ammonium vrijstellen, wat een voedingsbron is voor
            nitrificerende bacterien in het leidingnet
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chlooramine en nierdialyse: een levensgevaarlijke combinatie
        </h2>
        <p className="text-gray-700 mb-4">
          Voor nierdialysepatienten is de aanwezigheid van chlooramine in water <strong>levensgevaarlijk</strong>.
          Bij hemodialyse wordt een groot volume water (circa 120-150 liter per sessie) gebruikt dat via
          een semipermeable dialysemembrane in contact komt met het bloed van de patient. Chlooramine
          passeert dit membraan en oxideert het hemoglobine in rode bloedcellen, wat leidt tot
          hemolytische anemie &mdash; een ernstige, potentieel fatale bloedaandoening.
        </p>
        <p className="text-gray-700 mb-6">
          Dialysecentra en ziekenhuizen zijn wettelijk verplicht het dialysewater te behandelen met
          meertraps zuivering, waaronder katalytisch actief kool en RO-membranen, om chlooramine
          volledig (100%) te verwijderen. Patienten die thuis dialyseren via thuishemodialyse moeten
          hun waterbehandelingssysteem laten controleren door een specialist als zij wonen in een
          regio die overschakelt op chlooramine.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke waterfilters verwijderen chlooramine?
        </h2>
        <p className="text-gray-700 mb-4">
          De keuze van het juiste filter is bij chlooramine cruciaal. Hieronder de opties van
          meest naar minst effectief:
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">1. Osmosefilter (beste keuze)</h3>
            <p className="text-gray-700 text-sm">
              Een{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">
                osmosefilter
              </Link>{' '}
              verwijdert chlooramine via het RO-membraan met een rendement van 90-98%.
              In combinatie met een catalytisch actief kool voorfilter nadert het rendement de 100%.
              Dit is de meest volledige thuisoplossing voor chlooramineverwijdering.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">2. Catalytisch actief kool (Centaur-grade)</h3>
            <p className="text-gray-700 text-sm">
              Catalytisch actief kool heeft een speciaal geactiveerde oppervlaktestructuur die de
              chemische afbraak van chlooramine katalyseert. Merken als Centaur (Calgon Carbon) en
              Jacobi Catalytic bereiken verwijderingsrendement van 90% of meer. Dit is de standaard
              in professionele waterzuivering voor chlooraminebehandeling.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">3. KDF-filtermedium</h3>
            <p className="text-gray-700 text-sm">
              KDF (Kinetic Degradation Fluxion) is een koper-zinklegering die via redoxreacties
              chlooramine chemisch omzet. Effectief als aanvullend filtermedium in combinatie
              met catalytisch kool of als onderdeel van een meertraps filtersysteem.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 border-red-200 bg-red-50">
            <h3 className="font-semibold text-red-700 mb-2">Niet effectief: gewone actief kool</h3>
            <p className="text-gray-700 text-sm">
              Standaard actief koolfilters &mdash; inclusief filterkannen zoals{' '}
              <Link href="/filterkan" className="text-[#005F8A] underline">
                Brita en vergelijkbare merken
              </Link>{' '}
              &mdash; zijn <strong>niet effectief</strong> tegen chlooramine. De adsorptiekinetiek van
              gewone actieve kool is te traag voor de stabiele chlooramineverbinding. Ook het simpelweg
              laten staan of koken van water verwijdert chlooramine niet.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe controleer ik of mijn leidingwater chlooramine bevat?
        </h2>
        <p className="text-gray-700 mb-4">
          De eenvoudigste methode is het raadplegen van uw drinkwaterbedrijf. Alle Nederlandse
          drinkwaterbedrijven publiceren jaarlijks een watersamenstelling of waterkwaliteitsrapport
          op hun website. Hierin staat vermeld welke desinfectiemethode wordt gebruikt.
        </p>
        <p className="text-gray-700 mb-4">
          U kunt ook een eenvoudige titertest uitvoeren met teststrips die speciaal zijn ontworpen
          voor zowel vrij chloor als totaal chloor (inclusief chlooramine). Als het totaalchloor
          significant hoger is dan het vrije chloor, is chlooramine waarschijnlijk aanwezig.
          Deze strips zijn verkrijgbaar bij zwembadspecialisten en waterfilterspecialisten.
        </p>
        <p className="text-gray-700 mb-6">
          Zie onze pagina over{' '}
          <Link href="/leidingwater/chloor" className="text-[#005F8A] underline">
            chloor in leidingwater
          </Link>{' '}
          voor meer informatie over desinfectie van drinkwater in Nederland en de bijbehorende
          testmethoden.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over chlooramine in leidingwater
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
          <Link href="/leidingwater/chloor" className="text-[#005F8A] underline">chloor in leidingwater</Link>,{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters vergelijken</Link>,{' '}
          <Link href="/filterkan" className="text-[#005F8A] underline">filterkan vergelijking</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter uitleg</Link>.
        </p>
      </main>
    </>
  );
}
