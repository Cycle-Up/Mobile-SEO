import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: "Trends in waterfilters 2026: tankless en efficienter",
  description: "Feitelijk trendoverzicht van waterfilters: tankless osmose, lagere afvalwaterverhoudingen en efficientere membranen.",
  alternates: { canonical: 'https://waterfilterplatform.nl/rapporten/trends-waterfilters' },
  openGraph: { title: "Trends in waterfilters 2026: tankless en efficienter", description: "Feitelijk trendoverzicht van waterfilters: tankless osmose, lagere afvalwaterverhoudingen en efficientere membranen.", url: 'https://waterfilterplatform.nl/rapporten/trends-waterfilters', type: 'article', locale: 'nl_NL' },
};

export default function RapportenTrendsWaterfiltersPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{ title: "Trends in waterfilters: wat is er nieuw?", description: "Feitelijk trendoverzicht van waterfilters: tankless osmose, lagere afvalwaterverhoudingen en efficientere membranen.", datePublished: '2026-06-03', dateModified: '2026-06-03', url: 'https://waterfilterplatform.nl/rapporten/trends-waterfilters' }} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Rapporten', url: 'https://waterfilterplatform.nl/rapporten' },
        { name: "Trends waterfilters", url: 'https://waterfilterplatform.nl/rapporten/trends-waterfilters' },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/rapporten" className="hover:text-[#005F8A]">Rapporten</Link>
            <span className="mx-2">/</span>
            <span>Trends waterfilters</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Trends in waterfilters: wat is er nieuw?</h1>
          <p className="text-gray-600 text-lg">De waterfiltertechniek staat niet stil. Dit feitelijke overzicht bespreekt de belangrijkste trends, zonder productclaims.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Tankless osmose</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Doorstroom- (tankless) systemen winnen terrein: ze besparen ruimte en voorkomen stilstaand water, dankzij krachtigere membranen en pompen.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Daar staat tegenover dat ze meestal stroom nodig hebben.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Efficienter met water</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Moderne osmosesystemen halen vaak een afvalwaterverhouding van ongeveer 1:1 of beter, waar oudere systemen meer water verspilden.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Een gunstige verhouding verlaagt het waterverbruik merkbaar.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat blijft</h2>
          <p className="text-gray-700 leading-relaxed mb-3">De kern blijft: het membraan bepaalt de zuivering, niet de marketing. Let bij aanschaf op gecertificeerde prestaties en de afvalwaterverhouding.</p>
          <p className="text-gray-700 leading-relaxed mb-3">Deze trends gaan over techniek en gemak, niet over gezondheidsclaims.</p>
        </section>
        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerd</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/kennisbank/tankless-vs-tank-osmose', "Tankless vs tank"],
              ['/omgekeerde-osmose', "Omgekeerde osmose"],
              ['/hulpmiddelen/osmose-afvalwater', "Afvalwater-calculator"],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
