import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Fosfaat in leidingwater: corrosiebescherming, normen en waterfilter',
  description:
    'Watermaatschappijen voegen kleine hoeveelheden fosfaat toe aan leidingwater als corrosiebescherming voor loodleidingen en koper. De norm is 2,2 mg/L.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/fosfaat' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Waarom zit er fosfaat in leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste Nederlandse watermaatschappijen doseren orthofosforaat (H3PO4 of NaH2PO4) aan leidingwater. Het fosfaat vormt een dunne beschermende laag op de binnenwand van leidingen, die uitloging van lood, koper en zink tegengaat. Dit is met name belangrijk in steden met oudere leidingnetwerken. Vitens, PWN en Evides doseren allen fosfaat in grote delen van hun verzorgingsgebied.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel fosfaat zit er in leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De wettelijke maximumnorm voor fosfaat in leidingwater is 2,2 mg/L. In de praktijk doseren Nederlandse watermaatschappijen ca 0,3-1,5 mg/L, afhankelijk van het verzorgingsgebied en de leeftijd van het leidingnet. Sommige gemeenten zonder loodleidingen ontvangen leidingwater met minder dan 0,1 mg/L fosfaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is fosfaat in leidingwater schadelijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op drinkwaterniveaus (0,3-2,2 mg/L) is fosfaat niet schadelijk voor gezonde volwassenen en kinderen. Fosfaat is een essentieel mineraal dat het lichaam nodig heeft voor botten en energiemetabolisme. Aandachtspunt: mensen met chronische nierziekte moeten hun totale fosfaatinname beperken en kunnen beter gefilterd water drinken. Bespreek dit met uw nefroloog.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moeten nierpatienten fosfaat uit leidingwater filteren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mensen met chronische nierziekte (CKD stadium 3-5) moeten hun fosfaatinname strikt beperken omdat de nieren fosfaat niet meer goed uitscheiden. Hoewel de hoeveelheid fosfaat in leidingwater relatief klein is, telt elke bron mee bij een streng fosfaatbeperkt dieet. Een osmosefilter verwijdert 95-99% van het fosfaat. Raadpleeg altijd uw nefroloog of dietist voor persoonlijk advies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk waterfilter verwijdert fosfaat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Omgekeerde osmose (RO) verwijdert 95-99% van het fosfaat en is de meest effectieve thuisoplossing. Nanofiltatie verwijdert 85-95%. Standaard actief koolfilters zijn niet effectief voor fosfaatverwijdering. Een waterontharder verwijdert ook geen fosfaat. Voor de hoogste verwijdering kiest u een osmosefilter met een goed membraan (NSF-gecertificeerd).',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter fosfaat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een osmosefilter verwijdert 95-99% van het fosfaat. Het semi-permeable membraan houdt fosfaationen (PO4 3-) tegen, die te groot zijn om door de porieen van 0,0001 micron te passeren. Het concentraat (afvalwater) bevat de verwijderde fosfaat en wordt afgevoerd. Na osmosefiltratie is de fosfaatconcentratie in het drinkwater vrijwel nul.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat heeft fosfaat in leidingwater te maken met algengroei?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fosfaat is een limiterende voedingsstof voor algengroei in oppervlaktewater. Leidingwater dat via rioolwaterzuiveringsinstallaties wordt afgevoerd, bevat fosfaat dat niet altijd volledig wordt verwijderd. Dit draagt bij aan eutrofiering van sloten, meren en rivieren. Voor huishoudelijk drinkwater is dit geen directe zorg, maar voor aquariumhouders en tuinvijvers is fosfaatvrij water (osmose) belangrijk om algenproblemen te voorkomen.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Fosfaat in leidingwater: corrosiebescherming, normen en waterfilter',
  description:
    'Watermaatschappijen voegen fosfaat toe aan leidingwater als corrosiebescherming. Norm 2,2 mg/L. Osmosefilter verwijdert 95-99% fosfaat.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/fosfaat',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LeidingwaterFosfaatPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Fosfaat in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/fosfaat' },
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
          <span>Fosfaat in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Fosfaat in leidingwater: corrosiebescherming, normen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Watermaatschappijen doseren bewust kleine hoeveelheden fosfaat aan leidingwater om
            corrosie van lood- en koperleidingen te voorkomen. Wat is de norm, is het schadelijk
            en hoe verwijdert u fosfaat als dat nodig is?
          </p>
        </section>

        <QuickAnswer answer="Nederlandse watermaatschappijen voegen 0,3-1,5 mg/L fosfaat toe aan leidingwater als corrosiebescherming voor leidingen. De wettelijke norm is 2,2 mg/L. Op drinkwaterniveaus niet schadelijk voor gezonden. Nierpatienten opgelet. Osmosefilter verwijdert 95-99% van het fosfaat." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom voegen watermaatschappijen fosfaat toe?
        </h2>
        <p className="text-gray-700 mb-4">
          De meeste Nederlandse drinkwaterbedrijven doseren <strong>orthofosforaat</strong> (H3PO4
          of NaH2PO4) aan het drinkwater. Dit is geen toeval of bijproduct: het is een bewuste
          maatregel om corrosie van leidingmaterialen te voorkomen.
        </p>
        <p className="text-gray-700 mb-4">
          Fosfaat reageert met het metaaloppervlak aan de binnenkant van leidingen en vormt een
          microscopisch dunne, aaneengesloten fosfaatlaag (calciumfosfaat of loodfosfaat). Deze
          laag fungeert als een fysieke barriere tussen het water en het leidingmateriaal. Zonder
          deze beschermingslaag zou metaalionen - waaronder het toxische lood - geleidelijk in
          het drinkwater kunnen lossen.
        </p>
        <p className="text-gray-700 mb-6">
          Dit is met name essentieel in stedelijke gebieden met oudere leidingnetwerken. Ondanks
          vervangingsprogramma&apos;s zijn er in veel Nederlandse steden nog aanzienlijke lengtes
          aan loodleidingen aanwezig, met name aansluitleidingen van woning naar hoofdnet die na
          1930 nog in gebruik zijn. Fosfaatdosering is de meest kosteneffectieve beschermingsmaatregel
          totdat al deze leidingen zijn vervangen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoeveel fosfaat zit er in leidingwater?
        </h2>
        <p className="text-gray-700 mb-4">
          De Europese drinkwaterrichtlijn en het Nederlandse Drinkwaterbesluit stellen een
          maximumnorm van <strong>2,2 mg/L</strong> fosfaat (uitgedrukt als P2O5) in drinkwater.
          In de praktijk doseren watermaatschappijen aanzienlijk minder:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Vitens</strong> (grootste drinkwaterbedrijf, ca 5,7 miljoen klanten): doseert
            fosfaat in grote delen van Gelderland, Overijssel, Friesland en Utrecht. Dosering
            ca 0,5-1,2 mg/L afhankelijk van regio
          </li>
          <li>
            <strong>PWN</strong> (Noord-Holland): doseert fosfaat in delen van het verzorgingsgebied
            met oudere leidingen, ca 0,3-1,0 mg/L
          </li>
          <li>
            <strong>Evides</strong> (Zeeland, Zuid-Holland): doseert fosfaat als corrosiebeschermer
            voor loodleidingen, ca 0,5-1,5 mg/L
          </li>
          <li>
            Gebieden die volledig op nieuw polyethyleen leidingnet zijn aangesloten, ontvangen
            soms minder of geen fosfaat (minder corrosierisico bij plastic leidingen)
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          De exacte fosfaatconcentratie in uw leidingwater is op te vragen bij uw watermaatschappij
          of te vinden in hun jaarlijkse waterkwaliteitsrapportage. Zie ook onze pagina over{' '}
          <Link href="/leidingwater/kwaliteit" className="text-[#005F8A] underline">leidingwaterkwaliteit in Nederland</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Is fosfaat in leidingwater schadelijk?
        </h2>
        <p className="text-gray-700 mb-4">
          Voor gezonde volwassenen en kinderen is de hoeveelheid fosfaat in leidingwater
          <strong> niet schadelijk</strong>. Fosfaat is een essentieel mineraal voor het menselijk
          lichaam: het is onmisbaar voor botvorming, celenergie (ATP), membraanopbouw en
          enzymatische processen. De aanbevolen dagelijkse inname is ca 700 mg per dag voor
          volwassenen.
        </p>
        <p className="text-gray-700 mb-4">
          De hoeveelheid fosfaat via leidingwater is bij 1,5 mg/L en een drinkwaterconsumptie
          van 2 liter per dag slechts 3 mg, minder dan 0,5% van de dagelijkse behoefte. De
          voedingsinname via vlees, zuivel, granen en bewerkt voedsel is verreweg de grootste bron.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Aandachtspunt: nierpatienten.</strong> Mensen met chronische nierziekte (CKD)
          kunnen fosfaat niet meer goed uitscheiden. Bij gevorderde nierziekte (CKD stadium 3-5)
          is een streng fosfaatbeperkt dieet vereist. Elke fosfaatbron telt dan mee, inclusief
          de kleine hoeveelheid in leidingwater. Een osmosefilter kan in deze situatie zinvol zijn.
          Raadpleeg altijd een nefroloog of dietist.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fosfaat en aanslag in koffiemachines en waterkokers
        </h2>
        <p className="text-gray-700 mb-4">
          Fosfaat in leidingwater heeft een praktisch effect dat veel huishoudens herkennen maar
          zelden aan fosfaat koppelen: een specifiek type aanslag in koffiemachines en waterkokers.
        </p>
        <p className="text-gray-700 mb-4">
          Bij verhitting reageert fosfaat met calcium uit hard water en vormt
          <strong> calciumfosfaataanslag</strong>. Dit verschilt chemisch van gewone kalksteenaanslag
          (calciumcarbonaat). Het herkenningspunt: calciumfosfaataanslag is witrijs tot grijs van
          kleur, zit steviger vast en reageert anders op standaard ontkalkers (citroenzuur,
          azijnzuur). Sommige industriele ontkalkers bevatten fosforzuur dat specifiek calciumfosfaat
          oplost.
        </p>
        <p className="text-gray-700 mb-6">
          Voor koffiemachines en waterkokers is gebruik van
          <Link href="/osmose-water" className="text-[#005F8A] underline"> osmosewater</Link> een effectieve
          oplossing: geen kalk, geen fosfaat, geen aanslag. Dit verlengt de levensduur van apparaten
          en vermindert onderhoud.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fosfaat verwijderen: vergelijking filtermethoden
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Fosfaatverwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">95-99%</td>
                <td className="border border-gray-300 px-3 py-2">Beste thuisoplossing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltatie</td>
                <td className="border border-gray-300 px-3 py-2">85-95%</td>
                <td className="border border-gray-300 px-3 py-2">Hogere doorvoer dan RO</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor fosfaat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterontharder</td>
                <td className="border border-gray-300 px-3 py-2">0%</td>
                <td className="border border-gray-300 px-3 py-2">Verwijdert geen fosfaat</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Biologisch actief kool (BAC)</td>
                <td className="border border-gray-300 px-3 py-2">Deels</td>
                <td className="border border-gray-300 px-3 py-2">Professioneel, niet voor thuis</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fosfaat en brouwwater voor bier en koffie
        </h2>
        <p className="text-gray-700 mb-4">
          Thuisbrouwers en specialiteitskoffiezettters willen volledige controle over het
          waterprofiel. Fosfaat speelt daarin een subtiele maar reele rol:
        </p>
        <p className="text-gray-700 mb-4">
          Bij het moutbrouwen verbetert een licht fosfaatgehalte (10-50 mg/L als P) de enzymatische
          activiteit tijdens het maischen (omzetting van zetmeel naar suiker). Brewers die het
          Brun Water-profiel of Balanced-profiel gebruiken, voegen soms fosforzuur toe als
          pH-verlager. Maar de oncontroleerbare fosfaatdosering van de watermaatschappij maakt
          het moeilijk om precieze targetprofielen te bereiken met ongefilterd leidingwater.
        </p>
        <p className="text-gray-700 mb-6">
          De oplossing voor brouwers: osmosewater als neutrale basis met
          <strong> nauwkeurig gedoseerde mineralen</strong> (calciumsulfaat, calciumchloride,
          magnesiumsulfaat). Hiermee bereikt u elk gewenst waterprofiel reproductief. Zie ook onze
          pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>{' '}
          voor een breder overzicht van stoffen in Nederlands drinkwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Fosfaat en algengroei
        </h2>
        <p className="text-gray-700 mb-6">
          Fosfaat is een van de twee hoofdvoedingsstoffen voor algen (naast stikstof). In
          oppervlaktewater leidt overmatig fosfaat tot <strong>eutrofiering</strong>: explosieve
          algengroei die zuurstof in het water uitput en vissen doodt. Huishoudelijk leidingwater
          dat via het riool wordt afgevoerd, draagt via de fosfaatdosering bij aan de fosfaatbelasting
          van oppervlaktewater, al is de bijdrage van huishoudens kleiner dan die van de landbouw.
          Voor aquariumhouders met een vijver of buitenbak is fosfaatvrij osmosewater essentieel
          om algenproblemen te voorkomen.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over fosfaat in leidingwater
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
          <Link href="/leidingwater/kwaliteit" className="text-[#005F8A] underline">leidingwaterkwaliteit</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>,{' '}
          <Link href="/osmose-water" className="text-[#005F8A] underline">osmosefilter voor thuis</Link> en{' '}
          <Link href="/leidingwater/hardheid-kaart" className="text-[#005F8A] underline">waterhardheid per gemeente</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Overzicht van fosfaat, calcium en andere mineralen in drinkwater: normen, herkomst en effecten.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: uitleg en werking</h3>
              <p className="text-sm text-gray-600">Hoe een osmosefilter fosfaat en andere opgeloste stoffen effectief verwijdert uit kraanwater.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
