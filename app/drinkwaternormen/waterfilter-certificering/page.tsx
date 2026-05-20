import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Waterfilter certificering: NSF, Kiwa en ACS keurmerken uitgelegd",
  description:
    "Waterfilter keurmerken: Kiwa 113 (materiaalveiligheid), NSF/ANSI 42/53/58 (prestaties), ACS (Frans). Wat betekenen ze en welk keurmerk is het belangrijkst?",
  alternates: { canonical: "https://waterfilterplatform.nl/drinkwaternormen/waterfilter-certificering" },
  openGraph: {
    title: "Waterfilter certificering: NSF, Kiwa en ACS keurmerken uitgelegd",
    description:
      "Waterfilter keurmerken: Kiwa 113 (materiaalveiligheid), NSF/ANSI 42/53/58 (prestaties), ACS (Frans). Wat betekenen ze en welk keurmerk is het belangrijkst?",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Is een waterfilter-certificering wettelijk verplicht in Nederland?",
    answer:
      "Nee. In Nederland bestaat geen wettelijke verplichting voor waterfilter-certificering. Een fabrikant mag een waterfilter verkopen zonder enige keuring. Certificering is vrijwillig, maar vormt het enige bewijs dat een filter doet wat het belooft en geen schadelijke stoffen afgeeft aan het drinkwater.",
  },
  {
    question: "Wat test Kiwa 113 precies?",
    answer:
      "Kiwa 113 test de materiaalveiligheid van waterbehandelingsapparatuur. Het laboratorium bepaalt of het filtermateriaal, de behuizing en alle onderdelen die in contact komen met drinkwater geen schadelijke stoffen uitlogen. Getest worden zware metalen, organische verbindingen en andere parameters. De norm stelt eisen aan uitloogconcentraties na specifieke contacttijden en bij verschillende watertemperaturen.",
  },
  {
    question: "Wat is het verschil tussen NSF/ANSI 42 en NSF/ANSI 53?",
    answer:
      "NSF/ANSI 42 certificeert filters die de esthetische eigenschappen van water verbeteren: smaak, geur en chloorgehalte. Dit is geen gezondheidsgerelateerde certificering. NSF/ANSI 53 certificeert filters die specifieke gezondheidsrelevante stoffen verwijderen, zoals lood, chlooramine, bepaalde pesticiden en cysten. Een filter met alleen NSF 42 is niet gecertificeerd voor loodverwijdering.",
  },
  {
    question: "Wat garandeert NSF/ANSI 58 voor een osmosefilter?",
    answer:
      "NSF/ANSI 58 is de specifieke norm voor omgekeerde osmose-systemen. De standaard vereist minimaal 75% TDS-reductie en test op verwijdering van specifieke contaminanten zoals lood, arseen, barium, cadmium, selenium, fluoride en nitraat. Het testprotocol gebruikt 600 ppm TDS inlaatwater als standaardconditie. Ook de materiaalveiligheid van het systeem wordt getest.",
  },
  {
    question: "Wat is NSF/ANSI 401 en voor welke stoffen geldt het?",
    answer:
      "NSF/ANSI 401 is de nieuwste NSF-standaard voor opkomende stoffen (emerging contaminants). Het test verwijdering van 15 stoffen die niet in oudere normen stonden, waaronder medicijnresten (ibuprofen, atenolol), pesticiden, DEET en bisfenol A. Er is nog geen standaard die PFAS als geheel dekt via NSF 401, maar afzonderlijke PFAS-verbindingen worden soms meegetest onder NSF 58.",
  },
  {
    question: "Wat is ACS-certificering en wordt die in Nederland erkend?",
    answer:
      "ACS staat voor Attestation de Conformite Sanitaire, de Franse equivalent van een materiaalveiligheidsnorm voor waterbehandelingsproducten. De ACS wordt erkend in Frankrijk, Belgie en Nederland als bewijs van materiaalveiligheid, vergelijkbaar met Kiwa 113. Producten met zowel ACS als NSF-certificering bieden de meest brede dekking voor de Benelux-markt.",
  },
  {
    question: "Hoe controleer ik of een waterfilter echt NSF-gecertificeerd is?",
    answer:
      "NSF International beheert een gratis online productdatabank op nsf.org/certified-products. Zoek op merknaam of modelnummer. U ziet dan welke specifieke claims gecertificeerd zijn, het certificaatnummer en de geldigheidsdatum. Let op: sommige fabrikanten vermelden NSF-logo's zonder daadwerkelijk gecertificeerd te zijn. Verificatie via de databank is de enige betrouwbare methode.",
  },
  {
    question: "Hoe lang is een Kiwa 113-certificering geldig?",
    answer:
      "Een Kiwa 113-certificering wordt jaarlijks geauditeerd en heeft een geldigheidsduur zolang het product ongewijzigd blijft en de jaarlijkse herbeoordeling wordt doorstaan. Bij productwijzigingen (nieuw filtermateriaal, gewijzigde behuizing) moet herkeuring plaatsvinden. Het Kiwa-register is openbaar en doorzoekbaar via kiwa.com.",
  },
  {
    question: "Waarom hebben goedkope Chinese filters vaak geen certificering?",
    answer:
      "Certificering is kostbaar: een volledig NSF 58-traject kost een fabrikant EUR 20.000 tot EUR 80.000 en neemt 6 tot 18 maanden in beslag. Goedkope importproducten slaan deze kosten over om concurrerend geprijsd te kunnen zijn. Dit betekent niet automatisch dat een ongecertificeerd product slecht is, maar de consument heeft geen onafhankelijke verificatie van de prestaties of materiaalveiligheid.",
  },
  {
    question: "Welk keurmerk is het meest relevant voor een osmosefilter?",
    answer:
      "Voor een osmosefilter zijn twee keurmerken ideaal: Kiwa 113 of ACS voor materiaalveiligheid (garandeert geen schadelijke uitloging) en NSF/ANSI 58 voor prestaties (garandeert TDS-reductie en verwijdering van specifieke contaminanten). Samen bieden ze dekking op beide vlakken. Alleen NSF 58 zonder materiaalveiligheidskeurmerk dekt de prestaties maar niet de uitloging van de behuizing.",
  },
  {
    question: "Certifceert NSF ook actieve koolfilters?",
    answer:
      "Ja. NSF/ANSI 42 is de standaard voor esthetische koolfilters (chloor, smaak, geur). NSF/ANSI 53 is van toepassing als gezondheidsrelevante stoffen worden geclaimed, zoals lood, chlooramine of VOCs. Een koolstofblokfilter met NSF 42 is niet automatisch gecertificeerd voor loodverwijdering. Controleer altijd welke specifieke claims het certificaat dekt.",
  },
];

