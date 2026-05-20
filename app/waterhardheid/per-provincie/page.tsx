import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterhardheid per provincie Nederland: overzicht alle 12 provincies",
  description:
    "Waterhardheid per provincie: Limburg (tot 30 dH) vs Groningen (2-4 dH). Overzicht met gemiddelden, zachte en harde gebieden per regio.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterhardheid/per-provincie" },
  openGraph: {
    title: "Waterhardheid per provincie Nederland: overzicht alle 12 provincies",
    description:
      "Waterhardheid per provincie: Limburg (tot 30 dH) vs Groningen (2-4 dH). Overzicht met gemiddelden, zachte en harde gebieden per regio.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Waar is het water het hardst in Nederland?",
    answer:
      "Limburg heeft het hardste water van Nederland met waarden tot 30 dH in sommige gemeenten. Zeeland volgt met 18-28 dH. Dit wordt veroorzaakt door de kalkhoudende bodemgesteldheid (mergel in Limburg, schelpenrijke kleigrond in Zeeland) en het gebruik van grondwater uit kalkrijke lagen.",
  },
  {
    question: "Hoe meet ik mijn eigen waterhardheid?",
    answer:
      "U kunt waterhardheid meten met een TDS-meter (ca. 10-20 euro, geeft indicatieve waarde in mg/L), teststrips voor waterhardheid (nauwkeuriger, ca. 10-15 euro voor 50 strips) of een druppeltest-kit. Voor de exacte hardheid in dH kunt u ook de jaarlijkse kwaliteitsrapportage van uw drinkwaterbedrijf raadplegen, of onze gemeente-pagina opzoeken.",
  },
  {
    question: "Welk filter past bij mijn provincie?",
    answer:
      "Voor zachte provincies (Groningen, Friesland, dH &lt; 8) is geen filter nodig voor hardheid. Voor matig harde provincies (Utrecht, Noord-Holland, 8-15 dH) is een koolstoffilter optioneel voor smaak. Voor harde provincies (Overijssel, Gelderland, 15-20 dH) is een osmosefilter of waterontharder een overweging. Voor zeer harde provincies (Limburg, Zeeland, &gt; 20 dH) is behandeling sterk aanbevolen.",
  },
  {
    question: "Verandert waterhardheid in de tijd?",
    answer:
      "Ja, maar langzaam. Drinkwaterbedrijven wisselen soms tussen waterwingebieden (grond- vs oppervlaktewater) wat de hardheid kan beinvloeden. Droge zomers kunnen het aandeel harder grondwater verhogen. Wijzigingen in het waterleidingnet of mengverhoudingen kunnen de hardheid op gemeenteniveau met 2-5 dH aanpassen. Controleer periodiek de actuele waarden via uw drinkwaterbedrijf.",
  },
  {
    question: "Heeft harde waterprovincies invloed op mijn huid?",
    answer:
      "Hard water kan bijdragen aan huidirritatie, droogheid en eczeem, met name bij kinderen. Kalk vormt samen met zeep een onoplosbaar kalkzeep-residu dat porieen kan verstoppen. Studies tonen een correlatie aan tussen waterhardheid boven 20 dH en verhoogde prevalentie van eczeem bij kinderen. Een waterontharder voor de douche kan soelaas bieden.",
  },
];

