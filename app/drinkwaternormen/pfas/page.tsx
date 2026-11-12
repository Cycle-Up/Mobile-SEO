import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { HealthDisclaimer } from "@/components/HealthDisclaimer";
import { AuthorBox } from "@/components/AuthorBox";
import { SourcesSection } from "@/components/SourcesSection";

// Normen-invalshoek: "pfas norm drinkwater", "rivm advieswaarde pfas". Geen algemene
// "PFAS in drinkwater"-intentie (dat is /pfas-water), geen regio's (/leidingwater/pfas) en
// geen filterkeuze (/pfas-waterfilter).
const PAGE_URL = "https://waterfilterplatform.nl/drinkwaternormen/pfas";
const PAGE_TITLE = "PFAS-normen voor drinkwater: EU-norm en RIVM-advieswaarde";
const PAGE_DESCRIPTION =
  "De wettelijke EU-norm voor PFAS in drinkwater is 100 ng/L voor de som van 20 PFAS. Het RIVM adviseert 4,4 ng/L PFOA-equivalenten. Zo verhouden ze zich.";
const DATE_PUBLISHED = "2026-05-01";
const DATE_MODIFIED = "2026-11-10";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "article",
    url: PAGE_URL,
  },
};

const QUICK_ANSWER =
  "Voor PFAS in drinkwater gelden twee getallen. De wettelijke norm uit de Europese drinkwaterrichtlijn geldt sinds 12 januari 2026: maximaal 100 nanogram per liter (0,1 microgram per liter) voor de som van 20 PFAS. Het RIVM hanteert daarnaast een advieswaarde van 4,4 nanogram per liter, uitgedrukt in PFOA-equivalenten. Die advieswaarde is geen wet en telt anders: stoffen worden gewogen naar hun giftigheid. Nederlands kraanwater voldoet aan de wettelijke norm; of het ook onder de advieswaarde blijft, verschilt per regio.";

const faqItems = [
  {
    question: "Wat is de wettelijke PFAS-norm voor drinkwater?",
    answer:
      "Sinds 12 januari 2026 geldt in de hele EU een norm van maximaal 100 nanogram per liter (0,1 microgram per liter) voor de som van 20 aangewezen PFAS. De norm komt uit de Europese drinkwaterrichtlijn 2020/2184. Drinkwaterbedrijven moeten deze stoffen meten en aan de norm voldoen.",
  },
  {
    question: "Wat is de RIVM-advieswaarde voor PFAS?",
    answer:
      "Het RIVM adviseert een waarde van 4,4 nanogram per liter, uitgedrukt in PFOA-equivalenten. Elke PFAS-stof telt mee naar hoe giftig hij is in vergelijking met PFOA. De advieswaarde gaat uit van langdurige blootstelling. Het is geen wettelijke norm.",
  },
  {
    question: "Kun je 100 ng/L en 4,4 ng/L direct met elkaar vergelijken?",
    answer:
      "Niet een op een. De wettelijke norm telt de concentraties van 20 PFAS gewoon bij elkaar op. De RIVM-advieswaarde weegt elke stof naar zijn giftigheid en drukt het totaal uit in PFOA-equivalenten. Water kan dus ruim onder de wettelijke norm blijven en toch boven de advieswaarde uitkomen.",
  },
  {
    question: "Voldoet Nederlands kraanwater aan de PFAS-norm?",
    answer:
      "Ja, Nederlands kraanwater voldoet aan de wettelijke norm van 100 nanogram per liter. Of het ook onder de RIVM-advieswaarde blijft, hangt af van de bron van je waterbedrijf en verschilt dus per regio. De meetwaarden voor jouw adres vind je in het jaarlijkse kwaliteitsoverzicht van je drinkwaterbedrijf.",
  },
  {
    question: "Welke stoffen vallen onder de som van 20 PFAS?",
    answer:
      "De lijst uit de drinkwaterrichtlijn bevat onder meer PFOA, PFOS, PFNA en PFHxS. Het zijn 20 afzonderlijk aangewezen stoffen; PFAS die niet op de lijst staan, tellen voor de wettelijke norm niet mee.",
  },
];

