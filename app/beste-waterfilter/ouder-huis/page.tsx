import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter voor ouder huis (voor 1960): lood in leidingen aanpakken",
  description:
    "Huis gebouwd voor 1960? Loden leidingen zijn een reeel risico. Osmose is de enige betrouwbare point-of-use bescherming. Alles uitgelegd.",
  alternates: {
    canonical: "https://waterfilterplatform.nl/beste-waterfilter/ouder-huis",
  },
  openGraph: {
    title: "Waterfilter voor ouder huis (voor 1960): lood in leidingen aanpakken",
    description:
      "Huis gebouwd voor 1960? Loden leidingen zijn een reeel risico. Osmose is de enige betrouwbare point-of-use bescherming. Alles uitgelegd.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Hoe weet ik of ik echt loden leidingen heb?",
    answer:
      "Controleer de binnenleidingen: lood is grijszacht, buigbaar en heeft een dof glanzend oppervlak als u er een mes over haalt. Koperen leidingen zijn oranje-bruin en harder. Galvanisch stalen leidingen zijn grijzer en minder buigbaar. U kunt ook het waterbedrijf vragen om een loodmeting op uw adres. Een professionele loodmeting via een gecertificeerd laboratorium kost 30-80 euro en geeft zekerheid.",
  },
  {
    question: "Is het gevaarlijk om nu kraanwater te drinken?",
    answer:
      "Dat hangt af van de loodconcentratie. De EU-norm is per 2026 verlaagd naar 5 microgram per liter (ug/L). Als u een risicowoning heeft (voor 1960 gebouwd) en nog geen meting heeft gedaan, adviseren wij als voorzorgsmaatregel: laat elke ochtend 30 seconden koud water doorlopen voor gebruik (first flush protocol). Laat het water testen als u zwanger bent, jonge kinderen heeft of langdurig gebruik maakt van oud kraanwater.",
  },
  {
    question: "Filtert een koolstoffilter ook lood?",
    answer:
      "Nee. Standaard actief kool (GAC of CTO) verwijdert geen opgelost lood. Lood is een metaalion dat het koolstofoppervlak passeert zonder te adsorberen. Voor loodverwijdering is omgekeerde osmose (95-99%) of een NSF/ANSI 53 gecertificeerd lood-specifiek filter nodig. Controleer altijd de certificering als loodverwijdering uw doel is.",
  },
  {
    question: "Wat als ik een oud huis koop?",
    answer:
      "Laat bij een woning van voor 1960 altijd een loodmeting uitvoeren voordat u gaat bewonen. Dit kan via het waterbedrijf, een gecertificeerd lab of een onafhankelijke inspecteur. Als lood wordt aangetroffen boven 5 ug/L, zijn er twee opties: de loodleidingen laten vervangen (definitief, 2000-8000 euro afhankelijk van omvang) of een osmosefilter plaatsen op het drinkwaterkraanpunt (400-700 euro, 95-99% loodreductie).",
  },
  {
    question: "Moet ik ook een douchefilter aanpakken voor lood?",
    answer:
      "Lood wordt primair opgenomen via ingestie (drinkwater, koken). Absorptie via de huid tijdens douchen is verwaarloosbaar klein. Een douchefilter voor loodverwijdering is niet noodzakelijk. Richt u op het drinkwaterkraanpunt in de keuken als prioriteit. Wees ook voorzichtig met water dat u gebruikt voor koken: gebruik altijd koud water uit de koude leiding voor koken en thee zetten, niet via het heetwaterreservoir.",
  },
];

