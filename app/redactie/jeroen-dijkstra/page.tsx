import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { AUTHORS, buildPersonSchema } from "@/lib/authors.mjs";

const author = AUTHORS.jeroenDijkstra;
const URL = `https://waterfilterplatform.nl${author.profilePath}`;

export function generateMetadata(): Metadata {
  const title = "Jeroen Dijkstra - initiatiefnemer en hoofdredacteur";
  const description =
    "Profiel van Jeroen Dijkstra: hoofdredacteur van WaterfilterPlatform, MSc Sustainable Entrepreneurship (RUG) en Lean Six Sigma Black Belt in waterbehandeling.";

  return {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: { title, description, url: URL, type: "profile", siteName: "WaterfilterPlatform", locale: "nl_NL" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function JeroenDijkstraPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: `Profiel van ${author.name}`,
            url: URL,
            inLanguage: "nl-NL",
            isPartOf: { "@id": "https://waterfilterplatform.nl/#website" },
            mainEntity: buildPersonSchema(author),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfilterplatform.nl" },
              { "@type": "ListItem", position: 2, name: "Redactie", item: "https://waterfilterplatform.nl/redactie" },
              { "@type": "ListItem", position: 3, name: author.name, item: URL },
            ],
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/redactie" className="hover:text-[#005F8A]">Redactie</Link>
            <span className="mx-2">/</span>
            <span>{author.name}</span>
          </nav>
          <div className="flex items-center gap-5">
            <div
              className="shrink-0 w-20 h-20 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-2xl"
              aria-hidden="true"
            >
              JD
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight">{author.name}</h1>
              <p className="text-gray-600 mt-1">{author.role} van WaterfilterPlatform</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        <section>
          <p className="text-gray-700 leading-relaxed">
            Jeroen Dijkstra is al meerdere jaren actief in de Nederlandse waterbehandelingsmarkt en
            combineert die praktijkervaring met een academische achtergrond in duurzaam ondernemen en
            een certificering in procesoptimalisatie. Als initiatiefnemer en hoofdredacteur van
            WaterfilterPlatform is hij eindverantwoordelijk voor de inhoudelijke kwaliteit van alle
            publicaties: van de kennisbank met honderden artikelen tot de vergelijkingen, datasets en
            rekentools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Opleiding en certificering</h2>
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li>
              <strong>MSc Sustainable Entrepreneurship</strong> - Rijksuniversiteit Groningen
              (faculteit Campus Fryslân, Leeuwarden), gericht op duurzaam ondernemerschap en
              systeemverandering.
            </li>
            <li>
              <strong>Universidade de Aveiro (Portugal)</strong> - studieverdieping in sustainable
              engineering met een focus op water en waterbehandeling.
            </li>
            <li>
              <strong>Lean Six Sigma Black Belt</strong> - gecertificeerd in datagedreven
              procesoptimalisatie.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Loopbaan</h2>
          <p className="text-gray-700 leading-relaxed">
            Jeroen paste zijn Lean Six Sigma-achtergrond onder meer toe bij <strong>FrieslandCampina</strong>,
            waar hij vanuit procesoptimalisatie intensief met waterprocessen werkte. Daarnaast deed hij
            energiesector-ervaring op bij <strong>Nuon</strong> (tegenwoordig Vattenfall). Sinds meerdere
            jaren richt hij zich volledig op de waterbehandelingsmarkt, met aanvullende vakstudies op dit
            gebied. Hij leidt het team achter{" "}
            <a href="https://transmission.frl" target="_blank" rel="noopener noreferrer" className="text-[#005F8A] hover:text-[#003F5C] underline">
              Transmission
            </a>{" "}
            en is initiatiefnemer van WaterfilterPlatform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Ondernemerschap</h2>
          <p className="text-gray-700 leading-relaxed">
            Naast WaterfilterPlatform is Jeroen medeoprichter van waterfilterspecialist{" "}
            <a href="https://www.pureaqua.nl/over-ons" target="_blank" rel="noopener noreferrer" className="text-[#005F8A] hover:text-[#003F5C] underline">
              PureAqua
            </a>{" "}
            (Hallum, Friesland) en oprichter van{" "}
            <a href="https://www.cycle-up.nl/over-cycle-up/" target="_blank" rel="noopener noreferrer" className="text-[#005F8A] hover:text-[#003F5C] underline">
              Cycle-Up
            </a>
            , een circulaire dienstverlener in Leeuwarden die de eerste circulaire hub van Friesland
            realiseerde. Hij is daarnaast medeoprichter van <strong>Pottle</strong> (upcycling van
            glasafval in een sociale werkplaats, verkozen tot beste Friese initiatief bij De Duurzame 30)
            en van ijsbad-merk <strong>ICEO</strong>. De rode draad: duurzame, circulaire producten
            rond water bouwen met meetbare impact.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Transparantie</h2>
          <p className="text-gray-700 leading-relaxed">
            Volledige openheid hoort bij dit platform: Jeroen is naast hoofdredacteur van
            WaterfilterPlatform ook medeoprichter van PureAqua, de partner waarnaar dit platform
            doorverwijst. Daarom markeren we alle productverwijzingen naar PureAqua expliciet als
            commercieel (gesponsord), scheiden we informatieve content strikt van commerciele
            verwijzingen en documenteren we onze werkwijze openbaar in de{" "}
            <Link href="/methodologie" className="text-[#005F8A] hover:text-[#003F5C] underline">methodologie</Link>{" "}
            en op{" "}
            <Link href="/over-ons" className="text-[#005F8A] hover:text-[#003F5C] underline">over ons</Link>.
            Cijfers en gezondheidsclaims steunen altijd op onafhankelijke bronnen zoals RIVM, Vewin,
            KWR en de Europese drinkwaterrichtlijn - nooit op leveranciersclaims alleen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Expertisegebieden</h2>
          <div className="flex flex-wrap gap-2">
            {author.knowsAbout.map((topic) => (
              <span
                key={topic}
                className="inline-block bg-[#E0F2FE] text-[#003F5C] text-sm font-medium rounded-full px-3 py-1"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Rol op WaterfilterPlatform</h2>
          <p className="text-gray-700 leading-relaxed">
            Als hoofdredacteur schrijft Jeroen de artikelen op dit platform en bewaakt hij het{" "}
            <Link href="/redactie" className="text-[#005F8A] hover:text-[#003F5C] underline">redactionele beleid</Link>:
            people-first content, controleerbare bronnen, transparantie over het verdienmodel en een
            strikte scheiding tussen informatie en commercie. De volledige werkwijze staat in onze{" "}
            <Link href="/methodologie" className="text-[#005F8A] hover:text-[#003F5C] underline">methodologie</Link>.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Vragen of opmerkingen over een artikel? Neem contact op via de{" "}
            <Link href="/contact" className="text-[#005F8A] hover:text-[#003F5C] underline">contactpagina</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Publicaties</h2>
          <p className="text-gray-700 leading-relaxed">
            Een selectie van veelgelezen publicaties op dit platform:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc pl-5 mt-3">
            <li><Link href="/kennisbank/hoeveel-kalk-kraanwater-nederland" className="text-[#005F8A] hover:text-[#003F5C] underline">Hoeveel kalk zit er in Nederlands kraanwater?</Link></li>
            <li><Link href="/kennisbank/wat-kost-waterontharder-per-jaar" className="text-[#005F8A] hover:text-[#003F5C] underline">Wat kost een waterontharder per jaar?</Link></li>
            <li><Link href="/kennisbank/hoeveel-water-verspilt-osmose" className="text-[#005F8A] hover:text-[#003F5C] underline">Hoeveel water verspilt een osmosesysteem?</Link></li>
            <li><Link href="/kennisbank" className="text-[#005F8A] hover:text-[#003F5C] underline">Alle artikelen in de kennisbank &rarr;</Link></li>
          </ul>
        </section>
      </div>
    </>
  );
}
