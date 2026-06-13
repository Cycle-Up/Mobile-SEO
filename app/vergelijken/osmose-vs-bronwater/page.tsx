import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Osmosewater vs bronwater: mineralen, zuiverheid en kosten",
  description:
    "Osmosewater of bronwater: wat is schoner, welke heeft meer mineralen en wat kost het per liter? Eerlijke vergelijking.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/osmose-vs-bronwater" },
  openGraph: {
    title: "Osmosewater vs bronwater: mineralen, zuiverheid en kosten",
    description:
      "Osmosewater of bronwater: wat is schoner, welke heeft meer mineralen en wat kost het per liter? Eerlijke vergelijking.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is osmosewater gezond om te drinken?",
    answer:
      "Ja, osmosewater is veilig en gezond als drinkwater. Het vrijwel mineraalvrije karakter (TDS 1-20 mg/L) is geen gezondheidsrisico: we halen de overgrote meerderheid van onze mineralen uit voeding, niet uit drinkwater. De WHO stelt geen minimumgrens voor mineralen in drinkwater voor gezonde volwassenen. Wie toch mineraalrijker water wenst, kan een remineralisatiefilter toevoegen.",
  },
  {
    question: "Heeft bronwater meer mineralen dan leidingwater?",
    answer:
      "Niet per definitie. Bronwater kan meer of minder mineralen bevatten dan leidingwater, afhankelijk van de geologische herkomst. Spa Reine (België) heeft een TDS van ca. 30 mg/L, vergelijkbaar met Amsterdams kraanwater. Evian (Alpen) heeft ca. 350 mg/L, vergelijkbaar met hard Zeeuws kraanwater. Limburgs kraanwater kan een TDS van 400-600 mg/L hebben, meer dan veel bronwatermerken.",
  },
  {
    question: "Kan ik osmosewater drinken als ik zout eet?",
    answer:
      "Ja. Osmosewater heeft een verwaarloosbaar natriumgehalte (< 1 mg/L), wat bij een normaal dieet geen enkel probleem is. Bij een zoutrijk dieet geldt dat de natriuminname via voeding zo dominant is (2-5 gram/dag) dat het natriumgehalte van drinkwater — zelfs bij gewoon kraanwater met 20-40 mg/L — relatief verwaarloosbaar is. Osmosewater heeft geen negatieve interactie met natriumgebruik.",
  },
  {
    question: "Wat is remineralisatie?",
    answer:
      "Remineralisatie is het terugvoegen van mineralen aan osmosewater na de RO-membraanfase. Dit kan via een remineralisatiepatroon (calciumcarbonaat- of magnesiumkorrels), een mineraalfilterpatroon of een elektronische doseerunit. Het doel is het verhogen van de pH (osmosewater is licht zuur, pH 5-6) en het toevoegen van calcium en magnesium voor smaak en eventuele gezondheidsvoordelen. Kwaliteitsvolle remineralisatiefilters voegen 30-80 mg/L calcium en 10-20 mg/L magnesium toe.",
  },
  {
    question: "Is bronwater vrij van PFAS?",
    answer:
      "Niet gegarandeerd. Bronwater kan PFAS bevatten afhankelijk van de locatie en diepte van de bron. Meerdere Europese bronwatermerken zijn in recente analyses aangetoond met PFAS-concentraties boven de Europese drinkwaternorm van 0,10 µg/L totaal PFAS (sum 20). Een osmosefilter reduceert PFAS met 90-99%. Controleer de analysecertificaten van uw bronwatermerk voor specifieke PFAS-waarden.",
  },
];

