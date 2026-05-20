import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterhardheid behandelen: welk systeem past bij uw hardheid?",
  description:
    "Per hardheidscategorie het beste advies: zacht (geen actie), matig (koolfilter), hard (ontharder/osmose), zeer hard (combinatie). Met kostenindicatie.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterhardheid/behandelingsadvies" },
  openGraph: {
    title: "Waterhardheid behandelen: welk systeem past bij uw hardheid?",
    description:
      "Per hardheidscategorie het beste advies: zacht (geen actie), matig (koolfilter), hard (ontharder/osmose), zeer hard (combinatie). Met kostenindicatie.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoe bereken ik mijn hardheid in dH?",
    answer:
      "1 graad Duits (dH) = 10 mg calciumoxide (CaO) per liter = 17,8 mg/L als CaCO3. Uw drinkwaterbedrijf rapporteert de hardheid vaak in mmol/L of mg/L als CaCO3. Omrekening: 1 dH = 0,178 mmol/L. U kunt ook teststrips gebruiken die direct in dH meten, of een TDS-meter als ruwe indicatie (TDS in mg/L gedeeld door 17 geeft een benadering in dH).",
  },
  {
    question: "Beschadigt hard water mijn leidingen?",
    answer:
      "Hard water beschadigt kunststof leidingen niet. Bij koperen leidingen kan kalk juist beschermend werken: het vormt een laagje dat corrosie remt. Bij te zachte of te zure condities treedt juist kopercorrosie op. Het probleem zit bij verwarmingselementen en apparaten: kalk isoleert en versnelt slijtage.",
  },
  {
    question: "Werkt een ontharder ook voor drinkwater?",
    answer:
      "Een waterontharder verwijdert kalk, maar voegt ook natrium toe aan het water. Voor de meeste gezonde volwassenen is dit geen probleem, maar voor mensen met hypertensie of een natriumbeperkt dieet kan het natriumgehalte in onthard drinkwater relevant zijn. Veel fabrikanten adviseren een aparte onbehandelde kraan voor drinkwater, of een osmosefilter na de ontharder.",
  },
  {
    question: "Hoelang duurt het voor kalkaanslag weg is na installatie ontharder?",
    answer:
      "Bestaande kalkaanslag op kranen, tegels en douches lost niet op na plaatsing van een waterontharder. Daarvoor is mechanisch schoonmaken of ontkalkingsmiddel nodig. Kalkaanslag in verwarmingselementen en leidingen lost wel langzaam op: zacht water lost geleidelijk de kalkaanslag op die al aanwezig is, maar dit kan maanden tot jaren duren afhankelijk van de dikte van de laag.",
  },
  {
    question: "Is boven-25-dH-water gevaarlijk?",
    answer:
      "Zeer hard water (boven 25 dH) is niet gevaarlijk voor de gezondheid: calcium en magnesium zijn essentieel en dragen bij aan de dagelijkse mineralenopname. Gezondheidsrisico's treden op bij bepaalde groepen (bijv. nierstenen bij extreme inname), maar binnen normale consumptie is er geen bewezen risico. Het probleem zit bij apparaten, leidingen en smaak, niet bij de gezondheid.",
  },
];

