import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Cryptosporidium in water: chloorresistente parasiet en filter",
  description:
    "Cryptosporidium is chloorresistent en overleeft in leidingwater. Osmosefilter en UV verwijderen 99,99%. Symptomen, besmettingsbronnen en filteradvies.",
  alternates: { canonical: "https://waterfilterplatform.nl/waterfilter/cryptosporidium" },
  openGraph: {
    title: "Cryptosporidium in water: chloorresistente parasiet en filter",
    description:
      "Cryptosporidium is chloorresistent en overleeft in leidingwater. Osmosefilter en UV verwijderen 99,99%. Symptomen, besmettingsbronnen en filteradvies.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat is Cryptosporidium en hoe kom je ermee in aanraking via water?",
    answer:
      "Cryptosporidium is een eencellige parasiet (protozoa) die als oocyst in water overleeft. Oocysten zijn de infectieuze vorm: een dikwandige spore van 4-6 micron die de darm van zoogdieren kan infecteren. Besmetting via water treedt op als oocysten uit fecale verontreiniging (dieren of mensen) in het drinkwater terechtkomen en niet afdoende worden verwijderd.",
  },
  {
    question: "Waarom werkt chloor niet tegen Cryptosporidium?",
    answer:
      "De dikke celwand van de Cryptosporidium-oocyst maakt het bijzonder resistent tegen chloordesinfectie. Terwijl gewone bacterien bij lage chloorconcentraties (0,5 mg/l) snel worden geinactiveerd, vereist Cryptosporidium CT-waarden (chloorconcentratie x contacttijd) die in de praktijk niet haalbaar zijn in drinkwaterzuivering. Zelfs bij 80 mg/l chloor gedurende 90 minuten is de inactivatie nog onvolledig.",
  },
  {
    question: "Wat zijn de symptomen van cryptosporidiose?",
    answer:
      "Cryptosporidiose veroorzaakt waterige diarree, buikkrampen, misselijkheid en soms koorts. Symptomen beginnen 2-10 dagen na besmetting en duren gewoonlijk 1-2 weken bij gezonde mensen. Bij immuungecompromitteerden (HIV-patienten, transplantatiepatienten, chemotherapie) kan de infectie ernstig, chronisch en levensgevaarlijk zijn. Er bestaat geen specifiek medicijn; behandeling is ondersteunend.",
  },
  {
    question: "Verwijdert een osmosefilter Cryptosporidium?",
    answer:
      "Ja, een osmosefilter verwijdert Cryptosporidium volledig. De membraanporieen van een osmosefilter zijn 0,0001 micron groot; de Cryptosporidium-oocyst is 4-6 micron. Dit is een grootteverschil van factor 40.000 tot 60.000. Elke oocyst die het membraan wil passeren wordt fysiek geblokkeerd, ongeacht zijn chloorresistentie.",
  },
  {
    question: "Werkt UV-sterilisatie tegen Cryptosporidium?",
    answer:
      "Ja, UV-sterilisatie (klasse NSF 55 Class A, minimaal 40 mJ/cm2) inactiveert Cryptosporidium effectief door DNA-schade te veroorzaken waardoor de parasiet zich niet meer kan vermenigvuldigen. UV is juist effectiever dan chloor bij protozoa. Belangrijk: UV steriliseert, het filtert niet. De oocysten blijven aanwezig maar zijn inactief. Combineer UV idealiter met een fijnfilter.",
  },
  {
    question: "Is er een risico op Cryptosporidium in Nederlands leidingwater?",
    answer:
      "Het risico is laag maar niet nul. Nederlandse waterbedrijven die oppervlaktewater gebruiken (zoals de Maas of de Rijn) passen standaard UV-behandeling toe, wat Cryptosporidium inactiveert. Grondwaterbronnen zijn van nature beter beschermd. Het risico is hoger na overstromingen, bij oudere leidingen, en bij gebruik van put- of bronwater dat niet behandeld is.",
  },
  {
    question: "Wat is het verschil tussen Cryptosporidium en Giardia?",
    answer:
      "Beide zijn protozoa (eencellige parasieten) die watergebonden ziekten veroorzaken en beide zijn chloorresistent. Giardia-cysten zijn groter (8-12 micron) dan Cryptosporidium-oocysten (4-6 micron). Giardia is iets gevoeliger voor hogere chloorconcentraties dan Cryptosporidium. Beide worden effectief verwijderd door osmosefiltratie en UV-sterilisatie. Giardia veroorzaakt ook diarree maar heeft soms een langere incubatietijd.",
  },
  {
    question: "Welk filter moet ik kopen voor Cryptosporidium?",
    answer:
      "Voor optimale bescherming tegen Cryptosporidium zijn er drie effectieve opties: (1) een omgekeerde osmose filter (verwijdert 100% fysiek), (2) een UV-sterilisator (NSF 55 Class A, 40 mJ/cm2 of meer), of (3) een holle vezelfilter met 0,1-0,2 micron poriegrote. Koolfilters en chloorbehandeling zijn NIET effectief. Voor risicogroepen (immuungecompromitteerden, zwangere vrouwen, baby's) wordt een osmosefilter aanbevolen als de meest betrouwbare barriere.",
  },
];

