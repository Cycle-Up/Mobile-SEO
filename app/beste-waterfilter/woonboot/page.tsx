import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Beste waterfilter voor een woonboot: unieke uitdagingen en oplossingen",
  description:
    "Waterfilter voor woonboot: bron (haven, wal, tank, eigen bron) bepaalt de keuze. Osmose, UV-sterilisatie en sedimentfilter gecombineerd.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/beste-waterfilter/woonboot",
  },
  openGraph: {
    title: "Beste waterfilter voor een woonboot: unieke uitdagingen en oplossingen",
    description:
      "Waterfilter voor woonboot: bron (haven, wal, tank, eigen bron) bepaalt de keuze. Osmose, UV-sterilisatie en sedimentfilter gecombineerd.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Kan ik kraanwater van de haven gewoon drinken?",
    answer:
      "In principe voldoet walwater in Nederlandse jachthavens aan de drinkwaterstandaard op het moment van levering. Echter: de slangen en koppelingen tussen de walvoorziening en uw boot zijn een risicofactor. Oude rubberen slangen logen weekmakers en microbiologische verontreiniging uit, zeker bij warm zomerweer. Een sedimentprefilter gevolgd door een osmosefilter met koolstofnabehandeling geeft u de zekerheid dat het water na passeren van uw eigen leidingen veilig is om te drinken.",
  },
  {
    question: "Hoe filter ik regenwater op een boot?",
    answer:
      "Regenwater op een boot bevat snel organische deeltjes, vogelontlasting, roetdeeltjes en bacteriën. Voor gebruik als drinkwater is een meertrapssysteem verplicht: eerst een groffilter (sedimentfilter 50-100 micron) om zwevende deeltjes te verwijderen, dan UV-sterilisatie om bacteriën en virussen te doden, en tot slot een osmosefilter of keramisch filter voor resterende chemische verontreinigingen. Gebruik altijd een separaat tankcompartiment voor regenwater en label dit duidelijk.",
  },
  {
    question: "Is een 12V osmosefilter net zo goed als een 230V model?",
    answer:
      "De filterprestaties van een 12V osmosefilter zijn vergelijkbaar met een 230V model: het RO-membraan verwijdert dezelfde verontreinigingen ongeacht de voedingsspanning. Het verschil zit in productiecapaciteit en energieverbruik. Een 12V model produceert doorgaans 50-150 liter per dag, terwijl een 230V onderbouw osmose 150-400 liter per dag haalt. Voor een woonboot met twee personen (8-12 liter drinkwater per dag) is een 12V model in de meeste situaties voldoende.",
  },
  {
    question: "Hoe bescherm ik mijn filter in de winter?",
    answer:
      "Bij vorst moeten alle waterlijnen en filtercomponenten worden beschermd of gedemonteerd. Laat het systeem volledig leeg lopen: open alle kranen en blow-off-punten. Verwijder de filterpatronen en bewaar ze vorstvrij. Het RO-membraan kan in een afgesloten zak met gedemineraliseerd water worden bewaard in een vorstvrije ruimte. Slangverbindingen en het opslagvat (indien aanwezig) ook leeg laten lopen. Een membraan dat bevriest, scheurt vrijwel altijd en moet worden vervangen.",
  },
  {
    question: "Wat kost drinkwater op een woonboot per maand?",
    answer:
      "Met een osmosefilter op havenaansluiting bedragen de jaarlijkse filterkosten 60-120 euro (filterpatronen), wat neerkomt op 5-10 euro per maand. Zonder filter betaalt u 0,001-0,003 euro per liter kraanwater, of 1-3 euro per maand voor drinkwater — maar dan filtert u niet. Kiest u voor flessenwater (2 personen, 2 liter per dag), dan kost dat al snel 30-60 euro per maand. Een osmosefilter betaalt zich terug in 6-12 maanden ten opzichte van flessenwater.",
  },
];

