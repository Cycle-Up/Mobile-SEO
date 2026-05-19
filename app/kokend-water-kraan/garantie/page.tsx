import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Kokend water kraan garantie: wat is gedekt en hoe lang?",
  description:
    "Kokend water kraan garantie: 2-5 jaar fabrieksgarantie. Quooker 2 jaar, PureAqua 3 jaar. Wat is gedekt, verlengde garantie en servicecontract opties.",
  alternates: { canonical: "https://waterfilterplatform.nl/kokend-water-kraan/garantie" },
  openGraph: {
    title: "Kokend water kraan garantie: wat is gedekt en hoe lang?",
    description:
      "Kokend water kraan garantie: 2-5 jaar fabrieksgarantie. Quooker 2 jaar, PureAqua 3 jaar. Wat is gedekt, verlengde garantie en servicecontract opties.",
    type: "website",
  },
};

const merkGaranties = [
  { merk: "Quooker", standaard: "2 jaar", verlengbaar: "Tot 5 jaar (serviceabonnement)" },
  { merk: "Grohe Blue", standaard: "2 jaar", verlengbaar: "Tot 3 jaar" },
  { merk: "Franke Vital", standaard: "2 jaar", verlengbaar: "-" },
  { merk: "PureAqua 4-in-1", standaard: "3 jaar", verlengbaar: "Tot 5 jaar" },
];

const faqItems = [
  {
    question: "Hoe lang is de garantie op een Quooker?",
    answer:
      "Quooker biedt standaard 2 jaar fabrieksgarantie op de kraan en boiler. Via het Quooker CARE serviceabonnement kun je de garantie verlengen tot 5 jaar. Het abonnement dekt ook jaarlijks onderhoud en filterwissels.",
  },
  {
    question: "Wat is het verschil tussen fabrieksgarantie en wettelijke garantie?",
    answer:
      "De wettelijke garantie in Nederland is gebaseerd op BW 7:17 (conformiteitseis) en is aanspreekbaar bij de verkoper zolang het product niet naar behoren functioneert. Fabrieksgarantie is een vrijwillige toezegging van de fabrikant bovenop je wettelijke rechten. Je wettelijke rechten gaan altijd voor.",
  },
  {
    question: "Vervalt de garantie als ik de kraan zelf installeer?",
    answer:
      "Bij de meeste merken geldt: zelf installeren is toegestaan als je het doet conform de installatie-instructies. Schade die aantoonbaar is veroorzaakt door onjuiste installatie valt niet onder de garantie. Voor een optimale garantiedekking laat je de kraan installeren door een erkend installateur.",
  },
  {
    question: "Zijn filters en filterpatronen gedekt door de garantie?",
    answer:
      "Nee. Filterpatronen zijn verbruiksartikelen en vallen nooit onder de fabrieksgarantie. De garantie dekt het apparaat zelf: de kraan, de boiler en de elektrische onderdelen. Filters vervang je op eigen kosten, doorgaans jaarlijks.",
  },
  {
    question: "Wat dekt de garantie bij een kokend water kraan?",
    answer:
      "De garantie dekt fabricagefouten, materiaalfouten, elektronische defecten en voortijdig falen van het apparaat bij normaal gebruik. Niet gedekt: normale slijtage, kalkaanslag door verwaarlozing, mechanische schade door vallen of stoten, en schade door verkeerde waterdruk.",
  },
  {
    question: "Kan ik de garantie overdragen als ik de kraan tweedehands verkoop?",
    answer:
      "Bij sommige merken, waaronder Quooker, is garantieoverdracht mogelijk via een merkregistratieprogramma. De nieuwe eigenaar neemt dan de resterende garantietermijn over. Controleer altijd de garantievoorwaarden van het specifieke merk.",
  },
  {
    question: "Wat is een servicecontract voor een kokend water kraan?",
    answer:
      "Een servicecontract is een jaarlijks abonnement waarbij de leverancier of fabrikant periodiek onderhoud uitvoert: filterwissel, TDS-controle, inspectie van slangen en aansluitingen. Kosten liggen op 100-200 euro per jaar. Servicecontracten bevatten vaak ook verlengde garantie en prioritaire storingsservice.",
  },
  {
    question: "Heeft de boiler een andere garantie dan de kraan?",
    answer:
      "Ja, bij de meeste merken zijn de garantieperiodes gesplitst. De kraan (behuizing, hendel) heeft doorgaans een langere garantie dan de boiler. Elektronische onderdelen zoals de thermostaat en printplaat vallen onder een aparte termijn. Lees de garantiekaart altijd per component.",
  },
];

export default function KokendWaterKraanGarantiePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Kokend water kraan", url: "https://waterfilterplatform.nl/kokend-water-kraan" },
          { name: "Garantie", url: "https://waterfilterplatform.nl/kokend-water-kraan/garantie" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Kokend water kraan garantie: duur, dekking en servicecontract",
          description:
            "Garantie op kokend water kranen: merkenoverzicht, wat is gedekt, verlengde garantie en servicecontracten.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/kokend-water-kraan/garantie",
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Garantie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan garantie: duur, dekking en servicecontract
          </h1>
          <QuickAnswer answer="De garantie op kokend water kranen varieert per merk: Quooker biedt 2 jaar fabrieksgarantie, Grohe en Franke 2-3 jaar, PureAqua 3 jaar. Verlengde garantie tot 5 jaar is beschikbaar via servicecontracten. De garantie dekt fabricagefouten maar niet slijtage of onjuiste installatie." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">

        <section className="bg-gray-50 rounded-2xl p-5 mb-10">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wettelijke-garantie" className="hover:underline">Wettelijke garantie in Nederland</a></li>
            <li><a href="#merken" className="hover:underline">Garantieduur per merk</a></li>
            <li><a href="#gedekt" className="hover:underline">Wat is gedekt?</a></li>
            <li><a href="#niet-gedekt" className="hover:underline">Wat is niet gedekt?</a></li>
            <li><a href="#serviceabonnement" className="hover:underline">Serviceabonnementen</a></li>
            <li><a href="#installateur" className="hover:underline">Effect van installatie op garantie</a></li>
            <li><a href="#boiler" className="hover:underline">Boiler vs kraan vs filter</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="wettelijke-garantie" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wettelijke garantie in Nederland: BW 7:17</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In Nederland geldt voor consumenten de conformiteitsgarantie op grond van Burgerlijk Wetboek Boek 7, artikel 17. Dit bepaalt dat een product moet voldoen aan de redelijke verwachtingen die je op basis van de koopovereenkomst mag hebben. Voor een kokend water kraan, een duurzaam huishoudapparaat, is dat een levensduur van minimaal 5-10 jaar.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De wettelijke garantie geldt jegens de <strong>verkoper</strong>, niet de fabrikant. Meld een defect dus altijd bij de winkel of webshop waar je de kraan hebt gekocht. Bij een defect binnen de redelijke levensduur heb je recht op herstel, vervanging of terugbetaling.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 mb-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Verschil fabrieksgarantie vs wettelijke garantie</h3>
            <ul className="text-sm text-gray-700 space-y-1.5">
              <li><strong>Wettelijke garantie:</strong> aanspreekbaar bij de verkoper, gebaseerd op redelijke levensduur, gaat altijd voor.</li>
              <li><strong>Fabrieksgarantie:</strong> vrijwillige toezegging van de fabrikant, met vaste termijn en eigen voorwaarden. Beperkt je wettelijke rechten nooit.</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Praktisch betekent dit: ook als de fabrieksgarantie verlopen is maar je kraan na drie jaar een fabricagefout vertoont, kun je je beroepen op de conformiteitsgarantie bij de verkoper. De bewijslast verschuift na twaalf maanden naar de consument, maar een aantoonbare fabricagefout blijft aanvechtbaar.
          </p>
        </section>

        <section id="merken" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Garantieduur per merk</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De fabrieksgarantie verschilt aanzienlijk per merk. Hieronder een overzicht van de meest voorkomende merken op de Nederlandse markt:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Merk</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Standaard garantie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Verlengbaar</th>
                </tr>
              </thead>
              <tbody>
                {merkGaranties.map((r, i) => (
                  <tr key={r.merk} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-900">{r.merk}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.standaard}</td>
                    <td className="py-2.5 px-3 text-center text-[#005F8A]">{r.verlengbaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            Quooker is marktleider in Nederland en biedt een CARE-abonnement voor garantieverlenging. PureAqua biedt van huis uit 3 jaar, wat boven het marktgemiddelde ligt. Franke Vital levert 2 jaar zonder verlengingsmogelijkheid via fabriekskanaal.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section id="gedekt" className="mt-10 mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is gedekt door de garantie?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De garantie dekt gebreken die het gevolg zijn van fouten in de productie of het materiaal. Dit zijn gebreken die er al waren ten tijde van aankoop of die optreden door inherente zwakheden van het product.
          </p>
          <div className="space-y-3 mb-4">
            {[
              { titel: "Fabricagefouten", desc: "Scheurvorming in de behuizing, verkeerd gemonteerde onderdelen, loslatende verbindingen die bij normaal gebruik optreden." },
              { titel: "Materiaalfouten", desc: "Vroegtijdige corrosie van metalen onderdelen, defecte kunststof die breekt bij normaal gebruik." },
              { titel: "Elektronische defecten", desc: "Thermostaat die niet correct regelt, printplaat die uitvalt, pomp die stopt bij normaal gebruik binnen de garantietermijn." },
              { titel: "Lekkage door productiefout", desc: "Lekkende aansluitingen of O-ringen die zijn veroorzaakt door een fabrieksafwijking." },
            ].map((item) => (
              <div key={item.titel} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <span className="text-green-600 shrink-0 mt-0.5 text-lg">&#10003;</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.titel}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="niet-gedekt" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is NIET gedekt door de garantie?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste garantieproblemen ontstaan juist door situaties die buiten de dekking vallen. Weet wat je niet kunt claimen:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { titel: "Normale slijtage", desc: "Filterpatronen, afdichtringen en andere onderdelen met een beperkte levensduur zijn verbruiksartikelen. Niet gedekt." },
              { titel: "Kalkaanslag en verwaarlozing", desc: "Geen of te laat onderhoud bij hard water leidt tot kalkaanslag. Dit valt buiten de garantie als onderhoud is verwaarloosd." },
              { titel: "Onjuiste installatie", desc: "Schade door incorrect aansluiten van watertoevoer, verkeerde druk of ontbrekende terugslagklep is niet gedekt." },
              { titel: "Mechanische schade", desc: "Gebroken onderdelen door stoten, vallen of verkeerd gebruik vallen buiten de garantie." },
              { titel: "Filters en filtermedia", desc: "Koolstoffilters, sedimentfilters en osmosemembranen zijn verbruiksartikelen en worden altijd op eigen kosten vervangen." },
              { titel: "Schade door te hoge waterdruk", desc: "De meeste systemen zijn ontworpen voor maximaal 6-7 bar. Overschrijding hiervan valt buiten de garantie." },
            ].map((item) => (
              <div key={item.titel} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <span className="text-red-500 shrink-0 mt-0.5 text-lg">&times;</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.titel}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="serviceabonnement" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Serviceabonnementen: kosten en inhoud</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Serviceabonnementen of onderhoudscontracten zijn jaarlijkse abonnementen waarbij de fabrikant of leverancier periodiek onderhoud uitvoert. Ze bieden ook verlengde garantie en prioritaire storingsservice.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Onderdeel</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Basis (100-150 euro/jaar)</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Plus (150-250 euro/jaar)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { onderdeel: "Jaarlijkse filterwissel", basis: "Ja", plus: "Ja" },
                  { onderdeel: "TDS-controle", basis: "Ja", plus: "Ja" },
                  { onderdeel: "Inspectie slangen en O-ringen", basis: "Ja", plus: "Ja" },
                  { onderdeel: "Voorrang bij storingen", basis: "Nee", plus: "Ja" },
                  { onderdeel: "Voorrijkosten bij service", basis: "Niet inbegrepen", plus: "Inbegrepen" },
                  { onderdeel: "Verlengde garantie", basis: "Tot 3-4 jaar", plus: "Tot 5 jaar" },
                ].map((r, i) => (
                  <tr key={r.onderdeel} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-2.5 px-3 text-gray-800">{r.onderdeel}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.basis}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600">{r.plus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            Voor een Quooker CARE-abonnement betaal je circa 100-180 euro per jaar afhankelijk van het model. Dit omvat jaarlijkse filterwissel, controle van de boiler en verlengde garantie tot 5 jaar. PureAqua biedt vergelijkbare abonnementen met dezelfde dekking.
          </p>
        </section>

        <section id="installateur" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Effect van installatie op garantiedekking</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Of je de kraan zelf installeert of door een erkend installateur laat installeren, heeft directe invloed op je garantiedekking bij sommige merken.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Zelf installeren</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>&#8226; Goedkoper, geen loodgieterkosten</li>
                <li>&#8226; Garantie blijft geldig als correct gedaan</li>
                <li>&#8226; Installatieschade is niet gedekt</li>
                <li>&#8226; Sommige merken eisen erkende installateur voor volledige dekking</li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4 border border-[#005F8A]/20">
              <h3 className="font-semibold text-[#003F5C] mb-2 text-sm">Installatie door erkend installateur</h3>
              <ul className="space-y-1.5 text-sm text-[#003F5C]">
                <li>&#8226; Volledige garantiedekking gegarandeerd</li>
                <li>&#8226; Installatieverklaring als bewijsstuk</li>
                <li>&#8226; Kosten 80-200 euro extra</li>
                <li>&#8226; Aanbevolen bij complexe systemen (4-in-1 met osmose)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            Quooker eist geen erkende installateur voor de standaard garantie, maar Grohe Red raadt officieel installatie door gecertificeerd personeel aan. Bij twijfel: vraag bij aankoop expliciet naar de garantievoorwaarden bij zelfinstallatie.
          </p>
        </section>

        <section id="boiler" className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Boiler, kraan en filter: drie aparte garantieperiodes</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een kokend water kraansysteem bestaat uit minimaal drie onderdelen met elk een eigen garantieperiode. Dit is een veelgemaakte vergissing bij consumenten: de garantie op het systeem is niet uniform.
          </p>
          <div className="space-y-3 mb-4">
            {[
              { component: "Kraan (behuizing, hendel, uitloop)", periode: "2-5 jaar", toelichting: "Langste garantieperiode, mechanisch minst gevoelig onderdeel." },
              { component: "Boiler (verwarmingselement, thermosfles)", periode: "2-3 jaar", toelichting: "Kwetsbaarder voor kalkschade. Onderhoud verlengt de levensduur aanzienlijk." },
              { component: "Elektronische besturing (PCB, thermostaat)", periode: "2 jaar", toelichting: "Wettelijk minimaal 2 jaar. Fabrieken stemmen hier doorgaans op af." },
              { component: "Filterpatronen en osmosemembraan", periode: "Geen garantie", toelichting: "Verbruiksartikelen. Levensduur 6-24 maanden afhankelijk van type." },
            ].map((item) => (
              <div key={item.component} className="border border-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{item.component}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full shrink-0">{item.periode}</span>
                </div>
                <p className="text-sm text-gray-600">{item.toelichting}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Tweedehands kopen: garantieoverdracht</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij tweedehands aankoop van een kokend water kraan vervalt in de meeste gevallen de fabrieksgarantie. De wettelijke garantie geldt enkel bij aankoop van een consument bij een professionele verkoper, niet bij particuliere tweedehands transacties.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Uitzondering: Quooker biedt via hun registratiesysteem een garantieoverdracht aan. De nieuwe eigenaar registreert het serienummer en neemt de resterende garantietermijn over. Controleer bij aankoop altijd of de kraan op jouw naam is geregistreerd en of de boiler recent is onderhouden.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section id="faq" className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over garantie</h2>
          <section className="mt-4">
            {faqItems.map((item, i) => (
              <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
                <p className="mt-2 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </section>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/kokend-water-kraan", label: "Kokend water kraan: overzicht en uitleg" },
              { href: "/kokend-water-kraan/merken-vergelijking", label: "Merken vergelijking kokend water kranen" },
              { href: "/omgekeerde-osmose/kopen", label: "Omgekeerde osmose filter kopen" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering en garantievoorwaarden</h3>
              <p className="text-sm text-gray-600">Hoe CE-certificering en EN 61770 de minimale garantievoorwaarden bepalen en wat fabrikanten wettelijk verplicht zijn.</p>
            </Link>
            <Link href="/onderhoud/kokend-water-kraan-onderhoud" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Onderhoud voor garantiebehoud</h3>
              <p className="text-sm text-gray-600">Welk onderhoud fabrikanten eisen om de garantie geldig te houden: ontkalkingsintervallen en erkende installateurs.</p>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
