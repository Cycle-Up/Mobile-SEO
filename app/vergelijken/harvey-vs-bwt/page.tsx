import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Harvey vs BWT: non-electric of elektrische waterontharder?",
  description:
    "Harvey vs BWT waterontharder vergeleken: non-electric blokzout twin-tank versus elektrische ionenwisselaar. Verschil in werking, zout, ruimte en onderhoud.",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/harvey-vs-bwt" },
  openGraph: {
    title: "Harvey vs BWT: welke waterontharder past bij jou?",
    description:
      "Harvey (non-electric, blokzout, twin-tank) vs BWT (elektrische ionenwisselaar, zoutkorrels): eerlijk vergeleken op werking, ruimte, zout en onderhoud.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Wat is het verschil tussen Harvey en BWT?",
    answer:
      "Harvey maakt non-electric, compacte twin-cylinder waterontharders die op blokzout werken en zonder stroom continu zacht water leveren. BWT maakt vooral elektrische ionenwisselaars (zoals de AQA Perla) die met zoutkorrels werken en een elektronische besturing hebben. Beide ontharden via ionenwisseling; het verschil zit in de aandrijving (waterdruk vs stroom), het zouttype (blokzout vs korrels), het formaat en de bediening.",
  },
  {
    question: "Is een non-electric waterontharder zoals Harvey beter?",
    answer:
      "Een non-electric systeem heeft voordelen: geen stroom nodig, compact, en twin-tank levert continu zacht water, ook tijdens regeneratie. Nadelen zijn de afhankelijkheid van blokzout (duurder per kilo dan korrelzout en minder breed verkrijgbaar) en de NL-verkrijgbaarheid via importeurs. BWT met korrelzout is goedkoper in zout en heeft een breder servicenetwerk, maar heeft een stroompunt nodig.",
  },
  {
    question: "Welke is goedkoper in gebruik, Harvey of BWT?",
    answer:
      "BWT met korrelzout is doorgaans goedkoper in zoutkosten, want korrelzout is goedkoper en breder verkrijgbaar dan blokzout. Harvey verbruikt geen stroom, wat een klein voordeel is. De totale kosten hangen vooral af van je waterhardheid, verbruik en de aanschaf. Beoordeel de kosten over vijf jaar inclusief zout, stroom en onderhoud.",
  },
  {
    question: "Welke moet ik kiezen?",
    answer:
      "Kies Harvey als je weinig ruimte hebt, geen stroompunt bij de hoofdleiding wilt en continu zacht water belangrijk vindt. Kies BWT als je goedkoper korrelzout wilt, een breed servicenetwerk waardeert en een stroompunt geen probleem is. Bekijk bij twijfel onze koopgids voor de beste waterontharder per situatie.",
  },
];

export default function HarveyVsBwtPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Harvey vs BWT", url: "https://waterfilterplatform.nl/vergelijken/harvey-vs-bwt" },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: "Harvey vs BWT: non-electric of elektrische waterontharder?",
          description: "Harvey vs BWT waterontharder vergeleken: non-electric blokzout twin-tank versus elektrische ionenwisselaar. Verschil in werking, zout, ruimte en onderhoud.",
          datePublished: '2026-05-29',
          dateModified: '2026-05-29',
          url: "https://waterfilterplatform.nl/vergelijken/harvey-vs-bwt",
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
            <span>Harvey vs BWT</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Harvey vs BWT: non-electric of elektrische waterontharder?
          </h1>
          <QuickAnswer
            question="Harvey of BWT?"
            answer="Harvey is een non-electric, compacte twin-tank waterontharder op blokzout die zonder stroom continu zacht water levert. BWT is een elektrische ionenwisselaar (AQA Perla) op korrelzout met elektronische besturing en een breed servicenetwerk. Kies Harvey bij weinig ruimte of geen stroompunt; kies BWT voor goedkoper korrelzout en ruime service."
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="waterhardheid" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Twee verschillende benaderingen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <Link href="/harvey-waterontharder" className="text-[#005F8A] hover:underline font-medium">Harvey</Link>{" "}
            is een Brits merk dat bekendstaat om non-electric, op waterdruk werkende twin-cylinder
            waterontharders. Ze werken op blokzout, hebben geen stekker nodig en leveren continu zacht
            water doordat de twee cilinders elkaar afwisselen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <Link href="/bwt-waterontharder" className="text-[#005F8A] hover:underline font-medium">BWT</Link>{" "}
            biedt vooral elektrische ionenwisselaars met zoutkorrels, zoals de AQA Perla, met een
            elektronische besturing en een breed servicenetwerk. Beide systemen ontharden via{" "}
            <Link href="/filtertechnieken/ionenwisseling" className="text-[#005F8A] hover:underline font-medium">ionenwisseling</Link>;
            het verschil zit in aandrijving, zouttype en formaat.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Vergelijkingstabel</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Harvey</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">BWT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Aandrijving", "Non-electric (waterdruk)", "Elektrisch (stroompunt nodig)"],
                  ["Opzet", "Twin-cylinder, continu zacht", "Enkel of duplex"],
                  ["Zouttype", "Blokzout", "Zoutkorrels"],
                  ["Formaat", "Compact", "Compact tot groter"],
                  ["Bediening", "Mechanisch, geen timer", "Elektronische besturing"],
                  ["Service in NL", "Via importeurs/dealers", "Breed netwerk"],
                ].map(([eig, h, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eig}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{h}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Algemene positionering; geen fabrikantvergoeding. Controleer actuele specificaties bij de leverancier. Bijgewerkt mei 2026.</p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je Harvey?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Je hebt weinig ruimte of geen stroompunt bij de hoofdleiding</li>
            <li>Je wilt continu zacht water, ook tijdens regeneratie</li>
            <li>Je vindt een onderhoudsarm, mechanisch systeem prettig</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je BWT?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Je wilt goedkoper en breder verkrijgbaar korrelzout</li>
            <li>Je waardeert een breed servicenetwerk en elektronische besturing</li>
            <li>Een stroompunt bij de installatie is geen probleem</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-4">
            Wil je ook andere non-electric merken bekijken? Lees over{" "}
            <Link href="/kinetico-waterontharder" className="text-[#005F8A] hover:underline font-medium">Kinetico</Link>,
            of bekijk de bredere{" "}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] hover:underline font-medium">beste waterontharder koopgids</Link>.
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
              { label: "Harvey waterontharder", href: "/harvey-waterontharder" },
              { label: "BWT waterontharder", href: "/bwt-waterontharder" },
              { label: "Kinetico waterontharder", href: "/kinetico-waterontharder" },
              { label: "Beste waterontharder 2026", href: "/beste-waterontharder-2026" },
              { label: "Waterontharders vergelijken", href: "/vergelijken/waterontharder-vergelijken" },
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
          <CTABanner context="waterhardheid" />
        </div>
      </div>
    </>
  );
}
