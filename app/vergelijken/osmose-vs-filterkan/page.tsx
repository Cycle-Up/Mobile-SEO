import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Osmose vs filterkan: prestaties, kosten en wanneer welke keuze?",
  description:
    "Osmosefilter vs Brita-kan: filterprestaties (PFAS, lood, nitraat), kosten per liter, capaciteit en onderhoud eerlijk vergeleken.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/osmose-vs-filterkan" },
  openGraph: {
    title: "Osmose vs filterkan: prestaties, kosten en wanneer welke keuze?",
    description:
      "Osmosefilter vs Brita-kan: filterprestaties (PFAS, lood, nitraat), kosten per liter, capaciteit en onderhoud eerlijk vergeleken.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is een Brita-kan goed genoeg voor NL kraanwater?",
    answer:
      "Voor de meeste Nederlanders met veilig kraanwater en geen bekende verontreinigingen is een Brita-kan voldoende voor smaakverbetering. De kan verwijdert chloor, geur en een deel van de kalk. Heeft u aanwijzingen voor PFAS, lood of nitraat boven de norm, dan is een osmosefilter de minimale keuze.",
  },
  {
    question: "Verwijdert een Brita PFAS?",
    answer:
      "Nee. Standaard actief-kool filterpatronen in Brita-kannen zijn niet gecertificeerd voor PFAS-verwijdering. Sommige gespecialiseerde filterpatronen (NSF 401-gecertificeerd) kunnen een deel van bepaalde PFAS-verbindingen adsorberen, maar een osmosefilter (NSF/ANSI 58) biedt met 90-99% reductie de meest betrouwbare bescherming.",
  },
  {
    question: "Hoeveel water filtert een filterkan per dag?",
    answer:
      "Een standaard filterkan filtert 50-150 liter per dag afhankelijk van het model, maar de praktische doorloopsnelheid is traag: ca. 1 liter per 5-10 minuten. Een osmosefilter met opslagtank levert 6-15 liter per uur en is praktischer voor een gezin met hoog waterverbruik.",
  },
  {
    question: "Wat is de levensduur van een osmose-membraan?",
    answer:
      "Een kwalitatief osmose-membraan gaat 2-3 jaar mee bij normaal huishoudelijk gebruik (150-300 liter/dag). Pre-filters (sediment en koolstof) worden elke 6-12 maanden vervangen; het post-koolstoffilter jaarlijks. Een TDS-meter geeft een indicatie van membraanconditie: bij stijgende TDS-rejectiewaarden is vervanging gewenst.",
  },
  {
    question: "Kan ik een osmosefilter zelf installeren?",
    answer:
      "Ja, de meeste under-sink osmosefilters zijn door een handige doe-het-zelver in 1-2 uur te installeren. De aansluiting gaat op de koudwaterkraan (1/4-inch snelkoppeling) en de afvoer op het afvoerbuisje. Bij een aparte osmosekraan is een extra gat in het aanrecht nodig. Bij twijfel over de cv-installatie of leidingdruk is een installateur aan te raden.",
  },
];

export default function OsmoseVsFilterkanPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Osmose vs filterkan", url: "https://waterfilterplatform.nl/vergelijken/osmose-vs-filterkan" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:underline">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Osmose vs filterkan</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmose vs filterkan: prestaties, kosten en wanneer welke keuze?
          </h1>
          <QuickAnswer answer="Een osmosefilter (RO) verwijdert PFAS, lood, nitraat en microplastics; een filterkan verwijdert alleen chloor en geur. Osmose kost 200-350 euro/jaar inclusief installatie-afschrijving; een filterkan kost 25-60 euro/jaar. Voor schoon NL kraanwater is een filterkan vaak voldoende; bij PFAS, lood of nitraat is osmose de minimale keuze." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Hoe werkt elk systeem?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een omgekeerde-osmosefilter (RO) dwingt water onder druk door een semipermeabel membraan met
            porieen van slechts 0,0001 micron. Op dat schaalniveau worden opgeloste ionen, moleculen en
            microdeeltjes tegengehouden: calciumionen, nitraatmoleculen, PFAS-verbindingen en loodionen
            blijven achter in het afvalwater. Wat door het membraan gaat is vrijwel zuiver H2O met een
            TDS van 1-20 mg/L.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een filterkan werkt op een ander principe: adsorptie. Het actief-koolblok in de filterpatroon
            heeft een enorm intern oppervlak (1 gram kool = ca. 500-1500 m2 oppervlak) waaraan organische
            verbindingen zich hechten. Chloor, chlooramines, trihalomethanen, geurstoffen en sommige
            pesticiden worden op die manier effectief verwijderd. Opgeloste ionen (lood, nitraat, PFAS)
            zijn echter te klein en te polaire om significant te adsorberen.
          </p>
          <p className="text-gray-700 mt-4">Zie ook: <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] hover:underline font-medium">Actief kool filtertechniek uitgelegd</Link>.</p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Vergelijkingstabel: 10 eigenschappen</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Osmosefilter (RO)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Filterkan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["PFAS-verwijdering", "90-99% reductie (NSF 401)", "Niet effectief"],
                  ["Lood", "95-99% reductie", "Niet effectief"],
                  ["Nitraat", "85-95% reductie", "Niet effectief"],
                  ["Kalk / hardheid", "95-99% reductie", "Gedeeltelijk (ionenwisseling)"],
                  ["Chloor / geur", "Ja (pre-koolfilter)", "Ja, effectief"],
                  ["Microplastics", "Volledig (&gt;0,001 micron)", "Niet effectief"],
                  ["Bacterien", "Verwijderd (membraan)", "Niet effectief"],
                  ["Capaciteit per dag", "6-15 liter/uur (tank)", "50-150 liter/dag (traag)"],
                  ["Kosten per jaar", "200-350 euro (incl. afschrijving)", "25-60 euro (filterwissels)"],
                  ["Onderhoudsgemak", "Filterwissel 1-2x/jaar + membraan 2-3j", "Patroon elke 4-8 weken"],
                ].map(([eigenschap, ro, kan], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eigenschap}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{ro}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{kan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Kosten per liter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De echte kosten van waterfiltratie worden uitgedrukt in kosten per liter gefilterd water,
            inclusief installatie-afschrijving, filtervervanging en waterverbruik.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Osmosefilter:</strong> ca. 0,02-0,05 euro per liter gefilterd water. Dit is inclusief
              membraanafschrijving, pre- en post-filters en het drievoudige afvalwater (elke liter puur
              osmosewater kost 3-4 liter kraanwater).
            </li>
            <li>
              <strong>Filterkan:</strong> ca. 0,05-0,15 euro per liter, afhankelijk van het merk en de
              prijs van vervangfilters. Brita Maxtra-patronen (ca. 5-8 euro per stuk, geldig voor ca. 150
              liter) geven een kostprijs van 0,03-0,05 euro/liter bij optimale benutting.
            </li>
            <li>
              <strong>Flessenwater ter vergelijking:</strong> 0,20-1,50 euro per liter voor supermarkt-
              en mineraalwater. Zelfs een osmosefilter is per liter 4-75x goedkoper dan flessenwater.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer is een filterkan genoeg?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een filterkan volstaat in de volgende situaties:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Veilig Nederlands kraanwater zonder bekende verontreinigingen (PFAS onder norm, geen loden leidingen)</li>
            <li>Primaire wens is smaakverbetering: chloor- of geurvermindering</li>
            <li>Klein huishouden met laag waterverbruik (1 persoon of stel)</li>
            <li>Huurwoning zonder mogelijkheid tot onder-sink installatie</li>
            <li>Budget beperkt tot onder de 100 euro per jaar</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer is osmose de betere keuze?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter is de betere of enige optie bij:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Aangetoonde of vermoeide PFAS-verontreiniging in uw waterlevering</li>
            <li>Lood boven de norm (5 ug/L), risicofactor bij woningen van voor 1960</li>
            <li>Nitraat boven 25 mg/L (risico voor baby-flesvoeding)</li>
            <li>Baby-flesvoeding bereiden: osmose + remineralisatie of bottled water</li>
            <li>Hoge waterhardheid gecombineerd met drinkwaterkwaliteitswens</li>
            <li>Immuungecompromitteerde personen in het huishouden</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Milieu-vergelijking</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beide systemen scoren beter dan flessenwater op milieu-impact, maar hebben elk hun eigen
            nadelen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een filterkan produceert plastic afval: elke Brita Maxtra-patroon weegt ca. 50 gram en
            bevat een mix van actief kool, ionenwisselaarkorrels en plastic behuizing. Bij een verbruik
            van 150 liter per patroon en 2 liter per dag per persoon gaat het om ca. 2-3 patronen per
            maand per huishouden. Brita biedt een innameprogramma, maar de meeste patronen belanden
            in het restafval.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter produceert afvalwater: voor elke liter drinkwater worden 3-4 liter
            leidingwater gebruikt. In droge periodes of waterschaarse regio's is dit een nadeel.
            Het membraan gaat 2-3 jaar mee en is daarna afval (gespecialiseerde recycling vereist).
            Pre- en post-filters zijn jaarlijks te vervangen en produceren minder plastic afval dan
            wekelijkse filterkanpatronen.
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
              { label: "Actief kool filtertechnieken", href: "/filtertechnieken/actief-kool" },
              { label: "Omgekeerde osmose", href: "/omgekeerde-osmose" },
              { label: "Waterfilter keuzehulp", href: "/keuzehulp" },
              { label: "Osmosefilter kopen", href: "/omgekeerde-osmose/kopen" },
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
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose: werking</h3>
              <p className="text-sm text-gray-600">Hoe RO-membranen 95-99% van verontreinigingen verwijderen en wanneer dit beter is dan een filterkan.</p>
            </Link>
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool: filterkan techniek</h3>
              <p className="text-sm text-gray-600">Hoe filterkannen actief kool gebruiken en welke stoffen wel/niet effectief worden verwijderd.</p>
            </Link>
          </div>
        </section>

        <div className="mt-10">
          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
