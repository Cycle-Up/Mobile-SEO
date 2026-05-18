import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Medicijnresten in drinkwater: meting, normen en filtermogelijkheden",
  description:
    "Medicijnresten in drinkwater: ibuprofen, hormonen en antibiotica in oppervlaktewater. Er zijn geen wettelijke normen. Osmose verwijdert 90-99%.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/drinkwaternormen/medicijnresten",
  },
  openGraph: {
    title: "Medicijnresten in drinkwater: meting, normen en filtermogelijkheden",
    description:
      "Medicijnresten in drinkwater: ibuprofen, hormonen en antibiotica in oppervlaktewater. Er zijn geen wettelijke normen. Osmose verwijdert 90-99%.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Zitten er medicijnresten in Nederlands drinkwater?",
    answer:
      "In oppervlaktewater (Maas, Rijn, Lek) worden medicijnresten regelmatig aangetroffen in meetbare concentraties. Na de zuivering door waterbedrijven zijn concentraties in drinkwater doorgaans ver onder detectielimieten of onder internationale richtwaarden. Het RIVM monitort dit actief via het drinkwatermeetnet. Acute gezondheidsrisicos zijn bij huidige niveaus niet aangetoond.",
  },
  {
    question: "Welke medicijnresten worden het meest gevonden in oppervlaktewater?",
    answer:
      "De meest voorkomende zijn NSAID-pijnstillers (ibuprofen, diclofenac, naproxen), hormonen uit anticonceptie (ethinylestradiol, estriol), antidepressiva (fluoxetine, sertraline), betablockers (metoprolol, atenolol), antibiotica (amoxicilline, trimethoprim) en diabetesmedicijnen (metformin). Metformin wordt bijzonder vaak gevonden door het hoge gebruik en de geringe afbraak in rioolwaterzuiveringsinstallaties.",
  },
  {
    question: "Hoe komen medicijnresten in drinkwater terecht?",
    answer:
      "Wanneer mensen medicijnen innemen, breekt het lichaam een deel af maar scheidt het resterende deel uit via urine en ontlasting. Rioolwaterzuiveringsinstallaties (RWZI's) zijn ontworpen om organisch afval en stikstof te verwijderen, maar niet specifiek voor microstoffen zoals farmaceutische verbindingen. Een deel van de medicijnresten passeert de zuivering en belandt in oppervlaktewater, dat door sommige waterbedrijven als bron dient voor drinkwater.",
  },
  {
    question: "Zijn er wettelijke normen voor medicijnresten in drinkwater?",
    answer:
      "Nee. De EU-drinkwaterrichtlijn 2020/2184 verplicht lidstaten wel tot het monitoren van een watchlist van prioritaire microverontreinigingen, waaronder sommige medicijnresten, maar stelt geen wettelijke grenswaarden. Op nationaal niveau kent het Drinkwaterbesluit evenmin normen voor individuele farmaceutische stoffen. Dit betekent niet dat er geen risico-evaluatie plaatsvindt: waterbedrijven hanteren interne actieniveaus op basis van toxicologische risicoschattingen.",
  },
  {
    question: "Wat is NSF/ANSI 401 en waarom is het relevant voor medicijnresten?",
    answer:
      "NSF/ANSI 401 is een Amerikaanse certificeringsnorm specifiek voor de verwijdering van opkomende contaminanten, waaronder medicijnresten, hormonen en andere microverontreinigingen. Filters met dit certificaat zijn getest op de verwijdering van stoffen zoals ibuprofen, atenolol, estrone en DEET. In Europa is deze norm minder gangbaar maar de testmethodologie wordt als referentie gebruikt. Bij de aanschaf van een actief koolfilter voor medicijnresten is NSF/ANSI 401 het meest relevante keurmerk.",
  },
  {
    question: "Verwijdert een actief koolfilter medicijnresten?",
    answer:
      "Actief kool adsorbeert veel organische verbindingen, waaronder een aantal medicijnresten. De verwijderingspercentages varieren sterk per stof: van 40% tot meer dan 80% voor stoffen als ibuprofen en diclofenac bij voldoende contacttijd. Het actief koolbed moet regelmatig vervangen worden, want een verzadigd filter kan stoffen teruggeven aan het water. Granulaire actief koolfilters (GAC) presteren doorgaans beter dan geperste blokfilters voor medicijnresten.",
  },
  {
    question: "Verwijdert een osmosefilter medicijnresten?",
    answer:
      "Ja. Omgekeerde osmose verwijdert 90-99% van de meeste farmaceutische verbindingen doordat het semipermeabele membraan moleculen boven een bepaalde grootte en lading tegenhoudt. Kleine neutrale moleculen (sommige antibiotica) passeren soms voor een klein deel, maar de verwijderingsefficiency van osmose voor de meest voorkomende medicijnresten is aanmerkelijk hoger dan die van koolstoffilters. Osmose gecombineerd met een actief koolvoorfiter biedt de beste bescherming.",
  },
  {
    question: "Vormen hormonen uit anticonceptiepillen een risico in drinkwater?",
    answer:
      "Ethinylestradiol (EE2), het synthetische hormoon in de anticonceptiepil, is bijzonder stabiel en moeilijk afbreekbaar. Het is aangetoond dat het in oppervlaktewater vissoorten feminiseert. In drinkwater zijn de concentraties na zuivering doorgaans uiterst laag. Voor de gemiddelde mens vormt de hoeveelheid hormonen via drinkwater een verwaarloosbaar klein deel van de totale hormonale blootstelling. Wel zijn er zorgen over cumulatieve effecten bij langdurige blootstelling, met name voor zuigelingen en zwangere vrouwen.",
  },
  {
    question: "Zijn antibiotica in drinkwater een risico voor antibioticaresistentie?",
    answer:
      "Dit is een actief onderzoeksgebied. De concentraties antibiotica in drinkwater zijn te laag om direct therapeutisch effect of resistentieopbouw bij mensen te veroorzaken. Wetenschappers zijn echter bezorgd over de mogelijke bijdrage aan de selectie van resistente bacterien in het milieu en watermilieu. Rioolwaterzuiveringsinstallaties van de vierde generatie (met ozonisatie en actief kool) kunnen antibiotica veel effectiever verwijderen dan traditionele RWZI's.",
  },
  {
    question: "Helpt UV-bestraling bij de verwijdering van medicijnresten?",
    answer:
      "UV-bestraling, zoals die in sommige huishoudfilters wordt toegepast, is primair een desinfectiemiddel gericht op bacterien en virussen. De effectiviteit voor medicijnresten is beperkt: sommige stoffen (zoals bepaalde hormonen) worden gedeeltelijk afgebroken door UV, maar de meeste farmaceutische verbindingen worden er nauwelijks door aangetast bij de UV-dosis die thuisapparaten leveren. UV is geen vervanging voor actief kool of osmose als het gaat om medicijnresten.",
  },
  {
    question: "Wat doet het RIVM aan monitoring van medicijnresten in drinkwater?",
    answer:
      "Het RIVM voert periodieke meetcampagnes uit in het kader van het Drinkwatermeetnet en adviseert de overheid over toelaatbare risiconiveaus. Specifiek voor opkomende stoffen heeft het RIVM een watchlist opgesteld van prioritaire microstoffen die worden gemonitord in bronwater en drinkwater. De resultaten worden gepubliceerd in het jaarlijkse Drinkwaterkwaliteitsrapport en zijn openbaar beschikbaar via het dataportaal van het RIVM.",
  },
];