export default function WoonbootPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          {
            name: "Beste waterfilter per situatie",
            url: "https://waterfilterplatform.nl/beste-waterfilter",
          },
          {
            name: "Woonboot",
            url: "https://waterfilterplatform.nl/beste-waterfilter/woonboot",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Beste waterfilter voor een woonboot: unieke uitdagingen en oplossingen",
          description:
            "Waterfilter voor woonboot: bron (haven, wal, tank, eigen bron) bepaalt de keuze. Osmose, UV-sterilisatie en sedimentfilter gecombineerd.",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/beste-waterfilter/woonboot",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/beste-waterfilter" className="hover:underline">
              Beste waterfilter per situatie
            </Link>
            <span className="mx-2">/</span>
            <span>Woonboot</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterfilter voor een woonboot
          </h1>
          <QuickAnswer answer="Op een woonboot met havenaansluiting is een onderbouw osmosefilter met pre-sedimentfilter de beste keuze (300-700 euro). Bij eigen watertank of oeverwater is aanvullend UV-sterilisatie essentieel voor microbiologische veiligheid. Filterbehoefte hangt sterk af van de waterbron." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Waterbronnen op een woonboot
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De keuze voor een waterfilter op een woonboot begint met de vraag: waar komt uw water
            vandaan? Dit is bepalender dan bij een gewone woning, omdat woonbootbewoners met
            vier fundamenteel verschillende bronnen te maken kunnen hebben, elk met hun eigen
            risicoprofiel.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Walverbinding of vaste havenaansluiting</strong> is de meest voorkomende
            situatie voor woonboten op een vaste ligplaats. Het water wordt geleverd via een
            waterleiding van het drinkwaterbedrijf, vergelijkbaar met een gewone woning. De kwaliteit
            is gereguleerd, maar de aansluiting verloopt via koppelingen en slangen die op de boot
            zelf van wisselende kwaliteit kunnen zijn. Waterdruk kan sterk variëren: in drukke
            jachthavens met meerdere aansluitingen schommelt de druk tussen 0,5 en 5 bar, terwijl
            de meeste osmosefilters minimaal 2 bar nodig hebben voor goede werking.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Eigen watertank</strong> wordt gevuld via walwater of regenwater en opgeslagen
            aan boord. Tankwater is kwetsbaarder voor bacteriële groei, zeker als de tank niet
            regelmatig goed wordt schoongemaakt en het water lang stilstaat. Legionella en andere
            bacteriën kunnen zich bij temperaturen boven 20°C snel vermenigvuldigen in stilstaand
            water.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Oppervlaktewater</strong> (kanaal, rivier, meer) is nooit geschikt als directe
            drinkwaterbron zonder uitgebreide behandeling. Oppervlaktewater bevat zwevende deeltjes,
            organische stoffen, bacteriën, virussen, algen en in stedelijk gebied ook geneesmiddelen
            en meststoffen. Een osmosefilter in combinatie met UV-sterilisatie is het absolute minimum;
            voor zekerheid is een keramisch filter als aanvulling aan te bevelen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Vaste oeveraansluiting</strong> via een eigen meter, zoals bij woonboterven en
            woonbootlocaties met infrastructuur, is vergelijkbaar met de reguliere huishoudelijke
            wateraansluiting. Hier speelt met name de kwaliteit van de interne leidingen en
            aansluitingen een rol.
          </p>

          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Specifieke uitdagingen op een woonboot
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een woonboot stelt andere eisen aan een waterfiltersysteem dan een vaste woning. De
            drie belangrijkste uitdagingen zijn drukschommelingen, stroombeperking en de
            buitenomgeving.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Waterdrukschommelingen</strong> zijn de grootste praktische uitdaging in
            jachthavens. Bij hoge bezetting — zomerse weekends, regatta&apos;s — kan de druk
            zakken tot onder 1 bar. De meeste standaard onderbouw osmosefilters hebben minimaal
            2 bar nodig. De oplossing is een waterdrukbooster: een kleine elektrische pomp
            (12V of 230V) die de druk ophoogt tot het werkingsbereik van het filter. Een booster
            kost 60-150 euro en is voor woonboters op jachthavens vrijwel altijd noodzakelijk.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Stroombeperking</strong> is relevant voor woonboten die niet permanent zijn
            aangesloten op het 230V netwerk, zoals boten op ankerplaats of met beperkte landaansluiting.
            In die situaties zijn 12V-osmosefilters de aangewezen keuze. Ze werken op de scheepsaccu
            en verbruiken 20-40 watt, vergelijkbaar met een led-lamp. 12V osmosesystemen zijn
            specifiek ontworpen voor de maritieme omgeving: corrosiebestendig behuizing, lage
            productiecapaciteit (50-150 liter per dag) maar betrouwbare filterprestaties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Slangkwaliteit en koppelingen</strong> op de boot zelf vormen een onderbelicht
            risico. Goedkope tuinslangen of oude rubber waterslangen logen chemische stoffen uit
            (ftalaten, weekmakers) en bieden ruimte voor bacteriegroei. Gebruik uitsluitend
            levensmiddelengeschikte slangen (food-grade, NSF/ANSI 61 gecertificeerd) voor alle
            wateraansluitingen na het filter.
          </p>

          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Filterconfiguratie per waterbron
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De juiste filterconfiguratie hangt direct samen met uw waterbron. Hieronder de
            aanbevolen aanpak per situatie:
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Vaste havenaansluiting of walverbinding:</strong> Een sedimentprefilter
            (5-10 micron) gevolgd door een koolstofblokfilter en een RO-membraan (osmosefilter)
            is de standaard en meest effectieve configuratie. De sedimentprefilter verlengt de
            levensduur van het RO-membraan aanzienlijk door zwevende deeltjes en roest te
            verwijderen die vrijkomen uit slangverbindingen. Prijs: 300-700 euro all-in.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Eigen watertank (gevuld met walwater of regenwater):</strong> Voeg UV-sterilisatie
            toe als tussenstap vóór de osmosefiltratie. UV-licht doodt bacteriën en virussen
            die zich in stilstaand tankwater kunnen hebben vermenigvuldigd. Volgorde: sedimentfilter
            → UV-sterilisatie → koolstofblok → RO-membraan. Een UV-unit kost 80-200 euro extra.
            Meer informatie over{" "}
            <Link href="/waterfilter/uv-sterilisatie" className="text-[#005F8A] hover:underline font-medium">
              UV-sterilisatie voor drinkwater
            </Link>
            .
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Oppervlaktewater (kanaal, rivier):</strong> Dit is de meest veeleisende bron
            en vereist de zwaarste filtratie. Oppervlaktewater mag nooit zonder uitgebreide
            behandeling als drinkwater worden gebruikt. Minimale configuratie: groffilter
            (100 micron) → sedimentfilter (10 micron) → UV-sterilisatie → RO-membraan → koolstofnafilter.
            Overweeg daarnaast een keramisch filter als extra barrière. Zie ook{" "}
            <Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] hover:underline font-medium">
              ultrafiltratie als aanvulling
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            12V versus 230V osmosefilters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor woonbootbewoners met een stabiele 230V-aansluiting is een standaard onderbouw
            osmosefilter de meest praktische keuze: groter aanbod, hogere productiecapaciteit
            en eenvoudigere montage. Modellen met een ingebouwde drukboostpomp zijn geschikt
            voor locaties met lagere waterdruk (vanaf 1 bar).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor boten zonder permanente 230V-aansluiting zijn 12V-systemen de aangewezen optie.
            Merken als Aquatec, Isobar en diverse scheepsuitrustingsleveranciers bieden 12V
            osmosesystemen aan die specifiek zijn ontworpen voor gebruik aan boord. Let bij aanschaf
            op: corrosiebestendig behuizing (roestvrij staal of marinegrade kunststof),
            voldoende productiecapaciteit voor uw huishouden (minimaal 75 liter per dag voor
            twee personen), en beschikbaarheid van vervangingspatronen.
          </p>

          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Vergelijking filterconfiguraties per waterbron
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left">Waterbron</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Aanbevolen configuratie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">UV nodig?</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Geschatte kosten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Vaste havenaansluiting</td>
                  <td className="border border-gray-300 px-3 py-2">Sedimentfilter + osmose (+ booster indien druk &lt;2 bar)</td>
                  <td className="border border-gray-300 px-3 py-2 text-yellow-600">Optioneel</td>
                  <td className="border border-gray-300 px-3 py-2">300–700 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Eigen watertank (walwater)</td>
                  <td className="border border-gray-300 px-3 py-2">Sedimentfilter + UV + osmose</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2">450–900 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Eigen watertank (regenwater)</td>
                  <td className="border border-gray-300 px-3 py-2">Groffilter + sedimentfilter + UV + osmose</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Ja</td>
                  <td className="border border-gray-300 px-3 py-2">500–950 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Oppervlaktewater / kanaalwater</td>
                  <td className="border border-gray-300 px-3 py-2">Groffilter + sediment + UV + osmose + keramisch</td>
                  <td className="border border-gray-300 px-3 py-2 text-red-600">Verplicht</td>
                  <td className="border border-gray-300 px-3 py-2">700–1.400 euro</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold text-[#003F5C] mt-8 mb-4">
            Onderhoud en winterstop
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onderhoud op een woonboot vraagt meer aandacht dan in een vaste woning, omdat
            de omgeving vochtiger is en temperatuurwisselingen extremer kunnen zijn.
            Filterpatronen moeten minstens jaarlijks worden vervangen, maar bij gebruik van
            havenaansluiting of tankwater met hogere vervuiling eerder — controleer de
            drukval over het systeem als indicator.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het RO-membraan heeft een levensduur van 2-5 jaar, afhankelijk van de
            waterkwaliteit. Bij gebruik van oppervlaktewater of regenwater is jaarlijkse
            vervanging van sedimentfilters en koolstofblok noodzakelijk; het membraan kan
            bij goede voorfase 3 jaar meegaan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Winterstop:</strong> Laat voor de winterstop het gehele systeem volledig
            leeg lopen. Open de kraan totdat er geen water meer uitkomt. Verwijder
            filterpatronen en bewaar ze vorstvrij (in een afgesloten zak met wat water).
            Het RO-membraan wordt in gedemineraliseerd water of in zijn originele verpakking
            bewaard op een vorstvrije locatie. Slang- en kogelkranen openzetten zodat
            restwater kan uitzetten bij vorst zonder schade te veroorzaken. Na de winter:
            spoel het gehele systeem 15-20 minuten door voordat u het eerste water gebruikt.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilter op een woonboot
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{item.answer}</p>
            </details>
          ))}
        </section>

        <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante pagina&apos;s</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/beste-waterfilter" className="text-[#005F8A] hover:underline">
                Beste waterfilter per situatie: alle woningtypen
              </Link>
            </li>
            <li>
              <Link href="/filtertechnieken/ultrafiltratie" className="text-[#005F8A] hover:underline">
                Ultrafiltratie: hoe werkt het en wanneer inzetten?
              </Link>
            </li>
            <li>
              <Link href="/waterfilter/uv-sterilisatie" className="text-[#005F8A] hover:underline">
                UV-sterilisatie voor drinkwater: werking en toepassing
              </Link>
            </li>
            <li>
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline">
                Omgekeerde osmose: complete uitleg en vergelijking
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp" className="text-[#005F8A] hover:underline">
                Keuzehulp: welk waterfilter past bij uw situatie?
              </Link>
            </li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie voor woonboot</h3>
              <p className="text-sm text-gray-600">Hoe UV-licht bacteriën in havenwater inactiveert wanneer drinkwater via watertank wordt geleverd.</p>
            </Link>
            <Link href="/keuzehulp/installatie-type" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Installatie woonboot drinkwater</h3>
              <p className="text-sm text-gray-600">Welke filterinstallaties geschikt zijn voor de beperkte ruimte en het tank-systeem van een woonboot.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
