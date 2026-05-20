import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor wijn en bier brouwen: waterkwaliteit en smaak (2026)',
  description:
    'De waterkwaliteit is bepalend voor de smaak van zelfgebrouwen bier en wijn. Leer welk waterfilter het beste past bij thuisbrouwen en wijnmaken.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/wijn-bier' },
  openGraph: {
    title: 'Waterfilter voor wijn en bier brouwen: waterkwaliteit en smaak (2026)',
    description:
      'De waterkwaliteit is bepalend voor de smaak van zelfgebrouwen bier en wijn. Leer welk waterfilter het beste past bij thuisbrouwen en wijnmaken.',
    url: 'https://waterfilterplatform.nl/waterfilter/wijn-bier',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk water is het beste voor thuisbrouwen?',
    answer:
      'Voor thuisbrouwen is gefilterd water met een bekende mineralensamenstelling ideaal. Een omgekeerde-osmosefilter levert bijna mineraalvrij water (TDS < 10 mg/L) waaraan je zelf de juiste mineralen kunt toevoegen voor het biertype dat je brouwt. Voor lichte bieren (Pilsner, Lager) gebruik je zacht water met weinig mineralen; voor stouts en porters is harder water met meer sulfaten geschikt.',
  },
  {
    question: 'Waarom is chloor slecht voor bier brouwen?',
    answer:
      'Chloor en chloorkoolwaterstoffen in leidingwater reageren met fenolen in mout en hop tot chlorofenolen. Deze verbindingen geven een medicijnachtige, plastikachtige of kartonachtige smaak aan bier, zelfs bij concentraties van slechts enkele ppb. Een actief-koolfilter verwijdert chloor volledig. Een osmosefilter verwijdert zowel chloor als alle andere ongewenste stoffen.',
  },
  {
    question: 'Heeft waterhardheid invloed op wijn brouwen?',
    answer:
      'Bij wijnmaken is de invloed van waterhardheid minder direct dan bij bier, omdat de meeste wijn wordt gemaakt van vers fruit met een eigen mineralenbalans. Toch speelt de waterkwaliteit een rol bij het aanvullen van geconcentreerd sap of bij het verdunnen van most. Hard water met veel calcium kan de zuurheid van wijn verlagen, wat bij sommige stijlen ongewenst is.',
  },
  {
    question: 'Kan ik een filterkan gebruiken voor thuisbrouwen?',
    answer:
      'Een filterkan (Brita, BWT) verwijdert chloor en verbetert de smaak, maar geeft geen gegarandeerde mineralensamenstelling. Voor serieus thuisbrouwen is dit onvoldoende controle. Een osmosefilter geeft een bekend startpunt (bijna nul mineralen) van waaruit je precies kunt mineraliseren. Dit is de professionele aanpak bij brouwerijen en wijnmakerijen die met leidingwater werken.',
  },
  {
    question: 'Welke mineralen voeg ik toe aan osmosewater voor bier?',
    answer:
      'Voor bier zijn de belangrijkste mineralen: calciumsulfaat (gips, CaSO4) voor hopbitterheid en helderheid, calciumchloride (CaCl2) voor maltheid en body, magnesiumsulfaat (epsomazout, MgSO4) voor gist en frisse smaak, en natriumchloride (NaCl) voor roundness. Professionele brouwers gebruiken brouwwatersoftware zoals Bru\'n Water of EZ Water Calculator om de exacte dosering te berekenen op basis van het biertype.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
  { name: 'Wijn en bier', url: 'https://waterfilterplatform.nl/waterfilter/wijn-bier' },
];

