import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Grohe Blue vs Grohe Red: wat is het verschil?",
  description:
    "Grohe Blue vs Grohe Red vergeleken: Blue geeft gekoeld en bruisend gefilterd water, Red geeft kokend water. Plus de 4-in-1 osmosekraan die beide combineert.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/grohe-blue-vs-grohe-red" },
  openGraph: {
    title: "Grohe Blue vs Grohe Red: wat is het verschil?",
    description:
      "Grohe Blue (gekoeld/bruisend/gefilterd) vs Grohe Red (kokend) eerlijk vergeleken, met de 4-in-1 osmosekraan als alternatief dat beide combineert.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen Grohe Blue en Grohe Red?",
    answer:
      "De Grohe Blue levert gekoeld, gefilterd en bruisend water via een koolfilter en CO2-cilinder, maar geen kokend water. De Grohe Red levert juist instant kokend water (100 graden), maar geen koeling of bruis. Het zijn dus complementaire producten: Blue voor koud en bruisend, Red voor kokend. Geen van beide bevat een volledig osmosefilter.",
  },
  {
    question: "Kan ik Grohe Blue en Grohe Red combineren?",
    answer:
      "Technisch kun je beide systemen installeren, maar dat betekent twee aparte units en twee keer de kosten en het onderhoud. Wie zowel kokend als gekoeld en bruisend gefilterd water wil, kiest praktischer voor een 4-in-1 kraan met osmose die deze functies in een kraan combineert.",
  },
  {
    question: "Welke filtert beter, Grohe Blue of een osmosesysteem?",
    answer:
      "De Grohe Blue gebruikt een actief-koolfilter dat smaak, geur en chloor verbetert en kalk deels remt. Een omgekeerde-osmosesysteem filtert dieper en verwijdert ook lood, nitraat, PFAS en microplastics. Voor de zuiverste basis voor drink-, kook- en bruiswater is osmose effectiever dan het koolfilter van de Grohe Blue.",
  },
  {
    question: "Wat is een alternatief dat kokend en bruisend water combineert?",
    answer:
      "Een 4-in-1 kraan met osmosefilter levert kokend, koud gefilterd, warm en bruisend water uit een kraan, met osmose die dieper filtert dan een koolpatroon. Dat combineert de functies van Grohe Red en Grohe Blue in een systeem, vaak voor een lagere totaalprijs dan beide Grohe-units samen.",
  },
];

export default function GroheBlueVsGroheRedPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Grohe Blue vs Grohe Red", url: "https://waterfilterplatform.nl/vergelijken/grohe-blue-vs-grohe-red" },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: "Grohe Blue vs Grohe Red: wat is het verschil?",
          description: "Grohe Blue vs Grohe Red vergeleken: Blue geeft gekoeld en bruisend gefilterd water, Red geeft kokend water. Plus de 4-in-1 osmosekraan die beide combineert.",
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: "https://waterfilterplatform.nl/vergelijken/grohe-blue-vs-grohe-red",
        }}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vergelijken" className="hover:underline">Vergelijken</Link>
            <span className="mx-2">/</span>
            <span>Grohe Blue vs Grohe Red</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Blue vs Grohe Red: wat is het verschil?
          </h1>
          <QuickAnswer
            question="Grohe Blue of Grohe Red?"
            answer="De Grohe Blue geeft gekoeld, gefilterd en bruisend water via een koolfilter; de Grohe Red geeft instant kokend water. Het zijn complementaire producten, geen concurrenten. Wil je beide functies plus diepere filtratie in een kraan, dan combineert een 4-in-1 osmosekraan kokend, koud gefilterd en bruisend water - vaak goedkoper dan beide Grohe-units samen."
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="osmose" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Twee verschillende doelen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De namen lijken op elkaar, maar Grohe Blue en Grohe Red doen iets totaal anders. De{" "}
            <strong>Grohe Blue</strong> is gericht op koud genot: gekoeld, gefilterd en bruisend water
            uit de kraan, via een koolfilter en een CO2-cilinder onder het aanrecht. De{" "}
            <strong>Grohe Red</strong> is gericht op warm: instant kokend water op 100 graden via een
            geisoleerd reservoir. Ze zijn dus complementair, niet onderling uitwisselbaar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wie alles wil - kokend, koud gefilterd en bruisend water - zou beide moeten kopen, met
            dubbele aanschaf en onderhoud. Een{" "}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] hover:underline font-medium">omgekeerde osmose</Link>{" "}
            4-in-1 kraan combineert die functies juist in een systeem.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Vergelijkingstabel</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Grohe Blue</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Grohe Red</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">4-in-1 osmosekraan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kokend water", "Nee", "Ja (100 graden)", "Ja (100 graden)"],
                  ["Gekoeld water", "Ja", "Nee", "Koud gefilterd"],
                  ["Bruisend water", "Ja (CO2)", "Nee", "Ja, standaard"],
                  ["Filtratie", "Koolfilter", "Optioneel kalkpatroon", "Omgekeerde osmose"],
                  ["PFAS / lood / nitraat", "Niet effectief", "Niet effectief", "90-99% reductie"],
                  ["Prijsindicatie", "EUR 1.000-2.000", "EUR 1.200-2.000", "EUR 699-899"],
                ].map(([eig, b, r, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eig}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{b}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{r}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.</p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je Grohe Blue?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Je wilt vooral gekoeld en bruisend gefilterd water en geen kokend water</li>
            <li>Je drinkt veel bruiswater en wilt af van plastic flessen</li>
            <li>Smaakverbetering via een koolfilter is voor jou voldoende</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je Grohe Red?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Je wilt vooral instant kokend water voor thee, koken en afwassen</li>
            <li>Gekoeld of bruisend water heb je niet nodig</li>
            <li>Je waardeert het Duitse design en wilt installatie via een dealer</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer is een 4-in-1 osmosekraan logischer?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wil je zowel kokend als koud gefilterd en bruisend water, en bovendien een diepere
            filtratie die lood, nitraat, PFAS en microplastics aanpakt, dan combineert een 4-in-1
            kraan met osmose dat in een systeem. Lees meer over{" "}
            <Link href="/grohe-blue-alternatief" className="text-[#005F8A] hover:underline font-medium">het Grohe Blue alternatief</Link>{" "}
            en{" "}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] hover:underline font-medium">het Grohe Red alternatief</Link>.
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
              { label: "Grohe Blue alternatief", href: "/grohe-blue-alternatief" },
              { label: "Grohe Red alternatief", href: "/grohe-red-alternatief" },
              { label: "Bruisend water", href: "/bruisend-water" },
              { label: "Kokend water kraan", href: "/kokend-water-kraan" },
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
          <CTABanner context="osmose" />
        </div>
      </div>
    </>
  );
}
