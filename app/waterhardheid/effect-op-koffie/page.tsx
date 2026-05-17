import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterhardheid en koffie: hoe beinvloedt hardheid de smaak?",
  description:
    "Te hard water maskeert koffiearoma. Ideale TDS 75-150 mg/L (SCA-richtlijn). Welk filter geeft het beste resultaat voor espresso en filterkoffie.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterhardheid/effect-op-koffie" },
  openGraph: {
    title: "Waterhardheid en koffie: hoe beinvloedt hardheid de smaak?",
    description:
      "Te hard water maskeert koffiearoma. Ideale TDS 75-150 mg/L (SCA-richtlijn). Welk filter geeft het beste resultaat voor espresso en filterkoffie.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Welk water gebruiken professionele barista's?",
    answer:
      "Professionele barista's volgen de SCA-richtlijn: TDS 75-175 mg/L, hardheid 50-175 mg/L als CaCO3 (ca. 3-10 dH), bicarbonaat 40-75 mg/L en pH 6,5-8,0. In wedstrijden wordt vaak specifiek water samengesteld: osmosewater aangevuld met precieze hoeveelheden magnesiumsulfaat, natriumchloride en calciumchloride voor optimale extractie en smaak.",
  },
  {
    question: "Hoe stel ik osmosewater in voor espresso?",
    answer:
      "Osmosewater heeft een TDS van 1-20 mg/L, wat te laag is voor goede koffie-extractie. Voeg na de osmosekraan een remineralisatiefilter toe of gebruik remineralisatietabletten. Streef naar een TDS van 75-120 mg/L voor espresso. Een TDS-meter (ca. 10-15 euro) helpt de TDS eenvoudig te monitoren na remineralisatie.",
  },
  {
    question: "Beschadigt hard water mijn koffiemachine?",
    answer:
      "Ja. Hard water (boven 15 dH) bouwt kalk op in het verwarmingselement en de boiler van uw espressomachine. Bij 1 mm kalklaag stijgt het energieverbruik ca. 10-15% en neemt de levensduur van het element af. Professionele machines raken 30-50% sneller buiten gebruik in harde watergebieden zonder waterbehandeling. Descalen verlengt de levensduur, maar is geen volledige oplossing.",
  },
  {
    question: "Wat is de beste TDS voor filterkoffie vs espresso?",
    answer:
      "Voor filterkoffie (pour-over, V60, Chemex) is TDS 100-150 mg/L ideaal voor optimale smaakextractie. Voor espresso is TDS 75-125 mg/L beter: te hoge TDS geeft bittere espresso door over-extractie van bepaalde aroma-componenten. Voor koudezetting (cold brew) werkt licht hoger TDS (120-175 mg/L) goed voor een voller profiel.",
  },
  {
    question: "Kan ik Evian of Spa gebruiken voor koffie?",
    answer:
      "Evian heeft een TDS van ca. 357 mg/L en hardheid van ca. 29 dH, wat te hoog is voor optimale koffie-extractie (de SCA-richtlijn zegt maximum 175 mg/L TDS). Spa Reine heeft TDS ca. 34 mg/L, wat aan de lage kant is maar beter dan Evian. Idealer voor koffie zijn licht geminiraliseerde wateren zoals Volvic (TDS ca. 130 mg/L) of speciaal koffiewater.",
  },
];

