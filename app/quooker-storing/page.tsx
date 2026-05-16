import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Quooker storing: veelvoorkomende problemen en oplossingen 2026',
  description:
    'Quooker doet het niet? Overzicht van de meest voorkomende Quooker storingen: geen kokend water, lekkage, rode indicator, piepen en E-codes. Met oplossingen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/quooker-storing' },
  openGraph: {
    title: 'Quooker storing: veelvoorkomende problemen en oplossingen 2026',
    description:
      'Quooker doet het niet? Overzicht van de meest voorkomende Quooker storingen: geen kokend water, lekkage, rode indicator, piepen en E-codes. Met oplossingen.',
    url: 'https://waterfilterplatform.nl/quooker-storing',
    type: 'article',
    locale: 'nl_NL',
  },
};

const faqItems = [
  {
    question: 'Quooker geeft geen kokend water — wat nu?',
    answer:
      'Controleer eerst of de Quooker in stand-by staat (schakelaar ingedrukt houden om te activeren). Na inschakelen duurt het 5–10 minuten voordat de boiler op temperatuur is — wacht dus even. Controleer ook de stroomtoevoer: zit de stekker goed in het stopcontact en werkt de groep? Als dat alles in orde is maar er nog altijd geen kokend water komt, kan de thermostaat of het verwarmingselement defect zijn. In dat geval is contact opnemen met de Quooker servicelijn de volgende stap.',
  },
  {
    question: 'Wat betekent de rode indicator op de Quooker?',
    answer:
      'De rode indicator op de Quooker geeft aan dat het filterpatroon vol is. Dit treedt op na verwerking van circa 1.500 liter water of na 12 maanden gebruik — afhankelijk van wat eerder bereikt wordt. Door het filterpatroon te vervangen wordt de storing direct verholpen. Na vervanging wordt de indicator gereset. Gebruik je een Quooker in een huishouden met veel verbruik, dan kan 12 maanden al vóór de 1.500 liter bereikt worden.',
  },
  {
    question: 'Mijn Quooker lekt onder het aanrecht — wat doe ik?',
    answer:
      'Zet eerst de watertoevoer af om verdere schade te voorkomen. Controleer dan de T-stuk aansluitingen, de filterhouder en de O-ringen. Een kleine lekkage bij de filterhouder is vrijwel altijd te verhelpen door de O-ring te vervangen — een kleine klus die je zelf kunt doen met een reserveonderdeel. Lekt het water uit de boiler zelf, dan is er waarschijnlijk een afdichting defect. Dat vereist een installateur of Quooker-technicus. Probeer nooit een lekkende boiler zelf te openen.',
  },
  {
    question: 'Quooker maakt een plopgeluid of piept — wat is dat?',
    answer:
      'Een plopgeluid of piepend geluid bij de Quooker wordt vrijwel altijd veroorzaakt door kalkaanslag op het verwarmingselement. Bij het opwarmen zet kalk uitzet of breekt er een laagje af, wat de typische geluiden veroorzaakt. De oplossing is ontkalken. In regio\'s met hard water (boven 12°dH) is het advies om elk jaar te ontkalken. Herhaal je dit niet, dan neemt de kalkaanslag toe en kan het verwarmingselement op termijn beschadigen.',
  },
  {
    question: 'Wat betekent E1, E2, E3 foutcode op de Quooker?',
    answer:
      'E-codes op het Quooker-display duiden op een technische storing: E1 wijst op een defecte temperatuursensor, E2 op een probleem met de thermostaat, en E3 op een defect verwarmingselement. Deze storingen zijn niet zelf op te lossen — ze vereisen vervanging van onderdelen door een erkend technicus. Bel bij een E-code de Quooker servicelijn (0800-7866537). Noteer de foutcode en het model van je Quooker voordat je belt.',
  },
  {
    question: 'Quooker warmt niet snel genoeg op — oorzaak?',
    answer:
      'Als de Quooker merkbaar trager opwarmt dan normaal, zijn er twee waarschijnlijke oorzaken: het boilermodel is te klein voor het dagelijkse verbruik (de PRO3 heeft een inhoud van 3 liter; bij intensief gebruik is de PRO7 of PRO11 geschikter), of het verwarmingselement is verkalk. Bij kalkaanslag stijgt de opwarmtijd omdat warmte minder efficiënt wordt overgedragen. Controleer wanneer je voor het laatst hebt ontkalkt en bekijk de waterhardheid in jouw regio.',
  },
  {
    question: 'Hoeveel van de Quooker storingen zijn kalk-gerelateerd?',
    answer:
      'Naar schatting 60–70% van alle onderhoudsgerelateerde storingen bij Quooker-apparaten is direct of indirect kalk-gerelateerd. Dit geldt met name voor huishoudens in gebieden met hard water (boven 12°dH). Kalkaanslag leidt tot geluidsoverlast, verminderde opwarmsnelheid, hogere energiekosten en op termijn beschadiging van het verwarmingselement. Een osmose pre-filter verwijdert tot 95–99% van de kalk vóór het water de Quooker in gaat, wat ontkalken vrijwel overbodig maakt.',
  },
  {
    question: 'Wanneer stuur ik mijn Quooker ter reparatie?',
    answer:
      'Stuur je Quooker ter reparatie als ontkalken en eenvoudige onderhoudsstappen (O-ring vervangen, filter wisselen) geen effect hebben, als er een E-code verschijnt op het display, of als er lekkage bij de boiler is. Reparatiekosten buiten garantie liggen doorgaans tussen €80 en €300 afhankelijk van het defect. Is de Quooker ouder dan 8 jaar en bedragen de reparatiekosten meer dan €200, overweeg dan een nieuw apparaat of een alternatief systeem.',
  },
];

