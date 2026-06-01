import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Waterfilter voor huurwoning: installeren zonder boren (2026)',
  description: 'Waterfilter plaatsen in een huurwoning zonder toestemming? Vergelijk 4 opties die geen permanente installatie vereisen: filterkan, counter-top osmose.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/huurwoning' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Mag ik als huurder een waterfilter installeren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in Nederland mag je als huurder een waterfilter installeren, mits de installatie schadeloos en omkeerbaar is. Je hoeft geen toestemming te vragen voor filteropties die geen boren of permanente aanpassingen vereisen, zoals een filterkruik, counter-top osmose of clip-on kraanfilter. Voor een inbouw-osmosefilter onder het aanrecht is schriftelijke toestemming van de verhuurder verstandig, al is het systeem bij verhuizing volledig te verwijderen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de beste waterfilteroptie voor een huurwoning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor de meeste huurders is een counter-top osmosefilter (€200–400) de beste balans: osmosekwaliteit water zonder boren of permanente installatie. Het apparaat staat op het aanrecht, koppelt met een slang aan de kraan en laat geen sporen achter bij verhuizing. Wie een budgetoplossing zoekt, volstaat met een filterkruik (€25–60). Voor gezinnen is een onder-aanrecht osmose met toestemming van de verhuurder de meest praktische optie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Moet ik mijn verhuurder informeren over een waterfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor schadeloze, verwijderbare opties (filterkan, counter-top, clip-on) is dat juridisch niet verplicht. Voor een onder-aanrecht installatie die de slangaansluiting onder het aanrecht gebruikt, is schriftelijk overleg met de verhuurder verstandig. Documenteer de beginsituatie met foto\'s, zodat je bij vertrek kunt aantonen dat je alles in originele staat hebt achtergelaten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een osmosefilter meenemen bij verhuizing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Counter-top osmosesystemen zijn volledig draagbaar — je pakt het apparaat op en neemt het mee. Onder-aanrecht systemen vereisen het terugplaatsen van de originele kraanslangen en het dichtdraaien van eventuele aftapkranen, maar zijn eveneens volledig te verwijderen. Het gat van een extra tapkraan (indien geboord) dien je te dichten — gebruik een afdekplaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een waterfilter voor een huurwoning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Filterkruik: €25–60 eenmalig, filterpatronen €30–60 per jaar. Clip-on kraanfilter: €30–80 eenmalig, patronen €40–70/jaar. Counter-top osmose: €200–400 eenmalig, membraan elke 2 jaar €60–100. Tafelmodel waterkoker met filter: €80–150 eenmalig. Onder-aanrecht osmose (met toestemming): €300–600 inclusief installatie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een filterkruik ook kalk en PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard Brita-type filterkruik verwijdert kalk gedeeltelijk (ionenwisseling), verbetert smaak en verwijdert chloor. PFAS wordt door actief kool beperkt verwijderd (~50–70%). Nitraat, lood en bacteriën worden nauwelijks verwijderd. Voor volledige verwijdering van PFAS, nitraat en zware metalen is een osmosefilter (RO) nodig — ook in counter-top uitvoering beschikbaar voor huurwoningen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een clip-on filter op elke kraan monteren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clip-on kraanfilters passen op de meeste standaard keukenmengsels met buitendraad of met een meegeleverde adapter. Ze passen echter niet op pull-out sproeikranen (uittrekbare sproeier) of op enkele speciale designkranen. Controleer het draadtype van je kraan (M22 of M24 is het meest gebruikelijk) voordat je een filter koopt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doe ik als mijn verhuurder een waterfilter weigert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Als verhuurder een onder-aanrecht installatie weigert, heb je nog steeds de optie van een filterkruik, counter-top osmose of clip-on filter — hiervoor is geen toestemming nodig. Deze opties veroorzaken geen schade en vallen buiten de zeggenschap van de verhuurder. Een verhuurder kan alleen bezwaar maken tegen wijzigingen die schade of permanente aanpassingen aan de woning veroorzaken.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterfilter voor huurwoning: installeren zonder boren (2026)',
  description: 'Waterfilter plaatsen in een huurwoning zonder toestemming? Vergelijk 4 opties die geen permanente installatie vereisen.',
  datePublished: '2026-04-05',
  dateModified: '2026-04-05',
  url: 'https://waterfilterplatform.nl/waterfilter/huurwoning',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterHuurwoningPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          articleSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Huurwoning', item: 'https://waterfilterplatform.nl/waterfilter/huurwoning' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Huurwoning</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterfilter voor huurwoning: installeren zonder boren (2026)
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Als huurder wil je schoon gefilterd drinkwater, maar mag je niet boren, geen permanente installaties plaatsen en wil je zeker je borg niet verliezen. Gelukkig zijn er meerdere uitstekende opties die volledig zonder toestemming werken — van een eenvoudige filterkruik tot een volwaardig counter-top osmosesysteem.
        </p>

        <QuickAnswer answer="Huurders kunnen zonder toestemming een waterfilter plaatsen via een filterkruik (€25–60), counter-top osmose (€200–400), tafelmodel waterkoker met filter of een clip-on kraanfilter. Voor klassieke onder-aanrecht osmose is toestemming verstandig, maar het systeem is bij verhuizing volledig te verwijderen." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De uitdagingen voor huurders
        </h2>
        <p className="text-gray-700 mb-4">
          Huurders in Nederland staan voor drie typische obstakels als het gaat om waterfilters:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Geen boren of permanente installatie:</strong> Je mag de woning niet aanpassen zonder toestemming, anders riskeer je een boete op je borg.</li>
          <li><strong>Geen vast leidingwerk aanpassen:</strong> Bestaande waterleidingen of keukenslangen aanpassen kan als beschadiging worden gezien.</li>
          <li><strong>Risico op borg verlies:</strong> Bij oplevering moet de woning in originele staat zijn. Elk geboord gat of achtergelaten installatie telt mee.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          De goede nieuws: er zijn vier uitstekende opties die volledig zonder toestemming of permanent werk werken. Lees ook onze algemene pagina over <Link href="/waterfilter/soorten" className="text-[#005F8A] underline">alle soorten waterfilters</Link> voor meer achtergrond.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          4 opties zonder toestemming
        </h2>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">1. Filterkruik (€25–60 eenmalig)</h3>
        <p className="text-gray-700 mb-3">
          De eenvoudigste en goedkoopste optie. Een filterkruik zoals Brita of BWTS vul je met kraanwater dat door een actief kool- en ionenwisselaarpatroon filtert. Geen installatie, geen slangen, geen aanpassingen.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Werkt overal zonder installatie</li>
          <li>Verbetert smaak, verwijdert chloor en verlaagt tijdelijke hardheid</li>
          <li>Verwijdert geen bacteriën, nitraat of lood</li>
          <li>Filterpatronen kosten €30–60 per jaar bij gemiddeld gebruik</li>
          <li>Capaciteit: 2,4–3,5 liter per kruik — voldoende voor 1–2 personen</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Ideaal voor:</strong> studio's, alleenstaanden, tijdelijke huurders of als aanvullende oplossing.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">2. Counter-top osmosefilter (€200–400)</h3>
        <p className="text-gray-700 mb-3">
          Een counter-top osmose staat op het aanrecht en wordt met een slangkoppeling aan de bestaande kraan verbonden — volledig zonder boren. Het systeem produceert osmosewater (verwijdert 95%+ van kalk, nitraat, PFAS, zware metalen en bacteriën) direct uit de kraan.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Osmosekwaliteit water zonder installatieproblemen</li>
          <li>Aansluiting via koppelstuk op de bestaande mengkraan (geen boren)</li>
          <li>100% draagbaar: meenemen bij verhuizing</li>
          <li>Membraan vervanging elke 2 jaar (~€60–100)</li>
          <li>Past op de meeste standaard keukenmengsels</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Ideaal voor:</strong> appartementen, gezinnen in huurwoning, langetermijn huurders die optimale waterkwaliteit willen.
        </p>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">3. Tafelmodel waterkoker met filter (€80–150)</h3>
        <p className="text-gray-700 mb-3">
          Een filterkoker combineert een actief koolfilter met een waterkoker in één apparaat. Je filtert en verhit het water in één stap. Geen installatie vereist — gewoon aansluiten op het stopcontact.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Combineert filtratie en koken in één</li>
          <li>Geschikt voor thee, koffie en gekookt drinkwater</li>
          <li>Verwijdert chloor en verbetert smaak</li>
          <li>Geen osmosekwaliteit (verwijdert geen nitraat of zware metalen)</li>
          <li>Filterpatronen: €20–40 per 2–3 maanden</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#003F5C] mt-6 mb-3">4. Clip-on kraanfilter (€30–80)</h3>
        <p className="text-gray-700 mb-3">
          Een clip-on filter schroeft direct op het kraanuitloopstuk (buitendraad M22 of M24) zonder gereedschap of lijm. Eenvoudig te monteren en te verwijderen in seconden.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Geen installatie — draait op bestaand kraandraad</li>
          <li>Actief kool verwijdert chloor, verbetert smaak</li>
          <li>UF-varianten filteren ook bacteriën (0,01 micron)</li>
          <li>Werkt niet op alle kraantypen (niet op pull-out sproeikranen)</li>
          <li>Filtervervanging elke 3–6 maanden</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          1 optie die toestemming vereist (maar meeneembaar is)
        </h2>
        <p className="text-gray-700 mb-4">
          Een klassiek <strong>onder-aanrecht osmosefilter</strong> biedt de beste waterkwaliteit en combineert met een extra tapkraan naast de bestaande mengkraan. Dit vereist:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Een gat in het aanrechtblad voor de tapkraan (boren)</li>
          <li>Aansluiting op de koud-waterafsluiter onder het aanrecht</li>
          <li>Afvoerverbinding voor spoelwater</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Juridisch gezien is dit systeem bij vertrek volledig te verwijderen. Sluit de waterafsluiter terug aan, verwijder de tapkraan en dicht het gat met een roestvrijstalen afdekplaat (€5). Sommige verhuurders staan dit toe, zeker als je schriftelijk toestemming vraagt en de herstelverplichting documenteert. Bekijk ons overzicht van <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose systemen</Link> voor meer informatie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijkingstabel: 4 opties voor huurwoningen
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Optie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Installatie</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Permanent</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kosten</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Effectiviteit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkruik</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">€25–60 + patronen</td>
                <td className="border border-gray-300 px-3 py-2">Meenemen</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Basis</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Counter-top osmose</td>
                <td className="border border-gray-300 px-3 py-2">Slangkoppeling</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">€200–400</td>
                <td className="border border-gray-300 px-3 py-2">Meenemen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Uitstekend</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Tafelmodel filterkoker</td>
                <td className="border border-gray-300 px-3 py-2">Geen</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">€80–150</td>
                <td className="border border-gray-300 px-3 py-2">Meenemen</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Matig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Clip-on kraanfilter</td>
                <td className="border border-gray-300 px-3 py-2">Schroeven op kraan</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Nee</td>
                <td className="border border-gray-300 px-3 py-2">€30–80</td>
                <td className="border border-gray-300 px-3 py-2">Afschroeven</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Goed (UF-variant)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Beste optie per woningtype
        </h2>

        <div className="space-y-3 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Studio of klein appartement (1–2 personen)</h3>
            <p className="text-gray-700 text-sm">Een filterkruik of clip-on filter volstaat. Ruimte is beperkt en het waterverbruik is laag. Budget-optie: Brita Maxtra+. Upgrade: counter-top osmose als smaak en kwaliteit prioriteit zijn.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Appartement of tussenwoning (2–4 personen)</h3>
            <p className="text-gray-700 text-sm">Counter-top osmose is de beste keuze. Osmosekwaliteit voor het hele gezin, geen toestemming nodig, meeneembaar. Kosten per liter: lager dan flessenwater na het eerste jaar.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Gezinswoning (4+ personen)</h3>
            <p className="text-gray-700 text-sm">Overweeg een onder-aanrecht osmose met schriftelijke toestemming. Bij weigering biedt een counter-top osmose met grotere opslagtank de beste capaciteit. Alternaar: twee counter-top eenheden voor keuken en badkamer.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Is een waterfilter plaatsen in een huurwoning legaal in Nederland?
        </h2>
        <p className="text-gray-700 mb-4">
          Ja. Juridisch gezien hebben huurders het recht om schadeloze, omkeerbare aanpassingen te maken aan hun huurwoning. Dit is verankerd in het Burgerlijk Wetboek (artikel 7:215 BW). De sleutelcriteria zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li><strong>Geen structurele schade</strong> aan muren, leidingen of aanrecht</li>
          <li><strong>Volledig omkeerbaar</strong> bij vertrek (terug in originele staat)</li>
          <li><strong>Geen invloed</strong> op de waterinstallatie van andere huurders</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor twijfelgevallen (zoals een extra tapkraan gat) is het altijd verstandig schriftelijk overleg te voeren met de verhuurder en de beginsituatie te fotograferen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Tips voor overleg met de verhuurder
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Vraag schriftelijk</strong> (e-mail of aangetekende brief) — bewaar altijd bewijs van toestemming.</li>
          <li><strong>Beschrijf de installatie nauwkeurig:</strong> welk systeem, welke aansluitingen, welk materiaal wordt gebruikt.</li>
          <li><strong>Benoem de herstelverplichting</strong> expliciet: "bij beëindiging huurovereenkomst verwijder ik het systeem en herstel ik de originele situatie."</li>
          <li><strong>Maak foto's</strong> van de situatie vóór installatie — timestamped via smartphone is afdoende.</li>
          <li><strong>Wijs op voordelen voor de verhuurder:</strong> minder kalkafzetting in leidingen, minder slijtage aan apparaten.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stap-voor-stap: counter-top osmose installeren in huurwoning
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Verwijder de bestaande kraansproeier (perlator) door hem af te draaien.</li>
          <li>Bevestig de meegeleverde slangadapter op de kraanutloop (M22 of M24 draad).</li>
          <li>Verbind de toevoerslang van het osmosesysteem met de adapter.</li>
          <li>Sluit de afvoerslang aan op de gootsteen of een emmer.</li>
          <li>Zet de kraan aan en controleer op lekken.</li>
          <li>Laat het systeem 30 minuten doorspoelen voor eerste gebruik (membraanactivering).</li>
          <li>Bij verhuizing: verwijder adapter, draai originele perlator terug — klaar in 5 minuten.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veelgestelde vragen
        </h2>
        <div className="space-y-3 mb-8">
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <div className="bg-[#E0F2FE] rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#003F5C] mb-2">Schoon water in uw huurwoning — zonder gedoe</h3>
          <p className="text-gray-700 mb-4">
            De PureAqua 4-in-1 osmose + kokend water kraan biedt ook in een huurwoning de best mogelijke waterkwaliteit. Counter-top uitvoering beschikbaar voor huurders zonder installatieruimte.
          </p>
          <Link href="/omgekeerde-osmose/kopen" className="inline-block bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#003F5C] transition-colors">
            Bekijk osmosefilters →
          </Link>
        </div>

        <p className="text-gray-600 text-sm">
          Lees ook: <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilters vergelijken</Link>, <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link> en <Link href="/drinkwater" className="text-[#005F8A] underline">drinkwaterkwaliteit in Nederland</Link>.
        </p>

        <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/keuzehulp/huurwoning" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp huurwoning</h3>
            <p className="text-sm text-gray-600">Persoonlijk advies voor het kiezen van het juiste waterfilter als huurder.</p>
          </Link>
          <Link href="/beste-waterfilter/huurwoning" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Beste waterfilter voor huurwoning</h3>
            <p className="text-sm text-gray-600">Rangschikking van de beste waterfilters speciaal geselecteerd voor huurders.</p>
          </Link>
          <Link href="/waterfilter/onder-aanrecht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter onder aanrecht</h3>
            <p className="text-sm text-gray-600">Alles over onder-aanrecht waterfilters: installatie, kosten en of het past in een huurwoning.</p>
          </Link>
          <Link href="/waterfilter/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter kopen</h3>
            <p className="text-sm text-gray-600">Praktische koopgids voor waterfilters: worauf je let bij prijs, kwaliteit en installatie.</p>
          </Link>
        </div>
      </section>
      </main>
    </>
  );
}