export default function OsmoseVsBronwaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Osmosewater vs bronwater", url: "https://waterfilterplatform.nl/vergelijken/osmose-vs-bronwater" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Osmosewater vs bronwater: mineralen, zuiverheid en kosten",
          description: "Osmosewater of bronwater: wat is schoner, welke heeft meer mineralen en wat kost het per liter? Eerlijke vergelijking.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/vergelijken/osmose-vs-bronwater",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:underline">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Osmosewater vs bronwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosewater vs bronwater: mineralen, zuiverheid en kosten
          </h1>
          <QuickAnswer answer="Osmosewater is vrijwel mineraalvrij (TDS 1-20 mg/L); bronwater bevat 50-500 mg/L mineralen. Beide zijn veilig. Osmosewater kost 0,02-0,05 euro/liter; bronwater in flessen 0,20-1,50 euro/liter. Voor dagelijks gebruik is osmosewater + remineralisatie een goede en goedkopere keuze." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="algemeen" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Wat is bronwater?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bronwater is grondwater dat op een specifieke locatie aan de oppervlakte treedt of wordt
            opgepompt vanuit een beschermde ondergrondse bron. Volgens de Europese Richtlijn 2009/54/EG
            moet bronwater van nature zuiver zijn — dat wil zeggen dat de kwaliteit aan de bron al
            voldoet aan de microbiologische eisen, zonder dat chemische behandeling noodzakelijk is.
            Beperkte fysische behandeling is toegestaan: filtratie van onopgeloste deeltjes, ontijzering
            (verwijdering van ijzer en mangaan) en UV-desinfectie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De mineralensamenstelling van bronwater is sterk afhankelijk van de geologische laag waardoor
            het water heeft gestroomd. Water dat door kalksteen of dolomiet komt (zoals in de Ardennen of
            de Alpen) is rijk aan calcium en magnesium. Water uit granieten of zandsteen-gesteente
            (zoals veel Scandinavische bronnen) heeft een veel lager mineraalgehalte. Dit resulteert in
            een TDS-range van 30 mg/L (Spa Reine) tot meer dan 800 mg/L (San Pellegrino) voor
            commercieel gebotteld bronwater.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Wat is osmosewater?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Osmosewater is water dat is gezuiverd door omgekeerde osmose (RO): een proces waarbij water
            onder druk van 3-8 bar door een semipermeabel membraan met poriën van 0,0001 micron wordt
            gedwongen. Op dat schaalniveau worden vrijwel alle opgeloste deeltjes — ionen, moleculen en
            microdeeltjes — tegengehouden door het membraan en afgevoerd als afvalwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het resultaat is water met een TDS (Total Dissolved Solids) van doorgaans 1-20 mg/L,
            afhankelijk van de kwaliteit van het membraan en de inkomende waterkwaliteit. Een goed
            functionerend RO-membraan heeft een rejectie van 95-99% voor opgeloste zouten en ionen.
            Het water is licht zuur (pH 5,5-6,5) vanwege de afwezigheid van bufferende mineralen als
            calciumcarbonaat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een modern osmosesysteem voor thuis bestaat uit drie tot vijf filterstadia: een sedimentfilter
            (verwijdert zwevende deeltjes), een actief-koolfilter (verwijdert chloor, organische stoffen
            en geur), het RO-membraan zelf, een opslagtank en een post-koolstoffilter voor het
            polijsten van de smaak. Optioneel wordt een remineralisatiefilter of UV-lamp toegevoegd.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Vergelijkingstabel</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Osmosewater (RO thuis)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Bronwater (fles)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["TDS (opgeloste stoffen)", "1-20 mg/L", "30-800 mg/L (merkafhankelijk)"],
                  ["Calcium (Ca)", "< 2 mg/L", "10-160 mg/L"],
                  ["Magnesium (Mg)", "< 1 mg/L", "2-50 mg/L"],
                  ["Natrium (Na)", "< 1 mg/L", "1-50 mg/L"],
                  ["pH", "5,5-6,5 (licht zuur)", "6,5-8,5 (neutraal tot basisch)"],
                  ["Microplastics-risico", "Zeer laag (membraanfiltratie)", "Laag tot hoog (plastic fles)"],
                  ["PFAS-verwijdering", "90-99% reductie", "Niet behandeld (bronafhankelijk)"],
                  ["Kosten per liter", "0,02-0,05 euro", "0,20-1,50 euro"],
                  ["CO2-voetafdruk", "Laag (leidingnet + elektriciteit)", "Hoog (productie fles + transport)"],
                  ["Beschikbaarheid thuis", "Continu, via aparte kraan", "Afhankelijk van inkopen en opslag"],
                ].map(([eigenschap, osmose, bron], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eigenschap}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{osmose}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{bron}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Mineralen: mist u iets bij osmosewater?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De vraag of osmosewater ongezond is door het ontbreken van mineralen is een veelgehoorde zorg.
            Het korte antwoord is: voor gezonde volwassenen met een gevarieerd dieet niet. De Wereldgezondheidsorganisatie
            (WHO) bevestigt in haar richtlijnen dat de bijdrage van drinkwater aan de totale mineraalinname
            voor de meeste mensen minimaal is. Calcium halen we voornamelijk uit zuivel, groenten en noten;
            magnesium uit volkoren granen, peulvruchten en noten.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn echter twee specifieke aandachtspunten. Ten eerste: de pH van osmosewater (5,5-6,5) kan
            op lange termijn corrosief zijn voor koperen leidingen en het spoelt kalk uit aansluitingen.
            Dit is een installatie-aandachtspunt, geen gezondheidsissue voor de gebruiker. Ten tweede: voor
            specifieke medische situaties — dialysepatiënten, kinderen met hoge vochtbehoefte, of mensen
            met bepaalde nierziekten — kan het mineralengehalte van drinkwater wel relevant zijn. Raadpleeg
            in die gevallen een arts.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Remineralisatie als oplossing</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wie de voordelen van osmosefiltratie (verwijdering van PFAS, lood, nitraat, microplastics)
            wil combineren met de mineralenrijkdom van bronwater, kiest voor een osmosesysteem met
            remineralisatiefilter. Dit is een vijfde filterstadium dat na het membraan wordt geplaatst.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meest gebruikte remineralisatiemethode maakt gebruik van een calciumcarbonaat- of
            magnesiumkorrelfilter (ook wel &ldquo;alkaline filter&rdquo; of &ldquo;mineraalfilter&rdquo;
            genoemd). Osmosewater stroomt door de korrelmassa en lost een gecontroleerde hoeveelheid
            calcium en magnesium op. Het resultaat: water met een TDS van 80-150 mg/L, een pH van
            7,0-7,5 en een mineraalsamenstelling vergelijkbaar met licht bronwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een kwalitatief remineralisatiefilter (NSF-gecertificeerd) voegt:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Calcium: 30-80 mg/L (bijdrage aan aanbevolen dagelijkse inname: 3-8%)</li>
            <li>Magnesium: 10-25 mg/L (bijdrage: 2-6%)</li>
            <li>Kalium: 1-5 mg/L</li>
            <li>pH-correctie: van 5,5 naar 7,0-7,5</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Wanneer welke te kiezen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Kies voor osmosewater wanneer</h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Uw water PFAS, lood of nitraat bevat</li>
                <li>U dagelijks grote volumes filtert (gezin)</li>
                <li>U milieubewust bent (geen plastic flessen)</li>
                <li>U kosten per liter wilt minimaliseren</li>
                <li>U babyvoeding bereidt met leidingwater</li>
              </ul>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Kies voor bronwater wanneer</h3>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>U onderweg bent of geen vaste verblijfplaats heeft</li>
                <li>U tijdelijk hoogkwalitatief water nodig heeft</li>
                <li>U specifiek een gecertificeerde mineraalsamenstelling wenst</li>
                <li>U geen installatieruimte heeft voor een ondersink-systeem</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Kosten over de levensduur vergeleken</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor een gemiddeld gezin van vier personen dat 3 liter drinkwater per dag per persoon
            (samen 12 liter/dag, 4.380 liter/jaar) consumeert, zien de kosten er als volgt uit:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Kostenpost</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Osmosewater (thuis)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Bronwater (flessen)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aanschaf + installatie", "400-700 euro (eenmalig)", "Geen"],
                  ["Jaarlijkse filterkosten", "80-150 euro/jaar", "Geen (los per fles)"],
                  ["Waterkosten per jaar", "ca. 7 euro (leidingwater)", "875-6.570 euro/jaar (0,20-1,50 euro/L)"],
                  ["Totaal jaar 1", "490-860 euro", "875-6.570 euro"],
                  ["Totaal jaar 5 (TCO)", "720-1.200 euro", "4.375-32.850 euro"],
                ].map(([post, osmose, bron], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{post}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{osmose}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{bron}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4 mb-4">
            Zelfs bij een investering van 700 euro voor een kwalitatief osmosesysteem en 150 euro per jaar
            aan filters is het systeem na een jaar al aanzienlijk goedkoper dan bronwater in flessen —
            en produceert het geen plastic afval.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-10 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-semibold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Vergelijken", href: "/vergelijken" },
              { label: "Remineralisatie osmosewater", href: "/omgekeerde-osmose/remineralisatie" },
              { label: "Mineralen in osmosewater", href: "/osmose-water/mineralen" },
              { label: "Omgekeerde osmose", href: "/omgekeerde-osmose" },
              { label: "Stoffen in drinkwater", href: "/stoffen-in-drinkwater" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#005F8A] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#005F8A] hover:text-white transition-colors"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose techniek</h3>
              <p className="text-sm text-gray-600">Hoe RO-membranen mineralen en verontreinigingen uit leidingwater filteren tot bijna-zuiver water.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Welke mineralen in bronwater en kraanwater zitten en wat hun gezondheidseffect is.</p>
            </Link>
          </div>
        </section>

        <div className="mt-10">
          <AffiliateCTA
            destination="zuiverWaterKranen"
            campaign="omgekeerde-osmose"
            content="vergelijken-osmose-vs-bronwater-cta"
            label="Bekijk de zuiver-water-kranen"
            title="Klaar voor zuiver water uit de kraan?"
            sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
          />

          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
