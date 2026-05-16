import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor bedrijf: zakelijke waterfilteroplossingen',
  description: 'Zakelijke waterfilters voor kantoren, fabrieken en grootverbruikers. Vergelijking van drinkwaterfonteinen, centrale ontharders en RO-systemen voor bedrijven.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/bedrijf' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welk waterfilter is geschikt voor een kantoor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor een kantoor van 10-50 medewerkers is een mains-fed drinkwaterfontein de meest praktische oplossing. Deze fontein is direct aangesloten op het leidingnet, filtert het water via actieve kool en levert gekoeld (en eventueel bruisend) water op aanvraag. Geen flessenlogistiek, geen plastic afval en lagere kosten per liter. Prijs: EUR 500-2.000 aanschaf of EUR 30-80 per maand huur inclusief onderhoud. Voor grotere kantoren of als u ook warm water wilt: een kokend-water-kraan of Quooker-type systeem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ben ik als werkgever verplicht drinkwater te verstrekken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Artikel 3.20 van het Arbobesluit verplicht werkgevers om bij 10 of meer medewerkers een adequate drinkwatervoorziening te bieden. Dit kan kraanwater zijn (mits van drinkwaterkwaliteit), een drinkwaterfontein of flessenwater. Bij fysiek zwaar werk of warm klimaat gelden extra eisen aan de hoeveelheid beschikbaar water. De Nederlandse Arbeidsinspectie (NLA) handhaaft deze verplichting actief. Een gecertificeerde drinkwaterfontein is de meest praktische en aantoonbare invulling van deze plicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een zakelijk waterfilter en een thuisfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zakelijke waterfilters zijn ontworpen voor hogere volumes (100-10.000 liter per dag versus 5-20 liter voor thuisfilters), grotere leidingdiameters (3/4" tot 4"), hogere werkdrukken en continue bedrijfstijden van 16-24 uur per dag. Ze beschikken over monitoring, SLA-service en voldoen aan NSF/ANSI 58 of KIWA-certificeringen. Onderhoud via contracten met professionele servicebeurten 1-2x per jaar. Thuisfilters zijn niet geschikt voor zakelijk gebruik vanwege capaciteits- en duurzaamheidsbeperkingen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe bereken ik hoeveel water mijn bedrijf nodig heeft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vuistregel: 1,5-2 liter drinkwater per medewerker per dag als basisnorm. Voor kantoor met 50 medewerkers: 75-100 liter/dag drinkwater. Tel daarbij op: water voor koffie en thee (0,5-1 liter per persoon per dag), eventuele productieprocessen en sanitair. Voor horeca en industrie is een wateraudit door een specialist (Kiwa, SGS) aan te raden om piekverbruik, hardheid per locatie en kritische verbruikspunten in kaart te brengen. Een fout in de capaciteitsberekening leidt tot ondercapaciteit en systeemfalen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een waterfilter huren of kopen beter voor een bedrijf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Huren heeft voordelen voor bedrijven: lagere instapdrempel (EUR 30-150/maand vs. EUR 500-5.000 aanschaf), inclusief onderhoud en filterwissel, geen activering op de balans en flexibiliteit bij verhuizing of beeindiging. Kopen is voordeliger op lange termijn (na 3-5 jaar). Grotere leveranciers als Culligan, BWT Aqua en Pentair bieden huurcontracten aan met SLA. Voor bedrijven met een krappe investering of die flexibiliteit willen behouden is huren aantrekkelijk; voor stabiele situaties op lange termijn is kopen goedkoper.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke certificeringen zijn van belang bij zakelijke waterfilters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De voornaamste certificeringen voor zakelijke waterfilters in Nederland en Europa: NSF/ANSI 58 (internationale standaard voor RO-systemen, erkent prestaties en materiaalveiligheid), KIWA-certificering (Nederlandse drinkwatertechnische goedkeuring, vereist door drinkwaterbedrijven en overheden), WRAS (UK Water Regulations Advisory Scheme, relevant bij Britse installaties). Voor levensmiddelenproductie geldt aanvullend: voldoen aan Verordening (EG) 852/2004 en EU Drinkwaterrichtlijn 2020/2184. Vraag altijd om certificaatdocumentatie bij aanschaf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe werkt een wateraudit voor mijn bedrijf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een wateraudit bestaat uit meerdere stappen: (1) meting van waterverbruik per locatie en tijdstip via flowmeters; (2) waterkwaliteitsanalyse op hardheid, TDS, pH, microbiologie, chloor en eventuele specifieke verontreinigingen; (3) inventarisatie van kritische verbruikspunten (productie, stoomketels, koelcircuits); (4) risicobeoordeling (Legionella, corrosie, kalkschade); (5) adviesrapport met filteroplossing, capaciteiten en ROI-berekening. Geaccrediteerde auditpartijen in Nederland: Kiwa, SGS, Veolia. Kosten: EUR 500-3.000 afhankelijk van bedrijfsgrootte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een zakelijk waterfilter per medewerker per jaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indicatieve kosten per medewerker per jaar voor zakelijke waterfilteroplossingen: Drinkwaterfontein (mains-fed): EUR 30-60/medewerker/jaar inclusief onderhoud. Centrale koolstoffiltratie: EUR 10-20/medewerker/jaar. RO-systeem voor kantoor: EUR 50-100/medewerker/jaar. Flessenwater ter vergelijking: EUR 100-300/medewerker/jaar. Een mains-fed drinkwaterfontein is dan ook financieel aantrekkelijker dan flessenwater bij meer dan 5 medewerkers. Hoe groter het bedrijf, hoe gunstiger de kostprijs per medewerker.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor bedrijf: zakelijke waterfilteroplossingen',
  description: 'Zakelijke waterfilters voor kantoren, fabrieken en grootverbruikers. Vergelijking van drinkwaterfonteinen, centrale ontharders en RO-systemen voor bedrijven.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/bedrijf',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterBedrijfPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Waterfilter bedrijf', item: 'https://waterfilterplatform.nl/waterfilter/bedrijf' },
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
          <span>Waterfilter bedrijf</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-2xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor bedrijf: zakelijke waterfilteroplossingen
          </h1>
          <p className="text-gray-700 text-lg">
            Van verplichte drinkwatervoorziening voor medewerkers tot bescherming van industriele
            procesapparatuur: zakelijke waterfilters zijn er in alle maten en voor elk bedrijfstype.
            Dit overzicht helpt u de juiste oplossing kiezen.
          </p>
        </div>

        <QuickAnswer answer="Bedrijven zijn wettelijk verplicht drinkwater te verstrekken bij 10+ medewerkers (Arbobesluit art. 3.20). Een mains-fed drinkwaterfontein kost EUR 30-60 per medewerker per jaar, drie tot vijf keer minder dan flessenwater. Voor productie en industrie zijn centrale waterontharders of RO-systemen nodig. Huurcontracten zijn beschikbaar inclusief service." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterbehoeften per bedrijfstype
        </h2>
        <p className="text-gray-700 mb-4">
          Elk type bedrijf heeft andere eisen aan waterfiltratie. Onderstaande tabel geeft een overzicht
          van de voornaamste behoeften en aanbevolen oplossingen per sector.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Bedrijfstype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Voornaamste behoefte</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Aanbevolen oplossing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Kantoor (10-50 medewerkers)</td>
                <td className="border border-gray-300 px-3 py-2">Drinkwater medewerkers</td>
                <td className="border border-gray-300 px-3 py-2">Drinkwaterfontein mains-fed</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Restaurant/hotel</td>
                <td className="border border-gray-300 px-3 py-2">Kwaliteit + apparatuurbescherming</td>
                <td className="border border-gray-300 px-3 py-2">RO + waterontharder</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Productiebedrijf (levensmiddelen)</td>
                <td className="border border-gray-300 px-3 py-2">Processwater kwaliteit</td>
                <td className="border border-gray-300 px-3 py-2">Industriele RO</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Farmaceutische productie</td>
                <td className="border border-gray-300 px-3 py-2">Ultrapuur water</td>
                <td className="border border-gray-300 px-3 py-2">RO + EDI of destillatie</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Zorginstelling</td>
                <td className="border border-gray-300 px-3 py-2">Drinkwater + Legionella-preventie</td>
                <td className="border border-gray-300 px-3 py-2">UV + drinkwaterfontein</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Sportschool/zwembad</td>
                <td className="border border-gray-300 px-3 py-2">Grote volumes, chloor</td>
                <td className="border border-gray-300 px-3 py-2">Centrale koolstoffiltratie</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Arbowet: drinkwaterplicht voor werkgevers
        </h2>
        <p className="text-gray-700 mb-4">
          Artikel 3.20 van het Arbobesluit verplicht werkgevers bij 10 of meer medewerkers een adequate
          drinkwatervoorziening te bieden. Dit is geen vrijblijvend advies maar een wettelijke plicht die
          door de Nederlandse Arbeidsinspectie (NLA) wordt gehandhaafd. Bij fysiek zwaar werk of warme
          werkomgevingen gelden extra eisen aan de beschikbare hoeveelheid water.
        </p>
        <p className="text-gray-700 mb-6">
          Een gecertificeerde mains-fed drinkwaterfontein is de meest praktische invulling: direct
          aangesloten op het leidingnet, geen flessenlogistiek, geen plastic afval en aantoonbaar
          schoon gefilterd water. De kosten (EUR 30-60 per medewerker per jaar) zijn drie tot vijf
          keer lager dan flessenwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Centrale ontharder versus punt-van-gebruik filter
        </h2>
        <p className="text-gray-700 mb-4">
          Een <strong>centrale ontharder</strong> wordt geplaatst op de hoofdwaterinlaat van het gebouw
          en beschermt alle leidingen, verwarmingssystemen, vaatwassers en apparatuur tegelijkertijd.
          Ideaal voor hotels, grote kantoorpanden en productiebedrijven. Hogere investering (EUR 2.000-10.000)
          maar brede bescherming.
        </p>
        <p className="text-gray-700 mb-6">
          Een <strong>punt-van-gebruik (POU) filter</strong> wordt geplaatst op specifieke kranen of
          apparaten (keuken, vergaderzaal, laboratorium). Lagere investering per punt, maar beschermt
          alleen die specifieke aansluiting. Geschikt voor kleinere kantoren of als aanvulling op een
          centrale ontharder voor hogere waterkwaliteitseisen op specifieke punten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wateraudit: eerste stap voor grotere bedrijven
        </h2>
        <p className="text-gray-700 mb-4">
          Voor bedrijven met een waterverbruik van meer dan 500 liter per dag of complexe
          productieprocessen is een professionele wateraudit de aanbevolen eerste stap. Geaccrediteerde
          auditpartijen zoals Kiwa en SGS brengen in kaart:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Actueel waterverbruik per locatie en piekverbruik</li>
          <li>Waterhardheid, TDS, pH en specifieke verontreinigingen per aansluiting</li>
          <li>Kritische verbruikspunten voor productie of apparatuurbescherming</li>
          <li>Legionella-risicoassessment voor grotere gebouwen</li>
          <li>ROI-berekening voor filteroplossingen</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Huurmodellen voor zakelijke waterfilters
        </h2>
        <p className="text-gray-700 mb-4">
          Grotere leveranciers zoals Culligan, BWT Aqua en Pentair bieden huurcontracten aan voor
          zakelijke waterfiltersystemen. De voordelen:
        </p>
        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><strong>Lagere instapdrempel:</strong> EUR 30-150/maand vs. EUR 500-5.000 aanschaf</li>
            <li><strong>All-inclusive:</strong> onderhoud, filterwissel en SLA-service inbegrepen</li>
            <li><strong>Geen balansactivering:</strong> operationele kosten in plaats van investering</li>
            <li><strong>Flexibiliteit:</strong> opschalen, verhuizen of opzeggen bij bedrijfswijzigingen</li>
            <li><strong>Monitoring:</strong> moderne systemen met remote monitoring en proactief onderhoud</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Certificeringen voor zakelijke waterfilters
        </h2>
        <p className="text-gray-700 mb-6">
          Bij zakelijke waterfilters zijn certificeringen van groot belang, zeker voor levensmiddelen-
          productie en zorginstellingen. De voornaamste keurmerken zijn NSF/ANSI 58 (internationaal,
          voor RO-systemen), KIWA-certificering (Nederland, vereist door overheid en drinkwaterbedrijven)
          en WRAS (Groot-Brittannie). Vraag altijd om certificaatdocumentatie bij aanschaf of huur.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over zakelijke waterfilters
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
          <Link href="/waterfilter/horeca" className="text-[#005F8A] underline">waterfilter voor horeca</Link>,{' '}
          <Link href="/drinkwaterfontein/kantoor" className="text-[#005F8A] underline">drinkwaterfontein voor kantoor</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link> en{' '}
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
