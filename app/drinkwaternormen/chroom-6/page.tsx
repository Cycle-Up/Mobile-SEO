import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Chroom-6 norm drinkwater: EU 25 ug/L vs WHO 0,05 ug/L — groot verschil",
  description:
    "Chroom-6 norm in drinkwater: EU stelt 25 ug/L voor totaal chroom, WHO adviseert 0,05 ug/L voor chroom-6. Osmose verwijdert 95-99%. NL situatie en.",
  alternates: { canonical: "https://waterfilterplatform.nl/drinkwaternormen/chroom-6" },
};

const faqItems = [
  {
    question: "Wat is chroom-6 en waarom is het gevaarlijk?",
    answer:
      "Chroom-6 (hexavalent chroom, Cr(VI)) is een van de twee hoofdoxidatietoestanden van het element chroom. In tegenstelling tot chroom-3 (trivalent chroom), dat een essentieel sporenelement is, is chroom-6 een sterke oxidator en toxische stof. Het IARC heeft chroom-6 in groep 1 ingedeeld: vastgesteld carcinogeen bij mensen. Blootstelling via inademing veroorzaakt longkanker; de routes via de huid en via drinkwater zijn minder goed onderzocht maar ook zorgwekkend. Chroom-6 dringt cel- en DNA-structuren binnen en veroorzaakt oxidatieve schade.",
  },
  {
    question: "Wat is het verschil tussen chroom-3 en chroom-6?",
    answer:
      "Chroom-3 (Cr(III)) is een essentieel sporenelement dat de menselijke stofwisseling ondersteunt en in zeer lage concentraties noodzakelijk is. Het is relatief onschadelijk en weinig oplosbaar in water. Chroom-6 (Cr(VI)) is een sterke oxidator, goed oplosbaar in water, en kan celwanden gemakkelijk passeren. In het lichaam wordt chroom-6 omgezet in chroom-3, waarbij reactieve tussenproducten worden gevormd die DNA kunnen beschadigen. Dit verschil in chemisch gedrag verklaart waarom de twee vormen zo anders worden beoordeeld in risicoprofielen.",
  },
  {
    question: "Wat is de EU-norm voor chroom in drinkwater?",
    answer:
      "De EU-drinkwaterrichtlijn 2020/2184 stelt een norm van 25 microgram per liter (ug/L) voor TOTAAL chroom in drinkwater. Belangrijk: deze norm maakt geen onderscheid tussen chroom-3 en chroom-6. Er bestaat geen aparte EU-norm specifiek voor chroom-6. De norm van 25 ug/L voor totaal chroom vervangt de eerdere norm van 50 ug/L uit de richtlijn van 1998. Dit is een politiek en technisch compromis dat rekening houdt met de meetbaarheid en haalbaarheid voor waterbedrijven in alle EU-lidstaten.",
  },
  {
    question: "Wat adviseert de WHO voor chroom-6 in drinkwater?",
    answer:
      "De WHO-drinkwaterrichtlijnen adviseren een guideline value van 0,05 microgram per liter (ug/L) specifiek voor chroom-6. Dit is een factor 500 strenger dan de EU-norm van 25 ug/L voor totaal chroom. De WHO-waarde is gebaseerd op een kankerrisicoschatting: bij 0,05 ug/L chroom-6 wordt het extra levenslange kankerrisico geschat op 1 per 100.000. De WHO erkent dat dit nog steeds een kleine residueel risico inhoudt; lager is altijd beter.",
  },
  {
    question: "Waarom is er zo'n groot verschil tussen de EU-norm en de WHO-grenswaarde?",
    answer:
      "Het verschil heeft meerdere oorzaken. Ten eerste: de EU-norm betreft totaal chroom (inclusief het veel minder schadelijke chroom-3), terwijl de WHO-waarde specifiek is voor chroom-6. Ten tweede: de EU-norm is een politiek compromis dat haalbaarheid voor alle lidstaten weegt; de WHO-waarde is puur op gezondheidskundige gronden bepaald. Ten derde: bij de norm voor totaal chroom is de aanname dat een deel ervan chroom-3 is. Als al het chroom in de praktijk chroom-6 zou zijn, is de effectieve bescherming van de EU-norm aanzienlijk minder streng dan de WHO-aanbeveling.",
  },
  {
    question: "Is kraanwater in Nederland veilig wat betreft chroom-6?",
    answer:
      "Ja, in de normale situatie voldoet Nederlands kraanwater ruimschoots aan de EU-norm van 25 ug/L voor totaal chroom. Waterbedrijven meten chroom als onderdeel van de standaard drinkwatermonitoring. Overschrijdingen van de wettelijke norm zijn zeldzaam. De chroom-6 concentraties in Nederlands kraanwater liggen doorgaans ver onder 1 ug/L, wat ook de WHO-drempelwaarde van 0,05 ug/L dichterbij legt dan de EU-norm suggereert. Wel kan er lokaal verhoogde chroom-6 aanwezig zijn bij industriele bronnen of gedempte sloten in vervuilde gebieden.",
  },
  {
    question: "Wat heeft de Tilburg-chroom-6-zaak te maken met drinkwater?",
    answer:
      "Vrijwel niets. De Tilburg-zaak betrof beroepsmatige blootstelling via inademing en huidcontact bij defensiemedewerkers die werkten met chroom-6-houdende verf op materieel bij de Defensie Helikopter Bedrijven. Dit is een fundamenteel ander risicoprofiel dan drinkwaterblootstelling: de concentraties via beroepsmatige inademing zijn vele malen hoger, de blootstellingsduur is langdurig en de route via de luchtwegen is biologisch veel effectiever voor chroom-6 dan de route via het maag-darmkanaal. Het Tilburg-chroom-6-schandaal zegt dan ook niets over de veiligheid van drinkwater.",
  },
  {
    question: "Hoe meet je chroom-6 in drinkwater?",
    answer:
      "Chroom-6 wordt gemeten via spectrometrische methoden, waaronder IC-ICP-MS (ionenchromatografie gecombineerd met massaspectrometrie) die onderscheid kan maken tussen chroom-3 en chroom-6. De standaard drinkwateranalyse meet vaak totaal chroom; een speciatieanalyse is nodig voor chroom-6 specifiek. Gecertificeerde laboratoria zoals SGS, Eurofins en Kiwa Water Research voeren dit uit. Kosten voor een chroom-6-specifieke watertest liggen tussen EUR 30 en EUR 80. Voor consumenten die een test willen laten uitvoeren: zorg voor een schone PET-fles en tap het water na 5 minuten doorspoelen.",
  },
  {
    question: "Verwijdert een osmosefilter chroom-6?",
    answer:
      "Ja, zeer effectief. NSF/ANSI 58-gecertificeerde osmosefilters verwijderen 95-99% van chroom-6. Het osmosemembraan (0,0001 micrometer) houdt geladen ionen zoals chromaat (CrO4(2-)) en dichromaat tegen. Dit is de meest betrouwbare filtermethode voor chroom-6 verwijdering thuis. Ionenwisseling met een specifiek anionenwisselaar is ook effectief maar lastiger te onderhouden. Een standaard koolstoffilter of waterfilterkan verwijdert geen chroom-6.",
  },
  {
    question: "Helpt ionenwisseling voor chroom-6?",
    answer:
      "Een specifieke anionenwisselaar kan chroom-6 verwijderen (chroom-6 bestaat als chromaat-anion, CrO4(2-)). Sterk basische anionenwisselaars zijn effectief, maar vereisen regelmatig regenereren of vervangen. In de praktijk wordt osmose als eenvoudiger en betrouwbaarder beschouwd voor thuisgebruik. Ionenwisseling wordt meer toegepast in industriele en gemeentelijke waterzuivering.",
  },
  {
    question: "Is er extra risico voor baby's en kinderen bij chroom-6 in drinkwater?",
    answer:
      "Bij de concentraties die in Nederlands drinkwater worden gemeten (ver onder 1 ug/L), is het extra risico voor baby's en kinderen klein. Kinderen zijn per kilogram lichaamsgewicht wel gevoeliger voor toxische stoffen in het algemeen, en de WHO beveelt aan om de blootstelling zo laag mogelijk te houden. Voor babyvoeding met osmosewater is het chroom-6-risico vrijwel nihil: osmose verwijdert 95-99% van chroom-6.",
  },
  {
    question: "Komen er strengere normen voor chroom-6 in de EU?",
    answer:
      "Er zijn discussies in de EU over specifieke normen voor chroom-6 als apart onderdeel, los van totaal chroom. De EU-drinkwaterrichtlijn 2020/2184 bevat een reviewmechanisme waarbij normen kunnen worden aangescherpt op basis van nieuwe wetenschappelijke inzichten. De druk vanuit het Europees Parlement en milieuorganisaties om een specifieke chroom-6-norm te introduceren die dichter bij de WHO-waarde van 0,05 ug/L ligt, neemt toe. Wanneer dit tot regelgeving leidt, is op dit moment (2026) niet duidelijk.",
  },
];

