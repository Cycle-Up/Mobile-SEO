import Link from 'next/link';
import { buildShopUrl } from '@/lib/pureaqua.mjs';
import { THREE_WAY, THREE_WAY_CRITERIA, THREE_WAY_VERDICT, KRAAN_MARKET } from '@/lib/kranen.mjs';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

interface ThreeWayRecommendationProps {
  /** UTM-content, meestal "<paginaslug>-aanbeveling". */
  content: string;
}

/**
 * Redactionele keuze voor osmosewater uit de eigen kraan: een 3-weg zuiver-water-kraan
 * met The Source. Oordeel altijd toegeschreven (THREE_WAY_VERDICT), met criteria,
 * kanttekeningen en disclosure.
 */
export function ThreeWayRecommendation({ content }: ThreeWayRecommendationProps) {
  const href = buildShopUrl('zuiverWaterKranen', { campaign: 'omgekeerde-osmose', content });
  return (
    <section className="border-2 border-[#005F8A] bg-[#F0F9FF] rounded-2xl p-5 md:p-7 shadow-sm">
      <span className="inline-block bg-[#005F8A] text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
        Onze keuze 2026
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-[#003F5C] mt-3 mb-2">{THREE_WAY_VERDICT}</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wil je osmosewater direct uit je keukenkraan, zonder extra tapkraantje ernaast, dan raden wij{' '}
        {THREE_WAY.what} aan. Onderbouw-osmosesystemen kosten doorgaans {KRAAN_MARKET.underSinkRange}; bij PureAqua
        kies je uit {THREE_WAY.tapModels} en stel je zelf je pakket samen.
      </p>
      <p className="font-semibold text-gray-800 text-sm mb-2">Waarom dit onze keuze is:</p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
        {THREE_WAY_CRITERIA.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 mb-5">
        <strong>Goed om te weten:</strong> je hebt ruimte onder het aanrecht en een afvoeraansluiting nodig, en een
        osmosesysteem gebruikt spoelwater (bij The Source circa een liter per liter zuiver water). Mag of wil je niet
        verbouwen, kies dan een{' '}
        <Link href="/countertop-osmose" className="text-[#005F8A] underline">countertop-osmose</Link>.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={href}
          rel="sponsored"
          className="inline-flex justify-center items-center bg-[#005F8A] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors"
        >
          Bekijk de zuiver-water-kranen bij PureAqua
        </a>
        <Link href={THREE_WAY.reviewPath} className="text-sm text-[#005F8A] underline hover:no-underline">
          Lees meer over The Source
        </Link>
      </div>
      <AffiliateDisclosure className="mt-4" />
    </section>
  );
}
