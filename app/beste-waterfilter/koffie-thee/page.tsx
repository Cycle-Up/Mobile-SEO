import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Beste waterfilter voor koffie en thee: ideale TDS en waterhardheid",
  description:
    "Voor optimale koffie-extractie is TDS 75-150 mg/L ideaal. Osmose met remineralisatie of een inline-filter: welke aanpak geeft het beste resultaat.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/beste-waterfilter/koffie-thee",
  },
  openGraph: {
    title: "Beste waterfilter voor koffie en thee: ideale TDS en waterhardheid",
    description:
      "Voor optimale koffie-extractie is TDS 75-150 mg/L ideaal. Osmose met remineralisatie of een inline-filter: welke aanpak geeft het beste resultaat.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is TDS en waarom is het belangrijk voor koffie?",
    answer:
      "TDS staat voor Total Dissolved Solids (totaal opgeloste stoffen) en wordt gemeten in mg/L of ppm. Voor koffie is TDS van het water de bepalende factor voor extractie-efficiëntie: water met te weinig mineralen (TDS &lt; 50 mg/L) extraheert onvoldoende smaakstoffen en geeft een vlakke koffie. Water met te hoge TDS (&gt; 250 mg/L) geeft overextractie of bittere bijsmaken. Het SCA-ideaal is TDS 75-175 mg/L voor drinkwater; voor espresso wordt 75-150 mg/L aanbevolen.",
  },
  {
    question: "Mijn koffie smaakt kalkachtig — wat doe ik?",
    answer:
      "Een kalkachtige of krijtige bijsmaak in koffie duidt op te hoge waterhardheid (boven 15 dH / 250 mg/L als CaCO3). Oplossingen: een inline-koolstoffilter verwijdert geen kalk; u heeft een osmosefilter met remineralisatiefilter nodig. Stel de remineralisatie in op TDS 80-120 mg/L (hardheid ca. 4-6 dH). Alternatief: een waterontharder op de espressomachine-aansluiting (inline onthardingspatroon, 20-50 euro, elke 3-6 maanden vervangen).",
  },
  {
    question: "Kan ik gedestilleerd water gebruiken voor koffie?",
    answer:
      "Gedestilleerd water (TDS 0 mg/L) is niet geschikt voor koffie. Het heeft geen mineralen waarmee koffie-aromastoffen kunnen interacteren, wat resulteert in een vlakke, smaakloze koffie. Bovendien is demineraliseerd water corrosief voor metalen koffiemachine-onderdelen. Gebruik altijd water met TDS van minimaal 50 mg/L. Osmosewater na remineralisatie (TDS 80-120 mg/L) is ideaal.",
  },
  {
    question: "Hoe stel ik de TDS in van osmosewater?",
    answer:
      "De meeste osmosesystemen met remineralisatiefilter hebben een instelbare blending-kraan of een verstelbaar remineralisatiefilter. Via een TDS-meter (5-15 euro) meet u het resultaat in real time. Draai de blending-kraan verder open om meer ongefilterd water bij te mengen (hogere TDS) of verder dicht voor lagere TDS. Streef naar TDS 80-120 mg/L voor espresso of 100-150 mg/L voor filterkoffie.",
  },
  {
    question: "Welk filter gebruiken professionele barista's?",
    answer:
      "Professionele barista's en speciality coffeebars gebruiken doorgaans een combinatie van een osmosefilter met nauwkeurig instelbare remineralisatie, of een inline-onthardingspatroon met actief kool voorfase. Systemen zoals BWT, Pentair Everpure en Brita Professional zijn specifiek ontworpen voor koffieapplicaties met NSF-certificering. Thuis is een osmosefilter met remineralisatiefilter de meest flexibele optie voor barista-kwaliteit water.",
  },
];

