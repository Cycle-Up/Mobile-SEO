import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";

export function generateMetadata(): Metadata {
  const title = "Over WaterfilterPlatform — redactie, missie en onafhankelijkheid";
  const description =
    "Wie maakt WaterfilterPlatform? Onze missie, redactionele werkwijze en hoe we onafhankelijk advies geven over waterfilters in Nederland.";

  return {
    title,
    description,
    alternates: { canonical: "https://waterfilterplatform.nl/over-ons" },
    openGraph: {
      title,
      description,
      url: "https://waterfilterplatform.nl/over-ons",
      type: "website",
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

export default function OverOnsPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Over WaterfilterPlatform",
            "url": "https://waterfilterplatform.nl/over-ons",
            "description": "Redactie, missie en onafhankelijkheidsverklaring van WaterfilterPlatform.",
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
              { "@type": "ListItem", "position": 2, "name": "Over ons", "item": "https://waterfilterplatform.nl/over-ons" },
            ],
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-4">
            Over WaterfilterPlatform
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            WaterfilterPlatform is een onafhankelijk informatieplatform over waterfilters en drinkwaterkwaliteit in Nederland. Wij zijn geen webshop en verkopen geen producten: onze enige taak is heldere, feitelijk onderbouwde informatie bieden zodat u zelf een weloverwogen keuze kunt maken.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Onze missie</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            WaterfilterPlatform is opgericht omdat de zoekresultaten voor "waterfilter kopen" vrijwel volledig worden gedomineerd door webshops en affiliate-sites. Die paginas prijzen producten aan, maar bieden zelden neutrale context: wanneer is een filter nuttig? Welke techniek past bij welk waterprobleem? Wanneer volstaat gewoon kraanwater?
          </p>
          <p>
            Onze missie is eenvoudig: onafhankelijke, op feiten gebaseerde informatie bieden over drinkwaterkwaliteit en thuisfiltratie. Wij willen dat consumenten een weloverwogen keuze kunnen maken — ook als die keuze inhoudt dat ze helemaal geen filter nodig hebben.
          </p>
          <p>
            Nederlands kraanwater behoort tot de beste ter wereld. Toch zijn er situaties waarin filtratie zinvol is: oude loden leidingen, verhoogde PFAS-concentraties in bepaalde regio's, of een sterke voorkeur voor kalkvrij water voor koffie en thee. Wij leggen die nuance uit, zonder een product te hoeven verkopen.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat wij doen</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Het platform beslaat een breed spectrum: van uitleg over drinkwaternormen en filtertechnieken tot waterhardheid per gemeente en een keuzehulp per situatie. Iemand die in een huurwoning woont heeft andere opties dan een huiseigenaar. Een gezin met een baby stelt andere eisen dan iemand die alleen het kalkgehalte wil verlagen.
            </p>
            <p>
              Voor al onze inhoud raadplegen wij primaire bronnen. Wij baseren ons op het RIVM (Rijksinstituut voor Volksgezondheid en Milieu), het KWR Watercycle Research Institute, de WHO-richtlijnen voor drinkwaterkwaliteit, de EU-drinkwaterrichtlijn 2020/2184, het Nederlandse Drinkwaterbesluit en wetenschappelijke publicaties in peer-reviewed tijdschriften. Marketingmateriaal van fabrikanten gebruiken wij uitsluitend als aanvullende technische specificatie, nooit als gezaghebbende bron.
            </p>
            <p>
              Naast technische uitleg bieden wij ook praktische vergelijkingen. Welke filtertechnieken verwijderen PFAS? Wat kost omgekeerde osmose op jaarbasis als u de filterkosten meerekent? Is een waterontharder hetzelfde als een waterfilter? Dit soort vragen beantwoorden wij op basis van gepubliceerde data, niet op basis van wie ons het meeste betaalt.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Onze werkwijze</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Elke technische claim op dit platform is gebaseerd op gepubliceerd onderzoek of officieel beleid. Wij nemen fabrikantclaims niet over zonder verificatie. Als een filter beweert "99% kalk te verwijderen", controleren wij dat tegen NSF-certificeringsdata of onafhankelijke labstudies.
          </p>
          <p>
            Filterprestatiecijfers zijn afkomstig van fabrikantspecificaties en onafhankelijke tests, met name NSF/ANSI-certificeringsdata en laboratoriumstudies. De NSF-database (nsf.org) is openbaar toegankelijk en vermeldt per gecertificeerd product welke stoffen in welke mate worden verwijderd. Dat is onze eerste controlelaag.
          </p>
          <p>
            Gezondheidsuitspraken toetsen wij altijd aan WHO- en RIVM-standpunten. Wij maken geen uitspraken als "gefilterd water is gezonder" zonder te specificeren in welke context, voor wie en op basis van welk bewijs. Het onderscheid tussen aangetoond causaal verband, correlatie en hypothetisch risico is voor ons wezenlijk — en wij maken dat onderscheid expliciet in onze teksten.
          </p>
          <p>
            Paginas worden bijgewerkt wanneer normen of wetenschappelijk inzicht veranderen. De datum van laatste herziening staat op elke inhoudelijke pagina vermeld. Als een EU-norm wordt aangescherpt — zoals de verlaging van de loodnorm van 10 naar 5 microgram per liter die in 2026 van kracht werd — passen wij de betreffende paginas zo snel mogelijk aan.
          </p>
        </div>
      </section>

      <section className="bg-[#E0F2FE] py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Onafhankelijkheid en commerciele relatie</h2>
          <div className="bg-white rounded-2xl border border-blue-100 p-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Wij willen hier transparant over zijn. Sommige paginas op WaterfilterPlatform bevatten verwijzingen naar producten van PureAqua.nl, een Nederlandse aanbieder van onder andere 4-in-1 osmosekranen. WaterfilterPlatform ontvangt hiervoor een vergoeding wanneer een bezoeker via een dergelijke link een aankoop doet.
            </p>
            <p>
              Deze commerciele relatie heeft geen invloed op onze inhoudelijke beoordeling van technieken en producten. Wij benoemen ook de nadelen van elk systeem. Wij adviseren actief wanneer een goedkopere oplossing beter past bij de situatie van de bezoeker. Een eenvoudige filterkan kan voor sommige huishoudens een betere keuze zijn dan een osmose-installatie van enkele honderden euros — en dat schrijven wij dan ook.
            </p>
            <p>
              Paginas met een commerciele link zijn herkenbaar: wij vermelden dit expliciet bij de betreffende productaanbevelingen. Puur informatieve paginas — zoals onze uitleg over drinkwaternormen, filtertechnieken of waterhardheid per gemeente — bevatten geen gelieerde links.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Fouten en contact</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Klopt er iets niet? Heeft u een verouderde norm gevonden, een feitelijke onjuistheid ontdekt of een studie die onze informatie tegenspreekt? Wij horen het graag. Feitelijke fouten corrigeren wij zo snel mogelijk, doorgaans binnen enkele werkdagen.
          </p>
          <p>
            U kunt ons bereiken via de{" "}
            <Link href="/contact" className="text-[#005F8A] font-medium hover:underline">
              contactpagina
            </Link>
            . Vermeld de URL van de pagina in kwestie en, indien mogelijk, een bronlink. Wij lezen elk bericht.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-6">Bronnen die wij raadplegen</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">•</span>
              <span>
                <strong>RIVM</strong> — Rijksinstituut voor Volksgezondheid en Milieu: gezondheidskundige normen en adviezen over stoffen in drinkwater
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">•</span>
              <span>
                <strong>KWR Watercycle Research Institute</strong> — onafhankelijk onderzoeksinstituut dat de Nederlandse drinkwatersector adviseert over kwaliteit en zuiveringstechnologie
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">•</span>
              <span>
                <strong>WHO</strong> — World Health Organization, Guidelines for Drinking-water Quality: internationale gezondheidsrichtlijnen voor drinkwater
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">•</span>
              <span>
                <strong>EU-drinkwaterrichtlijn 2020/2184</strong> — Europese richtlijn die minimumeisen stelt aan de kwaliteit van voor menselijke consumptie bestemd water
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">•</span>
              <span>
                <strong>Nederlands Drinkwaterbesluit (Staatsblad)</strong> — de nationale omzetting van de EU-richtlijn, met wettelijk bindende normen voor drinkwaterkwaliteit in Nederland; zie ook onze{" "}
                <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline">
                  pagina over drinkwaternormen
                </Link>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">•</span>
              <span>
                <strong>NSF International</strong> — certificeringsdata voor waterfilters (NSF/ANSI 42, 53, 58 en 401), openbaar verifieerbaar via nsf.org
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">•</span>
              <span>
                <strong>Kiwa Technology</strong> — Nederlandse keurmerken voor waterbehandelingsapparatuur en sanitaire producten
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#005F8A] font-bold shrink-0">•</span>
              <span>
                <strong>Peer-reviewed publicaties</strong> — wetenschappelijke artikelen uit tijdschriften als Environment International, Nature Medicine en Environmental Research, met name over PFAS, microplastics en sporenmetalen in drinkwater
              </span>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
            <Link href="/methodologie" className="text-[#005F8A] font-medium hover:underline">
              Onze methodologie
            </Link>
            <Link href="/drinkwaternormen" className="text-[#005F8A] font-medium hover:underline">
              Drinkwaternormen
            </Link>
            <Link href="/keuzehulp" className="text-[#005F8A] font-medium hover:underline">
              Keuzehulp waterfilters
            </Link>
            <Link href="/contact" className="text-[#005F8A] font-medium hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