export default function WaterfilterWijnBierPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter voor wijn en bier brouwen: waterkwaliteit en smaak (2026)',
          description:
            'De waterkwaliteit is bepalend voor de smaak van zelfgebrouwen bier en wijn. Leer welk waterfilter het beste past bij thuisbrouwen en wijnmaken.',
          datePublished: '2026-05-20',
          dateModified: '2026-05-20',
          url: 'https://waterfilterplatform.nl/waterfilter/wijn-bier',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Wijn en bier</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Waterfilter voor wijn en bier brouwen: waterkwaliteit en smaak (2026)
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Water is het belangrijkste ingredient van bier en speelt een grote rol bij wijnmaken.
            Chloor, kalk en ongewenste mineralen in leidingwater kunnen de smaak direct beinvloeden.
            Een goed waterfilter geeft je de controle die je nodig hebt voor consistente resultaten.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        <QuickAnswer answer="Voor thuisbrouwen is een osmosefilter de meest gebruikte keuze: het levert bijna mineraalvrij water met een bekende samenstelling waaraan je zelf de juiste brouwmineralen toevoegt. Een actief-koolfilter verwijdert chloor effectief en is voldoende als je enkel chlorofenoolvorming wilt voorkomen. Filterkannen zijn te onbetrouwbaar voor serieus brouwen." />

        {/* Waarom waterkwaliteit belangrijk is */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom waterkwaliteit bepalend is voor bier en wijn
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bier bestaat voor meer dan 90% uit water. De mineralensamenstelling van het water
            beinvloedt de enzymatische activiteit tijdens het maischen, de gistactiviteit tijdens
            fermentatie en de uiteindelijke smaak van het eindproduct. Historische bierstijlen zijn
            niet voor niets nauw verbonden met de watersamenstelling van hun regio van herkomst.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pilsner uit Plzen (Tsjechie) is gebrouwen met extreem zacht water (TDS &lt;50 mg/L).
            Burton Pale Ale uit Burton-on-Trent (Engeland) dankt zijn uitgesproken hopbitterheid
            aan het sulfaatrijke water van de Midlands. Dublin Stout profiteert van het carbonaatrijke
            water van Dublin. Met een osmosefilter kun je als thuisbrouwer elk van deze waterprofielen
            nauwkeurig nabootsen.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Goed om te weten:</strong> chloor in leidingwater
            is de meest voorkomende oorzaak van chlorofenolen in thuisgebrouwen bier — een
            medicijnachtige bijsmaak. Een actief-koolfilter lost dit volledig op.
          </div>
        </section>

        {/* Filteropties */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filteropties voor thuisbrouwen vergeleken
          </h2>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            1. Actief-koolfilter: minimale ingreep
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een inline actief-koolfilter of een filterkan verwijdert chloor en chloorkoolwaterstoffen
            volledig. Dit is de meest eenvoudige en betaalbare verbetering voor thuisbrouwers die
            werken met relatief zacht, kalkarm water. De mineralensamenstelling van het leidingwater
            blijft ongewijzigd, dus je hebt nog steeds invloed van de lokale waterhardheid.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            2. Omgekeerde osmose: volledige controle
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een osmosefilter levert water met een TDS van minder dan 10 mg/L — bijna volledig
            mineraalvrij. Dit is het startpunt waaraan je zelf calciumsulfaat, calciumchloride,
            magnesiumsulfaat en natriumchloride toevoegt in de exacte hoeveelheden die passen bij
            het biertype. Professionele brouwerijen en serieuze thuisbrouwers kiezen vrijwel
            uitsluitend voor osmosewater.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Verwijdert chloor, chloraminen, nitraat en alle ongewenste ionen</li>
            <li>Geeft volledig reproduceerbare brouwwatersamenstellingen</li>
            <li>Aanschafprijs: €150–400 voor een onderbouw systeem</li>
            <li>Productiecapaciteit: 150–300 liter per dag — voldoende voor meerdere brouwsessies per week</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            3. UV-filter: niet relevant voor brouwen
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een UV-filter doodt bacterien en virussen maar verandert de chemische samenstelling van
            water niet. Voor thuisbrouwen met leidingwater is een UV-filter niet noodzakelijk;
            het kookproces tijdens het brouwen steriliseert het water al effectief.
          </p>
        </section>

        {/* Waterprofiel tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Brouwwaterprofielen: van osmosewater naar stijlspecifiek water
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Startend vanuit osmosewater kun je elk historisch brouwwaterprofiel nabootsen door
            mineralen toe te voegen. Onderstaande tabel geeft de typische waarden voor vier
            klassieke bierwaterprofielen (alle waarden in mg/L):
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Waterprofiel</th>
                  <th className="text-center px-3 py-3 font-semibold">Ca²⁺</th>
                  <th className="text-center px-3 py-3 font-semibold">Mg²⁺</th>
                  <th className="text-center px-3 py-3 font-semibold">Na⁺</th>
                  <th className="text-center px-3 py-3 font-semibold">SO₄²⁻</th>
                  <th className="text-center px-3 py-3 font-semibold">Cl⁻</th>
                  <th className="text-left px-3 py-3 font-semibold">Geschikt voor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { profiel: 'Plzen (zacht)', ca: 7, mg: 3, na: 2, so4: 5, cl: 5, voor: 'Pilsner, Lager' },
                  { profiel: 'Burton (sulfaat)', ca: 295, mg: 45, na: 55, so4: 725, cl: 25, voor: 'Pale Ale, IPA' },
                  { profiel: 'Dublin (carbonaat)', ca: 118, mg: 4, na: 12, so4: 54, cl: 19, voor: 'Stout, Porter' },
                  { profiel: 'Munchen (carbonaat)', ca: 77, mg: 17, na: 4, so4: 16, cl: 8, voor: 'Marzen, Dunkel' },
                ].map((r, i) => (
                  <tr key={r.profiel} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2.5 font-medium text-gray-900">{r.profiel}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700">{r.ca}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700">{r.mg}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700">{r.na}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700">{r.so4}</td>
                    <td className="px-3 py-2.5 text-center text-gray-700">{r.cl}</td>
                    <td className="px-3 py-2.5 text-gray-600 text-xs">{r.voor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Waarden zijn indicatief. Gebruik brouwwatersoftware voor exacte berekening van mineralendoseringen.
          </p>
        </section>

        {/* Wijn */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor wijn brouwen (wijnmaken)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij wijnmaken thuis is de invloed van waterkwaliteit minder direct dan bij bier, maar
            niet te verwaarlozen. Water wordt gebruikt voor het verdunnen van geconcentreerd sap,
            voor het oplossen van additieven (metabisulfiet, pectine-enzym, gist) en voor het
            schoonmaken van apparatuur.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Chloor:</strong> Chloor in leidingwater kan gistactiviteit remmen en
              ongewenste bijsmaken geven. Gebruik gefilterd of afgestaan leidingwater (24 uur
              in een open vat laten staan laat chloor verdampen, maar verwijdert geen chloraminen).
            </li>
            <li>
              <strong>Hardheid:</strong> Hard water kan de zuurheid van wijn verlagen doordat
              calcium met wijnzuur neerslaat. Bij wit-wijn met een gewenst fris zuurtje is
              zacht water of osmosewater beter.
            </li>
            <li>
              <strong>IJzer:</strong> IJzer in water kan bruin-oxidatieve smaken geven en met
              tanninen reageren tot troebeling. Een osmosefilter verwijdert nagenoeg alle ijzer.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Voor serieuze thuiswijnmakers is een{' '}
            <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline hover:no-underline">
              actief-koolfilter
            </Link>{' '}
            of osmosefilter aan te bevelen. Zie ook onze pagina over{' '}
            <Link href="/waterfilter/geur" className="text-[#005F8A] underline hover:no-underline">
              geur en smaak verbeteren met een waterfilter
            </Link>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterfilter/koffiezetter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor koffiezetter</h3>
              <p className="text-sm text-gray-600">Betere koffiesmaak en minder kalkaanslag door gefilterd water in je koffiezetapparaat.</p>
            </Link>
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool filtertechniek</h3>
              <p className="text-sm text-gray-600">Hoe actief kool chloor, geuren en organische stoffen adsorbeert voor betere watersmaak.</p>
            </Link>
            <Link href="/waterfilter/geur" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor geur en smaak</h3>
              <p className="text-sm text-gray-600">Welk waterfilter verwijdert chloor, chloorgeur en andere smaakoorzaken effectief.</p>
            </Link>
            <Link href="/waterhardheid/effect-op-koffie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Effect van waterhardheid op koffie</h3>
              <p className="text-sm text-gray-600">Hoe waterhardheid de smaak van koffie en espresso beinvloedt en wat de ideale hardheid is.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilters voor thuisbrouwen
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