export default function MedicijnrestenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "Medicijnresten", url: "https://waterfilterplatform.nl/drinkwaternormen/medicijnresten" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Medicijnresten in drinkwater: meting, normen en filtermogelijkheden",
          description:
            "Medicijnresten in drinkwater: ibuprofen, hormonen en antibiotica in oppervlaktewater. Er zijn geen wettelijke normen. Osmose verwijdert 90-99%.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/medicijnresten",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Medicijnresten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Medicijnresten in drinkwater: meting, normen en filtermogelijkheden
          </h1>
          <QuickAnswer answer="Medicijnresten zoals ibuprofen, hormonen en antibiotica worden gevonden in oppervlaktewater (Rijn, Maas) door onvolledige zuivering van rioolwater. Na de zuivering door waterbedrijven zijn concentraties in drinkwater doorgaans ver onder detectielimieten. Er zijn geen wettelijke grenswaarden in de EU of het Drinkwaterbesluit. Osmose verwijdert 90-99% van de meeste farmaceutische stoffen; actief kool biedt 60-80% verwijdering afhankelijk van de stof en contacttijd." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Welke medicijnresten komen voor in water?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In oppervlaktewater en in mindere mate in drinkwater worden diverse groepen farmaceutische
            verbindingen aangetroffen. De meest relevant bevonden stoffen:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>NSAID-pijnstillers:</strong> Ibuprofen, diclofenac en naproxen zijn de meest
              gevonden medicijnresten. Diclofenac is in 2022 opgenomen in de Europese watchlist voor
              oppervlaktewatermonitoring vanwege ecotoxicologische risicos voor waterorganismen.
            </li>
            <li>
              <strong>Synthetische hormonen:</strong> Ethinylestradiol (EE2) uit de anticonceptiepil
              en estriol zijn hormoonverstorende stoffen die stabiel zijn in het milieu. Ze hebben
              aangetoonde effecten op de voortplanting van vissen bij langdurige blootstelling.
            </li>
            <li>
              <strong>Antibiotica:</strong> Amoxicilline, trimethoprim en sulfamethoxazol worden
              aangetroffen in rioolwater en in lagere concentraties in oppervlaktewater. De
              relatie met antibioticaresistentie in het milieu is een actief onderzoeksgebied.
            </li>
            <li>
              <strong>Antidepressiva en psychofarmaca:</strong> Fluoxetine (Prozac), sertraline en
              carbamazepine (anti-epilepticum) zijn persistent en worden wereldwijd aangetroffen in
              watersystemen.
            </li>
            <li>
              <strong>Betablockers:</strong> Metoprolol, atenolol en bisoprolol zijn veelgebruikte
              hartmedicijnen die slecht worden afgebroken in RWZI's.
            </li>
            <li>
              <strong>Diabetesmedicijnen:</strong> Metformin wordt door zijn hoge gebruiksfrequentie
              en lage biologische afbreekbaarheid consequent in hoge concentraties gevonden.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Hoe komen medicijnresten in drinkwater?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De route van medicijn naar drinkwater verloopt in drie stappen. Stap een: het menselijk
            lichaam breekt een ingenomen medicijn deels af en scheidt het resterende deel uit via
            urine en ontlasting. Dit varieert sterk per stof: ibuprofen wordt voor 60-90% ongewijzigd
            uitgescheiden, metformin bijna voor 100%.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stap twee: het afvalwater met medicijnresten belandt in een rioolwaterzuiveringsinstallatie
            (RWZI). Traditionele RWZI's zijn ontworpen voor organisch afval, stikstof en fosfor.
            Ze verwijderen farmaceutische stoffen voor 30-80%, afhankelijk van de stof en het
            zuiveringsproces. Actief slib verwijdert sommige stoffen goed, maar ionische verbindingen
            en stabiele moleculen passeren deels.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stap drie: het gezuiverde RWZI-effluent komt in rivieren en kanalen terecht. Waterbedrijven
            die oppervlaktewater (Maas, Rijn, Lek) als bron gebruiken, moeten dit oppervlaktewater
            verder zuiveren tot drinkwaterkwaliteit. Zuiveringsstappen als coagulatie, zandfiltratie,
            actief kool en UV-bestraling verwijderen een groot deel van de resterende medicijnresten,
            maar vrijwel nooit 100%.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Normen: wat zegt de EU en het Drinkwaterbesluit?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er bestaan <strong>geen wettelijke grenswaarden</strong> voor medicijnresten in drinkwater,
            noch in de EU noch in het Nederlandse Drinkwaterbesluit. De{" "}
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="text-[#005F8A] hover:underline font-medium">
              EU-richtlijn 2020/2184
            </Link>{" "}
            verplicht lidstaten wel tot het opzetten van een risicogebaseerde aanpak en tot monitoring
            van een watchlist van prioritaire microstoffen, waaronder hormonen en farmaceutische stoffen.
            Maar een verplichte parameterwaarde die waterbedrijven moeten naleven is er niet.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De reden is tweeledig. Ten eerste zijn de concentraties na drinkwaterzuivering zo laag
            dat de onzekerheid over gezondheidseffecten bij die niveaus groot is. Ten tweede is het
            reguleringstechnisch complex: er zijn duizenden farmaceutische verbindingen, elk met
            andere toxicologische profielen, biologische afbreekbaarheid en mengsel-effecten.
            Normen stellen vereist toxicologisch bewijs dat voor de meeste stoffen nog ontbreekt.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Gezondheidsrisico: wat is de stand van de wetenschap?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij de huidige concentraties in drinkwater worden geen acute gezondheidseffecten verwacht.
            De Europese Autoriteit voor Voedselveiligheid (EFSA) en de WHO concluderen dat de blootstelling
            via drinkwater een verwaarloosbaar klein deel uitmaakt van de therapeutische dosis van een
            medicijn. Iemand zou literaal duizenden liters drinkwater per dag moeten drinken om de
            farmacologische drempel te bereiken van de meeste aangetroffen stoffen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Echter geldt het voorzorgsprincipe voor:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Hormoonverstoorders:</strong> Voor ethinylestradiol en andere hormoonverstorende
              stoffen zijn drempelwaarden niet goed vastgesteld. Sommige onderzoekers betogen dat er
              geen veilige drempelconcentratie bestaat voor hormoonverstoring bij gevoelige
              levensfasen (vroege embryonale ontwikkeling).
            </li>
            <li>
              <strong>Mengsel-effecten:</strong> In werkelijkheid bevat water een cocktail van
              vele stoffen tegelijk. Hoe laag-gedoseerde mengsels op langere termijn werken is
              wetenschappelijk nog onvoldoende onderzocht.
            </li>
            <li>
              <strong>Kwetsbare groepen:</strong> Zuigelingen, zwangere vrouwen en mensen met
              chronische aandoeningen worden in voorzorgsadviezen expliciet apart behandeld.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Filtertechnieken: wat werkt en wat niet?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Niet alle waterfilters zijn even effectief voor medicijnresten. Een overzicht:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Omgekeerde osmose (90-99%):</strong> De meest effectieve thuisoptie. Het
              semipermeabele membraan houdt moleculen boven 0,0001 micron tegen. De meeste farmaceutische
              verbindingen zijn te groot of te geladen om het membraan te passeren. Gecombineerd met een
              actief koolvoorfiter bereikt osmose de hoogste verwijderingspercentages. Meer informatie op{" "}
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
                omgekeerde osmose kopen
              </Link>.
            </li>
            <li>
              <strong>Actief koolfilter (60-80%, stofafhankelijk):</strong> Actief kool adsorbeert
              organische verbindingen via Van der Waals-krachten. De effectiviteit voor medicijnresten
              varieert sterk per stof en is afhankelijk van contacttijd, koolkwaliteit en verzadiging
              van het filter. NSF/ANSI 401 gecertificeerde koolfilters zijn getest op een specifiek
              panel van opkomende contaminanten.
            </li>
            <li>
              <strong>UV-bestraling (beperkt effect):</strong> Huishoud-UV-systemen zijn effectief
              voor desinfectie (bacterien, virussen) maar nauwelijks voor medicijnresten. Alleen
              sommige lichtgevoelige verbindingen worden deels afgebroken. UV is geen vervanging
              voor actief kool of osmose.
            </li>
            <li>
              <strong>Waterfilterkan (minimaal effect):</strong> Eenvoudige kannetjes met een ionenfilter
              of actief koolgranulaat zijn niet ontworpen voor microstoffen. De contacttijd is te
              kort en de filteroppervlakte te klein voor effectieve adsorptie van farmaceutische
              verbindingen.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor een vergelijking van filteropties voor specifieke stoffen zie ook onze pagina over{" "}
            <Link href="/drinkwaternormen/microplastics" className="text-[#005F8A] hover:underline font-medium">
              microplastics in drinkwater
            </Link>,
            die een vergelijkbare reguleringsachtergrond heeft.
            Een volledig overzicht van drinkwaternormen staat op{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              onze drinkwaternormen-hub
            </Link>.
            Wilt u meer weten over waterfilters in het algemeen, dan verwijzen wij naar onze{" "}
            <Link href="/waterfilter" className="text-[#005F8A] hover:underline font-medium">
              waterfilter-overzichtspagina
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/hormonen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hormonen en medicijnresten in drinkwater</h3>
              <p className="text-sm text-gray-600">Uitgebreide informatie over hormoonverstorende stoffen en farmaceutische resten in het drinkwater.</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Osmose als filtertechniek</h3>
              <p className="text-sm text-gray-600">Hoe omgekeerde osmose 90-99% van medicijnresten en farmaceutische verbindingen verwijdert.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
