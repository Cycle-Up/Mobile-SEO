import type { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CTABanner } from "@/components/CTABanner";
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: "Zoutloze waterontharder vergelijken: TAC, magneet of elektronisch",
  description:
    "Zoutloze waterontharders vergeleken: template-assisted crystallization (TAC), magnetische en elektronische antikalk. Wat werkt echt en wanneer kies je wat?",
  alternates: { canonical: "https://waterfilterplatform.nl/vergelijken/zoutloze-waterontharder-vergelijken" },
  openGraph: {
    title: "Zoutloze waterontharder vergelijken: welke methode werkt?",
    description:
      "TAC vs magnetisch vs elektronisch: de zoutloze antikalk-methodes eerlijk vergeleken op werking, effectiviteit, onderhoud en kosten.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Verlaagt een zoutloze waterontharder de waterhardheid?",
    answer:
      "Nee. Zoutloze systemen (TAC, magnetisch, elektronisch) verlagen de waterhardheid niet: het calcium en magnesium blijven in het water. Ze veranderen alleen de manier waarop kalk neerslaat, zodat het minder hecht aan leidingen en apparaten. Wil je het water echt zachter maken (lagere dH), dan heb je een ionenwisselaar met zout nodig.",
  },
  {
    question: "Welke zoutloze methode werkt het beste?",
    answer:
      "Template-assisted crystallization (TAC) heeft de meeste onderbouwing: het zet opgeloste hardheid om in microkristallen die niet goed aanhechten. Magnetische en elektronische systemen zijn goedkoper en eenvoudig te plaatsen, maar het onafhankelijke bewijs voor de effectiviteit is wisselend en zwakker. Bij zeer hard water (boven 15 dH) presteert geen enkel zoutloos systeem zo goed als een ionenwisselaar.",
  },
  {
    question: "Wat is het verschil tussen TAC en een magneet-ontharder?",
    answer:
      "TAC laat hardheid uitkristalliseren op een speciaal medium (korrels) tot stabiele microkristallen die meelopen met het water zonder aan te hechten. Een magneet- of elektronisch systeem brengt een magnetisch of elektromagnetisch veld aan rond de leiding, met als doel de kristalvorming te beinvloeden. TAC heeft doorgaans een aantoonbaarder en duurzamer effect; magneet/elektronisch is goedkoper maar minder bewezen.",
  },
  {
    question: "Voor wie is een zoutloze waterontharder geschikt?",
    answer:
      "Zoutloos is geschikt als je geen zout wilt of kunt gebruiken, geen afvalwater bij regeneratie wilt, of geen natrium aan het water wilt toevoegen (bijvoorbeeld bij een zoutarm dieet). Het is onderhoudsarm. Maar bij zeer hard water of als je echt zacht water wilt (zachte huid, minder zeepgebruik), blijft een ionenwisselaar met zout effectiever.",
  },
];

export default function ZoutlozeWaterontharderVergelijkenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "https://waterfilterplatform.nl" },
          { name: "Vergelijken", url: "https://waterfilterplatform.nl/vergelijken" },
          { name: "Zoutloze waterontharder vergelijken", url: "https://waterfilterplatform.nl/vergelijken/zoutloze-waterontharder-vergelijken" },
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
            <span>Zoutloze waterontharder vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Zoutloze waterontharder vergelijken: TAC, magneet of elektronisch?
          </h1>
          <QuickAnswer
            question="Welke zoutloze waterontharder werkt het beste?"
            answer="Zoutloze systemen verlagen de hardheid niet; ze verminderen alleen de aanhechting van kalk. Van de methodes heeft template-assisted crystallization (TAC) de meeste onderbouwing, gevolgd door magnetische en elektronische systemen waarvan het bewijs zwakker is. Bij zeer hard water (boven 15 dH) blijft een ionenwisselaar met zout effectiever."
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <CTABanner context="waterhardheid" />

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wat is een zoutloze waterontharder?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een zoutloze waterontharder is strikt genomen geen ontharder maar een antikalk-systeem: het
            verlaagt de waterhardheid (dH) niet, maar verandert hoe kalk neerslaat zodat die minder
            aanhecht aan leidingen, boiler en apparaten. Er komt geen zout of afvalwater aan te pas. Lees
            de algemene uitleg op{" "}
            <Link href="/waterontharder/zoutloos" className="text-[#005F8A] hover:underline font-medium">zoutloze waterontharder</Link>;
            op deze pagina vergelijken we de drie methodes head-to-head.
          </p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">De drie methodes vergeleken</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Eigenschap</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">TAC (kristallisatie)</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Magnetisch</th>
                  <th className="text-left px-4 py-3 font-semibold text-[#003F5C] border border-gray-200">Elektronisch</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Verlaagt hardheid", "Nee", "Nee", "Nee"],
                  ["Effect", "Microkristallen, weinig aanhechting", "Beinvloedt kristalvorming", "Beinvloedt kristalvorming"],
                  ["Onderbouwing", "Het sterkst", "Wisselend/zwak", "Wisselend/zwak"],
                  ["Installatie", "In-line met medium", "Om de leiding", "Om de leiding (spoel)"],
                  ["Onderhoud", "Medium periodiek vervangen", "Vrijwel geen", "Vrijwel geen"],
                  ["Zout/afvalwater", "Geen", "Geen", "Geen"],
                ].map(([eig, t, m, e], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-700 border border-gray-200">{eig}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{t}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{m}</td>
                    <td className="px-4 py-3 text-gray-700 border border-gray-200">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Gebaseerd op algemene literatuur over antikalk-technieken. Effectiviteit varieert per situatie en waterhardheid. Bijgewerkt mei 2026.</p>

          <h2 className="text-2xl font-bold text-[#005F8A] mt-8 mb-4">Wanneer kies je zoutloos - en wanneer toch zout?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kies een zoutloos systeem (bij voorkeur TAC) als je geen zout of afvalwater wilt, geen
            natrium aan het water wilt toevoegen, of een onderhoudsarme oplossing zoekt bij matig hard
            water. Kies een{" "}
            <Link href="/waterontharder" className="text-[#005F8A] hover:underline font-medium">ionenwisselaar met zout</Link>{" "}
            als je echt zacht water wilt (zachte huid, minder zeep- en wasmiddelgebruik, minder kalk in
            de boiler) of als je water zeer hard is. Voor zuiver drinkwater is een{" "}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] hover:underline font-medium">osmosefilter</Link>{" "}
            een aparte, gerichte keuze.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vergelijk verder in de{" "}
            <Link href="/beste-waterontharder-2026" className="text-[#005F8A] hover:underline font-medium">beste waterontharder koopgids</Link>{" "}
            of bekijk alle{" "}
            <Link href="/vergelijken/waterontharder-vergelijken" className="text-[#005F8A] hover:underline font-medium">waterontharders naast elkaar</Link>.
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
              { label: "Zoutloze waterontharder", href: "/waterontharder/zoutloos" },
              { label: "Elektromagnetische ontharder", href: "/waterontharder/elektromagnetisch" },
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
          <CTABanner context="waterhardheid" />
        </div>
      </div>
    </>
  );
}
