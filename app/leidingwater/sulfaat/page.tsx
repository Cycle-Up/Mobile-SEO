import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Sulfaat in leidingwater: smaak, normen en waterfilter',
  description:
    'Sulfaat (SO4) in leidingwater geeft een bittere smaak boven 250 mg/L. De EU-norm is 250 mg/L. In Nederland zit sulfaat gemiddeld op 50-150 mg/L.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/sulfaat' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is sulfaat en hoe komt het in leidingwater terecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sulfaat (SO4 2-) is een negatief geladen ion dat van nature voorkomt in grond- en oppervlaktewater. Het ontstaat door verwering van gesteenten zoals gips (calciumsulfaat) en pyriet (ijzersulfide). Menselijke bronnen zijn meststoffen en pesticiden in de landbouw en industriele lozingen. In grondwater zijn concentraties van 10 tot 200 mg/L normaal. Drinkwaterbedrijven bewaken het sulfaatgehalte en houden het ruim onder de EU-norm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor sulfaat in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn (2020/2184) stelt een indicatorwaarde van 250 mg/L voor sulfaat. Dit is geen gezondheidsgrenswaarde maar een esthetische norm, bedoeld om smaakoverlast te voorkomen. De WHO hanteert een gezondheidskundige richtwaarde van 500 mg/L, maar adviseert al waakzaamheid boven 200 mg/L vanwege smaakeffecten. Nederlandse drinkwaterbedrijven houden gemiddeld 50 tot 150 mg/L aan, ruimschoots onder de EU-norm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan sulfaat in drinkwater een laxerend effect hebben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, maar uitsluitend bij zeer hoge concentraties. Boven 600 tot 700 mg/L kan sulfaatrijk water een licht laxerend effect hebben, met name bij personen die er niet aan gewend zijn. Historisch wordt dit verklaard door Epsom-zout (magnesiumsulfaat), dat medicinaal als laxeermiddel werd gebruikt. Bij de EU-norm van 250 mg/L is er geen enkel risico op dit effect. Nederlandse drinkwaterbronnen zitten ver onder de drempel waarbij laxerende effecten optreden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Geeft sulfaat een bittere smaak aan drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Sulfaat geeft bij hogere concentraties een bitter tot wrang smaakeffect aan drinkwater. De smaakdrempel ligt bij de meeste mensen rond 200 tot 250 mg/L, wat samenvalt met de EU-indicatorwaarde. Lage sulfaatconcentraties (onder 100 mg/L) zijn onmerkbaar voor het menselijk smaakorgaan. De zwavelachtige "eieren"-geur die mensen soms associeren met waterverontreiniging is niet afkomstig van sulfaat zelf, maar van waterstofsulfide (H2S) dat ontstaat bij bacteriele afbraak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter sulfaat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een osmosefilter is zeer effectief voor sulfaatverwijdering. Het RO-membraan houdt 97 tot 99% van sulfaat tegen. Sulfaat is een tweewadig anion (SO4 2-) met een relatief groot ionformaat, waardoor het bijzonder goed wordt tegengehouden door het dichte semipermeabele membraan. Dit maakt omgekeerde osmose de meest effectieve thuisoplossing voor sulfaatverwijdering, samen met nanofiltratie (85-97%) en anionenwisseling (90-99%).',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een Brita-filterkan voor sulfaat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. Actief koolstoffilters, inclusief Brita-filterkannen en vergelijkbare producten, hebben geen effect op sulfaat of andere anorganische ionen. Actieve kool adsorbeert organische verbindingen, chloor en geur- en smaakstoffen, maar is niet in staat geladen ionen zoals sulfaat, nitraat of chloride te verwijderen. Voor sulfaatverwijdering zijn omgekeerde osmose, nanofiltratie of anionenwisseling nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sulfaat in leidingwater gevaarlijk voor de gezondheid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij de concentraties die voorkomen in Nederlands leidingwater (gemiddeld 50-150 mg/L) is sulfaat niet gevaarlijk voor de gezondheid. De EU-norm van 250 mg/L is een esthetische indicatorwaarde, geen toxicologische grens. De WHO gezondheidskundige richtwaarde ligt bij 500 mg/L. Sulfaat is een normaal bestanddeel van het menselijk dieet via voedsel en water. Pas bij zeer hoge concentraties (boven 600 mg/L) zijn tijdelijke maagdarmklachten mogelijk bij gevoelige personen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer moet ik mijn water laten testen op sulfaat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een watertest op sulfaat is zinvol als u een eigen waterput of bron gebruikt, als u in een industriegebied of intensief agrarisch gebied woont, of als uw drinkwater een duidelijk bittere of wrange smaak heeft en de TDS-waarde hoog is. Leidingwater van drinkwaterbedrijven valt binnen de normen. Een geaccrediteerd laboratorium zoals Kiwa, SGS Intron of Eurofins voert een sulfaatanalyse uit voor circa 20 tot 40 euro. Voor een compleet beeld kunt u een breed ionenpakket laten testen voor 80 tot 150 euro.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Sulfaat in leidingwater: smaak, normen en waterfilter',
  description:
    'Sulfaat (SO4) in leidingwater geeft een bittere smaak boven 250 mg/L. De EU-norm is 250 mg/L. Osmosefilter verwijdert 97-99% van sulfaat.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/sulfaat',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LeidingwaterSulfaatPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Sulfaat in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/sulfaat' },
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
          <span>Sulfaat in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Sulfaat in leidingwater: smaak, normen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Sulfaat (SO&#8324;&#178;&#8315;) is een van nature voorkomend ion in grond- en leidingwater.
            Bij hoge concentraties geeft het een bittere smaak en kan het milde maagdarmklachten
            veroorzaken. In Nederland zit sulfaat gemiddeld op 50&ndash;150&nbsp;mg/L, ruim onder de
            EU-indicatorwaarde van 250&nbsp;mg/L. Een osmosefilter verwijdert 97&ndash;99% effectief.
          </p>
        </section>

        <QuickAnswer answer="Sulfaat in leidingwater is een van nature aanwezig ion (SO4). EU-indicatorwaarde: 250 mg/L. Nederland: gemiddeld 50-150 mg/L, geen gezondheidsrisico. Boven 200-250 mg/L bittere smaak mogelijk. Osmosefilter verwijdert 97-99%. Filterkan en koolstoffilter werken niet voor sulfaat." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is sulfaat en hoe komt het in water terecht?
        </h2>
        <p className="text-gray-700 mb-4">
          Sulfaat (SO&#8324;&#178;&#8315;) is een tweewadig negatief geladen ion dat van nature voorkomt in
          grond- en oppervlaktewater. Het ontstaat hoofdzakelijk door <strong>verwering van gesteenten</strong>:
          gips (calciumsulfaat, CaSO&#8324;) en pyriet (ijzersulfide, FeS&#8322;) lossen op in grondwater en
          geven sulfaat af. Dit is een natuurlijk geologisch proces dat al miljoenen jaren plaatsvindt.
        </p>
        <p className="text-gray-700 mb-4">
          Naast de geologische bron dragen menselijke activiteiten bij aan sulfaatconcentraties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Landbouw:</strong> stikstof- en fosfaatmeststoffen bevatten sulfaatverbindingen;
            pesticiden kunnen bij afbraak sulfaat vrijgeven in het bodemwater
          </li>
          <li>
            <strong>Industrie:</strong> metallurgische processen, papierindustrie en chemische fabrieken
            kunnen sulfaatrijke lozingen produceren
          </li>
          <li>
            <strong>Zuivering:</strong> drinkwaterbedrijven gebruiken soms aluminiumsulfaat (aluin) als
            vlokker bij waterzuivering, wat het sulfaatgehalte iets verhoogt
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          In grondwater zijn concentraties van 10 tot 200 mg/L normaal, afhankelijk van de geologie.
          In oppervlaktewater (rivieren) kan sulfaat hoger zijn door industriele en landbouwinvloeden.
          Drinkwaterbedrijven bewaken het sulfaatgehalte en passen indien nodig verdunning of zuivering toe.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en WHO-richtlijn voor sulfaat
        </h2>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="text-gray-700 text-sm space-y-2">
            <li><strong>EU-indicatorwaarde (2020/2184):</strong> 250 mg/L &mdash; esthetisch, geen gezondheidsgrens</li>
            <li><strong>WHO-gezondheidsrichtlijn:</strong> 500 mg/L</li>
            <li><strong>Smaakdrempel:</strong> 200&ndash;250 mg/L (bitter/wrang)</li>
            <li><strong>Laxerend effect:</strong> boven 600&ndash;700 mg/L (bij ongewende personen)</li>
            <li><strong>Gemiddeld Nederlands leidingwater:</strong> 50&ndash;150 mg/L</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-4">
          De EU-waarde van 250 mg/L is een <strong>indicatorwaarde</strong>, geen bindende maximumnorm
          voor gezondheid. Dit betekent dat overschrijding niet onmiddellijk gevaar oplevert, maar wel
          aanleiding is voor onderzoek naar de oorzaak en maatregelen om de waterkwaliteit te verbeteren.
          De WHO hanteert een ruimere gezondheidskundige richtlijn van 500 mg/L, maar signaleert al
          smaakeffecten bij 200 mg/L.
        </p>
        <p className="text-gray-700 mb-6">
          In de praktijk houden Nederlandse drinkwaterbedrijven sulfaatconcentraties ruim onder de EU-norm.
          In <strong>Limburg en Noord-Brabant</strong>, waar grondwater uit gipshoudende geologische lagen
          wordt gewonnen, kunnen concentraties oplopen tot 150&ndash;200 mg/L. Dit is nog altijd onder de
          EU-indicatorwaarde en geeft voor de meeste mensen geen merkbare smaakproblemen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Smaak en geur: wat merkt u van sulfaat?
        </h2>
        <p className="text-gray-700 mb-4">
          Sulfaat heeft bij hogere concentraties een onmiskenbaar effect op de smaak van drinkwater.
          De meeste mensen ervaren dit als een <strong>bittere of wrange nasmaak</strong>, vergelijkbaar
          met mineraalwater met hoog mineraalgehalte. De smaakdrempel varieert per persoon maar ligt
          doorgaans rond 200&ndash;250 mg/L.
        </p>
        <p className="text-gray-700 mb-4">
          Een veelgehoord misverstand is de koppeling van sulfaat aan de typische <strong>"rotte eieren"-geur</strong>.
          Deze geur is afkomstig van <strong>waterstofsulfide (H&#8322;S)</strong>, een gas dat ontstaat
          bij bacteriele reductie van sulfaat in zuurstofarme omstandigheden (anaerobe grondwaterlagen
          of oude leidingen). Sulfaat zelf is geur- en kleurloos. Als uw water naar zwavel ruikt, wijst
          dit op H&#8322;S-vorming, niet op hoog sulfaatgehalte.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten: laxerend effect en maagklachten
        </h2>
        <p className="text-gray-700 mb-4">
          Sulfaat is historisch bekend als laxeermiddel. <strong>Epsom-zout</strong> (magnesiumsulfaat,
          MgSO&#8324;) werd eeuwenlang medicinaal gebruikt. Dit laxerende effect treedt echter pas op bij
          concentraties ver boven de drinkwaternormen: boven <strong>600&ndash;700 mg/L</strong> kunnen
          gevoelige personen die niet gewend zijn aan sulfaatrijk water tijdelijke diarree ervaren.
        </p>
        <p className="text-gray-700 mb-6">
          Bij de EU-norm van 250 mg/L is er absoluut geen risico op dit effect. Nederlands leidingwater
          met gemiddeld 50&ndash;150 mg/L sulfaat vormt geen enkele belasting voor de gezondheid.
          Sulfaat is ook een normaal onderdeel van een gezond dieet via voedsel, groenten en
          mineraalwater. Bezoekers aan gebieden met van nature hoog sulfaatwater (bepaalde
          kuuroorden, mineraalbronnen) dienen pas rekening te houden met mildere maageffecten bij
          concentraties boven 500 mg/L.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sulfaat verwijderen: welk waterfilter werkt?
        </h2>
        <p className="text-gray-700 mb-4">
          Niet alle filtermethoden zijn effectief voor sulfaat. Omdat sulfaat een opgelost anorganisch
          ion is, vereist effectieve verwijdering een membraan- of ionenwisselingstechnologie:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Sulfaat verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschiktheid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">97&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">Beste thuisoplossing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltratie</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85&ndash;97%</td>
                <td className="border border-gray-300 px-3 py-2">Goed; behoudt meer mineralen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Anionenwisselaar</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">Effectief; professionele installatie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Niet effectief voor ionen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan (Brita e.d.)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">0%</td>
                <td className="border border-gray-300 px-3 py-2">Niet effectief voor sulfaat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
          is de meest effectieve keuze voor sulfaatverwijdering thuis. Het semi-permeabele RO-membraan
          houdt tweewaardige ionen zoals sulfaat (SO&#8324;&#178;&#8315;) bijzonder goed tegen omdat ze
          een relatief groot ionformaat hebben en een hoge ladingsdichtheid. Bij een inkomend
          sulfaatgehalte van 150 mg/L daalt de uitvoerconcentratie naar 1,5&ndash;4,5 mg/L.
        </p>
        <p className="text-gray-700 mb-4">
          De <strong>anionenwisselaar</strong> is specifiek ontworpen voor negatief geladen ionen
          zoals sulfaat, nitraat en chloride. Het wisselmateriaal bindt sulfaationen en geeft andere
          ionen (bicarbonaat, chloride) terug. Na verzadiging wordt het hars geregenereerd met
          zoutoplossing. Deze methode is bijzonder geschikt voor hoge sulfaatconcentraties bij
          eigen waterputten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer actie ondernemen?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor gebruikers van Nederlands leidingwater is sulfaat vrijwel nooit een actief probleem.
          Actie is zinvol in de volgende situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Eigen waterput of bron:</strong> laat water testen bij een geaccrediteerd
            laboratorium als u in een geoloogisch kwetsbaar gebied woont (Limburg, Brabant,
            landbouwintensieve gebieden)
          </li>
          <li>
            <strong>Bittere smaak met hoge TDS:</strong> een hoog TDS-getal in combinatie met
            bittere smaak kan wijzen op een verhoogd sulfaatgehalte. Lees meer op onze pagina
            over <Link href="/kraanwater/tds" className="text-[#005F8A] underline">TDS meten in kraanwater</Link>
          </li>
          <li>
            <strong>Industrieel of agrarisch gebied:</strong> nabij grote veeteeltbedrijven of
            industrieterreinen kan grondwater meer sulfaat bevatten via uitspoeling
          </li>
          <li>
            <strong>Smaakverbetering gewenst:</strong> als u de bittere nasmaak van uw leidingwater
            wilt verbeteren, verwijdert een osmosefilter sulfaat en andere smaakbepalende ionen effectief
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Raadpleeg onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>{' '}
          voor een volledig overzicht van stoffen die de waterkwaliteit kunnen beinvloeden. Voor het
          testen van uw water vindt u informatie op de pagina{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over sulfaat in leidingwater
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
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>,{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Overzicht van kalk, sulfaat en andere mineralen in drinkwater: wat zijn de normen en effecten?</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: uitleg en werking</h3>
              <p className="text-sm text-gray-600">Hoe een osmosefilter sulfaat en andere opgeloste stoffen effectief verwijdert uit kraanwater.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
