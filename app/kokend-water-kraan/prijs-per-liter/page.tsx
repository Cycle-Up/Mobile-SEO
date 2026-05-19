import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Kokend water kraan kosten per liter: berekening en vergelijking",
  description:
    "Kokend water kraan kosten per liter: energie, filters en aanschafamortisatie = 0,08-0,20 euro/liter. Vergelijking met waterkoker en flessenwater.",
  alternates: { canonical: "https://waterfilterplatform.nl/kokend-water-kraan/prijs-per-liter" },
  openGraph: {
    title: "Kokend water kraan kosten per liter: berekening en vergelijking",
    description:
      "Kokend water kraan kosten per liter: energie, filters en aanschafamortisatie = 0,08-0,20 euro/liter. Vergelijking met waterkoker en flessenwater.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Wat zijn de totale kosten per liter van een kokend water kraan?",
    answer:
      "De totale kosten bedragen 0,08-0,20 euro per liter kokend water, inclusief aanschafamortisatie over 10 jaar, installatie, energie en jaarlijks filteronderhoud. Een premium model als de Quooker zit aan de bovenkant van deze range.",
  },
  {
    question: "Hoeveel kost een waterkoker per liter vergeleken met een kokendwaterkraan?",
    answer:
      "Een elektrische waterkoker kost 0,03-0,06 euro per liter omdat je alleen energiekosten hebt (geen aanschafamortisatie na terugverdientijd). Een kokendwaterkraan kost 0,08-0,20 euro per liter maar biedt instant beschikbaarheid zonder wachttijd van 2-4 minuten.",
  },
  {
    question: "Hoe bereken ik de aanschafkosten per liter van een Quooker?",
    answer:
      "Quooker aanschafprijs circa 1.800 euro, gedeeld door 10 jaar levensduur, gedeeld door 365 dagen, gedeeld door gemiddeld 4 liter gebruik per dag = 0,123 euro per liter. Dit is de amortisatie-component van de kostprijs.",
  },
  {
    question: "Wat zijn de energiekosten per liter van een kokendwaterkraan?",
    answer:
      "Energiekosten bestaan uit twee delen: het tappen zelf (0,013 kWh/L x 0,30 euro/kWh = 0,004 euro/liter) en de stand-by warmhouding (circa 0,027 euro/dag bij 10W boiler, gedeeld door 4 liter/dag = 0,007 euro/liter). Totaal energiekosten: circa 0,011 euro per liter.",
  },
  {
    question: "Wat kosten filters en onderhoud per liter?",
    answer:
      "Jaarlijkse filter- en onderhoudskosten bedragen 50-100 euro. Bij 4 liter gebruik per dag (1.460 liter/jaar) betekent dit 0,034-0,068 euro per liter. Dit is na energiekosten de grootste kostpost voor een kokendwaterkraan.",
  },
  {
    question: "Wanneer is een kokendwaterkraan kostenefficienter dan een waterkoker?",
    answer:
      "Een kokendwaterkraan is kostenefficienter dan flessenwater al vanaf het eerste gebruik. Ten opzichte van een waterkoker speelt tijdwaarde en gebruiksgemak de hoofdrol: bij meer dan 4 liter per dag daalt de kosten per liter en weegt de tijdsbesparing (geen 2-4 minuten wachten) steeds zwaarder mee.",
  },
  {
    question: "Wat is het break-even punt versus een waterkoker?",
    answer:
      "Een eenvoudige waterkoker kost circa 30-60 euro. Een kokendwaterkraan kost 800-2.500 euro inclusief installatie. Het financiele break-even punt ligt op basis van pure euro-kosten per liter nooit in het voordeel van de kokendwaterkraan. De meerwaarde zit in gemak, snelheid en bij een 4-in-1 model ook in gefiltreerd osmosewater.",
  },
  {
    question: "Zijn de kosten per liter lager bij een 4-in-1 kraan met osmosefilter?",
    answer:
      "Bij een PureAqua of vergelijkbaar 4-in-1 systeem liggen de kosten per liter iets hoger (0,12-0,20 euro) vanwege het osmosemembraan en extra filtertrappen. Maar je krijgt er ook puur drinkwater bij inbegrepen. Als je flessenwater (0,40-1,50 euro/liter) vervangt, is de totale besparing aanzienlijk.",
  },
];

