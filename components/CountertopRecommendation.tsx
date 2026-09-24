import Link from 'next/link';
import { buildShopUrl } from '@/lib/pureaqua.mjs';
import { COUNTERTOP, COUNTERTOP_CRITERIA, COUNTERTOP_MARKET, COUNTERTOP_VERDICT } from '@/lib/countertop.mjs';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

interface CountertopRecommendationProps {
  /** UTM-content, meestal "<paginaslug>-aanbeveling". */
  content: string;
}

/**
 * Redactionele keuze voor het PureAqua Water zuiver apparaat, met criteria,
 * marktvergelijking, eerlijke kanttekeningen en disclosure. Het oordeel "beste" is
 * altijd toegeschreven aan het platform (COUNTERTOP_VERDICT).
 */
export function CountertopRecommendation({ content }: CountertopRecommendationProps) {
  const href = buildShopUrl('countertopRo', { campaign: 'countertop', content });
  const cmp = COUNTERTOP_MARKET.comparable;
  return (
    <section className="border-2 border-[#005F8A] bg-[#F0F9FF] rounded-2xl p-5 md:p-7 shadow-sm">
      <span className="inline-block bg-[#005F8A] text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
        Onze keuze 2026
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-[#003F5C] mt-3 mb-2">{COUNTERTOP_VERDICT}</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wil je osmosewater zonder installatie, bijvoorbeeld in een huurwoning of appartement, dan raden wij het{' '}
        {COUNTERTOP.name} aan. Het filtert met omgekeerde osmose, voegt daarna mineralen toe en verwarmt in zes
        standen tot {COUNTERTOP.maxTemp}. Het kost {COUNTERTOP.price}; een {cmp.name} kost {cmp.price} ({cmp.note}).
      </p>
      <p className="font-semibold text-gray-800 text-sm mb-2">Waarom dit onze keuze is:</p>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
        {COUNTERTOP_CRITERIA.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 mb-5">
        <strong>Goed om te weten:</strong> je vult de ruwwatertank met de hand, het apparaat neemt aanrechtruimte in
        (circa 30 x 22 x 35 cm) en het maximum is {COUNTERTOP.maxTemp}, dus heet maar niet kokend. Vervang het filter
        uiterlijk na 1.200 liter of 12 maanden. Wil je gefilterd water rechtstreeks uit de kraan voor een groot
        huishouden, dan past een osmosesysteem onder het aanrecht beter.
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={href}
          rel="sponsored"
          className="inline-flex justify-center items-center bg-[#005F8A] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#003F5C] transition-colors"
        >
          Bekijk het Water zuiver apparaat bij PureAqua
        </a>
        <Link href={COUNTERTOP.reviewPath} className="text-sm text-[#005F8A] underline hover:no-underline">
          Lees onze volledige countertop-koopgids
        </Link>
      </div>
      <p className="text-xs text-gray-400 mt-4">
        Prijsvergelijking: {cmp.source} ({cmp.name}) en PureAqua, peildatum september 2026.
      </p>
      <AffiliateDisclosure className="mt-2" />
    </section>
  );
}
