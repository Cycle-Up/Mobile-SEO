import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Wat betekent NSF/ANSI op een waterfilter? (2026)",
  description: "Begrijp de NSF/ANSI-nummers op een waterfilter: 42, 53 en 58 en waarom de stof ertoe doet.",
  alternates: { canonical: 'https://waterfilterplatform.nl/uitleg/nsf-ansi-op-verpakking' },
  openGraph: { title: "Wat betekent NSF/ANSI op een waterfilter? (2026)", description: "Begrijp de NSF/ANSI-nummers op een waterfilter: 42, 53 en 58 en waarom de stof ertoe doet.", url: 'https://waterfilterplatform.nl/uitleg/nsf-ansi-op-verpakking', type: 'article', locale: 'nl_NL' },
};

export default function UitlegNsfAnsiOpVerpakkingPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Wat betekent NSF/ANSI op de verpakking van een filter?", description: "Begrijp de NSF/ANSI-nummers op een waterfilter: 42, 53 en 58 en waarom de stof ertoe doet.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/uitleg/nsf-ansi-op-verpakking' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Uitleg', url: 'https://waterfilterplatform.nl/uitleg' },
        { name: "NSF/ANSI op verpakking", url: 'https://waterfilterplatform.nl/uitleg/nsf-ansi-op-verpakking' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/uitleg" className="hover:text-[#005F8A]">Uitleg</Link>
            <span className="mx-2">/</span>
            <span>NSF/ANSI op verpakking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Wat betekent NSF/ANSI op de verpakking van een filter?</h1>
          <p className="text-gray-600 text-lg">Op waterfilters zie je vaak NSF/ANSI met een nummer. Deze uitleg vertelt wat ze betekenen.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">De nummers</h2>
          <p className="text-gray-700 leading-relaxed mb-3">NSF/ANSI 42 gaat over smaak en esthetiek (zoals chloor), 53 over gezondheidsrelevante stoffen (zoals lood), en 58 specifiek over omgekeerde-osmosesystemen.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Een filter kan aan meerdere normen tegelijk voldoen.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Let op de specifieke stof</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Certificering geldt per stof, niet algemeen. Een filter met NSF/ANSI 53 voor lood is niet automatisch getest op PFAS.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Wantrouw een vermelding NSF zonder nummer en stof; die zegt weinig.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/nsf-ansi-keurmerken', "NSF/ANSI uitgelegd"],
              ['/data/keurmerken', "Keurmerken-register"],
              ['/keurmerken', "Keurmerken"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