const storingenTabel = [
  { storing: 'Geen kokend water', oorzaak: 'Stand-by, opwarmtijd', zelf: 'Ja', actie: 'Schakelaar controleren, 10 min. wachten' },
  { storing: 'Rode indicator', oorzaak: 'Filter vol', zelf: 'Ja', actie: 'Filterpatroon vervangen' },
  { storing: 'Lekkage bij filterhouder', oorzaak: 'O-ring versleten', zelf: 'Ja', actie: 'O-ring vervangen' },
  { storing: 'Lekkage bij boiler', oorzaak: 'Afdichting defect', zelf: 'Nee', actie: 'Installateur bellen' },
  { storing: 'Plopgeluid / piepen', oorzaak: 'Kalkaanslag', zelf: 'Ja', actie: 'Ontkalken' },
  { storing: 'E1 foutcode', oorzaak: 'Temperatuursensor', zelf: 'Nee', actie: 'Quooker servicelijn bellen' },
  { storing: 'E2 foutcode', oorzaak: 'Thermostaat', zelf: 'Nee', actie: 'Quooker servicelijn bellen' },
  { storing: 'E3 foutcode', oorzaak: 'Verwarmingselement', zelf: 'Nee', actie: 'Quooker servicelijn bellen' },
  { storing: 'Verminderde druk', oorzaak: 'Filter verstopt of kalk', zelf: 'Ja', actie: 'Filter vervangen + ontkalken' },
  { storing: 'Waterkleur / smaak afwijkend', oorzaak: 'Filter vol', zelf: 'Ja', actie: 'Filterpatroon vervangen' },
];

