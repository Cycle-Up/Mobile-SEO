import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Is gefilterd water beter dan kraanwater? (2026)",
  description: "Kort antwoord: niet per definitie veiliger, wel anders qua smaak en samenstelling.",
  alternates: { canonical: 'https://waterfilterplatform.nl/antwoorden/gefilterd-water-beter' },
  openGraph: { title: "Is gefilterd water beter dan kraanwater? (2026)", description: "Kort antwoord: niet per definitie veiliger, wel anders qua smaak en samenstelling.", url: 'https://waterfilterplatform.nl/antwoorden/gefilterd-water-beter', type: 'article', locale: 'nl_NL' },
};

export default function GefilterdWaterBeterCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: "Gefilterd beter?", url: 'https://waterfilterplatform.nl/antwoorden/gefilterd-water-beter' },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: "Is gefilterd water beter dan kraanwater?", answer: "Niet per definitie. Nederlands kraanwater is al veilig en streng gecontroleerd. Gefilterd water kan wel prettiger smaken (minder chloor), kalkvrij zijn of specifieke stoffen verwijderen. Of het beter is, hangt af van je doel; voor pure veiligheid is filteren meestal niet nodig.", url: 'https://waterfilterplatform.nl/antwoorden/gefilterd-water-beter' }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Gefilterd beter?</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Is gefilterd water beter dan kraanwater?</h1>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            Niet per definitie. Nederlands kraanwater is al veilig en streng gecontroleerd. Gefilterd water kan wel prettiger smaken (minder chloor), kalkvrij zijn of specifieke stoffen verwijderen. Of het beter is, hangt af van je doel; voor pure veiligheid is filteren meestal niet nodig.
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
        <p className="text-gray-700 leading-relaxed mb-3">Voor smaak en kalk kan een filter een merkbaar verschil maken; voor veiligheid zelden.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Mineraalarm gefilterd water is niet automatisch gezonder; mineralen komen vooral uit voeding.</p>
        <p className="text-gray-700 leading-relaxed mb-3">Bepaal je doel (smaak, kalk, specifieke stof) en kies daarop.</p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/vergelijken/kraanwater-vs-flessenwater', "Kraanwater vs flessenwater"],
              ['/keuzehulp', "Keuzehulp"],
              ['/kennisbank/mineraalarm-water-langdurig', "Mineraalarm water"],
              ['/antwoorden', "Alle antwoorden"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
