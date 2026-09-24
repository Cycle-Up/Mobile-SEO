import Link from 'next/link';
import { buildShopUrl } from '@/lib/pureaqua.mjs';
import { FOUR_IN_ONE, FOUR_IN_ONE_CRITERIA, FOUR_IN_ONE_VERDICT } from '@/lib/kranen.mjs';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

interface FourInOneRecommendationProps {
  /** UTM-content, meestal "<paginaslug>-aanbeveling". */
  content: string;
}

/**
 * Redactionele keuze voor een Quooker-alternatief met zuiver water: de PureAqua 4-in-1 kraan.
 * Oordeel altijd toegeschreven (FOUR_IN_ONE_VERDICT), met criteria, eerlijke kanttekeningen
 * (geen bruisend water, twee apparaten onder de spoelbak) en disclosure.
 */
export function FourInOneRecommendation({ content }: FourInOneRecommendationProps) {
  const href = buildShopUrl('vierInEen', { campaign: 'kokend-water-kraan', content });
  return (
    <section className="border-2 border-[#005F8A] bg-[#F0F9FF] rounded-2xl p-5 md:p-7 shadow-sm">
      <span className="inline-block bg-[#005F8A] text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
        Onze keuze 2026
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-[#003F5C] mt-3 mb-2">{FOUR_IN_ONE_VERDICT}</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        De {FOUR_IN_ONE.name} geeft {FOUR_IN_ONE.functions}. Het water voor drinken, koelen en heet tappen gaat
        eerst door {FOUR_IN_ONE.filtration}.
      </p>
      <p className="font-semibold text-gray-800 text-sm mb-2">Waarom dit onze keuze is:</p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
        {FOUR_IN_ONE_CRITERIA.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 mb-5">
        <strong>Goed om te weten:</strong> bruisend water zit er niet op; zoek je dat, kijk dan naar een Quooker CUBE of
        Grohe Blue. Onder de spoelbak komen {FOUR_IN_ONE.underSink}. Heet water is circa 96 graden, niet 100.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={href}
          rel="sponsored"
          className="inline-flex justify-center items-center bg-[#005F8A] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors"
        >
          Bekijk de 4-in-1 kraan bij PureAqua
        </a>
        <Link href={FOUR_IN_ONE.reviewPath} className="text-sm text-[#005F8A] underline hover:no-underline">
          Alles over de 4-in-1 kraan
        </Link>
      </div>
      <AffiliateDisclosure className="mt-4" />
    </section>
  );
}