export default function KokendWaterKraanPrijsPerLiterPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Kokend water kraan", url: "https://waterfilterplatform.nl/kokend-water-kraan" },
          { name: "Prijs per liter", url: "https://waterfilterplatform.nl/kokend-water-kraan/prijs-per-liter" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: "Kokend water kraan kosten per liter: berekening en vergelijking",
          description:
            "Kokend water kraan kosten per liter: energie, filters en aanschafamortisatie = 0,08-0,20 euro/liter. Vergelijking met waterkoker en flessenwater.",
          datePublished: "2026-05-01",
          url: "https://waterfilterplatform.nl/kokend-water-kraan/prijs-per-liter",
        }}
      />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Prijs per liter</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan kosten per liter: complete berekening
          </h1>
          <QuickAnswer answer="De totale kosten van een kokend water kraan bedragen 0,08-0,20 euro per liter kokend water, inclusief aanschafamortisatie, energie en filteronderhoud. Een waterkoker kost 0,03-0,06 euro per liter, maar een kokendwaterkraan biedt instant beschikbaarheid zonder wachten." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="kokend" />

        <section className="mt-10 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De vijf kostencomponenten</h2>
          <p className="text-gray-700 mb-4">
            Om de werkelijke kosten per liter van een kokendwaterkraan te berekenen, moeten we alle
            componenten meenemen: aanschaf, installatie, energie, filters en onderhoud. Hieronder werken
            we elk onderdeel stap voor stap uit op basis van een Quooker als referentiemodel.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">1. Aanschafkosten (amortisatie)</h3>
          <p className="text-gray-700 mb-4">
            Een Quooker kost circa 1.800 euro inclusief boiler en kraan. Bij een levensduur van 10 jaar,
            365 dagen per jaar en gemiddeld 4 liter gebruik per dag:
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700 mb-4">
            1.800 euro / 10 jaar / 365 dagen / 4 liter = <strong>0,123 euro per liter</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Bij minder dure modellen (vanaf 800 euro) daalt dit naar 0,055 euro per liter. Budget-modellen
            van merken als Quooker-alternatieven kunnen dus aanzienlijk voordeliger zijn in kostprijs.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">2. Installatiekosten</h3>
          <p className="text-gray-700 mb-4">
            Een standaard installateur rekent 200-400 euro voor een kokendwaterkraan. Dit omvat de
            wateraansluiting, afvoer voor condenswater en de elektrische aansluiting. Gedeeld over
            10 jaar en 4 liter per dag:
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700 mb-4">
            300 euro / 10 jaar / 365 dagen / 4 liter = <strong>0,005-0,011 euro per liter</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Installatiekosten zijn dus een relatief klein onderdeel van de totale kostprijs.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">3. Energiekosten</h3>
          <p className="text-gray-700 mb-4">
            Energiekosten bestaan uit twee delen. Het daadwerkelijk tappen van kokend water verbruikt
            energie om water te verwarmen: circa 0,013 kWh per liter. Bij een elektriciteitsprijs van
            0,30 euro per kWh:
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700 mb-4">
            0,013 kWh/L x 0,30 euro/kWh = <strong>0,004 euro per liter</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Daar komt het stand-by verbruik bij: de boiler houdt het water continu warm. Een typische
            boiler verbruikt 10 Watt stand-by, wat neerkomt op 0,24 kWh per dag en circa 0,072 euro per
            dag. Gedeeld door 4 liter gebruik per dag:
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700 mb-4">
            0,072 euro/dag / 4 liter/dag = <strong>0,018 euro per liter (stand-by)</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Totale energiekosten: circa <strong>0,011-0,022 euro per liter</strong> afhankelijk van
            stand-by isolatie en gebruikspatroon.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">4. Onderhoud en filters</h3>
          <p className="text-gray-700 mb-4">
            Jaarlijkse filtervervanging en onderhoud kosten 50-100 euro. Bij 4 liter dagelijks gebruik
            (1.460 liter per jaar):
          </p>
          <p className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-700 mb-4">
            75 euro/jaar / 1.460 liter/jaar = <strong>0,034-0,068 euro per liter</strong>
          </p>
          <p className="text-gray-700 mb-4">
            Dit is na de aanschafamortisatie de grootste terugkerende kostenpost.
          </p>

          <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">5. Totale kosten per liter</h3>
          <p className="text-gray-700 mb-4">
            Optelling van alle componenten bij een Quooker-achtig premium model:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Kostencomponent</th>
                  <th className="p-3 text-right">Euro per liter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Aanschafamortisatie</td>
                  <td className="p-3 text-right text-gray-700">0,055-0,123</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Installatie</td>
                  <td className="p-3 text-right text-gray-700">0,005-0,011</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Energie (tappen + stand-by)</td>
                  <td className="p-3 text-right text-gray-700">0,011-0,022</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Onderhoud en filters</td>
                  <td className="p-3 text-right text-gray-700">0,034-0,068</td>
                </tr>
                <tr className="bg-[#E0F2FE] font-semibold">
                  <td className="p-3 text-[#003F5C]">Totaal</td>
                  <td className="p-3 text-right text-[#003F5C]">0,08-0,20 euro/liter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Vergelijkingstabel: kosten per liter per methode</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Methode</th>
                  <th className="p-3 text-right">Kosten per liter</th>
                  <th className="p-3 text-right">Wachttijd</th>
                  <th className="p-3 text-center">Instant</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Waterkoker (elektrisch)</td>
                  <td className="p-3 text-right text-gray-700">0,03-0,06 euro</td>
                  <td className="p-3 text-right text-gray-700">2-4 min</td>
                  <td className="p-3 text-center text-gray-700">Nee</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Gasbrander + pan</td>
                  <td className="p-3 text-right text-gray-700">0,02-0,04 euro</td>
                  <td className="p-3 text-right text-gray-700">5-8 min</td>
                  <td className="p-3 text-center text-gray-700">Nee</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Kokendwaterkraan (basis)</td>
                  <td className="p-3 text-right text-gray-700">0,08-0,12 euro</td>
                  <td className="p-3 text-right text-gray-700">0 sec</td>
                  <td className="p-3 text-center text-gray-700">Ja</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3 text-gray-700">Kokendwaterkraan + RO (PureAqua)</td>
                  <td className="p-3 text-right text-gray-700">0,12-0,20 euro</td>
                  <td className="p-3 text-right text-gray-700">0 sec</td>
                  <td className="p-3 text-center text-gray-700">Ja</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 text-gray-700">Flessenwater (mineraalwater)</td>
                  <td className="p-3 text-right text-gray-700">0,40-1,50 euro</td>
                  <td className="p-3 text-right text-gray-700">0 sec</td>
                  <td className="p-3 text-center text-gray-700">Ja</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Wanneer is een kokendwaterkraan kostenefficient?</h2>
          <p className="text-gray-700 mb-4">
            De kosten per liter van een kokendwaterkraan zijn hoger dan die van een waterkoker. Toch zijn
            er situaties waarin een kokendwaterkraan financieel aantrekkelijk wordt:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Hoog gebruik (4+ liter per dag):</strong> Hoe meer je gebruikt, hoe lager de
              amortisatiekosten per liter dalen. Bij 8 liter per dag halveert de aanschafcomponent.
            </li>
            <li>
              <strong>Tijdwaarde:</strong> De 2-4 minuten wachttijd bij een waterkoker telt op. Bij
              5 gebruik-momenten per dag bespaart een kokendwaterkraan 10-20 minuten, wat voor drukke
              huishoudens of kantooromgevingen reele waarde heeft.
            </li>
            <li>
              <strong>Kantoor en horeca:</strong> Bij meerdere gebruikers per dag dalen de kosten per
              liter snel. Een kantoor dat 20 liter per dag tappt betaalt per liter minder dan de helft
              van een thuisgebruiker.
            </li>
            <li>
              <strong>Vervanging flessenwater:</strong> Wie dagelijks flessenwater koopt (0,40-1,50
              euro/liter), bespaart direct vanaf dag 1 met zelfs een premium kokendwaterkraan.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Break-even punt versus een waterkoker</h2>
          <p className="text-gray-700 mb-4">
            Op pure euro-kosten per liter haal je het break-even punt ten opzichte van een waterkoker
            niet terug. De investering in een kokendwaterkraan is hoger en de kosten per liter blijven
            hoger dan bij een eenvoudige waterkoker.
          </p>
          <p className="text-gray-700 mb-4">
            Dat verandert wanneer je de tijdwaarde meerekent: bij 5 minuten bespaard wachttijd per dag
            over 10 jaar is dat ruim 300 uur. Of wanneer je de vergelijking maakt met flessenwater: een
            gezin dat 2 liter flessenwater per dag koopt (circa 0,70 euro/liter = 511 euro/jaar) verdient
            een kokendwaterkraan van 1.500 euro inclusief installatie terug in circa 3 jaar.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">PureAqua 4-in-1: osmosewater inbegrepen</h2>
          <p className="text-gray-700 mb-4">
            Bij een 4-in-1 kraan zoals de PureAqua-serie zijn kokend water en osmosefiltratie gecombineerd.
            De kosten per liter liggen met 0,12-0,20 euro iets hoger, maar je krijgt er ook puur
            drinkwater bij. Als je het osmosewater meerekent als vervanging van mineraalwater of
            flessenwater, verandert het kostenplaatje significant.
          </p>
          <p className="text-gray-700 mb-4">
            Een PureAqua-systeem produceert zowel kokend water als koud gefilterd osmosewater. Wie
            dagelijks 2 liter flessenwater koopt en 2 liter kokend water gebruikt, kan bij overstap
            naar een 4-in-1 systeem al snel honderden euros per jaar besparen.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Subsidies en btw-voordelen</h2>
          <p className="text-gray-700 mb-4">
            Voor particulieren zijn er momenteel geen directe subsidies op kokendwaterkranen. Wel geldt
            het verlaagd btw-tarief van 9% voor sommige energiebesparende installaties, afhankelijk
            van de gemeente en het type installatie.
          </p>
          <p className="text-gray-700 mb-4">
            Zakelijk gebruik biedt meer voordelen: ondernemers kunnen de aanschaf en installatiekosten
            als bedrijfskosten aftrekken. Bij een kantoor met meerdere medewerkers daalt de netto
            kostprijs na btw-aftrek met 21%.
          </p>

          <h2 className="text-2xl font-bold text-[#003F5C] mb-4 mt-10">Conclusie</h2>
          <p className="text-gray-700 mb-4">
            De totale kosten van een kokendwaterkraan bedragen 0,08-0,20 euro per liter, afhankelijk van
            het model en het dagelijks gebruik. Een waterkoker is goedkoper per liter (0,03-0,06 euro),
            maar biedt niet de instant beschikbaarheid en het gemak van een kokendwaterkraan. Bij hoog
            gebruik, tijdwaarde en vergelijking met flessenwater kan een kokendwaterkraan een
            aantrekkelijke investering zijn.
          </p>
          <p className="text-gray-700 mb-4">
            Bekijk ook de{" "}
            <Link href="/kokend-water-kraan/merken-vergelijking" className="text-[#005F8A] hover:underline">
              merken vergelijking voor kokendwaterkranen
            </Link>{" "}
            of overweeg een{" "}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] hover:underline">
              4-in-1 kraan met omgekeerde osmose
            </Link>{" "}
            voor de combinatie van kokend en gefilterd drinkwater.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kosten per liter</h2>
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
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Budget keuzehulp waterfilter</h3>
              <p className="text-sm text-gray-600">Hoe de kosten per liter van gefilterd water, kokend water en osmosewater zich tot elkaar verhouden.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk verhoogt filterkosten</h3>
              <p className="text-sm text-gray-600">Hoe harde watergebieden meer filteronderhoud vragen en daarmee de prijs per liter beïnvloeden.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
