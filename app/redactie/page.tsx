import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { AUTHORS, REVIEW_TEAM, buildPersonSchema, buildReviewTeamSchema } from "@/lib/authors.mjs";

const URL = "https://waterfilterplatform.nl/redactie";

export function generateMetadata(): Metadata {
  const title = "Redactie en werkwijze - wie schrijft en controleert onze content";
  const description =
    "Maak kennis met de redactie van WaterfilterPlatform: wie onze artikelen schrijft, wie ze controleert en hoe ons redactionele, correctie- en bronnenbeleid werkt.";

  return {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: { title, description, url: URL, type: "website", siteName: "WaterfilterPlatform", locale: "nl_NL" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function RedactiePage() {
  const jeroen = AUTHORS.jeroenDijkstra;

  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Redactie en werkwijze van WaterfilterPlatform",
            url: URL,
            description:
              "Redactiepagina van WaterfilterPlatform: auteurs, reviewproces, redactioneel beleid en correctiebeleid.",
            inLanguage: "nl-NL",
            isPartOf: { "@id": "https://waterfilterplatform.nl/#website" },
            mainEntity: buildReviewTeamSchema(),
            about: buildPersonSchema(jeroen),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Redactie", item: URL },
            ],
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Redactie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-4">
            Redactie en werkwijze
          </h1>
          <p className="text-gray-600">
            WaterfilterPlatform wordt gemaakt door een redactie met een achtergrond in waterbehandeling,
            duurzaamheid en procesoptimalisatie. Op deze pagina lees je wie onze content schrijft,
            wie die controleert en volgens welk beleid we werken.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoofdredacteur</h2>
          <div className="flex items-start gap-4 bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-5">
            <div
              className="shrink-0 w-14 h-14 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-lg"
              aria-hidden="true"
            >
              JD
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                <Link href={jeroen.profilePath} className="hover:text-[#005F8A]">{jeroen.name}</Link>
                <span className="font-normal text-gray-500"> - {jeroen.role}</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">{jeroen.shortBio}</p>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc pl-5">
                {jeroen.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <Link
                href="/redactie/jeroen-dijkstra"
                className="inline-block mt-3 text-sm font-medium text-[#005F8A] hover:text-[#003F5C]"
              >
                Lees het volledige profiel van {jeroen.name.split(" ")[0]} &rarr;
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Review en controle</h2>
          <p className="text-gray-700 leading-relaxed">
            Elke publicatie wordt voor plaatsing redactioneel gecontroleerd. {REVIEW_TEAM.description}{" "}
            Het team achter{" "}
            <a href="https://transmission.frl" target="_blank" rel="noopener noreferrer" className="text-[#005F8A] hover:text-[#003F5C] underline">
              Transmission
            </a>{" "}
            ondersteunt de redactie bij review, feitencontrole en actualisering van bestaande artikelen.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Bij gezondheidsgerelateerde onderwerpen (YMYL) hanteren we extra eisen: minimaal drie
            gezaghebbende bronnen (zoals RIVM, WHO, Drinkwaterbesluit, EU-richtlijn 2020/2184), een
            gezondheidsdisclaimer en een terughoudende, feitelijke toon. Zie onze{" "}
            <Link href="/methodologie" className="text-[#005F8A] hover:text-[#003F5C] underline">methodologie</Link>{" "}
            voor de volledige criteria.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Redactioneel beleid</h2>
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li>People-first: elk artikel beantwoordt een echte vraag van Nederlandse huishoudens.</li>
            <li>Cijfers en claims krijgen een controleerbare bron of een expliciet indicatief-label.</li>
            <li>Geen verzonnen tests, reviews of beoordelingen; vergelijkingen zijn criteria-gebaseerd.</li>
            <li>Elke pagina toont publicatie- en bijwerkdatum.</li>
            <li>
              Transparantie over ons verdienmodel: doorverwijzingen naar partner PureAqua zijn altijd
              als zodanig herkenbaar. Onze hoofdredacteur is tevens medeoprichter van PureAqua; juist
              daarom markeren we elke productverwijzing expliciet als commercieel en steunen cijfers en
              claims altijd op onafhankelijke bronnen. Lees meer op{" "}
              <Link href="/over-ons" className="text-[#005F8A] hover:text-[#003F5C] underline">over ons</Link>{" "}
              en het{" "}
              <Link href={jeroen.profilePath} className="text-[#005F8A] hover:text-[#003F5C] underline">profiel van de hoofdredacteur</Link>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Correctie- en actualiseringsbeleid</h2>
          <p className="text-gray-700 leading-relaxed">
            Drinkwaternormen, productspecificaties en prijzen veranderen. Daarom actualiseren we
            artikelen periodiek en vermelden we bij elke wijziging een nieuwe bijwerkdatum. Zie je
            een fout of verouderde informatie? Meld het via onze{" "}
            <Link href="/contact" className="text-[#005F8A] hover:text-[#003F5C] underline">contactpagina</Link>;
            we beoordelen elke melding en corrigeren aantoonbare fouten zo snel mogelijk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Verder lezen</h2>
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li><Link href="/methodologie" className="text-[#005F8A] hover:text-[#003F5C] underline">Onze methodologie en evaluatiecriteria</Link></li>
            <li><Link href="/over-ons" className="text-[#005F8A] hover:text-[#003F5C] underline">Over WaterfilterPlatform en ons verdienmodel</Link></li>
            <li><Link href="/kennisbank" className="text-[#005F8A] hover:text-[#003F5C] underline">Alle artikelen in de kennisbank</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