export default function KoffieTheePage() {
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
            name: "Koffie en thee",
            url: "https://waterfilterplatform.nl/beste-waterfilter/koffie-thee",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Beste waterfilter voor koffie en thee: ideale TDS en waterhardheid",
          description:
            "Voor optimale koffie-extractie is TDS 75-150 mg/L ideaal. Osmose met remineralisatie of een inline-filter: welke aanpak geeft het beste resultaat.",
          datePublished: "2026-05-17",
          url: "https://waterfilterplatform.nl/beste-waterfilter/koffie-thee",
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
            <span>Koffie en thee</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterfilter voor koffie en thee
          </h1>
          <QuickAnswer answer="Voor speciality koffie is TDS 75-150 mg/L en hardheid 2-6 dH ideaal (SCA-richtlijn). Een osmosefilter met remineralisatie geeft de meeste controle; een inline-filter is goedkoper maar minder precies." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Waarom water zo belangrijk is voor koffie
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Koffie bestaat voor 98-99% uit water. De mineralen, ionen en deeltjes in dat water
            bepalen direct de extractie-efficiëntie: hoeveel smaak- en geurstoffen uit de
            koffiebonen worden opgelost. Water is niet een neutraal oplosmiddel — het is een
            actieve deelnemer in het koffiezetproces.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hoge waterhardheid (boven 15-20 dH) zorgt voor kalkaanslag in uw koffiemachine
            en maskeert delicate aroma-noten. Te zachte water (onder 2 dH) extraheert
            onvoldoende en geeft een vlakke, waterige koffie. Chloor in leidingwater heeft
            een directe negatieve invloed op de smaak. TDS (totaal opgeloste deeltjes) is
            de centrale meetwaarde voor koffieschekers.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Wat is de ideale watersamenstelling voor koffie?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Specialty Coffee Association (SCA) heeft richtlijnen gepubliceerd voor ideaal
            koffiewater:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left">Parameter</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">SCA Ideaal</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">SCA Acceptabel bereik</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">TDS (mg/L)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">150 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">75-250 mg/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Hardheid (als CaCO3)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">68 mg/L (~4 dH)</td>
                  <td className="border border-gray-300 px-3 py-2">50-175 mg/L (3-10 dH)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Bicarbonaat (alkaliteit)</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">40 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">40-75 mg/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">pH</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">7,0</td>
                  <td className="border border-gray-300 px-3 py-2">6,5-7,5</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Natrium</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">10 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">max 30 mg/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Chloor</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">0 mg/L</td>
                  <td className="border border-gray-300 px-3 py-2">0 mg/L (geen chloor)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bicarbonaat (alkaliteit) is een onderschatte parameter: het buffert de pH tijdens
            extractie en heeft directe invloed op de zuurheid en bitterheid van de koffie.
            Te veel bicarbonaat (boven 100 mg/L) neutraliseert de gewenste zuren in koffie
            en maskeert fruitige tonen.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Wat is de ideale watersamenstelling voor thee?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Thee profiteert van iets zachter water dan koffie. Hoge hardheid maskeert de
            delicate aroma-noten van lichte theesoorten (groene thee, witte thee) en geeft
            een matte waas op het wateroppervlak (kalkfilm). Aanbevolen TDS voor thee:
            50-120 mg/L, hardheid 2-5 dH.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chloor is ook voor thee een probleem: het tast delicate geur- en smaakstoffen
            aan. Zelfs een eenvoudig actief koolfilter (filterkan) verbetert de theesmaak
            aanzienlijk als uw leidingwater gechloreerd is. Voor speciality thee (Japanse
            gyokuro, Taiwanese oolong) is osmosewater met lichte remineralisatie de
            aanbevolen keuze.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Osmose + remineralisatie: maximale controle
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter verwijdert nagenoeg alle mineralen en geeft water met TDS
            van 5-15 mg/L. Dit is te schoon voor koffie. Remineralisatie — het doseren
            van mineralen na het RO-membraan — corrigeert dit. De meeste moderne
            osmosesystemen worden geleverd met een remineralisatiefilter (calciet of
            koraal-calciumfilter) dat calcium, magnesium en bicarbonaat toevoegt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Via een instelbare blending-kraan kunt u precies instellen welk percentage
            osmosewater wordt gemengd met ongefilterd water, waarmee u de TDS nauwkeurig
            kunt instellen op 80-120 mg/L. Dit is de meest flexibele optie voor
            thuisbarista-gebruik. Meer informatie over osmosefilters vindt u op{" "}
            <Link
              href="/omgekeerde-osmose/kopen"
              className="text-[#005F8A] hover:underline font-medium"
            >
              osmosefilter kopen
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Inline-koolstoffilter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als uw leidingwater al een hardheid heeft van 6-15 dH (veel gebieden in het
            midden en westen van Nederland), is een inline-koolstoffilter een goede en
            goedkopere keuze. Het verwijdert chloor effectief (99%+) en laat de mineralen
            intact die voor extractie nodig zijn.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kosten: 20-60 euro aanschaf voor een inline-filterpatroon of compacte
            onderbouwunit, 20-50 euro per jaar voor vervanging. Geschikt voor wie al
            matig hard water heeft en alleen chloor en geur wil aanpakken. Niet geschikt
            als uw water zeer hard is (boven 18 dH) of als u kalkaanslag in de machine
            wil voorkomen.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Wanneer is een filterkan genoeg?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij stadswater met chloor en matige hardheid (6-12 dH) verbetert een
            Brita-filterkan de koffiesmaak al merkbaar. De ionenwisselaar in de filterpatroon
            vermindert de hardheid deels; het actief kool verwijdert chloor en geur.
            Resultaat: minder kalkaanslag in de machine en frissere smaak.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor dagelijkse filterkoffie of een eenvoudige espressomachine is dit een
            afdoende en goedkope oplossing. Voor serieuze espresso-extractie, speciality
            koffie of professioneel gebruik is een osmosefilter met remineralisatie de
            juiste keuze.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Welk systeem past bij uw situatie?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 px-3 py-2 text-left">Situatie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Aanbeveling</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Kosten/jaar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Dagelijkse koffie, water 6-12 dH</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Filterkan of inline koolfilter</td>
                  <td className="border border-gray-300 px-3 py-2">30-60 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Espresso, water 12-20 dH</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Inline onthardingspatroon + koolfilter</td>
                  <td className="border border-gray-300 px-3 py-2">60-120 euro</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2">Speciality koffie of thee, elk watertype</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Osmose + remineralisatie</td>
                  <td className="border border-gray-300 px-3 py-2">90-180 euro</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2">Horeca / professioneel gebruik</td>
                  <td className="border border-gray-300 px-3 py-2 text-green-700">Professioneel RO-systeem met TDS-controller</td>
                  <td className="border border-gray-300 px-3 py-2">200-500 euro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">
            Veelgestelde vragen over waterfilter voor koffie en thee
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
          <h3 className="font-semibold text-[#003F5C] mb-3">Verwante paginas</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/beste-waterfilter" className="text-[#005F8A] hover:underline">
                Beste waterfilter per situatie: alle woningtypen
              </Link>
            </li>
            <li>
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
                Osmosefilter kopen: vergelijking en advies
              </Link>
            </li>
            <li>
              <Link href="/waterhardheid/effect-op-koffie" className="text-[#005F8A] hover:underline">
                Waterhardheid en koffiesmaak
              </Link>
            </li>
            <li>
              <Link href="/kennisbank/tds-meter-gebruiken" className="text-[#005F8A] hover:underline">
                TDS meten: hoe gebruik je een TDS-meter?
              </Link>
            </li>
            <li>
              <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="text-[#005F8A] hover:underline">
                Kalk en smaak van koffie
              </Link>
            </li>
            <li>
              <Link href="/waterhardheid" className="text-[#005F8A] hover:underline">
                Waterhardheid in uw gemeente
              </Link>
            </li>
          </ul>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool voor koffie-smaak</h3>
              <p className="text-sm text-gray-600">Hoe actief kool chloor en smaakafwijkingen verwijdert voor optimale koffie-extractie.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk verlaagt koffiesmaak</h3>
              <p className="text-sm text-gray-600">Hoe hardheid de espresso-extractie beïnvloedt en welke TDS-waarde barista-baristas adviseren.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
