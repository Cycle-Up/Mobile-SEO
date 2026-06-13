import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Kraanwater vs flessenwater: kosten, kwaliteit en milieu vergeleken",
  description:
    "Kraanwater of flessenwater? Vergelijking op kwaliteit, kosten per liter, milieu-impact en blinde smaaktests. Wie wint?",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/kraanwater-vs-flessenwater" },
  openGraph: {
    title: "Kraanwater vs flessenwater: kosten, kwaliteit en milieu vergeleken",
    description:
      "Kraanwater of flessenwater? Vergelijking op kwaliteit, kosten per liter, milieu-impact en blinde smaaktests. Wie wint?",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is flessenwater beter dan kraanwater?",
    answer:
      "In Nederland niet. Nederlands kraanwater voldoet aan dezelfde of strengere normen dan flessenwater en wordt vaker gecontroleerd. Flessenwater is 333 tot 2.500 keer duurder per liter en produceert veel meer CO2. In blindproeven kiezen consumenten niet consistent voor flessenwater. In uitzonderlijke situaties — reizen, calamiteiten, specifieke medische indicaties — kan flessenwater een rol spelen.",
  },
  {
    question: "Zijn er mineralen in kraanwater?",
    answer:
      "Ja. Nederlands kraanwater bevat van nature opgeloste mineralen, waaronder calcium (10-120 mg/L afhankelijk van regio), magnesium (2-25 mg/L), natrium (10-60 mg/L) en kalium (1-10 mg/L). De exacte samenstelling verschilt per leveringsgebied en is terug te vinden in het jaarbericht van uw waterbedrijf.",
  },
  {
    question: "Wat kosten 2 liter flessenwater per dag per jaar?",
    answer:
      "Bij een gemiddelde prijs van 0,50 euro per liter (supermarkt huismerk) kost 2 liter per dag 1 euro per dag, ofwel 365 euro per jaar per persoon. Een gezin van vier betaalt zo 1.460 euro per jaar aan flessenwater. Datzelfde gezin betaalt voor kraanwater slechts 3 tot 4 euro per jaar voor hetzelfde volume.",
  },
  {
    question: "Is kraanwater veilig voor een baby?",
    answer:
      "Nederlands kraanwater is in principe veilig voor het bereiden van babyvoeding, mits uw woning geen loden leidingen heeft (bouwjaar voor 1960 is een risicofactor) en het nitraatgehalte ter plaatse onder 25 mg/L ligt. Raadpleeg uw waterbedrijf bij twijfel. Voor extra zekerheid is osmosewater + remineralisatie of gecertificeerd babywater een optie.",
  },
  {
    question: "Bevat flessenwater microplastics?",
    answer:
      "Ja. Onderzoek van het WHO (2019) en meerdere onafhankelijke laboratoria toont aan dat flessenwater gemiddeld twee keer zoveel microplasticdeeltjes bevat als kraanwater. De kunststof fles zelf is een belangrijke bron: PET-flessen logen kleine polyeethyleentereftalaat-deeltjes uit, met name bij warmte en langdurige opslag.",
  },
];

export default function KraanwaterVsFlessenwaterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Kraanwater vs flessenwater", url: "https://waterfilterplatform.nl/vergelijken/kraanwater-vs-flessenwater" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Kraanwater vs flessenwater: kosten, kwaliteit en milieu vergeleken",
          description: "Kraanwater of flessenwater? Vergelijking op kwaliteit, kosten per liter, milieu-impact en blinde smaaktests. Wie wint?",
          datePublished: "2026-05-18",
          url: "https://waterfilterplatform.nl/vergelijken/kraanwater-vs-flessenwater",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:underline">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Kraanwater vs flessenwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kraanwater vs flessenwater: kosten, kwaliteit en milieu vergeleken
          </h1>
          <QuickAnswer answer="Nederlands kraanwater voldoet aan dezelfde of strengere normen dan flessenwater. Het kost 0,0006 euro per liter vs 0,20-1,50 euro voor flessenwater — 333 tot 2.500× goedkoper. Blindproeven tonen geen consistent smaakverschil. Flessenwater produceert bovendien 300-500× meer CO2 per liter." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="algemeen" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Hoe wordt kraanwater geproduceerd?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederlands drinkwater wordt geproduceerd uit oppervlaktewater (Rijn, Maas, IJsselmeer) en
            grondwater. Beide bronnen doorlopen een uitgebreid zuiveringsproces voordat het water uw
            kraan bereikt. Het proces omvat doorgaans: voorzuivering met zandfiltratie, actief-kool
            adsorptie om organische stoffen te verwijderen, langzame zandfiltratie en ultraviolet- of
            ozonbehandeling ter desinfectie. Waterbedrijven meten dagelijks tientallen parameters en
            publiceren de resultaten jaarlijks in een kwaliteitsrapport.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De Europese Drinkwaterrichtlijn (2020/2184/EU), in Nederland omgezet in het Drinkwaterbesluit,
            stelt maxima voor meer dan 60 stoffen, waaronder zware metalen, bestrijdingsmiddelen,
            nitraat, microbiologische parameters en PFAS. De Nederlandse normen zijn op meerdere punten
            strenger dan het Europese minimum. Continu online monitoring waarborgt dat afwijkingen binnen
            minuten worden gesignaleerd.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Hoe wordt flessenwater geproduceerd?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Flessenwater valt in Nederland onder twee categorieën: mineraalwater (van nature aanwezig
            bronwater met een stabiele mineraalsamenstelling, minimale behandeling toegestaan) en
            bronwater (idem, maar met minder strikte eisen aan de constante samenstelling). Een derde
            categorie is tafelwater: gezuiverd leidingwater dat in flessen wordt verpakt, soms met
            toegevoegde mineralen of koolzuur.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De EU-richtlijn 2009/54/EG reguleert mineraalwater. Opvallend: flessenwater mag hogere
            concentraties van bepaalde stoffen bevatten dan kraanwater. Zo is het toegestane maximum
            voor arseen in mineraalwater 50 µg/L versus 10 µg/L voor kraanwater. Flessenwater wordt
            bovendien minder frequent gecontroleerd dan kraanwater.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Vergelijkingstabel: 8 eigenschappen</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Kraanwater</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Flessenwater</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kwaliteitsnormen", "Drinkwaterbesluit, >60 parameters", "EU-richtlijn 2009/54/EG, minder streng op sommige stoffen"],
                  ["Kosten per liter", "0,0006 euro (gemiddeld NL)", "0,20–1,50 euro (supermarkt tot premium)"],
                  ["CO2-voetafdruk", "0,0003 kg CO2e/liter", "0,08–0,16 kg CO2e/liter (300–500× meer)"],
                  ["Regulering & controle", "Dagelijkse meting, openbaar rapport", "Minder frequent, niet altijd openbaar"],
                  ["Smaak (blindproef)", "Geen consistent onderscheid", "Geen consistent onderscheid"],
                  ["Mineralen", "Regionaal variabel, doorgaans aanwezig", "Variabel; mineraalwater heeft vaste samenstelling"],
                  ["Microplastics", "Lager risico (leidingnet)", "Gemiddeld 2× meer dan kraanwater (WHO 2019)"],
                  ["Beschikbaarheid", "Continu, uit de kraan", "Afhankelijk van inkopen en opslag"],
                ].map(([eigenschap, kraan, fles], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eigenschap}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{kraan}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{fles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Waarom kiezen mensen toch voor flessenwater?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ondanks de feiten kiest een aanzienlijk deel van de bevolking regelmatig voor flessenwater.
            Marktonderzoek wijst op een combinatie van factoren: perceptie van hogere zuiverheid,
            associatie met gezondheid en natuur, gewoonte en de wens naar een andere smaak. Marketingcampagnes
            van flessenwaterbedrijven versterken dit beeld met beelden van bergbronnen en de nadruk op
            specifieke mineralen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De realiteit is dat veel Nederlanders niet weten dat ons kraanwater tot het best gecontroleerde
            drinkwater ter wereld behoort. Een enquête van RIVM toonde aan dat circa 30% van de ondervraagden
            geloofde dat flessenwater schoner is, terwijl objectieve analyses dit niet bevestigen. Het
            begrip &ldquo;mineraalwater&rdquo; wekt de suggestie van gezondheidsvoordelen, maar de
            hoeveelheden mineralen in flessenwater zijn niet aantoonbaar hoger of gezonder dan die in
            hard NL kraanwater.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Blindproef-studies: wat zegt het onderzoek?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meerdere onafhankelijke blindproeven laten zien dat consumenten kraanwater en flessenwater
            niet betrouwbaar van elkaar kunnen onderscheiden. Een veelgeciteerd experiment van Penn &amp;
            Teller (VS) liet zien dat restaurantgasten aan willekeurig benoemde &ldquo;premium&rdquo;
            watersoorten betere smaakoordelen gaven dan aan ongelabeld water — terwijl alle soorten
            identiek waren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Nederland voerde het Waterlaboratorium Noord in samenwerking met watermaatschappijen
            proeven uit waarbij deelnemers negen watersoorten moesten rangschikken op smaak en frisheid.
            De scores voor leidingwater en middenprijssegment flessenwater lagen niet significant uit
            elkaar. Wel scoorde kraanwater in regio&apos;s met hoge chloorbehandeling of hoge hardheid
            lager. Dit wijst erop dat een eenvoudige waterfilter of actief-koolfilterkan smaakklachten
            over kraanwater grotendeels oplost — voor een fractie van de prijs van flessenwater.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Milieu-impact: plastic afval en transport</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De productie van een liter flessenwater vereist gemiddeld drie liter water (inclusief het
            productieproces van de fles zelf). Per liter geproduceerd flessenwater komt 0,08–0,16 kg CO2
            vrij — voor kraanwater is dit slechts 0,0003 kg CO2. Een Nederlandse gemiddeld verbruikende
            consument die één liter per dag aan flessenwater drinkt, is verantwoordelijk voor 29–58 kg
            extra CO2 per jaar, equivalent aan 150–300 km autorijden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In 2022 werden in Nederland ruim 700 miljoen liter flessenwater verkocht. Zelfs met een
            recyclingpercentage van 95% (PET-statiegeld) blijft er een aanzienlijke hoeveelheid plastic
            en energie gemoeid met productie, transport, koeling en verwerking. De transportkilometers
            van Italiaans of Frans bronwater naar Nederlandse supermarkten dragen substantieel bij aan
            de CO2-voetafdruk.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">Wanneer is flessenwater wél zinvol?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn situaties waarin flessenwater een praktische of zelfs noodzakelijke keuze is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Reizen naar landen met onbetrouwbaar leidingwater:</strong> in veel landen buiten
              West-Europa is flessenwater of gefilterd water de veilige keuze. Reisfilters zijn een
              alternatief.
            </li>
            <li>
              <strong>Noodsituaties en calamiteiten:</strong> bij een waterbreuk of besmetting van het
              leidingnet is flessenwater een tijdelijke noodoplossing. Een voorraad van enkele liters
              per persoon per dag is een verstandige voorzorgsmaatregel.
            </li>
            <li>
              <strong>Specifiek babywater:</strong> gecertificeerd babywater bevat een gegarandeerd lage
              nitraat- en natriumspiegel en is geschikt voor flesvoedingsbereiding wanneer het leidingwater
              ter plaatse onzeker is. In gebieden met goed, laag-nitraat kraanwater is dit echter niet
              noodzakelijk.
            </li>
            <li>
              <strong>Medische indicaties:</strong> voor personen die om medische redenen een specifiek
              mineralenpatroon of een extreem laag TDS nodig hebben, kan een bepaalde flessenwatersoort
              op advies van een arts worden voorgeschreven.
            </li>
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
              { label: "Vergelijken", href: "/vergelijken" },
              { label: "Kraanwater beter dan flessenwater", href: "/kennisbank/kraanwater-beter-dan-flessenwater" },
              { label: "Drinkwaternormen", href: "/drinkwaternormen" },
              { label: "Waterfilter kiezen", href: "/waterfilter" },
              { label: "Microplastics in drinkwater", href: "/drinkwater/microplastics" },
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
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS: kraanwater vs. flessenwater</h3>
              <p className="text-sm text-gray-600">Hoe Nederlandse waterbedrijven omgaan met PFAS en wat onderzoek toont over PFAS in flessenwater.</p>
            </Link>
            <Link href="/drinkwaternormen/eu-drinkwaterrichtlijn" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">EU drinkwaterrichtlijn 2020/2184</h3>
              <p className="text-sm text-gray-600">Welke normen kraanwater moet halen onder de EU-richtlijn en hoe dat zich verhoudt tot flessenwaternormen.</p>
            </Link>
          </div>
        </section>

        <div className="mt-10">
          <AffiliateCTA
            destination="zuiverWaterKranen"
            campaign="omgekeerde-osmose"
            content="vergelijken-kraanwater-vs-flessenwater-cta"
            label="Stop met flessen: bekijk de zuiver-water-kranen"
            title="Klaar voor zuiver water uit de kraan?"
            sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
          />

          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