export default function OuderHuisPage() {
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
            name: "Ouder huis (voor 1960)",
            url: "https://waterfilterplatform.nl/beste-waterfilter/ouder-huis",
          },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterfilter voor ouder huis (voor 1960): lood in leidingen aanpakken",
          description:
            "Huis gebouwd voor 1960? Loden leidingen zijn een reeel risico. Osmose is de enige betrouwbare point-of-use bescherming. Alles uitgelegd.",
          datePublished: "2026-05-17",
          url: "https://waterfilterplatform.nl/beste-waterfilter/ouder-huis",
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
            <span>Ouder huis (voor 1960)</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor ouder huis: lood in leidingen aanpakken
          </h1>
          <QuickAnswer answer="In huizen gebouwd voor 1960 is kans op loden leidingen reeel. Een osmosefilter op het kraanpunt verwijdert 95-99% van opgelost lood. Dit is de enige thuisoplossing die betrouwbaar werkt — een koolstoffilter heeft geen effect op opgelost lood." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Wanneer is uw huis oud genoeg om bezorgd te zijn?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De bouwperiode van uw woning bepaalt het risico op loodleidingen:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Voor 1960:</strong> lood werd standaard gebruikt voor binnenleidingen
              (aansluitingen, reparaties en soms hoofdleidingen). Kans op loodleidingen is
              reeel, zeker als de leidingen nooit zijn vervangen.
            </li>
            <li>
              <strong>1960-1980:</strong> het gebruik van lood nam af maar loodlots (soldeerverbindingen
              met lood op koperen leidingen) waren nog wijdverspreid. Deze kunnen ook lood afgeven.
            </li>
            <li>
              <strong>Na 1990:</strong> lood is volledig afwezig in nieuwe installaties.
              Nieuwbouwwoningen na 1990 zijn vrij van loodleidingen.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het gaat niet alleen om de bouwdatum, maar ook om of de leidingen ooit zijn vervangen.
            In een woning van voor 1960 die recent volledig is gerenoveerd inclusief leidingwerk,
            kunnen de loodleidingen al verwijderd zijn.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Hoe weet u of u loden leidingen heeft?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Visuele inspectie is de eerste stap. Loden leidingen zijn grijszacht van kleur, buigbaar
            en vertonen een dof glanzend oppervlak als u er een mes over haalt (lood is zacht
            genoeg om een krasstreep te maken). Koperen leidingen zijn oranje-bruin en harder.
            Galvanisch stalen leidingen zijn grijzer met schroefdraadverbindingen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als visuele inspectie niet mogelijk of onzeker is, kunt u contact opnemen met uw
            waterbedrijf. Veel waterbedrijven voeren op verzoek een loodmeting uit op uw adres.
            Alternatieven: een gecertificeerd laboratorium (30-80 euro) of een professionele
            huisinspecteur. Een thuistestkit voor lood in water is ook beschikbaar (10-30 euro)
            maar minder betrouwbaar dan een laboratoriumanalyse.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Wat doet lood met de gezondheid?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lood is neurotoxisch: het tast het zenuwstelsel aan. Kinderen zijn extra kwetsbaar
            omdat hun hersenen nog in ontwikkeling zijn. Zelfs lage loodconcentraties kunnen
            bij kinderen leiden tot lagere IQ-scores, aandachtsproblemen en gedragsstoornissen.
            Er is geen drempelwaarde waaronder lood volledig veilig is — het WHO-advies is zo
            laag mogelijke blootstelling.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij volwassenen kan langdurige blootstelling leiden tot nierproblemen, verhoogde
            bloeddruk en bij hoge concentraties tot acute loodvergiftiging. De EU-norm voor
            lood in drinkwater is per 2026 aangescherpt van 10 naar 5 microgram per liter
            (ug/L). Zwangere vrouwen en kinderen onder 6 jaar zijn de meest kwetsbare groepen.
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Osmose als enige betrouwbare point-of-use oplossing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Omgekeerde osmose is de enige thuis-waterfiltertechniek die lood betrouwbaar
            verwijdert: 95-99% loodreductie. Het RO-membraan heeft een porie-doorsnede van
            0,0001 micron, terwijl loodionen (Pb2+) een hydratiestraal hebben die niet door
            dit membraan past.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kies voor een systeem dat gecertificeerd is volgens NSF/ANSI 58 voor loodverwijdering.
            Dit certificaat garandeert dat het systeem in gestandaardiseerde testen ten minste
            de opgegeven loodreductie haalt. Een osmosefilter werkt als point-of-use systeem:
            het behandelt alleen het water op het kraanpunt waar het is aangesloten — typisch
            de keukenkraan voor drinkwater en koken. Meer informatie vindt u op de pagina{" "}
            <Link
              href="/omgekeerde-osmose/kopen"
              className="text-[#005F8A] hover:underline font-medium"
            >
              osmosefilter kopen
            </Link>
            .
          </p>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Zijn er alternatieven?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn drie alternatieven voor een osmosefilter:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Leidingen vervangen:</strong> de definitieve oplossing. Alle loodleidingen
              in de woning worden vervangen door koperen of PEX-leidingen. Kosten: 2000-8000 euro
              afhankelijk van de omvang. Voordeel: permanent, behandelt alle waterpunten in huis.
            </li>
            <li>
              <strong>First-flush protocol:</strong> elke ochtend 30 seconden koud water laten
              doorlopen voor gebruik. Dit spoelt stilstaand water (met de hoogste loodconcentraties)
              door. Beperkt effectief als aanvullende maatregel, onvoldoende als enige maatregel
              bij hoge loodconcentraties.
            </li>
            <li>
              <strong>NSF/ANSI P473 gecertificeerde loodfilters:</strong> speciale koolblokfilters
              gecertificeerd voor loodverwijdering. Minder effectief dan osmose (typisch 80-95%
              vs 95-99%) en vereisen regelmatige vervanging om te voorkomen dat lood wordt
              doorgelaten na verzadiging.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
            Kosten en onderhoud
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een onderbouw osmosefilter inclusief installatie kost 400-700 euro. Jaarlijkse
            onderhoudskosten: sedimentfilter (6-12 maanden, 10-20 euro), koolblokfilter
            (6-12 maanden, 15-30 euro), RO-membraan (2-3 jaar, 50-100 euro). Totale jaarkosten:
            60-120 euro. Per liter gefilterd water (bij 3 liter per dag): circa 5-10 cent per
            liter inclusief afschrijving van het systeem.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Controleer de filterprestaties periodiek met een TDS-meter. Als de TDS-rejectie
            (het verschil tussen inkomend en gefilterd water) daalt onder 85%, is het
            RO-membraan aan vervanging toe. De meeste moderne systemen hebben een ingebouwde
            TDS-indicator of app-koppeling.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-6">
            Veelgestelde vragen over waterfilter in ouder huis
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
              <Link href="/drinkwaternormen/lood" className="text-[#005F8A] hover:underline">
                Lood in drinkwater: normen en risicos
              </Link>
            </li>
            <li>
              <Link href="/keuzehulp/pfas-lood" className="text-[#005F8A] hover:underline">
                Keuzehulp: PFAS of lood in water
              </Link>
            </li>
          </ul>
        </div>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