export default function QuookerStoringPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Quooker storing', url: 'https://waterfilterplatform.nl/quooker-storing' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Quooker storing: veelvoorkomende problemen en oplossingen 2026',
          description:
            'Quooker doet het niet? Overzicht van de meest voorkomende Quooker storingen: geen kokend water, lekkage, rode indicator, piepen en E-codes. Met oplossingen.',
          datePublished: '2026-03-25',
          url: 'https://waterfilterplatform.nl/quooker-storing',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Quooker storing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker storing: veelvoorkomende problemen en oplossingen
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Doet je Quooker het niet meer? Van geen kokend water en mysterieuze E-codes tot lekkage onder het aanrecht —
            de meeste Quooker-storingen hebben een concrete oorzaak en een directe oplossing.
            Op deze pagina vind je een volledig overzicht van veelvoorkomende problemen, wat ze betekenen en wat je er zelf aan kunt doen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/quooker-onderhoud"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Quooker onderhoud →
            </Link>
            <Link
              href="/quooker-kalk"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kalk in Quooker
            </Link>
            <Link
              href="/quooker/filter-vervangen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Filter vervangen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="De meest voorkomende Quooker storingen zijn: geen kokend water (boiler niet opgewarmd of thermostaat), rode filterindicator (filterpatroon vol), lekkage onder aanrecht (aansluiting los of O-ring versleten), en E-foutcodes op het display. Veel storingen zijn kalk-gerelateerd en te voorkomen met regelmatig ontkalken of een osmose pre-filter." />

        {/* Storingenoverzicht tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke Quooker storingen komen het meest voor?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vind je een overzicht van de tien meest voorkomende Quooker-storingen, inclusief de waarschijnlijke oorzaak,
            of je het zelf kunt oplossen en welke actie je moet ondernemen.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Storing</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Mogelijke oorzaak</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Zelf oplossen?</th>
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Actie</th>
                </tr>
              </thead>
              <tbody>
                {storingenTabel.map((r, i) => (
                  <tr key={r.storing} className={`border-b border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-700">{r.storing}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.oorzaak}</td>
                    <td className={`py-2.5 px-3 font-semibold ${r.zelf === 'Ja' ? 'text-[#005F8A]' : 'text-gray-400'}`}>{r.zelf}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.actie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Storingen waarbij "Zelf oplossen? = Nee" vereisen een erkend installateur of de Quooker servicelijn (0800-7866537).
          </p>
        </section>

        {/* Geen kokend water */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat doe je als de Quooker geen kokend water geeft?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit is veruit de meest gemelde Quooker-klacht. In de meeste gevallen is de oorzaak eenvoudig en zelf op te lossen.
            Doorloop de volgende checklist voordat je de Quooker-service inschakelt:
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-5">
            <p className="font-semibold text-[#003F5C] mb-3">Stappenplan: Quooker geeft geen kokend water</p>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span><strong>Controleer de stand-by modus:</strong> houd de schakelaar op de kraan 3 seconden ingedrukt om de Quooker te activeren</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span><strong>Wacht 5–10 minuten:</strong> na inschakelen vanuit koude toestand duurt het even voor de boiler op temperatuur is</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span><strong>Controleer de stroomtoevoer:</strong> zit de stekker los? Is de groepenkast gecontroleerd? Werkt het stopcontact met een ander apparaat?</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span><strong>Bekijk het display:</strong> geeft het display een E-code? Zie dan de sectie over foutcodes verderop op deze pagina</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-[#005F8A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">5</span>
                <span><strong>Geen display of reactie:</strong> bel de Quooker servicelijn — thermostaat of verwarmingselement kan defect zijn</span>
              </li>
            </ol>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            Als de Quooker na bovenstaande stappen nog altijd geen kokend water levert, is er waarschijnlijk een intern defect.
            Dit valt buiten wat je zelf kunt oplossen. Raadpleeg de{' '}
            <Link href="/quooker-onderhoud" className="text-[#005F8A] underline">onderhoudspagina</Link> voor preventieve stappen.
          </p>
        </section>

        {/* E-codes */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat betekenen de E-codes op je Quooker?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            E-codes op het Quooker-display zijn foutmeldingen die op een intern technisch probleem wijzen.
            Ze zijn niet zelf op te lossen — maar je kunt ze wel interpreteren om de technicus goed te informeren.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                code: 'E1',
                naam: 'Temperatuursensor',
                uitleg: 'De sensor die de watertemperatuur in de boiler meet, functioneert niet correct. De Quooker kan de temperatuur niet meer betrouwbaar bewaken.',
              },
              {
                code: 'E2',
                naam: 'Thermostaat',
                uitleg: 'De thermostaat die de maximale temperatuur bewaakt, slaat af of geeft een foutwaarde terug. Veiligheidscomponent — niet zelf repareren.',
              },
              {
                code: 'E3',
                naam: 'Verwarmingselement',
                uitleg: 'Het verwarmingselement zelf is defect of onderbroken. Dit kan optreden na langdurige kalkaanslag die het element beschadigt.',
              },
            ].map(e => (
              <div key={e.code} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-2xl font-bold text-[#003F5C] mb-1">{e.code}</p>
                <p className="font-semibold text-gray-800 text-sm mb-2">{e.naam}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{e.uitleg}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] text-sm mb-1">Wat te doen bij een E-code?</p>
            <p className="text-sm text-gray-700">
              Schakel de Quooker uit en bel de Quooker servicelijn: <strong>0800-7866537</strong> (gratis, werkdagen).
              Noteer de E-code, je model (PRO3, PRO7, Fusion etc.) en de aankoopdatum.
              Bij apparaten binnen garantie worden onderdelen kosteloos vervangen.
            </p>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Hoe voorkom je storingen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe voorkom je de meeste Quooker storingen?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Naar schatting 60–70% van alle onderhoudsgerelateerde storingen is direct gerelateerd aan kalkaanslag.
            Dit geldt met name in regio's met hard water, zoals grote delen van Zuid- en Oost-Nederland waar de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid</Link> boven 15°dH ligt.
            Een goed onderhoudsschema voorkomt de meeste storingen structureel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-semibold text-gray-800 mb-3">Ontkalkschema op basis van waterhardheid</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between border-b border-gray-100 pb-1.5">
                  <span>Zacht water (&lt;7°dH)</span>
                  <span className="font-semibold text-[#005F8A]">Elke 2 jaar</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5">
                  <span>Matig water (7–15°dH)</span>
                  <span className="font-semibold text-[#005F8A]">Jaarlijks</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-1.5">
                  <span>Hard water (15–25°dH)</span>
                  <span className="font-semibold text-[#005F8A]">Elk half jaar</span>
                </li>
                <li className="flex justify-between">
                  <span>Zeer hard water (&gt;25°dH)</span>
                  <span className="font-semibold text-[#005F8A]">Elk kwartaal</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-semibold text-gray-800 mb-3">Preventief onderhoud checklist</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">✓</span>
                  <span>Filterpatroon jaarlijks of na 1.500L vervangen</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">✓</span>
                  <span>Boiler ontkalken op basis van lokale waterhardheid</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">✓</span>
                  <span>O-ringen bij filterhouder controleren bij filterwissel</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">✓</span>
                  <span>Aansluitingen periodiek visueel inspecteren op vocht</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#005F8A] shrink-0">✓</span>
                  <span>Quooker in de winter niet volledig uitschakelen (vorstschade)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Osmose als structurele kalkoplossing</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose systeem</Link> als pre-filter
              verwijdert 95–99% van de kalk voordat het water de Quooker in gaat. Dit maakt frequent ontkalken overbodig,
              vermindert het risico op E3-storingen aanzienlijk en verlengt de levensduur van het verwarmingselement.
              Lees meer op de pagina over{' '}
              <Link href="/quooker-kalk" className="text-[#005F8A] underline">kalk in de Quooker</Link>.
            </p>
          </div>
        </section>

        {/* Garantie en reparatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Quooker garantie en reparatie: wat zijn je opties?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Quooker biedt standaard 2 jaar fabrieksgarantie op nieuwe apparaten. Sommige dealers bieden uitgebreide garantie aan
            of sluiten een onderhoudscontract af. Na de garantietermijn zijn reparaties voor eigen rekening.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-semibold text-[#003F5C] mb-3">Binnen garantie</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">✓</span> Defecte onderdelen kosteloos vervangen</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">✓</span> Voorwaarde: defect niet door verkeerd gebruik</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">✓</span> Aankoopbewijs en model noteren voor claim</li>
                <li className="flex gap-2"><span className="text-[#005F8A] shrink-0">✓</span> Contact: Quooker dealer of servicelijn</li>
              </ul>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-semibold text-gray-700 mb-3">Buiten garantie: reparatiekosten</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span>O-ring / kleine onderdelen</span>
                  <span className="font-semibold">€10–30</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span>Temperatuursensor (E1)</span>
                  <span className="font-semibold">€80–130</span>
                </li>
                <li className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span>Thermostaat (E2)</span>
                  <span className="font-semibold">€100–160</span>
                </li>
                <li className="flex justify-between">
                  <span>Verwarmingselement (E3)</span>
                  <span className="font-semibold">€150–300</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            De Quooker servicelijn is bereikbaar op <strong>0800-7866537</strong> (gratis, werkdagen 8.00–17.00 uur).
            Je kunt ook via de Quooker-website een serviceaanvraag indienen of een erkende installateur in jouw regio zoeken.
          </p>
        </section>

        {/* Is reparatie de moeite waard */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Is het de moeite waard om een oude Quooker te laten repareren?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Een veelgestelde vraag bij een Quooker-storing: repareren of vervangen? De richtlijn die vaak gehanteerd wordt:
            als het apparaat ouder is dan 8 jaar én de reparatiekosten meer dan €200 bedragen, is vervanging of een alternatief systeem
            economisch verstandiger.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                scenario: 'Repareer',
                conditie: 'Apparaat jonger dan 5 jaar, reparatiekosten onder €150',
                advies: 'Reparatie rendeert — de resterende levensduur rechtvaardigt de investering. Laat ook direct ontkalken om herhaling te voorkomen.',
                kleur: 'bg-[#E0F2FE]',
                tekstkleur: 'text-[#003F5C]',
              },
              {
                scenario: 'Overweeg beide',
                conditie: '5–8 jaar oud, kosten €150–250',
                advies: 'Vergelijk de reparatiekosten met de prijs van een nieuw model of alternatief. Vraag een offerte aan voor beide opties.',
                kleur: 'bg-gray-50',
                tekstkleur: 'text-gray-700',
              },
              {
                scenario: 'Vervang',
                conditie: 'Ouder dan 8 jaar, kosten boven €200',
                advies: 'Een nieuw systeem biedt garantie, verbeterde energieprestaties en moderne filteropties. Overweeg ook een Quooker-alternatief.',
                kleur: 'bg-gray-50',
                tekstkleur: 'text-gray-700',
              },
            ].map(s => (
              <div key={s.scenario} className={`${s.kleur} rounded-xl p-5`}>
                <p className={`font-bold mb-1 ${s.tekstkleur}`}>{s.scenario}</p>
                <p className="text-xs text-gray-500 mb-2 italic">{s.conditie}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{s.advies}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Meer weten over alternatieven?{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">Bekijk de beste Quooker-alternatieven van 2026</Link>,
            waaronder 4-in-1 osmose kranen die vergelijkbare functies bieden voor een lagere prijs.
          </p>
        </section>

        {/* FAQ sectie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen: Quooker storing</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/quooker-kalk', label: 'Kalk in de Quooker: oorzaken en oplossingen' },
              { href: '/quooker-onderhoud', label: 'Quooker onderhoud: compleet schema' },
              { href: '/quooker/filter-vervangen', label: 'Quooker filter vervangen: stap voor stap' },
              { href: '/quooker-alternatief', label: 'Beste Quooker alternatieven 2026' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente in Nederland' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: volledige uitleg' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
