import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";

export function generateMetadata(): Metadata {
  const title = "Onze methodologie — hoe beoordeelt WaterfilterPlatform waterfilters?";
  const description =
    "Hoe komt ons filteradvies tot stand? Beoordelingscriteria, bronnen, onafhankelijkheidsprotocol en hoe we technische claims verifieren.";

  return {
    title,
    description,
    alternates: { canonical: "https://waterfilterplatform.nl/methodologie" },
    openGraph: {
      title,
      description,
      url: "https://waterfilterplatform.nl/methodologie",
      type: "article",
      siteName: "WaterfilterPlatform",
      locale: "nl_NL",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function MethodologiePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Methodologie WaterfilterPlatform",
            "url": "https://waterfilterplatform.nl/methodologie",
            "description": "Beoordelingscriteria, bronnen en onafhankelijkheidsprotocol van WaterfilterPlatform.",
            "publisher": {
              "@type": "Organization",
              "name": "WaterfilterPlatform",
              "url": "https://waterfilterplatform.nl",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://waterfilterplatform.nl" },
              { "@type": "ListItem", "position": 2, "name": "Methodologie", "item": "https://waterfilterplatform.nl/methodologie" },
            ],
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-4">
            Hoe beoordelen wij waterfilters?
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Transparantie over ons beoordelingsproces is voor ons geen bijzaak. Op deze pagina leggen wij precies uit hoe onze filteradviezen tot stand komen: welke criteria wij hanteren, hoe wij prestatieclaimsverifiëren, hoe wij met gezondheidsinformatie omgaan en wat wij bewust niet doen.
          </p>
          <p className="text-sm text-gray-500 mt-4">Bijgewerkt: 17 mei 2026</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Beoordelingscriteria voor filters</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Elk filtersysteem dat wij bespreken, beoordelen wij op dezelfde set criteria. De onderstaande tabel laat zien welke criteria wij gebruiken en hoe wij die beoordelen. Zo kunt u zelf inschatten welke criteria voor uw situatie het zwaarst wegen.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#E0F2FE]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#003F5C]">Criterium</th>
                <th className="px-4 py-3 font-semibold text-[#003F5C]">Hoe we het beoordelen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Filterprestatie (% verwijdering)</td>
                <td className="px-4 py-3 text-gray-700">NSF/ANSI-certificeringsdata, fabrikantspecificaties, onafhankelijke labstudies</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Welke stoffen worden verwijderd</td>
                <td className="px-4 py-3 text-gray-700">Officieel gecertificeerde contaminantenlijst per NSF-standaard (42, 53, 58, 401)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Onderhoud en kosten</td>
                <td className="px-4 py-3 text-gray-700">TCO-berekening over drie jaar: aanschaf + jaarlijkse filterkosten + installatie</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Installatie-eisen</td>
                <td className="px-4 py-3 text-gray-700">Vaste aansluiting of aanrechtmodel, gereedschapsvereisten, toestemming verhuurder</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Duurzaamheid</td>
                <td className="px-4 py-3 text-gray-700">Afvalwaterverhouding (bij osmose), filterlevensduur, vervangingsfrequentie en plasticafval</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Geschiktheid per situatie</td>
                <td className="px-4 py-3 text-gray-700">Hard water, PFAS-blootstelling, baby-gebruik, huurwoning, specifieke stoffen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Hoe we filterprestaties verifieren</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Wij testen filtersystemen niet zelf in een laboratorium. Dat zou de schijn van onafhankelijkheid ondermijnen bij producten die wij ook commercieel aanbevelen. In plaats daarvan baseren wij ons op drie lagen van verificatie:
            </p>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li className="leading-relaxed">
                <strong>NSF/ANSI-certificeringsdata.</strong> Voor elk gecertificeerd filter publiceert NSF International de specifieke contaminantenreductie per model en per stof. Die database is openbaar via nsf.org en vormt onze primaire verificatiebron voor prestatieclaimsvan fabrikanten.
              </li>
              <li className="leading-relaxed">
                <strong>Peer-reviewed studies.</strong> Wij zoeken systematisch naar onafhankelijk gepubliceerd onderzoek over de betreffende filtertechnologie. Dat kan gaan over de effectiviteit van actief kool bij PFAS-verwijdering, de invloed van waterdruk op osmosemembranen of de bacteriegroei in filterkannen bij onjuist onderhoud.
              </li>
              <li className="leading-relaxed">
                <strong>Officiele normendata.</strong> EU-normen en RIVM-drempelwaarden dienen als referentiekader. Als een filter beweert "nitraten te verwijderen tot onder de norm", controleren wij zowel de verwijderingsgraad als de actuele Nederlandse norm uit het{" "}
                <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline">
                  Drinkwaterbesluit
                </Link>
                .
              </li>
            </ol>
            <p>
              Wanneer voor een bepaald product of criterium geen onafhankelijke data beschikbaar is, vermelden wij dat expliciet. Wij laten liever een veld leeg of schrijven "niet geverifieerd" dan dat wij niet-controleerbare cijfers als feit presenteren.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Hoe we gezondheidsclaims behandelen</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Drinkwater raakt gezondheid, en wij nemen dat serieus. Wij hanteren het voorzorgsprincipe waar bewijs ontbreekt, maar wij vermijden ook angstmarketing. Een stof wordt door ons niet als "gevaarlijk" gekwalificeerd tenzij er wetenschappelijk bewijs is dat de blootstelling op relevante niveaus gezondheidsschade veroorzaakt.
          </p>
          <p>
            Wij onderscheiden drie niveaus van bewijs:
          </p>

          <div className="space-y-3">
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">"Aangetoond"</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bewijs uit gerandomiseerde studies of erkend door WHO of RIVM in gepubliceerde richtlijnen. Wij gebruiken deze kwalificatie alleen wanneer causaliteit is vastgesteld op voor mensen relevante blootstellingsniveaus.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">"Associatie"</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Correlatieonderzoek of dierenstudies die een verband suggereren, maar waarbij causaliteit bij mensen nog niet is vastgesteld. Wij vermelden dit uitdrukkelijk om het onderscheid met bewezen risicos duidelijk te maken.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-1">"Hypothetisch"</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Theoretisch risico op basis van chemische eigenschappen of mechanistische redenering, zonder klinisch bewijs bij mensen op drinkwaterniveaus. Wij noemen dit niveau alleen wanneer het relevant is voor het begrip van een stof of technologie.
              </p>
            </div>
          </div>

          <p>
            Dit driedeling helpt lezers onderscheid te maken tussen wat wetenschappelijk is vastgesteld en wat speculatief is. Wij vermijden formuleringen als "misschien gevaarlijk" zonder dit niveau-onderscheid te maken.
          </p>
        </div>
      </section>

      <section className="bg-[#E0F2FE] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Bijwerken en foutherstel</h2>
          <div className="bg-white rounded-2xl border border-blue-100 p-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Normen en wetenschappelijk inzicht veranderen. Wij bijwerken paginas wanneer dat noodzakelijk is. Zo werd in 2026 de EU-loodnorm in drinkwater aangescherpt van 10 naar 5 microgram per liter — een wijziging die wij verwerkt hebben in alle relevante paginas over lood, oude leidingen en waterfilters voor loodverwijdering.
            </p>
            <p>
              De datum van laatste herziening staat onderaan elke inhoudelijke pagina. Als u een verouderde norm, onjuiste claim of ontbrekende bron ontdekt, kunt u dat melden via{" "}
              <Link href="/contact" className="text-[#005F8A] font-medium hover:underline">
                ons contactformulier
              </Link>
              . Wij corrigeren bevestigde fouten doorgaans binnen enkele werkdagen.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat wij NIET doen</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3 items-start">
            <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">•</span>
            <span>Wij publiceren geen "beste waterfilter"-ranglijsten op basis van commissie of betaalde plaatsing</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">•</span>
            <span>Wij claimen niet dat Nederlands kraanwater onveilig is — dat is het in de meeste gevallen niet</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">•</span>
            <span>Wij raden geen filter aan wanneer een goedkopere of eenvoudigere oplossing beter past bij de situatie</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">•</span>
            <span>Wij doen geen medische claims en verwijzen gezondheidsvragen door naar arts, GGD of RIVM</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">•</span>
            <span>Wij accepteren geen gratis producten ter beoordeling van fabrikanten of importeurs</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">•</span>
            <span>Wij voeren geen eigen labmetingen uit en presenteren dat ook niet alsof we dat wel doen</span>
          </li>
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4 text-sm">
          <Link href="/over-ons" className="text-[#005F8A] font-medium hover:underline">
            Over ons
          </Link>
          <Link href="/drinkwaternormen" className="text-[#005F8A] font-medium hover:underline">
            Drinkwaternormen
          </Link>
          <Link href="/keurmerken" className="text-[#005F8A] font-medium hover:underline">
            Keurmerken waterfilters
          </Link>
          <Link href="/keuzehulp" className="text-[#005F8A] font-medium hover:underline">
            Keuzehulp
          </Link>
        </div>
      </section>
    </>
  );
}
