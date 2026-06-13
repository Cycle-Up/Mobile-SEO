import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "BWT vs Grunbeck: welke waterontharder is beter?",
  description:
    "BWT vs Grunbeck waterontharder vergeleken: technologie, zoutverbruik, bediening, service en prijssegment. Welk premium merk past het beste bij jou?",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/bwt-vs-grunbeck" },
  openGraph: {
    title: "BWT vs Grunbeck: welke waterontharder is beter?",
    description:
      "BWT (AQA Perla) vs Grunbeck (softliQ): twee premium ionenwisselaars eerlijk vergeleken op technologie, verbruik, bediening en service.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen BWT en Grunbeck?",
    answer:
      "Beide zijn premium Europese merken die ionenwisselaars met zout maken. BWT is bekend van de AQA Perla-lijn met een duplex-opzet en optionele magnesiumtechnologie voor de smaak. Grunbeck is bekend van de softliQ-serie met een efficiente, proportionele regeneratie en slimme bediening via een app. In de kern doen ze hetzelfde: hardheid verlagen via ionenwisseling. Het verschil zit in regeneratie-efficientie, bediening, service en prijs.",
  },
  {
    question: "Is BWT of Grunbeck zuiniger met zout en water?",
    answer:
      "Beide merken zetten in op zuinige, proportionele regeneratie: er wordt geregenereerd op basis van het werkelijke verbruik in plaats van op een vaste timer. Grunbeck profileert de softliQ-serie sterk op efficientie en monitoring, BWT doet dit met de AQA Perla-besturing. De werkelijke zuinigheid hangt vooral af van het juiste model voor jouw waterhardheid en verbruik; een te groot of te klein toestel verbruikt onnodig veel.",
  },
  {
    question: "Welk merk is duurder, BWT of Grunbeck?",
    answer:
      "Beide zitten in het midden- tot hogere prijssegment. Grunbeck wordt vaak als premium gepositioneerd, BWT heeft een breder aanbod van instap tot hoog. De totale kosten worden bepaald door aanschaf, installatie, jaarlijks zout en onderhoud. Beoordeel altijd de kosten over vijf jaar in plaats van alleen de aanschafprijs, en vraag meerdere offertes.",
  },
  {
    question: "Welke moet ik kiezen?",
    answer:
      "Kies op basis van de juiste capaciteit voor jouw waterhardheid en huishouden, niet op naam. Wil je sterke smaakfocus en een breed servicenetwerk, dan is BWT een logische keuze; wil je maximale regeneratie-efficientie en slimme app-bediening, dan past Grunbeck goed. Vergelijk concrete offertes en bekijk onze koopgids voor de beste waterontharder per situatie.",
  },
];

export default function BwtVsGrunbeckPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "BWT vs Grunbeck", url: "https://waterfilterplatform.nl/vergelijken/bwt-vs-grunbeck" },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: "BWT vs Grunbeck: welke waterontharder is beter?",
          description: "BWT vs Grunbeck waterontharder vergeleken: technologie, zoutverbruik, bediening, service en prijssegment. Welk premium merk past het beste bij jou?",
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: "https://waterfilterplatform.nl/vergelijken/bwt-vs-grunbeck",
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
            <span>BWT vs Grunbeck</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            BWT vs Grunbeck: welke waterontharder is beter?
          </h1>
          <QuickAnswer
            question="BWT of Grunbeck?"
            answer="BWT en Grunbeck zijn beide premium ionenwisselaars met zout. BWT (AQA Perla) profileert zich op smaak (magnesium) en een breed servicenetwerk; Grunbeck (softliQ) op efficiente, proportionele regeneratie en slimme app-bediening. In de kern presteren beide goed - kies op de juiste capaciteit voor jouw waterhardheid en huishouden, niet op merknaam."
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="waterhardheid" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">BWT en Grunbeck in het kort</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <Link href="/bwt-waterontharder" className="text-[#005F8A] hover:underline font-medium">BWT</Link>{" "}
            (Best Water Technology) is een Oostenrijks merk met een breed aanbod ionenwisselaars. De AQA
            Perla-lijn werkt met een duplex-opzet die ook tijdens regeneratie zacht water kan leveren, en
            sommige modellen voegen magnesium toe voor de smaak.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <Link href="/grunbeck-waterontharder" className="text-[#005F8A] hover:underline font-medium">Grunbeck</Link>{" "}
            is een Duits premium-merk. De softliQ-serie staat bekend om een efficiente, proportionele
            regeneratie (op basis van werkelijk verbruik) en bediening via een app. Beide merken zijn in
            de kern ionenwisselaars met zout; lees hoe dat werkt bij{" "}
            <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] hover:underline font-medium">ionenwisseling</Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Vergelijkingstabel</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">BWT (AQA Perla)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Grunbeck (softliQ)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Techniek", "Ionenwisselaar met zout", "Ionenwisselaar met zout"],
                  ["Regeneratie", "Proportioneel, duplex", "Proportioneel, efficientiefocus"],
                  ["Bediening", "Display / besturing", "App en slimme besturing"],
                  ["Smaak", "Optionele magnesiumtechnologie", "Focus op zuiver zacht water"],
                  ["Service in NL/BE", "Breed netwerk", "Premium dealer-netwerk"],
                  ["Prijssegment", "Instap tot hoog", "Midden tot premium"],
                ].map(([eig, b, g], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eig}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{b}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Algemene positionering; geen fabrikantvergoeding. Controleer actuele modellen en specificaties bij de leverancier. Bijgewerkt mei 2026.</p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je BWT?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Je wilt een breed servicenetwerk en keuze van instap tot hoog segment</li>
            <li>Je hecht aan smaak: de magnesiumtechnologie spreekt je aan</li>
            <li>Je wilt een gevestigde naam met ruime onderdelenbeschikbaarheid</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je Grunbeck?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Je wilt maximale regeneratie-efficientie (zuinig met zout en water)</li>
            <li>Je waardeert slimme bediening en monitoring via een app</li>
            <li>Je kiest bewust voor het premium segment</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            Twijfel je nog? Bekijk de bredere{" "}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] hover:underline font-medium">beste waterontharder koopgids</Link>{" "}
            of de algemene{" "}
            <Link href="/vergelijken/waterontharder-vergelijken" className="text-[#005F8A] hover:underline font-medium">waterontharder-vergelijking</Link>.
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
              { label: "BWT waterontharder", href: "/bwt-waterontharder" },
              { label: "Grunbeck waterontharder", href: "/grunbeck-waterontharder" },
              { label: "Beste waterontharder 2026", href: "/beste-waterontharder-2026" },
              { label: "Waterontharders vergelijken", href: "/vergelijken/waterontharder-vergelijken" },
              { label: "Waterontharder", href: "/waterontharder" },
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
          <AffiliateCTA
            destination="waterontharders"
            campaign="waterontharder"
            content="vergelijken-bwt-vs-grunbeck-cta"
            label="Bekijk de waterontharders bij PureAqua"
            title="Een waterontharder uitkiezen?"
            sub="Bekijk het aanbod waterontharders bij onze partner PureAqua."
          />

          <CTABanner context="waterhardheid" />
        </div>
      </div>
    </>
  );
}
