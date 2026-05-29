import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Quooker vs Selsiuz: welke kokend water kraan is beter?",
  description:
    "Quooker vs Selsiuz vergeleken: prijs, functies, design, filter en onderhoud. Plus wanneer een 4-in-1 osmosekraan een completer alternatief is.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/quooker-vs-selsiuz" },
  openGraph: {
    title: "Quooker vs Selsiuz: welke kokend water kraan is beter?",
    description:
      "Quooker vs Selsiuz: prijs, functies, design en onderhoud eerlijk vergeleken, met de 4-in-1 osmosekraan als alternatief.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen Quooker en Selsiuz?",
    answer:
      "Beide leveren instant kokend water uit een kraan met een boiler onder het aanrecht. Quooker is het bekendste merk in Nederland met het grootste dealer- en servicenetwerk en modules zoals de CUBE voor bruisend en gekoeld water. Selsiuz is een Nederlands merk dat vergelijkbare kokendwaterfunctionaliteit biedt, vaak tegen een iets lagere prijs en met een eigen designlijn. Geen van beide bevat standaard een volwaardig osmosefilter.",
  },
  {
    question: "Is Quooker of Selsiuz goedkoper?",
    answer:
      "Selsiuz ligt qua aanschaf doorgaans iets lager dan Quooker. Een Selsiuz set kost vaak 1.000-1.700 euro, een Quooker Combi 1.500-2.800 euro afhankelijk van model en modules. Quooker heeft daar tegenover een zeer uitgebreid servicenetwerk. Reken altijd de filter-, onderhouds- en energiekosten over meerdere jaren mee.",
  },
  {
    question: "Hebben Quooker en Selsiuz een waterfilter?",
    answer:
      "Beide richten zich primair op kokend water. Quooker biedt optionele scale-control of filterpatronen, Selsiuz heeft geen standaard osmosefilter. Voor water dat ook lood, nitraat, PFAS en microplastics verwijdert, is een 4-in-1 kraan met ingebouwde omgekeerde osmose een completere oplossing.",
  },
  {
    question: "Wat is een alternatief voor zowel Quooker als Selsiuz?",
    answer:
      "Een 4-in-1 kraan met osmosefilter combineert kokend, koud gefilterd, warm en bruisend water in een kraan, inclusief een ingebouwd osmosesysteem. Dat is interessant voor wie naast kokend water ook puur drinkwater en bruisend water wil, vaak voor een lagere totaalprijs dan een vergelijkbare Quooker- of Selsiuz-opstelling met losse modules.",
  },
];

export default function QuookerVsSelsiuzPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Quooker vs Selsiuz", url: "https://waterfilterplatform.nl/vergelijken/quooker-vs-selsiuz" },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:underline">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Quooker vs Selsiuz</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Quooker vs Selsiuz: welke kokend water kraan is beter?
          </h1>
          <QuickAnswer
            question="Quooker of Selsiuz?"
            answer="Quooker en Selsiuz leveren beide instant kokend water. Quooker is marktleider met het grootste servicenetwerk en uitbreidingsmodules; Selsiuz biedt vergelijkbare functies vaak tegen een lagere prijs. Geen van beide heeft standaard een osmosefilter. Wil je ook puur gefilterd en bruisend water, dan is een 4-in-1 osmosekraan een completer alternatief."
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="kokend" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Quooker en Selsiuz in het kort</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Quooker is het bekendste merk kokend water kranen in Nederland, met een breed
            modelaanbod (Combi, Flex, Fusion) en modules zoals de CUBE voor bruisend en gekoeld
            water. Het servicenetwerk en de naamsbekendheid zijn ongeevenaard. Selsiuz is een
            Nederlands merk dat zich richt op strak design en een gunstige prijs-prestatieverhouding,
            met combi-boilers die kokend, koud en warm water leveren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Belangrijk om te weten: beide merken zijn in de kern kokendwaterkranen. Een volwaardig
            osmosefilter dat lood, nitraat, PFAS en microplastics verwijdert, zit er niet standaard
            in. Wie naast kokend water ook de zuiverste drinkwaterkwaliteit wil, kijkt naar een{" "}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline font-medium">omgekeerde osmose</Link>{" "}
            systeem of een 4-in-1 kraan met ingebouwde osmose.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Vergelijkingstabel</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Quooker</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Selsiuz</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">4-in-1 osmosekraan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kokend water", "Ja (100 graden)", "Ja (100 graden)", "Ja (100 graden)"],
                  ["Prijsindicatie", "EUR 1.500-2.800", "EUR 1.000-1.700", "EUR 699-899"],
                  ["Bruisend water", "Met CUBE module", "Niet standaard", "Ja, standaard"],
                  ["Osmosefilter", "Nee (optioneel scale)", "Nee", "Ja, ingebouwd"],
                  ["Servicenetwerk", "Zeer groot", "Beperkter", "Zelf installeerbaar"],
                  ["Design", "Breed aanbod", "Strak, eigen lijn", "Modern, chroom/zwart"],
                ].map(([eig, q, s, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eig}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{q}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{s}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.</p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je Quooker?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Je hecht aan een gevestigde naam met het grootste service- en dealernetwerk</li>
            <li>Je wilt kunnen uitbreiden met modules (CUBE voor bruisend en gekoeld water)</li>
            <li>Je wilt een breed modelaanbod en bewezen betrouwbaarheid</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je Selsiuz?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Je zoekt vergelijkbare kokendwaterfunctionaliteit tegen een lagere prijs</li>
            <li>Je waardeert het strakke design van de Selsiuz-lijn</li>
            <li>Je hebt geen behoefte aan een uitgebreid modulesysteem</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer is een 4-in-1 osmosekraan beter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wil je naast kokend water ook puur gefilterd water en bruisend water uit dezelfde kraan,
            dan biedt een 4-in-1 kraan met osmose het meest complete pakket, meestal voor een lagere
            totaalprijs. Lees meer over{" "}
            <Link href="/selsiuz-alternatief" className="text-[#005F8A] hover:underline font-medium">het Selsiuz alternatief</Link>{" "}
            of bekijk de volledige{" "}
            <Link href="/vergelijken/kokend-water-kraan-merken" className="text-[#005F8A] hover:underline font-medium">merkvergelijking</Link>.
          </p>
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
              { label: "Kokend water kraan", href: "/kokend-water-kraan" },
              { label: "Quooker alternatief", href: "/quooker-alternatief" },
              { label: "Selsiuz alternatief", href: "/selsiuz-alternatief" },
              { label: "Merken vergelijken", href: "/vergelijken/kokend-water-kraan-merken" },
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
          <CTABanner context="kokend" />
        </div>
      </div>
    </>
  );
}
