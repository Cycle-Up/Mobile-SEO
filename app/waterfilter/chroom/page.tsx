import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Chroom-6 in drinkwater: risico, normen en waterfilter',
  description:
    'Chroom-6 in drinkwater is kankerverwekkend. EU-norm is 25 microgram per liter. In Nederland zijn er hotspotgebieden door industriele verontreiniging.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/chroom' },
};

const faqItems = [
  {
    question: 'Wat is de EU-norm voor chroom in drinkwater?',
    answer:
      'De nieuwe EU-drinkwaterrichtlijn (2020/2184) stelt de norm voor totaal chroom op 25 microgram per liter (ug/L). Dit is een verlaging ten opzichte van de oude norm van 50 ug/L. Een aparte specifieke norm voor chroom-6 (Cr(VI)) is nog in voorbereiding. De WHO-richtwaarde voor chroom-6 bedraagt slechts 0,05 ug/L, wat aantoont hoe toxisch deze vorm is in vergelijking met de totale chroomnorm.',
  },
  {
    question: 'Wat is het verschil tussen Cr(III) en Cr(VI)?',
    answer:
      'Chroom kent meerdere oxidatievormen. Chroom-3 (Cr(III) ofwel trivalent chroom) is een essentieel spoorelement dat het menselijk lichaam nodig heeft voor een normale glucosestofwisseling; in kleine hoeveelheden is het niet schadelijk. Chroom-6 (Cr(VI) ofwel hexavalent chroom) is echter sterk oxiderend, passeert gemakkelijk celmembranen en beschadigt DNA. IARC heeft chroom-6 geclassificeerd als groep 1 carcinogeen: bewezen kankerverwekkend bij mensen.',
  },
  {
    question: 'Verwijdert een osmosefilter chroom-6 effectief?',
    answer:
      'Ja. Omgekeerde osmose is een van de effectiefste thuismethoden voor chroom-6 verwijdering. Een kwalitatief RO-membraan verwijdert 95 tot 99 procent van Cr(VI). Dit is mogelijk omdat chroomzuurionen (CrO4 2- en HCrO4-) te groot zijn om het semi-permeabele membraan met porieen van 0,0001 micron te passeren. Ionenwisseling via een sterk basische anionenwisselaar bereikt eveneens 95 procent of meer, maar is hoofdzakelijk een professionele toepassing.',
  },
  {
    question: 'Hoe kan ik mijn eigen bron testen op chroom-6?',
    answer:
      'Laat uw bronwater analyseren door een geaccrediteerd laboratorium zoals Kiwa, Eurofins of SGS Intron. Een specifieke chroom-analyse (totaal chroom en Cr(VI) afzonderlijk) kost circa 70 tot 100 euro. Voor een volledig beeld van de waterkwaliteit is een uitgebreid zwaaremetalenpakket aanbevolen voor 150 tot 300 euro. Neem contact op met uw provinciale omgevingsdienst voor advies over het bemonsteringsprotocol.',
  },
  {
    question: 'Welke gebieden in Nederland hebben een verhoogd chroom-6-risico?',
    answer:
      'Bekende hotspotgebieden in Nederland zijn de regio Doetinchem (voormalige ijzergieterij), Tilburg (leerindustrie en metaalveredeling) en de regio Den Bosch. In Tilburg is chroom-6 verontreiniging aangetroffen bij voormalige NS-werkplaatsen, wat heeft geleid tot uitgebreide bodem- en grondwateronderzoeken. Eigenaren van particuliere waterputten in of nabij voormalige industriegebieden doen er verstandig aan hun water te laten testen.',
  },
  {
    question: 'Werkt een filterkruik tegen chroom-6?',
    answer:
      'Nee. Een standaard filterkruik met actieve koolstoffilter is niet geschikt voor de verwijdering van chroom-6. Actieve kool adsorbeert organische verbindingen goed, maar chroomionen worden voor minder dan 20 procent verwijderd. Voor chroom-6 verwijdering is omgekeerde osmose of professionele ionenwisseling nodig. Zorg dat u een gecertificeerd RO-systeem gebruikt dat voldoet aan NSF/ANSI standaard 58.',
  },
  {
    question: 'Is leidingwater in Nederland veilig voor chroom-6?',
    answer:
      'Voor gebruikers van openbaar leidingwater is het risico op chroom-6 blootstelling in Nederland zeer laag. Drinkwaterbedrijven zijn wettelijk verplicht chroom routinematig te meten en te rapporteren. Het RIVM monitort de drinkwaterkwaliteit nationaal. De gemiddelde chroomconcentratie in Nederlands leidingwater ligt ruim onder de EU-norm van 25 ug/L. Het risico is groter voor eigenaren van particuliere bronnen en putten in de buurt van voormalige industrielocaties.',
  },
  {
    question: 'Wat zijn de gezondheidseffecten van chroom-6 in drinkwater?',
    answer:
      'Chronische blootstelling aan chroom-6 via drinkwater verhoogt het risico op maag- en darmtumoren, longkanker en leveraandoeningen. IARC heeft Cr(VI) geclassificeerd als groep 1 carcinogeen op basis van sterk bewijs bij mensen. Bij hoge acute doses veroorzaakt chroom-6 nierschade en ernstige irritatie van slijmvliezen. Het risico is sterk afhankelijk van de concentratie en de duur van de blootstelling.',
  },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
    { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
    { '@type': 'ListItem', position: 3, name: 'Chroom-6 in drinkwater', item: 'https://waterfilterplatform.nl/waterfilter/chroom' },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Chroom-6 in drinkwater: risico, normen en waterfilter',
  description:
    'Chroom-6 in drinkwater is kankerverwekkend. EU-norm is 25 microgram per liter. In Nederland zijn er hotspotgebieden door industriele verontreiniging.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/chroom',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterChroomPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Chroom-6 in drinkwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Chroom-6 in drinkwater: risico, normen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Chroom-6 is een sterke oxidant en bewezen kankerverwekkende stof die via industriele
            verontreiniging in grondwater terecht kan komen. De EU-norm voor totaal chroom is recent
            aangescherpt naar 25 microgram per liter. Een osmosefilter verwijdert 95 tot 99 procent
            van chroom-6 en biedt daarmee de beste bescherming voor thuisgebruikers.
          </p>
        </section>

        <QuickAnswer answer="Chroom-6 (Cr(VI)) is kankerverwekkend (IARC groep 1) en verschilt sterk van het onschadelijke chroom-3. De EU-norm voor totaal chroom is 25 ug/L; de WHO-richtwaarde voor Cr(VI) is 0,05 ug/L. In Nederland zijn hotspots bekend bij Doetinchem, Tilburg en Den Bosch. Een osmosefilter verwijdert 95-99% van chroom-6." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is chroom en wat zijn de oxidatievormen?
        </h2>
        <p className="text-gray-700 mb-4">
          Chroom (Cr) is een overgangsmetaal dat in de natuur voorkomt in meerdere oxidatietoestanden.
          De twee meest relevante voor drinkwaterkwaliteit zijn chroom-3 en chroom-6. Chroom-3
          (Cr(III), trivalent chroom) is een essentieel spoorelement: het menselijk lichaam heeft
          kleine hoeveelheden nodig voor een normale insulinegevoeligheid en glucosestofwisseling.
          In de gebruikelijke concentraties in voedsel en water is Cr(III) niet schadelijk.
        </p>
        <p className="text-gray-700 mb-4">
          Chroom-6 (Cr(VI), hexavalent chroom) is een volledig andere zaak. Als sterk oxiderende
          verbinding passeert Cr(VI) gemakkelijk biologische membranen en dringt door in cellen,
          waar het DNA-schade veroorzaakt. Het Internationaal Agentschap voor Kankeronderzoek (IARC)
          heeft chroom-6 geclassificeerd als <strong>groep 1 carcinogeen</strong>: bewezen
          kankerverwekkend bij mensen. De meest bekende verbindingen zijn kaliumdichromaat, chroomtrioxide
          en natriumchromaat, die in industrie en galvanisatie breed worden toegepast.
        </p>
        <p className="text-gray-700 mb-6">
          In water komt chroom-6 voor als chroomzuurionen: chromaat (CrO4 2-) bij hogere pH en
          bichromaat (HCrO4-) bij lagere pH. Beide vormen zijn wateroplosbaar en mobiel in grondwater,
          wat grondwaterverontreiniging vanuit vervuilde bodems eenvoudig maakt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Herkomst van chroom-6 in water
        </h2>
        <p className="text-gray-700 mb-4">
          Chroom-6 verontreiniging in grond en grondwater heeft vrijwel altijd een industriele
          oorsprong. De voornaamste bronnen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Leerindustrie en leerlooierijen:</strong> chroom-6 wordt traditioneel gebruikt
            bij het looien van leer. Historische lozerijen hebben plaatselijk ernstige
            bodemverontreiniging veroorzaakt
          </li>
          <li>
            <strong>Metaalveredeling en galvanisering:</strong> het aanbrengen van chroomlagen op
            metalen (decoratief en corrosiewerend) maakt gebruik van chroomtrioxide-oplossingen;
            historische bedrijven hebben veelvuldig geloosd op riool of bodem
          </li>
          <li>
            <strong>IJzergieterijen:</strong> koelwatertoevoegingen en roestpreventiebehandelingen
            bevatten soms chroomhoudende verbindingen die in het afvalwater terechtkomen
          </li>
          <li>
            <strong>Historische stortplaatsen:</strong> afval van industriele processen met chroom-6
            is decennialang gestort op locaties die nu deels zijn bebouwd of in gebruik zijn als
            natuur- of landbouwgebied
          </li>
          <li>
            <strong>Verfproductie en pigmenten:</strong> chroomgeel en andere chroomhoudende pigmenten
            waren tot eind 20e eeuw gangbaar; fabrieksterreinen zijn soms nog steeds vervuild
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chroom-6 hotspots in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland kent meerdere gebieden waar chroom-6 een serieus bodem- en grondwaterprobleem
          vormt door industrieel verleden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Doetinchem (Gelderland):</strong> voormalige ijzergieterijen en metaalverwerkende
            industrie hebben chroom-6 achtergelaten in de bodem; sanering is gedeeltelijk uitgevoerd
          </li>
          <li>
            <strong>Tilburg (Noord-Brabant):</strong> het meest bekende geval betreft de voormalige
            NS-werkplaats (nu ROC Tilburg-terrein) waar medewerkers jarenlang zijn blootgesteld aan
            chroom-6 via verfwerk aan treinstellen; uitgebreide bodem- en grondwateronderzoeken zijn
            uitgevoerd en lopen nog steeds
          </li>
          <li>
            <strong>Den Bosch-regio:</strong> historische leder- en metaalindustrie heeft lokale
            grondwaterverontreiniging veroorzaakt in meerdere deelgebieden
          </li>
          <li>
            <strong>Eigenaren van particuliere waterputten</strong> nabij voormalige industrieterreinen,
            stortplaatsen of spoorwerkplaatsen in heel Nederland doen er verstandig aan hun water
            specifiek op chroom-6 te laten onderzoeken
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en WHO-richtwaarde voor chroom
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-drinkwaterrichtlijn (2020/2184)</strong> heeft de maximumnorm voor totaal
          chroom in drinkwater verlaagd van 50 ug/L naar <strong>25 microgram per liter (ug/L)</strong>.
          Lidstaten hebben tot 2026 de tijd om deze norm volledig in nationale wetgeving te implementeren.
          Een afzonderlijke specifieke norm voor chroom-6 is nog in voorbereiding bij de Europese Commissie.
        </p>
        <p className="text-gray-700 mb-4">
          De <strong>WHO-richtwaarde voor chroom-6</strong> bedraagt slechts <strong>0,05 ug/L</strong>,
          wat de extreme toxiciteit van Cr(VI) in perspectief plaatst. Deze richtwaarde wordt in
          de meeste drinkwaterinstallaties niet specifiek gemonitord omdat totaalchroom de
          standaardmeting is. Onderzoekers pleiten voor een aparte, strengere Cr(VI)-norm in
          de Europese regelgeving.
        </p>
        <p className="text-gray-700 mb-6">
          In Nederland meten drinkwaterbedrijven routinematig op totaalchroom en rapporteren zij aan
          het RIVM. De gemiddelde concentratie in leidingwater ligt ruimschoots onder de EU-norm.
          Voor particuliere bronnen en eigen putten gelden geen wettelijke monitoringsverplichtingen,
          waardoor individuele testing essentieel is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico van chroom-6: wat zegt de wetenschap?
        </h2>
        <p className="text-gray-700 mb-4">
          De carcinogeniteit van chroom-6 is stevig onderbouwd door epidemiologisch en toxicologisch
          onderzoek. Bij chronische blootstelling via drinkwater is het risico op de volgende
          aandoeningen verhoogd:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Maag- en darmkanker:</strong> de meest relevante route bij ingestie van
            chroom-6 via drinkwater; mutagene schade in het maag-darmepitheel is aangetoond in
            diermodellen bij concentraties boven 1 ug/L
          </li>
          <li>
            <strong>Longkanker:</strong> bij inademing van chroom-6 stof of nevel; minder relevant
            voor drinkwaterblootstelling maar wel gedocumenteerd bij industriele werknemers
          </li>
          <li>
            <strong>Lever- en nierschade:</strong> bij hogere acute doses treedt toxische schade op
            aan lever en nieren door de sterke oxidatieve werking van Cr(VI)
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Het bekende Erin Brockovich-geval in Hinkley (Californie) heeft wereldwijd aandacht
          gevestigd op de risicos van chroom-6 in drinkwater. Hoewel dit geval betrekking had op
          concentraties ver boven de Europese normen, maakt het de ernstige gezondheidsconsequenties
          bij langdurige blootstelling duidelijk.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chroom-6 verwijderen: vergelijking van methoden
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elke filtermethode is geschikt voor chroom-6. De verwijderingsefficiency verschilt
          sterk per technologie:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Cr(VI) verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschiktheid thuis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">95&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">Uitstekend</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ionenwisseling (sterk basisch anion)</td>
                <td className="border border-gray-300 px-3 py-2">95%+</td>
                <td className="border border-gray-300 px-3 py-2 text-amber-600 font-medium">Professioneel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Coagulatie-filtratie</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2 text-amber-600 font-medium">Professioneel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Onvoldoende</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkruik</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600 font-medium">Ongeschikt</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter voor chroom-6: hoe werkt het?
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> perst
          water onder druk door een semi-permeabel membraan met porieen van slechts 0,0001 micron.
          Chroomzuurionen (CrO4 2- en HCrO4-) zijn aanzienlijk groter dan watermoleculen en worden
          door het membraan tegengehouden. Het concentraat, beladen met chroom-6 en andere
          verontreinigingen, wordt afgevoerd via het afvalwater.
        </p>
        <p className="text-gray-700 mb-6">
          Voor optimale chroom-6 verwijdering zijn de volgende aspecten belangrijk: kies een
          RO-systeem dat gecertificeerd is volgens NSF/ANSI standaard 58, vervang het membraan
          op tijd (gemiddeld elke 2 tot 3 jaar), en zorg voor voldoende waterdruk (minimaal
          2,8 bar) voor een goede filterprestatie. Lees meer over de
          vereiste <Link href="/omgekeerde-osmose/druk" className="text-[#005F8A] underline">waterdruk voor osmosefilters</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zelf testen op chroom-6
        </h2>
        <p className="text-gray-700 mb-4">
          Bij gebruik van een eigen waterput of bij twijfel over de waterkwaliteit in uw omgeving
          is laboratoriumanalyse de enige betrouwbare methode. Geaccrediteerde laboratoria die
          chroom-6 kunnen analyseren:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Kiwa Water Research:</strong> gecertificeerde analyses, inclusief afzonderlijke Cr(VI) meting; kosten circa 70 tot 100 euro</li>
          <li><strong>Eurofins Environment Testing:</strong> snel turnaround, breed zwaaremetalenpakket beschikbaar</li>
          <li><strong>SGS Intron:</strong> professioneel wateronderzoek voor particulieren en bedrijven</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Zorg dat u het laboratorium vraagt om <em>zowel</em> totaalchroom als chroom-6 afzonderlijk
          te meten. Bij twijfel over de gehele waterkwaliteit is een uitgebreid{' '}
          <Link href="/leidingwater/kwaliteit" className="text-[#005F8A] underline">waterkwaliteitsonderzoek</Link>{' '}
          dat ook lood, nikkel, nitraat en bacteriologische parameters omvat te overwegen voor
          150 tot 300 euro.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/stoffen-in-drinkwater/zware-metalen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Zware metalen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van zware metalen zoals lood, arseen en chroom in leidingwater: risicos en normen.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose</h3>
            <p className="text-sm text-gray-600">Hoe omgekeerde osmose zware metalen en ionen zoals chroom-6 verwijdert uit drinkwater.</p>
          </Link>
          <Link href="/waterfilter/lood" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Lood in drinkwater filteren</h3>
            <p className="text-sm text-gray-600">Lood in kraanwater: oorzaken, normen en de beste filteropties voor uw situatie.</p>
          </Link>
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Overzicht van EU- en WHO-normen voor drinkwaterkwaliteit en wat ze betekenen voor consumenten.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over chroom-6 in drinkwater
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/waterfilter/arseen" className="text-[#005F8A] underline">arseen in drinkwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