export default function WaterfilterCertificeringPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Drinkwaternormen", url: "https://waterfilterplatform.nl/drinkwaternormen" },
          { name: "Waterfilter certificering", url: "https://waterfilterplatform.nl/drinkwaternormen/waterfilter-certificering" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Waterfilter certificering: NSF, Kiwa en ACS keurmerken uitgelegd",
          description:
            "Waterfilter keurmerken: Kiwa 113 (materiaalveiligheid), NSF/ANSI 42/53/58 (prestaties), ACS (Frans). Wat betekenen ze en welk keurmerk is het belangrijkst?",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/drinkwaternormen/waterfilter-certificering",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwaternormen" className="hover:underline">Drinkwaternormen</Link>
            <span className="mx-2">/</span>
            <span>Waterfilter certificering</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter certificering: NSF, Kiwa en ACS keurmerken uitgelegd
          </h1>
          <QuickAnswer answer="In Nederland is waterfilter-certificering niet wettelijk verplicht, maar keurmerken zijn het enige onafhankelijke bewijs dat een filter doet wat het belooft. Kiwa 113 en ACS testen materiaalveiligheid (geen schadelijke uitloging). NSF/ANSI 42 test smaak- en geurverbetering. NSF/ANSI 53 test gezondheidsrelevante stoffen zoals lood. NSF/ANSI 58 test osmosefilters op TDS-reductie en contaminantverwijdering. Voor een osmosefilter zijn Kiwa 113 plus NSF/ANSI 58 de ideale combinatie." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mt-10 prose prose-blue max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Waarom certificering belangrijk is ondanks geen wettelijke verplichting
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Nederland bestaat geen wettelijk keurmerk dat een waterfilter verplicht moet dragen
            voordat het verkocht mag worden. Dit in tegenstelling tot elektrische apparaten (CE-markering)
            of medische hulpmiddelen. Een fabrikant mag een filter met een willekeurige belofte op de
            markt brengen zonder enige onafhankelijke verificatie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certificering lost dit probleem op. Een gecertificeerd product is getest door een
            onafhankelijk laboratorium op twee essentieel verschillende aspecten: ten eerste of het
            filter geen schadelijke stoffen afgeeft aan het drinkwater (materiaalveiligheid), en ten
            tweede of het filter daadwerkelijk verwijdert wat de fabrikant claimt (prestatiecertificering).
            Zonder deze twee vormen van certificering is de consument volledig afhankelijk van
            verkoopbeloften.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het belang van prestatiecertificering is aanzienlijk. Laboratoriumtests door
            onafhankelijke onderzoekers hebben herhaaldelijk aangetoond dat ongecertificeerde
            filters soms nauwelijks beter presteren dan geen filter, of zelfs contaminanten
            introduceren via het filtermateriaal zelf. Raadpleeg ook onze{" "}
            <Link href="/drinkwaternormen" className="text-[#005F8A] hover:underline font-medium">
              overzichtspagina drinkwaternormen
            </Link>{" "}
            voor de bredere context.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Kiwa 113: de Nederlandse materiaalveiligheidsnorm
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kiwa is een Nederlandse keurings- en certificeringsinstantie die ook actief is in
            waterbehandelingstechnologie. De norm BRL-K113 (kortweg: Kiwa 113) test alle materialen
            die in contact komen met drinkwater op schadelijke uitloging. Dit omvat de filtermembranen,
            behuizing, slangen, koppelingen en afdichtingen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De testprocedure simuleert langdurig contact met drinkwater bij verschillende
            temperaturen en stroomcondities. Het laboratorium meet uitloging van zware metalen
            (lood, cadmium, nikkel, chroom), organische verbindingen, plasticizers en andere
            relevante parameters. Pas als alle uitloogconcentraties onder de vastgestelde
            grenswaarden blijven, ontvangt het product een certificaat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kiwa 113-certificaten worden jaarlijks herbeoordeeld. Bij productwijzigingen moet
            herkeuring plaatsvinden. Het Kiwa-register is openbaar doorzoekbaar via kiwa.com.
            Voor de Belgische en Nederlandse markt is Kiwa 113 de meest directe garantie
            voor materiaalveiligheid.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            NSF/ANSI 42: esthetische verbetering (smaak, geur, chloor)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF International is de Amerikaanse keuringsorganisatie die de meest gebruikte
            internationale waterfilternormen beheert. NSF/ANSI 42 is de standaard voor filters
            die de esthetische eigenschappen van water verbeteren: smaak, geur en het chloride-
            en chloorgehalte.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cruciaal om te begrijpen: NSF 42 is <strong>geen gezondheidsgerelateerde certificering</strong>.
            Een filter met uitsluitend NSF 42 is niet gecertificeerd voor de verwijdering van lood,
            arseen, pesticiden of andere gezondheidsrelevante stoffen. Veel betaalbare koolfilters
            en filterkannen dragen NSF 42 als enige keurmerk. Dit betekent dat ze de chloor- en
            smaakverheffing bewijsbaar leveren, maar niets over hun prestatites bij zwaardere
            contaminanten.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            NSF/ANSI 53: gezondheidsrelevante contaminanten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 53 is de norm die werkelijk relevant is als u een filter wilt voor
            gezondheidsrisicos. De standaard test verwijdering van een lijst van gezondheidsrelevante
            stoffen, waaronder lood, chlooramine, Cryptosporidium, Giardia, bepaalde pesticiden
            en vluchtige organische verbindingen (VOC's). De exacte claims worden per product
            gecertificeerd: een fabrikant kan NSF 53 behalen voor loodverwijdering zonder
            gecertificeerd te zijn voor alle andere NSF 53-claims.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Controleer bij aankoop altijd welke specifieke stoffen het NSF 53-certificaat dekt.
            Dit is zichtbaar in de NSF-productdatabank op nsf.org. Een filter met NSF 53 "voor
            lood" is niet automatisch gecertificeerd voor pesticidenverwijdering.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            NSF/ANSI 58: de standaard voor omgekeerde osmose
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor osmosefilters is NSF/ANSI 58 de meest relevante prestatiesnorm. De standaard
            specificeert testprotocollen voor complete omgekeerde osmose-systemen en vereist
            minimaal 75% TDS-reductie (Total Dissolved Solids). Het standaard inlaatwater bij
            de test bevat 600 ppm TDS, vergelijkbaar met licht gemineraliseerd leidingwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF 58 test verwijdering van een brede lijst contaminanten die relevant zijn voor
            osmosefilters:{" "}
            <strong>lood, arseen, barium, cadmium, selenium, fluoride, nitraat, nitrite,
            radium 226/228, barium en hexavalent chroom</strong>. Ook de structurele integriteit
            van het membraanhuishouden en de materiaalveiligheid worden getest. Meer informatie
            over het verschil tussen Kiwa 113 en NSF 58 vindt u op onze pagina over{" "}
            <Link href="/drinkwaternormen/kiwa-nsf-ansi" className="text-[#005F8A] hover:underline font-medium">
              Kiwa versus NSF/ANSI 58
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            NSF/ANSI 401: opkomende stoffen, medicijnresten en PFAS
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 401 is de nieuwste standaard, ontwikkeld voor stoffen die in traditionele
            normen ontbraken. Het omvat 15 opkomende contaminanten, waaronder medicijnresten
            (ibuprofen, atenolol, estradiol), pesticiden, DEET, bisfenol A en bepaalde
            industriele verbindingen. NSF 401 is van toepassing op koolstofblokfilters en
            andere point-of-use systemen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor PFAS-verwijdering bestaat nog geen overkoepelende NSF-standaard, maar
            afzonderlijke PFAS-verbindingen worden steeds vaker meegetest onder NSF 58 of
            als additionele claim bij gecertificeerde osmosesystemen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            ACS: het Franse keurmerk erkend in de Benelux
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ACS staat voor Attestation de Conformite Sanitaire. Dit is het Franse equivalent
            van een materiaalveiligheidsnorm voor producten in contact met drinkwater, vergelijkbaar
            met Kiwa 113. De ACS wordt uitgegeven door het Franse ANSES (Agence nationale de securite
            sanitaire) en is wettelijk verplicht in Frankrijk voor alle materialen in contact met
            drinkwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Nederland en Belgie wordt de ACS erkend als bewijs van materiaalveiligheid.
            Voor producten die in meerdere landen worden verkocht, is een ACS-certificaat
            aantrekkelijk omdat het tegelijk de Franse markt opent. Producten met zowel
            ACS als NSF-prestatiecertificering bieden de meest brede dekking voor de
            West-Europese markt.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Overzichtstabel: keurmerken vergeleken
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="border border-gray-300 px-3 py-2 text-left">Keurmerk</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Organisatie</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Wat wordt getest</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Toepasselijk voor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">Kiwa 113</td>
                  <td className="border border-gray-300 px-3 py-2">Kiwa (NL)</td>
                  <td className="border border-gray-300 px-3 py-2">Materiaalveiligheid, uitloging</td>
                  <td className="border border-gray-300 px-3 py-2">Alle watercontactmaterialen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">NSF/ANSI 42</td>
                  <td className="border border-gray-300 px-3 py-2">NSF International (VS)</td>
                  <td className="border border-gray-300 px-3 py-2">Chloor, smaak, geur (esthetisch)</td>
                  <td className="border border-gray-300 px-3 py-2">Koolfilters, filterkannen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">NSF/ANSI 53</td>
                  <td className="border border-gray-300 px-3 py-2">NSF International (VS)</td>
                  <td className="border border-gray-300 px-3 py-2">Lood, chlooramine, pesticiden, VOCs</td>
                  <td className="border border-gray-300 px-3 py-2">Koolstofblokfilters, POU-filters</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">NSF/ANSI 58</td>
                  <td className="border border-gray-300 px-3 py-2">NSF International (VS)</td>
                  <td className="border border-gray-300 px-3 py-2">TDS-reductie, lood, arseen, fluoride, nitraat</td>
                  <td className="border border-gray-300 px-3 py-2">Omgekeerde osmose-systemen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">NSF/ANSI 401</td>
                  <td className="border border-gray-300 px-3 py-2">NSF International (VS)</td>
                  <td className="border border-gray-300 px-3 py-2">Medicijnresten, DEET, bisfenol A</td>
                  <td className="border border-gray-300 px-3 py-2">Koolstofblokfilters, POU-filters</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-2 font-medium">ACS</td>
                  <td className="border border-gray-300 px-3 py-2">ANSES (FR)</td>
                  <td className="border border-gray-300 px-3 py-2">Materiaalveiligheid, uitloging</td>
                  <td className="border border-gray-300 px-3 py-2">Alle watercontactmaterialen (FR/BE/NL)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Hoe controleer ik certificering van een product?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meest betrouwbare verificatiemethode is directe controle in de officiele productdatabanken:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>NSF-databank:</strong> nsf.org/certified-products &mdash; zoek op merknaam,
              modelnummer of certificaatnummer. U ziet exact welke claims gecertificeerd zijn.
            </li>
            <li>
              <strong>Kiwa-register:</strong> kiwa.com/nl/keurmerk/kiwa-keur/ &mdash; doorzoekbaar
              op productnaam en fabrikant.
            </li>
            <li>
              <strong>ACS-verificatie:</strong> Aanvragen bij ANSES of via de fabrikant. Controleer
              of het certificaatnummer overeenkomt met het vermelde product.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Let op: sommige fabrikanten gebruiken NSF-logo's of -verwijzingen op verpakkingen
            zonder dat het product daadwerkelijk gecertificeerd is. Verificatie in de
            productdatabank is de enige betrouwbare controle. Meer details over het verschil
            tussen Kiwa en NSF keurmerken vindt u op onze pagina{" "}
            <Link href="/drinkwaternormen/kiwa-nsf-ansi" className="text-[#005F8A] hover:underline font-medium">
              Kiwa versus NSF/ANSI
            </Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mt-8 mb-4">
            Welk keurmerk heeft prioriteit bij een osmosefilter?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor een osmosefilter zijn twee keurmerken ideaal in combinatie:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Kiwa 113 of ACS</strong> voor materiaalveiligheid: garandeert dat het
              systeem geen schadelijke stoffen uitloogt in het gefilterde water.
            </li>
            <li>
              <strong>NSF/ANSI 58</strong> voor prestaties: garandeert minimaal 75% TDS-reductie
              en verwijdering van de gecertificeerde contaminanten zoals lood en arseen.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als u een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline font-medium">
              osmosefilter wilt kopen
            </Link>
            , controleer dan altijd beide keurmerken. Een osmosefilter met alleen NSF 58 maar
            zonder Kiwa/ACS kan materialen bevatten die schadelijke stoffen afgeven, ook al
            werkt het membraan uitstekend. Een filter met alleen Kiwa 113 maar zonder NSF 58
            geeft geen garantie over de feitelijke filterprestaties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meer informatie over het kiezen van een gecertificeerd{" "}
            <Link href="/waterfilter" className="text-[#005F8A] hover:underline font-medium">
              waterfilter
            </Link>{" "}
            vindt u in onze uitgebreide koopgids.
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
            <Link href="/keurmerken/verificatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keurmerken: verificatie en transparantie</h3>
              <p className="text-sm text-gray-600">Hoe u keurmerk-claims onafhankelijk verifieert via Kiwa, NSF en SGS-laboratorium-databases.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58 osmose keurmerk</h3>
              <p className="text-sm text-gray-600">Wat NSF 58 certificering inhoudt voor osmosefilters en welke verontreinigingen onafhankelijk getest worden.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