const provincieData = [
  {
    provincie: "Groningen",
    hardheid: "2-5 dH",
    categorie: "Zacht",
    advies: "Geen filter nodig voor hardheid",
    kleur: "green",
  },
  {
    provincie: "Friesland",
    hardheid: "3-6 dH",
    categorie: "Zacht",
    advies: "Geen filter nodig voor hardheid",
    kleur: "green",
  },
  {
    provincie: "Drenthe",
    hardheid: "8-15 dH",
    categorie: "Matig hard",
    advies: "Koolstoffilter optioneel voor smaak",
    kleur: "yellow",
  },
  {
    provincie: "Overijssel",
    hardheid: "12-20 dH",
    categorie: "Matig tot hard",
    advies: "Ontharder/osmose overweging boven 15 dH",
    kleur: "orange",
  },
  {
    provincie: "Gelderland",
    hardheid: "10-25 dH",
    categorie: "Wisselend",
    advies: "Afhankelijk van gemeente; check lokale waarde",
    kleur: "orange",
  },
  {
    provincie: "Utrecht",
    hardheid: "8-18 dH",
    categorie: "Matig hard",
    advies: "Check gemeente; boven 15 dH osmose/ontharder",
    kleur: "yellow",
  },
  {
    provincie: "Noord-Holland",
    hardheid: "4-12 dH",
    categorie: "Zacht tot matig",
    advies: "Geen behandeling nodig in de meeste gemeenten",
    kleur: "green",
  },
  {
    provincie: "Zuid-Holland",
    hardheid: "6-14 dH",
    categorie: "Matig",
    advies: "Koolstoffilter optioneel; check gemeente",
    kleur: "yellow",
  },
  {
    provincie: "Zeeland",
    hardheid: "18-28 dH",
    categorie: "Hard tot zeer hard",
    advies: "Waterontharder sterk aanbevolen",
    kleur: "red",
  },
  {
    provincie: "Noord-Brabant",
    hardheid: "10-22 dH",
    categorie: "Wisselend",
    advies: "Wisselend per gemeente; boven 15 dH behandeling zinvol",
    kleur: "orange",
  },
  {
    provincie: "Limburg",
    hardheid: "20-30 dH",
    categorie: "Hard tot zeer hard",
    advies: "Waterontharder/osmose sterk aanbevolen",
    kleur: "red",
  },
  {
    provincie: "Flevoland",
    hardheid: "6-12 dH",
    categorie: "Matig",
    advies: "Geen behandeling nodig in de meeste gemeenten",
    kleur: "yellow",
  },
];

const kleurKlassen: Record<string, string> = {
  green: "bg-green-50 text-green-700",
  yellow: "bg-yellow-50 text-yellow-700",
  orange: "bg-orange-50 text-orange-700",
  red: "bg-red-50 text-red-700",
};

