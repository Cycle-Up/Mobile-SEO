import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ClusterHub } from "@/components/ClusterHub";
import { getCluster } from "@/data/clusters";
import { MethodologyBadge } from "@/components/MethodologyBadge";

export const metadata: Metadata = {
  title: "Waterfilter vergelijken: osmose vs filterkan, waterontharder en meer",
  description:
    "Eerlijke vergelijkingen: osmose vs filterkan, waterfilter vs waterontharder, kraanwater vs flessenwater. Kosten, prestaties en milieu-impact.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken" },
  openGraph: {
    title: "Waterfilter vergelijken: osmose vs filterkan, waterontharder en meer",
    description:
      "Eerlijke vergelijkingen: osmose vs filterkan, waterfilter vs waterontharder, kraanwater vs flessenwater. Kosten, prestaties en milieu-impact.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen osmose en een filterkan?",
    answer:
      "Een osmosefilter werkt op 0,0001 micron en verwijdert PFAS, lood, nitraat en microplastics. Een filterkan gebruikt actief kool en verwijdert chloor, geur en smaakproblemen maar geen PFAS of opgelost lood.",
  },
  {
    question: "Is kraanwater goedkoper dan flessenwater?",
    answer:
      "Nederlands kraanwater kost ca. 0,001 euro per liter. Flessenwater kost 0,20-1,50 euro per liter. Over een jaar is kraanwater voor een gezin dat 2 liter per dag drinkt ca. 800-3000 euro goedkoper dan flessenwater.",
  },
  {
    question: "Wat kost osmose per jaar alles inbegrepen?",
    answer:
      "Installatie 400-700 euro (eenmalig), filters 80-150 euro per jaar, water: osmose produceert 3-4 liter afvalwater per liter zuiver water. Totaal ca. 200-350 euro per jaar inclusief afschrijving.",
  },
  {
    question: "Wanneer kies ik voor een waterontharder en wanneer voor osmose?",
    answer:
      "Een waterontharder is beter voor de volledige huisinstallatie (apparaten, leidingen, wasmachine). Osmose is beter voor drinkwaterkwaliteit op het kraanpunt. In harde watergebieden is een combinatie van ontharder + osmose de meest complete oplossing.",
  },
  {
    question: "Hoe vergelijk ik waterfilters eerlijk?",
    answer:
      "Vergelijk op: NSF/ANSI-certificering (aantoonbare prestaties), kosten per liter gefilterd water (TCO), filterwissel-frequentie en -prijs, afvalwaterproductie (osmose), en onderhoudsvereisten.",
  },
];

