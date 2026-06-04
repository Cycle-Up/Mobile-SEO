import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Alles over kalk in water: 10 vragen beantwoord",
  description: "Kalk in tien vragen: oorzaak, gevolgen voor apparaten, gezondheid en wat helpt, kort en feitelijk beantwoord.",
  alternates: { canonical: 'https://waterfilterplatform.nl/vragen/kalk' },
  openGraph: { title: "Alles over kalk in water: 10 vragen beantwoord", description: "Kalk in tien vragen: oorzaak, gevolgen voor apparaten, gezondheid en wat helpt, kort en feitelijk beantwoord.", url: 'https://waterfilterplatform.nl/vragen/kalk', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Wat is kalk in water?", answer: "Kalkaanslag ontstaat door calcium en magnesium in hard water; bij verwarming slaat het neer als vaste kalk." },
  { question: "Waarom heb ik veel kalkaanslag?", answer: "Hoe harder het water (meer calcium en magnesium), hoe sneller kalk neerslaat, vooral op verwarmingselementen en kranen." },
  { question: "Is kalk in drinkwater ongezond?", answer: "Nee, kalk (calcium en magnesium) is niet schadelijk om te drinken; het is vooral een praktisch ongemak." },
  { question: "Hoe voorkom ik kalkaanslag?", answer: "Door de hardheid te verlagen met een ontharder, of door regelmatig te ontkalken en lager te stoken op verwarmingselementen." },
  { question: "Beschadigt kalk mijn apparaten?", answer: "Kalk vermindert de efficientie van boilers, wasmachines en koffiezetapparaten en verkort hun levensduur als je niet ontkalkt." },
  { question: "Hoe vaak moet ik ontkalken?", answer: "Afhankelijk van hardheid en gebruik; in hardwatergebieden vaak elke 1 tot 3 maanden voor kleine apparaten." },
  { question: "Helpt een waterontharder tegen kalk?", answer: "Ja, een ionenwisselaar verlaagt de hardheid en daarmee de kalkaanslag aanzienlijk." },
  { question: "Werken magnetische of elektronische kalkbestrijders?", answer: "Ze veranderen het kristalgedrag van kalk zonder de hardheid te verlagen; de gerapporteerde effectiviteit verschilt sterk per situatie." },
  { question: "Wat is het verschil tussen kalk en hardheid?", answer: "Hardheid is de hoeveelheid calcium en magnesium in het water; kalkaanslag is de vaste neerslag die daaruit ontstaat bij verwarming of verdamping." },
];

export default function KalkCluster() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Vragen', url: 'https://waterfilterplatform.nl/vragen' },
        { name: "Kalk", url: 'https://waterfilterplatform.nl/vragen/kalk' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vragen" className="hover:text-[#005F8A]">Vragen</Link>
            <span className="mx-2">/</span>
            <span>Kalk</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Alles over kalk in tien vragen</h1>
          <p className="text-gray-600 text-lg">De meestgestelde vragen over kalk en hard water, beknopt beantwoord.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="space-y-3">
          {faqItems.map(item => (
            <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{item.question}<span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span></summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/waterhardheid', "Waterhardheid per gemeente"],
              ['/kalk-en-apparaten', "Kalk en apparaten"],
              ['/hulpmiddelen/kalkrisico', "Kalkrisico-calculator"],
              ['/uitleg/hardheidsklassen', "Hardheidsklassen"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