export default function EffectOpKoffiePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterhardheid", url: "https://waterfilterplatform.nl/waterhardheid" },
          { name: "Effect op koffie", url: "https://waterfilterplatform.nl/waterhardheid/effect-op-koffie" },
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
            <span>Effect op koffie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid en koffie: hoe beinvloedt hardheid de smaak?
          </h1>
          <QuickAnswer answer="Ideaal koffiewater heeft TDS 75-150 mg/L en hardheid 3-7 dH (SCA-richtlijn). Nederlands hard water (boven 15 dH) maskeert subtiele aroma's. Een osmosefilter met remineralisatie of een inline-koffiefilter geeft de meeste controle." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="waterhardheid" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Waarom water zo belangrijk is voor koffie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Koffie bestaat voor 98-99% uit water. De chemische samenstelling van dat water heeft een
            directe invloed op extractie-efficientie: welke aroma-verbindingen, zuren en bittere stoffen
            worden uit het koffiepoeder geextraheerd en in welke verhouding.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Water met een laag TDS (totale opgeloste stoffen) is agressiever en extraheert meer. Dat kan
            leiden tot over-extractie: een bitter, adstringerend profiel. Water met een hoog TDS is al
            deels verzadigd met opgeloste mineralen en extraheert minder efficient. De koffiesmaak
            wordt vlak, de fijnere zuren en floralen verdwijnen. Bovendien reageert calcium in hard water
            met de organische zuren in koffie, wat een ongewenst kalkachtig mondgevoel geeft.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">De SCA-richtlijn voor koffiewater</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Specialty Coffee Association (SCA) heeft op basis van sensorisch onderzoek richtlijnen
            opgesteld voor ideaal koffiewater:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Parameter</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">SCA-streefwaarde</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">SCA-toegestaan bereik</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["TDS (totale opgeloste stoffen)", "150 mg/L", "75-250 mg/L"],
                  ["Hardheid (als CaCO3)", "68 mg/L (~4 dH)", "17-85 mg/L (1-5 dH)"],
                  ["Bicarbonaat (alkaliteit)", "40 mg/L", "40-75 mg/L"],
                  ["Natrium", "&lt;10 mg/L", "&lt;30 mg/L"],
                  ["pH", "7,0", "6,5-8,0"],
                  ["Kleur", "Kleurloos", "Kleurloos"],
                ].map(([param, streef, bereik], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{param}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200" dangerouslySetInnerHTML={{ __html: streef }} />
                    <td className="px-4 py-3 text-gray-700 border border-gray-200" dangerouslySetInnerHTML={{ __html: bereik }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederlands leidingwater in zachte gebieden (Groningen, Noord-Holland) zit vaak in of nabij
            het SCA-bereik. Hard water (Limburg, Zeeland, boven 15 dH) overschrijdt de hardheidsgrens
            aanzienlijk.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wat doet te hard water met koffie?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Water boven 15 dH (ca. 270 mg/L als CaCO3) heeft merkbare negatieve effecten op koffiesmaak
            en apparaatonderhoud:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Smaak:</strong> Calcium bindt aan bepaalde koffiearoma-verbindingen (chlorogeenzuren) en maskeert delicate zuurheid. Floralen, fruitige noten en subtiele smaaklagen verdwijnen.</li>
            <li><strong>Nasmaak:</strong> Hard water geeft een licht kalkige of metallische nasmaak, met name bij espresso.</li>
            <li><strong>Extractie:</strong> Overmatig bicarbonaat (alkaliteit) buffert de zuren in koffie weg, waardoor de gewenste heldere zuurheid ontbreekt.</li>
            <li><strong>Machine:</strong> Kalk bouwt op in boiler, mondstuk, warmtewisselaar en pompsysteem. Descaling-intervallen worden korter; levensduur espressomachine neemt 30-50% af.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wat doet te zacht water met koffie?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Water met een TDS lager dan 75 mg/L (bijv. puur osmosewater of zeer zacht bronwater) is
            ook suboptimaal:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Waterige, vlakke smaak door over-extractie van bittere verbindingen</li>
            <li>Ontbreken van de "body" die mineralen (magnesium, calcium) bijdragen</li>
            <li>Soms corrosief effect op koperen of roestvrijstalen onderdelen van de machine door ontbreken van bicarbonaat als buffer</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Puur osmosewater (TDS &lt;10 mg/L) zonder remineralisatie is om die reden niet geschikt voor
            directe koffiezetting.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Oplossingen per situatie</h2>
          <div className="space-y-4 mb-4">
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Hard water (&gt;15 dH): inline koffiefilter of osmose + remineralisatie</h3>
              <p className="text-sm text-gray-700 mb-2">Een inline koffiefilter (zoals BWT Bestmax of Everpure H-300) verlaagt de hardheid naar 3-6 dH en buffert de alkaliteit. Dit is de eenvoudigste oplossing voor espressomachines. Een osmosefilter met remineralisatiemodule geeft de meeste controle over TDS en samenstelling.</p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Matig hard (8-15 dH): inline koolstoffilter</h3>
              <p className="text-sm text-gray-700 mb-2">Een actief-koolfilter verwijdert chloor en verbetert de smaak. De hardheid is al deels acceptabel voor de SCA-richtlijn. Bij de bovengrens (15 dH) is een inline koffiefilter wenselijk voor optimale resultaten en machinebescherming.</p>
            </div>
            <div className="border border-[#005F8A]/20 rounded-xl p-5 bg-[#E0F2FE]/30">
              <h3 className="font-semibold text-[#005F8A] mb-2">Zacht water (&lt;8 dH): mineralen toevoegen voor betere extractie</h3>
              <p className="text-sm text-gray-700 mb-2">Zacht water kan worden verrijkt met kleine hoeveelheden magnesiumsulfaat (voor extractie-efficientie) en calciumchloride (voor body en stevigheid). Dit is de aanpak van professionele barista's en derde-golf koffiezaken.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Specifiek voor espressomachines</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Espressomachines werken met hoge temperaturen (90-96 graden) en hoge druk (9 bar), waardoor
            kalkafzetting versneld optreedt. Professionele machines voor horeca volgen DIN 10516 (de
            Duitse norm voor koffiewater) die vergelijkbare parameters hanteert als de SCA-richtlijn.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Praktische richtlijnen voor espressomachines:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Descaling-interval: elke 200-300 liter water bij hard water (&gt;15 dH), elke 600-1000 liter bij behandeld water</li>
            <li>Gebruik een koffie-specifiek inline-filter als uw machine geen ingebouwde waterontharder heeft</li>
            <li>Meet de TDS na filterbehandeling: streef naar 75-120 mg/L voor espresso</li>
            <li>Vervang het inline-filter op basis van volume (bijv. elke 600 liter) of hardheid-stijging, niet alleen op tijd</li>
          </ul>
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
              { label: "Beste waterfilter koffie en thee", href: "/beste-waterfilter/koffie-thee" },
              { label: "Osmose remineralisatie", href: "/omgekeerde-osmose/remineralisatie" },
              { label: "Per provincie", href: "/waterhardheid/per-provincie" },
              { label: "Actief kool", href: "/filtertechnieken/actief-kool" },
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

        <div className="mt-10">
          <CTABanner context="waterhardheid" />
        </div>
      </div>
    </>
  );
}