export default function PerProvinciePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterhardheid", url: "https://waterfilterplatform.nl/waterhardheid" },
          { name: "Per provincie", url: "https://waterfilterplatform.nl/waterhardheid/per-provincie" },
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
            <span>Per provincie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid per provincie Nederland: overzicht alle 12 provincies
          </h1>
          <QuickAnswer answer="Nederland kent grote regionale verschillen in waterhardheid: van 2-4 dH (grondwater Groningen/Friesland) tot 25-30 dH (Limburg/Zeeland). Alles boven 15 dH wordt als hard beschouwd; boven 20 dH is een waterontharder of osmosefilter aan te raden." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="waterhardheid" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Waterhardheidskaart Nederland: patronen en oorzaken</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De waterhardheid in Nederland vertoont een duidelijk geografisch patroon: het westen en
            noorden zijn relatief zacht, het oosten en zuidoosten zijn (zeer) hard. Dit patroon heeft
            twee oorzaken: bodemgesteldheid en de waterwinmethode van het drinkwaterbedrijf.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In het noorden (Groningen, Friesland, Drenthe) wordt grotendeels grondwater gewonnen uit
            zandige en venige bodemlagen die weinig calcium en magnesium bevatten. In het zuiden
            (Limburg, Zeeland, delen van Noord-Brabant) domineert kalkrijke ondergrond: mergellagen
            in Zuid-Limburg en schelpenrijke klei in Zeeland lossen calcium op in het grondwater,
            wat waarden tot 30 dH oplevert.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In de Randstad (Utrecht, Noord- en Zuid-Holland) wordt een mix van oppervlaktewater
            (Rijn, Maas, IJmeer) en grondwater gebruikt. De hardheid is hier matig (6-18 dH) en
            varieert sterk per gemeente en per waterwingebied.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Overzicht waterhardheid alle 12 provincies</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Provincie</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Hardheid (dH)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Categorie</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Advies</th>
                </tr>
              </thead>
              <tbody>
                {provincieData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800 border border-gray-200">{row.provincie}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200 font-mono">{row.hardheid}</td>
                    <td className="px-4 py-3 border border-gray-200">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${kleurKlassen[row.kleur]}`}>
                        {row.categorie}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{row.advies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Hoe controleert u uw exacte gemeente?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De tabel hierboven toont gemiddelde bandbreedte per provincie. Binnen een provincie kunnen
            waarden echter sterk varieren: in Gelderland loopt de hardheid van 10 dH in het
            IJsselgebied tot 25 dH in de Achterhoek. De exacte waarde voor uw adres vindt u via:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Onze gemeente-zoekpagina: <Link href="/waterhardheid" className="text-[#005F8A] hover:underline font-medium">waterhardheid per gemeente</Link></li>
            <li>De website van uw drinkwaterbedrijf (Vitens, Evides, Brabant Water, PWN, Dunea, etc.)</li>
            <li>Het jaarlijkse kwaliteitsrapport van uw drinkwaterbedrijf (verplichte publicatie)</li>
            <li>Een zelfmeting met teststrips of TDS-meter als indicatie</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wat betekent de hardheid voor uw huis?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Water harder dan 15 dH vormt bij verwarming zichtbare kalkaanslag. Dat betekent:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Verwarmingselementen:</strong> De vaatwasser, waterkoker en geiser raken sneller verstopt; energieverbruik stijgt 15-25% bij 1 mm kalk op het element.</li>
            <li><strong>Levensduur apparaten:</strong> Een wasmachine gaat in zacht water-gebieden gemiddeld 20-30% langer mee dan in hard water-gebieden.</li>
            <li><strong>Douche en kranen:</strong> Witte aanslag op glas, tegels en armaturen vereist frequenter schoonmaken.</li>
            <li><strong>Zeepverbruik:</strong> Hard water verhoogt het zeep- en schoonmaakmiddelverbruik met 30-50%.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Aanbevelingen per hardheidscategorie</h2>
          <div className="space-y-4 mb-4">
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Zacht water (&lt;8 dH): geen actie vereist</h3>
              <p className="text-sm text-gray-700">Geen kalkaanslag, geen filteradvies noodzakelijk voor hardheid. Eventueel koolstoffilter voor smaakverbetering (chloor).</p>
            </div>
            <div className="border-l-4 border-yellow-400 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Matig hard (8-15 dH): optioneel</h3>
              <p className="text-sm text-gray-700">Lichte kalkaanslag zichtbaar. Een koolstoffilter verwijdert chloor en verbetert smaak. Inline-filter voor koffie of waterkoker optioneel.</p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Hard (15-20 dH): ontharder of osmose zinvol</h3>
              <p className="text-sm text-gray-700">Duidelijke kalkaanslag, kortere apparatenlevensduur. Waterontharder voor hele huis of osmosefilter voor drinkwater aangeraden.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <h3 className="font-semibold text-gray-800 mb-1">Zeer hard (&gt;20 dH, Limburg/Zeeland): sterk aanbevolen</h3>
              <p className="text-sm text-gray-700">Zware kalkaanslag. Waterontharder of osmosefilter sterk aanbevolen. Combinatie van beide geeft de meest complete bescherming.</p>
            </div>
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
              { label: "Keuzehulp hard water", href: "/keuzehulp/hard-water" },
              { label: "Waterontharder kopen", href: "/waterontharder/kopen" },
              { label: "Osmosefilter kopen", href: "/omgekeerde-osmose/kopen" },
              { label: "Behandelingsadvies", href: "/waterhardheid/behandelingsadvies" },
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
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Hoe geologische verschillen tussen provincies de waterhardheid bepalen.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling per provincie</h3>
              <p className="text-sm text-gray-600">Wanneer ontharden zinvol is in uw provincie afhankelijk van waterbedrijf en hardheidsklasse.</p>
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