export default function Chroom6NormPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "Chroom-6", url: "https://waterfilterplatform.nl/drinkwaternormen/chroom-6" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Chroom-6 norm drinkwater: EU 25 ug/L vs WHO 0,05 ug/L — groot verschil",
          description:
            "Chroom-6 norm in drinkwater: EU stelt 25 ug/L voor totaal chroom, WHO adviseert 0,05 ug/L voor chroom-6. Osmose verwijdert 95-99%. NL situatie en.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/chroom-6",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Chroom-6</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Chroom-6 norm drinkwater: EU 25 ug/L vs WHO 0,05 ug/L
          </h1>
          <QuickAnswer answer="De EU-drinkwaterrichtlijn stelt een norm van 25 ug/L voor TOTAAL chroom, niet specifiek voor chroom-6. De WHO adviseert 0,05 ug/L voor chroom-6 afzonderlijk. Dit is een factor 500 verschil. Nederlands kraanwater zit doorgaans ruim onder 1 ug/L totaal chroom. Osmosefilters verwijderen 95-99% van chroom-6 en bieden de beste thuisbescherming." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Chroom-3 versus chroom-6: een fundamenteel verschil
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chroom (Cr) is een overgangsmetaal dat in de natuur voorkomt in meerdere
            oxidatietoestanden. In water zijn er twee hoofdvormen relevant:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-green-200 rounded-xl p-4 bg-green-50">
              <h3 className="font-bold text-[#003F5C] mb-2">Chroom-3 (Cr(III))</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Essentieel sporenelement voor stofwisseling</li>
                <li>Weinig oplosbaar in water bij neutrale pH</li>
                <li>Moeilijk opneembaar door celwanden</li>
                <li>Laag toxisch bij lage concentraties</li>
                <li>IARC-classificatie: Groep 3 (niet ingedeeld)</li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-xl p-4 bg-red-50">
              <h3 className="font-bold text-[#003F5C] mb-2">Chroom-6 (Cr(VI))</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Sterke oxidator, schadelijk</li>
                <li>Goed oplosbaar in water als chromaat (CrO4(2-))</li>
                <li>Passeert gemakkelijk celwanden</li>
                <li>IARC Groep 1: vastgesteld carcinogeen bij mensen</li>
                <li>Veroorzaakt DNA-schade via reactieve tussenproducten</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            De toxicologische kennis over chroom-6 is grotendeels gebaseerd op beroepsmatige
            blootstelling via inademing bij industriele toepassingen (chroomlegering, verf,
            leer). Het IARC heeft chroom-6-verbindingen in 1990 ingedeeld als groep 1:
            vastgesteld carcinogeen bij mensen, met longkanker als het best gedocumenteerde
            effect. Blootstelling via drinkwater is minder uitgebreid onderzocht, maar
            epidemiologische studies in gebieden met verhoogde chroom-6-concentraties in
            grondwater (bijv. Californie) tonen ook een verhoogd risico.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            De normendiscrepantie: EU vs WHO
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meest verwarrende kant van chroom-6 in drinkwater is het verschil tussen
            de wettelijke EU-norm en de WHO-aanbeveling. Dit zijn twee fundamenteel
            andere grootheden:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Norm</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Waarde</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Scope</th>
                  <th className="border border-gray-300 px-3 py-2 text-center">Bron</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">EU-drinkwaterrichtlijn 2020/2184</td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-bold text-yellow-700">25 ug/L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Totaal chroom (Cr(III) + Cr(VI))</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Wettelijke norm EU</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">WHO Drinking-water Guidelines</td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-bold text-red-700">0,05 ug/L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Chroom-6 specifiek (Cr(VI))</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Gezondheidskundige aanbeveling</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Nederland: Drinkwaterbesluit</td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-bold text-yellow-700">25 ug/L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Totaal chroom (volgt EU)</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Wettelijke norm NL</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">Nederland: gemeten praktijkwaarden</td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-bold text-green-700">&lt;1 ug/L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">Totaal chroom in kraanwater</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">RIVM-monitoring</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het verschil van een factor 500 tussen de EU-norm en de WHO-aanbeveling
            is het gevolg van een politiek en technisch compromis. De EU-norm is
            gebaseerd op totaal chroom (waarbij een groot deel chroom-3 kan zijn, een
            stof die vrijwel onschadelijk is). De WHO-waarde is specifiek gebaseerd
            op de kankerrisicoschatting voor chroom-6. Als de volledige hoeveelheid
            chroom in drinkwater zou bestaan uit chroom-6, dan is de EU-norm van 25 ug/L
            vijfhonderd keer te hoog om aan de WHO-aanbeveling te voldoen. In de praktijk
            bestaat slechts een fractie van het chroom in drinkwater uit chroom-6; de
            rest is het minder schadelijke chroom-3.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Situatie in Nederland: Drinkwaterbesluit en monitoring
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het Nederlandse Drinkwaterbesluit volgt de EU-richtlijn en stelt de norm
            voor totaal chroom op 25 ug/L. Waterbedrijven meten chroom als onderdeel
            van de verplichte drinkwatermonitoring. Overschrijdingen van de wettelijke
            norm zijn in Nederland zeldzaam. De gemeten concentraties totaal chroom in
            het Nederlandse distributiewater liggen doorgaans onder 1 ug/L, en specifieke
            chroom-6-metingen liggen in de meeste gevallen ruim onder de WHO-aanbeveling
            van 0,05 ug/L.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er kunnen lokale uitzonderingen zijn: nabij voormalige industrieterreinen,
            gedempte sloten met industrieel afval, of in gebieden met van nature
            chroominig gesteente. In die situaties kan de chroom-6-concentratie hoger
            zijn. De Inspectie Leefomgeving en Transport (ILT) handhaaft de naleving
            van het Drinkwaterbesluit. Meer context over de Nederlandse normenstructuur
            vindt u op de pagina{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              drinkwaternormen overzicht
            </Link>{" "}
            en{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-drinkwaterrichtlijn 2020/2184
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Gezondheidsrisico bij de huidige drinkwaternormen
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij de EU-norm van 25 ug/L totaal chroom is het gezondheidsrisico bij
            normale drinkwaterblootstelling (2 liter per dag gedurende 70 jaar) laag,
            maar niet verwaarloosbaar als het om puur chroom-6 zou gaan. De WHO schat
            bij 0,05 ug/L chroom-6 een levenslang extra kankerrisico van 1 per 100.000.
            Bij de EU-norm (als alle chroom chroom-6 zou zijn) zou dit risico 500 keer
            hoger liggen. In de praktijk is chroom-6 in Nederlands drinkwater zo laag
            dat het berekende risico vergelijkbaar is met of lager dan het WHO-streefniveau.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
            Chroom-6 filteren: osmose als meest aanbevolen oplossing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor wie extra zekerheid wil, zijn er effectieve filteropties:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
            <li>
              <strong>Omgekeerde osmose (RO):</strong> NSF/ANSI 58-gecertificeerde systemen
              verwijderen 95-99% van chroom-6. Chromaat-ionen (CrO4(2-)) worden door het
              osmosemembraan tegengehouden. Dit is de meest robuuste thuisoplossing.
            </li>
            <li>
              <strong>Sterk basische anionenwisselaar:</strong> Effectief voor chroom-6
              verwijdering, maar vereist regelmatige regeneratie en technische kennis.
              Meer geschikt voor waterbehandeling op grotere schaal.
            </li>
            <li>
              <strong>Koolstoffilter:</strong> Niet effectief voor chroom-6. Een
              standaard GAC- of koolstofblokfilter houdt geen chromiaten tegen.
            </li>
            <li>
              <strong>Waterfilterkan:</strong> Niet effectief voor chroom-6.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer informatie over het filteren van zware metalen en chroom vindt u op
            de pagina{" "}
            <Link href="/waterfilter/chroom" className="text-[#005F8A] hover:underline font-medium">
              waterfilter voor chroom
            </Link>{" "}
            en{" "}
            <Link href="/leidingwater/chroom-6" className="text-[#005F8A] hover:underline font-medium">
              chroom-6 in leidingwater
            </Link>. Bekijk ook ons overzicht van{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilters kopen
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