export default function PfasNormenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "PFAS-normen", url: PAGE_URL },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          datePublished: DATE_PUBLISHED,
          dateModified: DATE_MODIFIED,
          url: PAGE_URL,
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>PFAS-normen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS-normen voor drinkwater: EU-norm en RIVM-advieswaarde
          </h1>
          <QuickAnswer answer={QUICK_ANSWER} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <AuthorBox datePublished={DATE_PUBLISHED} dateModified={DATE_MODIFIED} />
        <HealthDisclaimer />

        <p className="text-gray-700 leading-relaxed mb-4">
          Deze pagina gaat over de normen zelf: wat de wettelijke grens is, wat het RIVM adviseert en hoe je die
          getallen leest. Wil je eerst weten wat PFAS zijn en hoe ze in kraanwater komen, lees dan{" "}
          <Link href="/pfas-water" className="text-[#005F8A] hover:underline font-medium">PFAS in drinkwater</Link>.
          Hoe het per regio zit, staat op{" "}
          <Link href="/leidingwater/pfas" className="text-[#005F8A] hover:underline font-medium">PFAS in leidingwater per regio</Link>.
          Welk filter helpt, lees je in onze{" "}
          <Link href="/pfas-waterfilter" className="text-[#005F8A] hover:underline font-medium">gids over PFAS-waterfilters</Link>.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De wettelijke norm: 100 ng/L voor de som van 20 PFAS
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Europese drinkwaterrichtlijn 2020/2184 legt voor het eerst een wettelijke grens vast voor PFAS in
            drinkwater. Sinds 12 januari 2026 mag de som van 20 aangewezen PFAS niet hoger zijn dan 100 nanogram
            per liter. Dat is hetzelfde als 0,1 microgram per liter. Op de lijst staan onder meer PFOA, PFOS, PFNA
            en PFHxS.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De richtlijn kiest bewust voor een optelsom. Ook als elke stof afzonderlijk laag is, kan de combinatie
            van meerdere stoffen samen een effect hebben. Drinkwaterbedrijven moeten de 20 stoffen meten en aan de
            norm voldoen. Meer over de richtlijn zelf lees je op de pagina over de{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn 2020/2184
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            De RIVM-advieswaarde: 4,4 ng/L PFOA-equivalenten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Naast de wettelijke norm hanteert het RIVM een advieswaarde van 4,4 nanogram per liter, uitgedrukt in
            PFOA-equivalenten. Bij die rekenwijze telt elke PFAS-stof mee naar hoe giftig hij is in vergelijking met
            PFOA. Een giftigere stof weegt dus zwaarder dan een minder giftige.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De advieswaarde gaat uit van langdurige blootstelling en is geen wettelijke norm. Drinkwaterbedrijven zijn niet verplicht eronder te blijven.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Waarom de twee getallen niet een op een vergelijkbaar zijn
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het verschil tussen 100 en 4,4 lijkt groot, maar de getallen meten niet hetzelfde. De wettelijke norm
            telt concentraties van 20 stoffen gewoon op. De advieswaarde weegt de stoffen eerst naar giftigheid. Water
            kan daardoor ruim onder de wettelijke norm blijven en toch boven de advieswaarde uitkomen. Kijk je naar
            meetwaarden van je waterbedrijf, controleer dan altijd in welke eenheid ze staan: nanogram per liter als
            som, of PFOA-equivalenten.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Overzicht: normen en advieswaarden naast elkaar
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Grens</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Waarde</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Wat telt mee</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">EU-drinkwaterrichtlijn</td>
                  <td className="border border-gray-300 px-3 py-2">100 ng/L (0,1 microgram per liter)</td>
                  <td className="border border-gray-300 px-3 py-2">Som van 20 aangewezen PFAS</td>
                  <td className="border border-gray-300 px-3 py-2">Wettelijk, sinds 12 januari 2026</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">RIVM-advieswaarde</td>
                  <td className="border border-gray-300 px-3 py-2">4,4 ng/L PFOA-equivalenten</td>
                  <td className="border border-gray-300 px-3 py-2">PFAS gewogen naar giftigheid</td>
                  <td className="border border-gray-300 px-3 py-2">Advies, geen wet</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wat betekenen de normen voor jou?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Je kraanwater voldoet aan de wettelijke PFAS-norm. Wil je weten hoe het zich verhoudt tot de
            RIVM-advieswaarde, kijk dan in het jaarlijkse kwaliteitsoverzicht van je drinkwaterbedrijf of op onze
            pagina over{" "}
            <Link href="/leidingwater/pfas" className="text-[#005F8A] hover:underline font-medium">PFAS-hotspots per regio</Link>.
            Welke stoffen er precies onder PFAS vallen, lees je bij{" "}
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] hover:underline font-medium">
              PFOA, PFOS en GenX
            </Link>
            . Wil je zelf extra PFAS uit je water halen, dan zetten we de filteropties op een rij in de{" "}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] hover:underline font-medium">gids over PFAS-waterfilters</Link>.
            Twijfel je over je gezondheid, bespreek dat dan met je huisarts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over andere drinkwaternormen in Nederland lees je op de{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              overzichtspagina drinkwaternormen
            </Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over PFAS-normen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater</h3>
              <p className="text-sm text-gray-600">Wat PFAS zijn, hoe ze in kraanwater komen en wat de feiten zijn.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFOA, PFOS en GenX</h3>
              <p className="text-sm text-gray-600">Welke PFAS-stoffen er zijn en waarin ze verschillen.</p>
            </Link>
            <Link href="/leidingwater/pfas" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in leidingwater per regio</h3>
              <p className="text-sm text-gray-600">Waar de waarden het hoogst zijn en hoe je jouw adres opzoekt.</p>
            </Link>
            <Link href="/pfas-waterfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS-waterfilter gids</h3>
              <p className="text-sm text-gray-600">Welke filters PFAS verminderen en wat er gemeten is.</p>
            </Link>
          </div>
        </section>

        <SourcesSection
          sources={[
            "Europese Drinkwaterrichtlijn 2020/2184/EU, PFAS-parameters van kracht per 12 januari 2026",
            "RIVM, PFAS in drinkwater en de advieswaarde van 4,4 ng/L PFOA-equivalenten",
          ]}
        />

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