export default function BehandelingsadviesPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterhardheid", url: "https://waterfilterplatform.nl/waterhardheid" },
          { name: "Behandelingsadvies", url: "https://waterfilterplatform.nl/waterhardheid/behandelingsadvies" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterhardheid" className="hover:underline">Waterhardheid</Link>
            <span className="mx-2">/</span>
            <span>Behandelingsadvies</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid behandelen: welk systeem past bij uw hardheid?
          </h1>
          <QuickAnswer answer="Water zachter dan 8 dH heeft geen behandeling nodig. Water van 8-15 dH kan worden verbeterd met een koolstoffilter. Boven 15 dH is een waterontharder of osmosefilter zinvol; boven 20 dH is behandeling sterk aanbevolen voor uw apparaten." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="waterhardheid" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">De 4 hardheidsklassen en hun kenmerken</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waterhardheid wordt in Nederland uitgedrukt in graden Duits (dH). De Nederlandse indeling
            volgt grotendeels de Europese norm:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Klasse</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Hardheid (dH)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Typische symptomen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Zacht", "0-8 dH", "Geen kalkaanslag, waterige koffiesmaak mogelijk, lichte corrosiviteit bij pH &lt; 7"],
                  ["Matig hard", "8-15 dH", "Lichte aanslag op waterkoker, minimale kalksporen in douche, milde zeepschuim-reductie"],
                  ["Hard", "15-25 dH", "Zichtbare kalk op kranen en douche, kortere apparatenlevensduur, minder zeepschuim, vlak koffiesmaak"],
                  ["Zeer hard", "&gt;25 dH", "Zware kalkaanslag, hoog onderhoudsverbruik apparaten, descalen elke 1-3 maanden, merkbare smaakproblemen"],
                ].map(([klasse, hardheid, symptomen], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{klasse}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200 font-mono">{hardheid}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200" dangerouslySetInnerHTML={{ __html: symptomen }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Zacht water (0-8 dH): geen behandeling nodig</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In zachte watergebieden zoals Groningen, Friesland en het westen van Noord-Holland is
            behandeling van waterhardheid niet noodzakelijk. Er treedt nauwelijks kalkaanslag op.
            Apparaten hebben een langere levensduur. Zeepverbruik is lager.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u toch de smaak verbeteren? Een eenvoudig koolstoffilter (actief kool) verwijdert
            chloor, geur en smaakproblemen. Dit is de enige behandeling die zinvol kan zijn bij zacht
            water. Een waterontharder heeft geen nut: er valt niets te ontharden.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Matig hard water (8-15 dH): optioneel</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij matig hard water is behandeling optioneel en hangt af van uw prioriteiten:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Lichte kalkaanslag is soms zichtbaar op waterkoker en douche; descalen 2-4x per jaar volstaat</li>
            <li>Een koolstoffilter op de kraan of als filterkan verbetert de smaak door chloor- en geurverwijdering</li>
            <li>Een inline koffiefilter is zinvol als u een espressomachine heeft</li>
            <li>Een waterontharder of osmosefilter is niet noodzakelijk, maar kan als preventieve maatregel worden overwogen</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Hard water (15-25 dH): ontharder of osmose zinvol</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij water harder dan 15 dH is behandeling zinvol. De keuze tussen waterontharder en
            osmosefilter hangt af van uw primaire probleem:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-[#005F8A]/20 rounded-xl p-5">
              <h3 className="font-semibold text-[#005F8A] mb-2">Waterontharder (hele huis)</h3>
              <p className="text-sm text-gray-700 mb-3">Kalkoverlast in hele huis (douche, wasmachine, vaatwasser, boiler). Beschermt alle apparaten. Verlaagt zeepverbruik. Vergt zoutaanvulling.</p>
              <p className="text-xs text-gray-500">Kosten: 800-2000 euro aanschaf + 100-200 euro/jaar zout</p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5">
              <h3 className="font-semibold text-[#005F8A] mb-2">Osmosefilter (kraanpunt)</h3>
              <p className="text-sm text-gray-700 mb-3">Drinkwaterkwaliteit als primaire zorg. Verwijdert ook PFAS, lood, nitraat. Werkt alleen op de keukenkraan. Geen kalkbescherming voor apparaten elders.</p>
              <p className="text-xs text-gray-500">Kosten: 400-700 euro aanschaf + 80-150 euro/jaar filters</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Zeer hard water (&gt;25 dH, Limburg/Zeeland): combinatie sterk aanbevolen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij waterhardheid boven 25 dH is de belasting op apparaten significant. In Limburg en
            Zeeland, waar waarden tot 28-30 dH voorkomen, is behandeling sterk aanbevolen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Verwarmingselementen gaan zonder behandeling 40-60% korter mee</li>
            <li>Descaling van waterkoker en koffiemachine elke 4-8 weken is nodig</li>
            <li>Douchekoppen, kranen en glasdeuren vragen intensief wekelijks onderhoud</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            De aanbevolen aanpak: een waterontharder op de hoofdleiding voor complete huisbescherming,
            gecombineerd met een osmosefilter op de keuken voor drinkwater. De combinatie geeft maximale
            bescherming: de ontharder verlengt apparatenlevensduur, de osmosefilter levert zuiver
            drinkwater vrij van kalk en het extra natrium dat de ontharder toevoegt.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Kosten-overzicht per oplossing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Systeem</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Aanschaf</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Jaarlijks</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Geschikt voor hardheid</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Filterkan (actief kool)", "25-70 euro", "25-60 euro (patronen)", "Alle hardheden; voor smaak"],
                  ["Inline koolstoffilter", "50-150 euro", "30-80 euro (filters)", "8-20 dH; smaak + chloor"],
                  ["Waterontharder", "800-2000 euro", "100-200 euro (zout)", "15+ dH; gehele huis"],
                  ["Osmosefilter", "400-700 euro", "80-150 euro (filters)", "Alle hardheden; drinkwater"],
                  ["Combinatie ontharder + osmose", "1200-2700 euro", "200-350 euro", "&gt;20 dH; meest compleet"],
                ].map(([systeem, aanschaf, jaarlijks, hardheid], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{systeem}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{aanschaf}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{jaarlijks}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{hardheid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
              { label: "Waterhardheid", href: "/waterhardheid" },
              { label: "Per provincie", href: "/waterhardheid/per-provincie" },
              { label: "Keuzehulp hard water", href: "/keuzehulp/hard-water" },
              { label: "Waterontharder kopen", href: "/waterontharder/kopen" },
              { label: "Osmosefilter kopen", href: "/omgekeerde-osmose/kopen" },
              { label: "Ionenwisseling", href: "/filtertechnieken/ionenwisseling" },
              { label: "Kalk en mineralen in drinkwater", href: "/stoffen-in-drinkwater/kalk-mineralen" },
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
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: werking ontharder</h3>
              <p className="text-sm text-gray-600">Hoe een ionenwisselende ontharder calcium en magnesium vervangt door natrium voor zacht water.</p>
            </Link>
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hard water keuzehulp</h3>
              <p className="text-sm text-gray-600">Welke onthardertechniek past bij uw waterhardheid en huishoudgrootte.</p>
            </Link>
          </div>
        </section>

        <div className="mt-10">
          <CTABanner context="waterhardheid" />
        </div>
      </div>
    </>
  );
}