export default function CryptosporidiumPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Waterfilter", url: "https://waterfilterplatform.nl/waterfilter" },
          { name: "Cryptosporidium", url: "https://waterfilterplatform.nl/waterfilter/cryptosporidium" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Cryptosporidium in water: chloorresistentie en effectieve filters",
          description:
            "Cryptosporidium is chloorresistent en overleeft in leidingwater. Osmosefilter en UV verwijderen 99,99%. Symptomen, besmettingsbronnen en filteradvies.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/waterfilter/cryptosporidium",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:underline">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Cryptosporidium</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Cryptosporidium in water: chloorresistentie en effectieve filters
          </h1>
          <QuickAnswer answer="Cryptosporidium is een parasitaire protozoa die bestand is tegen standaard chloordesinfectie in drinkwater. UV-sterilisatie en osmosefiltratie (0,0001 micron poriegrote) verwijderen 99,99% van Cryptosporidium. In Nederland is het risico laag door UV-behandeling bij oppervlaktewater." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Wat is Cryptosporidium?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cryptosporidium is een parasitaire protozoa (eencellig organisme) dat de darmen van zoogdieren
            kan infecteren. De infectieuze vorm is de oocyst: een dikwandige, bolronde structuur van
            4 tot 6 micron doorsnede. Ter vergelijking: een menselijk haar is 50-70 micron dik, dus een
            oocyst is ruwweg tien keer kleiner dan een haar en onzichtbaar voor het blote oog.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De dikke celwand is de sleutel tot het overlevingssucces van Cryptosporidium. Deze wand beschermt
            de parasiet tegen chemische desinfectie, temperatuurschommelingen en UV-straling tot op zekere
            hoogte. Oocysten kunnen weken tot maanden overleven in koud, voedselarm water. Dit maakt ze tot
            een bijzonder hardnekkige waterborne pathogeen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meest voorkomende soort in drinkwaterbronnen is <em>Cryptosporidium parvum</em>, die zowel
            mensen als jonge kalveren infecteert. Runderen zijn een belangrijke reservoir: kalveren scheiden
            grote hoeveelheden oocysten uit die via de mest in oppervlaktewater kunnen terechtkomen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Chloorresistentie: waarom standaard ontsmetting faalt
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chloor is wereldwijd de meest gebruikte desinfectiemethode voor drinkwater. Het werkt uitstekend
            tegen bacterien en de meeste virussen. Maar tegen Cryptosporidium schiet het tekort.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De effectiviteit van chloor wordt uitgedrukt als CT-waarde: de chloorconcentratie in mg/l
            vermenigvuldigd met de contacttijd in minuten. Voor een 99% inactivatie van E. coli is een
            CT-waarde van 0,04 voldoende. Voor 99% inactivatie van Cryptosporidium oocysten bij 15 graden
            Celsius is een CT-waarde van meer dan 7200 nodig (90 mg/l gedurende 80 minuten). Dit is in
            de drinkwaterpraktijk volstrekt onhaalbaar en onwenselijk vanwege de toxiciteit van zulke
            hoge chloorconcentraties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vergelijking met Giardia: Giardia-cysten zijn ook chloorresistent, maar minder dan Cryptosporidium.
            Voor 99% inactivatie van Giardia is een CT-waarde van 65 nodig bij 15 graden. Giardia is dus
            ruwweg 100 keer gevoeliger voor chloor dan Cryptosporidium, maar ook Giardia ontkomt aan
            standaard chloorbehandeling in drinkwaterinstallaties.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Ziekteverschijnselen: cryptosporidiose
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als iemand geinfecteerde oocysten inslikt (via water, voedsel of direct contact), komen de
            oocysten vrij in de dunne darm en beginnen ze de darmwand te infecteren. Dit leidt tot
            cryptosporidiose, met als voornaamste klachten:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Waterige, explosieve diarree (tot 20 keer per dag in ernstige gevallen)</li>
            <li>Ernstige buikkrampen en pijn</li>
            <li>Misselijkheid en braken</li>
            <li>Lichte koorts (38-39 graden)</li>
            <li>Gewichtsverlies bij langdurige infectie</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij gezonde volwassenen duurt de ziekte 1 tot 2 weken en herstelt het lichaam spontaan.
            Er is geen specifiek antiparasitair medicijn dat bij alle patienten effectief is.
            Bij immuungecompromitteerden (HIV-patienten met lage CD4-cellen, orgaantransplantatiepatienten,
            mensen die chemotherapie ondergaan) kan cryptosporidiose chronisch, ernstig en zelfs fataal zijn.
            Voor deze groep is extra bescherming via waterfiltratie dan ook essentieel.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Besmettingsbronnen en risicomomenten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cryptosporidium bereikt drinkwaterbronnen via verschillende routes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Oppervlaktewater:</strong> Regenwaterafvoer van weilanden met rundvee spoelt
              oocysten de rivieren in. Rivieren zoals de Maas en Rijn bevatten detecteerbare hoeveelheden
              Cryptosporidium, al zijn de concentraties in Nederland over het algemeen laag.
            </li>
            <li>
              <strong>Zwembaden:</strong> Zwembaden die onvoldoende worden behandeld of na een incident
              met fecaal materiaal zijn een bekende besmettingsbron, ook in Nederland.
            </li>
            <li>
              <strong>Boerderijcontact:</strong> Direct contact met kalveren of hun omgeving is een
              significant risico, met name voor kleine kinderen.
            </li>
            <li>
              <strong>Putwater en bronwater:</strong> Ongefilterd put- of bronwater in gebieden met
              intensieve veehouderij kan verhoogde concentraties bevatten.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Nederland is het risico voor gebruikers van leidingwater laag. Alle waterbedrijven die
            oppervlaktewater verwerken, passen UV-behandeling toe als standaard barriere. Na overstromingen
            of bij extreme neerslag kan het risico tijdelijk stijgen als overstromingswater in de
            leidingwaterinstallatie terechtkomt.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Effectieve filtermethoden vergeleken
          </h2>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Osmosefilter (aanbevolen)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              omgekeerde osmose filter
            </Link>{" "}
            biedt de meest betrouwbare fysieke barriere tegen Cryptosporidium. De membraanporieen zijn
            0,0001 micron (0,1 nanometer) groot. De Cryptosporidium-oocyst is 4.000 tot 6.000 nanometer
            groot. Dit is een grootteverschil van factor 40.000 tot 60.000. Geen enkele oocyst kan
            fysiek door het membraan passeren, ongeacht chloorresistentie of andere eigenschappen.
            Een goed functionerend osmosefilter verwijdert 99,99% of meer van Cryptosporidium.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">UV-sterilisatie</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            UV-sterilisatie bij een dosis van minimaal 40 mJ/cm2 (klasse NSF 55 Class A) inactiveert
            Cryptosporidium effectief. UV-licht beschadigt het DNA van de oocyst waardoor deze zich niet
            meer kan vermenigvuldigen in de gastheer. Let op: UV steriliseert maar filtert niet.
            De oocysten blijven aanwezig in het water maar zijn biologisch inactief. Voor maximale
            zekerheid combineert u UV met een sediment- of holle vezelfilter als voorfilter.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer informatie over UV-sterilisatie en de juiste keuze van systemen vindt u op onze pagina
            over{" "}
            <Link href="/waterfilter/uv-sterilisatie" className="text-[#005F8A] hover:underline font-medium">
              UV-sterilisatie waterfilters
            </Link>.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Holle vezelfilter</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Holle vezelfilters met een poriegrote van 0,1-0,2 micron zijn eveneens effectief. De
            Cryptosporidium-oocyst (4-6 micron) is tien tot veertig keer groter dan de membraanporieen
            en kan er niet doorheen passeren. Holle vezelfilters zijn een goedkoper alternatief voor
            osmose als het specifiek gaat om microbiologische bescherming, maar ze verwijderen geen
            opgeloste stoffen zoals PFAS, nitraten of zware metalen.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">Niet-effectieve methoden</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            De volgende methoden beschermen NIET afdoende tegen Cryptosporidium:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Koolstoffilters (actief kool):</strong> Verwijderen chloor, organische stoffen en smaak, maar geen protozoa. De poriegrote van actief kool is te groot voor fysieke blokkade van oocysten.</li>
            <li><strong>Chloorbehandeling:</strong> Zoals hierboven beschreven volledig ineffectief bij praktische concentraties.</li>
            <li><strong>Waterfilterkan:</strong> Koolstofpatroon, geen bescherming tegen microorganismen.</li>
            <li><strong>Koken:</strong> Effectief (oocysten gaan dood bij 70 graden), maar alleen bruikbaar voor drinkwater, niet als permanent filtersysteem.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Vergelijkingstabel filtermethoden
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Methode</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Effectief vs Crypto</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Effectief vs Giardia</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold text-[#003F5C]">Verwijdert PFAS/metalen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Osmosefilter</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja (99,99%+)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja (99,99%+)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">UV (NSF 55 Class A)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja (inactivatie)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja (inactivatie)</td>
                  <td className="border border-gray-300 p-3 text-red-600">Nee</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Holle vezelfilter (0,1 micron)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja (fysiek)</td>
                  <td className="border border-gray-300 p-3 text-green-700">Ja (fysiek)</td>
                  <td className="border border-gray-300 p-3 text-red-600">Nee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-medium">Koolstoffilter</td>
                  <td className="border border-gray-300 p-3 text-red-600">Nee</td>
                  <td className="border border-gray-300 p-3 text-red-600">Nee</td>
                  <td className="border border-gray-300 p-3 text-orange-600">Deels</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Chloor</td>
                  <td className="border border-gray-300 p-3 text-red-600">Nee</td>
                  <td className="border border-gray-300 p-3 text-red-600">Nee (praktisch)</td>
                  <td className="border border-gray-300 p-3 text-red-600">Nee</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Advies voor risicogroepen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor immuungecompromitteerden, zwangere vrouwen en baby's is extra bescherming sterk aan te
            raden, ook in Nederland. Het risico is weliswaar laag, maar de gevolgen van een infectie
            kunnen ernstig zijn. Aanbevelingen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Installeer een osmosefilter als drinkwaterpunt in de keuken.</li>
            <li>Vermijd zwemmen in sloten, meren of zwembaden waarvan de waterbehandeling onduidelijk is.</li>
            <li>Vermijd contact met kalveren of geiten als u immuungecompromitteerd bent.</li>
            <li>Gebruik bij twijfel over leidingwaterkwaliteit (bijv. na overstromingen) gefilterd of gekookt water.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer over waterfilters voor alle verontreinigingen vindt u op onze{" "}
            <Link href="/waterfilter" className="text-[#005F8A] hover:underline font-medium">
              waterfilter overzichtspagina
            </Link>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
