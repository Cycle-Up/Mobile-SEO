import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Alles over waterontharders: 10 vragen beantwoord",
  description: "Waterontharders in tien vragen: werking, zout, onderhoud, gezondheid en kosten, kort en feitelijk beantwoord.",
  alternates: { canonical: 'https://waterfilterplatform.nl/vragen/waterontharders' },
  openGraph: { title: "Alles over waterontharders: 10 vragen beantwoord", description: "Waterontharders in tien vragen: werking, zout, onderhoud, gezondheid en kosten, kort en feitelijk beantwoord.", url: 'https://waterfilterplatform.nl/vragen/waterontharders', type: 'article', locale: 'nl_NL' },
};

const faqItems = [
  { question: "Hoe werkt een waterontharder?", answer: "Een klassieke ontharder gebruikt ionenwisseling: calcium en magnesium worden uitgewisseld tegen natrium, waardoor het water zachter wordt." },
  { question: "Heb ik een waterontharder nodig?", answer: "Dat hangt af van je waterhardheid. Bij hard water (boven ongeveer 14 dH) levert het meer comfort en minder kalkaanslag op." },
  { question: "Hoeveel zout verbruikt een ontharder?", answer: "Het verbruik hangt af van hardheid en waterverbruik. Met de zout-kostencalculator kun je een indicatie voor jouw situatie berekenen." },
  { question: "Is onthard water ongezond door het natrium?", answer: "De toename van natrium is meestal klein, maar bij een natriumbeperkt dieet is voorzichtigheid gepast. Vraag bij twijfel je huisarts." },
  { question: "Kan ik onthard water drinken?", answer: "Meestal wel; veel mensen laten een aparte harde kraan of kookkraan ongehard voor drinkwater. Raadpleeg de handleiding van je systeem." },
  { question: "Wat is het verschil met een waterfilter?", answer: "Een ontharder verlaagt vooral kalk (hardheid); een filter zoals osmose of kool richt zich op verontreinigingen, smaak en geur." },
  { question: "Hoe vaak moet ik zout bijvullen?", answer: "Afhankelijk van model en verbruik, vaak elke paar weken tot maanden. De zout-bijvul-calculator geeft een indicatie." },
  { question: "Verbruikt een ontharder veel stroom of water?", answer: "Het stroomverbruik is doorgaans laag; bij regeneratie wordt wel spoelwater gebruikt. Moderne toestellen regenereren op basis van werkelijk verbruik." },
  { question: "Wat is een alternatief voor een zoutontharder?", answer: "Fysische kalkbehandeling (bijvoorbeeld op elektromagnetische basis) belooft minder aanslag zonder zout, maar verlaagt de hardheid niet echt; de effectiviteit verschilt per situatie." },
];

export default function WateronthardersCluster() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Vragen', url: 'https://waterfilterplatform.nl/vragen' },
        { name: "Waterontharders", url: 'https://waterfilterplatform.nl/vragen/waterontharders' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vragen" className="hover:text-[#005F8A]">Vragen</Link>
            <span className="mx-2">/</span>
            <span>Waterontharders</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Alles over waterontharders in tien vragen</h1>
          <p className="text-gray-600 text-lg">De belangrijkste vragen over waterontharders, beknopt beantwoord.</p>
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
              ['/beste-waterontharder-2026', "Beste waterontharder 2026"],
              ['/waterhardheid', "Waterhardheid per gemeente"],
              ['/hulpmiddelen/zout-kosten', "Zout-kostencalculator"],
              ['/kennisbank/waterontharder-stroom-verbruik', "Stroomverbruik ontharder"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
