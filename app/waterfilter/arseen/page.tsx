import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: "Arseen in drinkwater: risico's, normen en het beste waterfilter",
  description:
    'Arseen in drinkwater is kankerverwekkend bij chronische blootstelling. EU-norm 10 µg/L. In NL zelden een probleem, maar bij eigen bron of hotspot-gebieden is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/arseen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zit er arseen in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In verreweg de meeste Nederlandse gemeenten is de arseenconcentratie in leidingwater minder dan 1 microgram per liter (µg/L), ruimschoots onder de EU-norm van 10 µg/L. Nederlandse drinkwaterbedrijven worden streng gecontroleerd. Het risico ligt bij eigenaren van particuliere bronnen en putten, met name in geologisch kwetsbare gebieden zoals de Brabantse zandbodems en delen van de Veluwe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is arseen in drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arseen is bij chronische blootstelling een bewezen kankerverwekkende stof (IARC groep 1). Langdurige inname verhoogt het risico op huid-, blaas- en longkanker. Daarnaast zijn er cardiovasculaire effecten en een verband met diabetes type 2. Het WHO schat dat bij levenslange blootstelling aan 50 µg/L (de oude WHO-richtlijn) 1 op de 100 mensen kanker kan ontwikkelen. Bij 10 µg/L (huidige norm) is het risico lager maar niet nul.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert arseen het beste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose (RO) is de beste thuisoplossing voor arseenverwijdering. Een RO-membraan verwijdert 80-90% van As(III) arseniet en 90-95% van As(V) arsenaat. Actief aluminium- of ijzerfilters (coagulatie/adsorptie) bereiken 95%+ verwijdering maar zijn voornamelijk professionele installaties. Destillatie is ook zeer effectief (95%+) maar langzaam en energie-intensief. Actief koolfilters zijn ongeschikt voor arseen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter arseen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een osmosefilter verwijdert 80-90% van As(III) arseniet en 90-95% van As(V) arsenaat. De verwijdering van As(III) is iets minder hoog omdat arseniet in lage pH-omstandigheden deels elektrisch neutraal is en daardoor minder goed door het membraan wordt tegengehouden. Pre-oxidatie (chlorinatie of ozon) converteert As(III) naar As(V) en verbetert de verwijdering naar 90-95%. Voor huishoudelijk gebruik bij eigen bronnen is een RO-filter de meest praktische keuze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe test ik mijn bronwater op arseen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laat uw bronwater analyseren door een geaccrediteerd laboratorium zoals Kiwa, SGS Intron of Eurofins. Een specifieke arseenanalyse kost doorgaans €50-80. Voor een compleet beeld van bronwaterkwaliteit wordt een breder meetpakket (zware metalen, nitraat, bacteriologisch) aanbevolen voor €150-300. Neem contact op via de website van uw provinciale omgevingsdienst voor advies over bemonsteringsprotocol.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke landen is arseen in drinkwater een groot probleem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bangladesh is het bekendste probleemgebied: 35 tot 77 miljoen mensen zijn blootgesteld aan arseenconcentraties boven 50 µg/L via ondiep grondwater. Andere getroffen landen zijn India (West-Bengalen), China (Binnen-Mongolie), Argentinie, Chili, Mexico en Vietnam. In Europa zijn er lokale problemen in delen van Hongarije, Slowakije en Roemenie. Voor reizigers naar deze gebieden is extra voorzichtigheid bij drinkwater essentieel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor arseen in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn (2020/2184) stelt een maximumnorm van 10 microgram per liter (µg/L) voor arseen in drinkwater. Dit komt overeen met de WHO-richtlijn. Sommige onderzoekers pleiten voor een strengere norm van 1 µg/L op basis van kankeronderzoek. In Nederland ligt de gemiddelde arseenconcentratie in leidingwater ver onder de EU-norm, meestal onder 1 µg/L.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een actief koolfilter arseen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, actief koolfilters zijn niet geschikt voor arseenverwijdering. Zowel As(III) als As(V) worden voor minder dan 20% verwijderd door standaard actieve kool. Arseen is een anorganische verbinding die niet goed adsorbeert aan kooloppervlakken. Voor arseenverwijdering is omgekeerde osmose, actief aluminium/ijzer-adsorptie of destillatie noodzakelijk.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: "Arseen in drinkwater: risico's, normen en het beste waterfilter",
  description:
    'Arseen in drinkwater is kankerverwekkend bij chronische blootstelling. EU-norm 10 µg/L. Osmosefilter is de beste thuisoplossing voor arseenverwijdering.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/arseen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterArseenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Arseen in drinkwater', item: 'https://waterfilterplatform.nl/waterfilter/arseen' },
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
          <span>Arseen in drinkwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Arseen in drinkwater: risico&apos;s, normen en het beste waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Arseen is een kankerverwekkend metalloid dat van nature voorkomt in diep grondwater.
            In Nederlands leidingwater is het zelden een probleem, maar eigenaren van eigen bronnen
            of putten in bepaalde gebieden doen er verstandig aan hun water te laten testen en een
            osmosefilter te overwegen.
          </p>
        </section>

        <QuickAnswer answer="Arseen in drinkwater is kankerverwekkend (IARC groep 1) bij chronische blootstelling. De EU-norm is 10 µg/L. Nederlands leidingwater zit meestal onder 1 µg/L. Bij eigen bronnen is testen noodzakelijk. Een osmosefilter verwijdert 80-95% van arseen en is de beste thuisoplossing." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is arseen?
        </h2>
        <p className="text-gray-700 mb-4">
          Arseen (As) is een metalloid element dat van nature voorkomt in de aardkorst. Het lost op in
          grondwater vanuit vulkanische gesteenten en sedimentlagen, met name in diepe watervoerende
          lagen. Naast de natuurlijke bron dragen ook menselijke activiteiten bij aan arseenverontreiniging:
          historisch gebruik van arseenhoudende pesticiden in de landbouw, mijnbouw en smelterijen
          hebben plaatselijk verhoogde arseenconcentraties veroorzaakt in grond en grondwater.
        </p>
        <p className="text-gray-700 mb-6">
          In water komt arseen voor als twee hoofdvormen: <strong>As(III) arseniet</strong> en
          <strong> As(V) arsenaat</strong>. Arseniet is de meest toxische en ook de moeilijkst te
          verwijderen vorm. In zuurstofarme (anaerobe) diepe grondwaterbronnen domineert As(III),
          terwijl As(V) vaker voorkomt in oppervlaktewater en geoxideerd grondwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en WHO-richtlijn
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-drinkwaterrichtlijn (2020/2184)</strong> stelt de maximale arseenconcentratie
          in drinkwater op <strong>10 microgram per liter (µg/L)</strong>. De WHO-richtlijn hanteert
          dezelfde grens. Deze norm is echter niet zonder kritiek: een groeiend aantal toxicologen en
          epidemiologen pleit voor een strengere norm van <strong>1 µg/L</strong>, gebaseerd op
          kankeronderzoek dat aantoont dat ook onder 10 µg/L een verhoogd risico op blaaskanker
          meetbaar is bij langdurige blootstelling.
        </p>
        <p className="text-gray-700 mb-6">
          In Nederland wordt de EU-norm ruimschoots gehaald. Drinkwaterbedrijven rapporteren gemiddelde
          concentraties van minder dan 1 µg/L in leidingwater. De situatie bij particuliere bronnen
          en putten is minder uniform en vraagt om individuele testing.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico&apos;s van arseen in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Het Internationaal Agentschap voor Kankeronderzoek (IARC) heeft arseen geclassificeerd als
          <strong> groep 1 carcinogeen</strong> &mdash; bewezen kankerverwekkend bij mensen. De
          gezondheidseffecten bij chronische blootstelling zijn goed gedocumenteerd:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Huidkanker:</strong> de meest bekende arseengerelateerde kanker; kenmerkt zich
            door hyperkeratosis (eeltvorming) en pigmentveranderingen na jarenlange blootstelling
          </li>
          <li>
            <strong>Blaaskanker en longkanker:</strong> IARC groep 1; risico verhoogd bij concentraties
            boven 10 µg/L, maar studies suggereren verhoogd risico ook bij lagere doses
          </li>
          <li>
            <strong>Cardiovasculaire effecten:</strong> arseenblootstelling is geassocieerd met
            verhoogd risico op atherosclerose, hypertensie en hartziekte
          </li>
          <li>
            <strong>Diabetes type 2:</strong> epidemiologische studies tonen verband aan bij
            chronische blootstelling, al is het causale mechanisme nog niet volledig opgehelderd
          </li>
          <li>
            <strong>Neurologische effecten:</strong> bij kinderen kan arseenblootstelling de
            cognitieve ontwikkeling negatief beinvloeden
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          De WHO schat dat bij <strong>levenslange blootstelling aan 50 µg/L</strong> (de oude
          WHO-richtlijn tot 1993) 1 op de 100 mensen een arseengerelateerde kanker ontwikkelt.
          Bij 10 µg/L is dit risico lager, maar niet nul. In Bangladesh, waar miljoenen mensen
          putten gebruiken met concentraties boven 50 µg/L, zijn massale gezondheidscrises gedocumenteerd.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Arseen in Nederland: wanneer is er een risico?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor de overgrote meerderheid van Nederlanders is arseen in drinkwater geen actueel risico:
          leidingwater van drinkwaterbedrijven bevat vrijwel altijd minder dan 1 µg/L. Risico bestaat
          in specifieke situaties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Eigen waterputten en bronnen</strong> in geologisch kwetsbare gebieden: de
            Brabantse zandbodems (Noord-Brabant) en bepaalde delen van de Veluwe (Gelderland) staan
            bekend om hogere arseengehaltes in diep grondwater
          </li>
          <li>
            <strong>Vervuilde locaties</strong> nabij voormalige pesticidenfabrieken, smelterijen
            of glastuinbouwgebieden met historisch arseengebruik
          </li>
          <li>
            <strong>Reizigers en expats</strong> in landen met bekende arseenproblematiek: Bangladesh,
            West-Bengalen (India), Binnen-Mongolie (China), Argentinie, Chili, Mexico en Vietnam
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtermethoden voor arseen: vergelijkingstabel
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elke filtermethode werkt even goed voor arseen. De filterkeuze hangt af van de
          aanwezige arseenvorm (As(III) of As(V)), de gewenste verwijderingsgraad en uw budget:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">As(III) verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">As(V) verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;90%</td>
                <td className="border border-gray-300 px-3 py-2">90&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">&euro;300&ndash;800</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief aluminium/ijzer (adsorptie/oxidatie)</td>
                <td className="border border-gray-300 px-3 py-2">90%+</td>
                <td className="border border-gray-300 px-3 py-2">95%+</td>
                <td className="border border-gray-300 px-3 py-2">&euro;500&ndash;1.500 (professioneel)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20%</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20%</td>
                <td className="border border-gray-300 px-3 py-2">Onvoldoende</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Destillatie</td>
                <td className="border border-gray-300 px-3 py-2">95%+</td>
                <td className="border border-gray-300 px-3 py-2">95%+</td>
                <td className="border border-gray-300 px-3 py-2">&euro;100&ndash;300</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter voor arseen: hoe het werkt
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> persgt
          water onder druk door een semi-permeabel membraan met porieen van 0,0001 micron. Arseenionen
          zijn te groot om door dit membraan te passeren en worden samen met het concentraat afgevoerd.
          Voor de beste arseenverwijdering zijn twee aspecten belangrijk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Pre-oxidatie voor As(III):</strong> arseniet (As(III)) is bij neutrale pH deels
            elektrisch neutraal en wordt daardoor iets minder effectief tegengehouden door het RO-membraan.
            Chlorinatie of ozonbehandeling converteert As(III) naar het beter verwijderbare As(V) arsenaat.
            In leidingwater is vaak al chloor aanwezig als desinfectans, wat pre-oxidatie grotendeels
            overbodig maakt
          </li>
          <li>
            <strong>Membraankwaliteit:</strong> kies een RO-systeem met een membraan dat voldoet aan
            NSF/ANSI standaard 58, die specifieke testprotocollen omvat voor arseenverwijdering
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          De meeste onder-aanrecht osmosesystemen combineren een RO-membraan met een sedimentfilter
          (5 micron), een actief koolstof prefilter en een koolstof postfilter. Voor bronwater met
          verhoogd arseen is aanvullende pre-oxidatie te overwegen. Raadpleeg een waterbehandelaar
          voor professioneel advies bij eigen waterputten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronwater testen op arseen
        </h2>
        <p className="text-gray-700 mb-4">
          Bij gebruik van een eigen waterput of bron is laboratoriumanalyse op arseen ten zeerste
          aanbevolen. Geaccrediteerde laboratoria voor wateranalyse in Nederland:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Kiwa Water Research:</strong> marktleider in wateranalyse; arseenspecifieke test circa &euro;50&ndash;80</li>
          <li><strong>SGS Intron:</strong> breed pakket zware metalen inclusief arseen</li>
          <li><strong>Eurofins Environment Testing:</strong> snel en betrouwbaar, ook voor particulieren</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Naast arseen is het verstandig een uitgebreid <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitsonderzoek</Link> te
          laten uitvoeren dat ook lood, cadmium, nikkel, nitraat en bacteriologische parameters omvat.
          Een volledig pakket kost doorgaans &euro;150&ndash;300. Uw provinciale omgevingsdienst kan
          advies geven over het juiste bemonsteringsprotocol voor diepe putten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Arseen wereldwijd: een globaal perspectief
        </h2>
        <p className="text-gray-700 mb-4">
          De arseencrisis in Bangladesh staat bekend als een van de grootste massavergiftigingen in de
          menselijke geschiedenis. Toen in de jaren 1970 en 1980 miljoenen ondiepe tubeputten werden
          gegraven om rioolwaterziekte te bestrijden, werden tegelijkertijd geologisch verankerde
          arseenreservoirs aangeboord. Schattingen lopen uiteen van 35 tot 77 miljoen mensen die
          zijn blootgesteld aan arseenconcentraties boven de WHO-norm van 10 µg/L.
        </p>
        <p className="text-gray-700 mb-6">
          Andere ernstig getroffen gebieden zijn West-Bengalen en Bihar (India), de Tarim-vlakte in
          Binnen-Mongolie (China), de droge westelijke provincies van Argentinie en Chili, en delen
          van Mexico en Vietnam. Voor reizigers die langer dan enkele weken verblijven in deze
          gebieden en afhankelijk zijn van lokaal drinkwater, is een draagbaar osmosefilter of
          flessenwater ten sterkste aanbevolen. Zie ook onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>{' '}
          voor een breder overzicht van risicostoffen.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
            <p className="text-sm text-gray-600">Welke zware metalen kunnen in drinkwater zitten en hoe filter je ze eruit?</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken: omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en wat verwijdert het uit drinkwater?</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wat zijn de wettelijke normen voor drinkwaterkwaliteit in Nederland en de EU?</p>
          </Link>
          <Link href="/waterfilter/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Lood in drinkwater filteren</h3>
            <p className="text-sm text-gray-600">Hoe verwijder je lood uit drinkwater en welk filter is het meest effectief?</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over arseen in drinkwater
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
      </main>
    </>
  );
}
