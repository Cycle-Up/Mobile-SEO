import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Strontium in leidingwater: bronnen, gezondheid en waterfilter',
  description:
    'Strontium in leidingwater is chemisch vergelijkbaar met calcium. Geen EU-norm. Bij hoge concentraties (>4 mg/L) mogelijk schadelijk voor botvorming. Osmosefilter verwijdert 90-97% strontium.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/strontium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zit er strontium in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, strontium komt van nature voor in Nederlands leidingwater in concentraties van 0,1 tot 2 mg/L. In hardwaterregio\'s zoals Limburg en Noord-Brabant kunnen concentraties iets hoger liggen. Dit valt ruimschoots onder de WHO-richtwaarde van 4 mg/L. Eigenaren van eigen putten in kalkrijke bodems doen er verstandig aan hun water te laten testen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de WHO-norm voor strontium in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De WHO hanteert een richtwaarde van 4 mg/L voor strontium in drinkwater. De EU-drinkwaterrichtlijn heeft geen bindende norm voor strontium. In de Nederlandse Drinkwaterregeling is een streefwaarde van 4 mg/L opgenomen als signaalwaarde. Bij concentraties onder 4 mg/L concludeert de WHO dat er geen gezondheidsrisico bestaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is strontium in leidingwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stabiel (niet-radioactief) strontium in leidingwater is bij normale concentraties onder 4 mg/L niet gevaarlijk. Strontium gedraagt zich chemisch als calcium en wordt gedeeltelijk ingebouwd in bot en tanden. Farmaceutisch strontiumranelaat wordt bij osteoporose voorgeschreven in doses van 2 gram per dag, ver boven wat via drinkwater wordt opgenomen. De WHO concludeert dat bij concentraties onder 4 mg/L geen gezondheidsrisico bestaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is radioactief strontium-90 aanwezig in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, radioactief strontium-90 is niet aanwezig in regulier Nederlands leidingwater. Sr-90 is een kernsplijtingsproduct van atoomtesten en kerncentrales en is alleen relevant in specifieke contaminatiescenario\'s zoals nabij een kernongeval. Nederlands leidingwater wordt gecontroleerd op radioactiviteit en voldoet ruimschoots aan de normen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter strontium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, omgekeerde osmose is zeer effectief voor strontiumverwijdering. Een RO-membraan verwijdert 90 tot 97% van het strontium in leidingwater. Strontiumionen zijn tweewaardig geladen (Sr2+) en worden goed tegengehouden door het semi-permeable membraan. Ook ionenwisseling (kationenwisselaar) bereikt een verwijderingspercentage van 95% of meer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een waterontharder strontium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een waterontharder op basis van ionenwisseling verwijdert strontium samen met calcium en magnesium, omdat strontium een tweewaardige kation is die op dezelfde manier wordt uitgewisseld. De verwijderingsefficiëntie hangt af van de harsheidscapaciteit van de hars en de configuratie van het systeem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe test ik mijn eigen bron op strontium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Laat uw bronwater analyseren door een geaccrediteerd laboratorium zoals Kiwa, SGS Intron of Eurofins. Een specifieke strontiumanalyse als onderdeel van een zware-metalenanalyse kost doorgaans 50 tot 100 euro. Bij gebruik van een eigen put in kalkrijke gebieden (Limburg, Brabant) is een bredere analyse aanbevolen die ook lood, nikkel, ijzer en bacteriologische parameters omvat.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Strontium in leidingwater: bronnen, gezondheid en waterfilter',
  description:
    'Strontium in leidingwater is chemisch vergelijkbaar met calcium. Geen EU-norm. Bij hoge concentraties mogelijk schadelijk. Osmosefilter verwijdert 90-97% strontium.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/strontium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterStrontiumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Strontium in leidingwater', item: 'https://waterfilterplatform.nl/waterfilter/strontium' },
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
          <span>Strontium in leidingwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Strontium in leidingwater: bronnen, gezondheid en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Strontium is een aardalkalimetaal dat chemisch sterk op calcium lijkt en van nature
            voorkomt in grondwater. In Nederlands leidingwater liggen concentraties ver onder de
            WHO-richtwaarde. Bij hoge concentraties of eigen bronnen is een osmosefilter de
            meest effectieve oplossing.
          </p>
        </section>

        <QuickAnswer answer="Strontium in leidingwater is chemisch vergelijkbaar met calcium en wordt ingebouwd in bot en tanden. De EU heeft geen bindende norm; de WHO-richtwaarde is 4 mg/L. In Nederland is 0,1-2 mg/L normaal. Geen gezondheidsrisico bij normale concentraties. Osmosefilter verwijdert 90-97%." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is strontium?
        </h2>
        <p className="text-gray-700 mb-4">
          Strontium (symbool Sr, atoomnummer 38) is een aardalkalimetaal dat in groep 2 van het
          periodiek systeem staat, naast calcium en barium. Door zijn positie in de groep gedraagt
          strontium zich chemisch bijna identiek aan calcium: het is tweewaardig geladen (Sr&sup2;&plus;)
          en kan calcium vervangen in biologische processen zoals botvorming en tandmineraalsynthese.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Stabiel strontium</strong> bestaat uit vier niet-radioactieve isotopen en is de
          vorm die van nature in grondwater voorkomt. Het is niet toxisch in de concentraties die
          normaal in drinkwater worden aangetroffen. Farmaceutisch strontiumranelaat, een synthetische
          verbinding, wordt zelfs voorgeschreven bij osteoporose in doses van 2 gram per dag. Dat
          staat ver van de hoeveelheden die via drinkwater worden opgenomen.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Radioactief strontium-90 (Sr-90)</strong> is een kernsplijtingsproduct van
          atoomtesten en kerncentrales. Het is niet aanwezig in regulier Nederlands leidingwater
          en alleen relevant in specifieke contaminatiescenario&apos;s, zoals vlak na een ernstig
          kernongeval. Drinkwaterbedrijven monitoren radioactiviteit systematisch.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronnen van strontium in water
        </h2>
        <p className="text-gray-700 mb-4">
          Strontium komt in grondwater terecht door uitloging van strontiumhoudende mineralen in
          de bodem. De twee belangrijkste bronmineralen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Strontianiet (SrCO&sub3;):</strong> het carbornaat van strontium, oplosbaar
            in zacht en zuur water. Verweert vergelijkbaar met calciumcarbonaat (kalk)
          </li>
          <li>
            <strong>Celestien (SrSO&sub4;):</strong> het sulfaat van strontium, minder oplosbaar
            dan strontianiet maar aanwezig in veel sedimentgesteenten
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          In Nederland liggen strontiumconcentraties in leidingwater typisch tussen
          <strong> 0,1 en 2 mg/L</strong>. In hardwaterregio&apos;s zoals Limburg en Noord-Brabant,
          waar de bodem rijk is aan kalk en andere mineralen, kunnen concentraties naar de hogere
          kant van dit bereik neigen. Eigen putten in kalkrijke bodem kunnen incidenteel hogere
          concentraties hebben, afhankelijk van de put diepte en lokale geologie.
        </p>
        <p className="text-gray-700 mb-6">
          Oppervlaktewater (Rijn, Maas) bevat over het algemeen lagere strontiumconcentraties dan
          diep grondwater, omdat verdunning door regenwater een rol speelt. Drinkwaterbedrijven
          die oppervlaktewater behandelen produceren daardoor doorgaans water met lagere
          strontiumgehaltes.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Normen: geen EU-limiet, wel een WHO-richtwaarde
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-drinkwaterrichtlijn (2020/2184)</strong> heeft geen bindende norm voor
          strontium. Dit onderscheidt strontium van veel andere metalen zoals lood, arseen en
          cadmium die wel een wettelijk maximum kennen.
        </p>
        <p className="text-gray-700 mb-4">
          De <strong>WHO</strong> heeft in haar drinkwaterrichtlijnen een richtwaarde van
          <strong> 4 mg/L</strong> vastgesteld voor strontium. Op basis van beschikbaar
          toxicologisch onderzoek concludeert de WHO dat concentraties onder deze waarde geen
          gezondheidsrisico vormen voor de algemene bevolking, inclusief kwetsbare groepen.
        </p>
        <p className="text-gray-700 mb-6">
          In Nederland is de WHO-richtwaarde van 4 mg/L opgenomen in de
          <strong> Drinkwaterregeling</strong> als signaalwaarde. Drinkwaterbedrijven zijn verplicht
          te rapporteren als de concentratie deze grens overschrijdt, zodat onderzoek en
          eventuele maatregelen kunnen worden getroffen. In de praktijk wordt deze waarde in
          regulier leidingwater zelden of nooit bereikt.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten van strontium
        </h2>
        <p className="text-gray-700 mb-4">
          Omdat strontium chemisch op calcium lijkt, wordt het gedeeltelijk in botweefsel en
          tandglazuur ingebouwd. Bij normale leidingwaterconcentraties (onder 1 mg/L) zijn
          <strong> geen schadelijke gezondheidseffecten</strong> bekend. Het lichaam
          onderscheidt strontium van calcium en bouwt het in bescheidener mate in.
        </p>
        <p className="text-gray-700 mb-4">
          Bij <strong>zeer hoge doses</strong> (relevant bij specifieke industriele blootstelling
          of extreme waterconcentraties ver boven 4 mg/L) zijn mogelijke effecten op
          botvorming beschreven, met name bij kinderen in de groeifase. Strontium kan de
          botdichtheid beinvloeden door gedeeltelijke vervanging van calcium in de botmatrix.
          In farmaceutische context is dit zelfs gewenst bij osteoporose: strontiumranelaat
          stimuleert botaanmaak en remt botverlies.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Radioactief strontium-90</strong> is een andere zaak: als bèta-straler die
          zich in bot nestelt, verhoogt het de kans op beenmergkanker en leukemie bij significante
          blootstelling. Dit is echter volstrekt niet relevant voor regulier Nederlands leidingwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Strontium verwijderen: welke filter werkt het beste?
        </h2>
        <p className="text-gray-700 mb-4">
          Strontium is een tweewaardig kation (Sr&sup2;&plus;) dat effectief verwijderd kan worden
          door technologieen die specifiek op geladen ionen werken. Overzicht van verwijderingsmethoden:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2">90&ndash;97%</td>
                <td className="border border-gray-300 px-3 py-2">Beste thuisoptie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ionenwisseling (kation)</td>
                <td className="border border-gray-300 px-3 py-2">95%+</td>
                <td className="border border-gray-300 px-3 py-2">Ook in waterontharder</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltatie</td>
                <td className="border border-gray-300 px-3 py-2">85&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">Goed alternatief voor RO</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2">Niet effectief voor ionen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> is
          de meest praktische en effectieve oplossing voor huishoudens die strontium (en andere
          mineralen) willen verwijderen. Het RO-membraan houdt tweewaardig geladen strontiumionen
          tegen terwijl water erdoor passeert.
        </p>
        <p className="text-gray-700 mb-6">
          Een <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link> op
          basis van ionenwisseling verwijdert strontium samen met calcium en magnesium. Dit is
          een bijkomend voordeel van waterontharding: niet alleen hardheid wordt verlaagd, maar
          ook andere tweewaardige kationen zoals strontium en barium worden uitgewisseld.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Eigen bron testen op strontium
        </h2>
        <p className="text-gray-700 mb-4">
          Bij gebruik van een eigen waterput of bron, met name in kalkrijke gebieden in Limburg
          en Brabant, is laboratoriumanalyse aanbevolen. Geaccrediteerde laboratoria voor
          wateranalyse in Nederland:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Kiwa Water Research:</strong> gespecialiseerd in drinkwateranalyse, breed metaalenpakket</li>
          <li><strong>SGS Intron:</strong> strontium als onderdeel van zware-metalenanalyse</li>
          <li><strong>Eurofins Environment Testing:</strong> snel resultaat, ook voor particulieren</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een analyse op zware metalen inclusief strontium kost doorgaans &euro;50&ndash;150.
          Voor een volledig beeld van uw bronwaterkwaliteit is een breder pakket inclusief
          bacteriologie, nitraat en andere parameters aan te bevelen. Zie ook onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">
            verontreinigingen in leidingwater
          </Link>{' '}
          voor een compleet overzicht van risicostoffen.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over strontium in leidingwater
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
          <Link href="/waterfilter/arseen" className="text-[#005F8A] underline">arseen in drinkwater</Link>,{' '}
          <Link href="/waterfilter/radium" className="text-[#005F8A] underline">radium in leidingwater</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
