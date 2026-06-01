import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Fluor in leidingwater Nederland: WHO-norm en osmosefilter',
  description:
    'Fluor in leidingwater NL: WHO-norm 1,5 mg/L. Nederland voegt geen fluor toe aan drinkwater. Osmosefilter verwijdert 94-96% fluoride. Gezondheidsfeiten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/fluor' },
  openGraph: {
    title: 'Fluor in leidingwater Nederland: WHO-norm en osmosefilter',
    description:
      'Fluor in leidingwater NL: WHO-norm 1,5 mg/L. Nederland voegt geen fluor toe aan drinkwater. Osmosefilter verwijdert 94-96% fluoride. Gezondheidsfeiten.',
    type: 'website',
  },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wordt er fluor toegevoegd aan Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Nederland heeft fluoridatie van drinkwater officieel beeindigd in 1973 na een rechterlijke uitspraak. Sindsdien wordt er geen fluor toegevoegd aan het drinkwater. Het fluoride dat in Nederlands leidingwater aanwezig is, komt van nature voor in het grondwater en bedraagt 0,05-0,3 mg/L, ruim onder de WHO-gezondheidsnorm van 1,5 mg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel fluoride zit er in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nederlands leidingwater bevat van nature 0,05-0,3 mg fluoride per liter. Het RIVM monitort dit jaarlijks. Er zijn geen regioos in Nederland waar het fluoride boven de WHO-norm van 1,5 mg/L uitkomt. Ter vergelijking: landen die water fluoridatie toepassen, zoals de VS, richten zich op 0,7 mg/L als optimaal niveau voor tandheelkundige bescherming.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de gezondheidseffecten van te veel fluoride in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chronische inname van fluoride boven 1,5 mg/L (WHO-norm) kan leiden tot dentale fluorose: witte vlekken of strepen op het tandglazuur bij kinderen tijdens de tand-ontwikkelingsfase. Bij niveaus boven 4 mg/L kan skeletfluorose optreden, een aandoening waarbij fluoride in de botten accumuleert en gewrichtsklachten veroorzaakt. In Nederland zijn deze niveaus niet aanwezig in het leidingwater; fluorose door drinkwater is hier dus geen risico.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter fluoride uit water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een omgekeerd osmosefilter (RO) verwijdert 94-96% van het fluoride. Bij een ingangsconcentratie van 0,2 mg/L bevat het gefilterde water slechts 0,008-0,012 mg/L fluoride. De rejectie hangt af van membraankwaliteit, waterdruk en watertemperatuur. Bij lage waterdruk (onder 3 bar) neemt de fluoriderejectie af. Gebruik altijd een gecertificeerd RO-membraan voor de beste rejectiewaarden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een Brita-filter fluoride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, een standaard Brita-filterkan met actief koolfilter verwijdert minder dan 5% fluoride. Actief kool is effectief voor chloor, bepaalde organische stoffen en smaak- en geurverbetering, maar niet voor kleine anionen zoals fluoride. Voor fluorideverwijdering is een omgekeerde osmose filter, activated alumina filter of bone char filter nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is een fluoridefilter noodzakelijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederland is een specifiek fluoridefilter vrijwel nooit noodzakelijk omdat de fluoridegehaltes in leidingwater laag zijn (0,05-0,3 mg/L). Een fluoridefilter is relevant bij: gebruik van putwater met hoge fluorideconcentraties, verblijf in gebieden met van nature hoog fluoride grondwater (zoals delen van Afrika, India of China), of voor mensen met specifieke medische redenen om de fluoride-inname te minimaliseren. Controleer bij putwater de fluorideconcentratie via een wateranalyse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen fluoride verwijderen met activated alumina en met osmose?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Activated alumina (Al2O3) is een gespecialiseerd filtermedium dat specifiek fluoride adsorbeert; het heeft een rejectie van 90-95% maar verliest effectiviteit naarmate het medium verzadigd raakt en moet periodiek worden geregenereerd of vervangen. Een RO-membraan verwijdert fluoride als onderdeel van een brede rejectie van alle opgeloste stoffen (94-96%) zonder specifieke verzadiging voor fluoride. Voor water met uitsluitend een fluorideprobleem is activated alumina goedkoper; voor water met meerdere vervuilingen is RO veelzijdiger.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heeft fluoride-arm drinkwater invloed op de tandenputjes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederland gebruiken vrijwel alle tandpastas fluoride (1.000-1.500 ppm), waardoor het aandeel van drinkwater in de totale fluoride-inname minimaal is. Wetenschappelijk onderzoek toont aan dat tandpasta de dominante bron van preventief fluoride is en dat leidingwaterfluoridatie in landen met goed gebruik van fluoride-tandpasta weinig extra tandbeschermend effect heeft. Het RIVM en de tandheelkundige beroepsvereniging KNMT adviseren dan ook geen zorgen over te laag fluoride via drinkwater in Nederland.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Fluor in leidingwater: normen, gezondheid en verwijdering',
  description:
    'Fluor in leidingwater NL: WHO-norm 1,5 mg/L. Nederland voegt geen fluor toe aan drinkwater. Osmosefilter verwijdert 94-96% fluoride. Gezondheidsfeiten.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/fluor',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function FluorPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Fluor', item: 'https://waterfilterplatform.nl/waterfilter/fluor' },
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
          <span>Fluor</span>
        </nav>

        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Fluor in leidingwater: normen, gezondheid en verwijdering
          </h1>
          <p className="text-[#005F8A] text-lg">
            Fluoride in leidingwater is een onderwerp waar veel vragen over bestaan, mede door
            de discussie rondom fluoridering in andere landen. In Nederland is de situatie
            helder: er wordt geen fluor toegevoegd en de van nature voorkomende niveaus zijn laag.
          </p>
        </section>

        <QuickAnswer answer="Nederland voegt geen fluor toe aan leidingwater (ondanks vroegere discussie). Het naturally occurring fluoride in Nederlands leidingwater is laag: 0,05-0,3 mg/L, ruim onder de WHO-norm van 1,5 mg/L. Een osmosefilter verwijdert 94-96% van fluoride. Fluoride-tekort is in Nederland geen probleem door gefluorideerde tandpasta." />

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is fluoride?
        </h2>
        <p className="text-gray-700 mb-4">
          Fluoride (F&#8315;) is het anion van het element fluor. Het komt van nature voor in
          de aardkorst als onderdeel van mineralen zoals fluoriet (CaF&#8322;) en fluorapatiet.
          Via het grondwater lost fluoride geleidelijk op in het drinkwater. In vulkanische
          gebieden en in lagen met hoge mineraalconcentraties kunnen fluoride-niveaus oplopen
          tot meerdere mg/L.
        </p>
        <p className="text-gray-700 mb-4">
          Fluoride heeft een dubbele rol in de gezondheid: in lage concentraties beschermt
          het het tandglazuur tegen zuurdemineralisatie (caries); in hoge concentraties is
          het toxisch voor tanden en botten. Dit maakt de dosering essentieel, wat ook de
          basis vormt voor de internationale WHO-norm van maximaal 1,5 mg/L.
        </p>
        <p className="text-gray-700 mb-6">
          In de volksmond wordt ook de term &quot;fluor&quot; gebruikt, hoewel dit chemisch
          gezien het element F&#8322; betreft. In de context van drinkwater wordt fluoride
          (F&#8315; ion) bedoeld.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fluoride in Nederlands leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland heeft drinkwaterfluoridering in 1973 beeindigd na een uitspraak van de
          Hoge Raad dat het toevoegen van stoffen aan drinkwater zonder wettige grondslag
          niet was toegestaan. Sindsdien bevatten alle Nederlandse drinkwaterbronnen uitsluitend
          van nature aanwezig fluoride.
        </p>
        <p className="text-gray-700 mb-4">
          Het RIVM monitort de fluorideconcentraties jaarlijks via het Landelijk Meetnet
          Drinkwater. De resultaten tonen dat het Nederlandse leidingwater gemiddeld{' '}
          <strong>0,05-0,3 mg fluoride per liter</strong> bevat, afhankelijk van de
          grondwaterbron. Er zijn geen regioos in Nederland waar fluoride boven de
          WHO-gezondheidsnorm van 1,5 mg/L uitkomt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking met andere landen
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland staat niet alleen in het niet-fluoridere van drinkwater. De aanpak
          verschilt sterk per land:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Verenigde Staten:</strong> het Centers for Disease Control (CDC) en EPA hanteren 0,7 mg/L als optimale concentratie voor tandheelkundig voordeel; circa 70% van de openbare waterlevering is gefluorideerd</li>
          <li><strong>Verenigd Koninkrijk:</strong> gedeeltelijke fluoridatie, afhankelijk van regio; ongeveer 10% van de bevolking krijgt gefluorideerd water</li>
          <li><strong>Australie:</strong> de meeste steden fluoridere het water tot 0,6-0,9 mg/L</li>
          <li><strong>Duitsland, Belgie, Denemarken:</strong> net als Nederland geen toevoeging van fluoride aan leidingwater</li>
          <li><strong>India, Ethiopie, delen van Oost-Afrika:</strong> van nature hoge fluorideconcentraties in grondwater (2-10 mg/L) veroorzaken gezondheidsklachten</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          WHO-norm: 1,5 mg/L
        </h2>
        <p className="text-gray-700 mb-4">
          De Wereldgezondheidsorganisatie (WHO) stelt een gezondheidsnorm van{' '}
          <strong>1,5 mg fluoride per liter</strong> drinkwater. Dit is de grenswaarde
          waaronder geen negatieve gezondheidseffecten verwacht worden bij levenslange
          dagelijkse consumptie. De Nederlandse drinkwaternorm volgt de WHO-richtlijn.
        </p>
        <p className="text-gray-700 mb-6">
          De norm van 1,5 mg/L biedt een ruime veiligheidsmarge: tandvlekken (dentale
          fluorose) kunnen al optreden bij langdurige inname boven 1,0-1,2 mg/L bij
          kinderen in de tand-ontwikkelingsfase, maar skeletfluorose treedt pas op bij
          chronische inname boven 4 mg/L gedurende vele jaren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten: te veel en te weinig fluoride
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Te veel fluoride (boven WHO-norm 1,5 mg/L):</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Dentale fluorose: witte vlekken of bruine verkleuringen op het tandglazuur bij kinderen &lt;8 jaar tijdens de tandontwikkeling</li>
          <li>Skeletfluorose bij &gt;4 mg/L chronisch: pijn en stijfheid in gewrichten, in ernstige gevallen vervorming van het skelet</li>
          <li>Schildkliereffecten: bij niveaus boven 4-8 mg/L zijn er aanwijzingen voor negatieve effecten op de schildklierfunctie</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Te weinig fluoride:</strong>
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Verhoogd risico op tandbederf (caries), met name bij kinderen</li>
          <li>In Nederland gecompenseerd door wijdverbreid gebruik van fluoride-tandpasta (1.000-1.500 ppm F)</li>
          <li>De KNMT (tandheelkundige beroepsorganisatie) ziet fluoride-tekort via drinkwater in Nederland als geen gezondheidsrisico</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fluoride verwijderen: methoden vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          Voor situaties waar fluorideverwijdering gewenst is (putwater, verblijf in
          risicogebieden of specifieke medische redenen) zijn de volgende methoden beschikbaar:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Fluoride verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerkingen</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Osmosefilter (RO)</td>
                <td className="border border-gray-300 px-3 py-2">94-96%</td>
                <td className="border border-gray-300 px-3 py-2">Breed effectief voor alle ionen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Activated alumina</td>
                <td className="border border-gray-300 px-3 py-2">90-95%</td>
                <td className="border border-gray-300 px-3 py-2">Specifiek voor fluoride, regenereerbaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bone char</td>
                <td className="border border-gray-300 px-3 py-2">85-90%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor vegetarisch/vegan gebruik</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Actief kool</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor fluorideverwijdering</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Filterkan (Brita e.d.)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor fluorideverwijdering</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter en fluoride: hoe het werkt
        </h2>
        <p className="text-gray-700 mb-4">
          Een omgekeerde osmose filter perst water onder hoge druk (3-8 bar) door een
          semipermeabel membraan met porieen van 0,0001 micrometer. Fluoride-ionen zijn
          groter dan watermoleculen en worden tegengehouden door het membraan.
          De rejectie van <strong>94-96%</strong> is afhankelijk van:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Waterdruk:</strong> bij lage druk (onder 3 bar) neemt de rejectie af naar 85-90%</li>
          <li><strong>Watertemperatuur:</strong> koud water (onder 15 &#176;C) geeft iets lagere rejectie</li>
          <li><strong>Membraankwaliteit:</strong> TFC-membranen (thin film composite) presteren beter dan CTA-membranen</li>
          <li><strong>pH:</strong> bij neutrale pH (6,5-7,5) is de rejectie optimaal</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een volledig overzicht van osmosefilters en hun werking vindt u op onze pagina{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            osmosefilter kopen
          </Link>. Zie ook onze pagina over{' '}
          <Link href="/waterfilter/actief-kool" className="text-[#005F8A] underline">
            actief koolfilter
          </Link>{' '}
          voor een vergelijking van filtermethoden.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een fluoridefilter in Nederland nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de overgrote meerderheid van de Nederlandse leidingwatergebruikers is een
          specifiek fluoridefilter niet nodig. Situaties waarbij het relevant kan zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Putwater:</strong> laat een wateranalyse uitvoeren; bij fluoride boven 0,5 mg/L en gebruik voor zuigelingenvoeding is een RO-filter aan te bevelen</li>
          <li><strong>Zuigelingenvoeding:</strong> WHO-richtlijnen adviseren bij fluoride boven 0,7 mg/L om gefilterd water te gebruiken voor flesvoeding om dentale fluorose bij baby&apos;s te voorkomen</li>
          <li><strong>Chronische nieraandoeningen:</strong> de nieren zijn de voornaamste uitscheidingsroute voor fluoride; bij verminderde nierfunctie accumuleert fluoride sneller</li>
          <li><strong>Verblijf of emigratie naar hoog-fluoride gebieden:</strong> bij putwater of lokaal leidingwater boven 1,0 mg/L is een osmosefilter zinvol</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Controleer voor putwater de fluorideconcentratie via een geaccrediteerd laboratorium.
          Waterbedrijven publiceren de fluoridegehaltes van leidingwater jaarlijks in hun
          kwaliteitsrapportage of via de RIVM-drinkwatermonitor.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van kalk, calcium en magnesium in Nederlands leidingwater.</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
            <p className="text-sm text-gray-600">Alle wettelijke grenswaarden voor drinkwater op een rij.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Hoe een osmosefilter fluoride en andere ionen uit water verwijdert.</p>
          </Link>
          <Link href="/waterfilter/fluoride" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor fluoride</h3>
            <p className="text-sm text-gray-600">Welke filters verwijderen fluoride en wanneer is dat zinvol?</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over fluor in leidingwater
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilter soorten</Link>,{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter kopen</Link>,{' '}
          <Link href="/waterfilter/actief-kool" className="text-[#005F8A] underline">actief koolfilter</Link> en{' '}
          <Link href="/leidingwater" className="text-[#005F8A] underline">leidingwater kwaliteit</Link>.
        </p>
      </main>
    </>
  );
}
