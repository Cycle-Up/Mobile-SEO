import type { Metadata } from 'next';
import Link from 'next/link';
import { gemeenten } from '@/data/gemeenten';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterhardheid per gemeente in Nederland — 2026 overzicht',
  description:
    'Hoe hard is het water in jouw gemeente? Bekijk de waterhardheid (°dH) voor alle Nederlandse gemeenten en wat dat betekent voor jouw waterfilter.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterhardheid' },
};

const provincies = [...new Set(gemeenten.map(g => g.provincie))].sort();

export default function WaterhardheidPage() {
  const hardeGemeenten = gemeenten.filter(g => g.hardheid >= 16).sort((a, b) => b.hardheid - a.hardheid).slice(0, 10);
  const zachteGemeenten = gemeenten.filter(g => g.hardheid < 8).sort((a, b) => a.hardheid - b.hardheid).slice(0, 10);

  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterhardheid', url: 'https://waterfilterplatform.nl/waterhardheid' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Waterhardheid</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid per gemeente
          </h1>
          <p className="text-gray-600 text-lg">
            De waterhardheid verschilt sterk per regio in Nederland. Zoek jouw gemeente op en lees wat de hardheid betekent voor kalk, je apparaten en de keuze voor een waterfilter.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* Hardheid uitleg */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat betekent waterhardheid?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-sm mb-4">
            {[
              { label: 'Zacht', range: '< 4°dH', kleur: 'bg-green-100 text-green-800' },
              { label: 'Matig', range: '4-8°dH', kleur: 'bg-lime-100 text-lime-800' },
              { label: 'Matig hard', range: '8-12°dH', kleur: 'bg-amber-100 text-amber-800' },
              { label: 'Hard', range: '12-18°dH', kleur: 'bg-orange-100 text-orange-800' },
              { label: 'Zeer hard', range: '> 18°dH', kleur: 'bg-red-100 text-red-800' },
            ].map(h => (
              <div key={h.label} className={`${h.kleur} rounded-xl p-2`}>
                <p className="font-semibold">{h.label}</p>
                <p className="text-xs">{h.range}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Hard water bevat veel kalk (calcium en magnesium). Dit veroorzaakt aanslag op ketels, koffiezetapparaten en kranen. Een omgekeerde osmose filter verwijdert nagenoeg alle kalk.
          </p>
        </section>

        {/* Hardste en zachtste gemeenten */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Hardste gemeenten</h2>
            <div className="space-y-2">
              {hardeGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/waterhardheid/${g.slug}`}
                  className="flex items-center justify-between p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
                >
                  <div>
                    <span className="font-medium text-gray-800">{g.naam}</span>
                    <span className="text-xs text-gray-500 ml-2">{g.provincie}</span>
                  </div>
                  <span className="font-bold text-red-700">{g.hardheid}°dH</span>
                </Link>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Zachtste gemeenten</h2>
            <div className="space-y-2">
              {zachteGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/waterhardheid/${g.slug}`}
                  className="flex items-center justify-between p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <div>
                    <span className="font-medium text-gray-800">{g.naam}</span>
                    <span className="text-xs text-gray-500 ml-2">{g.provincie}</span>
                  </div>
                  <span className="font-bold text-green-700">{g.hardheid}°dH</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Alle gemeenten per provincie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Alle gemeenten per provincie</h2>
          <div className="space-y-6">
            {provincies.map(provincie => {
              const pgemeenten = gemeenten.filter(g => g.provincie === provincie).sort((a, b) => a.naam.localeCompare(b.naam));
              return (
                <div key={provincie}>
                  <h3 className="font-bold text-gray-700 mb-2 text-sm uppercase tracking-wide">{provincie}</h3>
                  <div className="flex flex-wrap gap-2">
                    {pgemeenten.map(g => {
                      const kleur =
                        g.categorie === 'zacht' ? 'bg-green-50 text-green-800 border-green-200' :
                        g.categorie === 'matig' ? 'bg-lime-50 text-lime-800 border-lime-200' :
                        g.categorie === 'matig hard' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                        g.categorie === 'hard' ? 'bg-orange-50 text-orange-800 border-orange-200' :
                        'bg-red-50 text-red-800 border-red-200';
                      return (
                        <Link
                          key={g.slug}
                          href={`/waterhardheid/${g.slug}`}
                          className={`text-xs border rounded-full px-3 py-1 hover:shadow-sm transition-shadow ${kleur}`}
                        >
                          {g.naam} ({g.hardheid}°)
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <CTABanner context="waterhardheid" />
      </div>
    </>
  );
}