export default function VergelijkenPage() {
  const cluster = getCluster("vergelijken")!;
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Vergelijkingen',
            url: 'https://waterfilterplatform.nl/vergelijken',
            numberOfItems: 14,
            itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'BWT vs Grunbeck: welke waterontharder is beter?', url: 'https://waterfilterplatform.nl/vergelijken/bwt-vs-grunbeck' },
            { '@type': 'ListItem', position: 2, name: 'Grohe Blue vs Grohe Red: wat is het verschil?', url: 'https://waterfilterplatform.nl/vergelijken/grohe-blue-vs-grohe-red' },
            { '@type': 'ListItem', position: 3, name: 'Harvey vs BWT: non-electric of elektrische waterontharder?', url: 'https://waterfilterplatform.nl/vergelijken/harvey-vs-bwt' },
            { '@type': 'ListItem', position: 4, name: 'Kokend water kraan merken vergelijken: Quooker, Grohe, PureAqua en meer', url: 'https://waterfilterplatform.nl/vergelijken/kokend-water-kraan-merken' },
            { '@type': 'ListItem', position: 5, name: 'Kraanwater vs flessenwater: kosten, kwaliteit en milieu vergeleken', url: 'https://waterfilterplatform.nl/vergelijken/kraanwater-vs-flessenwater' },
            { '@type': 'ListItem', position: 6, name: 'Omgekeerde osmose vergelijken: typen, prestaties en kosten', url: 'https://waterfilterplatform.nl/vergelijken/omgekeerde-osmose-vergelijken' },
            { '@type': 'ListItem', position: 7, name: 'Osmosewater vs bronwater: mineralen, zuiverheid en kosten', url: 'https://waterfilterplatform.nl/vergelijken/osmose-vs-bronwater' },
            { '@type': 'ListItem', position: 8, name: 'Osmose vs filterkan: prestaties, kosten en wanneer welke keuze?', url: 'https://waterfilterplatform.nl/vergelijken/osmose-vs-filterkan' },
            { '@type': 'ListItem', position: 9, name: 'Quooker vs Grohe Red: welke kokend water kraan kiezen? (2026)', url: 'https://waterfilterplatform.nl/vergelijken/quooker-vs-grohe-red' },
            { '@type': 'ListItem', position: 10, name: 'Quooker vs Selsiuz: welke kokend water kraan is beter?', url: 'https://waterfilterplatform.nl/vergelijken/quooker-vs-selsiuz' },
            { '@type': 'ListItem', position: 11, name: 'Selsiuz vs Grohe Blue: kokend of bruisend water? (2026)', url: 'https://waterfilterplatform.nl/vergelijken/selsiuz-vs-grohe-blue' },
            { '@type': 'ListItem', position: 12, name: 'Waterfilter vs waterontharder: verschil, kosten en wanneer welke keuze?', url: 'https://waterfilterplatform.nl/vergelijken/waterfilter-vs-waterontharder' },
            { '@type': 'ListItem', position: 13, name: 'Waterontharder vergelijken: zoutgebaseerd, zoutloos en osmose', url: 'https://waterfilterplatform.nl/vergelijken/waterontharder-vergelijken' },
            { '@type': 'ListItem', position: 14, name: 'Zoutloze waterontharder vergelijken: TAC, magneet of elektronisch', url: 'https://waterfilterplatform.nl/vergelijken/zoutloze-waterontharder-vergelijken' },
            ],
          },
        ]}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterfilter vergelijken: osmose vs filterkan, waterontharder en meer",
          description: "Eerlijke vergelijkingen: osmose vs filterkan, waterfilter vs waterontharder, kraanwater vs flessenwater. Kosten, prestaties en milieu-impact.",
          datePublished: "2026-05-17",
          dateModified: "2026-05-22",
          url: "https://waterfilterplatform.nl/vergelijken",
        }}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter vergelijken: osmose vs filterkan, waterontharder en meer
          </h1>
          <QuickAnswer question="Wat is het verschil tussen osmosefilter, filterkan en waterontharder?" answer="Een osmosefilter filtert op moleculair niveau en verwijdert PFAS, lood en nitraat. Een filterkan verwijdert alleen chloor en geur. Een waterontharder verwijdert alleen kalk. De beste keuze hangt af van uw specifieke probleem." />
        </div>
      </section>
      <ClusterHub
        intro={
          <>
            <p>
              De markt is vol met claims en vergelijkingen die producten in het beste licht zetten.
              Dit cluster vergelijkt waterfilteroplossingen op basis van onafhankelijke data:
              filterprestaties, totale kosten over de levensduur, onderhoud en milieu-impact.
            </p>
            <p>
              Of u nu twijfelt tussen een osmosefilter en een filterkan, wilt weten of een
              waterontharder of osmosefilter beter past bij uw situatie, of wil begrijpen of
              kraanwater werkelijk beter is dan flessenwater: elke vergelijking in dit cluster
              is opgebouwd rond feitelijke prestatiemeting, gestandaardiseerde kosten per liter
              en transparante TCO-berekeningen.
            </p>
          </>
        }
        pages={cluster.pages}
        ctaContext={cluster.ctaContext}
        collectionName={cluster.title}
        collectionUrl={`https://waterfilterplatform.nl${cluster.hub}`}
        collectionDescription={cluster.description}
        relatedClusters={cluster.relatedClusters}
      />
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <MethodologyBadge lastReviewed="2026-05-22" />
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
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
            {[
              { href: "/keuzehulp", title: "Persoonlijk advies via keuzehulp" },
              { href: "/keurmerken", title: "Keurmerken vergelijken" },
              { href: "/filtertechnieken", title: "Filtertechnieken vergeleken" },
              { href: "/waterfilter", title: "Alle waterfiltersoorten" },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">{l.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      {/* orphan-fix: meer in dit cluster */}
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <section>
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Meer in dit cluster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link key="/vergelijken/osmose-vs-bronwater" href="/vergelijken/osmose-vs-bronwater" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Osmosewater vs bronwater</p>
              </Link>
              <Link key="/vergelijken/quooker-vs-grohe-red" href="/vergelijken/quooker-vs-grohe-red" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Quooker vs Grohe Red</p>
              </Link>
              <Link key="/vergelijken/selsiuz-vs-grohe-blue" href="/vergelijken/selsiuz-vs-grohe-blue" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Selsiuz vs Grohe Blue</p>
              </Link>
              <Link key="/vergelijken/zoutloze-waterontharder-vergelijken" href="/vergelijken/zoutloze-waterontharder-vergelijken" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Zoutloze waterontharder vergelijken</p>
              </Link>
              <Link key="/vergelijken/sodastream-vs-grohe-blue" href="/vergelijken/sodastream-vs-grohe-blue" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">SodaStream vs Grohe Blue</p>
              </Link>
              <Link key="/vergelijken/boretti-vs-quooker" href="/vergelijken/boretti-vs-quooker" className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">Boretti vs Quooker</p>
              </Link>
          </div>
        </section>
      </div>
    </>
  );
}
